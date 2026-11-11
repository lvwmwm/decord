// Module ID: 16000
// Function ID: 16001
// Name: InputGuest
// Dependencies: [5, 3, 15995, 572, 2]

// Module 16000 (InputGuest)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import InputEvent from "InputEvent" /* 15995 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c4;

const React3 = { Escape: 27, Digit0: 48, Digit1: 49, Digit2: 50, Digit3: 51, Digit4: 52, Digit5: 53, Digit6: 54, Digit7: 55, Digit8: 56, Digit9: 57, Minus: 189, Equal: 187, Backspace: 8, Tab: 9, KeyA: 65, KeyB: 66, KeyC: 67, KeyD: 68, KeyE: 69, KeyF: 70, KeyG: 71, KeyH: 72, KeyI: 73, KeyJ: 74, KeyK: 75, KeyL: 76, KeyM: 77, KeyN: 78, KeyO: 79, KeyP: 80, KeyQ: 81, KeyR: 82, KeyS: 83, KeyT: 84, KeyU: 85, KeyV: 86, KeyW: 87, KeyX: 88, KeyY: 89, KeyZ: 90, BracketLeft: 219, BracketRight: 221, Enter: 13, ControlLeft: 162, ControlRight: 163, Semicolon: 186, Quote: 222, Backquote: 192, ShiftLeft: 160, ShiftRight: 161, Backslash: 220, Comma: 188, Period: 190, Slash: 191, AltLeft: 164, AltRight: 165, Space: 32, CapsLock: 20, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, ArrowUp: 38, ArrowDown: 40, ArrowLeft: 37, ArrowRight: 39 };
const result = size.fileFinishedImporting("modules/pass_the_controller/InputGuest.tsx");
class InputGuest {
  constructor(connection, _host, _streamKey) {
    const merged = Object.assign({ sessionId: null, isMouseCaptured: false, isShutdown: false });
    const uint32Array = new Uint32Array(1);
    merged[0] = getRandomValues(uint32Array)[0];
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
    }
  }
  _handleKeyEvent(preventDefault) {
    const self = this;
    preventDefault.preventDefault();
    if (this.isMouseCaptured) {
      if ("Escape" === preventDefault.code) {
        self._dropController();
      }
    }
    if (null != closure_4[preventDefault.code]) {
      const connection = self.connection;
      connection.sendKey(self.sessionId, tmp2[preventDefault.code], "keydown" === preventDefault.type);
    } else {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.log("Unhandled key code " + preventDefault.code);
    }
  }
  _handleMouseEvent(preventDefault) {
    const self = this;
    preventDefault.preventDefault();
    if ("mousemove" === preventDefault.type) {
      const connection2 = self.connection;
      connection2.sendMouseMove(self.sessionId, preventDefault.movementX, preventDefault.movementY);
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
              const _document7 = document;
              const body5 = document.body;
              c1 = 3;
              c4 = 1;
              const obj4 = { value: body5.requestPointerLock({ unadjustedMovement: true }), done: false };
              return obj4;
            }
          } else if (1 === c1) {
            c3 = 0;
            const _document6 = document;
            const body4 = document.body;
            c1 = 2;
            c4 = 1;
            const obj5 = { value: body4.requestPointerLock(), done: false };
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
              const _document5 = document;
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
              const listener3 = document.addEventListener("pointerlockchange", closure_128_0.pointerLockChangeHandler);
              closure_128_0.isMouseCaptured = true;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          let closure_2 = tmp19;
          if (0 === c3) {
            c4 = 3;
            throw tmp19;
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
      document.exitPointerLock();
      self.isMouseCaptured = false;
    }
  }
  shutdown() {
    this.isShutdown = true;
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
