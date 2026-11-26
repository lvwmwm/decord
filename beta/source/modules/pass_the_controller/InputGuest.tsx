// Module ID: 14904
// Function ID: 14905
// Name: InputGuest
// Dependencies: [5, 3, 14900, 572, 2]

// Module 14904 (InputGuest)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import InputEvent from "InputEvent" /* 14900 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c4;

const React3 = { Escape: 27, Digit0: 48, Digit1: 49, Digit2: 50, Digit3: 51, Digit4: 52, Digit5: 53, Digit6: 54, Digit7: 55, Digit8: 56, Digit9: 57, Minus: 189, Equal: 187, Backspace: 8, Tab: 9, KeyA: 65, KeyB: 66, KeyC: 67, KeyD: 68, KeyE: 69, KeyF: 70, KeyG: 71, KeyH: 72, KeyI: 73, KeyJ: 74, KeyK: 75, KeyL: 76, KeyM: 77, KeyN: 78, KeyO: 79, KeyP: 80, KeyQ: 81, KeyR: 82, KeyS: 83, KeyT: 84, KeyU: 85, KeyV: 86, KeyW: 87, KeyX: 88, KeyY: 89, KeyZ: 90, BracketLeft: 219, BracketRight: 221, Enter: 13, ControlLeft: 162, ControlRight: 163, Semicolon: 186, Quote: 222, Backquote: 192, ShiftLeft: 160, ShiftRight: 161, Backslash: 220, Comma: 188, Period: 190, Slash: 191, AltLeft: 164, AltRight: 165, Space: 32, CapsLock: 20, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, ArrowUp: 38, ArrowDown: 40, ArrowLeft: 37, ArrowRight: 39 };
const hasOwnProperty = [12, 13, 14, 15, 8, 9, null, null, 5, 4, 6, 7, 0, 1, 2, 3];
let result = size.fileFinishedImporting("modules/pass_the_controller/InputGuest.tsx");
class InputGuest {
  constructor(connection, _host, _streamKey) {
    const merged = Object.assign({ sessionId: null, isMouseCaptured: false, isGamepadCaptured: false, isShutdown: false, gamepadIndex: null, gamepadPollInterval: null, lastGamepadTimestamp: -1, lastButtons: null, lastLeftStick: null, lastRightStick: null, lastLeftTrigger: 0, lastRightTrigger: 0 });
    const uint32Array = new Uint32Array(1);
    merged[0] = getRandomValues(uint32Array)[0];
    merged[7] = [];
    merged[8] = [0, 0];
    merged[9] = [0, 0];
    merged.connection = connection;
    merged._host = _host;
    merged._streamKey = _streamKey;
    merged.hostAsBigInt = BigInt(_host);
    const _handleKeyEvent = merged._handleKeyEvent;
    merged.keyHandler = _handleKeyEvent.bind(merged);
    const _handleMouseEvent = merged._handleMouseEvent;
    merged.mouseHandler = _handleMouseEvent.bind(merged);
    const _handleConnect = merged._handleConnect;
    merged.connectHandler = _handleConnect.bind(merged);
    const _handleGrabAllow = merged._handleGrabAllow;
    merged.grabAllowHandler = _handleGrabAllow.bind(merged);
    const _handleRelease = merged._handleRelease;
    merged.releaseHandler = _handleRelease.bind(merged);
    const _dropController = merged._dropController;
    merged.disconnectHandler = _dropController.bind(merged);
    const _handlePointerLockChange = merged._handlePointerLockChange;
    merged.pointerLockChangeHandler = _handlePointerLockChange.bind(merged);
    const _handleGamepadConnected = merged._handleGamepadConnected;
    merged.gamepadConnectedHandler = _handleGamepadConnected.bind(merged);
    const _handleGamepadDisconnected = merged._handleGamepadDisconnected;
    merged.gamepadDisconnectedHandler = _handleGamepadDisconnected.bind(merged);
    const _pollGamepad = merged._pollGamepad;
    merged.gamepadPollHandler = _pollGamepad.bind(merged);
    const tmp2 = LoggerDefault;
    merged.logger = new tmp2("InputGuest(" + _host + ")");
    new tmp2("InputGuest(" + _host + ")");
    connection.on(InputEvent.InputEvent.Connect, merged.connectHandler);
    connection.on(InputEvent.InputEvent.GrabAllow, merged.grabAllowHandler);
    connection.on(InputEvent.InputEvent.Drop, merged.releaseHandler);
    connection.on(InputEvent.InputEvent.Disconnect, merged.disconnectHandler);
    if (connection.isConnected) {
      merged._handleConnect();
    }
    return merged;
  }
  _handleConnect() {
    const connection = this.connection;
    connection.sendGrab(this.hostAsBigInt, this.sessionId);
  }
  _handleGrabAllow(arg0) {
    const self = this;
    if (arg0 === this.sessionId) {
      const _document = document;
      const listener = document.addEventListener("keydown", self.keyHandler, true);
      const _document2 = document;
      const listener1 = document.addEventListener("keyup", self.keyHandler, true);
      self._captureMouse();
      self._captureGamepad();
    }
  }
  _handleKeyEvent(preventDefault) {
    const self = this;
    preventDefault.preventDefault();
    const result = preventDefault.stopImmediatePropagation();
    if (this.isMouseCaptured) {
      if ("Escape" === preventDefault.code) {
        self._dropController();
      }
    }
    if (null != closure_4[preventDefault.code]) {
      const connection = self.connection;
      connection.sendKey(self.sessionId, tmp3[preventDefault.code], "keydown" === preventDefault.type);
    } else {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.log("Unhandled key code " + preventDefault.code);
    }
  }
  _handleMouseEvent(preventDefault) {
    const self = this;
    preventDefault.preventDefault();
    const result = preventDefault.stopImmediatePropagation();
    if ("mousemove" === preventDefault.type) {
      const connection3 = self.connection;
      connection3.sendMouseMove(self.sessionId, preventDefault.movementX, preventDefault.movementY);
    } else if ("wheel" === preventDefault.type) {
      const connection2 = self.connection;
      const _Math = Math;
      connection2.sendMouseWheel(self.sessionId, Math.round(-120 * preventDefault.deltaY / 100));
    } else {
      const connection = self.connection;
      connection.sendMouseButton(self.sessionId, preventDefault.button, "mousedown" === preventDefault.type);
    }
  }
  _handlePointerLockChange() {
    if (null == document.pointerLockElement) {
      const self = this;
      this._dropController();
    }
  }
  _captureMouse() {
    const self = this;
    return (async (arg0, value) => {
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp;
              c3 = 1;
              const _document8 = document;
              const body6 = document.body;
              c1 = 3;
              c4 = 1;
              const obj4 = { value: body6.requestPointerLock({ unadjustedMovement: true }), done: false };
              return obj4;
            }
          } else if (1 === c1) {
            c3 = 0;
            const _document7 = document;
            const body5 = document.body;
            c1 = 2;
            c4 = 1;
            const obj5 = { value: body5.requestPointerLock(), done: false };
            return obj5;
          } else {
            if (2 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj6 = { value, done: true };
                return obj6;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
            }
            if (closure_128_0.isShutdown) {
              const _document6 = document;
              document.exitPointerLock();
            } else {
              const _document = document;
              const listener = body.addEventListener("mousedown", closure_128_0.mouseHandler, true);
              const _document2 = document;
              const body2 = document.body;
              const listener1 = body2.addEventListener("mouseup", closure_128_0.mouseHandler, true);
              const _document3 = document;
              const body3 = document.body;
              const listener2 = body3.addEventListener("mousemove", closure_128_0.mouseHandler, true);
              const _document4 = document;
              const body4 = document.body;
              const listener3 = body4.addEventListener("wheel", closure_128_0.mouseHandler, true);
              const _document5 = document;
              const listener4 = document.addEventListener("pointerlockchange", closure_128_0.pointerLockChangeHandler);
              closure_128_0.isMouseCaptured = true;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp21) {
          let closure_2 = tmp21;
          if (0 === c3) {
            c4 = 3;
            throw tmp21;
          } else {
            c1 = 1;
          }
        }
      }
    })();
  }
  _dropController() {
    const self = this;
    if (this.isMouseCaptured) {
      self._releaseController();
    }
  }
  _handleRelease(arg0) {
    const self = this;
    if (arg0 === this.sessionId) {
      self._releaseController();
    }
  }
  _releaseController() {
    const obj = DispatcherDefault;
    const obj2 = { type: "PASS_THE_CONTROLLER_UPDATE", streamKey: this._streamKey, isHost: false, host: this._host, active: false };
    obj.dispatch(obj2);
  }
  _releaseMouse() {
    const self = this;
    if (this.isMouseCaptured) {
      const _document = document;
      const removed = document.removeEventListener("pointerlockchange", self.pointerLockChangeHandler);
      const _document2 = document;
      const removed1 = body.removeEventListener("mousedown", self.mouseHandler, true);
      const _document3 = document;
      const body2 = document.body;
      const removed2 = body2.removeEventListener("mouseup", self.mouseHandler, true);
      const _document4 = document;
      const body3 = document.body;
      const removed3 = body3.removeEventListener("mousemove", self.mouseHandler, true);
      const _document5 = document;
      const body4 = document.body;
      const removed4 = body4.removeEventListener("wheel", self.mouseHandler, true);
      const _document6 = document;
      document.exitPointerLock();
      self.isMouseCaptured = false;
    }
  }
  _captureGamepad() {
    const self = this;
    if (!this.isGamepadCaptured) {
      self.isGamepadCaptured = true;
      const _window = window;
      const listener = window.addEventListener("gamepadconnected", self.gamepadConnectedHandler);
      const _window2 = window;
      const listener1 = window.addEventListener("gamepaddisconnected", self.gamepadDisconnectedHandler);
      self._findGamepad();
    }
  }
  _findGamepad() {
    const gamepads = navigator.getGamepads();
    const iter = gamepads[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult) {
        if (tmp3.connected) {
          if ("standard" === tmp3.mapping) {
            let self = this;
            let _plugGamepadResult = this._plugGamepad(nextResult);
            iter.return();
          }
        }
      }
      continue;
    }
  }
  _handleGamepadConnected(gamepad) {
    const self = this;
    if (null == this.gamepadIndex) {
      if ("standard" === gamepad.gamepad.mapping) {
        self._plugGamepad(gamepad.gamepad);
      } else {
        const logger = self.logger;
        const _HermesInternal = HermesInternal;
        logger.log("Ignoring gamepad " + gamepad.gamepad.id + " with unsupported mapping");
      }
    }
  }
  _handleGamepadDisconnected(gamepad) {
    const self = this;
    if (gamepad.gamepad.index === this.gamepadIndex) {
      self._unplugGamepad();
      self._findGamepad();
    }
  }
  _plugGamepad(gamepad) {
    const logger = this.logger;
    logger.log("Forwarding gamepad " + gamepad.id);
    this.gamepadIndex = gamepad.index;
    this.lastGamepadTimestamp = -1;
    this.lastButtons = closure_5.map(() => false);
    this.lastLeftStick = [0, 0];
    this.lastRightStick = [0, 0];
    this.lastLeftTrigger = 0;
    this.lastRightTrigger = 0;
    const connection = this.connection;
    connection.sendControllerPlug(this.sessionId, true);
    this.gamepadPollInterval = setInterval(this.gamepadPollHandler, 8.333333333333334);
    this._pollGamepad();
  }
  _unplugGamepad() {
    const self = this;
    if (null != this.gamepadPollInterval) {
      const _clearInterval = clearInterval;
      clearInterval(self.gamepadPollInterval);
      self.gamepadPollInterval = null;
    }
    self.gamepadIndex = null;
    const connection = self.connection;
    connection.sendControllerPlug(self.sessionId, false);
  }
  _pollGamepad() {
    const self = this;
    if (null != this.gamepadIndex) {
      const _navigator = navigator;
      const tmp20 = navigator.getGamepads()[self.gamepadIndex];
      let closure_0 = tmp20;
      if (null != tmp20) {
        if (tmp20.timestamp !== self.lastGamepadTimestamp) {
          self.lastGamepadTimestamp = tmp20.timestamp;
          const item = closure_5.forEach((item, index) => {
            if (null != item) {
              let flag;
              if (buttons.buttons[index] != null) {
                flag = tmp3.pressed;
              }
              if (flag == null) {
                flag = false;
              }
              if (flag !== self.lastButtons[index]) {
                self.lastButtons[index] = flag;
                const connection = tmp4.connection;
                connection.sendControllerButton(self.sessionId, item, flag);
              }
            }
          });
          let num;
          const _Math16 = Math;
          const max4 = Math.max;
          const _Math17 = Math;
          const min4 = Math.min;
          const _Math18 = Math;
          const round4 = Math.round;
          if (tmp20.buttons[6] != null) {
            num = iter2.value;
          }
          if (num == null) {
            num = 0;
          }
          const max4Result = max4(0, min4(255, round4(255 * num)));
          if (max4Result !== self.lastLeftTrigger) {
            self.lastLeftTrigger = max4Result;
            let connection = self.connection;
            let flag = true;
            const result = connection.sendControllerTrigger(self.sessionId, true, max4Result);
          }
          let num4;
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          if (tmp20.buttons[7] != null) {
            num4 = iter.value;
          }
          if (num4 == null) {
            num4 = 0;
          }
          const maxResult = max(0, min(255, round(255 * num4)));
          if (maxResult !== self.lastRightTrigger) {
            self.lastRightTrigger = maxResult;
            const connection2 = self.connection;
            const result1 = connection2.sendControllerTrigger(self.sessionId, false, maxResult);
          }
          let num5 = tmp20.axes[0];
          const _Math4 = Math;
          const max2 = Math.max;
          const _Math5 = Math;
          const min2 = Math.min;
          const _Math6 = Math;
          const round2 = Math.round;
          if (num5 == null) {
            num5 = 0;
          }
          const max2Result = max2(-32768, min2(32767, round2(32767 * num5)));
          let num8 = tmp20.axes[1];
          if (num8 == null) {
            num8 = 0;
          }
          const _Math7 = Math;
          const _Math8 = Math;
          const _Math9 = Math;
          const bound = Math.max(-32768, Math.min(32767, Math.round(32767 * -num8)));
          const tmp7 = max2Result === self.lastLeftStick[0] && bound === self.lastLeftStick[1];
          if (!tmp7) {
            const items = [max2Result, bound];
            self.lastLeftStick = items;
            const connection3 = self.connection;
            connection3.sendControllerStick(self.sessionId, true, max2Result, bound);
          }
          let num9 = tmp20.axes[2];
          const _Math10 = Math;
          const max3 = Math.max;
          const _Math11 = Math;
          const min3 = Math.min;
          const _Math12 = Math;
          const round3 = Math.round;
          if (num9 == null) {
            num9 = 0;
          }
          const max3Result = max3(-32768, min3(32767, round3(32767 * num9)));
          let num10 = tmp20.axes[3];
          if (num10 == null) {
            num10 = 0;
          }
          const _Math13 = Math;
          const _Math14 = Math;
          const _Math15 = Math;
          const bound1 = Math.max(-32768, Math.min(32767, Math.round(32767 * -num10)));
          const tmp14 = max3Result === self.lastRightStick[0] && bound1 === self.lastRightStick[1];
          if (!tmp14) {
            const items1 = [max3Result, bound1];
            self.lastRightStick = items1;
            const connection4 = self.connection;
            connection4.sendControllerStick(self.sessionId, false, max3Result, bound1);
          }
        }
      }
    }
  }
  _releaseGamepad() {
    const self = this;
    if (this.isGamepadCaptured) {
      const _window = window;
      const removed = window.removeEventListener("gamepadconnected", self.gamepadConnectedHandler);
      const _window2 = window;
      const removed1 = window.removeEventListener("gamepaddisconnected", self.gamepadDisconnectedHandler);
      if (null != self.gamepadIndex) {
        self._unplugGamepad();
      }
      self.isGamepadCaptured = false;
    }
  }
  shutdown() {
    this.isShutdown = true;
    this._releaseGamepad();
    const logger = this.logger;
    logger.log("Sending drop to " + this._host);
    const connection = this.connection;
    connection.sendDrop(this.sessionId);
    this._releaseMouse();
    const removed = document.removeEventListener("keydown", this.keyHandler, true);
    const removed1 = document.removeEventListener("keyup", this.keyHandler, true);
    const connection2 = this.connection;
    connection2.off(InputEvent.InputEvent.Connect, this.connectHandler);
    const connection3 = this.connection;
    connection3.off(InputEvent.InputEvent.GrabAllow, this.grabAllowHandler);
    const connection4 = this.connection;
    connection4.off(InputEvent.InputEvent.Drop, this.releaseHandler);
    const connection5 = this.connection;
    connection5.off(InputEvent.InputEvent.Disconnect, this.disconnectHandler);
  }
}
Object.defineProperty(InputGuest.prototype, "host", {
  get: function host() {
    return this._host;
  },
  set: undefined
});

export default InputGuest;
