// Module ID: 13492
// Function ID: 103683
// Name: authorizeWithPrompt
// Dependencies: [57, 5, 4167, 4153, 1849, 4033, 653, 10532, 664, 587, 10525, 7371, 8224, 10846, 9000, 8996, 9002, 3763, 483, 507, 686, 13456, 8354, 1440, 2]
// Exports: default

// Module 13492 (authorizeWithPrompt)
import _slicedToArray from "_slicedToArray";
import closure_5 from "RPC_SCOPE_CONFIG";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_8 from "_isNativeReflectConstruct";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import importDefaultResult from "LeakyBucket";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
const require = arg1;
function authorizeWithPrompt() {
  return _authorizeWithPrompt(...arguments);
}
function _authorizeWithPrompt() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function authenticate(authorization) {
  const _require = authorization;
  const importDefault = arg1;
  if (authorization.authorization.accessToken) {
    let tmp16 = importDefault(10525);
    let obj = { errorCode: constants2.INVALID_COMMAND };
    let prototype2 = tmp16.prototype;
    tmp16 = new tmp16(obj, "Already authenticated");
    throw tmp16;
  } else if (authorization.authorization.authing) {
    let tmp7 = importDefault(10525);
    obj = { errorCode: constants2.INVALID_COMMAND };
    let prototype = tmp7.prototype;
    tmp7 = new tmp7(obj, "Already authenticating");
    throw tmp7;
  } else {
    authorization.authorization.authing = true;
    const HTTP = _require(507).HTTP;
    obj = { url: OAUTH2_CURRENT_AUTH.OAUTH2_CURRENT_AUTH };
    let obj1 = {};
    const _HermesInternal = HermesInternal;
    obj1.Authorization = "Bearer " + arg1;
    obj.headers = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = false;
    const value = HTTP.get(obj);
    return value.then((body) => {
      let expires;
      let scopes;
      let user;
      authorization.authorization.authing = false;
      body = body.body;
      ({ user, scopes, expires } = body);
      if (authorization.application.id !== body.application.id) {
        let tmp12 = callback(outer1_3[10]);
        let obj = { errorCode: outer1_15.INVALID_CLIENTID };
        const prototype2 = tmp12.prototype;
        tmp12 = new tmp12(obj, "Application does not match the connection's");
        throw tmp12;
      } else {
        const currentUser = outer1_8.getCurrentUser();
        if (null != currentUser) {
          if (user) {
            if (currentUser.id === user.id) {
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(scopes, HermesBuiltin.arraySpread(authorization.authorization.scopes, 0));
              items[arraySpreadResult] = outer1_10;
              const sum = arraySpreadResult + 1;
              authorization.authorization.scopes = items;
              authorization.authorization.accessToken = callback;
              const _Date = Date;
              const date = new Date(expires);
              authorization.authorization.expires = date;
              obj = { type: "RPC_APP_AUTHENTICATED" };
              ({ id: obj4.socketId, application: obj4.application } = authorization);
              callback(outer1_3[20]).dispatch(obj);
              const obj1 = {};
              const merged = Object.assign(body.body);
              obj1["access_token"] = callback;
              return obj1;
            }
          }
        }
        let tmp3 = callback(outer1_3[10]);
        obj = { errorCode: outer1_15.INVALID_TOKEN };
        const prototype = tmp3.prototype;
        tmp3 = new tmp3(obj, "Token does not match current user");
        throw tmp3;
      }
    }, () => {
      let tmp = callback(outer1_3[10]);
      tmp = new tmp({ errorCode: outer1_15.INVALID_TOKEN }, "Invalid access token: " + callback);
      throw tmp;
    }).catch((arg0) => {
      authorization.authorization.authing = false;
      throw arg0;
    });
  }
}
({ TransportTypes: closure_9, RPC_AUTHENTICATED_SCOPE: closure_10, RPC_PRIVATE_SCOPE: closure_11 } = RPC_SCOPE_CONFIG);
({ ApplicationFlags: closure_12, Endpoints: closure_13, RPCCommands: closure_14, RPCErrors: closure_15 } = ME);
let obj = {};
importDefaultResult = new importDefaultResult(2, require("set").Millis.MINUTE);
obj["1273616940451102832"] = importDefaultResult;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/server/commands/AuthCommandsFactory.tsx");

