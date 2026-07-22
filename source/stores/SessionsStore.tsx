// Module ID: 4141
// Function ID: 34828
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4141 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleUpdate(sessions) {
  let closure_9 = {};
  sessions = sessions.sessions;
  const item = sessions.forEach((sessionId) => {
    closure_9[sessionId.sessionId] = sessionId;
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = Object.freeze([]);
let closure_9 = {};
let tmp2 = (Store) => {
  class SessionsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, SessionsStore);
      obj = closure_5(SessionsStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = SessionsStore;
  callback2(SessionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getSessions",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSession",
    value() {
      const self = this;
      const sessionId = store.getSessionId();
      let sessionById = null;
      if (null != sessionId) {
        sessionById = self.getSessionById(sessionId);
      }
      return sessionById;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRemoteActivities",
    value() {
      const SessionsStore = store.getSessionId();
      const found = SessionsStore(closure_1[6]).find(closure_9, (active) => {
        active = active.active;
        if (active) {
          active = active.sessionId !== closure_0;
        }
        return active;
      });
      return null != found ? found.activities : closure_8;
    }
  };
  items[4] = {
    key: "getHiddenActivities",
    value() {
      const SessionsStore = store.getSessionId();
      const found = SessionsStore(closure_1[6]).find(closure_9, (active) => {
        active = active.active;
        if (active) {
          active = active.sessionId !== closure_0;
        }
        return active;
      });
      if (null != found) {
        if (null != found.hiddenActivities) {
          let hiddenActivities = found.hiddenActivities;
        }
        return hiddenActivities;
      }
      hiddenActivities = closure_8;
    }
  };
  items[5] = {
    key: "getSessionById",
    value(arg0) {
      return closure_9[arg0];
    }
  };
  items[6] = {
    key: "getActiveSession",
    value() {
      return SessionsStore(closure_1[6]).find(closure_9, (active) => active.active);
    }
  };
  items[7] = {
    key: "getRemoteApplicationActivity",
    value(arg0) {
      const SessionsStore = arg0;
      if (null == arg0) {
        return null;
      } else {
        const sessionId = store.getSessionId();
        const found = SessionsStore(sessionId[6]).find(closure_9, (active) => {
          active = active.active;
          if (active) {
            active = active.sessionId !== closure_1;
          }
          return active;
        });
        if (null == found) {
          return null;
        } else {
          const activities = found.activities;
          let found1 = activities.find((application_id) => application_id.application_id === application_id);
          if (null == found1) {
            const hiddenActivities = found.hiddenActivities;
            let found2;
            if (null != hiddenActivities) {
              found2 = hiddenActivities.find((application_id) => application_id.application_id === application_id);
            }
            found1 = found2;
          }
          return found1;
        }
        const arr3 = SessionsStore(sessionId[6]);
      }
    }
  };
  return callback(SessionsStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "SessionsStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), { CONNECTION_OPEN: handleUpdate, SESSIONS_REPLACE: handleUpdate });
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/SessionsStore.tsx");

export default tmp2;
