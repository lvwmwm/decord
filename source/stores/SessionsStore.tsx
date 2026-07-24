// Module ID: 4145
// Function ID: 34859
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 22, 566, 686, 2]

// Module 4145 (_isNativeReflectConstruct)
import apply from "apply";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
let closure_8 = Object.freeze([]);
let closure_9 = {};
let tmp2 = ((Store) => {
  class SessionsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, SessionsStore);
      obj = outer1_5(SessionsStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SessionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getSessions",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSession",
    value() {
      const self = this;
      const sessionId = outer1_7.getSessionId();
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
      const sessionId = outer1_7.getSessionId();
      const found = SessionsStore(outer1_1[6]).find(outer1_9, (active) => {
        active = active.active;
        if (active) {
          active = active.sessionId !== closure_0;
        }
        return active;
      });
      return null != found ? found.activities : outer1_8;
    }
  };
  items[4] = {
    key: "getHiddenActivities",
    value() {
      const sessionId = outer1_7.getSessionId();
      const found = SessionsStore(outer1_1[6]).find(outer1_9, (active) => {
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
      hiddenActivities = outer1_8;
    }
  };
  items[5] = {
    key: "getSessionById",
    value(arg0) {
      return outer1_9[arg0];
    }
  };
  items[6] = {
    key: "getActiveSession",
    value() {
      return SessionsStore(outer1_1[6]).find(outer1_9, (active) => active.active);
    }
  };
  items[7] = {
    key: "getRemoteApplicationActivity",
    value(arg0) {
      let closure_0 = arg0;
      if (null == arg0) {
        return null;
      } else {
        const sessionId = outer1_7.getSessionId();
        const found = SessionsStore(outer1_1[6]).find(outer1_9, (active) => {
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
          let found1 = activities.find((application_id) => application_id.application_id === closure_0);
          if (null == found1) {
            const hiddenActivities = found.hiddenActivities;
            let found2;
            if (null != hiddenActivities) {
              found2 = hiddenActivities.find((application_id) => application_id.application_id === closure_0);
            }
            found1 = found2;
          }
          return found1;
        }
        const arr3 = SessionsStore(outer1_1[6]);
      }
    }
  };
  return callback(SessionsStore, items);
})(require("initialize").Store);
tmp2.displayName = "SessionsStore";
tmp2 = new tmp2(require("dispatcher"), { CONNECTION_OPEN: handleUpdate, SESSIONS_REPLACE: handleUpdate });
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/SessionsStore.tsx");

export default tmp2;
