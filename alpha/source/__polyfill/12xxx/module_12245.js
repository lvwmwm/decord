// Module ID: 12245
// Function ID: 12246
// Dependencies: [32, 12241, 12246, 12240, 12160, 12233]
// Exports: fromJSONSchema

// Module 12245
import $output from "$output" /* 12233 */;
import ZodType from "ZodType" /* 12240 */;
import lt2 from "lt" /* 12241 */;
import ZodISODate2 from "ZodISODate" /* 12246 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;

const require = globalThis.__r;
let _require, hasOwnProperty, map;

let ZodISODate;
let self = this;
function applyMinItems(arr, minItems) {
  let closure_0 = minItems;
  return arr.map((optional, index) => {
    let optionalResult = optional;
    if (index >= minItems) {
      optionalResult = optional.optional();
    }
    return optionalResult;
  });
}
function canonicalKey(obj, has) {
  if (null === obj) {
    return "z";
  } else if (typeof obj !== "object") {
    if (typeof obj === "number") {
      const _Number = Number;
      if (Number.isNaN(obj)) {
        return null;
      }
    }
    const _String = String;
    const tmp40 = typeof obj;
    const StringResult = String(obj);
    const _HermesInternal4 = HermesInternal;
    return "" + tmp40[0] + StringResult.length + ":" + StringResult;
  } else if (has.has(obj)) {
    return null;
  } else {
    has.add(obj);
    try {
      const _Array = Array;
      if (Array.isArray(obj)) {
        const items = [];
        const obj2 = obj[Symbol.iterator]();
        while (obj2 !== undefined) {
          let tmp27 = canonicalKey(tmp24, has);
          if (null === tmp27) {
            obj2.return();
            let deleteResult = has.delete(obj);
            return null;
          } else {
            let arr = items.push(tmp28);
            continue;
          }
        }
        const _HermesInternal3 = HermesInternal;
        const combined = "a" + length2 + ":[" + items.join(",") + "]";
        has.delete(obj);
        return combined;
      } else {
        const _Object = Object;
        const keys = Object.keys(obj);
        const sorted = keys.sort();
        const items1 = [];
        const iter = sorted[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let arr2 = nextResult;
          let tmp9 = canonicalKey(obj[nextResult], has);
          if (null === tmp9) {
            iter.return();
            let deleteResult2 = has.delete(obj);
            return null;
          } else {
            let _HermesInternal = HermesInternal;
            let str4 = "";
            let str5 = ":";
            let str6 = "=";
            let arr3 = items1.push("" + arr2.length + ":" + nextResult + "=" + tmp10);
            continue;
          }
        }
        const _HermesInternal2 = HermesInternal;
        const combined1 = "o" + length + ":{" + items1.join(",") + "}";
        has.delete(obj);
        return combined1;
      }
    } catch (tmp38) {
      has.delete(obj);
      throw tmp38;
    }
  }
}
function containsRef(contains) {
  const f104622 = (item) => {
    let someResult1;
    let tmp;
    [tmp, obj] = item;
    if (set.has(tmp)) {
      let tmp9 = typeof obj === "object";
      if (typeof obj === "object") {
        tmp9 = null !== obj;
      }
      if (tmp9) {
        let someResult;
        const _Array = Array;
        if (Array.isArray(obj)) {
          someResult = obj.some(containsRef);
        } else {
          someResult = typeof obj.$ref === "string";
          if (!someResult) {
            const _Object2 = Object;
            const entries = Object.entries(obj);
            someResult = entries.some(f104622);
          }
        }
        tmp9 = someResult;
      }
      someResult1 = tmp9;
    } else {
      const hasItem = set2.has(tmp);
      let tmp4 = !hasItem;
      if (hasItem) {
        tmp4 = typeof obj !== "object";
      }
      if (!tmp4) {
        tmp4 = null === obj;
      }
      someResult1 = !tmp4;
      if (someResult1) {
        const _Object = Object;
        const values = Object.values(obj);
        someResult1 = values.some(containsRef);
      }
    }
    return someResult1;
  };
  let tmp = typeof contains === "object";
  if (typeof contains === "object") {
    tmp = null !== contains;
  }
  if (tmp) {
    let someResult;
    let _Array = Array;
    if (Array.isArray(contains)) {
      let tmp4 = containsRef;
      someResult = contains.some(containsRef);
    } else {
      someResult = typeof contains.$ref === "string";
      if (!someResult) {
        let _Object = Object;
        let entries = Object.entries(contains);
        someResult = entries.some(f104622);
      }
    }
    tmp = someResult;
  }
  return tmp;
}
function plural(interval) {
  let str = "elements";
  if (1 === interval) {
    str = "element";
  }
  return str;
}
function getTupleRest(additionalItems, refs) {
  if (false !== additionalItems) {
    if (undefined !== additionalItems) {
      let anyResult;
      if (true !== additionalItems) {
        anyResult = convertSchema(additionalItems, refs);
      }
      return anyResult;
    }
    anyResult = obj.any();
  }
}
function convertBaseSchema(not, refs) {
  let closure_3;
  let items;
  let length;
  let maxContains;
  let minContains;
  let prefixItems;
  let tmp25;
  function resolveRef($ref, rootSchema) {
    if ($ref.startsWith("#")) {
      const str2 = $ref.slice(1);
      const parts = str2.split("/");
      const _Boolean = Boolean;
      const found = parts.filter(Boolean);
      if (0 === found.length) {
        return rootSchema.rootSchema;
      } else {
        let str4 = "definitions";
        if ("draft-2020-12" === rootSchema.version) {
          str4 = "$defs";
        }
        if (found[0] === str4) {
          let replaced;
          if (undefined !== found[1]) {
            const str6 = found[1];
            const str7 = str6.replace(/~1/g, "/");
            replaced = str7.replace(/~0/g, "~");
          }
          if (replaced) {
            if (rootSchema.defs[replaced]) {
              return rootSchema.defs[replaced];
            }
          }
          const _Error3 = Error;
          const _HermesInternal2 = HermesInternal;
          const self5 = this;
          const self6 = this;
          const error = new Error("Reference not found: " + $ref);
          throw error;
        } else {
          const _Error2 = Error;
          const _HermesInternal = HermesInternal;
          const self3 = this;
          const self4 = this;
          const error1 = new Error("Reference not found: " + $ref);
          throw error1;
        }
      }
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error2 = new Error("External $ref is not supported, only local refs (#/...) are allowed");
      throw error2;
    }
  }
  function checkObjectGuards(checkResult1, arg1) {
    let closure_0 = checkResult1;
    let closure_1 = arg1;
    const transformResult = obj.transform((arg0) => arg0);
    const checkResult = transformResult.check((value) => {
      value = value.value;
      if (typeof value === "object") {
        if (null !== value) {
          const _Array = Array;
          if (!Array.isArray(value)) {
            const _Object = Object;
            const ownPropertyNames = Object.getOwnPropertyNames(value);
            const tmp3 = undefined !== closure_1.minProperties && ownPropertyNames.length < tmp2.minProperties;
            if (tmp3) {
              const issues = value.issues;
              const _HermesInternal = HermesInternal;
              const push = issues.push;
              obj = { origin: "object", code: "too_small", minimum: closure_1.minProperties, inclusive: true, message: "Too small: expected object to have >=" + closure_1.minProperties + " properties", input: value, inst, continue: true };
              push(obj);
            }
            const tmp9 = undefined !== tmp2.maxProperties && ownPropertyNames.length > tmp2.maxProperties;
            if (tmp9) {
              const issues1 = value.issues;
              const _HermesInternal2 = HermesInternal;
              const push2 = issues1.push;
              const obj2 = { origin: "object", code: "too_big", maximum: closure_1.maxProperties, inclusive: true, message: "Too big: expected object to have <=" + closure_1.maxProperties + " properties", input: value, inst, continue: true };
              push2(obj2);
            }
            if (closure_1.keySchema) {
              for (const item10052 of ownPropertyNames) {
                let tmp17 = item10052;
                let keySchema = closure_1.keySchema;
                let safeParseResult = keySchema.safeParse(item10052);
                if (!safeParseResult.success) {
                  let issues2 = value.issues;
                  let obj3 = { code: "invalid_key", origin: "record", issues: tmp21.error.issues, input: tmp17, path: items, continue: true };
                  let items = [tmp17];
                  let arr2 = issues2.push(obj3);
                }
                continue;
              }
            }
          }
        }
      }
    });
    return checkResult.pipe(checkResult1);
  }
  function checkArrayGuards(checkResult3, arg1) {
    let closure_0 = arg1;
    const transformResult = closure_6.transform((arg0) => arg0);
    const checkResult = transformResult.check(function(value) {
      let items;
      value = value.value;
      if (Array.isArray(value)) {
        if (true === closure_0.uniqueItems) {
          let num;
          const _Map = Map;
          const self3 = this;
          const self4 = this;
          map = new Map();
          for (let num = 0; num < value.length; num = num + 1) {
            let _Set = Set;
            let self = this;
            let self2 = this;
            let tmp4 = value[num];
            set = new Set();
            let tmp7 = canonicalKey(tmp4, set);
            if (null !== tmp7) {
              let value2 = map.get(tmp7);
              if (undefined !== value2) {
                let issues = value.issues;
                obj = { code: "custom", message: "Array items must be unique: element at index " + num + " duplicates the one at index " + value2, input: value, path: items, continue: true };
                let _HermesInternal = HermesInternal;
                let push = issues.push;
                items = [num];
                let arr = push(obj);
              } else {
                let result = map.set(tmp7, num);
              }
            }
          }
        }
        if (closure_0.containsSchema) {
          let POSITIVE_INFINITY;
          let num2 = tmp13.minContains;
          if (num2 == null) {
            num2 = 1;
          }
          if (undefined !== closure_0.maxContains) {
            POSITIVE_INFINITY = tmp13.maxContains + 1;
          } else {
            const _Number = Number;
            POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
          }
          let num5 = 0;
          for (const item10053 of value) {
            let containsSchema = closure_0.containsSchema;
            if (containsSchema.safeParse(item10053).success) {
              let sum = num5 + 1;
              num5 = sum;
              if (sum >= POSITIVE_INFINITY) {
                obj2.return();
                break;
              }
              if (num5 < num2) {
                let issues1 = value.issues;
                let obj3 = { code: "custom", message: "Array must contain at least " + num2 + " matching " + plural(num2) + "; found " + num5, input: value, continue: true };
                let push2 = issues1.push;
                let _HermesInternal2 = HermesInternal;
                let str = "; found ";
                let str2 = " matching ";
                let str3 = "Array must contain at least ";
                let push2Result = push2(obj3);
              }
              let tmp30 = closure_0;
              let tmp32 = undefined !== closure_0.maxContains;
              if (tmp32) {
                tmp32 = num5 > tmp31.maxContains;
              }
              if (tmp32) {
                let issues2 = value.issues;
                let obj4 = { code: "custom", message: "Array must contain at most " + tmp30.maxContains + " matching " + plural(tmp30.maxContains), input: value, continue: true };
                let push3 = issues2.push;
                let _HermesInternal3 = HermesInternal;
                let str4 = " matching ";
                let str5 = "Array must contain at most ";
                let push3Result = push3(obj4);
              }
            }
            continue;
          }
        }
      }
    });
    return checkResult.pipe(checkResult3);
  }
  _require = not;
  if (undefined !== not.not) {
    if (typeof not.not === "object") {
      const _Object5 = Object;
      if (0 === Object.keys(not.not).length) {
        return obj.never();
      }
    }
    const _Error6 = Error;
    const self16 = this;
    const self17 = this;
    let error = new Error("not is not supported in Zod (except { not: {} } for never)");
    throw error;
  } else if (undefined !== not.unevaluatedItems) {
    const _Error5 = Error;
    const self14 = this;
    const self15 = this;
    let error1 = new Error("unevaluatedItems is not supported");
    throw error1;
  } else if (undefined !== not.unevaluatedProperties) {
    const _Error4 = Error;
    const self12 = this;
    const self13 = this;
    let error2 = new Error("unevaluatedProperties is not supported");
    throw error2;
  } else {
    if (undefined === not.if) {
      if (undefined === not.then) {
        if (undefined === not.else) {
          if (undefined === not.dependentSchemas) {
            if (undefined === not.dependentRequired) {
              let $ref;
              if (not.$ref) {
                $ref = not.$ref;
                refs = refs.refs;
                if (refs.has($ref)) {
                  const refs3 = refs.refs;
                  return refs3.get($ref);
                } else {
                  const processing = refs.processing;
                  if (processing.has($ref)) {
                    return obj.lazy(function() {
                      refs = refs.refs;
                      const tmp = refs;
                      if (refs.has($ref)) {
                        const refs2 = tmp.refs;
                        return refs2.get($ref);
                      } else {
                        const _Error = Error;
                        const _HermesInternal = HermesInternal;
                        const self = this;
                        const self2 = this;
                        const error = new Error("Circular reference not resolved: " + tmp2);
                        throw error;
                      }
                    });
                  } else {
                    const processing2 = refs.processing;
                    processing2.add($ref);
                    const tmp154 = convertSchema(resolveRef($ref, refs), refs);
                    let refs2 = refs.refs;
                    let result = refs2.set($ref, tmp154);
                    const processing3 = refs.processing;
                    processing3.delete($ref);
                    return tmp154;
                  }
                }
              } else if (undefined !== not.enum) {
                const _enum = not.enum;
                if ("openapi-3.0" === refs.version) {
                  if (true === not.nullable) {
                    if (1 === _enum.length) {
                      if (null === _enum[0]) {
                        return obj.null();
                      }
                    }
                  }
                }
                if (0 === _enum.length) {
                  return obj.never();
                } else if (1 === _enum.length) {
                  return obj.literal(_enum[0]);
                } else if (_enum.every((item) => typeof item === "string")) {
                  return obj.enum(_enum);
                } else {
                  let first;
                  const mapped = _enum.map((item) => obj.literal(item));
                  if (mapped.length < 2) {
                    first = mapped[0];
                  } else {
                    const items1 = [, ];
                    [arr9[0], arr9[1]] = mapped;
                    const union = obj.union;
                    HermesBuiltin.arraySpread(items1, mapped.slice(2), 2);
                    first = union(items1);
                  }
                  return first;
                }
              } else if (undefined !== not.const) {
                return obj.literal(not.const);
              } else {
                const type = not.type;
                const _Array4 = Array;
                if (Array.isArray(type)) {
                  let neverResult;
                  const mapped1 = type.map((type) => {
                    obj = { type };
                    const merged = Object.assign(not);
                    return convertBaseSchema(obj, refs);
                  });
                  if (0 === mapped1.length) {
                    neverResult = obj.never();
                  } else if (1 === mapped1.length) {
                    neverResult = mapped1[0];
                  } else {
                    neverResult = obj.union(mapped1);
                  }
                  return neverResult;
                } else if (type) {
                  let booleanResult;
                  let str = "string";
                  if ("string" === type) {
                    const stringResult = obj.string();
                    let checkResult = stringResult;
                    if (not.format) {
                      const format = not.format;
                      let str4 = "email";
                      if ("email" === format) {
                        checkResult = stringResult.check(obj27.email());
                      } else {
                        if ("uri" !== format) {
                          if ("uri-reference" !== format) {
                            if ("uuid" !== format) {
                              if ("guid" !== format) {
                                if ("date-time" === format) {
                                  const iso3 = obj27.iso;
                                  checkResult = stringResult.check(iso3.datetime({ offset: true }));
                                } else if ("date" === format) {
                                  const iso2 = obj27.iso;
                                  checkResult = stringResult.check(iso2.date());
                                } else if ("time" === format) {
                                  checkResult = stringResult.check(obj27.regex(closure_15));
                                } else if ("duration" === format) {
                                  const iso = obj27.iso;
                                  checkResult = stringResult.check(iso.duration());
                                } else if ("hostname" === format) {
                                  checkResult = stringResult.check(obj27.hostname());
                                } else if ("ipv4" === format) {
                                  checkResult = stringResult.check(obj27.ipv4());
                                } else if ("ipv6" === format) {
                                  checkResult = stringResult.check(obj27.ipv6());
                                } else if ("mac" === format) {
                                  checkResult = stringResult.check(obj27.mac());
                                } else if ("cidr" === format) {
                                  checkResult = stringResult.check(obj27.cidrv4());
                                } else if ("cidr-v6" === format) {
                                  checkResult = stringResult.check(obj27.cidrv6());
                                } else if ("base64" === format) {
                                  checkResult = stringResult.check(obj27.base64());
                                } else if ("base64url" === format) {
                                  checkResult = stringResult.check(obj27.base64url());
                                } else if ("e164" === format) {
                                  checkResult = stringResult.check(obj27.e164());
                                } else if ("credit_card" === format) {
                                  checkResult = stringResult.check(obj27.creditCard());
                                } else if ("iban" === format) {
                                  checkResult = stringResult.check(obj27.iban());
                                } else if ("jwt" === format) {
                                  checkResult = stringResult.check(obj27.jwt());
                                } else if ("emoji" === format) {
                                  checkResult = stringResult.check(obj27.emoji());
                                } else if ("nanoid" === format) {
                                  checkResult = stringResult.check(obj27.nanoid());
                                } else if ("cuid" === format) {
                                  checkResult = stringResult.check(obj27.cuid());
                                } else if ("cuid2" === format) {
                                  checkResult = stringResult.check(obj27.cuid2());
                                } else {
                                  let str5 = "ulid";
                                  if ("ulid" === format) {
                                    checkResult = stringResult.check(obj27.ulid());
                                  } else {
                                    let str6 = "xid";
                                    if ("xid" === format) {
                                      checkResult = stringResult.check(obj27.xid());
                                    } else {
                                      let str7 = "ksuid";
                                      checkResult = stringResult;
                                      if ("ksuid" === format) {
                                        checkResult = stringResult.check(obj27.ksuid());
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            checkResult = stringResult.check(obj27.uuid());
                          }
                        }
                        checkResult = stringResult.check(obj27.url());
                      }
                    }
                    let minResult = checkResult;
                    if (typeof not.minLength === "number") {
                      minResult = checkResult.min(not.minLength);
                    }
                    let maxResult = minResult;
                    if (typeof not.maxLength === "number") {
                      maxResult = minResult.max(not.maxLength);
                    }
                    let regex2Result = maxResult;
                    if (not.pattern) {
                      const _RegExp2 = RegExp;
                      let self6 = this;
                      const self7 = this;
                      const regex2 = maxResult.regex;
                      let regExp = new RegExp(not.pattern);
                      regex2Result = regex2(regExp);
                    }
                    booleanResult = regex2Result;
                  } else {
                    let intResult;
                    let gtResult;
                    let ltResult;
                    if ("number" !== type) {
                      if ("integer" !== type) {
                        if ("boolean" === type) {
                          booleanResult = obj.boolean();
                        } else if ("null" === type) {
                          booleanResult = obj.null();
                        } else if ("object" === type) {
                          let tmp32;
                          let checkResult1;
                          obj = {};
                          let required = not.required;
                          let _Set = Set;
                          const tmp29 = not.properties || {};
                          if (!required) {
                            required = [];
                          }
                          let self3 = this;
                          let self4 = this;
                          let tmp30 = required;
                          const _Set1 = new _Set(required);
                          const tmp31 = _Set1;
                          if (typeof not.additionalProperties === "object") {
                            tmp32 = convertSchema(not.additionalProperties, refs);
                          }
                          let _Object = Object;
                          const entries = Object.entries(tmp29);
                          let tmp34 = entries;
                          let tmp35 = entries[Symbol.iterator]();
                          while (tmp35 !== undefined) {
                            let optionalResult;
                            let tmp40 = _slicedToArray(tmp37, 2);
                            let first1 = tmp40[0];
                            let obj14 = convertSchema(tmp40[1], refs);
                            let assignProp = require("captureStackTrace").assignProp;
                            if (_Set1.has(first1)) {
                              optionalResult = obj14;
                            } else {
                              optionalResult = obj14.optional();
                            }
                            let assignPropResult = assignProp(obj, first1, optionalResult);
                            continue;
                          }
                          if (not.patternProperties) {
                            let passthroughResult;
                            const patternProperties = not.patternProperties;
                            const _Object2 = Object;
                            let keys = Object.keys(patternProperties);
                            const items2 = [];
                            for (const item10164 of keys) {
                              let tmp54 = convertSchema(patternProperties[item10164], refs);
                              let stringResult1 = obj.string();
                              let _RegExp = RegExp;
                              let self5 = this;
                              self4 = this;
                              let regex = stringResult1.regex;
                              let regExp1 = new RegExp(item10164);
                              let arr = items2.push(obj.looseRecord(regex(regExp1), tmp54));
                              continue;
                            }
                            const items3 = [];
                            const _Object3 = Object;
                            if (Object.keys(obj).length > 0) {
                              let push = items3.push;
                              const objectResult = obj.object(obj);
                              let arr2 = push(objectResult.passthrough());
                            }
                            let push2 = items3.push;
                            const items4 = [];
                            HermesBuiltin.arraySpread(items4, items2, 0);
                            HermesBuiltin.apply(push2, items4, items3);
                            if (0 === items3.length) {
                              const objectResult3 = obj.object({});
                              passthroughResult = objectResult3.passthrough();
                            } else if (1 === items3.length) {
                              passthroughResult = items3[0];
                            } else {
                              const intersectionResult = obj.intersection(items3[0], items3[1]);
                              let num12 = 2;
                              let intersectionResult1 = intersectionResult;
                              passthroughResult = intersectionResult;
                              if (2 < items3.length) {
                                do {
                                  intersectionResult1 = obj.intersection(intersectionResult1, items3[num12]);
                                  num12 = num12 + 1;
                                  passthroughResult = intersectionResult1;
                                  length = items3.length;
                                } while (num12 < length);
                              }
                            }
                            checkResult1 = passthroughResult;
                            if (false === not.additionalProperties) {
                              const _Object4 = Object;
                              _slicedToArray = Object.keys(obj);
                              closure_4 = keys.map((item) => {
                                const regExp = new RegExp(item);
                                return regExp;
                              });
                              const inst = passthroughResult;
                              checkResult1 = passthroughResult.check((value) => {
                                if (not($ref[4]).isPlainObject(value.value)) {
                                  const items = [];
                                  const _Object = Object;
                                  function _loop(iter) {
                                    let closure_0 = iter;
                                    let num = 0;
                                    if (!closure_3.includes(iter)) {
                                      num = 0;
                                      if (!closure_4.some((test) => test.test(closure_0))) {
                                        items.push(iter);
                                      }
                                    }
                                    return num;
                                  }
                                  const keys = Object.keys(value.value);
                                  const iter = keys[Symbol.iterator]();
                                  let num = 0;
                                  while (iter !== undefined) {
                                    let _loopResult = _loop(iter.next());
                                    continue;
                                  }
                                  if (items.length) {
                                    const issues = value.issues;
                                    obj = { code: "unrecognized_keys", keys: items, input: value.value, inst };
                                    issues.push(obj);
                                  }
                                }
                              });
                            }
                          } else {
                            const objectResult4 = obj.object(obj);
                            if (false === not.additionalProperties) {
                              checkResult1 = objectResult4.strict();
                            } else if (tmp32) {
                              checkResult1 = objectResult4.catchall(tmp32);
                            } else {
                              checkResult1 = objectResult4.passthrough();
                            }
                          }
                          let minProperties;
                          if (typeof not.minProperties === "number") {
                            minProperties = not.minProperties;
                          }
                          let maxProperties;
                          if (typeof not.maxProperties === "number") {
                            maxProperties = not.maxProperties;
                          }
                          if (!(undefined !== not.propertyNames && true !== not.propertyNames)) {
                            if (undefined === minProperties) {
                              booleanResult = checkResult1;
                            }
                          }
                          let tmp84Result;
                          if (undefined !== not.propertyNames && true !== not.propertyNames) {
                            if (typeof not.propertyNames === "object") {
                              let propertyNames;
                              if (undefined === not.propertyNames.type) {
                                let obj2 = { type: "string" };
                                let merged = Object.assign(not.propertyNames);
                                propertyNames = obj2;
                              }
                              tmp84Result = tmp84(propertyNames, refs);
                            }
                            propertyNames = not.propertyNames;
                          }
                          let obj4 = { keySchema: tmp84Result, minProperties, maxProperties };
                          booleanResult = checkObjectGuards(checkResult1, obj4);
                        } else if ("array" === type) {
                          let checkResult3;
                          ({ prefixItems, items } = not);
                          if (prefixItems) {
                            let _Array = Array;
                            if (Array.isArray(prefixItems)) {
                              let num5 = 0;
                              if (typeof not.minItems === "number") {
                                num5 = not.minItems;
                              }
                              let tmp18 = applyMinItems;
                              const _Array3 = Array;
                              let tmp19 = applyMinItems(prefixItems.map((item) => convertSchema(item, refs)), num5);
                              let tmp20;
                              if (!Array.isArray(items)) {
                                let tmp21 = getTupleRest;
                                tmp20 = getTupleRest(items, refs);
                              }
                              let tmp22 = obj;
                              const tupleResult = obj.tuple(tmp19);
                              let restResult = tupleResult;
                              if (tmp20) {
                                restResult = tupleResult.rest(tmp20);
                              }
                              let checkResult2 = restResult;
                              if (typeof not.minItems === "number") {
                                checkResult2 = restResult.check(obj7.minLength(not.minItems));
                              }
                              checkResult3 = checkResult2;
                              if (typeof not.maxItems === "number") {
                                checkResult3 = checkResult2.check(obj7.maxLength(not.maxItems));
                              }
                            }
                            let tmp23 = true !== not.uniqueItems && undefined === not.contains;
                            booleanResult = checkResult3;
                            if (!tmp23) {
                              const obj5 = { uniqueItems: true === not.uniqueItems, containsSchema: tmp25, minContains, maxContains };
                              tmp25 = undefined;
                              if (undefined !== not.contains) {
                                let tmp26 = convertSchema;
                                tmp25 = convertSchema(not.contains, refs);
                              }
                              minContains = undefined;
                              if (typeof not.minContains === "number") {
                                minContains = not.minContains;
                              }
                              maxContains = undefined;
                              if (typeof not.maxContains === "number") {
                                maxContains = not.maxContains;
                              }
                              booleanResult = checkArrayGuards(checkResult3, obj5);
                            }
                          }
                          const _Array2 = Array;
                          if (Array.isArray(items)) {
                            let num2 = 0;
                            let num3 = 0;
                            if (typeof not.minItems === "number") {
                              num3 = not.minItems;
                            }
                            const tmp13 = applyMinItems;
                            const tmp14 = applyMinItems(items.map((item) => convertSchema(item, refs)), num3);
                            const tmp16 = getTupleRest(not.additionalItems, refs);
                            let tmp17 = obj;
                            let obj3 = obj;
                            const tupleResult1 = obj.tuple(tmp14);
                            let restResult1 = tupleResult1;
                            if (tmp16) {
                              restResult1 = tupleResult1.rest(tmp16);
                            }
                            let checkResult4 = restResult1;
                            if (typeof not.minItems === "number") {
                              checkResult4 = restResult1.check(obj3.minLength(not.minItems));
                            }
                            checkResult3 = checkResult4;
                            if (typeof not.maxItems === "number") {
                              checkResult3 = checkResult4.check(obj3.maxLength(not.maxItems));
                            }
                          } else if (undefined !== items) {
                            let tmp9 = convertSchema;
                            let num = 0;
                            const arrayResult = obj.array(convertSchema(items, refs));
                            let minResult1 = arrayResult;
                            if (typeof not.minItems === "number") {
                              minResult1 = arrayResult.min(not.minItems);
                            }
                            let maxResult1 = minResult1;
                            if (typeof not.maxItems === "number") {
                              maxResult1 = minResult1.max(not.maxItems);
                            }
                            checkResult3 = maxResult1;
                          } else {
                            let tmp6 = obj;
                            let tmp7 = obj;
                            checkResult3 = obj.array(obj.any());
                          }
                        } else {
                          let _Error = Error;
                          let _HermesInternal = HermesInternal;
                          let str2 = "Unsupported type: ";
                          let self = this;
                          let self2 = this;
                          const error3 = new Error("Unsupported type: " + type);
                          throw error3;
                        }
                      }
                    }
                    let str3 = "integer";
                    if ("integer" === type) {
                      const numberResult = obj.number();
                      intResult = numberResult.int();
                    } else {
                      intResult = obj.number();
                    }
                    const minimum = not.minimum;
                    let tmp95 = typeof minimum === "number";
                    if (typeof minimum === "number") {
                      tmp95 = true !== not.exclusiveMinimum;
                    }
                    let minResult2 = intResult;
                    if (tmp95) {
                      minResult2 = intResult.min(not.minimum);
                    }
                    const maximum = not.maximum;
                    let tmp96 = typeof maximum === "number";
                    if (typeof maximum === "number") {
                      tmp96 = true !== not.exclusiveMaximum;
                    }
                    let maxResult2 = minResult2;
                    if (tmp96) {
                      maxResult2 = minResult2.max(not.maximum);
                    }
                    if (typeof not.exclusiveMinimum === "number") {
                      gtResult = maxResult2.gt(not.exclusiveMinimum);
                    } else {
                      gtResult = maxResult2;
                      const tmp97 = true === not.exclusiveMinimum && typeof not.minimum === "number";
                      if (tmp97) {
                        gtResult = maxResult2.gt(not.minimum);
                      }
                    }
                    if (typeof not.exclusiveMaximum === "number") {
                      ltResult = gtResult.lt(not.exclusiveMaximum);
                    } else {
                      ltResult = gtResult;
                      const tmp98 = true === not.exclusiveMaximum && typeof not.maximum === "number";
                      if (tmp98) {
                        ltResult = gtResult.lt(not.maximum);
                      }
                    }
                    let multipleOfResult = ltResult;
                    if (typeof not.multipleOf === "number") {
                      multipleOfResult = ltResult.multipleOf(not.multipleOf);
                    }
                    booleanResult = multipleOfResult;
                  }
                  return booleanResult;
                } else {
                  const tmp2 = obj;
                  let tmp3 = obj;
                  return obj.any();
                }
              }
            }
          }
          let _Error2 = Error;
          const self8 = this;
          const self9 = this;
          const error4 = new Error("dependentSchemas and dependentRequired are not supported");
          throw error4;
        }
      }
    }
    let _Error3 = Error;
    const self10 = this;
    const self11 = this;
    const error5 = new Error("Conditional schemas (if/then/else) are not supported");
    throw error5;
  }
}
function convertSchema(additionalProperties, version) {
  let length;
  _require = version;
  if (typeof additionalProperties === "boolean") {
    let anyResult;
    if (additionalProperties) {
      anyResult = obj6.any();
    } else {
      anyResult = obj6.never();
    }
    return anyResult;
  } else {
    const tmp53 = convertBaseSchema(additionalProperties, version);
    let tmp2 = tmp53;
    if (additionalProperties.anyOf) {
      const _Array = Array;
      tmp2 = tmp53;
      if (Array.isArray(additionalProperties.anyOf)) {
        const anyOf = additionalProperties.anyOf;
        const unionResult = obj.union(anyOf.map((item) => convertSchema(item, version)));
        let intersectionResult = unionResult;
        if (additionalProperties.type || undefined !== additionalProperties.enum || undefined !== additionalProperties.const) {
          intersectionResult = obj.intersection(tmp53, unionResult);
        }
        tmp2 = intersectionResult;
      }
    }
    let anyResult1 = tmp2;
    if (additionalProperties.oneOf) {
      const _Array2 = Array;
      anyResult1 = tmp2;
      if (Array.isArray(additionalProperties.oneOf)) {
        const oneOf = additionalProperties.oneOf;
        const xorResult = obj.xor(oneOf.map((item) => convertSchema(item, version)));
        let intersectionResult1 = xorResult;
        const obj2 = obj;
        if (additionalProperties.type || undefined !== additionalProperties.enum || undefined !== additionalProperties.const) {
          intersectionResult1 = obj2.intersection(tmp2, xorResult);
        }
        anyResult1 = intersectionResult1;
      }
    }
    let tmp10 = anyResult1;
    if (additionalProperties.allOf) {
      const _Array3 = Array;
      tmp10 = anyResult1;
      if (Array.isArray(additionalProperties.allOf)) {
        if (0 === additionalProperties.allOf.length) {
          if (!(additionalProperties.type || undefined !== additionalProperties.enum || undefined !== additionalProperties.const)) {
            anyResult1 = obj.any();
          }
          tmp10 = anyResult1;
        } else {
          let tmp13 = anyResult1;
          if (!(additionalProperties.type || undefined !== additionalProperties.enum || undefined !== additionalProperties.const)) {
            tmp13 = convertSchema(additionalProperties.allOf[0], version);
          }
          let num2 = 1;
          if (additionalProperties.type || undefined !== additionalProperties.enum || undefined !== additionalProperties.const) {
            num2 = 0;
          }
          let intersectionResult2 = tmp13;
          let tmp15 = tmp13;
          if (num2 < additionalProperties.allOf.length) {
            do {
              intersectionResult2 = obj.intersection(intersectionResult2, convertSchema(additionalProperties.allOf[num2], version));
              num2 = num2 + 1;
              tmp15 = intersectionResult2;
              length = additionalProperties.allOf.length;
            } while (num2 < length);
          }
          tmp10 = tmp15;
        }
      }
    }
    let nullableResult = tmp10;
    const tmp19 = true === additionalProperties.nullable && "openapi-3.0" === version.version;
    if (tmp19) {
      nullableResult = obj.nullable(tmp10);
    }
    let readonlyResult = nullableResult;
    if (true === additionalProperties.readOnly) {
      readonlyResult = obj.readonly(nullableResult);
    }
    let defaultResult = readonlyResult;
    if (undefined !== additionalProperties.default) {
      defaultResult = readonlyResult.default(additionalProperties.default);
    }
    const obj3 = {};
    const items = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
    for (const item10092 of items) {
      let tmp24 = item10092;
      if (item10092 in additionalProperties) {
        obj3[tmp24] = additionalProperties[tmp24];
      }
      continue;
    }
    const items1 = ["contentEncoding", "contentMediaType", "contentSchema"];
    for (const item10102 of items1) {
      let tmp27 = item10102;
      if (item10102 in additionalProperties) {
        obj3[tmp27] = additionalProperties[tmp27];
      }
      continue;
    }
    if ("object" === additionalProperties.type) {
      if (undefined === additionalProperties.$ref) {
        const tmp29 = undefined === additionalProperties.propertyNames || containsRef(additionalProperties.propertyNames);
        if (!tmp29) {
          obj3.propertyNames = additionalProperties.propertyNames;
        }
        const items2 = ["minProperties", "maxProperties"];
        for (const item10120 of items2) {
          let tmp32 = item10120;
          if (undefined !== additionalProperties[item10120]) {
            obj3[tmp32] = additionalProperties[tmp32];
          }
          continue;
        }
      }
    }
    if ("array" === additionalProperties.type) {
      if (undefined === additionalProperties.$ref) {
        const tmp34 = undefined === additionalProperties.contains || containsRef(additionalProperties.contains);
        if (!tmp34) {
          obj3.contains = additionalProperties.contains;
        }
        const items3 = ["uniqueItems", "minContains", "maxContains"];
        for (const item10138 of items3) {
          let tmp37 = item10138;
          if (undefined !== additionalProperties[item10138]) {
            obj3[tmp37] = additionalProperties[tmp37];
          }
          continue;
        }
      }
    }
    const _Object = Object;
    const keys = Object.keys(additionalProperties);
    for (const item10152 of keys) {
      let tmp43 = item10152;
      if (!set.has(item10152)) {
        let assignPropResult = require("captureStackTrace").assignProp(obj3, tmp43, additionalProperties[tmp43]);
      }
      continue;
    }
    const _Object2 = Object;
    if (Object.keys(obj3).length > 0) {
      const registry = version.registry;
      registry.add(defaultResult, obj3);
    }
    let describeResult = defaultResult;
    if (additionalProperties.description) {
      describeResult = defaultResult.describe(additionalProperties.description);
    }
    return describeResult;
  }
}
let _slicedToArray = _slicedToArray_mod;
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_4 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  let _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_5 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_4(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_5(obj, __esModule);
  return obj;
});
let lt = tmp5(lt2);
let obj = { iso: ZodISODate };
ZodISODate = tmp5(ZodISODate2);
let merged = Object.assign(tmp5(ZodType));
lt = Object.assign(lt);
let set = new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);
const set1 = new Set(["items", "prefixItems", "additionalItems", "additionalProperties", "contains", "propertyNames", "not", "if", "then", "else", "allOf", "anyOf", "oneOf", "unevaluatedItems", "unevaluatedProperties", "contentSchema"]);
const set2 = new Set(["properties", "patternProperties", "dependentSchemas", "dependencies", "$defs", "definitions"]);
const re15 = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)$/;
let tmp14 = (() => {
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
            obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
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

export function fromJSONSchema(flag, defaultTarget) {
  let registry;
  function detectVersion(parsed, defaultTarget) {
    const $schema = parsed.$schema;
    if ("https://json-schema.org/draft/2020-12/schema" === $schema) {
      return "draft-2020-12";
    } else if ("http://json-schema.org/draft-07/schema#" === $schema) {
      return "draft-7";
    } else if ("http://json-schema.org/draft-04/schema#" === $schema) {
      return "draft-4";
    } else {
      let str3 = defaultTarget;
      if (defaultTarget == null) {
        str3 = "draft-2020-12";
      }
      return str3;
    }
  }
  if (typeof flag === "boolean") {
    let anyResult;
    if (flag) {
      anyResult = obj3.any();
    } else {
      anyResult = obj3.never();
    }
    return anyResult;
  } else {
    try {
      const _JSON = JSON;
      const _JSON2 = JSON;
      const parsed = JSON.parse(JSON.stringify(flag));
      defaultTarget = undefined;
      if (defaultTarget != null) {
        defaultTarget = defaultTarget.defaultTarget;
      }
      let prop = parsed.$defs;
      const tmp7 = detectVersion(parsed, defaultTarget);
      if (!prop) {
        prop = parsed.definitions;
      }
      if (!prop) {
        prop = {};
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      obj = { version: tmp7, defs: prop, refs: map, processing: set, rootSchema: parsed, registry };
      const _Set = Set;
      const self3 = this;
      const self4 = this;
      map = new Map();
      registry = undefined;
      set = new Set();
      if (defaultTarget != null) {
        registry = defaultTarget.registry;
      }
      if (registry == null) {
        registry = $output.globalRegistry;
      }
      return convertSchema(parsed, obj);
    } catch (err) {
      const _Error = Error;
      const self5 = this;
      const self6 = this;
      const error = new Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
      throw error;
    }
  }
}
