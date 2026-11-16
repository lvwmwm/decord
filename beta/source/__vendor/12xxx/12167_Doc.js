// Module ID: 12167
// Function ID: 12168
// Name: Doc
// Dependencies: [41, 42]

// Module 12167 (Doc)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class Doc {
  constructor(arg0, arg1) {
    let items = arg0;
    if (arg0 === undefined) {
      items = [];
    }
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    _classCallCheck(this, Doc);
    this.content = [];
    this.indent = 0;
    this.args = items;
    this.closed = obj;
  }
}
const entry = {
  key: "indented",
  value: function indented(fn3) {
    const self = this;
    this.indent = this.indent + 1;
    try {
      fn3(self);
      self.indent = self.indent - 1;
    } catch (tmp3) {
      self.indent = self.indent - 1;
      throw tmp3;
    }
  }
};
let items = [
  entry,
  {
    key: "write",
    value: function write(fn) {
      const self = this;
      if (typeof fn === "function") {
        fn(self, { execution: "sync" });
        fn(self, { execution: "async" });
      } else {
        const parts = fn.split("\n");
        const found = parts.filter((item) => item);
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(items, found.map((item) => item.length - item.trimStart().length), 0);
        const _Math2 = Math;
        let closure_0 = HermesBuiltin.apply(min, items, Math);
        const mapped = found.map((arr) => arr.slice(closure_0));
        const mapped1 = mapped.map((item) => " ".repeat(2 * self.indent) + item);
        for (const item10003 of mapped1) {
          let content = self.content;
          let arr = content.push(item10003);
          continue;
        }
      }
    }
  },
  {
    key: "compile",
    value: function compile() {
      const self = this;
      const _Function = Function;
      let content;
      if (this != null) {
        content = self.content;
      }
      if (content == null) {
        content = [""];
      }
      const items = [...Object.keys(self.closed)];
      const args = self.args;
      const joined = args.join(", ");
      items[tmp] = "return function (" + joined + ") {\n" + content.join("\n") + "\n};";
      const _FunctionResult = _Function(...Object.keys(self.closed));
      return _FunctionResult(...Object.values(self.closed));
    }
  }
];
const tmp3 = (() => {
  let tmp = exports;
  const ownPropertyNames = Object.getOwnPropertyNames(exports);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    const _Object = Object;
    const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
    if (ownPropertyDescriptor) {
      if (ownPropertyDescriptor.get) {
        if (ownPropertyDescriptor.configurable) {
          let value;
          try {
            value = ownPropertyDescriptor.get();
          } catch (err) {
          }
          if (undefined !== value) {
            const _Object2 = Object;
            const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
            Object.defineProperty(exports, ownPropertyNames[num], obj);
          }
        }
      }
    }
    num = num + 1;
    tmp = tmp2;
  }
  const frozen = Object.freeze(tmp);
})();
const Doc_export = _createClass(Doc, items);

export { Doc_export as Doc };
