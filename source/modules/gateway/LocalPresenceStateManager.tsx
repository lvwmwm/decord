// Module ID: 12489
// Function ID: 95399
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12489 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const tmp2 = (arg0) => {
  class LocalPresenceStateManager {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, LocalPresenceStateManager);
      items = [];
      items[0] = false;
      obj = closure_5(LocalPresenceStateManager);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.socket = arg0;
      tmp2Result.switchingAccounts = false;
      emitPresenceUpdate = tmp2Result.emitPresenceUpdate;
      tmp7 = LocalPresenceStateManager(closure_1[6]);
      tmp2Result.didCommit = tmp7(5, 20000, emitPresenceUpdate.bind(tmp2Result));
      return tmp2Result;
    }
  }
  const importDefault = LocalPresenceStateManager;
  callback2(LocalPresenceStateManager, arg0);
  let obj = {
    key: "getInitialState",
    value() {
      return store.getLocalPresence();
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getNextState",
    value() {
      return store.getLocalPresence();
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldCommit",
    value() {
      const socket = this.socket;
      return socket.isSessionEstablished();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "emitPresenceUpdate",
    value(status) {
      const socket = this.socket;
      socket.presenceUpdate(status.status, status.since, status.activities, status.afk);
    }
  };
  items[4] = {
    key: "handleConnectionOpen",
    value() {
      this.update({}, !this.switchingAccounts);
      this.switchingAccounts = false;
    }
  };
  items[5] = {
    key: "handleAccountSwitch",
    value() {
      this.switchingAccounts = true;
      this.reset();
      this.emitPresenceUpdate(this.getState());
    }
  };
  return callback(LocalPresenceStateManager, items);
}(importDefault(dependencyMap[7]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/gateway/LocalPresenceStateManager.tsx");

export default tmp2;
