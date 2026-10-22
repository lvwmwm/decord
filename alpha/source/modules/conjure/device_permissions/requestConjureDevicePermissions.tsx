// Module ID: 10773
// Function ID: 10774
// Name: requestConjureDevicePermissions
// Dependencies: [5, 2045, 10774, 10775, 10776, 584, 2]
// Exports: default, getConjureDevicePermissionStatus

// Module 10773 (requestConjureDevicePermissions)
import conjureDevicePermissions from "conjureDevicePermissions" /* 10775 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore" /* 10774 */;
import size from "module_2" /* 2 */;

let application, c5, c6, closure_3;

let obj = function _requestConjureDevicePermissions() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c2;
    let c3;
    let tmp;
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
      let c4;
      try {
        let iframeId;
        let applicationId;
        let appName;
        let has;
        let allowed;
        let statuses;
        c6 = 2;
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
            applicationId = closure_0.applicationId;
            appName = closure_0.appName;
            const tmp66 = closure_0;
            if (appName === undefined) {
              application = application.getApplication(applicationId);
              let name;
              if (application != null) {
                name = application.name;
              }
              appName = name;
            }
            ({ iframeId: c2, permissions: c3 } = tmp66);
            has = undefined;
            allowed = undefined;
            statuses = function statuses() {
              return _undefined.map((permission) => {
                let obj3;
                let str;
                obj = applicationId(c2[3]);
                const tmp = closure_1_0;
                if (obj.isConjureDevicePermissionSupported(permission)) {
                  const obj2 = { permission, state: str };
                  str = has.getDecision(tmp, permission);
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
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            has = tmp48.filter((permission) => {
              let obj3;
              let str;
              obj = closure_0(iframeId[3]);
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
                has = closure_130_6.has;
                if (!has(applicationId)) {
                  closure_130_6.add(applicationId);
                  c4 = 1;
                  const obj5 = { appName, iframeId, permissions: has };
                  has = closure_130_1(closure_130_2[4])(obj5);
                  c5 = 3;
                  c6 = 1;
                  const obj6 = { value: has, done: false };
                  return obj6;
                }
              }
            }
            has = statuses();
            c6 = 3;
            const obj7 = { value: has, done: true };
            return obj7;
          }
        } else if (2 === c5) {
          c4 = 0;
          has = closure_130_6.delete(applicationId);
          throw closure_3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          closure_130_6.delete(applicationId);
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          allowed = value;
          if (null != allowed) {
            obj = closure_130_1(closure_130_2[5]);
            const obj9 = { type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId, permissions: has, allowed };
            obj.dispatch(obj9);
          }
          c4 = 0;
          closure_130_6.delete(applicationId);
          has = statuses();
          c6 = 3;
          const obj10 = { value: has, done: true };
          return obj10;
        }
      } catch (tmp48) {
        closure_3 = tmp48;
        if (0 === c4) {
          c6 = 3;
          throw tmp48;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
new Set();
const result = size.fileFinishedImporting("modules/conjure/device_permissions/requestConjureDevicePermissions.tsx");

export default function requestConjureDevicePermissions() {
  return obj(...arguments);
};
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
