// Module ID: 12236
// Function ID: 12237
// Dependencies: [12160, 12233]
// Exports: createStandardJSONSchemaMethod, createToJSONSchemaMethod, handleUnrepresentable

// Module 12236
import captureStackTrace from "captureStackTrace" /* 12160 */;
import $output from "$output" /* 12233 */;

const require = globalThis.__r;
let _require, hasOwnProperty, map;

function assignProps(schema) {
  const substr = [...arguments].slice();
  const iter = substr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let _Reflect = Reflect;
    let ownKeysResult = Reflect.ownKeys(nextResult);
    for (const item10019 of ownKeysResult) {
      let tmp7 = item10019;
      let _Object = Object;
      if (propertyIsEnumerable.call(tmp3, item10019)) {
        let assignPropResult = captureStackTrace.assignProp(schema, tmp7, tmp3[tmp7]);
      }
      continue;
    }
    continue;
  }
  return schema;
}
function initializeContext(target) {
  let external;
  let fn;
  let metadata;
  let str2;
  let str3;
  let str4;
  let str5;
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
  let processors = target.processors;
  if (processors == null) {
    processors = {};
  }
  const obj = { processors, metadataRegistry: metadata, target: str, unrepresentable: str2, override: fn, io: str3, counter: 0, seen: new Map(), sharedDefsExtractedFor: "Boolean", sharedEmitDoneFor: "channel_id", cycles: str4, reused: str5, intersections: [], deferred: [], external };
  metadata = undefined;
  if (target != null) {
    metadata = target.metadata;
  }
  if (metadata == null) {
    metadata = $output.globalRegistry;
  }
  str2 = undefined;
  if (target != null) {
    str2 = target.unrepresentable;
  }
  if (str2 == null) {
    str2 = "throw";
  }
  fn = undefined;
  if (target != null) {
    fn = target.override;
  }
  if (fn == null) {
    fn = () => {

    };
  }
  str3 = undefined;
  if (target != null) {
    str3 = target.io;
  }
  if (str3 == null) {
    str3 = "output";
  }
  str4 = undefined;
  new Map();
  if (target != null) {
    str4 = target.cycles;
  }
  if (str4 == null) {
    str4 = "ref";
  }
  str5 = undefined;
  if (target != null) {
    str5 = target.reused;
  }
  if (str5 == null) {
    str5 = "inline";
  }
  external = undefined;
  if (target != null) {
    external = target.external;
  }
  return obj;
}
function processSchema(innerType, initializeContextResult, path) {
  let items;
  let tmp2 = path;
  if (path === undefined) {
    tmp2 = { path: [], schemaPath: [] };
    const obj = { path: [], schemaPath: [] };
  }
  const def = innerType._zod.def;
  const seen = initializeContextResult.seen;
  const value = seen.get(innerType);
  if (value) {
    value.count = value.count + 1;
    const schemaPath = tmp2.schemaPath;
    if (schemaPath.includes(innerType)) {
      value.cycle = tmp2.path;
    }
    return value.schema;
  } else {
    const obj3 = { schema: {}, count: 1, cycle: "Array", path: tmp2.path };
    const seen2 = initializeContextResult.seen;
    const result = seen2.set(innerType, obj3);
    initializeContextResult.sharedDefsExtractedFor = undefined;
    initializeContextResult.sharedEmitDoneFor = undefined;
    const _zod = innerType._zod;
    const toJSONSchema = _zod.toJSONSchema;
    let toJSONSchemaResult;
    if (toJSONSchema != null) {
      toJSONSchemaResult = toJSONSchema();
    }
    if (toJSONSchemaResult) {
      obj3.schema = toJSONSchemaResult;
    } else {
      const obj5 = { schemaPath: items, path: tmp2.path };
      const merged = Object.assign(tmp2);
      items = [];
      items[HermesBuiltin.arraySpread(items, tmp2.schemaPath, 0)] = innerType;
      if (innerType._zod.processJSONSchema) {
        const _zod2 = innerType._zod;
        _zod2.processJSONSchema(initializeContextResult, obj3.schema, obj5);
      } else {
        const schema = obj3.schema;
        if (initializeContextResult.processors[def.type]) {
          initializeContextResult.processors[def.type](innerType, initializeContextResult, schema, obj5);
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("[toJSONSchema]: Non-representable type encountered: " + def.type);
          throw error;
        }
      }
      const parent = innerType._zod.parent;
      if (parent) {
        if (!obj3.ref) {
          obj3.ref = parent;
        }
        processSchema(parent, initializeContextResult, obj5);
        const seen3 = initializeContextResult.seen;
        seen3.get(parent).isParent = true;
      }
    }
    const metadataRegistry = initializeContextResult.metadataRegistry;
    const value2 = metadataRegistry.get(innerType);
    if (value2) {
      assignProps(obj3.schema, value2);
    }
    const tmp26 = "input" === initializeContextResult.io && isTransforming(innerType);
    if (tmp26) {
      delete obj2.schema["examples"];
      delete obj2.schema["default"];
    }
    const tmp28 = "input" === initializeContextResult.io && "_prefault" in obj3.schema;
    if (tmp28) {
      const schema2 = obj3.schema;
      if (schema2.default == null) {
        schema2.default = obj3.schema._prefault;
      }
    }
    delete obj2.schema["_prefault"];
    const seen4 = initializeContextResult.seen;
    return seen4.get(innerType).schema;
  }
}
function extractDefs(initializeContextResult, _idmap) {
  const seen = initializeContextResult.seen;
  const value = seen.get(_idmap);
  exports = value;
  if (exports) {
    if (!initializeContextResult.external) {
      const _Map = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      const seen2 = initializeContextResult.seen;
      const entries = seen2.entries();
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp13 = nextResult;
        let metadataRegistry = initializeContextResult.metadataRegistry;
        let value5 = metadataRegistry.get(nextResult[0]);
        let id1;
        if (value5 != null) {
          id1 = value5.id;
        }
        let tmp16 = id1;
        if (tmp16) {
          let value6 = map.get(tmp16);
          if (value6) {
            if (tmp19 !== tmp13[0]) {
              let _Error2 = Error;
              let _HermesInternal = HermesInternal;
              let str2 = "\" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.";
              let str3 = "Duplicate schema id \"";
              let self5 = this;
              let self6 = this;
              let error = new Error("Duplicate schema id \"" + tmp16 + "\" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.");
              throw error;
            }
          }
          let result = map.set(tmp16, tmp13[0]);
        }
        continue;
      }
      function extractToDef(arg0) {
        let fnResult;
        let str14;
        let str8;
        if (!arg0[1].schema.$ref) {
          let obj;
          let str = "definitions";
          if ("draft-2020-12" === initializeContextResult.target) {
            str = "$defs";
          }
          if (initializeContextResult.external) {
            const registry = tmp2.external.registry;
            exports = registry.get(arg0[0]);
            let id;
            if (exports != null) {
              id = exports.id;
            }
            let fn = tmp2.external.uri;
            if (fn == null) {
              fn = (__shared) => __shared;
            }
            if (id) {
              obj = { ref: fn(id) };
              const obj2 = { ref: fn(id) };
            } else {
              let str10 = arg0[1].defId;
              if (str10 == null) {
                str10 = arg0[1].schema.id;
              }
              if (str10 == null) {
                initializeContextResult.counter = +initializeContextResult.counter + 1;
                str10 = `schema${tmp11}`;
              }
              arg0[1].defId = str10;
              const obj3 = { defId: str10, ref: "" + fnResult + "#/" + str + "/" + str14.replace(/\//g, "~1") };
              const _HermesInternal2 = HermesInternal;
              fnResult = fn("__shared");
              obj = obj3;
              str14 = str10.replace(/~/g, "~0");
            }
          } else {
            const _HermesInternal = HermesInternal;
            const combined = "#/" + str + "/";
            if (arg0[1] === exports) {
              if (!arg0[1].schema.id) {
                obj = { ref: "#" };
              }
            }
            let str5 = arg0[1].schema.id;
            if (str5 == null) {
              initializeContextResult.counter = +initializeContextResult.counter + 1;
              str5 = `__schema${tmp7}`;
            }
            const obj4 = { defId: str5, ref: combined + str8.replace(/\//g, "~1") };
            obj = obj4;
            str8 = str5.replace(/~/g, "~0");
          }
          const defId = obj.defId;
          const obj5 = {};
          const ref = obj.ref;
          const merged = Object.assign(tmp.schema);
          arg0[1].def = obj5;
          if (defId) {
            arg0[1].defId = defId;
          }
          const schema = tmp.schema;
          for (const key10091 in schema) {
            delete schema[key10091];
            continue;
          }
          schema.$ref = ref;
        }
      }
      if ("throw" === initializeContextResult.cycles) {
        const seen4 = initializeContextResult.seen;
        const entries1 = seen4.entries();
        for (const item10074 of entries1) {
          let tmp29 = item10074[1];
          if (tmp29.cycle) {
            let cycle = tmp29.cycle;
            let joined;
            let _Error3 = Error;
            if (cycle != null) {
              let str5 = "/";
              joined = cycle.join("/");
            }
            let _HermesInternal2 = HermesInternal;
            let str6 = "/<root>\n\nSet the `cycles` parameter to `\"ref\"` to resolve cyclical schemas with defs.";
            let str7 = "Cycle detected: #/";
            let self7 = this;
            let self8 = this;
            let _Error31 = new _Error3("Cycle detected: #/" + joined + "/<root>\n\nSet the `cycles` parameter to `\"ref\"` to resolve cyclical schemas with defs.");
            throw _Error31;
          }
        }
      }
      const seen3 = initializeContextResult.seen;
      const entries2 = seen3.entries();
      const iter2 = entries2[Symbol.iterator]();
      let str8 = "ref";
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp39 = nextResult1;
        let tmp40 = nextResult1[1];
        if (_idmap !== nextResult1[0]) {
          if (initializeContextResult.external) {
            let registry = initializeContextResult.external.registry;
            let value7 = registry.get(tmp39[0]);
            if (value7 != null) {
              let id = value7.id;
            }
            if (_idmap !== tmp39[0]) {
              if (tmp45) {
                let extractToDefResult = extractToDef(tmp39);
                continue;
              }
            }
          }
          let metadataRegistry2 = initializeContextResult.metadataRegistry;
          let value8 = metadataRegistry2.get(tmp39[0]);
          let id2;
          if (value8 != null) {
            id2 = value8.id;
          }
          if (!id2) {
            id2 = tmp40.cycle;
          }
          if (!id2) {
            let tmp53 = tmp40.count > 1 && "ref" === initializeContextResult.reused;
            id2 = tmp53;
          }
          if (id2) {
            let extractToDefResult1 = extractToDef(tmp39);
          }
        } else {
          let extractToDefResult2 = extractToDef(tmp39);
        }
        continue;
      }
      if (initializeContextResult.external) {
        initializeContextResult.sharedDefsExtractedFor = initializeContextResult.external;
      }
    }
  } else {
    const tmp2 = globalThis;
    const _Error = Error;
    const self = this;
    let str = "Unprocessed schema. This is a bug in Zod.";
    const self2 = this;
    const error1 = new Error("Unprocessed schema. This is a bug in Zod.");
    throw error1;
  }
}
function compactTypeUnion(anyOf) {
  anyOf = anyOf.anyOf;
  const tmp = anyOf;
  if (Array.isArray(anyOf)) {
    if (0 !== anyOf.length) {
      if (undefined === anyOf.type) {
        const items = [];
        const iter = anyOf[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (tmp5) {
            if (typeof tmp5 === "object") {
              let tmp20 = compactTypeUnion(tmp5);
              let _Object = Object;
              let keys = Object.keys(tmp5);
              if (1 === keys.length) {
                if ("type" === tmp21[0]) {
                  let type = tmp5.type;
                  let tmp24 = type;
                  let _Array = Array;
                  if (Array.isArray(type)) {
                    let items1 = tmp24;
                  } else {
                    items1 = [tmp24];
                  }
                  for (const item10022 of items1) {
                    let tmp9 = item10022;
                    if (typeof item10022 !== "string") {
                      obj.return();
                      iter.return();
                    } else {
                      if (!items.includes(tmp9)) {
                        let arr = items.push(tmp9);
                      }
                      continue;
                    }
                  }
                  continue;
                }
              }
              iter.return();
            }
          }
          iter.return();
        }
        delete tmp["anyOf"];
        let first = items;
        if (1 === items.length) {
          first = items[0];
        }
        anyOf.type = first;
      }
    }
  }
}
function foldObjects(allOf) {
  const items = [];
  const iter = allOf[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (typeof nextResult === "object") {
      if ("object" === tmp2.type) {
        for (const key10016 in tmp2) {
          if (set.has(key10016)) {
            continue;
          } else {
            let tmp4 = iter;
            iter.return();
            return null;
          }
        }
        let tmp6 = nextResult;
        let arr = items.push(tmp2);
        continue;
      }
    }
    iter.return();
    return null;
  }
  const obj = {};
  set = new Set();
  const iter2 = items[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp11 = nextResult1;
    for (const key10043 in nextResult1.properties) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let tmp41 = key10043;
      if (hasOwnProperty.call(obj, key10043)) {
        continue;
      } else {
        let first;
        let items1 = [];
        let arr3 = items1;
        function _loop() {
          const properties = item10051.properties;
          let tmp2;
          const tmp = item10051;
          if (properties != null) {
            tmp2 = properties[key10043];
          }
          if (tmp2 == null) {
            let additionalProperties = tmp.additionalProperties;
            let tmp4 = null;
            if (undefined !== additionalProperties) {
              tmp4 = null;
              if (false !== additionalProperties) {
                tmp4 = null;
                if (typeof additionalProperties === "object") {
                  tmp4 = null;
                  if (null !== additionalProperties) {
                    const _Object = Object;
                    let tmp6 = null;
                    if (Object.keys(additionalProperties).length) {
                      tmp6 = additionalProperties;
                    }
                    tmp4 = tmp6;
                  }
                }
              }
            }
            tmp2 = tmp4;
          }
          additionalProperties = tmp2;
          if (null == tmp2) {
            return 1;
          } else {
            const arr = items1;
            if (!items1.some((item) => {
              const json = JSON.stringify(item);
              return json === JSON.stringify(additionalProperties);
            })) {
              arr.push(tmp2);
            }
          }
        }
        for (const item10051 of items) {
          let _loopResult = _loop();
          continue;
        }
        if (1 === arr3.length) {
          first = arr3[0];
        } else {
          first = foldObjects(arr3);
          if (first == null) {
            let obj2 = { allOf: arr3 };
            first = obj2;
          }
        }
        let assignPropResult = captureStackTrace.assignProp(obj, tmp41, first);
        continue;
      }
      continue;
    }
    let required = tmp11.required;
    if (required == null) {
      required = [];
    }
    for (const item10076 of required) {
      let addResult = set.add(item10076);
      continue;
    }
    continue;
  }
  const obj3 = { type: "object", properties: obj };
  if (set.size) {
    const items2 = [];
    HermesBuiltin.arraySpread(items2, set, 0);
    obj3.required = items2;
  }
  if (items.every((additionalProperties) => false === additionalProperties.additionalProperties)) {
    obj3.additionalProperties = false;
  } else {
    const items3 = [];
    for (const item10097 of items) {
      let tmp34Result = tmp34();
      continue;
    }
    if (1 === items3.length) {
      obj3.additionalProperties = items3[0];
    } else if (items3.length > 1) {
      const obj4 = { allOf: items3 };
      obj3.additionalProperties = obj4;
    }
  }
  return obj3;
}
function foldIntersection(item10125) {
  const allOf = item10125.allOf;
  const tmp = item10125;
  if (Array.isArray(allOf)) {
    if (allOf.length >= 2) {
      let tmp5;
      for (const item10009 of set) {
        if (item10009 in item10125) {
          obj3.return();
        }
      }
      const found = allOf.filter((item) => {
        let closure_0 = item;
        return closure_1_9.some((item) => Array.isArray(closure_0[item]));
      });
      if (found.length) {
        const first = found[0];
        const found1 = closure_9.find((item) => Array.isArray(first[item]));
        const _Object = Object;
        if (1 === Object.keys(first).length) {
          let closure_1 = allOf.filter((item) => item !== first);
          const arr3 = first[found1];
          const mapped = arr3.map((item) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, closure_1, 0)] = item;
            return foldObjects(items);
          });
          if (!mapped.some((item) => !item)) {
            const obj = {};
            obj[found1] = mapped;
            tmp5 = obj;
          }
        }
      } else {
        tmp5 = foldObjects(allOf);
      }
      if (tmp5) {
        delete tmp["allOf"];
        assignProps(item10125, tmp5);
      }
    }
  }
}
function finalize(seen, _standard) {
  let obj4;
  let obj5;
  _require = seen;
  seen = seen.seen;
  let value = seen.get(_standard);
  if (value) {
    let schema2;
    function flattenRef(item10035) {
      let path;
      seen = seen.seen;
      const value = seen.get(item10035);
      if (null !== value.ref) {
        let schema = value.def;
        if (schema == null) {
          schema = value.schema;
        }
        const obj = {};
        const merged = Object.assign(schema);
        value.ref = null;
        if (value.ref) {
          flattenRef(value.ref);
          const seen2 = tmp.seen;
          const value3 = seen2.get(ref);
          const schema2 = value3.schema;
          if (!schema2.$ref) {
            assignProps(schema, schema2);
          } else {
            let allOf = schema.allOf;
            if (allOf == null) {
              allOf = [];
            }
            schema.allOf = allOf;
            const allOf1 = schema.allOf;
            allOf1.push(schema2);
          }
          assignProps(schema, obj);
          if (item10035._zod.parent === value.ref) {
            for (const key10044 in tmp6) {
              let tmp16 = "$ref" !== key10044;
              let tmp28 = key10044;
              if (tmp16) {
                tmp16 = "allOf" !== key10044;
              }
              if (!tmp16) {
                continue;
              } else {
                if (key10044 in obj) {
                  continue;
                } else {
                  delete tmp6[tmp28];
                  continue;
                }
                continue;
              }
              continue;
            }
          }
          if (schema2.$ref) {
            if (value3.def) {
              for (const key10054 in tmp6) {
                let tmp19 = "$ref" !== key10054;
                let tmp29 = key10054;
                if (tmp19) {
                  tmp19 = "allOf" !== key10054;
                }
                if (tmp19) {
                  tmp19 = key10054 in value3.def;
                }
                if (tmp19) {
                  let _JSON = JSON;
                  let _JSON2 = JSON;
                  let json = JSON.stringify(schema[key10054]);
                  tmp19 = json === JSON.stringify(value3.def[key10054]);
                }
                if (!tmp19) {
                  continue;
                } else {
                  delete tmp6[tmp29];
                  continue;
                }
                continue;
              }
            }
          }
        }
        const parent = item10035._zod.parent;
        if (parent) {
          if (parent !== value.ref) {
            flattenRef(parent);
            const seen3 = seen.seen;
            const value4 = seen3.get(parent);
            let prop;
            if (value4 != null) {
              prop = value4.schema.$ref;
            }
            if (prop) {
              schema.$ref = value4.schema.$ref;
              if (value4.def) {
                for (const key10078 in tmp6) {
                  let tmp24 = "$ref" !== key10078;
                  let tmp34 = key10078;
                  if (tmp24) {
                    tmp24 = "allOf" !== key10078;
                  }
                  if (tmp24) {
                    tmp24 = key10078 in value4.def;
                  }
                  if (tmp24) {
                    let _JSON3 = JSON;
                    let _JSON4 = JSON;
                    let json1 = JSON.stringify(schema[key10078]);
                    tmp24 = json1 === JSON.stringify(value4.def[key10078]);
                  }
                  if (!tmp24) {
                    continue;
                  } else {
                    delete tmp6[tmp34];
                    continue;
                  }
                  continue;
                }
              }
            }
          }
        }
        const obj2 = { zodSchema: item10035, jsonSchema: schema, path };
        path = value.path;
        const override = seen.override;
        if (path == null) {
          path = [];
        }
        override(obj2);
      }
    }
    if (!seen.external) {
      let seen2 = seen.seen;
      const items = [];
      const tmp6 = items;
      HermesBuiltin.arraySpread(items, seen2.entries(), 0);
      const reversed = items.reverse();
      for (const item10035 of reversed) {
        let flattenRefResult = flattenRef(item10035[0]);
        continue;
      }
      if ("openapi-3.0" !== seen.target) {
        let seen3 = seen.seen;
        const entries = seen3.entries();
        const iter = entries[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let schema = nextResult[1].def;
          let tmp19 = compactTypeUnion;
          if (schema == null) {
            schema = tmp18[1].schema;
          }
          let tmp19Result = tmp19(schema);
          continue;
        }
      }
      const deferred = seen.deferred;
      for (const item10063 of deferred) {
        let item10063Result = item10063();
        continue;
      }
      if (seen.intersections.length) {
        const _Map = Map;
        const self3 = this;
        const self4 = this;
        map = new Map();
        const seen4 = seen.seen;
        const values = seen4.values();
        let tmp28 = values;
        const iter2 = values[Symbol.iterator]();
        let tmp29 = null;
        const nextResult1 = iter2.next();
        while (iter2 !== undefined) {
          let items1 = [, ];
          ({ schema: arr2[0], def: arr2[1] } = nextResult1);
          let tmp34 = items1;
          for (const item10090 of items1) {
            let tmp35 = item10090;
            let allOf;
            if (item10090 != null) {
              allOf = item10090.allOf;
            }
            let tmp37 = allOf;
            let _Array = Array;
            if (Array.isArray(allOf)) {
              let value5 = map.get(tmp37);
              let arr3 = value5;
              if (arr3) {
                let arr = arr3.push(tmp35);
              } else {
                let items2 = [tmp35];
                let result = map.set(tmp37, items2);
              }
            }
            continue;
          }
          continue;
        }
        const intersections = seen.intersections;
        for (const item10118 of intersections) {
          let value6 = map.get(item10118) ?? [];
          for (const item10125 of value6) {
            let tmp51 = foldIntersection(item10125);
            continue;
          }
          continue;
        }
      }
    }
    let obj = {};
    if ("draft-2020-12" === seen.target) {
      obj.$schema = "https://json-schema.org/draft/2020-12/schema";
    } else if ("draft-07" === seen.target) {
      obj.$schema = "http://json-schema.org/draft-07/schema#";
    } else if ("draft-04" === seen.target) {
      obj.$schema = "http://json-schema.org/draft-04/schema#";
    } else {
      const target = seen.target;
    }
    const external = seen.external;
    let uri;
    if (external != null) {
      uri = external.uri;
    }
    if (uri) {
      const registry = seen.external.registry;
      const value7 = registry.get(_standard);
      let id;
      if (value7 != null) {
        id = value7.id;
      }
      if (id) {
        const external2 = seen.external;
        obj.$id = external2.uri(id);
      } else {
        const _Error2 = Error;
        const self5 = this;
        const self6 = this;
        const error = new Error("Schema is missing an `id` property");
        throw error;
      }
    }
    const tmp59 = assignProps;
    if (value.defId) {
      schema2 = value.schema;
    } else {
      schema2 = value.def;
      if (schema2 == null) {
        schema2 = value.schema;
      }
    }
    tmp59(obj, schema2);
    const metadataRegistry = seen.metadataRegistry;
    const value8 = metadataRegistry.get(_standard);
    let id1;
    if (value8 != null) {
      id1 = value8.id;
    }
    const tmp63 = undefined !== id1 && obj.id === id1;
    if (tmp63) {
      delete obj2["id"];
    }
    const external3 = seen.external;
    let defs;
    if (external3 != null) {
      defs = external3.defs;
    }
    if (defs == null) {
      defs = {};
    }
    if (!seen.external) {
      const seen5 = seen.seen;
      const entries1 = seen5.entries();
      const iter3 = entries1[Symbol.iterator]();
      while (iter3 !== undefined) {
        let tmp68 = iter3.next()[1];
        let tmp69 = tmp68;
        let defId = tmp68.def;
        if (defId) {
          defId = tmp69.defId;
        }
        if (defId) {
          if (tmp69.def.id === tmp69.defId) {
            delete tmp69.def[str10];
          }
          let assignPropResult = require("captureStackTrace").assignProp(defs, tmp69.defId, tmp69.def);
        }
        continue;
      }
    }
    if (seen.external) {
      seen.sharedEmitDoneFor = seen.external;
    }
    if (!seen.external) {
      const _Object = Object;
      if (Object.keys(defs).length > 0) {
        if ("draft-2020-12" === seen.target) {
          obj.$defs = defs;
        } else {
          obj.definitions = defs;
        }
      }
    }
    try {
      let _JSON = JSON;
      let _JSON2 = JSON;
      const parsed = JSON.parse(JSON.stringify(obj));
      const _Object2 = Object;
      const obj3 = { value: obj4, enumerable: false, writable: false };
      obj4 = { jsonSchema: obj5 };
      let merged = Object.assign(_standard["~standard"]);
      obj5 = { input: flattenRef.createStandardJSONSchemaMethod(_standard, "input", seen.processors), output: flattenRef.createStandardJSONSchemaMethod(_standard, "output", seen.processors) };
      defineProperty(parsed, "~standard", obj3);
      return parsed;
    } catch (err) {
      const _Error3 = Error;
      const self7 = this;
      const self8 = this;
      const error1 = new Error("Error converting schema to JSON.");
      throw error1;
    }
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error2 = new Error("Unprocessed schema. This is a bug in Zod.");
    throw error2;
  }
}
function isTransforming(def, arg1) {
  let tmp = arg1;
  if (arg1 == null) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    const obj = { seen: set };
    tmp = obj;
    set = new Set();
  }
  const seen = tmp.seen;
  if (seen.has(def)) {
    return false;
  } else {
    const seen2 = tmp.seen;
    seen2.add(def);
    def = def._zod.def;
    if ("transform" === def.type) {
      return true;
    } else if ("array" === def.type) {
      return isTransforming(def.element, tmp);
    } else if ("set" === def.type) {
      return isTransforming(def.valueType, tmp);
    } else if ("lazy" === def.type) {
      return isTransforming(def.getter(), tmp);
    } else {
      if ("promise" !== def.type) {
        if ("optional" !== def.type) {
          if ("nonoptional" !== def.type) {
            if ("nullable" !== def.type) {
              if ("readonly" !== def.type) {
                if ("default" !== def.type) {
                  if ("prefault" !== def.type) {
                    if ("catch" !== def.type) {
                      if ("intersection" === def.type) {
                        let tmp29Result = isTransforming(def.left, tmp);
                        const tmp29 = isTransforming;
                        if (!tmp29Result) {
                          tmp29Result = tmp29(def.right, tmp);
                        }
                        return tmp29Result;
                      } else {
                        if ("record" !== def.type) {
                          if ("map" !== def.type) {
                            if ("pipe" === def.type) {
                              const traits = def._zod.traits;
                              let hasItem = traits.has("$ZodCodec");
                              if (!hasItem) {
                                let tmp21Result = isTransforming(def.in, tmp);
                                const tmp21 = isTransforming;
                                if (!tmp21Result) {
                                  tmp21Result = tmp21(def.out, tmp);
                                }
                                hasItem = tmp21Result;
                              }
                              return hasItem;
                            } else if ("object" === def.type) {
                              for (const key10060 in def.shape) {
                                if (!isTransforming(def.shape[key10060], tmp)) {
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
                                if (isTransforming(item10048, tmp)) {
                                  obj3.return();
                                  let flag3 = true;
                                  return true;
                                }
                              }
                              return false;
                            } else if ("tuple" === def.type) {
                              const items = def.items;
                              for (const item10028 of items) {
                                if (isTransforming(item10028, tmp)) {
                                  obj2.return();
                                  let flag2 = true;
                                  return true;
                                }
                              }
                              const rest = def.rest;
                              let tmp11 = !rest;
                              if (rest) {
                                tmp11 = !isTransforming(def.rest, tmp);
                              }
                              return !tmp11;
                            } else {
                              return false;
                            }
                          }
                        }
                        let tmp25Result = isTransforming(def.keyType, tmp);
                        const tmp25 = isTransforming;
                        if (!tmp25Result) {
                          tmp25Result = tmp25(def.valueType, tmp);
                        }
                        return tmp25Result;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return isTransforming(def.innerType, tmp);
    }
  }
}
let set = new Set(["type", "properties", "required", "additionalProperties"]);
let closure_9 = ["oneOf", "anyOf"];
let tmp3 = (() => {
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

export { initializeContext };
export function handleUnrepresentable(zodSchema, unrepresentable, properties, path, message) {
  if (typeof unrepresentable.unrepresentable === "function") {
    const obj = { zodSchema, path: path.path, message };
    unrepresentable = unrepresentable.unrepresentable(obj);
  } else {
    unrepresentable = unrepresentable.unrepresentable;
  }
  if ("any" === unrepresentable) {
    return false;
  } else {
    if (undefined !== unrepresentable) {
      if ("throw" !== unrepresentable) {
        const _Object = Object;
        const merged = Object.assign(properties, unrepresentable);
        return true;
      }
    }
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error(message);
    throw error;
  }
}
export { processSchema };
export const process = processSchema;
export { extractDefs };
export { finalize };
export const createToJSONSchemaMethod = (arg0, processors) => {
  let closure_0 = arg0;
  if (processors === undefined) {
    processors = {};
  }
  return (arg0) => {
    processors = { processors };
    const merged = Object.assign(arg0);
    const tmp2 = initializeContext(processors);
    processSchema(closure_0, tmp2);
    extractDefs(tmp2, closure_0);
    return finalize(tmp2, closure_0);
  };
};
export const createStandardJSONSchemaMethod = (arg0, io, processors) => {
  let closure_0 = arg0;
  if (processors === undefined) {
    processors = {};
  }
  return (arg0) => {
    processors = arg0;
    if (arg0 == null) {
      processors = {};
    }
    let libraryOptions = processors.libraryOptions;
    const tmp = initializeContext;
    if (libraryOptions == null) {
      libraryOptions = {};
    }
    const obj2 = { target: processors.target, io, processors };
    const merged = Object.assign(libraryOptions);
    const tmpResult = tmp(obj2);
    processSchema(closure_0, tmpResult);
    extractDefs(tmpResult, closure_0);
    return finalize(tmpResult, closure_0);
  };
};
