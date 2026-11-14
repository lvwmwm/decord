// Module ID: 16113
// Function ID: 16114
// Name: InputHost
// Dependencies: [5, 3, 16111, 16114, 16115, 6077, 2]

// Module 16113 (InputHost)
import LoggerDefault from "Logger" /* 3 */;
import RTCConnection from "RTCConnection" /* 6077 */;
import InputEvent from "InputEvent" /* 16111 */;
import PassTheControllerExperimentDefault from "PassTheControllerExperiment" /* 16115 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c2;

const result = size.fileFinishedImporting("modules/pass_the_controller/InputHost.tsx");
class InputHost {
  constructor(connection, pid, guildId, onGrab, onDrop) {
    const merged = Object.assign({ holderSessionId: null, holderUserId: null });
    merged.pid = pid;
    merged.connection = connection;
    merged.guildId = guildId;
    merged.onGrab = onGrab;
    merged.onDrop = onDrop;
    merged.hook = null;
    merged._connectHook(pid);
    const _handleKey = merged._handleKey;
    merged.keyHandler = _handleKey.bind(merged);
    const _handleMouseButton = merged._handleMouseButton;
    merged.mouseButtonHandler = _handleMouseButton.bind(merged);
    const _handleMouseMove = merged._handleMouseMove;
    merged.mouseMoveHandler = _handleMouseMove.bind(merged);
    const _handleGrab = merged._handleGrab;
    merged.grabHandler = _handleGrab.bind(merged);
    const _handleDrop = merged._handleDrop;
    merged.dropHandler = _handleDrop.bind(merged);
    merged.logger = new LoggerDefault("InputHost");
    new LoggerDefault("InputHost");
    connection.on(InputEvent.InputEvent.Key, merged.keyHandler);
    connection.on(InputEvent.InputEvent.MouseButton, merged.mouseButtonHandler);
    connection.on(InputEvent.InputEvent.MouseMove, merged.mouseMoveHandler);
    connection.on(InputEvent.InputEvent.Grab, merged.grabHandler);
    connection.on(InputEvent.InputEvent.Drop, merged.dropHandler);
    connection.setHosting(true);
    return merged;
  }
  _connectHook(pid) {
    const self = this;
    return (async (arg0, value) => {
      let closure_0;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              pid = self;
              const _handleHookConnect = self._handleHookConnect;
              c1 = 1;
              const obj2 = pid(c2[3]);
              c2 = 1;
              const obj5 = {
                value: obj2.connectToHook(pid, _handleHookConnect.bind(self), () => {

                        }),
                done: false
              };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            pid.hook = value;
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c2 = 3;
          throw tmp9;
        }
      }
    })();
  }
  _handleHookConnect() {
    if (null != this.hook) {
      const hook = this.hook;
      const _JSON = JSON;
      hook.sendCommand(JSON.stringify({ message: "inject_input", inject: true }));
    }
  }
  _handleGrab(holderUserId, holderSessionId) {
    const self = this;
    const tmp = null != this.holderSessionId && holderUserId === self.holderUserId;
    if (tmp) {
      const connection = self.connection;
      connection.sendDrop(self.holderSessionId);
      self.holderSessionId = null;
    }
    if (null != self.holderSessionId) {
      if (null != self.guildId) {
        const obj2 = { guildId: self.guildId, location: "_handleGrab" };
        const obj = PassTheControllerExperimentDefault;
        if (obj.getConfig(obj2).allowWrestling) {
          const connection3 = self.connection;
          connection3.sendDrop(self.holderSessionId);
        }
      }
      const connection2 = self.connection;
      connection2.sendDrop(holderSessionId);
    }
    self.holderSessionId = holderSessionId;
    self.holderUserId = holderUserId;
    const connection4 = self.connection;
    connection4.sendGrabAllow(holderSessionId);
    const onGrab = self.onGrab;
    const obj3 = RTCConnection;
    onGrab(obj3.castUserId(holderUserId.toString()));
  }
  _handleDrop(arg0) {
    const self = this;
    const logger = this.logger;
    logger.log("Received drop for session " + arg0);
    if (arg0 === this.holderSessionId) {
      self.holderSessionId = null;
      self.holderUserId = null;
      self.onDrop();
    }
  }
  takeBackController() {
    const self = this;
    if (null != this.holderSessionId) {
      const connection = self.connection;
      connection.sendDrop(self.holderSessionId);
      self.holderSessionId = null;
      self.holderUserId = null;
      self.onDrop();
    }
  }
  _handleKey(arg0, keycode, down) {
    const self = this;
    const tmp = null != this.hook && arg0 === self.holderSessionId;
    if (tmp) {
      const hook = self.hook;
      const _JSON = JSON;
      const obj = { message: "inject_key_event", keycode, down };
      hook.sendCommand(JSON.stringify(obj));
    }
  }
  _handleMouseButton(arg0, which, down) {
    const self = this;
    const tmp = null != this.hook && arg0 === self.holderSessionId;
    if (tmp) {
      const hook = self.hook;
      const _JSON = JSON;
      const obj = { message: "inject_mousebutton_event", which, down };
      hook.sendCommand(JSON.stringify(obj));
    }
  }
  _handleMouseMove(arg0, x, y) {
    const self = this;
    const tmp = null != this.hook && arg0 === self.holderSessionId;
    if (tmp) {
      const hook = self.hook;
      const _JSON = JSON;
      const point = { message: "inject_mousemove_event", x, y };
      hook.sendCommand(JSON.stringify(point));
    }
  }
  shutdown() {
    const self = this;
    if (null != this.holderSessionId) {
      const connection = self.connection;
      connection.sendDrop(self.holderSessionId);
    }
    const connection2 = self.connection;
    connection2.setHosting(false);
    const connection3 = self.connection;
    connection3.off(InputEvent.InputEvent.Key, self.keyHandler);
    const connection4 = self.connection;
    connection4.off(InputEvent.InputEvent.MouseButton, self.mouseButtonHandler);
    const connection5 = self.connection;
    connection5.off(InputEvent.InputEvent.MouseMove, self.mouseMoveHandler);
    const connection6 = self.connection;
    connection6.off(InputEvent.InputEvent.Grab, self.grabHandler);
    const connection7 = self.connection;
    connection7.off(InputEvent.InputEvent.Drop, self.dropHandler);
    if (null != self.hook) {
      const hook = self.hook;
      const _JSON = JSON;
      hook.sendCommand(JSON.stringify({ message: "inject_input", inject: false }));
      const hook2 = self.hook;
      hook2.destroy();
      self.hook = null;
    }
  }
}
const prototype = InputHost.prototype;

export default InputHost;
