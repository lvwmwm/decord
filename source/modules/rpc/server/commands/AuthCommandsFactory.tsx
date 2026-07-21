// Module ID: 13318
// Function ID: 101167
// Name: authorizeWithPrompt
// Dependencies: []
// Exports: default

// Module 13318 (authorizeWithPrompt)
function authorizeWithPrompt() {
  return _authorizeWithPrompt(...arguments);
}
function _authorizeWithPrompt() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _authorizeWithPrompt = obj;
  return obj(...arguments);
}
function authenticate(authorization) {
  const arg1 = authorization;
  const importDefault = arg1;
  if (authorization.authorization.accessToken) {
    let tmp16 = importDefault(dependencyMap[10]);
    let obj = { errorCode: constants2.INVALID_COMMAND };
    const prototype2 = tmp16.prototype;
    tmp16 = new tmp16(obj, "Already authenticated");
    throw tmp16;
  } else if (authorization.authorization.authing) {
    let tmp7 = importDefault(dependencyMap[10]);
    obj = { errorCode: constants2.INVALID_COMMAND };
    const prototype = tmp7.prototype;
    tmp7 = new tmp7(obj, "Already authenticating");
    throw tmp7;
  } else {
    authorization.authorization.authing = true;
    const HTTP = arg1(dependencyMap[19]).HTTP;
    obj = { url: OAUTH2_CURRENT_AUTH.OAUTH2_CURRENT_AUTH };
    const obj1 = {};
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
      body.authorization.authing = false;
      body = body.body;
      ({ user, scopes, expires } = body);
      if (body.application.id !== body.application.id) {
        let tmp12 = arg1(closure_3[10]);
        let obj = { errorCode: constants.INVALID_CLIENTID };
        const prototype2 = tmp12.prototype;
        tmp12 = new tmp12(obj, "Application does not match the connection's");
        throw tmp12;
      } else {
        const currentUser = currentUser.getCurrentUser();
        if (null != currentUser) {
          if (user) {
            if (currentUser.id === user.id) {
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(scopes, HermesBuiltin.arraySpread(body.authorization.scopes, 0));
              items[arraySpreadResult] = closure_10;
              const sum = arraySpreadResult + 1;
              body.authorization.scopes = items;
              body.authorization.accessToken = arg1;
              const _Date = Date;
              const date = new Date(expires);
              body.authorization.expires = date;
              obj = { type: "RPC_APP_AUTHENTICATED" };
              ({ id: obj4.socketId, application: obj4.application } = body);
              arg1(closure_3[20]).dispatch(obj);
              const obj1 = {};
              const merged = Object.assign(body.body);
              obj1["access_token"] = arg1;
              return obj1;
            }
          }
        }
        let tmp3 = arg1(closure_3[10]);
        obj = { errorCode: constants.INVALID_TOKEN };
        const prototype = tmp3.prototype;
        tmp3 = new tmp3(obj, "Token does not match current user");
        throw tmp3;
      }
    }, () => {
      let tmp = arg1(closure_3[10]);
      tmp = new tmp({ errorCode: constants.INVALID_TOKEN }, "Invalid access token: " + arg1);
      throw tmp;
    }).catch((arg0) => {
      arg0.authorization.authing = false;
      throw arg0;
    });
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
({ TransportTypes: closure_9, RPC_AUTHENTICATED_SCOPE: closure_10, RPC_PRIVATE_SCOPE: closure_11 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ ApplicationFlags: closure_12, Endpoints: closure_13, RPCCommands: closure_14, RPCErrors: closure_15 } = arg1(dependencyMap[6]));
const obj = {};
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult(2, importDefault(dependencyMap[8]).Millis.MINUTE);
obj["1273616940451102832"] = importDefaultResult;
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/rpc/server/commands/AuthCommandsFactory.tsx");

