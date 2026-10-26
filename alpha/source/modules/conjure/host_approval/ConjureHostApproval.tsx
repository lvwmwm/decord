// Module ID: 10735
// Function ID: 10736
// Name: ConjureHostApproval
// Dependencies: [19, 504, 584, 10719, 558, 576, 10736, 2]
// Exports: answerHostApproval, removeAllowedHost

// Module 10735 (ConjureHostApproval)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10719 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4 = [];
const map = new Map();
const map1 = new Map();
const Store = get_initializedDefault.Store;
class HostAccessStore extends Store {
  getApprovals(projectId) {
    let value = map.get(projectId);
    if (value == null) {
      value = closure_4;
    }
    return value;
  }
  getAccess(arg0) {
    let value = map1.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = HostAccessStore.prototype;
let obj = {
  CONJURE_HOST_APPROVALS_SET(arg0) {
    let asks;
    let projectId;
    ({ projectId, asks } = arg0);
    let value = map.get(projectId);
    const obj = map;
    if (value == null) {
      value = closure_4;
    }
    const f108016 = (id) => id.id;
    let flag = !(value.length === asks.length && value.every((item, index) => {
      const tmp = o(item);
      return tmp === o(allowedHosts[index]);
    }));
    value.length === asks.length && value.every((item, index) => {
      const tmp = o(item);
      return tmp === o(allowedHosts[index]);
    });
    if (flag) {
      const result = obj.set(projectId, asks);
      flag = true;
    }
    return flag;
  },
  CONJURE_HOST_ACCESS_SET(arg0) {
    let allowedHosts;
    let projectId;
    let requireApproval;
    ({ projectId, requireApproval, allowedHosts } = arg0);
    const value = map1.get(projectId);
    let requireApproval1;
    const obj = map1;
    if (value != null) {
      requireApproval1 = value.requireApproval;
    }
    let flag = requireApproval1 !== requireApproval;
    if (!flag) {
      const allowedHosts1 = value.allowedHosts;
      function o(arg0) {
        return arg0;
      }
      flag = !(allowedHosts1.length === allowedHosts.length && allowedHosts1.every((item, index) => {
        const tmp = o(item);
        return tmp === o(allowedHosts[index]);
      }));
      allowedHosts1.length === allowedHosts.length && allowedHosts1.every((item, index) => {
        const tmp = o(item);
        return tmp === o(allowedHosts[index]);
      });
    }
    if (flag) {
      const obj2 = { requireApproval, allowedHosts };
      const result = obj.set(projectId, obj2);
      flag = true;
    }
    return flag;
  }
};
const hostAccessStore = new HostAccessStore(DispatcherDefault, obj);
let obj2 = {
  host_approvals(asks, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_HOST_APPROVALS_SET", projectId, asks: asks.asks };
    obj.dispatch(obj2);
  },
  host_access(requireApproval, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_HOST_ACCESS_SET", projectId, requireApproval: requireApproval.require_approval, allowedHosts: requireApproval.allowed_hosts };
    obj.dispatch(obj2);
  }
};
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureHostApprovals(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [hostAccessStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return hostAccessStore.getApprovals(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useConjureHostApprovals(arg0) {
  let closure_0;
  _require = arg0;
  const items = [hostAccessStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => hostAccessStore.getApprovals(closure_0), items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAllowedHosts(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [hostAccessStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const access = hostAccessStore.getAccess(closure_0);
      let requireApproval;
      if (access != null) {
        requireApproval = access.requireApproval;
      }
      let allowedHosts = null;
      if (true === requireApproval) {
        allowedHosts = access.allowedHosts;
      }
      return allowedHosts;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useConjureAllowedHosts(arg0) {
  let closure_0;
  _require = arg0;
  const items = [hostAccessStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const access = hostAccessStore.getAccess(closure_0);
    let requireApproval;
    if (access != null) {
      requireApproval = access.requireApproval;
    }
    let allowedHosts = null;
    if (true === requireApproval) {
      allowedHosts = access.allowedHosts;
    }
    return allowedHosts;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRequireHostApprovalSetting(arg0) {
  let first;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [hostAccessStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const access = hostAccessStore.getAccess(closure_0);
      let requireApproval;
      if (access != null) {
        requireApproval = access.requireApproval;
      }
      if (requireApproval == null) {
        requireApproval = null;
      }
      return requireApproval;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== arg0) {
    const fn2 = function p(projectId) {
      closure_0 = projectId;
      let obj = conjureProjectSockets;
      return obj.sendOnConjureSocket(closure_0, "host approval setting", (sendHostAccess) => {
        const obj = { type: "set_host_access", require_approval };
        return sendHostAccess.sendHostAccess(obj);
      });
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  const tmpResult2 = require("useToggleDraft");
  return tmpResult2.useToggleDraft(stateFromStores, tmp9);
}) : (function useConjureRequireHostApprovalSetting(arg0) {
  _require = arg0;
  let obj = require("get initialized");
  const items = [hostAccessStore];
  const items1 = [arg0];
  const items2 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const access = hostAccessStore.getAccess(closure_0);
    let requireApproval;
    if (access != null) {
      requireApproval = access.requireApproval;
    }
    if (requireApproval == null) {
      requireApproval = null;
    }
    return requireApproval;
  }, items1);
  const callback = react.useCallback((projectId) => {
    closure_0 = projectId;
    let obj = conjureProjectSockets;
    return obj.sendOnConjureSocket(closure_0, "host approval setting", (sendHostAccess) => {
      const obj = { type: "set_host_access", require_approval };
      return sendHostAccess.sendHostAccess(obj);
    });
  }, items2);
  const obj2 = require("useToggleDraft");
  return obj2.useToggleDraft(stateFromStores, callback);
});
let result = size.fileFinishedImporting("modules/conjure/host_approval/ConjureHostApproval.tsx");

export const ConjureHostAccessStore = hostAccessStore;
export const hostAccessFrameHandlers = obj2;
export const answerHostApproval = function answerHostApproval(projectId, c1, always) {
  let closure_0 = c1;
  let closure_1 = always;
  let obj = conjureProjectSockets;
  if (obj.sendOnConjureSocket(projectId, "host approval", (sendHostAccess) => {
    const obj = { type: "host_approval_answer", id, answer };
    return sendHostAccess.sendHostAccess(obj);
  })) {
    const approvals = hostAccessStore.getApprovals(projectId);
    const found = approvals.filter((id) => id.id !== id);
    const obj3 = { type: "CONJURE_HOST_APPROVALS_SET", projectId, asks: found };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
  }
};
export const removeAllowedHost = function removeAllowedHost(projectId, arg1) {
  let closure_0 = arg1;
  let obj = conjureProjectSockets;
  return obj.sendOnConjureSocket(projectId, "allowed hosts", (sendHostAccess) => {
    const obj = { type: "set_host_access", remove_host };
    return sendHostAccess.sendHostAccess(obj);
  });
};
export const useConjureHostApprovals = tmp5;
export const useConjureAllowedHosts = tmp6;
export const useConjureRequireHostApprovalSetting = tmp7;
