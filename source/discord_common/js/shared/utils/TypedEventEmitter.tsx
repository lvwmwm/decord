// Module ID: 4297
// Function ID: 37543
// Name: TypedEventEmitter
// Dependencies: [6, 7, 631, 2]

// Module 4297 (TypedEventEmitter)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class TypedEventEmitter {
    constructor() {
      tmp = outer1_2(this, TypedEventEmitter);
      eventEmitter = new TypedEventEmitter(outer1_1[2]).EventEmitter();
      this.emitter = eventEmitter;
      return;
    }
  }
  let obj = {
    key: "on",
    value(arg0, arg1) {
      const emitter = this.emitter;
      emitter.on(arg0, arg1);
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "off",
    value(arg0, arg1) {
      const emitter = this.emitter;
      emitter.off(arg0, arg1);
    }
  };
  items[1] = obj;
  obj = {
    key: "once",
    value(arg0, arg1) {
      const emitter = this.emitter;
      emitter.once(arg0, arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addListener",
    value(arg0, arg1) {
      const emitter = this.emitter;
      emitter.addListener(arg0, arg1);
    }
  };
  items[4] = {
    key: "removeListener",
    value(arg0, arg1) {
      const emitter = this.emitter;
      emitter.removeListener(arg0, arg1);
    }
  };
  items[5] = {
    key: "removeAllListeners",
    value() {
      const emitter = this.emitter;
      emitter.removeAllListeners();
    }
  };
  items[6] = {
    key: "emit",
    value(arg0, arg1) {
      const emitter = this.emitter;
      const items = [arg0, ...HermesBuiltin.copyRestArgs()];
      emitter.emit.apply(items);
    }
  };
  items[7] = {
    key: "listenerCount",
    value(arg0) {
      const emitter = this.emitter;
      return emitter.listenerCount(arg0);
    }
  };
  return callback(TypedEventEmitter, items);
})();
const result = require("EventEmitter").fileFinishedImporting("../discord_common/js/shared/utils/TypedEventEmitter.tsx");

export default tmp2;
