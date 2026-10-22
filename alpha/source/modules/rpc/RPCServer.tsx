// Module ID: 9237
// Function ID: 9238
// Name: RPCServer
// Dependencies: [5, 6363, 1087, 12, 9238, 9240, 9242, 1267, 38, 9243, 9245, 4816, 1104, 2]

// Module 9237 (RPCServer)
import _modDef12 from "module_12" /* 12 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import Constants2 from "Constants" /* 6363 */;
import transformUserDefault from "transformUser" /* 9238 */;
import RPCErrorDefault from "RPCError" /* 9240 */;
import validateScopeDefault from "validateScope" /* 9242 */;
import RpcCommandInterception from "RpcCommandInterception" /* 9245 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let _self, c2, command, dependencyMap, importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const TransportTypes = Constants2.TransportTypes;
({ AnalyticEvents: hasOwnProperty, RPCCloseCodes: metroRequire, RPCCommands: metroImportDefault, RPCErrors: metroImportAll, RPCEvents: c9 } = Constants);
const RPC_STORE_WAIT = "RPC_STORE_WAIT";
const unpackModuleId = [];
let result = size.fileFinishedImporting("modules/rpc/RPCServer.tsx");
class RPCServer {
  constructor(getJoi) {
    const merged = Object.assign({ getCurrentUser: null, onConnect: null, onDisconnect: null, events: null, commands: null, sockets: null, subscriptions: null, isSubscribedListeners: null });
    merged[0] = function getCurrentUser() {
      return null;
    };
    merged[1] = function onConnect() {

    };
    merged[2] = function onDisconnect() {

    };
    merged[3] = {};
    merged[4] = {};
    merged[5] = new Set();
    merged[6] = [];
    new Set();
    merged[7] = new Set();
    merged.getJoi = getJoi;
    new Set();
    return merged;
  }
  registerTransport(item10017) {
    const self = this;
    item10017.on("connect", (arg0) => self.handleConnect(arg0));
    item10017.on("request", (arg0, arg1) => self.handleRequest(arg0, arg1));
    item10017.on("disconnect", (arg0, arg1) => self.handleDisconnect(arg0, arg1));
  }
  handleConnect(v) {
    let obj2;
    const self = this;
    const sockets = this.sockets;
    sockets.add(v);
    this.onConnect(v);
    const obj = { v: v.version, config: obj2 };
    obj2 = { cdn_host: window.GLOBAL_ENV.CDN_HOST, api_endpoint: window.GLOBAL_ENV.API_ENDPOINT, environment: "production" };
    if (v.transport === TransportTypes.IPC) {
      const currentUser = self.getCurrentUser();
      if (null == currentUser) {
        v.close(metroRequire.CLOSE_NORMAL, "User logged out");
      } else {
        obj.user = transformUserDefault(currentUser);
      }
    }
    self.dispatch(v, null, metroImportDefault.DISPATCH, constants5.READY, obj);
  }
  handleDisconnect(abortController, arg1) {
    abortController = abortController.abortController;
    abortController.abort("DISCONNECTED");
    this.removeSubscriptions(abortController);
    const sockets = this.sockets;
    sockets.delete(abortController);
    this.onDisconnect(abortController, arg1);
  }
  handleRequest(socket, arg1) {
    const f145649 = function() {
      return closure_0(...arguments);
    };
    let closure_2 = arg1;
    let self = this;
    let promise = new Promise(function(fn) {
      let scope;
      let str2;
      if (null != closure_2.nonce) {
        if ("" !== closure_2.nonce) {
          const cmd = tmp.cmd;
          if (null == self.commands[cmd]) {
            const _HermesInternal = HermesInternal;
            const self3 = this;
            const self4 = this;
            const obj2 = { errorCode: metroImportAll.INVALID_COMMAND };
            const tmp15 = RPCErrorDefault;
            const tmp152 = new tmp15(obj2, "Invalid command: " + closure_2.cmd);
            throw tmp152;
          } else if (validateScopeDefault(socket.authorization.scopes, self.commands[cmd].scope)) {
            const obj3 = { command: cmd, scope, application_id: socket.application.id, socket_scope: str2.toString() };
            const track = AnalyticsUtilsDefault.track;
            const RPC_COMMAND_SENT = hasOwnProperty.RPC_COMMAND_SENT;
            AnalyticsUtilsDefault;
            if (typeof self.commands[cmd].scope === "object") {
              const _JSON = JSON;
              scope = JSON.stringify(tmp23.scope);
            } else {
              scope = tmp23.scope;
            }
            const _Array = Array;
            str2 = Array.from(socket.authorization.scopes);
            track(RPC_COMMAND_SENT, obj3);
            fn(self.commands[cmd]);
          } else {
            self = this;
            const self2 = this;
            const obj = { errorCode: metroImportAll.INVALID_PERMISSIONS };
            const tmp4 = new RPCErrorDefault(obj, "Not authenticated or invalid scope");
            throw tmp4;
          }
        }
      }
      const obj4 = { errorCode: metroImportAll.INVALID_PAYLOAD };
      const tmp21 = new RPCErrorDefault(obj4, "Payload requires a nonce");
      throw tmp21;
    });
    const then = promise.then;
    self((value) => {
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0, value) {
        if (c4 === 2) {
          c4 = 3;
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
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                c2 = 0;
                closure_1 = undefined;
                let args;
                if (null != value.validation) {
                  c3 = 1;
                  c4 = 1;
                  const obj4 = { value: value.getJoi(), done: false };
                  return obj4;
                }
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                closure_1 = value;
                socket(closure_2_2[8])(null != value.validation, "command.validation must not be null");
                args = value.validation(closure_1);
                self = this;
                let self2 = this;
                const promise = new Promise((arg0, arg1) => {
                  closure_0 = arg0;
                  closure_1 = arg1;
                  closure_1_1.validate(args.args, closure_1_2, { convert: false }, function(message) {
                    if (null == message) {
                      closure_0();
                    } else {
                      self = this;
                      const self2 = this;
                      const obj = { errorCode: constants.INVALID_PAYLOAD };
                      const tmp6 = new closure_2_1(args[5])(obj, message.message);
                      closure_1(tmp6);
                    }
                  });
                });
                c3 = 2;
                c4 = 1;
                return { value: promise, done: false };
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj = { value, done: true };
              return obj;
            }
            let tmp6 = closure_1;
            c4 = 3;
            return { value, done: true };
          } catch (tmp8) {
            c4 = 3;
            throw tmp8;
          }
        }
      })();
    });
    const then2 = then(f145649).then;
    then(f145649);
    let closure_0 = self((command) => {
      let closure_1;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0) {
        let validateAccessResult;
        args = tmp;
        const obj8 = command(closure_2_2[9]);
        const isBotScopeOnlyResult = obj8.isBotScopeOnly(args, command.scope);
        const botScopeOnly = isBotScopeOnlyResult;
        const validateAccess = command.validateAccess;
        const tmp18 = args;
        if (validateAccess != null) {
          const obj4 = { socket: tmp18, args, botScopeOnly: isBotScopeOnlyResult };
          args = args.args ?? {};
          validateAccessResult = validateAccess(obj4);
        }
        yield validateAccessResult;
        return { command, botScopeOnly };
      })();
    });
    const then2Result = then2(function() {
      return closure_0(...arguments);
    });
    const nextPromise1 = then2Result.then((command) => {
      let args;
      let args1;
      command = command.command;
      const botScopeOnly = command.botScopeOnly;
      if (socket.source.type === TransportTypes.POST_MESSAGE) {
        const obj = { cmd: closure_2.cmd, iframeId: socket.source.iframeId, args };
        args = closure_2.args;
        const interceptRpcCommand = RpcCommandInterception.interceptRpcCommand;
        RpcCommandInterception;
        if (args == null) {
          args = {};
        }
        const interceptRpcCommandResult = interceptRpcCommand(obj);
        if (null != interceptRpcCommandResult) {
          return interceptRpcCommandResult.result;
        }
      }
      const obj2 = {
        socket,
        server: self,
        cmd: closure_2.cmd,
        evt: closure_2.evt,
        nonce: closure_2.nonce,
        args: args1,
        botScopeOnly,
        isSocketConnected() {
          sockets = sockets.sockets;
          return sockets.has(socket);
        },
        signal: socket.abortController.signal
      };
      args1 = closure_2.args;
      const handler = command.handler;
      if (args1 == null) {
        args1 = {};
      }
      return handler(obj2);
    });
    const nextPromise2 = nextPromise1.then((result) => self.dispatch(socket, closure_2.nonce, closure_2.cmd, null, result));
    nextPromise2.catch((error) => self.error(socket, closure_2.nonce, closure_2.cmd, error.code, error.message));
  }
  setCommandHandler(arg0, arg1) {
    this.commands[arg0] = arg1;
  }
  setEventHandler(arg0, arg1) {
    this.events[arg0] = arg1;
  }
  dispatch(send) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = null;
    }
    let DISPATCH = arg2;
    if (arg2 === undefined) {
      DISPATCH = metroImportDefault.DISPATCH;
    }
    let tmp3 = arg3;
    if (arg3 === undefined) {
      tmp3 = null;
    }
    let tmp4 = arg4;
    if (arg4 === undefined) {
      tmp4 = null;
    }
    send.send({ cmd: DISPATCH, data: tmp4, evt: tmp3, nonce: tmp });
  }
  error(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = null;
    }
    let DISPATCH = arg2;
    if (arg2 === undefined) {
      DISPATCH = metroImportDefault.DISPATCH;
    }
    let UNKNOWN_ERROR = arg3;
    if (arg3 === undefined) {
      UNKNOWN_ERROR = metroImportAll.UNKNOWN_ERROR;
    }
    let str = arg4;
    if (arg4 === undefined) {
      str = "Unknown Error";
    }
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.RPC_SERVER_ERROR_CAUGHT, { command: DISPATCH, code: UNKNOWN_ERROR, message: str });
    const obj2 = { code: UNKNOWN_ERROR, message: str };
    this.dispatch(arg0, tmp, DISPATCH, constants5.ERROR, obj2);
  }
  listenIsSubscribed(arg0) {
    const self = this;
    let closure_0 = arg0;
    let isSubscribedListeners = this.isSubscribedListeners;
    isSubscribedListeners.add(arg0);
    return () => {
      const isSubscribedListeners = self.isSubscribedListeners;
      isSubscribedListeners.delete(closure_0);
    };
  }
  dispatchIsSubscribedUpdate() {
    const prop = this.isSubscribedListeners;
    const item = prop.forEach((fn) => fn());
  }
  isSubscribed(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const subscriptions = this.subscriptions;
    return undefined !== subscriptions.find((socket) => socket.socket.application.id === closure_0 && socket.evt === closure_1);
  }
  isChildSubscribed(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let tmp = null != arg0;
    if (tmp) {
      const self = this;
      const subscriptions = this.subscriptions;
      tmp = undefined !== subscriptions.find((socket) => socket.socket.application.parentId === closure_0 && socket.evt === closure_1);
    }
    return tmp;
  }
  waitForSubscription(arg0, arg1, arg2) {
    let resolveResult;
    let self = this;
    let closure_1 = arg0;
    let closure_2 = arg1;
    let closure_0 = arg2;
    let subscriptions = this.subscriptions;
    if (subscriptions.some((evt) => {
      const tmp = evt.evt === closure_1_1 && timeout(evt);
      return tmp;
    })) {
      resolveResult = _Promise.resolve();
    } else {
      self = this;
      const self2 = this;
      resolveResult = new _Promise((arg0, arg1) => {
        let closure_3;
        closure_0 = arg0;
        closure_1 = arg1;
        const timeout = new closure_0(closure_2[11]).Timeout();
        _self = _self.listenIsSubscribed(() => {
          const subscriptions = self.subscriptions;
          if (subscriptions.some((evt) => {
            const tmp = evt.evt === closure_1_1 && timeout(evt);
            return tmp;
          })) {
            let tmp = timeout;
            timeout.stop();
            closure_3();
            closure_0();
          }
        });
        timeout.start(closure_0, () => {
          closure_3();
          const error = new Error("No subscription to " + closure_1 + " after " + closure_0 + "ms");
          closure_1(error);
        });
      });
    }
    return resolveResult;
  }
  getSubscription(socket, evt, c3) {
    let closure_0 = socket;
    let closure_1 = evt;
    let closure_2 = c3;
    const subscriptions = this.subscriptions;
    return subscriptions.find((socket) => {
      let isEqualResult = socket.socket === socket && socket.evt === evt;
      if (isEqualResult) {
        const obj = _modDef12;
        isEqualResult = obj.isEqual(socket.args, closure_2);
      }
      return isEqualResult;
    });
  }
  addSubscription(socket, evt, c3, arg3) {
    let tmpResult;
    let tmp = arg3;
    if (arg3 === undefined) {
      tmp = null;
    }
    const self = this;
    const sockets = this.sockets;
    if (sockets.has(socket)) {
      const dispatch = self.dispatch;
      const bindResult = dispatch.bind(self, socket, null, metroImportDefault.DISPATCH, evt);
      if (null == self.getSubscription(socket, evt, c3)) {
        const subscriptions = self.subscriptions;
        const obj = { update: tmp, dispatch: bindResult, prevState: tmpResult, socket, evt, args: c3 };
        tmpResult = null;
        const push = subscriptions.push;
        if (tmp) {
          const obj2 = { prevState: null, dispatch: bindResult };
          tmpResult = tmp(obj2);
        }
        push(obj);
        const result = self.dispatchIsSubscribedUpdate();
      }
    }
  }
  removeSubscription(arg0, arg1, arg2) {
    let closure_1;
    let closure_2;
    let closure_0 = arg0;
    importDefault = arg1;
    dependencyMap = arg2;
    let obj = _modDef12;
    obj.remove(this.subscriptions, (socket) => {
      let isEqualResult = socket.socket === closure_0 && socket.evt === closure_1;
      if (isEqualResult) {
        const obj = _modDef12;
        isEqualResult = obj.isEqual(socket.args, closure_2);
      }
      return isEqualResult;
    });
    const result = this.dispatchIsSubscribedUpdate();
  }
  removeSubscriptions(abortController) {
    let closure_0 = abortController;
    const obj = _modDef12;
    obj.remove(this.subscriptions, (socket) => socket.socket === closure_0);
    const result = this.dispatchIsSubscribedUpdate();
  }
  dispatchToSubscriptions(RELATIONSHIP_UPDATE, targetsFrame, arg2, combined) {
    const self = this;
    let closure_1 = RELATIONSHIP_UPDATE;
    let closure_2 = targetsFrame;
    let closure_0 = arg2;
    let tmp = null != combined && "" !== combined;
    if (tmp) {
      let flag = closure_11.includes(combined);
      if (!flag) {
        closure_11.unshift(combined);
        closure_11.splice(50);
        flag = false;
      }
      tmp = flag;
    }
    if (!tmp) {
      const subscriptions = this.subscriptions;
      const item = subscriptions.forEach((evt) => {
        if (evt.evt === RELATIONSHIP_UPDATE) {
          if (typeof targetsFrame !== "function") {
            if (typeof targetsFrame !== "object") {
              let tmp5Result = closure_0;
              if (typeof closure_0 === "function") {
                tmp5Result = tmp5(evt);
              }
              self.dispatch(evt.socket, null, metroImportDefault.DISPATCH, evt.evt, tmp5Result);
            } else {
              let args = evt.args;
              if (args == null) {
                args = {};
              }
              const isEqual = _modDef12.isEqual;
              _modDef12;
              const _Object = Object;
              _modDef12;
            }
          }
        }
      });
    }
  }
  updateSubscriptions() {
    const subscriptions = this.subscriptions;
    const item = subscriptions.forEach((update) => {
      if (update.update) {
        update.prevState = update.update(update);
      }
    });
  }
  storeWait(socket, fn, timeout) {
    let self = this;
    importDefault = socket;
    dependencyMap = fn;
    let closure_3 = timeout;
    let tmp = fn();
    if (!tmp) {
      if (0 !== timeout) {
        let obj = _modDef12;
        const uniqueId = obj.uniqueId();
        function removeSubscription() {

        }
        self = this;
        let self2 = this;
        const promise = new Promise((arg0, socket) => {
          let closure_2;
          let closure_0 = arg0;
          timeout = setTimeout(function() {
            if (typeof removeSubscription === "function") {
              const obj = { uniqueId };
              self.removeSubscription(socket, closure_1_10, obj);
              const _Error = Error;
              self = this;
              const self2 = this;
              const error = new Error("timeout");
              socket(error);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }, closure_3 * socket(timeout[12]).Millis.SECOND);
          let obj = { uniqueId };
          self.addSubscription(socket, RPC_STORE_WAIT, obj, () => {
            const tmp = fn();
            if (tmp) {
              const _clearTimeout = clearTimeout;
              clearTimeout(fn);
              closure_0(tmp);
            }
          });
        });
        return promise.then((result) => {
          if (typeof removeSubscription === "function") {
            const obj = { uniqueId };
            self.removeSubscription(socket, RPC_STORE_WAIT, obj);
            return result;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
      }
    }
    return Promise.resolve(tmp);
  }
}
const prototype = RPCServer.prototype;

export default RPCServer;
