// Module ID: 1003
// Function ID: 10964
// Name: _lazyLoadIntegration
// Dependencies: [5, 1004, 794]
// Exports: lazyLoadIntegration

// Module 1003 (_lazyLoadIntegration)
import asyncGeneratorStep from "asyncGeneratorStep";

async function _lazyLoadIntegration(arg0, arg1, arg2) {
  let element;
  const tmp3 = outer2_0(outer2_1[1]).WINDOW.Sentry || {};
  outer2_0(outer2_1[1]).WINDOW.Sentry = tmp3;
  if (outer2_3[arg0]) {
    if ("function" === typeof tmp4[tmp]) {
      if (!("_isShim" in tmp13)) {
        return tmp13;
      }
    }
    const client = outer2_0(outer2_1[2]).getClient();
    let str4;
    if (null != client) {
      const options = client.getOptions();
      if (null != options) {
        str4 = options.cdnBaseUrl;
      }
    }
    if (!str4) {
      str4 = "https://browser.sentry-cdn.com";
    }
    const _URL = URL;
    const _HermesInternal2 = HermesInternal;
    const str9 = new URL("/" + outer2_0(outer2_1[2]).SDK_VERSION + "/" + tmp2 + ".min.js", str4);
    let str = str9.toString();
    const _document = outer2_0(outer2_1[1]).WINDOW.document;
    element = <script />;
    element.src = str;
    element.crossOrigin = "anonymous";
    element.referrerPolicy = "strict-origin";
    if (arg1) {
      const attr = obj3.setAttribute("nonce", arg1);
    }
    const obj = outer2_0(outer2_1[2]);
    obj3 = element;
    const currentScript = outer2_0(outer2_1[1]).WINDOW.document.currentScript;
    let head = outer2_0(outer2_1[1]).WINDOW.document.body;
    if (!head) {
      head = outer2_0(outer2_1[1]).WINDOW.document.head;
    }
    if (!head) {
      let parentElement;
      if (null != currentScript) {
        parentElement = currentScript.parentElement;
      }
      head = parentElement;
    }
    if (head) {
      obj4.appendChild(element);
      yield promise;
      if ("function" !== typeof tmp4[tmp]) {
        const _Error3 = Error;
        const _HermesInternal4 = HermesInternal;
        const error = new Error("Could not load integration: " + tmp);
        throw error;
      } else {
        return tmp48;
      }
    } else {
      const _Error2 = Error;
      const _HermesInternal3 = HermesInternal;
      const error1 = new Error("Could not find parent element to insert lazy-loaded " + tmp + " script");
      throw error1;
    }
    obj4 = head;
    promise = new Promise((arg0, arg1) => {
      const element = arg0;
      const listener = element.addEventListener("load", () => callback());
      const listener1 = element.addEventListener("error", arg1);
    });
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    str = "Cannot lazy load integration: ";
    const error2 = new Error("Cannot lazy load integration: " + tmp);
    throw error2;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = { replayIntegration: "replay", replayCanvasIntegration: "replay-canvas", feedbackIntegration: "feedback", feedbackModalIntegration: "feedback-modal", feedbackScreenshotIntegration: "feedback-screenshot", captureConsoleIntegration: "captureconsole", contextLinesIntegration: "contextlines", linkedErrorsIntegration: "linkederrors", dedupeIntegration: "dedupe", extraErrorDataIntegration: "extraerrordata", graphqlClientIntegration: "graphqlclient", httpClientIntegration: "httpclient", reportingObserverIntegration: "reportingobserver", rewriteFramesIntegration: "rewriteframes", browserProfilingIntegration: "browserprofiling", moduleMetadataIntegration: "modulemetadata", instrumentAnthropicAiClient: "instrumentanthropicaiclient", instrumentOpenAiClient: "instrumentopenaiclient", instrumentGoogleGenAIClient: "instrumentgooglegenaiclient", instrumentLangGraph: "instrumentlanggraph", createLangChainCallbackHandler: "createlangchaincallbackhandler" };

export const lazyLoadIntegration = function lazyLoadIntegration(arg0, arg1) {
  return _lazyLoadIntegration(...arguments);
};
