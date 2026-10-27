// Module ID: 10778
// Function ID: 10779
// Name: useEmbeddedAppCSP
// Dependencies: [5, 10776, 504, 10779, 558, 576, 10777, 5624, 2]

// Module 10778 (useEmbeddedAppCSP)
import react from "react" /* 576 */;
import EmbeddedAppFramePolicyExperiment from "EmbeddedAppFramePolicyExperiment" /* 10777 */;
import EmbeddedAppCSPActionCreators from "EmbeddedAppCSPActionCreators" /* 10779 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedAppCSPStore from "EmbeddedAppCSPStore" /* 10776 */;
import get_initialized from "get initialized" /* 504 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2;

let tmp;
const getURLForApplication = tmp(5624);
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
      return { value: "IconComponent", done: null };
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
      return { value: "IconComponent", done: null };
    } catch (tmp8) {
      c1 = 3;
      throw tmp8;
    }
  }
});
const fetchStore = createFetchStore(EmbeddedAppCSPStore, obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmbeddedAppCSP(embeddedAppUrl) {
  let data;
  let error;
  const obj = react;
  const cResult = obj.c(10);
  const obj2 = EmbeddedAppFramePolicyExperiment;
  const isEmbeddedAppFramePolicyEnabled = obj2.useIsEmbeddedAppFramePolicyEnabled("useEmbeddedAppCSP");
  if (cResult[0] === isEmbeddedAppFramePolicyEnabled) {
    let tmp5;
    let tmp11;
    if (cResult[1] === embeddedAppUrl) {
      tmp5 = cResult[2];
    }
    ({ data, error } = fetchStore(tmp5));
    fetchStore(tmp5);
    if (isEmbeddedAppFramePolicyEnabled) {
      let tmp13;
      if (null == tmp5) {
        let tmp17;
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { status: "developer-served" };
          cResult[4] = obj3;
          tmp17 = obj3;
        } else {
          tmp17 = cResult[4];
        }
        tmp13 = tmp17;
      } else if (null != data) {
        if (cResult[5] === data) {
          let tmp15;
          if (cResult[6] === tmp5) {
            tmp15 = cResult[7];
          }
          tmp13 = tmp15;
        }
        const obj4 = { status: "ready", policy: data, routerOrigin: tmp5 };
        cResult[5] = data;
        cResult[6] = tmp5;
        cResult[7] = obj4;
        tmp15 = obj4;
      } else if (cResult[8] !== error) {
        const tmp14 = null != error ? { status: "failed" } : { status: "loading" };
        cResult[8] = error;
        cResult[9] = tmp14;
        tmp13 = tmp14;
      } else {
        tmp13 = cResult[9];
      }
      tmp11 = tmp13;
    } else {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { status: "not-enforced" };
        cResult[3] = obj5;
        tmp11 = obj5;
      } else {
        tmp11 = cResult[3];
      }
    }
    return tmp11;
  }
  let applicationRouterOrigin = null;
  if (isEmbeddedAppFramePolicyEnabled) {
    applicationRouterOrigin = null;
    if (null != embeddedAppUrl) {
      const tmpResult = getURLForApplication;
      applicationRouterOrigin = tmpResult.getApplicationRouterOrigin(embeddedAppUrl);
    }
  }
  cResult[0] = isEmbeddedAppFramePolicyEnabled;
  cResult[1] = embeddedAppUrl;
  cResult[2] = applicationRouterOrigin;
  tmp5 = applicationRouterOrigin;
}) : (function useEmbeddedAppCSP(embeddedAppUrl) {
  let obj4;
  const obj = EmbeddedAppFramePolicyExperiment;
  const isEmbeddedAppFramePolicyEnabled = obj.useIsEmbeddedAppFramePolicyEnabled("useEmbeddedAppCSP");
  let applicationRouterOrigin = null;
  if (isEmbeddedAppFramePolicyEnabled) {
    applicationRouterOrigin = null;
    if (null != embeddedAppUrl) {
      const tmpResult = getURLForApplication;
      applicationRouterOrigin = tmpResult.getApplicationRouterOrigin(embeddedAppUrl);
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
});
const result = size.fileFinishedImporting("modules/embedded_apps/csp/useEmbeddedAppCSP.tsx");

export default tmp6;
export const useEmbeddedAppCSPPolicy = fetchStore;
