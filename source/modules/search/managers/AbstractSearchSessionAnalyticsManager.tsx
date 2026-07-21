// Module ID: 10083
// Function ID: 78108
// Name: createDefaultSessionState
// Dependencies: []

// Module 10083 (createDefaultSessionState)
function createDefaultSessionState() {
  const obj = { sessionId: arg1(dependencyMap[2]).v4(), searchQueryId: null };
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class AbstractSearchSessionAnalyticsManager {
    constructor() {
      tmp = closure_2(this, AbstractSearchSessionAnalyticsManager);
      map = new Map();
      this.sessions = map;
      return;
    }
  }
  const arg1 = AbstractSearchSessionAnalyticsManager;
  let obj = {
    key: "getSession",
    value(searchContext) {
      const sessions = this.sessions;
      const value = sessions.get(AbstractSearchSessionAnalyticsManager(closure_1[3]).getSearchContextId(searchContext));
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "setSession",
    value(searchContext) {
      let obj = AbstractSearchSessionAnalyticsManager(closure_1[3]);
      const searchContextId = obj.getSearchContextId(searchContext);
      const sessions = this.sessions;
      let value = sessions.get(searchContextId);
      if (null == value) {
        value = callback2();
      }
      const sessions2 = this.sessions;
      obj = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(arg1);
      const result = sessions2.set(searchContextId, obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "deleteSession",
    value(searchContext) {
      const sessions = this.sessions;
      sessions.delete(AbstractSearchSessionAnalyticsManager(closure_1[3]).getSearchContextId(searchContext));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSessionId",
    value(arg0) {
      const session = this.getSession(arg0);
      let sessionId;
      if (null != session) {
        sessionId = session.sessionId;
      }
      let tmp3 = null;
      if (null != sessionId) {
        tmp3 = sessionId;
      }
      return tmp3;
    }
  };
  items[4] = {
    key: "getQueryId",
    value(arg0) {
      const session = this.getSession(arg0);
      let searchQueryId;
      if (null != session) {
        searchQueryId = session.searchQueryId;
      }
      let tmp3 = null;
      if (null != searchQueryId) {
        tmp3 = searchQueryId;
      }
      return tmp3;
    }
  };
  items[5] = {
    key: "refreshQueryId",
    value(arg0) {
      const obj = { searchQueryId: AbstractSearchSessionAnalyticsManager(closure_1[2]).v4() };
      this.setSession(arg0, obj);
    }
  };
  items[6] = {
    key: "initialize",
    value(arg0, arg1) {
      const items = [arg0, ...HermesBuiltin.copyRestArgs()];
      this._initialize.apply(items);
      const obj = { sessionId: AbstractSearchSessionAnalyticsManager(closure_1[2]).v4(), searchQueryId: null };
      this.setSession(arg0, obj);
    }
  };
  items[7] = {
    key: "terminate",
    value(arg0) {
      this._terminate(arg0);
      this.deleteSession(arg0);
    }
  };
  items[8] = {
    key: "transferSession",
    value(arg0, searchContext) {
      const self = this;
      this._transferSession(arg0, searchContext);
      let session = this.getSession(arg0);
      const sessions = this.sessions;
      const searchContextId = AbstractSearchSessionAnalyticsManager(closure_1[3]).getSearchContextId(searchContext);
      if (null == session) {
        session = callback2();
      }
      const result = sessions.set(searchContextId, session);
      self.deleteSession(arg0);
    }
  };
  return callback(AbstractSearchSessionAnalyticsManager, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/search/managers/AbstractSearchSessionAnalyticsManager.tsx");

export default tmp2;
