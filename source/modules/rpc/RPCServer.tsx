// Module ID: 13502
// Function ID: 103773
// Name: RPCServer
// Dependencies: [5, 6, 7, 4033, 653, 22, 10531, 10525, 13480, 675, 44, 664, 2]

// Module 13502 (RPCServer)
import apply from "apply";
import transformUser from "transformUser";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import ME from "ME";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
({ AnalyticEvents: closure_6, RPCCloseCodes: closure_7, RPCCommands: closure_8, RPCErrors: closure_9, RPCEvents: closure_10 } = ME);
let closure_11 = [];
let tmp3 = (() => {
  class RPCServer {
    constructor(arg0) {
      tmp = outer1_3(this, RPCServer);
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
  let obj = {
    key: "registerTransport",
    value(on) {
      const self = this;
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
      obj = { v: v.version, config: obj };
      obj = { cdn_host: window.GLOBAL_ENV.CDN_HOST, api_endpoint: window.GLOBAL_ENV.API_ENDPOINT, environment: "production" };
      if (v.transport === outer1_5.IPC) {
        const currentUser = self.getCurrentUser();
        if (null == currentUser) {
          v.close(outer1_7.CLOSE_NORMAL, "User logged out");
        } else {
          obj.user = RPCServer(outer1_1[6])(currentUser);
        }
      }
      self.dispatch(v, null, outer1_8.DISPATCH, outer1_10.READY, obj);
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
      let self = this;
      let closure_1 = arg0;
      let apply = arg1;
      self = this;
      const promise = new Promise((arg0) => {
        if (null != apply.nonce) {
          if ("" !== apply.nonce) {
            const cmd = apply.cmd;
            if (null == self.commands[cmd]) {
              let tmp16 = RPCServer(outer2_1[7]);
              let obj = { errorCode: outer2_9.INVALID_COMMAND };
              const _HermesInternal = HermesInternal;
              const prototype2 = tmp16.prototype;
              tmp16 = new tmp16(obj, "Invalid command: " + apply.cmd);
              throw tmp16;
            } else if (RPCServer(outer2_1[8])(closure_1.authorization.scopes, tmp30.scope)) {
              obj = { command: cmd };
              if ("object" === typeof tmp30.scope) {
                const _JSON = JSON;
                let scope = JSON.stringify(tmp30.scope);
              } else {
                scope = tmp30.scope;
              }
              obj.scope = scope;
              obj.application_id = closure_1.application.id;
              obj.socket_scope = closure_1.authorization.scopes.toString();
              tmp34(tmp35[9]).track(outer2_6.RPC_COMMAND_SENT, obj);
              arg0(tmp30);
            } else {
              let tmp = tmp34(tmp35[7]);
              obj = { errorCode: outer2_9.INVALID_PERMISSIONS };
              const prototype = tmp.prototype;
              tmp = new tmp(obj, "Not authenticated or invalid scope");
              throw tmp;
            }
          }
        }
        let tmp25 = RPCServer(outer2_1[7]);
        tmp25 = new tmp25({ errorCode: outer2_9.INVALID_PAYLOAD }, "Payload requires a nonce");
        throw tmp25;
      });
      const nextPromise = new Promise((arg0) => {
        if (null != apply.nonce) {
          if ("" !== apply.nonce) {
            const cmd = apply.cmd;
            if (null == self.commands[cmd]) {
              let tmp16 = RPCServer(outer2_1[7]);
              let obj = { errorCode: outer2_9.INVALID_COMMAND };
              const _HermesInternal = HermesInternal;
              const prototype2 = tmp16.prototype;
              tmp16 = new tmp16(obj, "Invalid command: " + apply.cmd);
              throw tmp16;
            } else if (RPCServer(outer2_1[8])(closure_1.authorization.scopes, tmp30.scope)) {
              obj = { command: cmd };
              if ("object" === typeof tmp30.scope) {
                const _JSON = JSON;
                let scope = JSON.stringify(tmp30.scope);
              } else {
                scope = tmp30.scope;
              }
              obj.scope = scope;
              obj.application_id = closure_1.application.id;
              obj.socket_scope = closure_1.authorization.scopes.toString();
              tmp34(tmp35[9]).track(outer2_6.RPC_COMMAND_SENT, obj);
              arg0(tmp30);
            } else {
              let tmp = tmp34(tmp35[7]);
              obj = { errorCode: outer2_9.INVALID_PERMISSIONS };
              const prototype = tmp.prototype;
              tmp = new tmp(obj, "Not authenticated or invalid scope");
              throw tmp;
            }
          }
        }
        let tmp25 = RPCServer(outer2_1[7]);
        tmp25 = new tmp25({ errorCode: outer2_9.INVALID_PAYLOAD }, "Payload requires a nonce");
        throw tmp25;
      }).then((arg0) => {
        let closure_0 = arg0;
        return new Promise((() => {
          // CreateGeneratorClosureLongIndex (0x67)
          let closure_0 = outer3_2(tmp);
          return function() {
            return callback(...arguments);
          };
        })());
      });
      const nextPromise1 = new Promise((arg0) => {
        if (null != apply.nonce) {
          if ("" !== apply.nonce) {
            const cmd = apply.cmd;
            if (null == self.commands[cmd]) {
              let tmp16 = RPCServer(outer2_1[7]);
              let obj = { errorCode: outer2_9.INVALID_COMMAND };
              const _HermesInternal = HermesInternal;
              const prototype2 = tmp16.prototype;
              tmp16 = new tmp16(obj, "Invalid command: " + apply.cmd);
              throw tmp16;
            } else if (RPCServer(outer2_1[8])(closure_1.authorization.scopes, tmp30.scope)) {
              obj = { command: cmd };
              if ("object" === typeof tmp30.scope) {
                const _JSON = JSON;
                let scope = JSON.stringify(tmp30.scope);
              } else {
                scope = tmp30.scope;
              }
              obj.scope = scope;
              obj.application_id = closure_1.application.id;
              obj.socket_scope = closure_1.authorization.scopes.toString();
              tmp34(tmp35[9]).track(outer2_6.RPC_COMMAND_SENT, obj);
              arg0(tmp30);
            } else {
              let tmp = tmp34(tmp35[7]);
              obj = { errorCode: outer2_9.INVALID_PERMISSIONS };
              const prototype = tmp.prototype;
              tmp = new tmp(obj, "Not authenticated or invalid scope");
              throw tmp;
            }
          }
        }
        let tmp25 = RPCServer(outer2_1[7]);
        tmp25 = new tmp25({ errorCode: outer2_9.INVALID_PAYLOAD }, "Payload requires a nonce");
        throw tmp25;
      }).then((arg0) => {
        let closure_0 = arg0;
        return new Promise((() => {
          // CreateGeneratorClosureLongIndex (0x67)
          let closure_0 = outer3_2(tmp);
          return function() {
            return callback(...arguments);
          };
        })());
      }).then((handler) => {
        const obj = { socket: closure_1, server: self, cmd: apply.cmd, evt: apply.evt, nonce: apply.nonce };
        let args = apply.args;
        if (null == args) {
          args = {};
        }
        obj.args = args;
        obj.isSocketConnected = function isSocketConnected() {
          const sockets = outer1_0.sockets;
          return sockets.has(outer1_1);
        };
        obj.signal = closure_1.abortController.signal;
        return handler.handler(obj);
      });
      new Promise((arg0) => {
        if (null != apply.nonce) {
          if ("" !== apply.nonce) {
            const cmd = apply.cmd;
            if (null == self.commands[cmd]) {
              let tmp16 = RPCServer(outer2_1[7]);
              let obj = { errorCode: outer2_9.INVALID_COMMAND };
              const _HermesInternal = HermesInternal;
              const prototype2 = tmp16.prototype;
              tmp16 = new tmp16(obj, "Invalid command: " + apply.cmd);
              throw tmp16;
            } else if (RPCServer(outer2_1[8])(closure_1.authorization.scopes, tmp30.scope)) {
              obj = { command: cmd };
              if ("object" === typeof tmp30.scope) {
                const _JSON = JSON;
                let scope = JSON.stringify(tmp30.scope);
              } else {
                scope = tmp30.scope;
              }
              obj.scope = scope;
              obj.application_id = closure_1.application.id;
              obj.socket_scope = closure_1.authorization.scopes.toString();
              tmp34(tmp35[9]).track(outer2_6.RPC_COMMAND_SENT, obj);
              arg0(tmp30);
            } else {
              let tmp = tmp34(tmp35[7]);
              obj = { errorCode: outer2_9.INVALID_PERMISSIONS };
              const prototype = tmp.prototype;
              tmp = new tmp(obj, "Not authenticated or invalid scope");
              throw tmp;
            }
          }
        }
        let tmp25 = RPCServer(outer2_1[7]);
        tmp25 = new tmp25({ errorCode: outer2_9.INVALID_PAYLOAD }, "Payload requires a nonce");
        throw tmp25;
      }).then((arg0) => {
        let closure_0 = arg0;
        return new Promise((() => {
          // CreateGeneratorClosureLongIndex (0x67)
          let closure_0 = outer3_2(tmp);
          return function() {
            return callback(...arguments);
          };
        })());
      }).then((handler) => {
        const obj = { socket: closure_1, server: self, cmd: apply.cmd, evt: apply.evt, nonce: apply.nonce };
        let args = apply.args;
        if (null == args) {
          args = {};
        }
        obj.args = args;
        obj.isSocketConnected = function isSocketConnected() {
          const sockets = outer1_0.sockets;
          return sockets.has(outer1_1);
        };
        obj.signal = closure_1.abortController.signal;
        return handler.handler(obj);
      }).then((arg0) => self.dispatch(closure_1, apply.nonce, apply.cmd, null, arg0)).catch((code) => self.error(closure_1, apply.nonce, apply.cmd, code.code, code.message));
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
        DISPATCH = outer1_8.DISPATCH;
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
        DISPATCH = outer1_8.DISPATCH;
      }
      if (UNKNOWN_ERROR === undefined) {
        UNKNOWN_ERROR = outer1_9.UNKNOWN_ERROR;
      }
      if (str === undefined) {
        str = "Unknown Error";
      }
      let obj = RPCServer(outer1_1[9]);
      obj = { command: DISPATCH, code: UNKNOWN_ERROR, message: str };
      obj.track(outer1_6.RPC_SERVER_ERROR_CAUGHT, obj);
      obj = { code: UNKNOWN_ERROR, message: str };
      self.dispatch(arg0, tmp, DISPATCH, outer1_10.ERROR, obj);
    }
  };
  items[8] = {
    key: "listenIsSubscribed",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      let isSubscribedListeners = this.isSubscribedListeners;
      isSubscribedListeners.add(arg0);
      return () => {
        const isSubscribedListeners = self.isSubscribedListeners;
        isSubscribedListeners.delete(closure_1);
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
      let closure_0 = arg0;
      let closure_1 = arg1;
      const subscriptions = this.subscriptions;
      return undefined !== subscriptions.find((socket) => {
        let tmp = socket.socket.application.id === closure_0;
        if (tmp) {
          tmp = socket.evt === closure_1;
        }
        return tmp;
      });
    }
  };
  items[11] = {
    key: "isChildSubscribed",
    value(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let tmp = null != arg0;
      if (tmp) {
        const self = this;
        const subscriptions = this.subscriptions;
        tmp = undefined !== subscriptions.find((socket) => {
          let tmp = socket.socket.application.parentId === closure_0;
          if (tmp) {
            tmp = socket.evt === closure_1;
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
      let closure_0 = arg0;
      let closure_1 = arg1;
      let apply = arg2;
      const subscriptions = this.subscriptions;
      return subscriptions.find((socket) => {
        let isEqualResult = socket.socket === closure_0;
        if (isEqualResult) {
          isEqualResult = socket.evt === closure_1;
        }
        if (isEqualResult) {
          isEqualResult = RPCServer(outer2_1[5]).isEqual(socket.args, apply);
          const obj = RPCServer(outer2_1[5]);
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
      const bindResult = dispatch.bind(self, socket, null, outer1_8.DISPATCH, evt);
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
      let closure_0 = arg0;
      let closure_1 = arg1;
      let apply = arg2;
      RPCServer(outer1_1[5]).remove(this.subscriptions, (socket) => {
        let isEqualResult = socket.socket === closure_0;
        if (isEqualResult) {
          isEqualResult = socket.evt === closure_1;
        }
        if (isEqualResult) {
          isEqualResult = RPCServer(outer2_1[5]).isEqual(socket.args, apply);
          const obj = RPCServer(outer2_1[5]);
        }
        return isEqualResult;
      });
      const result = this.dispatchIsSubscribedUpdate();
    }
  };
  items[15] = {
    key: "removeSubscriptions",
    value(arg0) {
      let closure_0 = arg0;
      RPCServer(outer1_1[5]).remove(this.subscriptions, (socket) => socket.socket === closure_0);
      const result = this.dispatchIsSubscribedUpdate();
    }
  };
  items[16] = {
    key: "dispatchToSubscriptions",
    value(arg0, arg1, arg2, arg3) {
      const self = this;
      let closure_1 = arg0;
      let apply = arg1;
      let transformUser = arg2;
      let tmp = null != arg3;
      if (tmp) {
        tmp = "" !== arg3;
      }
      if (tmp) {
        const tmp3 = !outer1_11.includes(arg3);
        let flag = !tmp3;
        if (tmp3) {
          outer1_11.unshift(arg3);
          outer1_11.splice(50);
          flag = false;
        }
        tmp = flag;
      }
      if (!tmp) {
        const subscriptions = this.subscriptions;
        const item = subscriptions.forEach((evt) => {
          if (evt.evt === closure_1) {
            let tmp2 = "function" === typeof callback;
            if (tmp2) {
              tmp2 = !callback(evt);
            }
            if (!tmp2) {
              let tmp4 = "object" === typeof callback;
              if (tmp4) {
                let args = evt.args;
                if (null == args) {
                  args = {};
                }
                const obj2 = RPCServer(outer2_1[5]);
                const _Object = Object;
                tmp4 = !obj2.isEqual(tmp5, RPCServer(outer2_1[5]).pick(args, Object.keys(tmp5)));
                const obj3 = RPCServer(outer2_1[5]);
              }
              tmp2 = tmp4;
            }
            if (!tmp2) {
              if ("function" === typeof callback2) {
                callback2 = callback2(evt);
              }
              self.dispatch(evt.socket, null, outer2_8.DISPATCH, evt.evt, callback2);
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
      const self = this;
      let closure_1 = arg0;
      let apply = arg1;
      let transformUser = arg2;
      let tmp = arg1();
      if (!tmp) {
        if (0 !== arg2) {
          let _isNativeReflectConstruct = RPCServer(outer1_1[5]).uniqueId();
          function removeSubscription(closure_1, RPC_STORE_WAIT, arg2) {
            return self.removeSubscription(closure_1, "RPC_STORE_WAIT", { uniqueId: _isNativeReflectConstruct });
          }
          const promise = new Promise((arg0, arg1) => {
            const _self = arg0;
            let closure_1 = arg1;
            const timeout = setTimeout(() => {
              outer1_5();
              const error = new Error("timeout");
              callback2(error);
            }, transformUser * RPCServer(outer2_1[11]).Millis.SECOND);
            _self.addSubscription(closure_1, "RPC_STORE_WAIT", { uniqueId: _isNativeReflectConstruct }, () => {
              const tmp = callback3();
              if (tmp) {
                const _clearTimeout = clearTimeout;
                clearTimeout(callback3);
                callback(tmp);
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
})();
let result = require("_defineProperties").fileFinishedImporting("modules/rpc/RPCServer.tsx");

export default tmp3;
