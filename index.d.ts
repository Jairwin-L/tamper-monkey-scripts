// base
type URLString = string;

// GM
declare function GM_setClipboard(text: string): any;

declare function GM_addElement(type: 'script', params: {
  src: string,
}): void;

declare function GM_addElement(type: 'script', params: {
  textContent: string,
}): void;

declare module GM_info {
  const script: {
    name: string
    version: string
  }
}

interface IGMInfo {
  script: {
    name: string
    version: string
  }
}

// utils
declare module tampermonkeyScriptsUtils {
  /**
   *
   * @param selector
   * @returns
   */
  function $(selector: string): HTMLElement | HTMLAnchorElement
  function $$(selector: string): Array<HTMLElement | HTMLAnchorElement>

  function sleep(ms: number): Promise<void>
  function wait(ms: number): Promise<void>
  function delay(ms: number): Promise<void>

  function ready(readySentry: string): Promise<[boolean, HTMLElement]>

  function request<T>(url: string, options?: Parameters<typeof fetch>[1]): Promise<T>;

  function createLogger(level: 'log' | 'info' | 'warn' | 'error', GM_info: IGMInfo): typeof console.log
  function generateLabel(GM_info: IGMInfo): string

  function assertUniqueness(elements: any[], msg?: string): boolean

  /**
   *
   * @example
   * extractVersion('https://gw-pre.alipayobjects.com/a/g/memberprod/digital-bank-oc/1.0.84/umi.js')
   * // => '1.0.84'
   */
  function extractVersion(url: URLString): string

  interface IConfirmSettings {
    message?: string;
    /**
     * 默认『确定』
     */
    confirmButtonText?: string;

    /**
     * 默认『取消』
     */
    cancelButtonText?: string;
  }

  interface IAlertSettings {
    title?: string
    level?: 'error' | 'success'
  }

  interface IToastSettings {
    title?: string
    level?: 'success' | 'warning' | 'error'
    timeout?: number
  }

  function toast(msg: string, settings?: IToastSettings): Promise<boolean>;
  function confirm(title: string, settings?: IConfirmSettings): Promise<boolean>
  function alert(message: string, settings?: IAlertSettings): Promise<boolean>
}
