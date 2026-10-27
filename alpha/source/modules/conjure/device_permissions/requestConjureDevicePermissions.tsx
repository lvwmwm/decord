// Module ID: 10797
// Function ID: 10798
// Name: requestConjureDevicePermissions
// Dependencies: [5, 2045, 6775, 10798, 6776, 1104, 10799, 5722, 10800, 584, 2]
// Exports: default, getConjureDevicePermissionStatus

// Module 10797 (requestConjureDevicePermissions)
import DurationsDefault from "Durations" /* 1104 */;
import FramesConstants from "FramesConstants" /* 6776 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 10799 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import FramesStore from "FramesStore" /* 6775 */;
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore" /* 10798 */;
import size from "module_2" /* 2 */;

let application, c1, c5, c6, closure_3, frameByIframeId;

let obj = function _requestConjureDevicePermissions() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c2;
    let c3;
    let c4;
    let tmp;
    function isInUse(c2) {
      if (null == c2) {
        return true;
      } else {
        obj = frameByIframeId;
        frameByIframeId = frameByIframeId.getFrameByIframeId(c2);
        const tmp2 = null != frameByIframeId && obj.isFrameVisible(frameByIframeId.id) && frameByIframeId.data.layoutMode !== constants.PIP;
        return tmp2;
      }
    }
    function answerWithoutPrompting() {
      return decision(...arguments);
    }
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let iframeId;
        let modalContextKey;
        let applicationId;
        let appName;
        let has;
        let allowed;
        let statuses;
        c6 = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            iframeId = undefined;
            modalContextKey = undefined;
            application = undefined;
            applicationId = closure_0.applicationId;
            appName = closure_0.appName;
            const tmp67 = closure_0;
            if (appName === undefined) {
              application = application.getApplication(applicationId);
              let name;
              if (application != null) {
                name = application.name;
              }
              appName = name;
            }
            ({ iframeId: c2, modalContextKey: c3, permissions: c4 } = tmp67);
            has = undefined;
            allowed = undefined;
            statuses = function statuses() {
              return _undefined.map((permission) => {
                let obj3;
                let str;
                obj = applicationId(c2[6]);
                const tmp = closure_1_0;
                if (obj.isConjureDevicePermissionSupported(permission)) {
                  const obj2 = { permission, state: str };
                  str = obj.getDecision(tmp, permission);
                  if (str == null) {
                    str = "prompt";
                  }
                  obj3 = obj2;
                } else {
                  obj3 = { permission, state: "unsupported" };
                }
                return obj3;
              });
            };
            obj = function _answerWithoutPrompting() {
              obj = modalContextKey(function*(arg0, value) {
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c2 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        const obj7 = statuses();
                        if (obj7.some((state) => "granted" !== state.state)) {
                          c1 = 1;
                          const obj3 = tmp(c2[7]);
                          c2 = 1;
                          const obj5 = { value: obj3.sleep(closure_1_9), done: false };
                          return obj5;
                        }
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      obj = { value, done: true };
                      return obj;
                    }
                    c2 = 3;
                    const obj6 = { value: closure_128_5(), done: true };
                    return obj6;
                  } catch (tmp10) {
                    c2 = 3;
                    throw tmp10;
                  }
                }
              });
              return obj(...arguments);
            };
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            has = application.filter((permission) => {
              let obj3;
              let str;
              obj = closure_0(iframeId[6]);
              const tmp = closure_1_0;
              if (obj.isConjureDevicePermissionSupported(permission)) {
                const obj2 = { permission, state: str };
                str = decision.getDecision(tmp, permission);
                if (str == null) {
                  str = "prompt";
                }
                obj3 = obj2;
              } else {
                obj3 = { permission, state: "unsupported" };
              }
              return "prompt" === obj3.state;
            });
            if (0 !== has.length) {
              if (null != appName) {
                has = closure_130_8.has;
                if (!has(applicationId)) {
                  has = iframeId;
                  if (isInUse(iframeId)) {
                    closure_130_8.add(applicationId);
                    application = 1;
                    let obj5 = { appName, iframeId, modalContextKey, permissions: has };
                    has = closure_130_1(closure_130_2[8])(obj5);
                    c5 = 3;
                    c6 = 1;
                    let obj6 = { value: has, done: false };
                    return obj6;
                  }
                }
              }
            }
            has = answerWithoutPrompting();
            c6 = 3;
            let obj7 = { value: has, done: true };
            return obj7;
          }
        } else if (2 === tmp4) {
          application = 0;
          has = closure_130_8.delete(applicationId);
          throw closure_3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          application = 0;
          closure_130_8.delete(applicationId);
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          allowed = value;
          if (null != allowed) {
            obj = closure_130_1(closure_130_2[9]);
            const obj9 = { type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId, permissions: has, allowed };
            const tmp10 = has;
            obj.dispatch(obj9);
          }
          application = 0;
          closure_130_8.delete(applicationId);
          has = statuses();
          c6 = 3;
          const obj10 = { value: has, done: true };
          return obj10;
        }
      } catch (tmp49) {
        closure_3 = tmp49;
        if (0 === application) {
          c6 = 3;
          throw tmp49;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const FrameLayoutModes = FramesConstants.FrameLayoutModes;
new Set();
const SECOND = DurationsDefault.Millis.SECOND;
const result = size.fileFinishedImporting("modules/conjure/device_permissions/requestConjureDevicePermissions.tsx");

export default function requestConjureDevicePermissions() {
  return obj(...arguments);
};
export const UNANSWERED_REQUEST_DELAY_MS = SECOND;
export const getConjureDevicePermissionStatus = function getConjureDevicePermissionStatus(applicationId, permission) {
  let obj3;
  let str;
  obj = conjureDevicePermissions;
  if (obj.isConjureDevicePermissionSupported(permission)) {
    const obj2 = { permission, state: str };
    str = ConjureDevicePermissionStore.getDecision(applicationId, permission);
    if (str == null) {
      str = "prompt";
    }
    obj3 = obj2;
  } else {
    obj3 = { permission, state: "unsupported" };
  }
  return obj3;
};
