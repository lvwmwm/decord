// Module ID: 1304
// Function ID: 15222
// Name: ReflectionBinaryReader
// Dependencies: [57, 6, 7, 1288, 1297, 1305, 1302]

// Module 1304 (ReflectionBinaryReader)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "reflectionLongConvert";
import _defineProperties from "_defineProperties";


export const ReflectionBinaryReader = (() => {
  class ReflectionBinaryReader {
    constructor(arg0) {
      tmp = outer1_3(this, ReflectionBinaryReader);
      this.info = arg0;
      return;
    }
  }
  let obj = {
    key: "prepare",
    value: function prepare() {
      const self = this;
      if (!this.fieldNoToField) {
        let fields = self.info.fields;
        if (null === fields) {
          fields = [];
        }
        const _Map = Map;
        const map = new Map(fields.map((no) => {
          const items = [no.no, no];
          return items;
        }));
        self.fieldNoToField = map;
      }
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "read",
    value: function read(len, arg1, readUnknownField) {
      let localName;
      let oneof;
      let repeat;
      let tmp13;
      let tmp14;
      const self = this;
      this.prepare();
      if (undefined === arg3) {
        len = len.len;
      } else {
        len = len.pos + arg3;
      }
      if (len.pos < len) {
        while (true) {
          let tmp11 = outer1_2;
          let tmp12 = outer1_2(len.tag(), 2);
          [tmp13, tmp14] = tmp12;
          let fieldNoToField = self.fieldNoToField;
          let value = fieldNoToField.get(tmp13);
          if (value) {
            ({ repeat, localName, oneof } = value);
            let tmp38 = arg1;
            if (oneof) {
              let tmp39 = arg1[value.oneof];
              oneof = tmp39.oneofKind !== localName;
              tmp38 = tmp39;
            }
            if (oneof) {
              let obj = { oneofKind: localName };
              arg1[value.oneof] = obj;
              tmp38 = obj;
            }
            let kind = value.kind;
            if ("scalar" !== kind) {
              if ("enum" !== kind) {
                if ("message" === kind) {
                  if (repeat) {
                    let arr = tmp38[localName];
                    let TResult = value.T();
                    arr = arr.push(TResult.internalBinaryRead(len, len.uint32(), readUnknownField));
                    let tmp22 = tmp38;
                    let tmp23 = repeat;
                    let tmp24 = localName;
                    let tmp25 = tmp5;
                    let tmp26 = tmp6;
                    let tmp27 = tmp7;
                    let tmp28 = tmp8;
                    let tmp29 = tmp9;
                    let tmp30 = tmp10;
                  } else {
                    let TResult1 = value.T();
                    let tmp40 = TResult1;
                    let tmp41 = len;
                    let tmp42 = readUnknownField;
                    tmp38[localName] = TResult1.internalBinaryRead(len, len.uint32(), readUnknownField, tmp38[localName]);
                    tmp22 = tmp38;
                    tmp23 = repeat;
                    tmp24 = localName;
                    tmp25 = tmp5;
                    tmp26 = tmp6;
                    tmp27 = tmp7;
                    tmp28 = tmp8;
                    tmp29 = tmp9;
                    tmp30 = tmp10;
                  }
                } else {
                  tmp22 = tmp38;
                  tmp23 = repeat;
                  tmp24 = localName;
                  tmp25 = tmp5;
                  tmp26 = tmp6;
                  tmp27 = tmp7;
                  tmp28 = tmp8;
                  tmp29 = tmp9;
                  tmp30 = tmp10;
                  if ("map" === kind) {
                    let tmp56 = outer1_2;
                    let tmp57 = outer1_2(self.mapEntry(value, len, readUnknownField), 2);
                    tmp38[localName][tmp57[0]] = tmp57[1];
                    tmp22 = tmp38;
                    tmp23 = repeat;
                    tmp24 = localName;
                    tmp25 = tmp5;
                    tmp26 = tmp6;
                    tmp27 = tmp7;
                    tmp28 = tmp8;
                    tmp29 = tmp9;
                    tmp30 = tmp10;
                  }
                }
              }
            }
            if ("enum" == value.kind) {
              let tmp44 = ReflectionBinaryReader;
              let tmp45 = outer1_1;
              let T = ReflectionBinaryReader(outer1_1[4]).ScalarType.INT32;
            } else {
              T = value.T;
            }
            if ("scalar" == value.kind) {
              let L = value.L;
            }
            if (repeat) {
              let arr1 = tmp38[localName];
              let tmp46 = ReflectionBinaryReader;
              let tmp47 = outer1_1;
              if (tmp14 == ReflectionBinaryReader(outer1_1[3]).WireType.LengthDelimited) {
                let tmp48 = ReflectionBinaryReader;
                let tmp49 = outer1_1;
                if (T != ReflectionBinaryReader(outer1_1[4]).ScalarType.STRING) {
                  let tmp50 = ReflectionBinaryReader;
                  let tmp51 = outer1_1;
                  if (T != ReflectionBinaryReader(outer1_1[4]).ScalarType.BYTES) {
                    let sum = len.uint32() + len.pos;
                    tmp22 = tmp38;
                    tmp23 = repeat;
                    tmp24 = localName;
                    tmp25 = T;
                    tmp26 = L;
                    tmp27 = arr1;
                    tmp29 = tmp9;
                    tmp30 = tmp10;
                    tmp28 = sum;
                    if (len.pos < sum) {
                      do {
                        arr = arr1.push(self.scalar(len, T, L));
                        tmp22 = tmp38;
                        tmp23 = repeat;
                        tmp24 = localName;
                        tmp25 = T;
                        tmp26 = L;
                        tmp27 = arr1;
                        tmp28 = sum;
                        tmp29 = tmp9;
                        tmp30 = tmp10;
                        pos = len.pos;
                      } while (pos < sum);
                    }
                  }
                }
              }
              arr1 = arr1.push(self.scalar(len, T, L));
              tmp22 = tmp38;
              tmp23 = repeat;
              tmp24 = localName;
              tmp25 = T;
              tmp26 = L;
              tmp27 = arr1;
              tmp28 = tmp8;
              tmp29 = tmp9;
              tmp30 = tmp10;
            } else {
              tmp38[localName] = self.scalar(len, T, L);
              tmp22 = tmp38;
              tmp23 = repeat;
              tmp24 = localName;
              tmp25 = T;
              tmp26 = L;
              tmp27 = tmp7;
              tmp28 = tmp8;
              tmp29 = tmp9;
              tmp30 = tmp10;
            }
          } else {
            readUnknownField = readUnknownField.readUnknownField;
            if ("throw" == readUnknownField) {
              break;
            } else {
              let skipResult = len.skip(tmp14);
              tmp22 = tmp2;
              tmp23 = tmp3;
              tmp24 = tmp4;
              tmp25 = tmp5;
              tmp26 = tmp6;
              tmp27 = tmp7;
              tmp28 = tmp8;
              tmp29 = readUnknownField;
              tmp30 = skipResult;
              if (false !== readUnknownField) {
                let onRead = readUnknownField;
                if (true === readUnknownField) {
                  let tmp15 = ReflectionBinaryReader;
                  let tmp16 = outer1_1;
                  onRead = ReflectionBinaryReader(outer1_1[3]).UnknownFieldHandler.onRead;
                }
                let tmp17 = arg1;
                let tmp18 = tmp13;
                let tmp19 = tmp14;
                let tmp20 = skipResult;
                let onReadResult = onRead(self.info.typeName, arg1, tmp13, tmp14, skipResult);
                tmp22 = tmp2;
                tmp23 = tmp3;
                tmp24 = tmp4;
                tmp25 = tmp5;
                tmp26 = tmp6;
                tmp27 = tmp7;
                tmp28 = tmp8;
                tmp29 = readUnknownField;
                tmp30 = skipResult;
              }
            }
          }
          tmp2 = tmp22;
          tmp3 = tmp23;
          tmp4 = tmp24;
          tmp5 = tmp25;
          tmp6 = tmp26;
          tmp7 = tmp27;
          tmp8 = tmp28;
          tmp9 = tmp29;
          tmp10 = tmp30;
        }
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unknown field " + tmp13 + " (wire type " + tmp14 + ") for " + self.info.typeName);
        throw error;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "mapEntry",
    value: function mapEntry(V, pos, binaryReadOptionsResult2) {
      let tmp8;
      let tmp9;
      const self = this;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let tmp5;
      if (pos.pos < sum) {
        [tmp8, tmp9] = outer1_2(pos.tag(), 2);
        while (1 !== tmp8) {
          if (2 === tmp8) {
            let kind = V.V.kind;
            if ("scalar" === kind) {
              let scalarResult = self.scalar(pos, V.V.T, V.V.L);
              let tmp17 = tmp2;
            } else if ("enum" === kind) {
              scalarResult = pos.int32();
              tmp17 = tmp2;
            } else {
              tmp17 = tmp2;
              scalarResult = tmp3;
              if ("message" === kind) {
                let V2 = V.V;
                let TResult = V2.T();
                scalarResult = TResult.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
                tmp17 = tmp2;
              }
            }
            tmp2 = tmp17;
            tmp3 = scalarResult;
            tmp4 = tmp17;
            tmp5 = scalarResult;
          } else {
            let tmp10 = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") in map entry for ";
            let str4 = "#";
            let tmp11 = tmp8;
            let tmp12 = tmp9;
            let tmp13 = new.target;
            let tmp14 = new.target;
            let error = new Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") in map entry for " + self.info.typeName + "#" + V.name);
            let tmp16 = error;
            throw error;
          }
        }
        if (V.K == ReflectionBinaryReader(outer1_1[4]).ScalarType.BOOL) {
          str = pos.bool().toString();
          const str5 = pos.bool();
        } else {
          str = self.scalar(pos, V.K, ReflectionBinaryReader(outer1_1[4]).LongType.STRING);
        }
        const tmp7 = outer1_2(pos.tag(), 2);
      }
      if (undefined === tmp4) {
        const str6 = ReflectionBinaryReader(outer1_1[5]).reflectionScalarDefault(V.K);
        let str1 = str6;
        if (V.K == ReflectionBinaryReader(outer1_1[4]).ScalarType.BOOL) {
          str1 = str6.toString();
        }
        tmp4 = str1;
        const obj = ReflectionBinaryReader(outer1_1[5]);
      }
      let num2 = tmp5;
      if (undefined === tmp5) {
        const kind2 = V.V.kind;
        if ("scalar" === kind2) {
          num2 = ReflectionBinaryReader(outer1_1[5]).reflectionScalarDefault(V.V.T, V.V.L);
          const obj3 = ReflectionBinaryReader(outer1_1[5]);
        } else if ("enum" === kind2) {
          num2 = 0;
        } else {
          num2 = tmp5;
          if ("message" === kind2) {
            V = V.V;
            num2 = V.T().create();
            const TResult1 = V.T();
          }
        }
      }
      const items = [tmp4, num2];
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "scalar",
    value: function scalar(int32, arg1, STRING) {
      if (ReflectionBinaryReader(outer1_1[4]).ScalarType.INT32 === arg1) {
        return int32.int32();
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.STRING === arg1) {
        return int32.string();
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.BOOL === arg1) {
        return int32.bool();
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.DOUBLE === arg1) {
        return int32.double();
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.FLOAT === arg1) {
        return int32.float();
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.INT64 === arg1) {
        return ReflectionBinaryReader(outer1_1[6]).reflectionLongConvert(int32.int64(), STRING);
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.UINT64 === arg1) {
        return ReflectionBinaryReader(outer1_1[6]).reflectionLongConvert(int32.uint64(), STRING);
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.FIXED64 === arg1) {
        return ReflectionBinaryReader(outer1_1[6]).reflectionLongConvert(int32.fixed64(), STRING);
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.FIXED32 === arg1) {
        return int32.fixed32();
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.BYTES === arg1) {
        return int32.bytes();
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.UINT32 === arg1) {
        return int32.uint32();
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.SFIXED32 === arg1) {
        return int32.sfixed32();
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.SFIXED64 === arg1) {
        return ReflectionBinaryReader(outer1_1[6]).reflectionLongConvert(int32.sfixed64(), STRING);
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.SINT32 === arg1) {
        return int32.sint32();
      } else if (ReflectionBinaryReader(outer1_1[4]).ScalarType.SINT64 === arg1) {
        return ReflectionBinaryReader(outer1_1[6]).reflectionLongConvert(int32.sint64(), STRING);
      }
    }
  };
  return _defineProperties(ReflectionBinaryReader, items);
})();
