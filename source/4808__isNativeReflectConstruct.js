// Module ID: 4808
// Function ID: 42002
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4808 (_isNativeReflectConstruct)
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
    let isSupportedResult = !set.has(type.type);
    if (isSupportedResult) {
      isSupportedResult = callback(closure_2[7]).isSupported(type.type);
      const obj = callback(closure_2[7]);
    }
    return isSupportedResult;
  });
  let closure_12 = accounts.filter((type) => set.has(type.type));
  let closure_10 = false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const items = [arg1(dependencyMap[6]).PlatformTypes.CONTACTS];
const set = new Set(items);
let closure_10 = true;
let closure_11 = [];
let closure_12 = [];
let closure_13 = {};
const set1 = new Set();
let closure_15 = {};
let closure_16 = {};
let tmp4 = (Store) => {
  class ConnectedAccountsStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ConnectedAccountsStore);
      obj = closure_6(ConnectedAccountsStore);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ConnectedAccountsStore;
  callback2(ConnectedAccountsStore, Store);
  let obj = {
    key: "isJoining",
    value(arg0) {
      return closure_13[arg0] || false;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "joinErrorMessage",
    value(arg0) {
      return closure_16[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetching",
    value() {
      return closure_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAccounts",
    value() {
      return closure_11;
    }
  };
  items[4] = {
    key: "getLocalAccounts",
    value() {
      return closure_12;
    }
  };
  items[5] = {
    key: "getAccount",
    value(arg0, arg1) {
      const ConnectedAccountsStore = arg0;
      return closure_11.find((id) => {
        let tmp = null == id;
        if (!tmp) {
          tmp = id.id === id;
        }
        if (tmp) {
          tmp = id.type === arg1;
        }
        return tmp;
      });
    }
  };
  items[6] = {
    key: "getLocalAccount",
    value(arg0) {
      const ConnectedAccountsStore = arg0;
      return closure_12.find((type) => type.type === type);
    }
  };
  items[7] = {
    key: "isSuggestedAccountType",
    value(arg0) {
      return closure_15[arg0] || false;
    }
  };
  items[8] = {
    key: "addPendingAuthorizedState",
    value(arg0) {
      set.add(arg0);
    }
  };
  items[9] = {
    key: "deletePendingAuthorizedState",
    value(arg0) {
      set.delete(arg0);
    }
  };
  items[10] = {
    key: "hasPendingAuthorizedState",
    value(arg0) {
      return set.has(arg0);
    }
  };
  return callback(ConnectedAccountsStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp4.displayName = "ConnectedAccountsStore";
tmp4 = new tmp4(importDefault(dependencyMap[11]), {
  CONNECTION_OPEN: function handleConnectionOpen(connectedAccounts) {
    connectedAccounts = connectedAccounts.connectedAccounts;
    updateAccounts(connectedAccounts.map((arg0) => new closure_8(arg0)));
  },
  USER_CONNECTIONS_UPDATE: function handleConnectionsUpdate(local) {
    if (local.local) {
      if (null != local.accounts) {
        const accounts = local.accounts;
        updateAccounts(accounts.map((integrations) => {
          const obj = {};
          const merged = Object.assign(integrations);
          integrations = integrations.integrations;
          obj["integrations"] = integrations.map((guild) => {
            let obj = {};
            const merged = Object.assign(guild);
            obj = {};
            const merged1 = Object.assign(guild.guild);
            obj["features"] = [];
            obj["guild"] = callback(closure_2[8]).fromGuildBasic(obj);
            return obj;
          });
          return new closure_8(obj);
        }));
      }
    }
    const response = importDefault(dependencyMap[9]).fetch();
  },
  USER_CONNECTIONS_INTEGRATION_JOINING: function handleJoining(integrationId) {
    closure_13[integrationId.integrationId] = integrationId.joining;
  },
  USER_CONNECTION_UPDATE: function handleUserConnectionUpdate(arg0) {
    let accessToken;
    let revoked;
    ({ platformType: closure_0, id: closure_1, revoked, accessToken } = arg0);
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
    importDefault(dependencyMap[9]).callback(provider, { code, state, openid_params });
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("stores/ConnectedAccountsStore.tsx");

export default tmp4;
