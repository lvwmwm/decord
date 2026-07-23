// Module ID: 7549
// Function ID: 60435
// Name: originWhitelistToRegex
// Dependencies: [31, 27, 33, 7550, 7551]
// Exports: defaultRenderError, defaultRenderLoading, useWebWiewLogic

// Module 7549 (originWhitelistToRegex)
import result from "result";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Platform;
let closure_10;
let closure_11;
let closure_2;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
({ useCallback: closure_2, useMemo: closure_3, useRef: closure_4, useState: closure_5 } = result);
({ Linking: closure_6, View: closure_7, ActivityIndicator: closure_8, Text: closure_9, Platform } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let fn = this;
if (this) {
  fn = this.__spreadArray;
}
if (!fn) {
  fn = (arr) => {
    if (arg2) {
      let num3 = 0;
      if (0 < arg1.length) {
        do {
          let tmp4 = !tmp3 && num3 in arg1;
          let tmp5 = tmp3;
          if (!tmp4) {
            let callResult = tmp3;
            if (!tmp3) {
              let _Array = Array;
              callResult = slice.call(arg1, 0, num3);
            }
            callResult[num3] = arg1[num3];
            tmp5 = callResult;
          }
          num3 = num3 + 1;
          tmp3 = tmp5;
          let callResult1 = tmp5;
        } while (num3 < length);
      }
    }
    if (!callResult1) {
      const _Array2 = Array;
      callResult1 = slice2.call(arg1);
    }
    return arr.concat(callResult1);
  };
}
function originWhitelistToRegex(arg0) {
  return "^".concat(importDefault(7550)(arg0).replace(/\\\*/g, ".*"));
}
function createOnShouldStartLoadWithRequest(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const url = nativeEvent.url;
    let items = closure_1;
    if (!closure_1) {
      items = [];
    }
    if ((function passesWhitelist(tmpResult, url) {
      const match = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(url);
      let str = "";
      if (null !== match) {
        str = match[0];
      }
      return tmpResult.some((arg0) => {
        const regExp = new RegExp(arg0);
        return regExp.test(str);
      });
    })(tmpResult.map(outer1_13), url)) {
      let flag = true;
      if (callback) {
        flag = callback(nativeEvent);
      }
    } else {
      const canOpenURLResult = outer1_6.canOpenURL(url);
      outer1_6.canOpenURL(url).then((arg0) => {
        if (arg0) {
          return outer2_6.openURL(url);
        } else {
          const _console = console;
          const concat = "Can't open url: ".concat;
          console.warn("Can't open url: ".concat(url));
        }
      }).catch((arg0) => {
        console.warn("Error opening URL: ", arg0);
      });
      flag = false;
      const nextPromise = outer1_6.canOpenURL(url).then((arg0) => {
        if (arg0) {
          return outer2_6.openURL(url);
        } else {
          const _console = console;
          const concat = "Can't open url: ".concat;
          console.warn("Can't open url: ".concat(url));
        }
      });
    }
    url(flag, url, nativeEvent.lockIdentifier);
  };
}

