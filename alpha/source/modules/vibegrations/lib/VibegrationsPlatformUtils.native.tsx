// Module ID: 8702
// Function ID: 8703
// Name: VibegrationsPlatformUtils
// Dependencies: [5, 8703, 1986, 8699, 8704, 8707, 8015, 8708, 8709, 1097, 8966, 8970, 7973, 8971, 8972, 8973, 8974, 8976, 8977, 2]
// Exports: inspectVibegrationsPreviewPoint

// Module 8702 (VibegrationsPlatformUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8015 */;
import Constants from "Constants" /* 8707 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8708 */;
import ApplicationUtils from "ApplicationUtils" /* 8709 */;
import PushNotificationDefault from "PushNotification" /* 8966 */;
import vibegrationsPreviewCall from "vibegrationsPreviewCall" /* 8970 */;
import vibegrationsPreviewNativeSurfaces from "vibegrationsPreviewNativeSurfaces" /* 8974 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 8977 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import FramesStore from "FramesStore" /* 8703 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import vibegrationsPreviewControlLease from "vibegrationsPreviewControlLease" /* 8973 */;
import vibegrationsPreviewOperationSurfaces from "vibegrationsPreviewOperationSurfaces" /* 8976 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _require, c5, c6, endResult, importAll, native, probe;

let c10;
let c9;
let metroImportAll;
function previewFrameIdentity(arg0) {
  const project = VibegrationsProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (null == prop) {
    return null;
  } else {
    const frame = FramesStore.getFrame(authStore(prop, React4));
    let iframeId = null;
    if (metroImportAll(frame)) {
      iframeId = frame.data.iframeId;
    }
    return iframeId;
  }
}
function previewFrameHeld(arg0) {
  const project = VibegrationsProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    const frame = FramesStore.getFrame(authStore(prop, React4));
    let tmp8 = null;
    if (null != frame) {
      tmp8 = { applicationId: prop, launched: metroImportAll(frame) };
      obj = { applicationId: prop, launched: metroImportAll(frame) };
    }
    tmp3 = tmp8;
  }
  return null != tmp3;
}
function waitForPreviewFrameIdentity(arg0, arg1) {
  let resolved;
  let closure_0 = arg0;
  let closure_1 = arg1;
  obj = VibegrationsProjectStore;
  let project = VibegrationsProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    let tmp4 = FramesStore;
    let frame = FramesStore.getFrame(closure_10(prop, closure_9));
    let iframeId = null;
    if (closure_8(frame)) {
      iframeId = frame.data.iframeId;
    }
    tmp3 = iframeId;
  }
  if (null != tmp3) {
    resolved = Promise.resolve(tmp3);
  } else {
    let project1 = obj.getProject(arg0);
    let prop1;
    if (project1 != null) {
      prop1 = project1.preview_application_id;
    }
    let tmp11 = null;
    if (null != prop1) {
      let frame1 = FramesStore.getFrame(closure_10(prop1, closure_9));
      let tmp16 = null;
      if (null != frame1) {
        let tmp17 = closure_8;
        tmp16 = { applicationId: prop1, launched: closure_8(frame1) };
        const obj2 = { applicationId: prop1, launched: closure_8(frame1) };
      }
      tmp11 = tmp16;
    }
    if (null != tmp11) {
      const self = this;
      const self2 = this;
      resolved = new Promise((arg0) => {
        let closure_2;
        closure_0 = arg0;
        closure_1 = Date.now() + closure_1;
        const interval = setInterval(() => {
          project = project.getProject(closure_0);
          let prop;
          const tmp = closure_0;
          if (project != null) {
            prop = project.preview_application_id;
          }
          let tmp4 = null;
          if (null != prop) {
            frame = frame.getFrame(closure_1_10(prop, closure_1_9));
            let iframeId = null;
            if (closure_1_8(frame)) {
              iframeId = frame.data.iframeId;
            }
            tmp4 = iframeId;
          }
          let tmp11 = null != tmp4;
          if (!tmp11) {
            const _Date = Date;
            tmp11 = Date.now() >= closure_1;
          }
          if (!tmp11) {
            const project1 = VibegrationsProjectStore.getProject(tmp);
            let prop1;
            if (project1 != null) {
              prop1 = project1.preview_application_id;
            }
            let tmp17 = null;
            if (null != prop1) {
              const frame1 = FramesStore.getFrame(authStore(prop1, React4));
              let tmp22 = null;
              if (null != frame1) {
                tmp22 = { applicationId: prop1, launched: metroImportAll(frame1) };
                obj = { applicationId: prop1, launched: metroImportAll(frame1) };
              }
              tmp17 = tmp22;
            }
            tmp11 = null == tmp17;
          }
          if (tmp11) {
            const _clearInterval = clearInterval;
            clearInterval(closure_2);
            closure_0(tmp4);
          }
        }, 100);
      });
    } else {
      resolved = Promise.resolve(null);
    }
  }
  return resolved;
}
function callNativePreviewFrame(iframeId, arg1, arg2, id) {
  let closure_0;
  let closure_4;
  let obj2;
  _require = arg1;
  let closure_1 = id;
  obj = require("vibegrationsPreviewCall");
  const previewCallTypesResult = obj.previewCallTypes(arg1);
  importAll = previewCallTypesResult;
  obj2 = { type: previewCallTypesResult.request, id: id.id };
  const merged = Object.assign(arg2);
  const obj3 = require("WebView");
  const webViewProxy = obj3.getWebViewProxy(iframeId);
  const timestamp = Date.now();
  const promise = new Promise((arg0, arg1) => {
    let closure_3;
    const f151193 = () => {

    };
    let closure_0 = arg0;
    let closure_1 = arg1;
    function cleanup() {
      clearTimeout(closure_3);
      if (null != c2) {
        const _clearInterval = clearInterval;
        clearInterval(c2);
      }
      closure_4.remove();
    }
    const timeout = setTimeout(() => {
      clearTimeout(closure_3);
      if (null != c2) {
        const _clearInterval = clearInterval;
        clearInterval(c2);
      }
      closure_4.remove();
      const previewFrameCallTimeout = new vibegrationsPreviewCall.PreviewFrameCallTimeout(c0, obj.timeoutMs);
      closure_1(previewFrameCallTimeout);
    }, closure_1.timeoutMs);
    closure_4 = closure_4.addOnMessageListener((data) => {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        obj = vibegrationsPreviewCall;
        const tmp4 = require;
        const tmp7 = _null;
        const tmp8 = obj;
        if (obj.isResultEnvelope(parsed, _null.ack, obj.id)) {
          if (null != _null) {
            const _clearInterval = clearInterval;
            clearInterval(_null);
          }
          _null = null;
        } else {
          const tmp4Result = tmp4(8970);
          if (tmp4Result.isResultEnvelope(parsed, tmp7.result, tmp8.id)) {
            cleanup();
            closure_0(parsed);
          }
        }
      } catch (err) {
      }
    });
    let injectJavaScriptResult = closure_4.injectJavaScript(obj(obj3[13])(timeout));
    injectJavaScriptResult.catch(f151193);
    const interval = setInterval(function post() {
      const injectJavaScriptResult = closure_4.injectJavaScript(obj(obj3[13])(closure_3));
      injectJavaScriptResult.catch(f151193);
    }, closure_1.retryMs);
  });
  return promise;
}
let obj = function _relayPreviewCapture() {
  obj = _asyncToGenerator(async (id, spec, arg2) => {
    let closure_5;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2) => {
      let c1;
      let c2;
      let tmp43;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let obj9;
          let tmp;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp43;
              id = closure_1;
              spec = undefined;
              c2 = undefined;
              obj9 = undefined;
              tmp = undefined;
              probe = closure_2;
              if (closure_2 == null) {
                probe = {};
              }
              ({ spec: c1, onAccepted: c2 } = probe);
              if (true === probe.probe) {
                let str2 = "unavailable";
                if (previewFrameHeld(id)) {
                  str2 = "accepted";
                }
                c9 = 3;
                return { value: { status: str2 }, done: true };
              } else {
                tmp43 = _require;
                c8 = 1;
                c9 = 1;
                const obj6 = { value: waitForPreviewFrameIdentity(id, require("vibegrationsPreviewCall").PREVIEW_FRAME_WAIT_MS), done: false };
                return obj6;
              }
            }
          } else {
            if (1 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                return { value, done: true };
              } else {
                probe = value;
                if (null == probe) {
                  c9 = 3;
                  return { value: { status: "unavailable" }, done: true };
                } else if (null == c2) {
                  obj9 = { uploadToken: "r" };
                } else {
                  c8 = 2;
                  c9 = 1;
                  const obj10 = { value: c2(), done: false };
                  return obj10;
                }
              }
            } else if (2 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else {
                obj9 = value;
                if (arg0 === 2) {
                  c9 = 3;
                  return { value, done: true };
                }
              }
            } else if (3 === c8) {
              let obj12;
              c7 = 0;
              if (closure_6 instanceof closure_133_0(closure_133_3[11]).PreviewFrameCallTimeout) {
                obj12 = { status: "failed" };
              } else {
                obj12 = { status: "unavailable" };
              }
              c9 = 3;
              return { value: obj12, done: true };
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              tmp = value;
              if ("accepted" === tmp.phase) {
                obj = { status: "accepted" };
              } else {
                obj = { status: "failed", code: tmp.code, message: tmp.error };
              }
              c7 = 0;
              c9 = 3;
              return { value: obj, done: true };
            }
            if (null == obj9) {
              c9 = 3;
              return { value: { status: "unavailable" }, done: true };
            } else {
              let obj17;
              let obj19;
              c7 = 1;
              tmp43 = closure_133_16;
              if (null == spec) {
                obj17 = {};
              } else {
                obj17 = { spec };
              }
              const obj18 = {};
              const merged = Object.assign(obj17);
              if (null == obj9.uploadToken) {
                obj19 = {};
              } else {
                obj19 = { uploadToken: obj9.uploadToken };
              }
              const merged1 = Object.assign(obj19);
              c8 = 4;
              c9 = 1;
              const obj20 = { id, timeoutMs: closure_133_0(closure_133_3[11]).CAPTURE_NOW_ACCEPT_TIMEOUT_MS, retryMs: closure_133_0(closure_133_3[11]).CAPTURE_NOW_RETRY_MS };
              const obj21 = { value: tmp43(probe, "capture-now", obj18, obj20), done: false };
              return obj21;
            }
          }
        } catch (tmp46) {
          closure_6 = tmp46;
          if (0 === c7) {
            c9 = 3;
            throw tmp46;
          } else {
            c8 = 3;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _inspectVibegrationsPreviewPoint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            closure_0 = undefined;
            const tmp20 = previewFrameIdentity(closure_0);
            const tmp18 = closure_1;
            if (null == tmp20) {
              c6 = 3;
              const obj4 = { value: { status: "failed" }, done: true };
              return obj4;
            } else {
              c4 = 1;
              const obj9 = require("vibegrationsInspectPoint");
              const result = obj9.inspectPreviewPointRequest(tmp18);
              const obj5 = { id: "inspect-" + sum + "-" + Date.now(), timeoutMs: require("vibegrationsPreviewCall").INSPECT_ANSWER_TIMEOUT_MS, retryMs: require("vibegrationsPreviewCall").CONTROL_RETRY_MS };
              sum = sum + 1;
              const _Date = Date;
              const _HermesInternal = HermesInternal;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: callNativePreviewFrame(tmp20, "control", result, obj5), done: false };
              return obj6;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          c6 = 3;
          const obj7 = { value: { status: "failed" }, done: true };
          return obj7;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_0 = value;
          c4 = 0;
          c6 = 3;
          const obj10 = { value: obj.inspectResultFromResponse(closure_0), done: true };
          obj = closure_131_0(closure_131_3[14]);
          return obj10;
        }
      } catch (tmp10) {
        if (0 === c4) {
          c6 = 3;
          throw tmp10;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _relayPreviewControl() {
  obj = _asyncToGenerator(async (arg0, id, arg2, arg3) => {
    let closure_6;
    let closure_7;
    let closure_0 = arg0;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj21;
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        let tmp74;
        try {
          let closure_5;
          let tmp;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              closure_4 = undefined;
              closure_5 = undefined;
              tmp = undefined;
              tmp74 = undefined;
              native = undefined;
              if (previewFrameHeld(closure_0)) {
                const obj15 = require("vibegrationsPreviewControlLease");
                closure_4 = obj15.acquireVibegrationsControlLease(tmp107);
                native = 2;
                endResult = waitForPreviewFrameIdentity(tmp107, require("vibegrationsPreviewCall").PREVIEW_FRAME_WAIT_MS);
                c9 = 3;
                c10 = 1;
                return { value: endResult, done: false };
              } else {
                c10 = 3;
                return { value: { status: "unavailable" }, done: true };
              }
            }
          } else if (1 === c9) {
            native = 0;
            endResult = closure_4();
            throw tmp74;
          } else if (2 === c9) {
            endResult = tmp74;
            native = 1;
            if (tmp74 instanceof closure_134_0(closure_134_3[11]).PreviewFrameCallTimeout) {
              endResult = { status: "failed", message: "the preview frame did not answer the control batch" };
            } else {
              endResult = { status: "unavailable" };
            }
            native = 0;
            closure_4();
            c10 = 3;
            return { value: endResult, done: true };
          } else if (3 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              native = 0;
              closure_4();
              c10 = 3;
              return { value, done: true };
            } else {
              closure_5 = value;
              if (null == closure_5) {
                native = 0;
                closure_4();
                c10 = 3;
                return { value: { status: "unavailable" }, done: true };
              } else {
                endResult = undefined;
                if (closure_3 != null) {
                  endResult = closure_3();
                }
                c9 = 4;
                c10 = 1;
                return { value: endResult, done: false };
              }
            }
          } else if (4 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              native = 0;
              closure_4();
              c10 = 3;
              return { value, done: true };
            } else if (false === value) {
              native = 0;
              closure_4();
              c10 = 3;
              return { value: { status: "unavailable" }, done: true };
            } else if ("desktop" === closure_2.viewport) {
              native = 0;
              closure_4();
              c10 = 3;
              return { value: { status: "failed", message: "the phone preview has no desktop lens" }, done: true };
            } else {
              const obj19 = closure_134_0(closure_134_3[16]);
              tmp = obj19.beginNativeSurfaceSessionForFrame(closure_5, closure_2.native);
              native = 3;
              const obj12 = { id, timeoutMs: obj21.controlAnswerTimeoutMs(closure_2), retryMs: closure_134_0(closure_134_3[11]).CONTROL_RETRY_MS };
              c9 = 6;
              c10 = 1;
              obj21 = closure_134_0(closure_134_3[11]);
              const obj13 = { value: closure_134_16(closure_5, "control", closure_2, obj12), done: false };
              return obj13;
            }
          } else if (5 === c9) {
            native = 2;
            endResult = tmp.end();
            throw tmp74;
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            endResult = tmp;
            tmp.end();
            native = 0;
            closure_4();
            c10 = 3;
            return { value, done: true };
          } else {
            tmp74 = value;
            if (typeof tmp74.ok === "boolean") {
              const _Array = Array;
              endResult = Array.isArray;
              if (endResult(tmp74.results)) {
                let obj16;
                closure_4 = 0;
                endResult = [];
                closure_4 = HermesBuiltin.arraySpread(endResult, closure_134_22.drain(closure_0), closure_4);
                closure_4 = HermesBuiltin.arraySpread(endResult, tmp.drain(), closure_4);
                native = endResult;
                if (0 === native.length) {
                  obj16 = tmp74;
                } else {
                  obj16 = { native };
                  const merged = Object.assign(tmp74);
                  endResult = native;
                }
                endResult = { status: "completed", response: obj16 };
                tmp.end();
                native = 0;
                closure_4();
                c10 = 3;
                return { value: endResult, done: true };
              }
            }
            endResult = tmp;
            tmp.end();
            native = 0;
            closure_4();
            c10 = 3;
            return { value: { status: "failed", message: "the preview frame returned a malformed control result" }, done: true };
          }
        } catch (tmp74) {
          if (0 === native) {
            c10 = 3;
            throw tmp74;
          } else if (1 === native) {
            c9 = 1;
          } else if (2 === native) {
            c9 = 2;
          } else {
            c9 = 5;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ isLaunched: metroImportAll, MAIN_SURFACE: c9, makeFrameId: c10 } = FramesConstants);
const LocalNotificationTypes = Constants.LocalNotificationTypes;
const items = [OAuth2Scopes.OAuth2Scopes.BOT, OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS];
let c18 = 0;
let c21 = 0;
let result = vibegrationsPreviewControlLease.subscribeVibegrationsControlReleased(function(arg0) {
  let c0;
  let obj3;
  let sum;
  const project = VibegrationsProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    let tmp4 = FramesStore;
    const frame = FramesStore.getFrame(closure_10(prop, closure_9));
    let tmp8 = closure_8;
    let iframeId = null;
    if (closure_8(frame)) {
      iframeId = frame.data.iframeId;
    }
    tmp3 = iframeId;
  }
  if (null != tmp3) {
    obj = { id: "control-end-" + sum + "-" + Date.now(), timeoutMs: require("vibegrationsPreviewCall").CONTROL_END_TIMEOUT_MS, retryMs: require("vibegrationsPreviewCall").CONTROL_RETRY_MS };
    sum = c21 + 1;
    c21 = sum;
    const _Date = Date;
    const _HermesInternal = HermesInternal;
    _require = "control-end";
    obj3 = undefined;
    const obj2 = require("vibegrationsPreviewCall");
    const previewCallTypesResult = obj2.previewCallTypes("control-end");
    let c2 = previewCallTypesResult;
    obj3 = { type: previewCallTypesResult.request, id: obj.id };
    const merged = Object.assign({});
    const obj4 = require("WebView");
    const webViewProxy = obj4.getWebViewProxy(tmp3);
    const _Date2 = Date;
    const timestamp = Date.now();
    const self = this;
    const self2 = this;
    const promise = new Promise((arg0, arg1) => {
      let closure_3;
      const f151193 = () => {

      };
      let closure_0 = arg0;
      let closure_1 = arg1;
      function cleanup() {
        clearTimeout(closure_3);
        if (null != c2) {
          const _clearInterval = clearInterval;
          clearInterval(c2);
        }
        closure_4.remove();
      }
      const timeout = setTimeout(() => {
        clearTimeout(closure_3);
        if (null != c2) {
          const _clearInterval = clearInterval;
          clearInterval(c2);
        }
        closure_4.remove();
        const previewFrameCallTimeout = new vibegrationsPreviewCall.PreviewFrameCallTimeout(c0, obj.timeoutMs);
        closure_1(previewFrameCallTimeout);
      }, closure_1.timeoutMs);
      closure_4 = closure_4.addOnMessageListener((data) => {
        try {
          const _JSON = JSON;
          const parsed = JSON.parse(data.data);
          obj = vibegrationsPreviewCall;
          const tmp4 = require;
          const tmp7 = _null;
          const tmp8 = obj;
          if (obj.isResultEnvelope(parsed, _null.ack, obj.id)) {
            if (null != _null) {
              const _clearInterval = clearInterval;
              clearInterval(_null);
            }
            _null = null;
          } else {
            const tmp4Result = tmp4(8970);
            if (tmp4Result.isResultEnvelope(parsed, tmp7.result, tmp8.id)) {
              cleanup();
              closure_0(parsed);
            }
          }
        } catch (err) {
        }
      });
      let injectJavaScriptResult = closure_4.injectJavaScript(obj(obj3[13])(timeout));
      injectJavaScriptResult.catch(f151193);
      const interval = setInterval(function post() {
        const injectJavaScriptResult = closure_4.injectJavaScript(obj(obj3[13])(closure_3));
        injectJavaScriptResult.catch(f151193);
      }, closure_1.retryMs);
    });
    const catchPromise = promise.catch(() => {

    });
  }
});
let closure_22 = vibegrationsPreviewOperationSurfaces.createPreviewOperationSurfaces((arg0) => {
  obj = VibegrationsProjectStore;
  const project = VibegrationsProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    const frame = FramesStore.getFrame(closure_10(prop, closure_9));
    let tmp8 = null;
    if (null != frame) {
      tmp8 = { applicationId: prop, launched: closure_8(frame) };
      const obj2 = { applicationId: prop, launched: closure_8(frame) };
    }
    tmp3 = tmp8;
  }
  let launched;
  if (tmp3 != null) {
    launched = tmp3.launched;
  }
  let tmp11 = null;
  if (true === launched) {
    tmp11 = { applicationId: tmp3.applicationId };
    const obj3 = { applicationId: tmp3.applicationId };
  }
  if (null == tmp11) {
    return null;
  } else {
    const project1 = obj.getProject(arg0);
    let prop1;
    if (project1 != null) {
      prop1 = project1.preview_application_id;
    }
    let tmp13 = null;
    if (null != prop1) {
      const frame1 = FramesStore.getFrame(closure_10(prop1, closure_9));
      let iframeId = null;
      if (closure_8(frame1)) {
        iframeId = frame1.data.iframeId;
      }
      tmp13 = iframeId;
    }
    iframeId = tmp13;
    return {
      identity: tmp13,
      dismiss() {

        },
      open() {
          obj = vibegrationsPreviewNativeSurfaces;
          return obj.beginNativeSurfaceSessionForFrame(iframeId, undefined, { beneathBatches: true });
        }
    };
  }
});
obj = {
  openVibegrationsAppInstallModal(application) {
    let applicationId;
    let deserializeResult;
    let guildId;
    let onClose;
    let scopes;
    application = application.application;
    let oauth2InstallParams;
    ({ applicationId, guildId, onClose } = application);
    if (application != null) {
      const integrationTypesConfig = application.integrationTypesConfig;
      if (integrationTypesConfig != null) {
        const tmp4 = integrationTypesConfig[ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL];
        if (tmp4 != null) {
          oauth2InstallParams = tmp4.oauth2InstallParams;
        }
      }
    }
    if (oauth2InstallParams == null) {
      let installParams;
      if (application != null) {
        installParams = application.installParams;
      }
      oauth2InstallParams = installParams;
    }
    const tmp7 = ApplicationUtils;
    const openOAuth2Modal = tmp7.openOAuth2Modal;
    obj = {
      clientId: applicationId,
      guildId,
      disableGuildSelect: true,
      integrationType: ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL,
      scopes,
      permissions: deserializeResult,
      callback() {
        return true;
      },
      dismissOAuthModal: onClose
    };
    scopes = undefined;
    if (oauth2InstallParams != null) {
      scopes = oauth2InstallParams.scopes;
    }
    if (scopes == null) {
      scopes = items;
    }
    let permissions;
    if (oauth2InstallParams != null) {
      permissions = oauth2InstallParams.permissions;
    }
    deserializeResult = undefined;
    if (null != permissions) {
      const deserializer = BigFlagUtilsAll;
      deserializeResult = deserializer.deserialize(oauth2InstallParams.permissions);
    }
    openOAuth2Modal(obj);
    return Promise.resolve();
  },
  isWindowFocused() {
    return "active" === AppStateStore.getState();
  },
  areTurnNotificationsDisabled() {
    return false;
  },
  presentTurnNotification(arg0) {
    let body;
    let guildId;
    let obj2;
    let obj4;
    let projectId;
    let title;
    ({ projectId, guildId } = arg0);
    ({ title, body } = arg0);
    obj = { category: "local", alertTitle: title, alertBody: body, userInfo: obj2 };
    const presentLocalNotification = PushNotificationDefault.presentLocalNotification;
    obj2 = { type: LocalNotificationTypes.VIBEGRATIONS, projectId, channel_id: projectId };
    PushNotificationDefault;
    if (null != guildId) {
      obj4 = { guildId };
      const obj3 = { guildId };
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    const result = presentLocalNotification(obj);
  },
  relayPreviewCapture() {
    return obj(...arguments);
  },
  relayPreviewControl() {
    return obj(...arguments);
  },
  releasePreviewControl(projectId) {
    obj = vibegrationsPreviewControlLease;
    const result = obj.releaseVibegrationsControlLeases(projectId);
  },
  beginPreviewOperation(projectId) {
    closure_22.begin(projectId);
  },
  endPreviewOperation(projectId) {
    closure_22.end(projectId);
  },
  reloadAppFrames(application_id) {
    restartVibegrationsAppFramesDefault(application_id);
  }
};
const result1 = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx");

export default obj;
export const inspectVibegrationsPreviewPoint = function inspectVibegrationsPreviewPoint() {
  return obj(...arguments);
};
