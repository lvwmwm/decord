// Module ID: 1303
// Function ID: 15208
// Name: ReflectionJsonWriter
// Dependencies: []

// Module 1303 (ReflectionJsonWriter)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);

export const ReflectionJsonWriter = () => {
  class ReflectionJsonWriter {
    constructor(arg0) {
      tmp = closure_3(this, ReflectionJsonWriter);
      fields = arg0.fields;
      if (null === fields) {
        fields = [];
      }
      this.fields = fields;
      return;
    }
  }
  const require = ReflectionJsonWriter;
  let obj = {
    key: "write",
    value: function write(arg0, useProtoFieldName) {
      const self = this;
      let obj = {};
      const iter = this.fields[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp26 = nextResult;
        if (nextResult.oneof) {
          let tmp8 = arg0;
          let tmp9 = nextResult;
          let tmp10 = arg0[tmp26.oneof];
          if (tmp10.oneofKind === tmp26.localName) {
            let tmp30 = nextResult;
            if ("scalar" != tmp26.kind) {
              let tmp12 = nextResult;
              if ("enum" != tmp26.kind) {
                let merged = useProtoFieldName;
              }
              let tmp15 = nextResult;
              let tmp16 = tmp10;
              let fieldResult = self.field(tmp26, tmp11[tmp26.localName], merged);
              let tmp18 = fieldResult;
              let tmp19 = ReflectionJsonWriter;
              let tmp20 = closure_1;
              let obj3 = ReflectionJsonWriter(closure_1[3]);
              let assertResult = obj3.assert(undefined !== fieldResult);
              let tmp22 = obj;
              let tmp23 = useProtoFieldName;
              let tmp24 = nextResult;
              let tmp25 = useProtoFieldName.useProtoFieldName ? tmp24.name : tmp24.jsonName;
              tmp24 = fieldResult;
              obj[tmp25] = fieldResult;
            }
            let _Object = Object;
            let _Object2 = Object;
            let tmp14 = useProtoFieldName;
            obj = { emitDefaultValues: true };
            merged = Object.assign(Object.assign({}, useProtoFieldName), obj);
          }
        } else {
          let tmp2 = nextResult;
          let tmp3 = arg0;
          let tmp4 = useProtoFieldName;
          let fieldResult1 = self.field(tmp26, arg0[tmp26.localName], useProtoFieldName);
          if (undefined !== fieldResult1) {
            let tmp27 = obj;
            let tmp28 = useProtoFieldName;
            let tmp29 = nextResult;
            let tmp7 = fieldResult1;
            obj[useProtoFieldName.useProtoFieldName ? tmp26.name : tmp26.jsonName] = tmp6;
          }
        }
        // continue
      }
      return obj;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "field",
    value: function field(kind, arg1, enumAsInteger) {
      let length;
      let length2;
      let str14;
      let tmp;
      const self = this;
      let obj = kind;
      if ("map" == kind.kind) {
        let tmp51 = "object" === typeof arg1;
        if (tmp51) {
          tmp51 = null !== arg1;
        }
        ReflectionJsonWriter(closure_1[3]).assert(tmp51);
        obj = {};
        const kind3 = obj.V.kind;
        if ("scalar" === kind3) {
          const _Object2 = Object;
          const entries = Object.entries(arg1);
          const tmp82 = entries[Symbol.iterator]();
          while (tmp82 !== undefined) {
            let tmp85 = callback;
            let tmp86 = callback(tmp83, 2);
            let str8 = tmp86[0];
            let tmp87 = kind;
            let tmp88 = self;
            let flag5 = false;
            let flag6 = true;
            let scalarResult = self.scalar(obj.V.T, tmp86[1], obj.name, false, true);
            let tmp90 = ReflectionJsonWriter;
            let tmp91 = closure_1;
            let obj10 = ReflectionJsonWriter(closure_1[3]);
            let assertResult1 = obj10.assert(undefined !== scalarResult);
            let tmp93 = obj;
            obj[str8.toString()] = scalarResult;
            // continue
          }
        } else if ("message" === kind3) {
          const V = obj.V;
          const TResult = V.T();
          const _Object = Object;
          const entries1 = Object.entries(arg1);
          const tmp76 = entries1[Symbol.iterator]();
          while (tmp76 !== undefined) {
            let messageResult = callback;
            messageResult = callback(tmp77, 2);
            let str15 = messageResult[0];
            messageResult = TResult;
            messageResult = kind;
            messageResult = enumAsInteger;
            messageResult = self;
            messageResult = self.message(TResult, messageResult[1], obj.name, enumAsInteger);
            messageResult = ReflectionJsonWriter;
            messageResult = closure_1;
            let obj12 = ReflectionJsonWriter(closure_1[3]);
            messageResult = obj12.assert(undefined !== messageResult);
            messageResult = obj;
            obj[str15.toString()] = messageResult;
            // continue
          }
        } else if ("enum" === kind3) {
          messageResult = kind;
          const V2 = obj.V;
          messageResult = V2.T();
          messageResult = globalThis;
          const _Object4 = Object;
          messageResult = Object.entries(arg1);
          messageResult = messageResult[Symbol.iterator]();
          while (messageResult !== undefined) {
            messageResult = callback;
            messageResult = callback(tmp55, 2);
            [str14, tmp] = messageResult;
            messageResult = ReflectionJsonWriter;
            messageResult = closure_1;
            let obj11 = ReflectionJsonWriter(closure_1[3]);
            messageResult = undefined === messageResult;
            let tmp58 = messageResult;
            if (!messageResult) {
              let tmp57 = messageResult;
              tmp58 = "number" === typeof messageResult;
            }
            let assertResult2 = obj11.assert(tmp58);
            let tmp60 = messageResult;
            let tmp61 = messageResult;
            let tmp62 = kind;
            let tmp63 = enumAsInteger;
            let tmp64 = self;
            let flag3 = false;
            let flag4 = true;
            let enumResult = self.enum(messageResult, messageResult, obj.name, false, true, enumAsInteger.enumAsInteger);
            let tmp66 = ReflectionJsonWriter;
            let tmp67 = closure_1;
            let obj9 = ReflectionJsonWriter(closure_1[3]);
            let assertResult3 = obj9.assert(undefined !== enumResult);
            let tmp69 = obj;
            let tmp70 = str14;
            obj[str14.toString()] = enumResult;
            // continue
          }
        }
        let emitDefaultValues2 = enumAsInteger.emitDefaultValues;
        if (!emitDefaultValues2) {
          const _Object3 = Object;
          emitDefaultValues2 = Object.keys(obj).length > 0;
        }
        if (emitDefaultValues2) {
          let scalarResult2 = obj;
        }
        const obj7 = ReflectionJsonWriter(closure_1[3]);
      } else if (obj.repeat) {
        const _Array = Array;
        ReflectionJsonWriter(closure_1[3]).assert(Array.isArray(arg1));
        const items = [];
        const kind2 = obj.kind;
        if ("scalar" === kind2) {
          let num4 = 0;
          if (0 < arg1.length) {
            do {
              let tmp40 = kind;
              let tmp41 = self;
              let flag2 = true;
              let scalarResult1 = self.scalar(obj.T, arg1[num4], obj.name, obj.opt, true);
              let tmp43 = closure_0;
              let tmp44 = closure_1;
              let obj6 = closure_0(closure_1[3]);
              let assertResult5 = obj6.assert(undefined !== scalarResult1);
              let arr = items.push(scalarResult1);
              num4 = num4 + 1;
              length2 = arg1.length;
            } while (num4 < length2);
          }
        } else if ("enum" === kind2) {
          const TResult1 = obj.T();
          let num3 = 0;
          if (0 < arg1.length) {
            do {
              let tmp27 = closure_0;
              let tmp28 = closure_1;
              let obj4 = closure_0(closure_1[3]);
              let tmp29 = undefined === arg1[num3];
              if (!tmp29) {
                tmp29 = "number" === typeof arg1[num3];
              }
              let assertResult6 = obj4.assert(tmp29);
              let tmp31 = kind;
              let tmp32 = enumAsInteger;
              let tmp33 = self;
              let tmp34 = TResult1;
              let flag = true;
              let enumResult1 = self.enum(TResult1, arg1[num3], obj.name, obj.opt, true, enumAsInteger.enumAsInteger);
              let tmp36 = closure_0;
              let tmp37 = closure_1;
              let obj5 = closure_0(closure_1[3]);
              let assertResult7 = obj5.assert(undefined !== enumResult1);
              arr = items.push(enumResult1);
              num3 = num3 + 1;
            } while (num3 < arg1.length);
          }
        } else if ("message" === kind2) {
          messageResult = kind;
          messageResult = obj.T();
          let num2 = 0;
          if (0 < arg1.length) {
            do {
              let tmp16 = kind;
              let tmp17 = enumAsInteger;
              let tmp18 = self;
              let tmp19 = messageResult;
              let messageResult1 = self.message(messageResult, arg1[num2], obj.name, enumAsInteger);
              let tmp21 = closure_0;
              let tmp22 = closure_1;
              let obj3 = closure_0(closure_1[3]);
              let assertResult8 = obj3.assert(undefined !== messageResult1);
              let arr1 = items.push(messageResult1);
              num2 = num2 + 1;
              length = arg1.length;
            } while (num2 < length);
          }
        }
        let emitDefaultValues = enumAsInteger.emitDefaultValues;
        if (!emitDefaultValues) {
          emitDefaultValues = items.length > 0;
        }
        if (!emitDefaultValues) {
          emitDefaultValues = enumAsInteger.emitDefaultValues;
        }
        if (emitDefaultValues) {
          scalarResult2 = items;
        }
        const obj2 = ReflectionJsonWriter(closure_1[3]);
      } else {
        messageResult = kind;
        kind = obj.kind;
        if ("scalar" === kind) {
          scalarResult2 = self.scalar(obj.T, arg1, obj.name, obj.opt, enumAsInteger.emitDefaultValues);
        } else if ("enum" === kind) {
          scalarResult2 = self.enum(obj.T(), arg1, obj.name, obj.opt, enumAsInteger.emitDefaultValues, enumAsInteger.enumAsInteger);
        } else if ("message" === kind) {
          messageResult = arg1;
          scalarResult2 = self.message(obj.T(), arg1, obj.name, enumAsInteger);
        }
      }
      return scalarResult2;
    }
  };
  items[1] = obj;
  obj = {
    key: "enum",
    value: function _enum(arg0, arg1, arg2, arg3, arg4, arg5) {
      if ("google.protobuf.NullValue" == arg0[0]) {
        return null;
      } else if (undefined !== arg1) {
        ReflectionJsonWriter(closure_1[3]).assert("number" === typeof arg1);
        const obj2 = ReflectionJsonWriter(closure_1[3]);
        const _Number = Number;
        ReflectionJsonWriter(closure_1[3]).assert(Number.isInteger(arg1));
        let tmp11 = arg1;
        if (!arg5) {
          let num3 = 1;
          tmp11 = arg1;
          if (obj4.hasOwnProperty(arg1)) {
            let num4 = 2;
            if (arg0[2]) {
              num4 = arg0[num4];
              num3 = arg0[num3][arg1];
              let sum = num4 + num3;
            } else {
              sum = arg0[num3][arg1];
            }
          }
          const obj4 = arg0[1];
        }
        return tmp11;
      } else {
        ReflectionJsonWriter(closure_1[3]).assert(arg3);
        const obj = ReflectionJsonWriter(closure_1[3]);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "message",
    value: function message(internalJsonWrite, arg1, arg2, emitDefaultValues) {
      if (undefined === arg1) {
        let tmp2;
        if (emitDefaultValues.emitDefaultValues) {
          tmp2 = null;
        }
        let internalJsonWriteResult = tmp2;
      } else {
        internalJsonWriteResult = internalJsonWrite.internalJsonWrite(arg1, emitDefaultValues);
      }
      return internalJsonWriteResult;
    }
  };
  items[4] = {
    key: "scalar",
    value: function scalar(arg0, NumberResult) {
      let tmp = NumberResult;
      let tmp2 = arg4;
      if (undefined !== NumberResult) {
        if (!tmp2) {
          tmp2 = arg3;
        }
        if (ReflectionJsonWriter(closure_1[4]).ScalarType.INT32 !== arg0) {
          if (ReflectionJsonWriter(closure_1[4]).ScalarType.SFIXED32 !== arg0) {
            if (ReflectionJsonWriter(closure_1[4]).ScalarType.SINT32 !== arg0) {
              if (ReflectionJsonWriter(closure_1[4]).ScalarType.FIXED32 !== arg0) {
                if (ReflectionJsonWriter(closure_1[4]).ScalarType.UINT32 !== arg0) {
                  if (ReflectionJsonWriter(closure_1[4]).ScalarType.FLOAT === arg0) {
                    ReflectionJsonWriter(closure_1[3]).assertFloat32(tmp);
                    const obj8 = ReflectionJsonWriter(closure_1[3]);
                  } else if (ReflectionJsonWriter(closure_1[4]).ScalarType.DOUBLE !== arg0) {
                    if (ReflectionJsonWriter(closure_1[4]).ScalarType.STRING === arg0) {
                      if ("" === tmp) {
                        let str13;
                        if (tmp2) {
                          str13 = "";
                        }
                        let tmp36 = str13;
                      } else {
                        ReflectionJsonWriter(closure_1[3]).assert("string" === typeof tmp);
                        tmp36 = tmp;
                        const obj7 = ReflectionJsonWriter(closure_1[3]);
                      }
                      return tmp36;
                    } else if (ReflectionJsonWriter(closure_1[4]).ScalarType.BOOL === arg0) {
                      if (false === tmp) {
                        let tmp31 = !tmp2 && undefined;
                        const tmp32 = !tmp2 && undefined;
                      } else {
                        ReflectionJsonWriter(closure_1[3]).assert("boolean" === typeof tmp);
                        tmp31 = tmp;
                        const obj6 = ReflectionJsonWriter(closure_1[3]);
                      }
                      return tmp31;
                    } else {
                      if (ReflectionJsonWriter(closure_1[4]).ScalarType.UINT64 !== arg0) {
                        if (ReflectionJsonWriter(closure_1[4]).ScalarType.FIXED64 !== arg0) {
                          if (ReflectionJsonWriter(closure_1[4]).ScalarType.INT64 !== arg0) {
                            if (ReflectionJsonWriter(closure_1[4]).ScalarType.SFIXED64 !== arg0) {
                              if (ReflectionJsonWriter(closure_1[4]).ScalarType.SINT64 !== arg0) {
                                if (ReflectionJsonWriter(closure_1[4]).ScalarType.BYTES === arg0) {
                                  const _Uint8Array = Uint8Array;
                                  ReflectionJsonWriter(closure_1[3]).assert(tmp instanceof Uint8Array);
                                  if (tmp.byteLength) {
                                    let str = ReflectionJsonWriter(closure_1[6]).base64encode(tmp);
                                    const obj3 = ReflectionJsonWriter(closure_1[6]);
                                  } else if (tmp2) {
                                    str = "";
                                  }
                                  return str;
                                }
                              }
                            }
                          }
                          let tmp17 = "number" === tmp16;
                          if (!tmp17) {
                            tmp17 = "string" === tmp16;
                          }
                          if (!tmp17) {
                            tmp17 = "bigint" === tmp16;
                          }
                          ReflectionJsonWriter(closure_1[3]).assert(tmp17);
                          const PbLong = ReflectionJsonWriter(closure_1[5]).PbLong;
                          const str5 = PbLong.from(tmp);
                          return str5.toString();
                        }
                      }
                      let tmp24 = "number" === tmp23;
                      if (!tmp24) {
                        tmp24 = "string" === tmp23;
                      }
                      if (!tmp24) {
                        tmp24 = "bigint" === tmp23;
                      }
                      ReflectionJsonWriter(closure_1[3]).assert(tmp24);
                      const PbULong = ReflectionJsonWriter(closure_1[5]).PbULong;
                      const str9 = PbULong.from(tmp);
                      return str9.toString();
                    }
                  }
                  if (0 === tmp) {
                    let num13;
                    if (tmp2) {
                      num13 = 0;
                    }
                    let str16 = num13;
                  } else {
                    ReflectionJsonWriter(closure_1[3]).assert("number" === typeof tmp);
                    const _Number3 = Number;
                    str16 = "NaN";
                    if (!Number.isNaN(tmp)) {
                      const _Number = Number;
                      let str14 = "Infinity";
                      if (tmp !== Number.POSITIVE_INFINITY) {
                        const _Number2 = Number;
                        let str15 = "-Infinity";
                        if (tmp !== Number.NEGATIVE_INFINITY) {
                          str15 = tmp;
                        }
                        str14 = str15;
                      }
                      str16 = str14;
                    }
                    const obj11 = ReflectionJsonWriter(closure_1[3]);
                  }
                  return str16;
                }
              }
              if (0 === tmp) {
                let num16;
                if (tmp2) {
                  num16 = 0;
                }
                let tmp43 = num16;
              } else {
                ReflectionJsonWriter(closure_1[3]).assertUInt32(tmp);
                tmp43 = tmp;
                const obj9 = ReflectionJsonWriter(closure_1[3]);
              }
              return tmp43;
            }
          }
        }
        if (0 === tmp) {
          let num19;
          if (tmp2) {
            num19 = 0;
          }
          tmp = num19;
        } else {
          ReflectionJsonWriter(closure_1[3]).assertInt32(tmp);
          const obj10 = ReflectionJsonWriter(closure_1[3]);
        }
        return tmp;
      } else {
        ReflectionJsonWriter(closure_1[3]).assert(arg3);
        const obj = ReflectionJsonWriter(closure_1[3]);
      }
    }
  };
  return callback(ReflectionJsonWriter, items);
}();
