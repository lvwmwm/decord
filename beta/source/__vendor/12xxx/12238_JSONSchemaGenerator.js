// Module ID: 12238
// Function ID: 12239
// Name: JSONSchemaGenerator
// Dependencies: [109, 41, 42, 12236, 12237]

// Module 12238 (JSONSchemaGenerator)
import _mod12236 from "module_12236" /* 12236 */;
import stringProcessor from "stringProcessor" /* 12237 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let closure_5 = ["~standard"];
class JSONSchemaGenerator {
  constructor(target) {
    _classCallCheck(this, JSONSchemaGenerator);
    let str;
    if (target != null) {
      str = target.target;
    }
    if (str == null) {
      str = "draft-2020-12";
    }
    if ("draft-4" === str) {
      str = "draft-04";
    }
    if ("draft-7" === str) {
      str = "draft-07";
    }
    const obj = { processors: stringProcessor.allProcessors, target: str };
    const initializeContext = _mod12236.initializeContext;
    let metadata;
    if (target != null) {
      metadata = target.metadata;
    }
    if (metadata) {
      metadata = { metadata: target.metadata };
      const obj2 = { metadata: target.metadata };
    }
    const merged = Object.assign(metadata);
    let unrepresentable;
    if (target != null) {
      unrepresentable = target.unrepresentable;
    }
    if (unrepresentable) {
      unrepresentable = { unrepresentable: target.unrepresentable };
      const obj3 = { unrepresentable: target.unrepresentable };
    }
    const merged1 = Object.assign(unrepresentable);
    let override;
    if (target != null) {
      override = target.override;
    }
    if (override) {
      override = { override: target.override };
      const obj4 = { override: target.override };
    }
    const merged2 = Object.assign(override);
    let io;
    if (target != null) {
      io = target.io;
    }
    if (io) {
      io = { io: target.io };
      const obj5 = { io: target.io };
    }
    const merged3 = Object.assign(io);
    this.ctx = initializeContext(obj);
  }
}
let obj = {
  key: "metadataRegistry",
  get() {
    return this.ctx.metadataRegistry;
  }
};
const items = [
  obj,
  {
    key: "target",
    get() {
      return this.ctx.target;
    }
  },
  {
    key: "unrepresentable",
    get() {
      return this.ctx.unrepresentable;
    }
  },
  {
    key: "override",
    get() {
      return this.ctx.override;
    }
  },
  {
    key: "io",
    get() {
      return this.ctx.io;
    }
  },
  {
    key: "counter",
    get() {
      return this.ctx.counter;
    },
    set(counter) {
      this.ctx.counter = counter;
    }
  },
  {
    key: "seen",
    get() {
      return this.ctx.seen;
    }
  },
  {
    key: "process",
    value: function process(innerType, path) {
      let tmp = path;
      if (path === undefined) {
        tmp = { path: [], schemaPath: [] };
        const obj = { path: [], schemaPath: [] };
      }
      return _mod12236.processSchema(innerType, this.ctx, tmp);
    }
  },
  {
    key: "emit",
    value: function emit(_idmap, cycles) {
      const self = this;
      const tmp = cycles;
      if (tmp) {
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
      self.ctx.sharedDefsExtractedFor = undefined;
      self.ctx.sharedEmitDoneFor = undefined;
      _mod12236.extractDefs(self.ctx, _idmap);
      const finalizeResult = _mod12236.finalize(self.ctx, _idmap);
      return _objectWithoutProperties(finalizeResult, closure_5);
    }
  }
];
(() => {
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
const JSONSchemaGenerator_export = _createClass(JSONSchemaGenerator, items);

export { JSONSchemaGenerator_export as JSONSchemaGenerator };
