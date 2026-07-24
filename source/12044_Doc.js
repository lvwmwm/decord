// Module ID: 12044
// Function ID: 93578
// Name: Doc
// Dependencies: [164, 65, 6, 7]

// Module 12044 (Doc)
import _construct from "_construct";
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export const Doc = (() => {
  class Doc {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          first = arguments[0];
        }
        tmp2 = outer1_2;
        tmp3 = Doc;
        tmp4 = outer1_2(self, Doc);
        self.content = [];
        self.indent = 0;
        if (self) {
          self.args = [];
        }
        return;
      }
      return;
    }
  }
  let obj = {
    key: "indented",
    value: function indented(arg0) {
      this.indent = this.indent + 1;
      arg0(this);
      this.indent = this.indent - 1;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "write",
    value: function write(str) {
      let self = this;
      self = this;
      if ("function" === typeof str) {
        let obj = { execution: "sync" };
        str(self, obj);
        obj = { execution: "async" };
        str(self, obj);
      } else {
        const parts = str.split("\n");
        const found = parts.filter((arg0) => arg0);
        const _Math = Math;
        const _Math2 = Math;
        let closure_1 = min.apply(Math, outer1_1(found.map((str) => str.length - str.trimStart().length)));
        const mapped = found.map((arr) => arr.slice(closure_1));
        const mapped1 = mapped.map((arg0) => " ".repeat(2 * self.indent) + arg0);
        for (const item10004 of mapped1) {
          let content = self.content;
          let arr = content.push(item10004);
          continue;
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "compile",
    value: function compile() {
      const self = this;
      let args;
      if (null != this) {
        args = self.args;
      }
      let content;
      if (null != self) {
        content = self.content;
      }
      if (null == content) {
        content = [""];
      }
      const obj = outer1_1(content.map((arg0) => "  " + arg0));
      const items = [obj.join("\n")];
      return Doc(Function, outer1_1(args).concat(items));
    }
  };
  items[2] = obj;
  return _defineProperties(Doc, items);
})();
