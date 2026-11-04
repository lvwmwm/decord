// Module ID: 10886
// Function ID: 10887
// Name: loadEmbeddedAppCSPForLaunch
// Dependencies: [5, 10887, 10888, 5672, 10889, 10890, 2]
// Exports: default

// Module 10886 (loadEmbeddedAppCSPForLaunch)
import getURLForApplication from "getURLForApplication" /* 5672 */;
import EmbeddedAppFramePolicyExperiment from "EmbeddedAppFramePolicyExperiment" /* 10888 */;
import EmbeddedAppCSPActionCreators from "EmbeddedAppCSPActionCreators" /* 10889 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedAppCSPStore from "EmbeddedAppCSPStore" /* 10887 */;
import size from "module_2" /* 2 */;

const getURLForApplicationDefault = getURLForApplication;
let c2, c4;

let obj = function _loadEmbeddedAppCSPForLaunch() {
  let policy;
  obj = _asyncToGenerator(async function(arg0, value) {
    let tmp27Result2;
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            const obj7 = EmbeddedAppFramePolicyExperiment;
            const tmp26 = closure_0;
            if (obj7.getIsEmbeddedAppFramePolicyEnabled("loadEmbeddedAppCSPForLaunch")) {
              const tmp15 = getURLForApplicationDefault(tmp26);
              let applicationRouterOrigin = null;
              if (null != tmp15) {
                const tmp27Result = getURLForApplication;
                applicationRouterOrigin = tmp27Result.getApplicationRouterOrigin(tmp15);
              }
              if (null != applicationRouterOrigin) {
                if (null == policy.getPolicy(applicationRouterOrigin)) {
                  c3 = 1;
                  c2 = 2;
                  c4 = 1;
                  const obj4 = { value: tmp27Result2.fetchEmbeddedAppCSP(applicationRouterOrigin), done: false };
                  tmp27Result2 = EmbeddedAppCSPActionCreators;
                  return obj4;
                }
              }
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          const self = this;
          const self2 = this;
          const tmp8 = closure_129_1(closure_129_2[5]);
          const tmp82 = new tmp8(closure_129_1(closure_129_2[5]).Reasons.CSP_UNAVAILABLE);
          throw tmp82;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
        }
        c4 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp20) {
        if (0 === c3) {
          c4 = 3;
          throw tmp20;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/embedded_apps/csp/loadEmbeddedAppCSPForLaunch.tsx");

export default function loadEmbeddedAppCSPForLaunch() {
  return obj(...arguments);
};
