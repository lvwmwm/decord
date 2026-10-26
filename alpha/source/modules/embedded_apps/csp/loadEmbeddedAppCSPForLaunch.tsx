// Module ID: 10772
// Function ID: 10773
// Name: loadEmbeddedAppCSPForLaunch
// Dependencies: [5, 10773, 10774, 5623, 10775, 10777, 2]
// Exports: default

// Module 10772 (loadEmbeddedAppCSPForLaunch)
import getURLForApplication from "getURLForApplication" /* 5623 */;
import EmbeddedAppFramePolicyExperiment from "EmbeddedAppFramePolicyExperiment" /* 10774 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedAppCSPStore from "EmbeddedAppCSPStore" /* 10773 */;
import size from "module_2" /* 2 */;

const getURLForApplicationDefault = getURLForApplication;
let c3, c4;

let obj = function _loadEmbeddedAppCSPForLaunch() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        let applicationRouterOrigin;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            applicationRouterOrigin = undefined;
            const obj6 = EmbeddedAppFramePolicyExperiment;
            const tmp29 = closure_0;
            if (obj6.getIsEmbeddedAppFramePolicyEnabled("loadEmbeddedAppCSPForLaunch")) {
              const tmp12 = getURLForApplicationDefault(tmp29);
              applicationRouterOrigin = null;
              if (null != tmp12) {
                const tmp30Result = getURLForApplication;
                applicationRouterOrigin = tmp30Result.getApplicationRouterOrigin(tmp12);
              }
              if (null != applicationRouterOrigin) {
                const useEmbeddedAppCSPPolicy = tmp30(dependencyMap[4]).useEmbeddedAppCSPPolicy;
                const items = [applicationRouterOrigin];
                c3 = 1;
                c4 = 1;
                const obj4 = { value: useEmbeddedAppCSPPolicy.fetchMany(items), done: false };
                return obj4;
              }
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else if (null == closure_130_4.getPolicy(applicationRouterOrigin)) {
          const self = this;
          const self2 = this;
          const tmp24 = closure_130_1(closure_130_2[5]);
          const tmp242 = new tmp24(closure_130_1(closure_130_2[5]).Reasons.CSP_UNAVAILABLE);
          throw tmp242;
        }
        c4 = 3;
        return { value: "IconComponent", done: "+352" };
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/embedded_apps/csp/loadEmbeddedAppCSPForLaunch.tsx");

export default function loadEmbeddedAppCSPForLaunch() {
  return obj(...arguments);
};