export const defaultOriginWhitelist = ["http://*", "https://*"];
export { createOnShouldStartLoadWithRequest };
export const defaultRenderLoading = function defaultRenderLoading() {
  return callback(closure_7, { style: importDefault(7551).loadingOrErrorView, children: callback(closure_8, {}) });
};
export const defaultRenderError = function defaultRenderError(arg0, arg1, arg2) {
  let obj = { style: importDefault(7551).loadingOrErrorView };
  obj = { style: importDefault(7551).errorTextTitle, children: "Error loading page" };
  const items = [callback(closure_9, obj), , , ];
  obj = { style: importDefault(7551).errorText, children: "Domain: ".concat(arg0) };
  items[1] = callback(closure_9, obj);
  items[2] = callback(closure_9, { style: importDefault(7551).errorText, children: "Error Code: ".concat(arg1) });
  const obj1 = { style: importDefault(7551).errorText, children: "Error Code: ".concat(arg1) };
  items[3] = callback(closure_9, { style: importDefault(7551).errorText, children: "Description: ".concat(arg2) });
  obj.children = items;
  return callback2(closure_7, obj);
};
export const useWebWiewLogic = function useWebWiewLogic(onNavigationStateChange) {
  onNavigationStateChange = onNavigationStateChange.onNavigationStateChange;
  const onLoadStart = onNavigationStateChange.onLoadStart;
  const onLoad = onNavigationStateChange.onLoad;
  const onLoadProgress = onNavigationStateChange.onLoadProgress;
  const onLoadEnd = onNavigationStateChange.onLoadEnd;
  const onError = onNavigationStateChange.onError;
  const onHttpErrorProp = onNavigationStateChange.onHttpErrorProp;
  const onMessageProp = onNavigationStateChange.onMessageProp;
  const onRenderProcessGoneProp = onNavigationStateChange.onRenderProcessGoneProp;
  const onContentProcessDidTerminateProp = onNavigationStateChange.onContentProcessDidTerminateProp;
  const originWhitelist = onNavigationStateChange.originWhitelist;
  const onShouldStartLoadWithRequestProp = onNavigationStateChange.onShouldStartLoadWithRequestProp;
  const onShouldStartLoadWithRequestCallback = onNavigationStateChange.onShouldStartLoadWithRequestCallback;
  let str = "IDLE";
  if (onNavigationStateChange.startInLoadingState) {
    str = "LOADING";
  }
  const tmpResult = onError(str);
  const originWhitelistToRegex = tmp3;
  const tmp4 = onError(null);
  let closure_14 = tmp4[1];
  let closure_15 = onLoadEnd(null);
  const items = [onNavigationStateChange];
  let tmp5 = onLoad((nativeEvent) => {
    if (null != onNavigationStateChange) {
      onNavigationStateChange(nativeEvent.nativeEvent);
    }
  }, items);
  let closure_16 = tmp5;
  const items1 = [onLoadStart, tmp5];
  const items2 = [onError, onLoadEnd];
  const items3 = [onHttpErrorProp];
  const tmp = onError;
  const tmp6 = onLoad((nativeEvent) => {
    closure_15.current = nativeEvent.nativeEvent.url;
    if (null != onLoadStart) {
      onLoadStart(nativeEvent);
    }
    tmp5(nativeEvent);
  }, items1);
  const items4 = [onRenderProcessGoneProp];
  const tmp7 = onLoad((persist) => {
    persist.persist();
    if (onError) {
      onError(persist);
    } else {
      const _console = console;
      console.warn("Encountered an error loading page", persist.nativeEvent);
    }
    if (null != onLoadEnd) {
      onLoadEnd(persist);
    }
    if (!persist.isDefaultPrevented()) {
      tmp3("ERROR");
      callback(persist.nativeEvent);
    }
  }, items2);
  const items5 = [onContentProcessDidTerminateProp];
  const tmp8 = onLoad((arg0) => {
    if (null != onHttpErrorProp) {
      onHttpErrorProp(arg0);
    }
  }, items3);
  const items6 = [onLoad, onLoadEnd, tmp5];
  const tmp9 = onLoad((arg0) => {
    if (null != onRenderProcessGoneProp) {
      onRenderProcessGoneProp(arg0);
    }
  }, items4);
  const items7 = [onMessageProp];
  const tmp10 = onLoad((arg0) => {
    if (null != onContentProcessDidTerminateProp) {
      onContentProcessDidTerminateProp(arg0);
    }
  }, items5);
  const items8 = [onLoadProgress];
  const tmp11 = onLoad((nativeEvent) => {
    if (null != onLoad) {
      onLoad(nativeEvent);
    }
    if (null != onLoadEnd) {
      onLoadEnd(nativeEvent);
    }
    if (nativeEvent.nativeEvent.url === ref.current) {
      tmp3("IDLE");
      const tmp5 = tmp3;
    }
    tmp5(nativeEvent);
  }, items6);
  const obj = {};
  const items9 = [originWhitelist, onShouldStartLoadWithRequestProp, onShouldStartLoadWithRequestCallback];
  const tmp12 = onLoad((arg0) => {
    if (null != onMessageProp) {
      onMessageProp(arg0);
    }
  }, items7);
  obj.onShouldStartLoadWithRequest = onLoadProgress(() => callback(onShouldStartLoadWithRequestCallback, originWhitelist, onShouldStartLoadWithRequestProp), items9);
  obj.onLoadingStart = tmp6;
  obj.onLoadingProgress = onLoad((nativeEvent) => {
    if (1 === nativeEvent.nativeEvent.progress) {
      tmp3((arg0) => {
        let str = "IDLE";
        if ("LOADING" !== arg0) {
          str = arg0;
        }
        return str;
      });
    }
    if (null != onLoadProgress) {
      onLoadProgress(nativeEvent);
    }
  }, items8);
  obj.onLoadingError = tmp7;
  obj.onLoadingFinish = tmp11;
  obj.onHttpError = tmp8;
  obj.onRenderProcessGone = tmp9;
  obj.onContentProcessDidTerminate = tmp10;
  obj.onMessage = tmp12;
  obj.viewState = tmpResult[0];
  obj.setViewState = tmpResult[1];
  obj.lastErrorEvent = tmp4[0];
  return obj;
};