export default function createAuthCommandHandlers(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let obj = {};
  obj = {
    handler(socket) {
      socket = socket.socket;
      const arg1 = socket.signal;
      const access_token = socket.args.access_token;
      let id;
      let IDENTIFY;
      let _authorize;
      if (null == access_token) {
        if (socket.transport === constants.IPC) {
          id = socket.application.id;
          if (null == id) {
            let tmp22 = arg1(IDENTIFY[10]);
            let obj = { errorCode: constants2.INVALID_COMMAND };
            const prototype2 = tmp22.prototype;
            tmp22 = new tmp22(obj, "No application.");
            throw tmp22;
          } else {
            IDENTIFY = socket(IDENTIFY[22]).OAuth2Scopes.IDENTIFY;
            _authorize = function _authorize() {
              return callback({ client_id: id, scope: IDENTIFY, response_type: "token", signal, isSocketRpcPrivateScope: false }, socket, signal).then((str) => {
                let access_token;
                let expires_in;
                let scope;
                if (null == str) {
                  let tmp19 = callback2(closure_3[10]);
                  let obj = { errorCode: closure_15.UNKNOWN_ERROR };
                  const prototype2 = tmp19.prototype;
                  tmp19 = new tmp19(obj, "Unknown error occurred");
                  throw tmp19;
                } else {
                  const parts = str.split(/#|\?/);
                  const parsed = callback2(closure_3[23]).parse(parts[parts.length - 1]);
                  if (null != parsed.error) {
                    let tmp9 = callback2(closure_3[10]);
                    obj = { errorCode: closure_15.OAUTH2_ERROR };
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
                    const Storage2 = callback(closure_3[9]).Storage;
                    let obj1 = Storage2.get("CachedTokens");
                    if (null == obj1) {
                      obj1 = {};
                    }
                    const obj2 = { accessToken: access_token, scope };
                    const _Date = Date;
                    obj2.expires = Date.now() + expires_in;
                    obj1[closure_2] = obj2;
                    const Storage = callback(closure_3[9]).Storage;
                    const result = Storage.set("CachedTokens", obj1);
                    return callback3(callback, parsed.access_token);
                  }
                  const obj5 = callback2(closure_3[23]);
                }
              });
            };
            const Storage2 = socket(IDENTIFY[9]).Storage;
            const value = Storage2.get("CachedTokens");
            let accessToken;
            if (null != value) {
              if (null != value[id]) {
                if (value[id].scope === IDENTIFY) {
                  const _Date = Date;
                  if (tmp13.expires > Date.now()) {
                    accessToken = tmp13.accessToken;
                  }
                }
                delete r9[r7];
                const Storage = socket(IDENTIFY[9]).Storage;
                const result = Storage.set("CachedTokens", value);
              }
            }
            if (null != accessToken) {
              let catchPromise = callback2(socket, accessToken).catch(() => {
                const Storage = socket(IDENTIFY[9]).Storage;
                let obj = Storage.get("CachedTokens");
                if (null == obj) {
                  obj = {};
                }
                delete r4[r3];
                const Storage2 = socket(IDENTIFY[9]).Storage;
                const result = Storage2.set("CachedTokens", obj);
                return _authorize();
              });
              const promise = callback2(socket, accessToken);
            } else {
              catchPromise = _authorize();
            }
            return catchPromise;
          }
        }
      }
      if (null == access_token) {
        let tmp5 = arg1(IDENTIFY[10]);
        obj = { errorCode: constants2.INVALID_TOKEN };
        const prototype = tmp5.prototype;
        tmp5 = new tmp5(obj, "No access token provided");
        throw tmp5;
      } else {
        return callback2(socket, access_token);
      }
    }
  };
  obj[constants.AUTHENTICATE] = arg1(dependencyMap[21]).createRPCCommand(constants.AUTHENTICATE, obj);
  obj[constants.AUTHORIZE] = {
    handler(socket) {
      socket = socket.socket;
      const args = socket.args;
      let arg1;
      const client_id = args.client_id;
      if (client_id) {
        if (null != socket.authorization.accessToken) {
          let tmp48 = arg1(closure_3[10]);
          let obj = { errorCode: constants2.INVALID_COMMAND };
          const prototype5 = tmp48.prototype;
          tmp48 = new tmp48(obj, "Already authenticated");
          throw tmp48;
        } else if (socket.authorization.authing) {
          let tmp39 = arg1(closure_3[10]);
          obj = { errorCode: constants2.INVALID_COMMAND };
          const prototype4 = tmp39.prototype;
          tmp39 = new tmp39(obj, "Already authing");
          throw tmp39;
        } else {
          socket.authorization.authing = true;
          if ("token" === args.response_type) {
            socket.authorization.authing = false;
            let tmp30 = arg1(closure_3[10]);
            const obj1 = { errorCode: constants2.INVALID_COMMAND };
            const prototype3 = tmp30.prototype;
            tmp30 = new tmp30(obj1, "Authorization response_type \"token\" is not supported");
            throw tmp30;
          } else {
            const scopes = socket.authorization.scopes;
            const hasItem = scopes.includes(closure_11);
            arg1 = hasItem;
            if (!hasItem) {
              if (socket.application.id !== client_id) {
                socket.authorization.authing = false;
                let tmp14 = arg1(closure_3[10]);
                const obj2 = { errorCode: constants2.INVALID_CLIENTID };
                const prototype2 = tmp14.prototype;
                tmp14 = new tmp14(obj2, "Application does not match the connection's");
                throw tmp14;
              }
            }
            delete r2.scopes;
            const obj3 = {};
            const merged = Object.assign(args);
            obj3["scope"] = args.scopes || args.scope;
            obj3["signal"] = tmp;
            obj3["isSocketRpcPrivateScope"] = hasItem;
            const promise = callback(obj3, socket, arg1);
            const tmp21 = args.scopes || args.scope;
            return callback(obj3, socket, arg1).then((location) => {
              socket.authorization.authing = false;
              if (null == location) {
                let tmp23 = hasItem(closure_3[10]);
                let obj = { errorCode: closure_15.UNKNOWN_ERROR };
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
                      let tmp14 = hasItem(closure_3[10]);
                      const obj1 = { errorCode: closure_15.OAUTH2_ERROR };
                      const _HermesInternal = HermesInternal;
                      const prototype2 = tmp14.prototype;
                      tmp14 = new tmp14(obj1, "OAuth2 Error: " + value + ": " + str5);
                      throw tmp14;
                    }
                  }
                  if (null == value) {
                    let tmp4 = hasItem(closure_3[10]);
                    const obj2 = { errorCode: closure_15.OAUTH2_ERROR };
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
        let tmp4 = arg1(closure_3[10]);
        obj = { errorCode: constants2.INVALID_CLIENTID };
        const prototype = tmp4.prototype;
        tmp4 = new tmp4(obj, "No client id provided");
        throw tmp4;
      }
    }
  };
  return obj;
};
export const AUTHORIZE_PROMPT_THROTTLERS = obj;
