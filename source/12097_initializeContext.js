// Module ID: 12097
// Function ID: 94323
// Name: initializeContext
// Dependencies: [65, 12095]
// Exports: createStandardJSONSchemaMethod, createToJSONSchemaMethod

// Module 12097 (initializeContext)
import _toConsumableArray from "_toConsumableArray";

function initializeContext(target) {
  target = undefined;
  if (null != target) {
    target = target.target;
  }
  let str = "draft-2020-12";
  if (null != target) {
    str = target;
  }
  if ("draft-4" === str) {
    str = "draft-04";
  }
  if ("draft-7" === str) {
    str = "draft-07";
  }
  const obj = {};
  let processors = target.processors;
  if (null == processors) {
    processors = {};
  }
  obj.processors = processors;
  let metadata;
  if (null != target) {
    metadata = target.metadata;
  }
  if (null == metadata) {
    metadata = require(12095) /* registry */.globalRegistry;
  }
  obj.metadataRegistry = metadata;
  obj.target = str;
  let unrepresentable;
  if (null != target) {
    unrepresentable = target.unrepresentable;
  }
  let str2 = "throw";
  if (null != unrepresentable) {
    str2 = unrepresentable;
  }
  obj.unrepresentable = str2;
  let fn;
  if (null != target) {
    fn = target.override;
  }
  if (null == fn) {
    fn = () => {

    };
  }
  obj.override = fn;
  let io;
  if (null != target) {
    io = target.io;
  }
  let str3 = "output";
  if (null != io) {
    str3 = io;
  }
  obj.io = str3;
  obj.counter = 0;
  obj.seen = new Map();
  let cycles;
  if (null != target) {
    cycles = target.cycles;
  }
  let str4 = "ref";
  if (null != cycles) {
    str4 = cycles;
  }
  obj.cycles = str4;
  let reused;
  if (null != target) {
    reused = target.reused;
  }
  let str5 = "inline";
  if (null != reused) {
    str5 = reused;
  }
  obj.reused = str5;
  let external;
  if (null != target) {
    external = target.external;
  }
  let tmp11;
  if (null != external) {
    tmp11 = external;
  }
  obj.external = tmp11;
  return obj;
}
function process(_zod, seen) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let obj = arguments[2];
    }
    const def = _zod._zod.def;
    seen = seen.seen;
    let value = seen.get(_zod);
    if (value) {
      value.count = value.count + 1;
      const schemaPath = obj.schemaPath;
      if (schemaPath.includes(_zod)) {
        value.cycle = obj.path;
      }
      return value.schema;
    } else {
      obj = { schema: {}, count: 1, cycle: undefined };
      obj.path = obj.path;
      const seen2 = seen.seen;
      const result = seen2.set(_zod, obj);
      let toJSONSchemaResult;
      if (null != _zod._zod.toJSONSchema) {
        _zod = _zod._zod;
        toJSONSchemaResult = _zod.toJSONSchema();
      }
      if (toJSONSchemaResult) {
        obj.schema = toJSONSchemaResult;
      } else {
        const _Object = Object;
        obj = {};
        const items = [];
        const items1 = [_zod];
        obj.schemaPath = items.concat(_toConsumableArray(obj.schemaPath), items1);
        obj.path = obj.path;
        const merged = Object.assign({}, obj, obj);
        if (_zod._zod.processJSONSchema) {
          const _zod2 = _zod._zod;
          _zod2.processJSONSchema(seen, obj.schema, merged);
        } else {
          const schema = obj.schema;
          if (seen.processors[def.type]) {
            tmp10(_zod, seen, schema, merged);
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("[toJSONSchema]: Non-representable type encountered: " + def.type);
            throw error;
          }
        }
        const parent = _zod._zod.parent;
        if (parent) {
          if (!obj.ref) {
            obj.ref = parent;
          }
          process(parent, seen, merged);
          const seen3 = seen.seen;
          seen3.get(parent).isParent = true;
        }
      }
      const metadataRegistry = seen.metadataRegistry;
      value = metadataRegistry.get(_zod);
      if (value) {
        const _Object2 = Object;
        const merged1 = Object.assign(obj.schema, value);
      }
      let tmp26 = "input" === seen.io;
      if (tmp26) {
        tmp26 = isTransforming(_zod);
      }
      if (tmp26) {
        const schema2 = obj.schema;
        delete tmp2.examples;
        const schema3 = obj.schema;
        delete tmp2.default;
      }
      if (tmp28) {
        const schema4 = obj.schema;
        if (null == schema4.default) {
          schema4.default = obj.schema._prefault;
        }
      }
      const schema5 = obj.schema;
      delete tmp._prefault;
      const seen4 = seen.seen;
      return seen4.get(_zod).schema;
    }
  }
  obj = { path: [], schemaPath: [] };
}
function extractDefs(ctx, _idmap) {
  let closure_0 = ctx;
  const seen = ctx.seen;
  let value = seen.get(_idmap);
  const exports = value;
  if (value) {
    const _Map = Map;
    const map = new Map();
    const seen2 = tmp.seen;
    const entries = seen2.entries();
    const iter = entries[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp81 = nextResult;
      let tmp82 = ctx;
      let metadataRegistry2 = tmp.metadataRegistry;
      value = metadataRegistry2.get(nextResult[0]);
      let id;
      if (null != value) {
        let tmp17 = value;
        id = tmp84.id;
      }
      let tmp19 = id;
      if (id) {
        let tmp20 = map;
        let tmp21 = id;
        let value1 = obj.get(tmp19);
        if (value1) {
          let tmp24 = value1;
          let tmp25 = nextResult;
          if (tmp23 !== tmp81[0]) {
            let _Error2 = Error;
            let tmp30 = id;
            let _HermesInternal = HermesInternal;
            let str2 = "Duplicate schema id \"";
            let str3 = "\" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.";
            let tmp31 = new.target;
            let tmp32 = new.target;
            let error = new Error("Duplicate schema id \"" + tmp19 + "\" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.");
            let tmp34 = error;
            throw error;
          }
        }
        let tmp26 = map;
        let tmp27 = id;
        let tmp28 = nextResult;
        let result = obj.set(tmp19, tmp81[0]);
      }
      continue;
    }
    function extractToDef(arg0) {
      if (!arg0[1].schema.$ref) {
        const tmp4 = (function makeURI(arg0) {
          let str = "definitions";
          if ("draft-2020-12" === outer1_0.target) {
            str = "$defs";
          }
          if (outer1_0.external) {
            const registry = outer1_0.external.registry;
            const value = registry.get(arg0[0]);
            let id;
            if (null != value) {
              id = value.id;
            }
            let fn = outer1_0.external.uri;
            if (null == fn) {
              fn = (__shared) => __shared;
            }
            if (id) {
              let obj = { ref: fn(id) };
              return obj;
            } else {
              let id2 = arg0[1].defId;
              if (null == id2) {
                id2 = arg0[1].schema.id;
              }
              if (null == id2) {
                outer1_0.counter = +outer1_0.counter + 1;
                id2 = `schema${tmp13}`;
              }
              arg0[1].defId = id2;
              obj = { defId: id2 };
              const _HermesInternal2 = HermesInternal;
              obj.ref = "" + fn("__shared") + "#/" + str + "/" + id2;
              return obj;
            }
          } else if (arg0[1] === outer1_1) {
            const obj1 = { ref: "#" };
            return obj1;
          } else {
            const _HermesInternal = HermesInternal;
            id = arg0[1].schema.id;
            const combined = "#/" + str + "/";
            if (null == id) {
              outer1_0.counter = +outer1_0.counter + 1;
              id = `__schema${tmp6}`;
            }
            obj = { defId: id, ref: combined + id };
            return obj;
          }
        })(arg0);
        const defId = tmp4.defId;
        const _Object = Object;
        arg0[1].def = Object.assign({}, arg0[1].schema);
        if (defId) {
          tmp3.defId = defId;
        }
        const schema = tmp3.schema;
        for (const key10020 in schema) {
          let tmp7 = key10020;
          delete tmp[tmp2];
          continue;
        }
        schema.$ref = tmp4.ref;
      }
    }
    if ("throw" === tmp.cycles) {
      const seen4 = tmp.seen;
      const entries1 = seen4.entries();
      const iter3 = entries1[Symbol.iterator]();
      while (iter3 !== undefined) {
        let tmp37 = iter3.next()[1];
        let tmp38 = tmp37;
        if (tmp37.cycle) {
          let _Error3 = Error;
          let cycle = tmp37.cycle;
          let obj2 = cycle;
          let joined;
          if (null != cycle) {
            let tmp40 = cycle;
            let str5 = "/";
            joined = obj2.join("/");
          }
          let _HermesInternal2 = HermesInternal;
          let str6 = "Cycle detected: #/";
          let str7 = "/<root>\n\nSet the `cycles` parameter to `\"ref\"` to resolve cyclical schemas with defs.";
          let prototype4 = _Error3.prototype;
          let tmp41 = new.target;
          let tmp42 = new.target;
          _Error3 = new _Error3("Cycle detected: #/" + joined + "/<root>\n\nSet the `cycles` parameter to `\"ref\"` to resolve cyclical schemas with defs.");
          let tmp44 = _Error3;
          throw _Error3;
        }
      }
    }
    const seen3 = tmp.seen;
    const entries2 = seen3.entries();
    const iter2 = entries2[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp88 = nextResult1;
      let tmp89 = nextResult1[1];
      let tmp90 = _idmap;
      if (tmp2 !== nextResult1[0]) {
        let tmp53 = ctx;
        if (tmp.external) {
          let tmp54 = ctx;
          let registry = tmp.external.registry;
          let tmp55 = nextResult1;
          let value2 = registry.get(tmp88[0]);
          if (null != value2) {
            let tmp58 = value2;
            id = tmp57.id;
          }
          let tmp60 = _idmap;
          let tmp61 = nextResult1;
          if (tmp2 !== tmp88[0]) {
            let tmp62 = id;
            if (tmp59) {
              let tmp78 = extractToDef;
              let tmp79 = nextResult1;
              let extractToDefResult = extractToDef(tmp88);
              continue;
            }
          }
        }
        let tmp63 = ctx;
        let metadataRegistry = tmp.metadataRegistry;
        let tmp64 = nextResult1;
        let value3 = metadataRegistry.get(tmp88[0]);
        let id1;
        if (null != value3) {
          let tmp68 = value3;
          id1 = tmp66.id;
        }
        let cycle2 = id1;
        if (!id1) {
          let tmp69 = tmp89;
          cycle2 = tmp89.cycle;
        }
        let tmp70 = cycle2;
        if (!cycle2) {
          let tmp71 = tmp89;
          let tmp72 = tmp89.count > 1;
          let tmp73 = tmp72;
          if (tmp72) {
            let tmp74 = ctx;
            tmp73 = "ref" === tmp.reused;
          }
          tmp70 = tmp73;
        }
        if (tmp70) {
          let tmp75 = extractToDef;
          let tmp76 = nextResult1;
          let extractToDefResult1 = extractToDef(tmp88);
        }
      } else {
        let tmp50 = extractToDef;
        let tmp51 = nextResult1;
        let extractToDefResult2 = extractToDef(tmp88);
      }
      continue;
    }
  } else {
    const _Error = Error;
    const error1 = new Error("Unprocessed schema. This is a bug in Zod.");
    throw error1;
  }
}
function finalize(seen, _standard) {
  let closure_0 = seen;
  seen = seen.seen;
  let value = seen.get(_standard);
  if (value) {
    function flattenRef(parent) {
      seen = seen.seen;
      let value = seen.get(parent);
      if (null !== value.ref) {
        let schema = value.def;
        if (null == schema) {
          schema = value.schema;
        }
        const _Object = Object;
        const merged = Object.assign({}, schema);
        value.ref = null;
        if (value.ref) {
          flattenRef(ref);
          const seen2 = seen.seen;
          value = seen2.get(ref);
          const schema2 = value.schema;
          if (!schema2.$ref) {
            const _Object2 = Object;
            const merged1 = Object.assign(schema, schema2);
          } else {
            let allOf = schema.allOf;
            if (null == allOf) {
              allOf = [];
            }
            schema.allOf = allOf;
            const allOf1 = schema.allOf;
            allOf1.push(schema2);
          }
          const _Object3 = Object;
          const merged2 = Object.assign(schema, merged);
          if (parent._zod.parent === ref) {
            for (const key10049 in tmp8) {
              let tmp29 = key10049;
              let tmp20 = "$ref" !== key10049;
              if (tmp20) {
                tmp20 = "allOf" !== key10049;
              }
              if (!tmp20) {
                continue;
              } else {
                if (key10049 in merged) {
                  continue;
                } else {
                  delete tmp[tmp4];
                  continue;
                }
                continue;
              }
              continue;
            }
          }
          if (schema2.$ref) {
            if (value.def) {
              for (const key10058 in tmp8) {
                let tmp30 = key10058;
                let tmp22 = "$ref" !== key10058;
                if (tmp22) {
                  tmp22 = "allOf" !== key10058;
                }
                if (tmp22) {
                  tmp22 = key10058 in value.def;
                }
                if (tmp22) {
                  let _JSON = JSON;
                  let _JSON2 = JSON;
                  let json = JSON.stringify(schema[key10058]);
                  tmp22 = json === JSON.stringify(value.def[key10058]);
                }
                if (!tmp22) {
                  continue;
                } else {
                  delete tmp[tmp3];
                  continue;
                }
                continue;
              }
            }
          }
        }
        parent = parent._zod.parent;
        if (parent) {
          if (parent !== ref) {
            flattenRef(parent);
            const seen3 = seen.seen;
            const value1 = seen3.get(parent);
            if (null != value1) {
              if (value1.schema.$ref) {
                schema.$ref = value1.schema.$ref;
                if (value1.def) {
                  for (const key10079 in tmp8) {
                    let tmp35 = key10079;
                    let tmp25 = "$ref" !== key10079;
                    if (tmp25) {
                      tmp25 = "allOf" !== key10079;
                    }
                    if (tmp25) {
                      tmp25 = key10079 in value1.def;
                    }
                    if (tmp25) {
                      let _JSON3 = JSON;
                      let _JSON4 = JSON;
                      let json1 = JSON.stringify(schema[key10079]);
                      tmp25 = json1 === JSON.stringify(value1.def[key10079]);
                    }
                    if (!tmp25) {
                      continue;
                    } else {
                      delete tmp[tmp2];
                      continue;
                    }
                    continue;
                  }
                }
              }
            }
          }
        }
        const obj = { zodSchema: parent, jsonSchema: schema };
        let path = value.path;
        if (null == path) {
          path = [];
        }
        obj.path = path;
        seen.override(obj);
      }
    }
    let seen2 = tmp.seen;
    let obj = _toConsumableArray(seen2.entries());
    const reversed = obj.reverse();
    const tmp14 = reversed[Symbol.iterator]();
    while (tmp14 !== undefined) {
      let tmp17 = flattenRef;
      let tmp9Result = flattenRef(tmp15[0]);
      continue;
    }
    obj = {};
    if ("draft-2020-12" === tmp.target) {
      obj.$schema = "https://json-schema.org/draft/2020-12/schema";
    } else if ("draft-07" === tmp.target) {
      obj.$schema = "http://json-schema.org/draft-07/schema#";
    } else if ("draft-04" === tmp.target) {
      obj.$schema = "http://json-schema.org/draft-04/schema#";
    } else {
      const target = tmp.target;
    }
    const external = tmp.external;
    if (null != external) {
      if (external.uri) {
        const registry = tmp.external.registry;
        value = registry.get(tmp2);
        let id;
        if (null != value) {
          id = value.id;
        }
        if (id) {
          const external2 = tmp.external;
          obj.$id = external2.uri(id);
        } else {
          const _Error2 = Error;
          const error = new Error("Schema is missing an `id` property");
          throw error;
        }
      }
    }
    let schema = value.def;
    if (null == schema) {
      schema = value.schema;
    }
    let merged = Object.assign(obj, schema);
    const external3 = tmp.external;
    let defs;
    if (null != external3) {
      defs = external3.defs;
    }
    if (null == defs) {
      defs = {};
    }
    let seen3 = tmp.seen;
    const entries = seen3.entries();
    const iter = entries[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp48 = iter.next()[1];
      let tmp49 = tmp48;
      let def = tmp48.def;
      let defId = def;
      if (def) {
        let tmp50 = tmp48;
        defId = tmp49.defId;
      }
      if (defId) {
        let tmp51 = defs;
        let tmp52 = tmp48;
        tmp43[tmp49.defId] = tmp49.def;
      }
      continue;
    }
    if (!tmp.external) {
      let _Object = Object;
      if (Object.keys(tmp43).length > 0) {
        if ("draft-2020-12" === tmp.target) {
          obj.$defs = defs;
        } else {
          obj.definitions = tmp43;
        }
      }
    }
    let _JSON = JSON;
    let _JSON2 = JSON;
    const parsed = JSON.parse(JSON.stringify(obj));
    let _Object2 = Object;
    obj = { value: null, enumerable: false, writable: false };
    let _Object3 = Object;
    const obj1 = {};
    const obj2 = { input: flattenRef.createStandardJSONSchemaMethod(tmp2, "input", seen.processors), output: flattenRef.createStandardJSONSchemaMethod(tmp2, "output", seen.processors) };
    obj1.jsonSchema = obj2;
    obj.value = Object.assign({}, tmp2["~standard"], obj1);
    Object.defineProperty(parsed, "~standard", obj);
    return parsed;
  } else {
    const _Error = Error;
    const error1 = new Error("Unprocessed schema. This is a bug in Zod.");
    throw error1;
  }
}
function isTransforming(valueType, arg1) {
  let tmp = arg1;
  if (null == arg1) {
    const obj = {};
    const _Set = Set;
    const set = new Set();
    obj.seen = set;
    tmp = obj;
  }
  const seen = tmp.seen;
  if (seen.has(valueType)) {
    return false;
  } else {
    const seen2 = tmp7.seen;
    seen2.add(valueType);
    const def = valueType._zod.def;
    if ("transform" === def.type) {
      return true;
    } else if ("array" === def.type) {
      return isTransforming(def.element, tmp);
    } else if ("set" === def.type) {
      return isTransforming(def.valueType, tmp7);
    } else if ("lazy" === def.type) {
      return isTransforming(def.getter(), tmp7);
    } else {
      if ("promise" !== def.type) {
        if ("optional" !== def.type) {
          if ("nonoptional" !== def.type) {
            if ("nullable" !== def.type) {
              if ("readonly" !== def.type) {
                if ("default" !== def.type) {
                  if ("prefault" !== def.type) {
                    if ("intersection" === def.type) {
                      let tmp31 = isTransforming(def.left, tmp7);
                      if (!tmp31) {
                        tmp31 = isTransforming(def.right, tmp7);
                      }
                      return tmp31;
                    } else {
                      if ("record" !== def.type) {
                        if ("map" !== def.type) {
                          if ("pipe" === def.type) {
                            let tmp21 = isTransforming(def.in, tmp7);
                            if (!tmp21) {
                              tmp21 = isTransforming(def.out, tmp7);
                            }
                            return tmp21;
                          } else if ("object" === def.type) {
                            for (const key10058 in def.shape) {
                              let tmp41 = key10058;
                              let tmp42 = isTransforming;
                              let tmp43 = tmp;
                              if (!isTransforming(def.shape[key10058], tmp7)) {
                                continue;
                              } else {
                                let flag5 = true;
                                return true;
                              }
                            }
                            return false;
                          } else if ("union" === def.type) {
                            const options = def.options;
                            for (const item10048 of options) {
                              let tmp17 = isTransforming;
                              let tmp18 = tmp;
                              if (isTransforming(item10048, tmp7)) {
                                obj3.return();
                                let flag3 = true;
                                return true;
                              }
                            }
                            return false;
                          } else if ("tuple" === def.type) {
                            const items = def.items;
                            for (const item10031 of items) {
                              let tmp11 = isTransforming;
                              let tmp12 = tmp;
                              if (isTransforming(item10031, tmp7)) {
                                obj2.return();
                                let flag2 = true;
                                return true;
                              }
                            }
                            let tmp13 = !def.rest;
                            if (!tmp13) {
                              tmp13 = !isTransforming(def.rest, tmp7);
                            }
                            return !tmp13;
                          } else {
                            return false;
                          }
                        }
                      }
                      let tmp26 = isTransforming(def.keyType, tmp7);
                      if (!tmp26) {
                        tmp26 = isTransforming(def.valueType, tmp7);
                      }
                      return tmp26;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return isTransforming(def.innerType, tmp7);
    }
  }
}

export { initializeContext };
export { process };
export { extractDefs };
export { finalize };
export const createToJSONSchemaMethod = function createToJSONSchemaMethod(_standard, arg1) {
  let closure_0 = _standard;
  if (arguments.length > 1) {
    let closure_1 = {};
    return (arg0) => {
      const tmp = outer1_4(Object.assign({}, arg0, { processors: closure_1 }));
      outer1_5(closure_0, tmp);
      outer1_6(tmp, closure_0);
      return outer1_7(tmp, closure_0);
    };
  }
};
export const createStandardJSONSchemaMethod = function createStandardJSONSchemaMethod(_standard, input, processors) {
  let closure_0 = _standard;
  let closure_1 = input;
  if (arguments.length > 2) {
    let closure_2 = {};
    return (arg0) => {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
      let libraryOptions = obj.libraryOptions;
      if (null == libraryOptions) {
        libraryOptions = {};
      }
      obj = { target: obj.target, io: closure_1, processors: closure_2 };
      const tmpResult = outer1_4(Object.assign({}, libraryOptions, obj));
      outer1_5(closure_0, tmpResult);
      outer1_6(tmpResult, closure_0);
      return outer1_7(tmpResult, closure_0);
    };
  }
};
