// Module ID: 4293
// Function ID: 37503
// Name: TypedEventEmitter
// Dependencies: []

// Module 4293 (TypedEventEmitter)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class TypedEventEmitter {
    constructor() {
      tmp = closure_2(this, TypedEventEmitter);
      eventEmitter = new TypedEventEmitter(closure_1[2]).EventEmitter();
      this.emitter = eventEmitter;
      return;
    }
  }
  const arg1 = TypedEventEmitter;
  let obj = {
    key: "on",
    value(arg0, arg1) {
      const emitter = this.emitter;
      emitter.on(arg0, arg1);
    }
  };
  const items = [obj, , , , , , , ];
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
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/shared/utils/TypedEventEmitter.tsx");

export default tmp2;
