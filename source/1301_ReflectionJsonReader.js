// Module ID: 1301
// Function ID: 15203
// Name: ReflectionJsonReader
// Dependencies: []

// Module 1301 (ReflectionJsonReader)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);

export const ReflectionJsonReader = () => {
  class ReflectionJsonReader {
    constructor(arg0) {
      tmp = closure_3(this, ReflectionJsonReader);
      this.info = arg0;
      return;
    }
  }
  const require = ReflectionJsonReader;
  let obj = {
    key: "prepare",
    value: function prepare() {
      const self = this;
      if (undefined === this.fMap) {
        self.fMap = {};
        let fields = self.info.fields;
        if (null === fields) {
          fields = [];
        }
        for (const item10009 of fields) {
          self.fMap[item10009.name] = item10009;
          self.fMap[item10009.jsonName] = item10009;
          self.fMap[item10009.localName] = item10009;
        }
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "assert",
    value: function assert(arg0, arg1, prepareResult) {
      if (!arg0) {
        const typeofJsonValueResult = ReflectionJsonReader(closure_1[3]).typeofJsonValue(prepareResult);
        let str = "number";
        let tmp4 = "number" != typeofJsonValueResult;
        if (tmp4) {
          tmp4 = "boolean" != typeofJsonValueResult;
        }
        str = typeofJsonValueResult;
        if (!tmp4) {
          str = prepareResult.toString();
        }
        const _Error = Error;
        const self = this;
        const _HermesInternal = HermesInternal;
        const error = new Error("Cannot parse JSON " + str + " for " + this.info.typeName + "#" + arg1);
        throw error;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "read",
    value: function read(arg0, arg1, ignoreUnknownFields) {
      let tmp95;
      let tmp97;
      const self = this;
      let prepareResult = this.prepare();
      const items = [];
      const entries = Object.entries(arg0);
      while (tmp3 !== undefined) {
        let tmp93 = callback;
        let tmp94 = callback(tmp4, 2);
        [tmp95, tmp97] = tmp94;
        let tmp98 = self.fMap[tmp95];
        let obj5 = tmp98;
        if (tmp98) {
          let tmp11 = tmp98;
          let localName = obj5.localName;
          if (obj5.oneof) {
            let tmp13 = items;
            let tmp14 = tmp98;
            if (items.includes(obj5.oneof)) {
              let _Error2 = Error;
              let _HermesInternal2 = HermesInternal;
              let str4 = "Multiple members of the oneof group \"";
              let str5 = "\" of ";
              let str6 = " are present in JSON.";
              let tmp89 = new.target;
              let tmp90 = new.target;
              let error = new Error("Multiple members of the oneof group \"" + tmp98.oneof + "\" of " + self.info.typeName + " are present in JSON.");
              let tmp92 = error;
              throw error;
            } else {
              let tmp15 = items;
              let tmp16 = tmp98;
              let arr = items.push(obj5.oneof);
              let tmp18 = arg1;
              let obj = {};
              let tmp19 = localName;
              obj.oneofKind = localName;
              arg1[obj5.oneof] = obj;
              let tmp12 = obj;
            }
          } else {
            tmp12 = arg1;
          }
          let tmp20 = tmp98;
          if ("map" == obj5.kind) {
            let tmp56 = tmp97;
            if (null === tmp97) {
              // continue
            } else {
              prepareResult = ReflectionJsonReader;
              prepareResult = closure_1;
              let obj6 = ReflectionJsonReader(closure_1[3]);
              prepareResult = tmp97;
              prepareResult = tmp98;
              prepareResult = self.assert(obj6.isJsonObject(tmp97), obj5.name, tmp97);
              prepareResult = tmp12;
              prepareResult = localName;
              prepareResult = tmp12[localName];
              let _Object = Object;
              prepareResult = Object.entries(tmp97);
              for (const item10154 of prepareResult) {
                prepareResult = closure_2;
                prepareResult = closure_2(item10154, 2);
                prepareResult = prepareResult[1];
                prepareResult = tmp98;
                prepareResult = self.assert(null !== prepareResult, obj5.name + " map value", null);
                let internalJsonReadResult;
                let kind3 = obj5.V.kind;
                if ("message" === kind3) {
                  let tmp63 = tmp98;
                  let V2 = obj5.V;
                  let TResult = V2.T();
                  let tmp64 = prepareResult;
                  let tmp65 = arg2;
                  internalJsonReadResult = TResult.internalJsonRead(prepareResult, arg2);
                } else if ("enum" === kind3) {
                  let tmp57 = tmp98;
                  let V = obj5.V;
                  let tmp58 = prepareResult;
                  let tmp59 = arg2;
                  let tmp60 = self;
                  let enumResult = self.enum(V.T(), prepareResult, obj5.name, arg2.ignoreUnknownFields);
                  internalJsonReadResult = enumResult;
                  continue;
                } else if ("scalar" === kind3) {
                  prepareResult = tmp98;
                  prepareResult = self;
                  internalJsonReadResult = self.scalar(prepareResult, obj5.V.T, obj5.V.L, obj5.name);
                }
                let tmp66 = internalJsonReadResult;
                let tmp67 = tmp98;
                let tmp68 = prepareResult;
                let assertResult = self.assert(undefined !== internalJsonReadResult, obj5.name + " map value", prepareResult);
                let first = prepareResult[0];
                let tmp71 = closure_0;
                let tmp72 = closure_1;
                if (obj5.K == closure_0(closure_1[4]).ScalarType.BOOL) {
                  let tmp73 = first;
                  let tmp74 = "true" == first;
                  let tmp75 = tmp74;
                  if (!tmp74) {
                    let tmp76 = first;
                    let tmp77 = "false" != first;
                    let tmp78 = tmp77;
                    if (tmp77) {
                      tmp78 = first;
                    }
                    tmp75 = tmp78;
                  }
                  first = tmp75;
                }
                let tmp79 = prepareResult;
                let tmp80 = first;
                let tmp81 = tmp98;
                let tmp82 = closure_0;
                let tmp83 = closure_1;
                let tmp84 = self;
                let tmp85 = first;
                let str3 = self.scalar(first, obj5.K, closure_0(closure_1[4]).LongType.STRING, obj5.name);
                let str = str3.toString();
                let tmp87 = str;
                let tmp88 = internalJsonReadResult;
                prepareResult[str] = internalJsonReadResult;
              }
            }
          } else {
            let tmp99 = tmp98;
            if (obj5.repeat) {
              let tmp40 = tmp97;
              if (null === tmp97) {
                // continue
              } else {
                let _Array = Array;
                prepareResult = tmp97;
                prepareResult = tmp98;
                prepareResult = self.assert(Array.isArray(tmp97), obj5.name, tmp97);
                prepareResult = tmp12;
                prepareResult = localName;
                let arr2 = tmp12[localName];
                prepareResult = tmp97;
                for (const item10123 of tmp97) {
                  prepareResult = item10123;
                  prepareResult = tmp98;
                  prepareResult = self.assert(null !== item10123, obj5.name, null);
                  let internalJsonReadResult1;
                  let kind2 = obj5.kind;
                  if ("message" === kind2) {
                    let tmp47 = tmp98;
                    let TResult1 = obj5.T();
                    let tmp48 = item10123;
                    let tmp49 = arg2;
                    internalJsonReadResult1 = TResult1.internalJsonRead(prepareResult, arg2);
                  } else if ("enum" === kind2) {
                    let tmp41 = tmp98;
                    let tmp42 = item10123;
                    let tmp43 = arg2;
                    let tmp44 = self;
                    let enumResult1 = self.enum(obj5.T(), prepareResult, obj5.name, arg2.ignoreUnknownFields);
                    internalJsonReadResult1 = enumResult1;
                    continue;
                  } else if ("scalar" === kind2) {
                    prepareResult = item10123;
                    prepareResult = tmp98;
                    prepareResult = self;
                    internalJsonReadResult1 = self.scalar(prepareResult, obj5.T, obj5.L, obj5.name);
                  }
                  let tmp50 = internalJsonReadResult1;
                  let tmp51 = tmp98;
                  let tmp52 = tmp97;
                  let assertResult1 = self.assert(undefined !== internalJsonReadResult1, obj5.name, tmp97);
                  let tmp54 = arr2;
                  arr = arr2.push(internalJsonReadResult1);
                }
              }
            } else {
              let tmp21 = tmp98;
              let kind = obj5.kind;
              if ("message" === kind) {
                let tmp31 = tmp97;
                if (null === tmp97) {
                  let tmp32 = tmp98;
                  if ("google.protobuf.Value" != obj5.T().typeName) {
                    let tmp38 = tmp98;
                    let assertResult2 = self.assert(undefined === obj5.oneof, `${obj5.name} (oneof member)`, null);
                    // continue
                  }
                }
                let tmp33 = tmp12;
                let tmp34 = localName;
                let tmp35 = tmp98;
                let TResult2 = obj5.T();
                let tmp36 = tmp97;
                let tmp37 = ignoreUnknownFields;
                tmp12[localName] = TResult2.internalJsonRead(tmp97, ignoreUnknownFields, tmp12[localName]);
              } else if ("enum" === kind) {
                let tmp22 = tmp98;
                let tmp23 = tmp97;
                let tmp24 = ignoreUnknownFields;
                let tmp25 = self;
                let enumResult2 = self.enum(obj5.T(), tmp97, obj5.name, ignoreUnknownFields.ignoreUnknownFields);
                if (false === enumResult2) {
                  // continue
                } else {
                  let tmp28 = tmp12;
                  let tmp29 = localName;
                  let tmp30 = enumResult2;
                  tmp12[localName] = tmp27;
                }
              } else if ("scalar" === kind) {
                prepareResult = tmp12;
                prepareResult = localName;
                prepareResult = tmp97;
                prepareResult = tmp98;
                prepareResult = self;
                tmp12[localName] = self.scalar(tmp97, obj5.T, obj5.L, obj5.name);
              }
            }
          }
          continue;
        } else {
          let tmp5 = ignoreUnknownFields;
          if (!ignoreUnknownFields.ignoreUnknownFields) {
            let _Error = Error;
            let tmp6 = tmp95;
            let _HermesInternal = HermesInternal;
            str = "Found unknown field while reading ";
            let str2 = " from JSON format. JSON key: ";
            let tmp7 = new.target;
            let tmp8 = new.target;
            let error1 = new Error("Found unknown field while reading " + self.info.typeName + " from JSON format. JSON key: " + tmp96);
            let tmp10 = error1;
            throw error1;
          }
        }
        // continue
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "enum",
    value: function _enum(arg0, str) {
      const self = this;
      if ("google.protobuf.NullValue" == arg0[0]) {
        const _HermesInternal = HermesInternal;
        ReflectionJsonReader(closure_1[5]).assert(null === str, "Unable to parse field " + self.info.typeName + "#" + arg2 + ", enum " + arg0[0] + " only accepts null.");
        const obj = ReflectionJsonReader(closure_1[5]);
      }
      if (null === str) {
        return 0;
      } else if ("number" === typeof str) {
        const _Number = Number;
        const _HermesInternal4 = HermesInternal;
        const obj4 = ReflectionJsonReader(closure_1[5]);
        obj4.assert(Number.isInteger(str), "Unable to parse field " + self.info.typeName + "#" + arg2 + ", enum can only be integral number, got " + str + ".");
        return str;
      } else if ("string" === tmp31) {
        let substr = str;
        if (tmp13) {
          substr = str.substring(arg0[2].length);
        }
        let tmp16 = undefined !== tmp15;
        if (!tmp16) {
          tmp16 = !arg3;
        }
        if (tmp16) {
          const _HermesInternal3 = HermesInternal;
          ReflectionJsonReader(closure_1[5]).assert("number" === typeof tmp15, "Unable to parse field " + self.info.typeName + "#" + arg2 + ", enum " + arg0[0] + " has no value for \"" + str + "\".");
          tmp16 = tmp15;
          const obj3 = ReflectionJsonReader(closure_1[5]);
        }
        return tmp16;
      } else {
        const _HermesInternal2 = HermesInternal;
        ReflectionJsonReader(closure_1[5]).assert(false, "Unable to parse field " + self.info.typeName + "#" + arg2 + ", cannot parse enum value from " + tmp31 + "\".");
      }
    }
  };
  items[4] = {
    key: "scalar",
    value: function scalar(NumberResult, arg1, STRING) {
      const self = this;
      if (ReflectionJsonReader(closure_1[4]).ScalarType.DOUBLE !== arg1) {
        if (ReflectionJsonReader(closure_1[4]).ScalarType.FLOAT !== arg1) {
          if (ReflectionJsonReader(closure_1[4]).ScalarType.INT32 !== arg1) {
            if (ReflectionJsonReader(closure_1[4]).ScalarType.FIXED32 !== arg1) {
              if (ReflectionJsonReader(closure_1[4]).ScalarType.SFIXED32 !== arg1) {
                if (ReflectionJsonReader(closure_1[4]).ScalarType.SINT32 !== arg1) {
                  if (ReflectionJsonReader(closure_1[4]).ScalarType.UINT32 !== arg1) {
                    if (ReflectionJsonReader(closure_1[4]).ScalarType.INT64 !== arg1) {
                      if (ReflectionJsonReader(closure_1[4]).ScalarType.SFIXED64 !== arg1) {
                        if (ReflectionJsonReader(closure_1[4]).ScalarType.SINT64 !== arg1) {
                          if (ReflectionJsonReader(closure_1[4]).ScalarType.FIXED64 !== arg1) {
                            NumberResult = closure_1;
                            if (ReflectionJsonReader(closure_1[4]).ScalarType.UINT64 !== arg1) {
                              NumberResult = ReflectionJsonReader;
                              NumberResult = closure_1;
                              if (ReflectionJsonReader(closure_1[4]).ScalarType.BOOL === arg1) {
                                if (null === NumberResult) {
                                  return false;
                                } else if ("boolean" === typeof NumberResult) {
                                  return NumberResult;
                                }
                              } else {
                                NumberResult = ReflectionJsonReader;
                                NumberResult = closure_1;
                                if (ReflectionJsonReader(closure_1[4]).ScalarType.STRING === arg1) {
                                  if (null === NumberResult) {
                                    return "";
                                  } else if ("string" !== typeof NumberResult) {
                                    let str = "extra whitespace";
                                  } else {
                                    const _encodeURIComponent = encodeURIComponent;
                                    encodeURIComponent(NumberResult);
                                    return NumberResult;
                                  }
                                } else {
                                  NumberResult = ReflectionJsonReader;
                                  NumberResult = closure_1;
                                  if (ReflectionJsonReader(closure_1[4]).ScalarType.BYTES === arg1) {
                                    NumberResult = null;
                                    if (null !== NumberResult) {
                                      if ("" !== NumberResult) {
                                        if ("string" === typeof NumberResult) {
                                          NumberResult = ReflectionJsonReader;
                                          NumberResult = closure_1;
                                          return ReflectionJsonReader(closure_1[8]).base64decode(NumberResult);
                                        }
                                      }
                                    }
                                    const _Uint8Array = Uint8Array;
                                    const uint8Array = new Uint8Array(0);
                                    return uint8Array;
                                  }
                                }
                              }
                            }
                          }
                          if (null === NumberResult) {
                            return ReflectionJsonReader(closure_1[6]).reflectionLongConvert(ReflectionJsonReader(closure_1[7]).PbULong.ZERO, STRING);
                          } else {
                            const PbULong = ReflectionJsonReader(closure_1[7]).PbULong;
                            return ReflectionJsonReader(closure_1[6]).reflectionLongConvert(PbULong.from(NumberResult), STRING);
                          }
                        }
                      }
                    }
                    if (null === NumberResult) {
                      return ReflectionJsonReader(closure_1[6]).reflectionLongConvert(ReflectionJsonReader(closure_1[7]).PbLong.ZERO, STRING);
                    } else {
                      const PbLong = ReflectionJsonReader(closure_1[7]).PbLong;
                      return ReflectionJsonReader(closure_1[6]).reflectionLongConvert(PbLong.from(NumberResult), STRING);
                    }
                  }
                }
              }
            }
          }
          if (null === NumberResult) {
            return 0;
          } else {
            if ("number" !== typeof NumberResult) {
              if ("" === NumberResult) {
                str = "empty string";
              } else if ("string" === typeof NumberResult) {
                if (NumberResult.trim().length !== NumberResult.length) {
                  str = "extra whitespace";
                } else {
                  const _Number = Number;
                  NumberResult = Number(NumberResult);
                }
              }
            }
            if (undefined !== NumberResult) {
              NumberResult = arg1;
              NumberResult = ReflectionJsonReader;
              NumberResult = closure_1;
              if (arg1 == ReflectionJsonReader(closure_1[4]).ScalarType.UINT32) {
                ReflectionJsonReader(closure_1[5]).assertUInt32(NumberResult);
                const obj6 = ReflectionJsonReader(closure_1[5]);
              } else {
                ReflectionJsonReader(closure_1[5]).assertInt32(NumberResult);
                const obj5 = ReflectionJsonReader(closure_1[5]);
              }
              return NumberResult;
            }
          }
        }
        while (true) {
          let tmp74 = arg3;
          let tmp75 = str;
          let str14 = "";
          if (!str) {
            break;
          } else {
            let tmp76 = str;
            let str15 = " - ";
            str14 = ` - ${str}`;
            // break
          }
          let tmp77 = NumberResult;
          let flag2 = false;
          let assertResult = self.assert(false, arg3 + str14, NumberResult);
        }
      }
      if (null === NumberResult) {
        return 0;
      } else if ("NaN" === NumberResult) {
        const _Number7 = Number;
        return Number.NaN;
      } else if ("Infinity" === NumberResult) {
        const _Number6 = Number;
        return Number.POSITIVE_INFINITY;
      } else if ("-Infinity" === NumberResult) {
        const _Number5 = Number;
        return Number.NEGATIVE_INFINITY;
      } else if ("" === NumberResult) {
        str = "empty string";
      } else {
        if ("string" === typeof NumberResult) {
          if (NumberResult.trim().length !== NumberResult.length) {
            str = "extra whitespace";
          }
        }
        if ("string" === typeof NumberResult) {
          const _Number2 = Number;
          const NumberResult1 = Number(NumberResult);
          const _Number3 = Number;
          if (Number.isNaN(NumberResult1)) {
            str = "not a number";
          } else {
            const _Number4 = Number;
            if (Number.isFinite(tmp62)) {
              if (arg1 == ReflectionJsonReader(closure_1[4]).ScalarType.FLOAT) {
                ReflectionJsonReader(closure_1[5]).assertFloat32(tmp62);
                const obj7 = ReflectionJsonReader(closure_1[5]);
              }
              return NumberResult1;
            } else {
              str = "too large or small";
            }
          }
        }
      }
    }
  };
  return callback(ReflectionJsonReader, items);
}();
