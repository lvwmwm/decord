// Module ID: 7649
// Function ID: 7650
// Name: loadEmbeddedAppCSPForLaunch
// Dependencies: [5, 7650, 7651, 7652, 7653, 5653, 2]
// Exports: default, getLaunchCSPURL

// Module 7649 (loadEmbeddedAppCSPForLaunch)
import getURLForApplication from "getURLForApplication" /* 5653 */;
import EmbeddedAppFramePolicyExperiment from "EmbeddedAppFramePolicyExperiment" /* 7651 */;
import EmbeddedAppCSPActionCreators from "EmbeddedAppCSPActionCreators" /* 7652 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedAppCSPStore from "EmbeddedAppCSPStore" /* 7650 */;
import size from "module_2" /* 2 */;

const getURLForApplicationDefault = getURLForApplication;
let c4, c5;

let obj = function _loadEmbeddedAppCSPForLaunch() {
  let policy;
  obj = _asyncToGenerator(async function(arg0, value) {
    let tmp31Result2;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp2;
            closure_0 = undefined;
            const obj11 = EmbeddedAppFramePolicyExperiment;
            const tmp30 = closure_0;
            if (obj11.getIsEmbeddedAppFramePolicyEnabled("loadEmbeddedAppCSPForLaunch")) {
              const tmp19 = getLaunchRouterOrigin(tmp30);
              if (null == tmp19) {
                c5 = 3;
                const obj4 = { value: constants.SKIPPED, done: true };
                return obj4;
              } else if (null != policy.getPolicy(tmp19)) {
                c5 = 3;
                const obj5 = { value: constants.CACHED, done: true };
                return obj5;
              } else {
                const tmp31Result = EmbeddedAppCSPActionCreators;
                closure_0 = tmp31Result.isEmbeddedAppCSPReadInFlight(tmp19);
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj6 = { value: tmp31Result2.fetchEmbeddedAppCSP(tmp19), done: false };
                tmp31Result2 = EmbeddedAppCSPActionCreators;
                return obj6;
              }
            } else {
              c5 = 3;
              const obj7 = { value: constants.SKIPPED, done: true };
              return obj7;
            }
          }
        } else if (1 === tmp5) {
          c3 = 0;
          const self = this;
          const self2 = this;
          const tmp13 = closure_130_1(closure_130_2[4]);
          const tmp132 = new tmp13(closure_130_1(closure_130_2[4]).Reasons.CSP_UNAVAILABLE);
          throw tmp132;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          let FETCHED;
          c3 = 0;
          if (closure_0) {
            FETCHED = tmp9.IN_FLIGHT;
          } else {
            FETCHED = tmp9.FETCHED;
          }
          c5 = 3;
          obj = { value: FETCHED, done: true };
          return obj;
        }
      } catch (tmp24) {
        if (0 === c3) {
          c5 = 3;
          throw tmp24;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function getLaunchRouterOrigin(arg0) {
  const tmp2 = getURLForApplicationDefault(arg0);
  let applicationRouterOrigin = null;
  if (null != tmp2) {
    obj = getURLForApplication;
    applicationRouterOrigin = obj.getApplicationRouterOrigin(tmp2);
  }
  return applicationRouterOrigin;
}
obj = { SKIPPED: "skipped", CACHED: "cached", IN_FLIGHT: "in_flight", FETCHED: "fetched" };
const result = size.fileFinishedImporting("modules/embedded_apps/csp/loadEmbeddedAppCSPForLaunch.tsx");

export default function loadEmbeddedAppCSPForLaunch() {
  return obj(...arguments);
};
export const EmbeddedAppCSPSource = obj;
export function getLaunchCSPURL(arg0) {
  const tmp2 = getURLForApplicationDefault(arg0);
  let applicationRouterOrigin = null;
  if (null != tmp2) {
    obj = getURLForApplication;
    applicationRouterOrigin = obj.getApplicationRouterOrigin(tmp2);
  }
  let embeddedAppCSPURL = null;
  if (null != applicationRouterOrigin) {
    const obj2 = EmbeddedAppCSPActionCreators;
    embeddedAppCSPURL = obj2.getEmbeddedAppCSPURL(applicationRouterOrigin);
  }
  return embeddedAppCSPURL;
}
