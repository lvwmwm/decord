// Module ID: 13335
// Function ID: 101290
// Name: RPCServer
// Dependencies: []

// Module 13335 (RPCServer)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const TransportTypes = arg1(dependencyMap[3]).TransportTypes;
({ AnalyticEvents: closure_6, RPCCloseCodes: closure_7, RPCCommands: closure_8, RPCErrors: closure_9, RPCEvents: closure_10 } = arg1(dependencyMap[4]));
let closure_11 = [];
const tmp2 = arg1(dependencyMap[4]);
const tmp3 = () => {
  class RPCServer {
    constructor(arg0) {
      tmp = closure_3(this, RPCServer);
      this.getCurrentUser = () => null;
      this.onConnect = () => {

      };
      this.onDisconnect = () => {

      };
      this.events = {};
      this.commands = {};
      set = new Set();
      this.sockets = set;
      this.subscriptions = [];
      set1 = new Set();
      this.isSubscribedListeners = set1;
      this.getJoi = arg0;
      return;
    }
  }
  const importDefault = RPCServer;
  let obj = {
    key: "registerTransport",
    value(on) {
      const RPCServer = this;
      on.on("connect", (arg0) => self.handleConnect(arg0));
      on.on("request", (arg0, arg1) => self.handleRequest(arg0, arg1));
      on.on("disconnect", (arg0, arg1) => self.handleDisconnect(arg0, arg1));
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "handleConnect",
    value(v) {
      const self = this;
      const sockets = this.sockets;
      sockets.add(v);
      this.onConnect(v);
      let obj = { v: v.version, config: obj };
      obj = { cdn_host: window.GLOBAL_ENV.CDN_HOST, api_endpoint: window.GLOBAL_ENV.API_ENDPOINT, environment: "production" };
      if (v.transport === constants.IPC) {
        const currentUser = self.getCurrentUser();
        if (null == currentUser) {
          v.close(constants3.CLOSE_NORMAL, "User logged out");
        } else {
          obj.user = RPCServer(closure_1[6])(currentUser);
        }
      }
      self.dispatch(v, null, constants4.DISPATCH, constants6.READY, obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "handleDisconnect",
    value(abortController) {
      abortController = abortController.abortController;
      abortController.abort("DISCONNECTED");
      this.removeSubscriptions(abortController);
      const sockets = this.sockets;
      sockets.delete(abortController);
      this.onDisconnect(abortController, arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleRequest",
    value(arg0, arg1) {
      const RPCServer = this;
      const self = this;
      const promise = new Promise((self, self2) => {
        if (null != self2.nonce) {
          if ("" !== self2.nonce) {
            const cmd = self2.cmd;
            if (null == self.commands[cmd]) {
              let tmp16 = self(self[7]);
              let obj = { errorCode: constants2.INVALID_COMMAND };
              const _HermesInternal = HermesInternal;
              const prototype2 = tmp16.prototype;
              tmp16 = new tmp16(obj, "Invalid command: " + self2.cmd);
              throw tmp16;
            } else if (self(self[8])(self.authorization.scopes, tmp30.scope)) {
              obj = { command: cmd };
              if ("object" === typeof tmp30.scope) {
                const _JSON = JSON;
                let scope = JSON.stringify(tmp30.scope);
              } else {
                scope = tmp30.scope;
              }
              obj.scope = scope;
              obj.application_id = self.application.id;
              obj.socket_scope = self.authorization.scopes.toString();
              tmp34(tmp35[9]).track(constants.RPC_COMMAND_SENT, obj);
              self(tmp30);
            } else {
              let tmp = tmp34(tmp35[7]);
              obj = { errorCode: constants2.INVALID_PERMISSIONS };
              const prototype = tmp.prototype;
              tmp = new tmp(obj, "Not authenticated or invalid scope");
              throw tmp;
            }
          }
        }
        let tmp25 = self(self[7]);
        tmp25 = new tmp25({ errorCode: constants2.INVALID_PAYLOAD }, "Payload requires a nonce");
        throw tmp25;
      });
      const nextPromise = new Promise((self, self2) => {
        if (null != self2.nonce) {
          if ("" !== self2.nonce) {
            const cmd = self2.cmd;
            if (null == self.commands[cmd]) {
              let tmp16 = self(self[7]);
              let obj = { errorCode: constants2.INVALID_COMMAND };
              const _HermesInternal = HermesInternal;
              const prototype2 = tmp16.prototype;
              tmp16 = new tmp16(obj, "Invalid command: " + self2.cmd);
              throw tmp16;
            } else if (self(self[8])(self.authorization.scopes, tmp30.scope)) {
              obj = { command: cmd };
              if ("object" === typeof tmp30.scope) {
                const _JSON = JSON;
                let scope = JSON.stringify(tmp30.scope);
              } else {
                scope = tmp30.scope;
              }
              obj.scope = scope;
              obj.application_id = self.application.id;
              obj.socket_scope = self.authorization.scopes.toString();
              tmp34(tmp35[9]).track(constants.RPC_COMMAND_SENT, obj);
              self(tmp30);
            } else {
              let tmp = tmp34(tmp35[7]);
              obj = { errorCode: constants2.INVALID_PERMISSIONS };
              const prototype = tmp.prototype;
              tmp = new tmp(obj, "Not authenticated or invalid scope");
              throw tmp;
            }
          }
        }
        let tmp25 = self(self[7]);
        tmp25 = new tmp25({ errorCode: constants2.INVALID_PAYLOAD }, "Payload requires a nonce");
        throw tmp25;
      }).then((arg0) => {
        const self = arg0;
        return new Promise(() => {
          // CreateGeneratorClosureLongIndex (0x67)
          let closure_0 = callback(tmp);
          return function() {
            return callback(...arguments);
          };
        }());
      });
      const nextPromise1 = new Promise((self, self2) => {
        if (null != self2.nonce) {
          if ("" !== self2.nonce) {
            const cmd = self2.cmd;
            if (null == self.commands[cmd]) {
              let tmp16 = self(self[7]);
              let obj = { errorCode: constants2.INVALID_COMMAND };
              const _HermesInternal = HermesInternal;
              const prototype2 = tmp16.prototype;
              tmp16 = new tmp16(obj, "Invalid command: " + self2.cmd);
              throw tmp16;
            } else if (self(self[8])(self.authorization.scopes, tmp30.scope)) {
              obj = { command: cmd };
              if ("object" === typeof tmp30.scope) {
                const _JSON = JSON;
                let scope = JSON.stringify(tmp30.scope);
              } else {
                scope = tmp30.scope;
              }
              obj.scope = scope;
              obj.application_id = self.application.id;
              obj.socket_scope = self.authorization.scopes.toString();
              tmp34(tmp35[9]).track(constants.RPC_COMMAND_SENT, obj);
              self(tmp30);
            } else {
              let tmp = tmp34(tmp35[7]);
              obj = { errorCode: constants2.INVALID_PERMISSIONS };
              const prototype = tmp.prototype;
              tmp = new tmp(obj, "Not authenticated or invalid scope");
              throw tmp;
            }
          }
        }
        let tmp25 = self(self[7]);
        tmp25 = new tmp25({ errorCode: constants2.INVALID_PAYLOAD }, "Payload requires a nonce");
        throw tmp25;
      }).then((arg0) => {
        const self = arg0;
        return new Promise(() => {
          // CreateGeneratorClosureLongIndex (0x67)
          let closure_0 = callback(tmp);
          return function() {
            return callback(...arguments);
          };
        }());
      }).then((handler, self) => {
        const obj = { socket: handler, server: self, cmd: self.cmd, evt: self.evt, nonce: self.nonce };
        let args = self.args;
        if (null == args) {
          args = {};
        }
        obj.args = args;
        obj.isSocketConnected = function isSocketConnected() {
          const sockets = sockets.sockets;
          return sockets.has(closure_1);
        };
        obj.signal = handler.abortController.signal;
        return handler.handler(obj);
      });
      new Promise((self, self2) => {
        if (null != self2.nonce) {
          if ("" !== self2.nonce) {
            const cmd = self2.cmd;
            if (null == self.commands[cmd]) {
              let tmp16 = self(self[7]);
              let obj = { errorCode: constants2.INVALID_COMMAND };
              const _HermesInternal = HermesInternal;
              const prototype2 = tmp16.prototype;
              tmp16 = new tmp16(obj, "Invalid command: " + self2.cmd);
              throw tmp16;
            } else if (self(self[8])(self.authorization.scopes, tmp30.scope)) {
              obj = { command: cmd };
              if ("object" === typeof tmp30.scope) {
                const _JSON = JSON;
                let scope = JSON.stringify(tmp30.scope);
              } else {
                scope = tmp30.scope;
              }
              obj.scope = scope;
              obj.application_id = self.application.id;
              obj.socket_scope = self.authorization.scopes.toString();
              tmp34(tmp35[9]).track(constants.RPC_COMMAND_SENT, obj);
              self(tmp30);
            } else {
              let tmp = tmp34(tmp35[7]);
              obj = { errorCode: constants2.INVALID_PERMISSIONS };
              const prototype = tmp.prototype;
              tmp = new tmp(obj, "Not authenticated or invalid scope");
              throw tmp;
            }
          }
        }
        let tmp25 = self(self[7]);
        tmp25 = new tmp25({ errorCode: constants2.INVALID_PAYLOAD }, "Payload requires a nonce");
        throw tmp25;
      }).then((arg0) => {
        const self = arg0;
        return new Promise(() => {
          // CreateGeneratorClosureLongIndex (0x67)
          let closure_0 = callback(tmp);
          return function() {
            return callback(...arguments);
          };
        }());
      }).then((handler, self) => {
        const obj = { socket: handler, server: self, cmd: self.cmd, evt: self.evt, nonce: self.nonce };
        let args = self.args;
        if (null == args) {
          args = {};
        }
        obj.args = args;
        obj.isSocketConnected = function isSocketConnected() {
          const sockets = sockets.sockets;
          return sockets.has(closure_1);
        };
        obj.signal = handler.abortController.signal;
        return handler.handler(obj);
      }).then((arg0, self) => self.dispatch(arg0, self.nonce, self.cmd, null, arg0)).catch((code, self) => self.error(code, self.nonce, self.cmd, code.code, code.message));
    }
  };
  items[4] = {
    key: "setCommandHandler",
    value(arg0, arg1) {
      this.commands[arg0] = arg1;
    }
  };
  items[5] = {
    key: "setEventHandler",
    value(arg0, arg1) {
      this.events[arg0] = arg1;
    }
  };
  items[6] = {
    key: "dispatch",
    value(send) {
      let tmp = arg1;
      let DISPATCH = arg2;
      let tmp2 = arg3;
      let tmp3 = arg4;
      if (arg1 === undefined) {
        tmp = null;
      }
      if (DISPATCH === undefined) {
        DISPATCH = constants4.DISPATCH;
      }
      if (tmp2 === undefined) {
        tmp2 = null;
      }
      if (tmp3 === undefined) {
        tmp3 = null;
      }
      const obj = { cmd: DISPATCH, data: tmp3, evt: tmp2, nonce: tmp };
      send.send(obj);
    }
  };
  items[7] = {
    key: "error",
    value(arg0) {
      let tmp = arg1;
      let DISPATCH = arg2;
      let UNKNOWN_ERROR = arg3;
      let str = arg4;
      const self = this;
      if (arg1 === undefined) {
        tmp = null;
      }
      if (DISPATCH === undefined) {
        DISPATCH = constants4.DISPATCH;
      }
      if (UNKNOWN_ERROR === undefined) {
        UNKNOWN_ERROR = constants5.UNKNOWN_ERROR;
      }
      if (str === undefined) {
        str = "Unknown Error";
      }
      let obj = RPCServer(closure_1[9]);
      obj = { command: DISPATCH, code: UNKNOWN_ERROR, message: str };
      obj.track(constants2.RPC_SERVER_ERROR_CAUGHT, obj);
      obj = { code: UNKNOWN_ERROR, message: str };
      self.dispatch(arg0, tmp, DISPATCH, constants6.ERROR, obj);
    }
  };
  items[8] = {
    key: "listenIsSubscribed",
    value(arg0) {
      const RPCServer = this;
      const isSubscribedListeners = this.isSubscribedListeners;
      isSubscribedListeners.add(arg0);
      return () => {
        const isSubscribedListeners = self.isSubscribedListeners;
        isSubscribedListeners.delete(arg0);
      };
    }
  };
  items[9] = {
    key: "dispatchIsSubscribedUpdate",
    value() {
      const prop = this.isSubscribedListeners;
      const item = prop.forEach((arg0) => arg0());
    }
  };
  items[10] = {
    key: "isSubscribed",
    value(arg0, arg1) {
      const RPCServer = arg0;
      const subscriptions = this.subscriptions;
      return undefined !== subscriptions.find((socket) => {
        let tmp = socket.socket.application.id === socket;
        if (tmp) {
          tmp = socket.evt === arg1;
        }
        return tmp;
      });
    }
  };
  items[11] = {
    key: "isChildSubscribed",
    value(arg0, arg1) {
      const RPCServer = arg0;
      let tmp = null != arg0;
      if (tmp) {
        const self = this;
        const subscriptions = this.subscriptions;
        tmp = undefined !== subscriptions.find((socket) => {
          let tmp = socket.socket.application.parentId === socket;
          if (tmp) {
            tmp = socket.evt === arg1;
          }
          return tmp;
        });
      }
      return tmp;
    }
  };
  items[12] = {
    key: "getSubscription",
    value(arg0, arg1, arg2) {
      const RPCServer = arg0;
      const subscriptions = this.subscriptions;
      return subscriptions.find((socket) => {
        let isEqualResult = socket.socket === socket;
        if (isEqualResult) {
          isEqualResult = socket.evt === arg1;
        }
        if (isEqualResult) {
          isEqualResult = socket(arg1[5]).isEqual(socket.args, arg2);
          const obj = socket(arg1[5]);
        }
        return isEqualResult;
      });
    }
  };
  items[13] = {
    key: "addSubscription",
    value(socket, evt, args) {
      let tmp = arg3;
      const self = this;
      if (arg3 === undefined) {
        tmp = null;
      }
      const dispatch = self.dispatch;
      const bindResult = dispatch.bind(self, socket, null, constants4.DISPATCH, evt);
      if (null == self.getSubscription(socket, evt, args)) {
        const subscriptions = self.subscriptions;
        let obj = { update: tmp, dispatch: bindResult };
        let tmpResult = null;
        if (tmp) {
          obj = { prevState: null, dispatch: bindResult };
          tmpResult = tmp(obj);
        }
        obj.prevState = tmpResult;
        obj.socket = socket;
        obj.evt = evt;
        obj.args = args;
        subscriptions.push(obj);
        const result = self.dispatchIsSubscribedUpdate();
      }
    }
  };
  items[14] = {
    key: "removeSubscription",
    value(arg0, arg1, arg2) {
      const RPCServer = arg0;
      RPCServer(arg1[5]).remove(this.subscriptions, (socket) => {
        let isEqualResult = socket.socket === socket;
        if (isEqualResult) {
          isEqualResult = socket.evt === arg1;
        }
        if (isEqualResult) {
          isEqualResult = socket(arg1[5]).isEqual(socket.args, arg2);
          const obj = socket(arg1[5]);
        }
        return isEqualResult;
      });
      const result = this.dispatchIsSubscribedUpdate();
    }
  };
  items[15] = {
    key: "removeSubscriptions",
    value(arg0) {
      const RPCServer = arg0;
      RPCServer(closure_1[5]).remove(this.subscriptions, (socket) => socket.socket === socket);
      const result = this.dispatchIsSubscribedUpdate();
    }
  };
  items[16] = {
    key: "dispatchToSubscriptions",
    value(arg0, arg1, arg2, arg3) {
      const RPCServer = this;
      let tmp = null != arg3;
      if (tmp) {
        tmp = "" !== arg3;
      }
      if (tmp) {
        const tmp3 = !arr.includes(arg3);
        let flag = !tmp3;
        if (tmp3) {
          const arr = arr.unshift(arg3);
          arr.splice(50);
          flag = false;
        }
        tmp = flag;
      }
      if (!tmp) {
        const subscriptions = this.subscriptions;
        const item = subscriptions.forEach((evt) => {
          if (evt.evt === evt) {
            let tmp2 = "function" === typeof arg1;
            if (tmp2) {
              tmp2 = !arg1(evt);
            }
            if (!tmp2) {
              let tmp4 = "object" === typeof arg1;
              if (tmp4) {
                let args = evt.args;
                if (null == args) {
                  args = {};
                }
                const obj2 = self(evt[5]);
                const _Object = Object;
                tmp4 = !obj2.isEqual(tmp5, self(evt[5]).pick(args, Object.keys(tmp5)));
                const obj3 = self(evt[5]);
              }
              tmp2 = tmp4;
            }
            if (!tmp2) {
              if ("function" === typeof callback) {
                const callback = callback(evt);
              }
              self.dispatch(evt.socket, null, constants.DISPATCH, evt.evt, callback);
            }
          }
        });
      }
    }
  };
  items[17] = {
    key: "updateSubscriptions",
    value() {
      const subscriptions = this.subscriptions;
      const item = subscriptions.forEach((update) => {
        if (update.update) {
          update.prevState = update.update(update);
        }
      });
    }
  };
  items[18] = {
    key: "storeWait",
    value(arg0, arg1, arg2) {
      const RPCServer = this;
      const tmp = arg1();
      if (!tmp) {
        if (0 !== arg2) {
          let closure_4 = RPCServer(arg0[5]).uniqueId();
          function removeSubscription(arg0, RPC_STORE_WAIT, arg2) {
            return self.removeSubscription(arg0, "RPC_STORE_WAIT", { uniqueId: closure_4 });
          }
          const promise = new Promise((arg0, arg1) => {
            const self = arg0;
            arg0 = arg1;
            const timeout = setTimeout(() => {
              callback2();
              const error = new Error("timeout");
              arg1(error);
            }, arg2 * self(arg0[11]).Millis.SECOND);
            self.addSubscription(arg0, "RPC_STORE_WAIT", { uniqueId: closure_4 }, () => {
              const tmp = callback();
              if (tmp) {
                const _clearTimeout = clearTimeout;
                clearTimeout(callback);
                arg0(tmp);
              }
            });
          });
          return promise.then((arg0) => {
            removeSubscription();
            return arg0;
          });
        }
      }
      return Promise.resolve(tmp);
    }
  };
  return callback(RPCServer, items);
}();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/rpc/RPCServer.tsx");

export default tmp3;
