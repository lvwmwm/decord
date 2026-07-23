// Module ID: 201
// Function ID: 2859
// Name: Event
// Dependencies: [6, 7, 202, 129]

// Module 201 (Event)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import setPlatformObject from "setPlatformObject";

const require = arg1;
const tmp2 = (() => {
  class Event {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_2(this, Event);
      this._defaultPrevented = false;
      this._timeStamp = performance.now();
      this[Event(outer1_1[2]).COMPOSED_PATH_KEY] = [];
      this[Event(outer1_1[2]).CURRENT_TARGET_KEY] = null;
      this[Event(outer1_1[2]).EVENT_PHASE_KEY] = Event.NONE;
      this[Event(outer1_1[2]).IN_PASSIVE_LISTENER_FLAG_KEY] = false;
      this[Event(outer1_1[2]).IS_TRUSTED_KEY] = false;
      this[Event(outer1_1[2]).STOP_IMMEDIATE_PROPAGATION_FLAG_KEY] = false;
      this[Event(outer1_1[2]).STOP_PROPAGATION_FLAG_KEY] = false;
      this[Event(outer1_1[2]).TARGET_KEY] = null;
      if (arguments.length < 1) {
        _TypeError2 = TypeError;
        prototype2 = TypeError.prototype;
        tmp10 = new.target;
        str4 = "Failed to construct 'Event': 1 argument required, but only 0 present.";
        tmp11 = new.target;
        typeError = new TypeError("Failed to construct 'Event': 1 argument required, but only 0 present.");
        tmp13 = typeError;
        throw typeError;
      } else {
        tmp14 = typeof arg1;
        if (null != arg1) {
          str = "object";
          if ("object" !== tmp14) {
            str2 = "function";
            if ("function" !== tmp14) {
              _TypeError = TypeError;
              prototype = TypeError.prototype;
              tmp6 = new.target;
              str3 = "Failed to construct 'Event': The provided value is not of type 'EventInit'.";
              tmp7 = new.target;
              typeError1 = new TypeError("Failed to construct 'Event': The provided value is not of type 'EventInit'.");
              tmp9 = typeError1;
              throw typeError1;
            }
          }
        }
        _String = String;
        tmp2 = arg0;
        self._type = String(arg0);
        bubbles = undefined;
        if (null != arg1) {
          bubbles = arg1.bubbles;
        }
        self._bubbles = Boolean(bubbles);
        cancelable = undefined;
        if (null != arg1) {
          cancelable = arg1.cancelable;
        }
        self._cancelable = Boolean(cancelable);
        composed = undefined;
        if (null != arg1) {
          composed = arg1.composed;
        }
        self._composed = Boolean(composed);
        return;
      }
    }
  }
  let obj = {
    key: "bubbles",
    get() {
      return this._bubbles;
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "cancelable",
    get() {
      return this._cancelable;
    }
  };
  items[1] = obj;
  obj = {
    key: "composed",
    get() {
      return this._composed;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "currentTarget",
    get() {
      return Event(outer1_1[2]).getCurrentTarget(this);
    }
  };
  items[4] = {
    key: "defaultPrevented",
    get() {
      return this._defaultPrevented;
    }
  };
  items[5] = {
    key: "eventPhase",
    get() {
      return Event(outer1_1[2]).getEventPhase(this);
    }
  };
  items[6] = {
    key: "isTrusted",
    get() {
      return Event(outer1_1[2]).getIsTrusted(this);
    }
  };
  items[7] = {
    key: "target",
    get() {
      return Event(outer1_1[2]).getTarget(this);
    }
  };
  items[8] = {
    key: "timeStamp",
    get() {
      return this._timeStamp;
    }
  };
  items[9] = {
    key: "type",
    get() {
      return this._type;
    }
  };
  items[10] = {
    key: "composedPath",
    value: function composedPath() {
      const composedPath = Event(outer1_1[2]).getComposedPath(this);
      return composedPath.slice();
    }
  };
  items[11] = {
    key: "preventDefault",
    value: function preventDefault() {
      const self = this;
      if (this._cancelable) {
        if (obj.getInPassiveListenerFlag(self)) {
          const _console = console;
          const _Error = Error;
          const error = new Error("Unable to preventDefault inside passive event listener invocation.");
          console.error(error);
        } else {
          self._defaultPrevented = true;
        }
        obj = Event(outer1_1[2]);
      }
    }
  };
  items[12] = {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      const result = Event(outer1_1[2]).setStopPropagationFlag(this, true);
      const obj = Event(outer1_1[2]);
      const result1 = Event(outer1_1[2]).setStopImmediatePropagationFlag(this, true);
    }
  };
  items[13] = {
    key: "stopPropagation",
    value: function stopPropagation() {
      const result = Event(outer1_1[2]).setStopPropagationFlag(this, true);
    }
  };
  return callback(Event, items);
})();
Object.defineProperty(tmp2, "NONE", { enumerable: true, value: 0 });
Object.defineProperty(tmp2.prototype, "NONE", { enumerable: true, value: 0 });
Object.defineProperty(tmp2, "CAPTURING_PHASE", { enumerable: true, value: 1 });
Object.defineProperty(tmp2.prototype, "CAPTURING_PHASE", { enumerable: true, value: 1 });
Object.defineProperty(tmp2, "AT_TARGET", { enumerable: true, value: 2 });
Object.defineProperty(tmp2.prototype, "AT_TARGET", { enumerable: true, value: 2 });
Object.defineProperty(tmp2, "BUBBLING_PHASE", { enumerable: true, value: 3 });
Object.defineProperty(tmp2.prototype, "BUBBLING_PHASE", { enumerable: true, value: 3 });
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;
