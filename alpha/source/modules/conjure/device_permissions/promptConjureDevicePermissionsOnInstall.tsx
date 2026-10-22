// Module ID: 10766
// Function ID: 10767
// Name: promptConjureDevicePermissionsOnInstall
// Dependencies: [5, 10767, 10768, 10769, 584, 2]
// Exports: default

// Module 10766 (promptConjureDevicePermissionsOnInstall)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore" /* 10767 */;
import size from "module_2" /* 2 */;

let allowed, closure_2, permissions;

let obj = function _promptConjureDevicePermissionsOnInstall() {
  obj = _asyncToGenerator(async (applicationId) => {
    let appName;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let decision;
      if (1 === tmp4) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          return { value, done: true };
        } else {
          permissions = tmp.filter((item) => {
            obj = closure_0(closure_2[2]);
            const result = obj.isConjureDevicePermissionSupported(item) && null == decision.getDecision(closure_1_0, item);
            return result;
          });
          if (0 !== permissions.length) {
            if (!closure_130_5.has(applicationId)) {
              closure_130_5.add(applicationId);
              let c4 = 1;
              c5 = 3;
              c6 = 1;
              const obj5 = { appName, iframeId: null, permissions };
              const obj6 = { value: closure_130_1(closure_130_2[3])(obj5), done: false };
              return obj6;
            }
          }
        }
      } else if (2 === tmp4) {
        c4 = 0;
        closure_130_5.delete(applicationId);
        throw permissions;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        closure_130_5.delete(applicationId);
        c6 = 3;
        return { value, done: true };
      } else {
        allowed = value;
        if (null != allowed) {
          obj = closure_130_1(closure_130_2[4]);
          const obj8 = { type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId, permissions, allowed };
          obj.dispatch(obj8);
        }
        c4 = 0;
        closure_130_5.delete(applicationId);
      }
      await "IconComponent";
      closure_2 = tmp;
      ({ applicationId: c0, appName: c1, permissions: c2 } = closure_0);
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
new Set();
let result = size.fileFinishedImporting("modules/conjure/device_permissions/promptConjureDevicePermissionsOnInstall.tsx");

export default function promptConjureDevicePermissionsOnInstall() {
  return obj(...arguments);
};
