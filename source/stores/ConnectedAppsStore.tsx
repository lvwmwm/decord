// Module ID: 5067
// Function ID: 43986
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 22, 566, 686, 2]

// Module 5067 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = {};
let tmp2 = ((Store) => {
  class ConnectedAppsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ConnectedAppsStore);
      obj = outer1_5(ConnectedAppsStore);
      tmp2 = outer1_4;
      if (outer1_8()) {
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
  callback2(ConnectedAppsStore, Store);
  let obj = {
    key: "isConnected",
    value(arg0) {
      return null != outer1_7[arg0];
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isChildConnected",
    value(arg0) {
      let closure_0 = arg0;
      let someResult = null != arg0;
      if (someResult) {
        const _Object = Object;
        const values = Object.values(outer1_7);
        someResult = values.some((parentId) => parentId.parentId === closure_0);
      }
      return someResult;
    }
  };
  items[1] = obj;
  obj = {
    key: "connections",
    get() {
      return ConnectedAppsStore(outer1_1[5]).values(outer1_7);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getApplication",
    value(arg0) {
      return outer1_7[arg0];
    }
  };
  items[4] = {
    key: "getAllConnections",
    value() {
      return outer1_7;
    }
  };
  return callback(ConnectedAppsStore, items);
})(require("initialize").Store);
tmp2.displayName = "ConnectedAppsStore";
tmp2 = new tmp2(require("dispatcher"), {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(connectedApps) {
    const obj = {};
    const merged = Object.assign(connectedApps.connectedApps);
  },
  RPC_APP_CONNECTED: function handleAppConnection(application) {
    application = application.application;
    if (null == application.id) {
      return false;
    } else {
      const id = application.id;
      if (null == dependencyMap[id]) {
        const obj = { count: 0 };
        ({ id: obj.id, parentId: obj.parentId, name: obj.name, icon: obj.icon, coverImage: obj.coverImage } = application);
        obj.authenticated = false;
        dependencyMap[id] = obj;
      }
      dependencyMap[id].count = dependencyMap[id].count + 1;
    }
  },
  RPC_APP_AUTHENTICATED: function handleAppAuthenticated(application) {
    application = application.application;
    let tmp = null != application.id;
    if (tmp) {
      tmp = null != dependencyMap[application.id];
    }
    if (tmp) {
      dependencyMap[application.id].authenticated = true;
    }
  },
  RPC_APP_DISCONNECTED: function handleAppDisconnection(application) {
    application = application.application;
    let tmp3 = null != application.id;
    if (tmp3) {
      tmp3 = null != dependencyMap[application.id];
    }
    if (tmp3) {
      dependencyMap[application.id].count = dependencyMap[application.id].count - 1;
      if (0 === dependencyMap[application.id].count) {
        const id = application.id;
        delete tmp2[tmp];
      }
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/ConnectedAppsStore.tsx");

export default tmp2;
