// Module ID: 4812
// Function ID: 42077
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4813, 653, 4814, 1387, 4938, 566, 686, 2]

// Module 4812 (_isNativeReflectConstruct)
import ME from "ME";
import getPlatformUserUrl from "getPlatformUserUrl";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateAccounts(accounts) {
  let closure_11 = accounts.filter((type) => {
    let isSupportedResult = !outer1_9.has(type.type);
    if (isSupportedResult) {
      isSupportedResult = outer1_1(outer1_2[7]).isSupported(type.type);
      const obj = outer1_1(outer1_2[7]);
    }
    return isSupportedResult;
  });
  let closure_12 = accounts.filter((type) => outer1_9.has(type.type));
  let c10 = false;
}
let items = [require("ME").PlatformTypes.CONTACTS];
let set = new Set(items);
let c10 = true;
let closure_11 = [];
let closure_12 = [];
let closure_13 = {};
const set1 = new Set();
let closure_15 = {};
let closure_16 = {};
let tmp4 = ((Store) => {
  class ConnectedAccountsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ConnectedAccountsStore);
      obj = outer1_6(ConnectedAccountsStore);
      tmp2 = outer1_5;
      if (outer1_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ConnectedAccountsStore, Store);
  let obj = {
    key: "isJoining",
    value(arg0) {
      return outer1_13[arg0] || false;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "joinErrorMessage",
    value(arg0) {
      return outer1_16[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetching",
    value() {
      return outer1_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAccounts",
    value() {
      return outer1_11;
    }
  };
  items[4] = {
    key: "getLocalAccounts",
    value() {
      return outer1_12;
    }
  };
  items[5] = {
    key: "getAccount",
    value(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      return outer1_11.find((id) => {
        let tmp = null == closure_0;
        if (!tmp) {
          tmp = id.id === closure_0;
        }
        if (tmp) {
          tmp = id.type === closure_1;
        }
        return tmp;
      });
    }
  };
  items[6] = {
    key: "getLocalAccount",
    value(arg0) {
      let closure_0 = arg0;
      return outer1_12.find((type) => type.type === closure_0);
    }
  };
  items[7] = {
    key: "isSuggestedAccountType",
    value(arg0) {
      return outer1_15[arg0] || false;
    }
  };
  items[8] = {
    key: "addPendingAuthorizedState",
    value(arg0) {
      outer1_14.add(arg0);
    }
  };
  items[9] = {
    key: "deletePendingAuthorizedState",
    value(arg0) {
      outer1_14.delete(arg0);
    }
  };
  items[10] = {
    key: "hasPendingAuthorizedState",
    value(arg0) {
      return outer1_14.has(arg0);
    }
  };
  return callback(ConnectedAccountsStore, items);
})(require("initialize").Store);
tmp4.displayName = "ConnectedAccountsStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(connectedAccounts) {
    connectedAccounts = connectedAccounts.connectedAccounts;
    updateAccounts(connectedAccounts.map((arg0) => new outer1_8(arg0)));
  },
  USER_CONNECTIONS_UPDATE: function handleConnectionsUpdate(local) {
    if (local.local) {
      if (null != local.accounts) {
        const accounts = local.accounts;
        updateAccounts(accounts.map((integrations) => {
          let obj = {};
          let merged = Object.assign(integrations);
          integrations = integrations.integrations;
          obj["integrations"] = integrations.map((guild) => {
            let obj = {};
            const merged = Object.assign(guild);
            obj = {};
            const merged1 = Object.assign(guild.guild);
            obj["features"] = [];
            obj["guild"] = outer2_0(outer2_2[8]).fromGuildBasic(obj);
            return obj;
          });
          return new outer1_8(obj);
        }));
      }
    }
    const response = importDefault(4938).fetch();
  },
  USER_CONNECTIONS_INTEGRATION_JOINING: function handleJoining(integrationId) {
    closure_13[integrationId.integrationId] = integrationId.joining;
  },
  USER_CONNECTION_UPDATE: function handleUserConnectionUpdate(arg0) {
    let accessToken;
    let importDefault;
    let require;
    let revoked;
    ({ platformType: require, id: importDefault, revoked, accessToken } = arg0);
    const found = closure_11.find((id) => {
      let tmp = id.id === closure_1;
      if (tmp) {
        tmp = id.type === closure_0;
      }
      return tmp;
    });
    if (null == found) {
      return false;
    } else {
      if (null != revoked) {
        found.revoked = revoked;
      }
      if (null != accessToken) {
        found.accessToken = accessToken;
      }
    }
  },
  USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function handleJoiningError(error) {
    let str = "";
    if (undefined !== error.error) {
      str = error.error;
    }
    closure_16[error.integrationId] = str;
  },
  USER_CONNECTIONS_CALLBACK: function handleUserConnectionsCallback(arg0) {
    let code;
    let openid_params;
    let provider;
    let state;
    ({ code, state, openid_params, provider } = arg0);
    importDefault(4938).callback(provider, { code, state, openid_params });
  }
});
let result = set.fileFinishedImporting("stores/ConnectedAccountsStore.tsx");

export default tmp4;
