// Module ID: 14888
// Function ID: 14889
// Name: InputHost
// Dependencies: [5, 3, 14887, 14889, 14890, 5660, 2]

// Module 14888 (InputHost)
import LoggerDefault from "Logger" /* 3 */;
import RTCConnection from "RTCConnection" /* 5660 */;
import InputEvent from "InputEvent" /* 14887 */;
import PassTheControllerExperimentDefault from "PassTheControllerExperiment" /* 14890 */;
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
    const _handleMouseWheel = merged._handleMouseWheel;
    merged.mouseWheelHandler = _handleMouseWheel.bind(merged);
    const _handleGamepadPlug = merged._handleGamepadPlug;
    merged.gamepadPlugHandler = _handleGamepadPlug.bind(merged);
    const _handleGamepadButton = merged._handleGamepadButton;
    merged.gamepadButtonHandler = _handleGamepadButton.bind(merged);
    const _handleGamepadStick = merged._handleGamepadStick;
    merged.gamepadStickHandler = _handleGamepadStick.bind(merged);
    const _handleGamepadTrigger = merged._handleGamepadTrigger;
    merged.gamepadTriggerHandler = _handleGamepadTrigger.bind(merged);
    const _handleGrab = merged._handleGrab;
    merged.grabHandler = _handleGrab.bind(merged);
    const _handleDrop = merged._handleDrop;
    merged.dropHandler = _handleDrop.bind(merged);
    merged.logger = new LoggerDefault("InputHost");
    new LoggerDefault("InputHost");
    connection.on(InputEvent.InputEvent.Key, merged.keyHandler);
    connection.on(InputEvent.InputEvent.MouseButton, merged.mouseButtonHandler);
    connection.on(InputEvent.InputEvent.MouseMove, merged.mouseMoveHandler);
    connection.on(InputEvent.InputEvent.MouseWheel, merged.mouseWheelHandler);
    connection.on(InputEvent.InputEvent.ControllerPlug, merged.gamepadPlugHandler);
    connection.on(InputEvent.InputEvent.ControllerButton, merged.gamepadButtonHandler);
    connection.on(InputEvent.InputEvent.ControllerStick, merged.gamepadStickHandler);
    connection.on(InputEvent.InputEvent.ControllerTrigger, merged.gamepadTriggerHandler);
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
          self._handleGamepadPlug(self.holderSessionId, false);
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
      self._handleGamepadPlug(self.holderSessionId, false);
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
      self._handleGamepadPlug(self.holderSessionId, false);
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
  _handleMouseWheel(arg0, delta) {
    const self = this;
    const tmp = null != this.hook && arg0 === self.holderSessionId;
    if (tmp) {
      const hook = self.hook;
      const _JSON = JSON;
      const obj = { message: "inject_mousewheel_event", delta };
      hook.sendCommand(JSON.stringify(obj));
    }
  }
  _handleGamepadPlug(holderSessionId, arg1) {
    const self = this;
    const tmp = null != this.hook && holderSessionId === self.holderSessionId;
    if (tmp) {
      const hook = self.hook;
      let str = "release_gamepad";
      const sendCommand = hook.sendCommand;
      const _JSON = JSON;
      if (arg1) {
        str = "inject_gamepad";
      }
      const obj = { message: str, index: 0 };
      sendCommand(stringify(obj));
    }
  }
  _handleGamepadButton(arg0, button, down) {
    const self = this;
    const tmp = null != this.hook && arg0 === self.holderSessionId;
    if (tmp) {
      const hook = self.hook;
      const _JSON = JSON;
      const obj = { message: "inject_gamepad_button", index: 0, button, down };
      hook.sendCommand(JSON.stringify(obj));
    }
  }
  _handleGamepadStick(arg0, isLeft, x, y) {
    const self = this;
    const tmp = null != this.hook && arg0 === self.holderSessionId;
    if (tmp) {
      const hook = self.hook;
      const _JSON = JSON;
      const point = { message: "inject_gamepad_stick", index: 0, x, y, isLeft };
      hook.sendCommand(JSON.stringify(point));
    }
  }
  _handleGamepadTrigger(arg0, isLeft, arg2) {
    const self = this;
    const tmp = null != this.hook && arg0 === self.holderSessionId;
    if (tmp) {
      const hook = self.hook;
      const _JSON = JSON;
      const obj = { message: "inject_gamepad_trigger", index: 0, val: arg2, isLeft };
      hook.sendCommand(JSON.stringify(obj));
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
    connection6.off(InputEvent.InputEvent.MouseWheel, self.mouseWheelHandler);
    const connection7 = self.connection;
    connection7.off(InputEvent.InputEvent.ControllerPlug, self.gamepadPlugHandler);
    const connection8 = self.connection;
    connection8.off(InputEvent.InputEvent.ControllerButton, self.gamepadButtonHandler);
    const connection9 = self.connection;
    connection9.off(InputEvent.InputEvent.ControllerStick, self.gamepadStickHandler);
    const connection10 = self.connection;
    connection10.off(InputEvent.InputEvent.ControllerTrigger, self.gamepadTriggerHandler);
    const connection11 = self.connection;
    connection11.off(InputEvent.InputEvent.Grab, self.grabHandler);
    const connection12 = self.connection;
    connection12.off(InputEvent.InputEvent.Drop, self.dropHandler);
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
