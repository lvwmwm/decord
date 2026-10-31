// Module ID: 11821
// Function ID: 11822
// Name: useEmbeddedAppCSP
// Dependencies: [5, 10887, 504, 10889, 10888, 5672, 2]
// Exports: default

// Module 11821 (useEmbeddedAppCSP)
import EmbeddedAppFramePolicyExperiment from "EmbeddedAppFramePolicyExperiment" /* 10888 */;
import EmbeddedAppCSPActionCreators from "EmbeddedAppCSPActionCreators" /* 10889 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedAppCSPStore from "EmbeddedAppCSPStore" /* 10887 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

let c1, c2;

let tmp;
const getURLForApplication = tmp(5672);
let obj = {
  getQueryId(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "embedded-app-csp:" + arg0;
    }
    return combined;
  },
  get(applicationRouterOrigin) {
    let policy = null;
    if (null != applicationRouterOrigin) {
      policy = EmbeddedAppCSPStore.getPolicy(applicationRouterOrigin);
    }
    return policy;
  },
  load() {
    return closure_2(...arguments);
  }
};
const createFetchStore = get_initialized.createFetchStore;
let closure_2 = _asyncToGenerator(async (arg0, value) => {
  let obj2;
  let closure_0 = arg0;
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (null != closure_0) {
          c2 = 1;
          c1 = 1;
          const obj5 = { value: obj2.fetchEmbeddedAppCSP(tmp4), done: false };
          obj2 = EmbeddedAppCSPActionCreators;
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: "HermesInternal" };
    } catch (tmp8) {
      c1 = 3;
      throw tmp8;
    }
  }
});
const fetchStore = createFetchStore(EmbeddedAppCSPStore, obj);
const result = size.fileFinishedImporting("modules/embedded_apps/csp/useEmbeddedAppCSP.tsx");

export default function useEmbeddedAppCSP(assetURL) {
  let obj4;
  const obj = EmbeddedAppFramePolicyExperiment;
  const isEmbeddedAppFramePolicyEnabled = obj.useIsEmbeddedAppFramePolicyEnabled("useEmbeddedAppCSP");
  let applicationRouterOrigin = null;
  if (isEmbeddedAppFramePolicyEnabled) {
    applicationRouterOrigin = null;
    if (null != assetURL) {
      const tmpResult = getURLForApplication;
      applicationRouterOrigin = tmpResult.getApplicationRouterOrigin(assetURL);
    }
  }
  const data = fetchStore(applicationRouterOrigin).data;
  fetchStore(applicationRouterOrigin);
  if (isEmbeddedAppFramePolicyEnabled) {
    let obj2;
    if (null == applicationRouterOrigin) {
      obj2 = { status: "developer-served" };
    } else if (null != data) {
      obj2 = { status: "ready", policy: data, routerOrigin: applicationRouterOrigin };
      const obj3 = { status: "ready", policy: data, routerOrigin: applicationRouterOrigin };
    } else {
      obj2 = null != tmp7 ? { status: "failed" } : { status: "loading" };
    }
    obj4 = obj2;
  } else {
    obj4 = { status: "not-enforced" };
  }
  return obj4;
};
export const useEmbeddedAppCSPPolicy = fetchStore;
