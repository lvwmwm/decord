// Module ID: 12107
// Function ID: 94877
// Name: convertBaseSchema
// Dependencies: [57, 65, 12102, 12103, 12101, 12095]

// Module 12107 (convertBaseSchema)
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";

const self = this;
function convertBaseSchema(not, error) {
  let items;
  let length;
  let prefixItems;
  let closure_0 = not;
  let closure_1 = error;
  if (undefined !== not.not) {
    if ("object" === typeof not.not) {
      error = globalThis;
      const _Object5 = Object;
      if (0 === Object.keys(not.not).length) {
        error = React;
        return React.never();
      }
    }
    error = globalThis;
    const _Error9 = Error;
    error = new.target;
    error = new.target;
    error = new Error("not is not supported in Zod (except { not: {} } for never)");
    throw error;
  } else if (undefined !== not.unevaluatedItems) {
    error = globalThis;
    const _Error8 = Error;
    error = new.target;
    error = new.target;
    error = new Error("unevaluatedItems is not supported");
    throw error;
  } else if (undefined !== not.unevaluatedProperties) {
    error = globalThis;
    const _Error7 = Error;
    error = new.target;
    error = new.target;
    error = new Error("unevaluatedProperties is not supported");
    throw error;
  } else {
    if (undefined === not.if) {
      if (undefined === not.then) {
        if (undefined === not.else) {
          if (undefined === not.dependentSchemas) {
            if (undefined === not.dependentRequired) {
              if (not.$ref) {
                const prop = not.$ref;
                let refs = error.refs;
                if (refs.has(prop)) {
                  const refs3 = error.refs;
                  return refs3.get(prop);
                } else {
                  const processing = error.processing;
                  if (processing.has(prop)) {
                    error = React;
                    return React.lazy(() => {
                      const refs = error.refs;
                      if (refs.has(prop)) {
                        const refs2 = error.refs;
                        return refs2.get(prop);
                      } else {
                        const _Error = Error;
                        const _HermesInternal = HermesInternal;
                        error = new Error("Circular reference not resolved: " + prop);
                        throw error;
                      }
                    });
                  } else {
                    const processing2 = error.processing;
                    error = processing2.add(prop);
                    if (prop.startsWith("#")) {
                      const parts = prop.slice(1).split("/");
                      error = globalThis;
                      const _Boolean = Boolean;
                      const found = parts.filter(Boolean);
                      if (0 === found.length) {
                        let rootSchema = error.rootSchema;
                      } else {
                        let str14 = "definitions";
                        if ("draft-2020-12" === error.version) {
                          str14 = "$defs";
                        }
                        if (found[0] === str14) {
                          error = found[1];
                          if (error) {
                            if (error.defs[error]) {
                              rootSchema = error.defs[error];
                            }
                          }
                          const _Error4 = Error;
                          const _HermesInternal3 = HermesInternal;
                          error = new.target;
                          error = new.target;
                          error = new Error("Reference not found: " + prop);
                          throw error;
                        } else {
                          const _Error3 = Error;
                          const _HermesInternal2 = HermesInternal;
                          error = new.target;
                          error = new.target;
                          error = new Error("Reference not found: " + prop);
                          throw error;
                        }
                      }
                      error = convertSchema;
                      error = convertSchema(rootSchema, error);
                      let refs2 = error.refs;
                      error = refs2.set(prop, error);
                      const processing3 = error.processing;
                      error = processing3.delete(prop);
                      return error;
                    } else {
                      error = globalThis;
                      const _Error2 = Error;
                      error = new.target;
                      error = new.target;
                      error = new Error("External $ref is not supported, only local refs (#/...) are allowed");
                      throw error;
                    }
                  }
                }
              } else if (undefined !== not.enum) {
                const _enum = not.enum;
                if ("openapi-3.0" === error.version) {
                  if (true === not.nullable) {
                    if (1 === _enum.length) {
                      error = null;
                      if (null === _enum[0]) {
                        error = React;
                        return React.null();
                      }
                    }
                  }
                }
                if (0 === _enum.length) {
                  error = React;
                  return React.never();
                } else if (1 === _enum.length) {
                  error = React;
                  return React.literal(_enum[0]);
                } else if (_enum.every((arg0) => "string" === typeof arg0)) {
                  error = React;
                  return React.enum(_enum);
                } else {
                  const mapped = _enum.map((arg0) => outer1_6.literal(arg0));
                  if (mapped.length < 2) {
                    error = mapped[0];
                  } else {
                    error = React;
                    items = [, ];
                    [arr6[0], arr6[1]] = mapped;
                    error = _toConsumableArray;
                    error = React.union(items.concat(_toConsumableArray(mapped.slice(2))));
                  }
                  return error;
                }
              } else if (undefined !== not.const) {
                error = React;
                return React.literal(not.const);
              } else {
                const type = not.type;
                error = globalThis;
                const _Array4 = Array;
                if (Array.isArray(type)) {
                  const mapped1 = type.map((type) => outer1_8(Object.assign({}, closure_0, { type }), closure_1));
                  if (0 === mapped1.length) {
                    error = React;
                    error = React.never();
                  } else if (1 === mapped1.length) {
                    error = mapped1[0];
                  } else {
                    error = React;
                    error = React.union(mapped1);
                  }
                  return error;
                } else if (type) {
                  if ("string" === type) {
                    const stringResult = React.string();
                    let checkResult = stringResult;
                    if (not.format) {
                      const format = not.format;
                      if ("email" === format) {
                        error = React;
                        checkResult = stringResult.check(React.email());
                      } else {
                        if ("uri" !== format) {
                          if ("uri-reference" !== format) {
                            if ("uuid" !== format) {
                              if ("guid" !== format) {
                                if ("date-time" === format) {
                                  error = React;
                                  const iso4 = React.iso;
                                  checkResult = stringResult.check(iso4.datetime());
                                } else if ("date" === format) {
                                  error = React;
                                  const iso3 = React.iso;
                                  checkResult = stringResult.check(iso3.date());
                                } else if ("time" === format) {
                                  error = React;
                                  const iso2 = React.iso;
                                  checkResult = stringResult.check(iso2.time());
                                } else if ("duration" === format) {
                                  error = React;
                                  const iso = React.iso;
                                  checkResult = stringResult.check(iso.duration());
                                } else if ("ipv4" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.ipv4());
                                } else if ("ipv6" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.ipv6());
                                } else if ("mac" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.mac());
                                } else if ("cidr" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.cidrv4());
                                } else if ("cidr-v6" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.cidrv6());
                                } else if ("base64" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.base64());
                                } else if ("base64url" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.base64url());
                                } else if ("e164" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.e164());
                                } else if ("jwt" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.jwt());
                                } else if ("emoji" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.emoji());
                                } else if ("nanoid" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.nanoid());
                                } else if ("cuid" === format) {
                                  error = React;
                                  checkResult = stringResult.check(React.cuid());
                                } else if ("cuid2" === format) {
                                  checkResult = stringResult.check(React.cuid2());
                                } else if ("ulid" === format) {
                                  checkResult = stringResult.check(React.ulid());
                                } else if ("xid" === format) {
                                  checkResult = stringResult.check(React.xid());
                                } else {
                                  checkResult = stringResult;
                                  if ("ksuid" === format) {
                                    error = React;
                                    checkResult = stringResult.check(React.ksuid());
                                  }
                                }
                              }
                            }
                            error = React;
                            checkResult = stringResult.check(React.uuid());
                          }
                        }
                        error = React;
                        checkResult = stringResult.check(React.url());
                      }
                    }
                    let minResult = checkResult;
                    if ("number" === typeof not.minLength) {
                      minResult = checkResult.min(not.minLength);
                    }
                    let maxResult = minResult;
                    if ("number" === typeof not.maxLength) {
                      maxResult = minResult.max(not.maxLength);
                    }
                    error = maxResult;
                    if (not.pattern) {
                      const _RegExp2 = RegExp;
                      error = new.target;
                      error = new.target;
                      error = new RegExp(not.pattern);
                      error = maxResult.regex(error);
                    }
                    let booleanResult = error;
                  } else {
                    if ("number" !== type) {
                      if ("integer" !== type) {
                        if ("boolean" === type) {
                          booleanResult = React.boolean();
                        } else if ("null" === type) {
                          booleanResult = React.null();
                        } else if ("object" === type) {
                          const obj = {};
                          let _Set = Set;
                          const tmp26 = not.required || [];
                          const prototype2 = _Set.prototype;
                          _Set = new _Set(tmp26);
                          const _Object = Object;
                          const entries = Object.entries(not.properties || {});
                          const tmp33 = entries[Symbol.iterator]();
                          let num = 2;
                          while (tmp33 !== undefined) {
                            let tmp36 = prop;
                            let tmp37 = prop(tmp34, num);
                            let first = tmp37[0];
                            let tmp39 = convertSchema;
                            let tmp40 = error;
                            let obj12 = convertSchema(tmp37[1], error);
                            let tmp41 = obj;
                            let tmp42 = _Set;
                            let tmp43 = obj12;
                            if (obj11.has(first)) {
                              let optionalResult = obj12;
                            } else {
                              optionalResult = obj12.optional();
                            }
                            obj[first] = optionalResult;
                            continue;
                          }
                          if (not.propertyNames) {
                            const tmp78 = convertSchema(not.propertyNames, error);
                            if (not.additionalProperties) {
                              if ("object" === typeof not.additionalProperties) {
                                let anyResult = convertSchema(not.additionalProperties, error);
                              }
                              const _Object4 = Object;
                              if (0 === Object.keys(obj).length) {
                                booleanResult = React.record(tmp78, anyResult);
                              } else {
                                let objectResult = React.object(obj);
                                booleanResult = React.intersection(objectResult.passthrough(), React.looseRecord(tmp78, anyResult));
                                const passthroughResult = objectResult.passthrough();
                              }
                            }
                            anyResult = React.any();
                          } else if (not.patternProperties) {
                            const patternProperties = not.patternProperties;
                            const _Object2 = Object;
                            const keys = Object.keys(patternProperties);
                            const items1 = [];
                            for (const item10166 of keys) {
                              let tmp53 = convertSchema;
                              let tmp54 = patternProperties;
                              let tmp55 = arg1;
                              let tmp57 = React;
                              let tmp56 = convertSchema(tmp50[item10166], error);
                              let stringResult1 = React.string();
                              let _RegExp = RegExp;
                              let tmp58 = new.target;
                              let tmp59 = new.target;
                              let tmp60 = item10166;
                              let regExp = new RegExp(item10166);
                              let tmp62 = regExp;
                              let tmp63 = items1;
                              let tmp64 = React;
                              let arr = items1.push(React.looseRecord(stringResult1.regex(regExp), tmp56));
                              continue;
                            }
                            const items2 = [];
                            const _Object3 = Object;
                            if (Object.keys(obj).length > 0) {
                              objectResult = React.object(obj);
                              items2.push(objectResult.passthrough());
                            }
                            const push = items2.push;
                            push.apply(items2, items1);
                            if (0 === items2.length) {
                              booleanResult = React.object({}).passthrough();
                              const objectResult1 = React.object({});
                            } else if (1 === items2.length) {
                              booleanResult = items2[0];
                            } else {
                              let intersectionResult = React.intersection(items2[0], items2[1]);
                              let tmp73 = intersectionResult;
                              if (num < items2.length) {
                                do {
                                  let tmp74 = React;
                                  intersectionResult = React.intersection(intersectionResult, items2[num]);
                                  num = num + 1;
                                  tmp73 = intersectionResult;
                                  length = items2.length;
                                } while (num < length);
                              }
                              booleanResult = tmp73;
                            }
                            const tmp50 = patternProperties;
                          } else {
                            const objectResult2 = React.object(obj);
                            if (false === not.additionalProperties) {
                              let strictResult = objectResult2.strict();
                            } else if ("object" === typeof not.additionalProperties) {
                              strictResult = objectResult2.catchall(convertSchema(not.additionalProperties, error));
                            } else {
                              strictResult = objectResult2.passthrough();
                            }
                            booleanResult = strictResult;
                          }
                          obj11 = _Set;
                          const tmp25 = not.properties || {};
                        } else if ("array" === type) {
                          ({ prefixItems, items } = not);
                          if (prefixItems) {
                            const _Array = Array;
                            if (Array.isArray(prefixItems)) {
                              let tmp20;
                              const mapped2 = prefixItems.map((arg0) => outer1_9(arg0, closure_1));
                              if (items) {
                                if ("object" === typeof items) {
                                  const _Array3 = Array;
                                  if (!Array.isArray(items)) {
                                    tmp20 = convertSchema(items, error);
                                  }
                                }
                              }
                              const tupleResult = React.tuple(mapped2);
                              if (tmp20) {
                                let restResult = tupleResult.rest(tmp20);
                              } else {
                                restResult = tupleResult;
                              }
                              let checkResult1 = restResult;
                              if ("number" === typeof not.minItems) {
                                checkResult1 = restResult.check(React.minLength(not.minItems));
                              }
                              booleanResult = checkResult1;
                              if ("number" === typeof not.maxItems) {
                                error = React;
                                booleanResult = checkResult1.check(React.maxLength(not.maxItems));
                              }
                            }
                          }
                          const _Array2 = Array;
                          if (Array.isArray(items)) {
                            let tmp14;
                            const mapped3 = items.map((arg0) => outer1_9(arg0, closure_1));
                            if (not.additionalItems) {
                              if ("object" === typeof not.additionalItems) {
                                tmp14 = convertSchema(not.additionalItems, error);
                              }
                            }
                            const tupleResult1 = React.tuple(mapped3);
                            if (tmp14) {
                              let restResult1 = tupleResult1.rest(tmp14);
                            } else {
                              restResult1 = tupleResult1;
                            }
                            let checkResult2 = restResult1;
                            if ("number" === typeof not.minItems) {
                              checkResult2 = restResult1.check(React.minLength(not.minItems));
                            }
                            booleanResult = checkResult2;
                            if ("number" === typeof not.maxItems) {
                              error = React;
                              booleanResult = checkResult2.check(React.maxLength(not.maxItems));
                            }
                          } else if (undefined !== items) {
                            const arrayResult = React.array(convertSchema(items, error));
                            let minResult1 = arrayResult;
                            if ("number" === typeof not.minItems) {
                              minResult1 = arrayResult.min(not.minItems);
                            }
                            let maxResult1 = minResult1;
                            if ("number" === typeof not.maxItems) {
                              maxResult1 = minResult1.max(not.maxItems);
                            }
                            booleanResult = maxResult1;
                          } else {
                            booleanResult = React.array(React.any());
                          }
                        } else {
                          let _Error = Error;
                          let _HermesInternal = HermesInternal;
                          const error1 = new Error("Unsupported type: " + type);
                          throw error1;
                        }
                      }
                    }
                    if ("integer" === type) {
                      let intResult = React.number().int();
                      const numberResult = React.number();
                    } else {
                      intResult = React.number();
                    }
                    let minResult2 = intResult;
                    if ("number" === typeof not.minimum) {
                      minResult2 = intResult.min(not.minimum);
                    }
                    let maxResult2 = minResult2;
                    if ("number" === typeof not.maximum) {
                      maxResult2 = minResult2.max(not.maximum);
                    }
                    if ("number" === typeof not.exclusiveMinimum) {
                      let gtResult = maxResult2.gt(not.exclusiveMinimum);
                    } else {
                      gtResult = maxResult2;
                      if (tmp93) {
                        gtResult = maxResult2.gt(not.minimum);
                      }
                      tmp93 = true === not.exclusiveMinimum && "number" === typeof not.minimum;
                    }
                    if ("number" === typeof not.exclusiveMaximum) {
                      let ltResult = gtResult.lt(not.exclusiveMaximum);
                    } else {
                      ltResult = gtResult;
                      if (tmp94) {
                        ltResult = gtResult.lt(not.maximum);
                      }
                      tmp94 = true === not.exclusiveMaximum && "number" === typeof not.maximum;
                    }
                    let multipleOfResult = ltResult;
                    if ("number" === typeof not.multipleOf) {
                      multipleOfResult = ltResult.multipleOf(not.multipleOf);
                    }
                    booleanResult = multipleOfResult;
                  }
                  let describeResult = booleanResult;
                  if (not.description) {
                    describeResult = booleanResult.describe(not.description);
                  }
                  error = describeResult;
                  if (undefined !== not.default) {
                    error = describeResult.default(not.default);
                  }
                  return error;
                } else {
                  return React.any();
                }
              }
            }
          }
          error = globalThis;
          const _Error5 = Error;
          error = new.target;
          error = new.target;
          error = new Error("dependentSchemas and dependentRequired are not supported");
          throw error;
        }
      }
    }
    error = globalThis;
    const _Error6 = Error;
    error = new.target;
    error = new.target;
    error = new Error("Conditional schemas (if/then/else) are not supported");
    throw error;
  }
}
function convertSchema(additionalProperties, error) {
  let length;
  let closure_0 = error;
  if ("boolean" === typeof additionalProperties) {
    if (additionalProperties) {
      let anyResult = obj2.any();
    } else {
      anyResult = obj2.never();
    }
    return anyResult;
  } else {
    const tmp68 = convertBaseSchema(tmp, error);
    let type = tmp.type;
    if (!type) {
      type = undefined !== tmp.enum;
    }
    if (!type) {
      type = undefined !== tmp.const;
    }
    let tmp5 = tmp68;
    if (tmp.anyOf) {
      const _Array = Array;
      tmp5 = tmp68;
      if (Array.isArray(tmp.anyOf)) {
        const anyOf = tmp.anyOf;
        const unionResult = React.union(anyOf.map((arg0) => outer1_9(arg0, closure_0)));
        let intersectionResult = unionResult;
        if (type) {
          intersectionResult = React.intersection(tmp68, unionResult);
        }
        tmp5 = intersectionResult;
      }
    }
    let anyResult1 = tmp5;
    if (tmp.oneOf) {
      const _Array2 = Array;
      anyResult1 = tmp5;
      if (Array.isArray(tmp.oneOf)) {
        const oneOf = tmp.oneOf;
        const xorResult = React.xor(oneOf.map((arg0) => outer1_9(arg0, closure_0)));
        let intersectionResult1 = xorResult;
        if (type) {
          intersectionResult1 = React.intersection(tmp5, xorResult);
        }
        anyResult1 = intersectionResult1;
      }
    }
    let tmp23 = anyResult1;
    if (tmp.allOf) {
      const _Array3 = Array;
      tmp23 = anyResult1;
      if (Array.isArray(tmp.allOf)) {
        if (0 === tmp.allOf.length) {
          if (!type) {
            anyResult1 = React.any();
          }
          tmp23 = anyResult1;
        } else {
          let tmp29 = anyResult1;
          if (!type) {
            tmp29 = convertSchema(tmp.allOf[0], error);
          }
          let num2 = 1;
          if (type) {
            num2 = 0;
          }
          let intersectionResult2 = tmp29;
          let tmp32 = tmp29;
          if (num2 < tmp.allOf.length) {
            do {
              let tmp33 = React;
              let tmp34 = convertSchema;
              let tmp35 = additionalProperties;
              intersectionResult2 = React.intersection(intersectionResult2, convertSchema(tmp.allOf[num2], error));
              num2 = num2 + 1;
              tmp32 = intersectionResult2;
              length = tmp.allOf.length;
            } while (num2 < length);
          }
          tmp23 = tmp32;
        }
      }
    }
    let tmp38 = true === tmp.nullable;
    if (tmp38) {
      tmp38 = "openapi-3.0" === error.version;
    }
    let nullableResult = tmp23;
    if (tmp38) {
      nullableResult = React.nullable(tmp23);
    }
    let readonlyResult = nullableResult;
    if (true === tmp.readOnly) {
      readonlyResult = React.readonly(nullableResult);
    }
    const obj = {};
    for (const item10107 of ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"]) {
      let tmp44 = item10107;
      let tmp45 = arg0;
      if (item10107 in tmp) {
        let tmp46 = obj;
        let tmp47 = item10107;
        let tmp48 = arg0;
        obj[tmp44] = tmp[tmp44];
      }
      continue;
    }
    for (const item10119 of ["contentEncoding", "contentMediaType", "contentSchema"]) {
      let tmp49 = item10119;
      let tmp50 = arg0;
      if (item10119 in tmp) {
        let tmp51 = obj;
        let tmp52 = item10119;
        let tmp53 = arg0;
        obj[tmp49] = tmp[tmp49];
      }
      continue;
    }
    const _Object = Object;
    const keys = Object.keys(tmp);
    for (const item10136 of keys) {
      let tmp58 = item10136;
      let tmp59 = set;
      if (!set.has(item10136)) {
        let tmp60 = obj;
        let tmp61 = item10136;
        let tmp62 = arg0;
        obj[tmp58] = tmp[tmp58];
      }
      continue;
    }
    const _Object2 = Object;
    if (Object.keys(obj).length > 0) {
      const registry = error.registry;
      registry.add(readonlyResult, obj);
    }
    return readonlyResult;
  }
}
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp7 = key10009;
            let callResult = "default" !== key10009;
            if (callResult) {
              let _Object = Object;
              callResult = hasOwnProperty.call(arg0, key10009);
            }
            if (!callResult) {
              continue;
            } else {
              let tmp4 = self2;
              let tmp5 = self2(obj, arg0, key10009);
              continue;
            }
            continue;
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    let _Object3 = Object;
    let obj = { value: true };
    exports.fromJSONSchema = function fromJSONSchema($schema, defaultTarget) {
      if ("boolean" === typeof $schema) {
        if ($schema) {
          let anyResult = obj2.any();
        } else {
          anyResult = obj2.never();
        }
        return anyResult;
      } else {
        if (null != defaultTarget) {
          defaultTarget = defaultTarget.defaultTarget;
        }
        $schema = $schema.$schema;
        let str = "draft-2020-12";
        let str3 = "draft-2020-12";
        if ("https://json-schema.org/draft/2020-12/schema" !== $schema) {
          str3 = "draft-7";
          if ("http://json-schema.org/draft-07/schema#" !== $schema) {
            str3 = "draft-4";
            if ("http://json-schema.org/draft-04/schema#" !== $schema) {
              if (null != defaultTarget) {
                str = defaultTarget;
              }
              str3 = str;
            }
          }
        }
        const obj = { version: str3, defs: $schema.$defs || $schema.definitions || {} };
        const _Map = Map;
        const map = new Map();
        obj.refs = map;
        const _Set = Set;
        const set = new Set();
        obj.processing = set;
        obj.rootSchema = $schema;
        let registry;
        if (null != defaultTarget) {
          registry = defaultTarget.registry;
        }
        if (null == registry) {
          registry = require(12095) /* registry */.globalRegistry;
        }
        obj.registry = registry;
        return convertSchema($schema, obj);
      }
    };
    const fnResult = fn(require("module_12102"));
    let _Object4 = Object;
    obj = { iso: fn(require("module_12103")) };
    let _Object5 = Object;
    let closure_6 = Object.assign({}, fn(require("string")), fnResult, obj);
    let _Set = Set;
    let set = new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}
