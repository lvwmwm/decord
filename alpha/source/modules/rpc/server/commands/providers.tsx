// Module ID: 15699
// Function ID: 15700
// Name: providers
// Dependencies: [5, 6485, 6363, 1087, 2026, 1098, 7259, 9240, 11432, 11435, 6487, 584, 1123, 9585, 2]

// Module 15699 (providers)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 7259 */;
import RPCErrorDefault from "RPCError" /* 9240 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11432 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6485 */;
import Constants_mod from "Constants" /* 6363 */;
import Constants_mod2 from "Constants" /* 1087 */;
import Constants_mod3 from "Constants" /* 2026 */;
import Constants_mod4 from "Constants" /* 1098 */;
import size from "module_2" /* 2 */;

let _require, closure_3;

let AM_HARMONY_PRD_APPLICATION_ID;
let AM_HARMONY_STG_APPLICATION_ID;
let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_SCOPE_CONFIG;
let hasOwnProperty;
let items1;
let items2;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let value = function _refreshProviderAccessToken() {
  const obj = _asyncToGenerator(async (access_token, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj5;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              access_token = undefined;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: obj5.refreshAccessToken(access_token, closure_1), done: false };
              obj5 = ConnectedAccountsActionCreatorsDefault;
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            access_token = value;
            if (null == access_token) {
              const self = this;
              const self2 = this;
              const obj7 = { errorCode: closure_131_8.OAUTH2_ERROR };
              const tmp12 = new closure_131_1(closure_131_2[7])(obj7, "Refreshing access token did not return a new access token");
              throw tmp12;
            } else {
              value = { access_token };
              c5 = 3;
              return { value, done: true };
            }
          }
        } catch (tmp18) {
          c5 = 3;
          throw tmp18;
        }
      }
    })();
  });
  return obj(...arguments);
};
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ AnalyticsLocations: hasOwnProperty, ComponentActions: metroRequire, PlatformTypes: metroImportDefault } = Constants);
Constants = Constants_mod2;
({ AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID } = Constants);
Constants = Constants_mod2;
({ RPCCommands, RPCErrors: metroImportAll } = Constants);
const items = [AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID];
const set = new Set(items);
value = { [RPCCommands.GET_PROVIDER_ACCESS_TOKEN]: obj2 };
obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  validation(string) {
    let stringResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { provider: stringResult.required(), connection_redirect: string.string() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    return keys(obj2);
  },
  handler(arg0) {
    let args;
    let require;
    let socket;
    function refreshProviderAccessToken() {
      return closure_1_10(...arguments);
    }
    ({ signal: require, socket, args } = arg0);
    const provider = args.provider;
    const connection_redirect = args.connection_redirect;
    let tmp = connection_redirect;
    let obj = require("RPCHelpers");
    let result = obj.validatePostMessageTransport(socket.transport);
    let obj2 = require("RPCHelpers");
    const tmp4 = provider;
    const validateApplicationResult = obj2.validateApplication(socket.application);
    let obj3 = provider(connection_redirect[10]);
    value = obj3.get(provider);
    let c3 = value;
    if (null == value) {
      const _HermesInternal = HermesInternal;
      const self7 = this;
      const self8 = this;
      const obj4 = { errorCode: constants.INVALID_PROVIDER };
      const tmp4Result = tmp4(tmp[7]);
      const tmp4Result1 = new tmp4Result(obj4, "Platform not found for provider \"" + provider + "\"");
      throw tmp4Result1;
    } else if (provider !== constants2.AMAZON_MUSIC) {
      const self5 = this;
      const str2 = "Command not available for this application";
      const self6 = this;
      const obj5 = { errorCode: constants.UNAUTHORIZED_FOR_APPLICATION };
      const tmp16 = new tmp4(tmp[7])(obj5, "Command not available for this application");
      throw tmp16;
    } else if (set.has(validateApplicationResult)) {
      let promise;
      const account = ConnectedAccountsStore.getAccount(null, provider);
      if (null != account) {
        promise = refreshProviderAccessToken(value.type, account.id);
      } else {
        const self3 = this;
        const self4 = this;
        promise = new Promise((arg0, arg1) => {
          let closure_0;
          const require = arg0;
          let closure_1 = arg1;
          function handleConnectionsUpdate(accounts) {
            let type;
            if (null != c3) {
              accounts = accounts.accounts;
              if (accounts == null) {
                accounts = [];
              }
              const found = accounts.find((type) => type.type === type.type);
              if (null != found) {
                const obj = { access_token: found.access_token };
                closure_0(obj);
                const removed = require.removeEventListener("abort", handleSocketDisconnected);
                const obj2 = DispatcherDefault;
                obj2.unsubscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
                const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                ComponentDispatch.unsubscribe(metroRequire.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
              }
            }
          }
          function handleConnectionsCallbackError() {
            const obj = { errorCode: metroImportAll.OAUTH2_ERROR };
            const tmp = RPCErrorDefault;
            const tmp2 = new tmp(obj, "OAuth2 setup for \"" + provider + "\" failed");
            closure_1(tmp2);
            const removed = require.removeEventListener("abort", handleSocketDisconnected);
            const obj2 = DispatcherDefault;
            obj2.unsubscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(metroRequire.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
          }
          function handleSocketDisconnected() {
            const obj = { errorCode: metroImportAll.OAUTH2_ERROR };
            const tmp = RPCErrorDefault;
            const tmp2 = new tmp(obj, "OAuth2 setup for \"" + provider + "\" was abandoned");
            closure_1(tmp2);
            const removed = require.removeEventListener("abort", handleSocketDisconnected);
            const obj2 = DispatcherDefault;
            obj2.unsubscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(metroRequire.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
          }
          let obj = require;
          if (require.aborted) {
            const result = handleSocketDisconnected();
          } else {
            let tmp = provider;
            let tmp2 = connection_redirect;
            let obj2 = provider(connection_redirect[11]);
            const subscription = obj2.subscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
            let ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
            const subscription1 = ComponentDispatch.subscribe(constants2.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
            const listener = obj.addEventListener("abort", handleSocketDisconnected, { once: true });
            const obj3 = { platformType: handleConnectionsCallbackError.type, location: constants.ACTIVITY_RPC, successRedirect: handleConnectionsUpdate };
            provider(connection_redirect[13])(obj3);
          }
        });
      }
      return promise;
    } else {
      const self = this;
      const str = "Command not available for this application";
      const self2 = this;
      const obj6 = { errorCode: constants.UNAUTHORIZED_FOR_APPLICATION };
      const tmp8 = new tmp4(tmp[7])(obj6, "Command not available for this application");
      throw tmp8;
    }
  }
};
items1 = [RPC_AUTHENTICATED_SCOPE];
let obj3 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  validation(string) {
    let stringResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { provider: stringResult.required() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    return keys(obj2);
  },
  handler() {
    return closure_11(...arguments);
  }
};
items2 = [RPC_AUTHENTICATED_SCOPE];
const MAYBE_GET_PROVIDER_ACCESS_TOKEN = RPCCommands.MAYBE_GET_PROVIDER_ACCESS_TOKEN;
let closure_11 = _asyncToGenerator(async function(arg0, value) {
  let closure_0;
  let obj6;
  _require = arg0;
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      let socket;
      let provider;
      let closure_2;
      let type;
      let id;
      let access_token;
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let closure_1 = tmp;
          socket = _require.socket;
          provider = _require.args.provider;
          closure_2 = undefined;
          type = undefined;
          id = undefined;
          access_token = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj14 = closure_130_0(closure_130_2[9]);
          const result = obj14.validatePostMessageTransport(socket.transport);
          const obj15 = closure_130_0(closure_130_2[9]);
          closure_2 = obj15.validateApplication(socket.application);
          const obj16 = closure_130_1(closure_130_2[10]);
          type = obj16.get(provider);
          if (null == type) {
            const obj5 = { errorCode: closure_130_8.INVALID_PROVIDER };
            const _HermesInternal = HermesInternal;
            const self9 = this;
            const self10 = this;
            const tmp50 = closure_130_1(closure_130_2[7]);
            const tmp502 = new tmp50(obj5, "Platform not found for provider \"" + provider + "\"");
            throw tmp502;
          } else if (provider !== closure_130_7.AMAZON_MUSIC) {
            const obj7 = { errorCode: closure_130_8.UNAUTHORIZED_FOR_APPLICATION };
            const self7 = this;
            const self8 = this;
            const tmp44 = new closure_130_1(closure_130_2[7])(obj7, "Command not available for this application");
            throw tmp44;
          } else if (closure_130_9.has(closure_2)) {
            id = closure_130_4.getAccount(null, provider);
            if (null == id) {
              const obj8 = { errorCode: closure_130_8.NO_CONNECTION_FOUND };
              const self5 = this;
              const self6 = this;
              const tmp37 = new closure_130_1(closure_130_2[7])(obj8, "No connection found");
              throw tmp37;
            } else {
              c3 = 2;
              c4 = 1;
              const obj9 = { value: obj6.refreshAccessToken(type.type, id.id), done: false };
              obj6 = closure_130_1(closure_130_2[6]);
              return obj9;
            }
          } else {
            const obj10 = { errorCode: closure_130_8.UNAUTHORIZED_FOR_APPLICATION };
            const self3 = this;
            const self4 = this;
            const tmp19 = new closure_130_1(closure_130_2[7])(obj10, "Command not available for this application");
            throw tmp19;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        access_token = value;
        if (null == access_token) {
          const obj12 = { errorCode: closure_130_8.OAUTH2_ERROR };
          const self = this;
          const self2 = this;
          const tmp12 = new closure_130_1(closure_130_2[7])(obj12, "Refreshing access token did not return a new access token");
          throw tmp12;
        } else {
          value = { access_token };
          c4 = 3;
          const obj13 = { value, done: true };
          return obj13;
        }
      }
    } catch (tmp58) {
      c4 = 3;
      throw tmp58;
    }
  }
});
value[MAYBE_GET_PROVIDER_ACCESS_TOKEN] = obj3;
let result = size.fileFinishedImporting("modules/rpc/server/commands/providers.tsx");

export default value;
