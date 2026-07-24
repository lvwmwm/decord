// Module ID: 13401
// Function ID: 102860
// Name: keys
// Dependencies: [6, 7, 13402, 13403, 13404, 13405, 13406, 13407, 13408, 13409, 13410, 13411]
// Exports: createClient

// Module 13401 (keys)
import _classCallCheck from "stateResponse";
import _defineProperties from "result2";
import validate from "validate";
import logger from "logger";
import result from "result";
import result1 from "result1";
import stateResponse from "stateResponse";
import result2 from "result2";
import result3 from "result3";
import result4 from "result4";
import serialize from "serialize";

function emptyPromise() {
  return Promise.resolve("");
}
let items = [result.default(), logger.default(), result1.default(), stateResponse.default(), result2.default(), result3.default(), result4.default()];
let closure_9 = ["configure", "connect", "connected", "options", "plugins", "send", "socket", "startTimer", "use"];
const tmp5 = (() => {
  class ReactotronImpl {
    constructor() {
      self = this;
      tmp = outer1_2(this, self);
      this.connected = false;
      this.socket = null;
      this.plugins = [];
      this.sendQueue = [];
      this.isReady = false;
      date = new Date();
      this.lastMessageDate = date;
      this.customCommands = [];
      this.customCommandLatestId = 1;
      this.startTimer = () => ReactotronImpl(outer2_1[11]).start();
      this.send = (type, payload, important) => {
        const date = new Date();
        const lastMessageDate = self.lastMessageDate;
        const time = date.getTime();
        let num = time - lastMessageDate.getTime();
        if (num < 0) {
          num = 0;
        }
        self.lastMessageDate = date;
        const obj = { type, payload, important, date: date.toISOString(), deltaTime: num };
        const defaultResult = outer2_7.default(obj, self.options.proxyHack);
        if (self.isReady) {
          const socket = self.socket;
          socket.send(defaultResult);
        } else {
          const sendQueue = self.sendQueue;
          sendQueue.push(defaultResult);
        }
      };
      return;
    }
  }
  let obj = {
    key: "configure",
    value: function configure(arg0) {
      let self = this;
      self = this;
      const obj = {
        createSocket: null,
        host: "localhost",
        port: 9090,
        name: "reactotron-core-client",
        secure: false,
        plugins: outer1_8,
        safeRecursion: true,
        onCommand() {
          return null;
        },
        onConnect() {
          return null;
        },
        onDisconnect(abortController, arg1) {
          return null;
        }
      };
      const merged = Object.assign(obj, this.options, arg0);
      outer1_4.default(merged);
      this.options = merged;
      if (Array.isArray(this.options.plugins)) {
        const plugins = self.options.plugins;
        const item = plugins.forEach((arg0) => self.use(arg0));
      }
      return self;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "close",
    value: function close() {
      const self = this;
      this.connected = false;
      if (tmp) {
        const socket = self.socket;
        socket.close();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "connect",
    value: function connect() {
      let client;
      let closure_1;
      let closure_2;
      let closure_5;
      let closure_6;
      let closure_7;
      let createSocket;
      let host;
      let port;
      let secure;
      let self = this;
      self = this;
      this.connected = true;
      let options = this.options;
      ({ host, environment: closure_1, port, name: closure_2, client } = options);
      ({ createSocket, secure } = options);
      if (undefined === client) {
        client = {};
      }
      const getClientId = options.getClientId;
      ({ onCommand: closure_5, onConnect: closure_6, onDisconnect: closure_7 } = self.options);
      let str = "ws";
      if (secure) {
        str = "wss";
      }
      let socket = createSocket("" + str + "://" + host + ":" + port);
      function onOpen() {
        if (callback2) {
          callback2();
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onConnect) => onConnect.onConnect && onConnect.onConnect());
        let tmp4 = getClientId;
        if (!getClientId) {
          tmp4 = outer2_12;
        }
        tmp4(closure_2).then((clientId) => {
          let length;
          outer1_0.isReady = true;
          let obj = { environment: outer1_1 };
          obj = { name: outer1_2, clientId, reactotronCoreClientVersion: "REACTOTRON_CORE_CLIENT_VERSION" };
          outer1_0.send("client.intro", Object.assign(obj, outer1_3, obj));
          if (outer1_0.sendQueue.length > 0) {
            do {
              let tmp2 = outer1_0;
              let sendQueue = outer1_0.sendQueue;
              outer1_0.sendQueue = sendQueue.slice(1);
              let socket = outer1_0.socket;
              let sendResult1 = socket.send(outer1_0.sendQueue[0]);
              length = outer1_0.sendQueue.length;
            } while (length > 0);
          }
        });
      }
      function onClose() {
        self.isReady = false;
        if (callback3) {
          callback3();
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onDisconnect) => onDisconnect.onDisconnect && onDisconnect.onDisconnect());
      }
      function onMessage(arg0) {
        if ("string" === typeof arg0) {
          const _JSON2 = JSON;
          let parsed = JSON.parse(arg0);
        } else {
          const _Buffer = Buffer;
          parsed = arg0;
          if (Buffer.isBuffer(arg0)) {
            const _JSON = JSON;
            parsed = JSON.parse(arg0.toString());
          }
        }
        if (callback) {
          callback(parsed);
        }
        const plugins = parsed.plugins;
        const item = plugins.forEach((onCommand) => {
          onCommand = onCommand.onCommand;
          if (onCommand) {
            onCommand = onCommand.onCommand(parsed);
          }
          return onCommand;
        });
        if ("custom" === parsed.type) {
          const customCommands = parsed.customCommands;
          const found = customCommands.filter((command) => {
            if ("string" === typeof parsed.payload) {
              let tmp2 = command.command === parsed.payload;
            } else {
              tmp2 = command.command === parsed.payload.command;
            }
            return tmp2;
          });
          const item1 = found.forEach((handler) => {
            let args;
            if ("object" === typeof parsed.payload) {
              args = parsed.payload.args;
            }
            return handler.handler(args);
          });
        } else {
          let setClientId = "setClientId" === parsed.type;
          if (setClientId) {
            setClientId = parsed.options.setClientId;
          }
          if (setClientId) {
            const options = parsed.options;
            options.setClientId(parsed.payload);
          }
        }
      }
      if ("on" in socket) {
        if (socket.on) {
          socket.on("open", onOpen);
          socket.on("close", onClose);
          socket.on("message", onMessage);
          self.socket = socket;
        }
        return self;
      }
      socket.onopen = onOpen;
      socket.onclose = onClose;
      socket.onmessage = (data) => onMessage(data.data);
      self.socket = socket;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "display",
    value: function display(name) {
      let image;
      let important;
      let preview;
      let value;
      const self = this;
      ({ value, preview, image, important } = name);
      let tmp = undefined !== important;
      if (tmp) {
        tmp = important;
      }
      const obj = { name: name.name, value, preview, image };
      self.send("display", obj, tmp);
    }
  };
  items[4] = {
    key: "reportError",
    value: function reportError(arg0) {
      this.error(arg0);
    }
  };
  items[5] = {
    key: "use",
    value: function use(bind) {
      let self = this;
      self = this;
      if ("function" !== typeof bind) {
        const _Error3 = Error;
        let error = new Error("plugins must be a function");
        throw error;
      } else {
        const tmp21 = bind.bind(self)(self);
        let closure_1 = tmp21;
        if ("object" !== typeof tmp21) {
          let _Error2 = Error;
          let error1 = new Error("plugins must return an object");
          throw error1;
        } else {
          if (tmp21.features) {
            if ("object" !== typeof tmp21.features) {
              let _Error = Error;
              const error2 = new Error("features must be an object");
              throw error2;
            } else {
              function inject(arg0) {
                if ("function" !== typeof tmp21.features[arg0]) {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  const error = new Error("feature " + arg0 + " is not a function");
                  throw error;
                } else if ((function isReservedFeature(arg0) {
                  let closure_0 = arg0;
                  return outer3_9.some((arg0) => arg0 === closure_0);
                })(arg0)) {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error1 = new Error("feature " + arg0 + " is a reserved name");
                  throw error1;
                } else {
                  self[arg0] = tmp;
                }
              }
              const _Object = Object;
              const keys = Object.keys(tmp21.features);
              const item = keys.forEach((arg0) => inject(arg0));
            }
          }
          const plugins = self.plugins;
          plugins.push(tmp21);
          if (tmp4) {
            const onPlugin = tmp21.onPlugin;
            onPlugin.bind(self)(self);
          }
          return self;
        }
      }
    }
  };
  items[6] = {
    key: "onCustomCommand",
    value: function onCustomCommand(command) {
      let args;
      let description;
      let handler;
      let title;
      let self = this;
      self = this;
      if ("string" === typeof command) {
        handler = arg1;
      } else {
        command = command.command;
        ({ handler, title, description, args } = command);
      }
      if (tmp) {
        if (handler) {
          let customCommands = self.customCommands;
          const found = customCommands.filter((command) => command.command === command);
          if (found.length > 0) {
            const item = found.forEach((id) => {
              let closure_0 = id;
              const customCommands = self.customCommands;
              self.customCommands = customCommands.filter((id) => id.id !== id.id);
              self.send("customCommand.unregister", { id: id.id, command: id.command });
            });
          }
          if (args) {
            let closure_2 = [];
            const item1 = args.forEach((name) => {
              if (name.name) {
                if (arr.indexOf(name.name) > -1) {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  const error = new Error("A arg with the name \"" + name.name + "\" already exists in the command \"" + command + "\"");
                  throw error;
                } else {
                  arr = arr.push(name.name);
                }
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error1 = new Error("A arg on the command \"" + command + "\" is missing a name");
                throw error1;
              }
            });
          }
          let obj = { id: self.customCommandLatestId, command: tmp, handler, title, description, args };
          self.customCommandLatestId = self.customCommandLatestId + 1;
          const customCommands1 = self.customCommands;
          customCommands1.push(obj);
          obj = {};
          ({ id: obj2.id, command: obj2.command, title: obj2.title, description: obj2.description, args: obj2.args } = obj);
          self.send("customCommand.register", obj);
          return () => {
            const customCommands = self.customCommands;
            self.customCommands = customCommands.filter((id) => id.id !== outer1_3.id);
            obj = { id: obj.id, command: obj.command };
            self.send("customCommand.unregister", obj);
          };
        } else {
          let _Error2 = Error;
          let _HermesInternal = HermesInternal;
          let error = new Error("A handler is required for command \"" + tmp + "\"");
          throw error;
        }
      } else {
        let _Error = Error;
        let error1 = new Error("A command is required");
        throw error1;
      }
    }
  };
  return _defineProperties(ReactotronImpl, items);
})();
let closure_10 = tmp5;

export const assertHasLoggerPlugin = stateResponse.hasStateResponsePlugin;
export const assertHasStateResponsePlugin = stateResponse.hasStateResponsePlugin;
export const createClient = function createClient(arg0) {
  return new closure_10().configure(arg0);
};
export const hasStateResponsePlugin = stateResponse.hasStateResponsePlugin;
export const ArgType = { String: "string" };
export const corePlugins = items;
export const ReactotronImpl = tmp5;
