// Module ID: 12073
// Function ID: 94156
// Name: JSONSchemaGenerator
// Dependencies: [29, 6, 7, 12071, 12072]

// Module 12073 (JSONSchemaGenerator)
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let closure_5 = ["~standard"];

export const JSONSchemaGenerator = (() => {
  class JSONSchemaGenerator {
    constructor(arg0) {
      tmp = outer1_3(this, JSONSchemaGenerator);
      target = undefined;
      if (null != arg0) {
        target = arg0.target;
      }
      str = "draft-2020-12";
      if (null != target) {
        str = target;
      }
      if ("draft-4" === str) {
        str = "draft-04";
      }
      if ("draft-7" === str) {
        str = "draft-07";
      }
      obj = {};
      obj.processors = JSONSchemaGenerator(outer1_1[4]).allProcessors;
      obj.target = str;
      metadata = undefined;
      if (null != arg0) {
        metadata = arg0.metadata;
      }
      if (metadata) {
        obj = {};
        obj.metadata = arg0.metadata;
        metadata = obj;
      }
      unrepresentable = undefined;
      if (null != arg0) {
        unrepresentable = arg0.unrepresentable;
      }
      if (unrepresentable) {
        obj1 = {};
        obj1.unrepresentable = arg0.unrepresentable;
        unrepresentable = obj1;
      }
      override = undefined;
      if (null != arg0) {
        override = arg0.override;
      }
      if (override) {
        obj2 = {};
        obj2.override = arg0.override;
        override = obj2;
      }
      io = undefined;
      if (null != arg0) {
        io = arg0.io;
      }
      if (io) {
        obj3 = {};
        obj3.io = arg0.io;
        io = obj3;
      }
      this.ctx = JSONSchemaGenerator(outer1_1[3]).initializeContext(Object.assign(obj, metadata, unrepresentable, override, io));
      return;
    }
  }
  let obj = {
    key: "metadataRegistry",
    get() {
      return this.ctx.metadataRegistry;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "target",
    get() {
      return this.ctx.target;
    }
  };
  items[1] = obj;
  obj = {
    key: "unrepresentable",
    get() {
      return this.ctx.unrepresentable;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "override",
    get() {
      return this.ctx.override;
    }
  };
  items[4] = {
    key: "io",
    get() {
      return this.ctx.io;
    }
  };
  items[5] = {
    key: "counter",
    get() {
      return this.ctx.counter;
    },
    set(counter) {
      this.ctx.counter = counter;
    }
  };
  items[6] = {
    key: "seen",
    get() {
      return this.ctx.seen;
    }
  };
  items[7] = {
    key: "process",
    value: function process(arg0) {
      if (arguments.length > 1) {
        const self = this;
        return JSONSchemaGenerator(outer1_1[3]).process(arg0, this.ctx, { path: [], schemaPath: [] });
      }
    }
  };
  items[8] = {
    key: "emit",
    value: function emit(_idmap, cycles) {
      const self = this;
      if (cycles) {
        if (cycles.cycles) {
          self.ctx.cycles = cycles.cycles;
        }
        if (cycles.reused) {
          self.ctx.reused = cycles.reused;
        }
        if (cycles.external) {
          self.ctx.external = cycles.external;
        }
      }
      JSONSchemaGenerator(outer1_1[3]).extractDefs(self.ctx, _idmap);
      return outer1_2(JSONSchemaGenerator(outer1_1[3]).finalize(self.ctx, _idmap), outer1_5);
    }
  };
  return _defineProperties(JSONSchemaGenerator, items);
})();
