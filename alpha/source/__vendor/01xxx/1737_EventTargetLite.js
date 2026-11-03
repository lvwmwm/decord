// Module ID: 1737
// Function ID: 1738
// Name: EventTargetLite
// Dependencies: [41, 42]

// Module 1737 (EventTargetLite)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let set;

class EventTargetLite {
  constructor() {
    _classCallCheck(this, EventTargetLite);
    this.eventListeners = new Map();
    new Map();
  }
}
const entry = {
  key: "addEventListener",
  value: function addEventListener(arg0, arg1) {
    const eventListeners = this.eventListeners;
    let value = eventListeners.get(arg0);
    if (undefined === value) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      const eventListeners2 = this.eventListeners;
      const result = eventListeners2.set(arg0, set);
      value = set;
    }
    value.add(arg1);
  }
};
const items = [
  entry,
  {
    key: "removeEventListener",
    value: function removeEventListener(arg0, arg1) {
      const eventListeners = this.eventListeners;
      const value = eventListeners.get(arg0);
      if (value != null) {
        value.delete(arg1);
      }
    }
  },
  {
    key: "__dispatch",
    value: function __dispatch(loadend, arg1) {
      const self = this;
      const obj = { type: loadend, target: this, loaded: 0, total: 0, lengthComputable: false };
      const merged = Object.assign(arg1);
      const tmp2 = this["on" + loadend];
      if (typeof tmp2 === "function") {
        self.invokeListener(tmp2, obj);
      }
      const eventListeners = self.eventListeners;
      const value = eventListeners.get(loadend);
      if (undefined !== value) {
        const _Array = Array;
        const arr = Array.from(value);
        for (const item10022 of arr) {
          let invokeListenerResult1 = self.invokeListener(item10022, obj);
          continue;
        }
      }
    }
  },
  {
    key: "invokeListener",
    value: function invokeListener(item10022, arg1) {
      try {
        item10022.call(this, arg1);
      } catch (tmp3) {
        const _console = console;
        console.error(tmp3);
      }
    }
  }
];
const EventTargetLite_export = _createClassDefault(EventTargetLite, items);

export { EventTargetLite_export as EventTargetLite };
