// Module ID: 5336
// Function ID: 45509
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5336 (_isNativeReflectConstruct)
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
let closure_7 = {};
let tmp2 = (Store) => {
  class ConnectedAppsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ConnectedAppsStore);
      obj = closure_5(ConnectedAppsStore);
      tmp2 = closure_4;
      if (closure_8()) {
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
  const importDefault = ConnectedAppsStore;
  callback2(ConnectedAppsStore, Store);
  let obj = {
    key: "isConnected",
    value(arg0) {
      return null != closure_7[arg0];
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isChildConnected",
    value(arg0) {
      const ConnectedAppsStore = arg0;
      let someResult = null != arg0;
      if (someResult) {
        const _Object = Object;
        const values = Object.values(closure_7);
        someResult = values.some((parentId) => parentId.parentId === parentId);
      }
      return someResult;
    }
  };
  items[1] = obj;
  obj = {
    key: "connections",
    get() {
      return ConnectedAppsStore(closure_1[5]).values(closure_7);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getApplication",
    value(arg0) {
      return closure_7[arg0];
    }
  };
  items[4] = {
    key: "getAllConnections",
    value() {
      return closure_7;
    }
  };
  return callback(ConnectedAppsStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "ConnectedAppsStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(connectedApps) {
    const merged = Object.assign(connectedApps.connectedApps);
    let closure_7 = {};
  },
  RPC_APP_CONNECTED: function handleAppConnection(application) {
    application = application.application;
    if (null == application.id) {
      return false;
    } else {
      const id = application.id;
      if (null == closure_7[id]) {
        const obj = { count: 0 };
        ({ id: obj.id, parentId: obj.parentId, name: obj.name, icon: obj.icon, coverImage: obj.coverImage } = application);
        obj.authenticated = false;
        closure_7[id] = obj;
      }
      closure_7[id].count = closure_7[id].count + 1;
    }
  },
  RPC_APP_AUTHENTICATED: function handleAppAuthenticated(application) {
    application = application.application;
    let tmp = null != application.id;
    if (tmp) {
      tmp = null != closure_7[application.id];
    }
    if (tmp) {
      closure_7[application.id].authenticated = true;
    }
  },
  RPC_APP_DISCONNECTED: function handleAppDisconnection(application) {
    application = application.application;
    let tmp = null != application.id;
    if (tmp) {
      tmp = null != closure_7[application.id];
    }
    if (tmp) {
      closure_7[application.id].count = closure_7[application.id].count - 1;
      if (0 === closure_7[application.id].count) {
        const id = application.id;
        delete r1[r0];
      }
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/ConnectedAppsStore.tsx");

export default tmp2;