export default function createAuthCommandHandlers(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = {};
  obj = {
    handler(socket) {
      socket = socket.socket;
      const signal = socket.signal;
      const access_token = socket.args.access_token;
      let id;
      let IDENTIFY;
      let _authorize;
      if (null == access_token) {
        if (socket.transport === outer1_9.IPC) {
          id = socket.application.id;
          if (null == id) {
            let tmp24 = callback2(outer1_3[10]);
            let obj = { errorCode: outer1_15.INVALID_COMMAND };
            let prototype2 = tmp24.prototype;
            tmp24 = new tmp24(obj, "No application.");
            throw tmp24;
          } else {
            IDENTIFY = callback(outer1_3[22]).OAuth2Scopes.IDENTIFY;
            _authorize = function _authorize() {
              return outer2_17({ client_id: id, scope: IDENTIFY, response_type: "token", signal, isSocketRpcPrivateScope: false }, socket, signal).then((str) => {
                let access_token;
                let expires_in;
                let scope;
                if (null == str) {
                  let tmp19 = callback2(outer3_3[10]);
                  let obj = { errorCode: outer3_15.UNKNOWN_ERROR };
                  const prototype2 = tmp19.prototype;
                  tmp19 = new tmp19(obj, "Unknown error occurred");
                  throw tmp19;
                } else {
                  const parts = str.split(/#|\?/);
                  const parsed = callback2(outer3_3[23]).parse(parts[parts.length - 1]);
                  if (null != parsed.error) {
                    let tmp9 = callback2(outer3_3[10]);
                    obj = { errorCode: outer3_15.OAUTH2_ERROR };
                    const error_description = parsed.error_description;
                    str = "unknown error";
                    if (null != error_description) {
                      str = error_description;
                    }
                    const _HermesInternal = HermesInternal;
                    const prototype = tmp9.prototype;
                    tmp9 = new tmp9(obj, "OAuth2 Error: " + parsed.error + ": " + str);
                    throw tmp9;
                  } else {
                    ({ access_token, scope, expires_in } = parsed);
                    const Storage2 = callback(outer3_3[9]).Storage;
                    let obj1 = Storage2.get("CachedTokens");
                    if (null == obj1) {
                      obj1 = {};
                    }
                    const obj2 = { accessToken: access_token, scope };
                    const _Date = Date;
                    obj2.expires = Date.now() + expires_in;
                    obj1[outer1_2] = obj2;
                    const Storage = callback(outer3_3[9]).Storage;
                    const result = Storage.set("CachedTokens", obj1);
                    return outer3_19(outer1_0, parsed.access_token);
                  }
                  const obj5 = callback2(outer3_3[23]);
                }
              });
            };
            let Storage2 = callback(outer1_3[9]).Storage;
            const value = Storage2.get("CachedTokens");
            let accessToken;
            if (null != value) {
              if (null != value[id]) {
                if (value[id].scope === IDENTIFY) {
                  let _Date = Date;
                  if (tmp15.expires > Date.now()) {
                    accessToken = tmp15.accessToken;
                  }
                }
                delete tmp2[tmp];
                let Storage = callback(outer1_3[9]).Storage;
                let result = Storage.set("CachedTokens", value);
              }
            }
            if (null != accessToken) {
              let catchPromise = outer1_19(socket, accessToken).catch(() => {
                const Storage = socket(outer2_3[9]).Storage;
                let obj = Storage.get("CachedTokens");
                if (null == obj) {
                  obj = {};
                }
                delete tmp2[tmp];
                const Storage2 = socket(outer2_3[9]).Storage;
                const result = Storage2.set("CachedTokens", obj);
                return _authorize();
              });
              const promise = outer1_19(socket, accessToken);
            } else {
              catchPromise = _authorize();
            }
            return catchPromise;
          }
        }
      }
      if (null == access_token) {
        let tmp7 = callback2(outer1_3[10]);
        obj = { errorCode: outer1_15.INVALID_TOKEN };
        let prototype = tmp7.prototype;
        tmp7 = new tmp7(obj, "No access token provided");
        throw tmp7;
      } else {
        return outer1_19(socket, access_token);
      }
    }
  };
  obj[constants.AUTHENTICATE] = _require(13456).createRPCCommand(constants.AUTHENTICATE, obj);
  obj[constants.AUTHORIZE] = {
    handler(socket) {
      socket = socket.socket;
      const args = socket.args;
      let hasItem;
      const client_id = args.client_id;
      if (client_id) {
        if (null != socket.authorization.accessToken) {
          let tmp49 = callback2(outer1_3[10]);
          let obj = { errorCode: outer1_15.INVALID_COMMAND };
          const prototype5 = tmp49.prototype;
          tmp49 = new tmp49(obj, "Already authenticated");
          throw tmp49;
        } else if (socket.authorization.authing) {
          let tmp40 = callback2(outer1_3[10]);
          obj = { errorCode: outer1_15.INVALID_COMMAND };
          let prototype4 = tmp40.prototype;
          tmp40 = new tmp40(obj, "Already authing");
          throw tmp40;
        } else {
          socket.authorization.authing = true;
          if ("token" === args.response_type) {
            socket.authorization.authing = false;
            let tmp31 = callback2(outer1_3[10]);
            let obj1 = { errorCode: outer1_15.INVALID_COMMAND };
            let prototype3 = tmp31.prototype;
            tmp31 = new tmp31(obj1, "Authorization response_type \"token\" is not supported");
            throw tmp31;
          } else {
            const scopes = socket.authorization.scopes;
            hasItem = scopes.includes(outer1_11);
            if (!hasItem) {
              if (socket.application.id !== client_id) {
                socket.authorization.authing = false;
                let tmp15 = callback2(outer1_3[10]);
                let obj2 = { errorCode: outer1_15.INVALID_CLIENTID };
                let prototype2 = tmp15.prototype;
                tmp15 = new tmp15(obj2, "Application does not match the connection's");
                throw tmp15;
              }
            }
            delete tmp.scopes;
            const obj3 = {};
            const merged = Object.assign(args);
            obj3["scope"] = args.scopes || args.scope;
            obj3["signal"] = tmp2;
            obj3["isSocketRpcPrivateScope"] = hasItem;
            const promise = outer1_17(obj3, socket, hasItem);
            const tmp22 = args.scopes || args.scope;
            return outer1_17(obj3, socket, hasItem).then((location) => {
              socket.authorization.authing = false;
              if (null == location) {
                let tmp23 = hasItem(outer2_3[10]);
                let obj = { errorCode: outer2_15.UNKNOWN_ERROR };
                const prototype3 = tmp23.prototype;
                tmp23 = new tmp23(obj, "Unknown error occurred");
                throw tmp23;
              } else {
                const _URL = URL;
                const uRL = new URL(location);
                const searchParams3 = uRL.searchParams;
                let value = searchParams3.get("code");
                if (hasItem) {
                  obj = { code: value, location };
                  return obj;
                } else {
                  const searchParams = uRL.searchParams;
                  value = searchParams.get("error");
                  if (null != value) {
                    if ("" !== value) {
                      const searchParams2 = uRL.searchParams;
                      const value1 = searchParams2.get("error_description");
                      let str5 = "unknown error";
                      if (null != value1) {
                        str5 = value1;
                      }
                      let tmp14 = hasItem(outer2_3[10]);
                      const obj1 = { errorCode: outer2_15.OAUTH2_ERROR };
                      const _HermesInternal = HermesInternal;
                      const prototype2 = tmp14.prototype;
                      tmp14 = new tmp14(obj1, "OAuth2 Error: " + value + ": " + str5);
                      throw tmp14;
                    }
                  }
                  if (null == value) {
                    let tmp4 = hasItem(outer2_3[10]);
                    const obj2 = { errorCode: outer2_15.OAUTH2_ERROR };
                    const prototype = tmp4.prototype;
                    tmp4 = new tmp4(obj2, "OAuth2 Error: Unable to find auth code");
                    throw tmp4;
                  } else {
                    obj = { code: value };
                    return obj;
                  }
                }
              }
            }).catch((arg0) => {
              socket.authorization.authing = false;
              throw arg0;
            });
          }
        }
      } else {
        let tmp5 = callback2(outer1_3[10]);
        obj = { errorCode: outer1_15.INVALID_CLIENTID };
        let prototype = tmp5.prototype;
        tmp5 = new tmp5(obj, "No client id provided");
        throw tmp5;
      }
    }
  };
  return obj;
};
export const AUTHORIZE_PROMPT_THROTTLERS = obj;
