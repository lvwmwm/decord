// Module ID: 7532
// Function ID: 60257
// Name: postToNativeWebView
// Dependencies: [284214097]
// Exports: buildIncodeFallbackSessionInjection, buildIncodeParamsInjection, parseIncodeWebViewMessage, postIncodeCaptureComplete, postIncodeFallbackRequest, postIncodeResult, readInjectedIncodeParams

// Module 7532 (postToNativeWebView)
function postToNativeWebView(arg0) {
  if (null != ReactNativeWebView) {
    ReactNativeWebView.postMessage(arg0);
  }
}
const obj = { COMPLETED: "completed", CANCELLED: "cancelled", ERROR: "error" };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/age_assurance/AgeVerificationIncodeWebViewConstants.tsx");

export const AGE_VERIFICATION_INCODE_PATH = "/age-verification/incode";
export const AGE_VERIFICATION_INCODE_PARAMS_KEY = "__DISCORD_AGE_VERIFICATION_INCODE_PARAMS__";
export const AGE_VERIFICATION_INCODE_PARAMS_SCHEMA_VERSION = 2;
export const VERIFICATION_RESULT_EVENT_TYPE = "Verification.Result";
export const VERIFICATION_CAPTURE_COMPLETE_EVENT_TYPE = "Verification.CaptureComplete";
export const VERIFICATION_FALLBACK_REQUEST_EVENT_TYPE = "Verification.FallbackRequest";
export const INCODE_FALLBACK_SESSION_CALLBACK_KEY = "__DISCORD_APPLY_INCODE_FALLBACK_SESSION__";
export const AgeVerificationIncodeResultStatus = obj;
export const readInjectedIncodeParams = function readInjectedIncodeParams() {
  let apiUrl;
  let consentId;
  let interviewId;
  let method;
  let schemaVersion;
  let sessionToken;
  let theme;
  if (null != __DISCORD_AGE_VERIFICATION_INCODE_PARAMS__) {
    if ("object" === typeof __DISCORD_AGE_VERIFICATION_INCODE_PARAMS__) {
      ({ schemaVersion, apiUrl, sessionToken, consentId, interviewId, theme, method } = __DISCORD_AGE_VERIFICATION_INCODE_PARAMS__);
      if (null == schemaVersion) {
        let tmp = null;
        if ("string" === typeof apiUrl) {
          tmp = null;
          if ("string" === typeof sessionToken) {
            tmp = null;
            if ("string" === typeof consentId) {
              tmp = null;
              if ("string" === typeof interviewId) {
                if (null == theme) {
                  const obj = { apiUrl, sessionToken, consentId, interviewId };
                  let tmp2 = null;
                  if (null != theme) {
                    tmp2 = theme;
                  }
                  obj.theme = tmp2;
                  let tmp3 = null;
                  if (null != method) {
                    tmp3 = method;
                  }
                  obj.method = tmp3;
                  tmp = obj;
                } else {
                  tmp = null;
                }
              }
            }
          }
        }
      } else {
        tmp = null;
      }
      return tmp;
    }
  }
  return null;
};
export const buildIncodeParamsInjection = function buildIncodeParamsInjection(arg0, arg1) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["schemaVersion"] = 2;
  const json = JSON.stringify(JSON.stringify(obj));
  return "if (window.location.origin === " + JSON.stringify(arg1) + ") { window." + "__DISCORD_AGE_VERIFICATION_INCODE_PARAMS__" + " = JSON.parse(" + json + "); } true;";
};
export const parseIncodeWebViewMessage = function parseIncodeWebViewMessage(arg0) {
  if (null == arg0) {
    return null;
  } else {
    let parsed = arg0;
    if ("string" === typeof arg0) {
      const _JSON = JSON;
      parsed = JSON.parse(arg0);
    }
    let eventType;
    if (null != parsed) {
      eventType = parsed.eventType;
    }
    if (eventType === "Verification.CaptureComplete") {
      let tmp11 = null;
      if ("string" === typeof parsed.interviewId) {
        tmp11 = null;
        if (0 !== parsed.interviewId.length) {
          let obj = { kind: "capture_complete", interviewId: parsed.interviewId };
          tmp11 = obj;
        }
      }
      return tmp11;
    } else {
      let eventType1;
      if (null != parsed) {
        eventType1 = parsed.eventType;
      }
      if (eventType1 === "Verification.FallbackRequest") {
        let tmp10 = null;
        if ("string" === typeof parsed.previousInterviewId) {
          tmp10 = null;
          if (0 !== parsed.previousInterviewId.length) {
            obj = { kind: "fallback_request", previousInterviewId: parsed.previousInterviewId };
            tmp10 = obj;
          }
        }
        return tmp10;
      } else {
        let eventType2;
        if (null != parsed) {
          eventType2 = parsed.eventType;
        }
        if (eventType2 !== "Verification.Result") {
          return null;
        } else {
          const status = parsed.status;
          if (status !== obj.COMPLETED) {
            if (status !== obj.CANCELLED) {
              let tmp9 = null;
            }
            return tmp9;
          }
          obj = { kind: "result", status };
          tmp9 = obj;
        }
      }
    }
  }
};
export const postIncodeResult = function postIncodeResult(status) {
  postToNativeWebView(JSON.stringify({ eventType: "Verification.Result", status }));
};
export const postIncodeCaptureComplete = function postIncodeCaptureComplete(interviewId) {
  postToNativeWebView(JSON.stringify({ eventType: "Verification.CaptureComplete", interviewId }));
};
export const postIncodeFallbackRequest = function postIncodeFallbackRequest(previousInterviewId) {
  postToNativeWebView(JSON.stringify({ eventType: "Verification.FallbackRequest", previousInterviewId }));
};
export const buildIncodeFallbackSessionInjection = function buildIncodeFallbackSessionInjection(arg0) {
  const json = JSON.stringify(JSON.stringify(arg0));
  return "(function(){var detail=JSON.parse(" + json + ");var key=" + JSON.stringify("__DISCORD_APPLY_INCODE_FALLBACK_SESSION__") + ";var n=0;var apply=function(){var cb=window[key];if(typeof cb===\"function\"){cb(detail);return true;}return false;};if(apply()){return;}var id=setInterval(function(){n+=1;if(apply()||n>40){clearInterval(id);}},50);})();true;";
};
