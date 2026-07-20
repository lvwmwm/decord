// Module ID: 201
// Function ID: 2859
// Name: Event
// Dependencies: []

// Module 201 (Event)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class Event {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_2(this, Event);
      this._defaultPrevented = false;
      this._timeStamp = performance.now();
      this[Event(closure_1[2]).COMPOSED_PATH_KEY] = [];
      this[Event(closure_1[2]).CURRENT_TARGET_KEY] = null;
      this[Event(closure_1[2]).EVENT_PHASE_KEY] = Event.NONE;
      this[Event(closure_1[2]).IN_PASSIVE_LISTENER_FLAG_KEY] = false;
      this[Event(closure_1[2]).IS_TRUSTED_KEY] = false;
      this[Event(closure_1[2]).STOP_IMMEDIATE_PROPAGATION_FLAG_KEY] = false;
      this[Event(closure_1[2]).STOP_PROPAGATION_FLAG_KEY] = false;
      this[Event(closure_1[2]).TARGET_KEY] = null;
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
  const arg1 = Event;
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
      return Event(closure_1[2]).getCurrentTarget(this);
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
      return Event(closure_1[2]).getEventPhase(this);
    }
  };
  items[6] = {
    key: "isTrusted",
    get() {
      return Event(closure_1[2]).getIsTrusted(this);
    }
  };
  items[7] = {
    key: "target",
    get() {
      return Event(closure_1[2]).getTarget(this);
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
      const composedPath = Event(closure_1[2]).getComposedPath(this);
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
        const obj = Event(closure_1[2]);
      }
    }
  };
  items[12] = {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      const result = Event(closure_1[2]).setStopPropagationFlag(this, true);
      const obj = Event(closure_1[2]);
      const result1 = Event(closure_1[2]).setStopImmediatePropagationFlag(this, true);
    }
  };
  items[13] = {
    key: "stopPropagation",
    value: function stopPropagation() {
      const result = Event(closure_1[2]).setStopPropagationFlag(this, true);
    }
  };
  return callback(Event, items);
}();
Object.defineProperty(tmp2, "NONE", { <string:1358909183>: 0, <string:1409241855>: 0 });
Object.defineProperty(tmp2.prototype, "NONE", { <string:1358909183>: 0, <string:1409241855>: 0 });
Object.defineProperty(tmp2, "CAPTURING_PHASE", { <string:1358909183>: "<string:1667301377>", <string:1409241855>: "<string:1102852099>" });
Object.defineProperty(tmp2.prototype, "CAPTURING_PHASE", { <string:1358909183>: "<string:1667301377>", <string:1409241855>: "<string:1102852099>" });
Object.defineProperty(tmp2, "AT_TARGET", { <string:1358909183>: "dim", <string:1409241855>: "da" });
Object.defineProperty(tmp2.prototype, "AT_TARGET", { <string:1358909183>: "dim", <string:1409241855>: "da" });
Object.defineProperty(tmp2, "BUBBLING_PHASE", { <string:1358909183>: "%ArrayProto_keys%", <string:1409241855>: "%MapIteratorPrototype%" });
Object.defineProperty(tmp2.prototype, "BUBBLING_PHASE", { <string:1358909183>: "%ArrayProto_keys%", <string:1409241855>: "%MapIteratorPrototype%" });
arg1(dependencyMap[3]).setPlatformObject(tmp2);

export default tmp2;
