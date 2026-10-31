// Module ID: 10895
// Function ID: 10896
// Name: ConjureHostApproval
// Dependencies: [19, 504, 572, 10874, 10896, 2]
// Exports: answerHostApproval, removeAllowedHost, useConjureAllowedHosts, useConjureHostApprovals, useConjureRequireHostApprovalSetting

// Module 10895 (ConjureHostApproval)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10874 */;
import react from "react" /* 19 */;
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
    const f98346 = (id) => id.id;
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
let result = size.fileFinishedImporting("modules/conjure/host_approval/ConjureHostApproval.tsx");

export const ConjureHostAccessStore = hostAccessStore;
export const hostAccessFrameHandlers = obj2;
export function answerHostApproval(projectId, c1, always) {
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
}
export function removeAllowedHost(projectId, arg1) {
  let closure_0 = arg1;
  let obj = conjureProjectSockets;
  return obj.sendOnConjureSocket(projectId, "allowed hosts", (sendHostAccess) => {
    const obj = { type: "set_host_access", remove_host };
    return sendHostAccess.sendHostAccess(obj);
  });
}
export function useConjureHostApprovals(projectId) {
  _require = projectId;
  const items = [hostAccessStore];
  const items1 = [projectId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => hostAccessStore.getApprovals(projectId), items1);
}
export function useConjureAllowedHosts(projectId) {
  _require = projectId;
  const items = [hostAccessStore];
  const items1 = [projectId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const access = hostAccessStore.getAccess(projectId);
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
}
export function useConjureRequireHostApprovalSetting(arg0) {
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
}
