// Module ID: 10146
// Function ID: 10147
// Name: DiscoverRequestState
// Dependencies: [2]
// Exports: reduceDiscoverSnapshot

// Module 10146 (DiscoverRequestState)
import size from "module_2" /* 2 */;

class DiscoverRequestGuard {
  constructor() {
    return Object.assign({ session: 0, commit: 0, gate: 0, gateEnabled: null });
  }
  observeGate(waterwheelsDiscoverEnabled) {
    const self = this;
    self.gateEnabled = waterwheelsDiscoverEnabled;
    if (true === this.gateEnabled && !waterwheelsDiscoverEnabled) {
      self.gate = self.gate + 1;
    }
    return true === this.gateEnabled && !waterwheelsDiscoverEnabled;
  }
  resetSession() {
    this.session = this.session + 1;
    this.commit = this.commit + 1;
  }
  commitPicker() {
    this.commit = this.commit + 1;
  }
  capture(id, authSessionIdHash) {
    let tmp = id;
    if (id === undefined) {
      tmp = null;
    }
    let tmp2 = authSessionIdHash;
    if (authSessionIdHash === undefined) {
      tmp2 = null;
    }
    return { userId: tmp, authSessionIdHash: tmp2, session: this.session, commit: this.commit, gate: this.gate };
  }
  matches(session) {
    const self = this;
    return session.session === this.session && session.commit === self.commit && session.gate === self.gate;
  }
  canRun(session, waterwheelsDiscoverEnabled) {
    const self = this;
    let tmp = waterwheelsDiscoverEnabled;
    this.observeGate(waterwheelsDiscoverEnabled);
    if (waterwheelsDiscoverEnabled) {
      tmp = session.session === self.session;
    }
    if (tmp) {
      tmp = session.gate === self.gate;
    }
    return tmp;
  }
  canApply(arg0, arg1) {
    const self = this;
    const tmp = this.canRun(arg0, arg1) && self.matches(arg0);
    return tmp;
  }
}
const prototype = DiscoverRequestGuard.prototype;
const EMPTY_DISCOVER_SNAPSHOT = { status: "idle", items: [], hasSnapshot: false, loadId: null };
const prototype2 = DiscoverRequestGuard.prototype;
const result = size.fileFinishedImporting("modules/icymi/DiscoverRequestState.tsx");

export { DiscoverRequestGuard };
export const discoverRequestGuard = Object.assign({ session: 0, commit: 0, gate: 0, gateEnabled: null });
export { EMPTY_DISCOVER_SNAPSHOT };
export function reduceDiscoverSnapshot(tmp2Result4, type) {
  let obj;
  type = type.type;
  if ("reset" === type) {
    return obj;
  } else if ("commit" === type) {
    let tmp9;
    if (type.enabled) {
      const obj3 = { status: "loading" };
      const merged = Object.assign(tmp8);
      tmp9 = obj3;
    } else {
      tmp9 = tmp8;
    }
    return tmp9;
  } else if ("start" === type) {
    const obj4 = { status: "loading" };
    const merged1 = Object.assign(tmp2Result4);
    return obj4;
  } else if ("success" === type) {
    const obj7 = { status: "success", items: null, hasSnapshot: true, loadId: null };
    ({ items: obj2.items, loadId: obj2.loadId } = type);
    return obj7;
  } else if ("error" === type) {
    obj = { status: "error" };
    const merged2 = Object.assign(tmp2Result4);
    return obj;
  }
}
