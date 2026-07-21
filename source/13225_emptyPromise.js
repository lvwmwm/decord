// Module ID: 13225
// Function ID: 100322
// Name: emptyPromise
// Dependencies: []
// Exports: createClient

// Module 13225 (emptyPromise)
function emptyPromise() {
  return Promise.resolve("");
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = _interopRequireDefault(require(dependencyMap[2]));
const obj4 = _interopRequireWildcard(require(dependencyMap[3]));
const result = _interopRequireDefault(require(dependencyMap[4]));
const result1 = _interopRequireDefault(require(dependencyMap[5]));
const obj7 = _interopRequireWildcard(require(dependencyMap[6]));
const result2 = _interopRequireDefault(require(dependencyMap[7]));
const result3 = _interopRequireDefault(require(dependencyMap[8]));
const result4 = _interopRequireDefault(require(dependencyMap[9]));
let closure_7 = _interopRequireDefault(require(dependencyMap[10]));
const items = [result.default(), obj4.default(), result1.default(), obj7.default(), result2.default(), result3.default(), result4.default()];
let closure_9 = [];
const tmp5 = () => {
  class ReactotronImpl {
    constructor() {
      ReactotronImpl = this;
      tmp = closure_2(this, ReactotronImpl);
      this.connected = false;
      this.socket = null;
      this.plugins = [];
      this.sendQueue = [];
      this.isReady = false;
      date = new Date();
      this.lastMessageDate = date;
      this.customCommands = [];
      this.customCommandLatestId = 1;
      this.startTimer = () => self(closure_1[11]).start();
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
        const defaultResult = closure_7.default(obj, self.options.proxyHack);
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
  const require = ReactotronImpl;
  let obj = {
    key: "configure",
    value: function configure(arg0) {
      const self = this;
      const ReactotronImpl = this;
      const merged = Object.assign({
        plugins: closure_8,
        onCommand() {
          return null;
        },
        onConnect() {
          return null;
        },
        onDisconnect(abortController, arg1) {
          return null;
        }
      }, this.options, arg0);
      closure_4.default(merged);
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
      let createSocket;
      let host;
      let port;
      let secure;
      const self = this;
      const ReactotronImpl = this;
      this.connected = true;
      const options = this.options;
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
      const socket = createSocket("" + str + "://" + host + ":" + port);
      function onOpen() {
        if (callback2) {
          callback2();
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onConnect) => onConnect.onConnect && onConnect.onConnect());
        let tmp4 = getClientId;
        if (!getClientId) {
          tmp4 = closure_12;
        }
        tmp4(closure_2).then((clientId) => {
          let length;
          closure_0.isReady = true;
          let obj = { environment: closure_1 };
          obj = { name: closure_2, clientId, reactotronCoreClientVersion: "REACTOTRON_CORE_CLIENT_VERSION" };
          closure_0.send("client.intro", Object.assign(obj, closure_3, obj));
          if (closure_0.sendQueue.length > 0) {
            do {
              let tmp2 = closure_0;
              let sendQueue = closure_0.sendQueue;
              closure_0.sendQueue = sendQueue.slice(1);
              let socket = closure_0.socket;
              let sendResult1 = socket.send(closure_0.sendQueue[0]);
              length = closure_0.sendQueue.length;
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
        const self = parsed;
        if (callback) {
          callback(parsed);
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onCommand) => {
          onCommand = onCommand.onCommand;
          if (onCommand) {
            onCommand = onCommand.onCommand(parsed);
          }
          return onCommand;
        });
        if ("custom" === parsed.type) {
          const customCommands = self.customCommands;
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
            setClientId = self.options.setClientId;
          }
          if (setClientId) {
            const options = self.options;
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
      const self = this;
      const ReactotronImpl = this;
      if ("function" !== typeof bind) {
        const _Error3 = Error;
        const error = new Error("plugins must be a function");
        throw error;
      } else {
        const tmp21 = bind.bind(self)(self);
        if ("object" !== typeof tmp21) {
          const _Error2 = Error;
          const error1 = new Error("plugins must return an object");
          throw error1;
        } else {
          if (tmp21.features) {
            if ("object" !== typeof tmp21.features) {
              const _Error = Error;
              const error2 = new Error("features must be an object");
              throw error2;
            } else {
              function inject(arg0) {
                if ("function" !== typeof tmp21.features[arg0]) {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  const error = new Error("feature " + arg0 + " is not a function");
                  throw error;
                } else if (function isReservedFeature(arg0) {
                  return closure_9.some((arg0) => arg0 === arg0);
                }(arg0)) {
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
        let ReactotronImpl = command;
        handler = arg1;
      } else {
        ReactotronImpl = command.command;
        ({ handler, title, description, args } = command);
      }
      if (tmp) {
        if (handler) {
          const customCommands = self.customCommands;
          const found = customCommands.filter((command) => command.command === command);
          if (found.length > 0) {
            const item = found.forEach((id) => {
              const command = id;
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
                  const arr = arr.push(name.name);
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
            self.customCommands = customCommands.filter((id) => id.id !== id.id);
            const obj = { id: obj.id, command: obj.command };
            self.send("customCommand.unregister", obj);
          };
        } else {
          const _Error2 = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("A handler is required for command \"" + tmp + "\"");
          throw error;
        }
      } else {
        const _Error = Error;
        const error1 = new Error("A command is required");
        throw error1;
      }
    }
  };
  return callback(ReactotronImpl, items);
}();

export const assertHasLoggerPlugin = obj7.hasStateResponsePlugin;
export const assertHasStateResponsePlugin = obj7.hasStateResponsePlugin;
export const createClient = function createClient(arg0) {
  return new tmp5().configure(arg0);
};
export const hasStateResponsePlugin = obj7.hasStateResponsePlugin;
export const ArgType = { String: "string" };
export const corePlugins = items;
export const ReactotronImpl = tmp5;
