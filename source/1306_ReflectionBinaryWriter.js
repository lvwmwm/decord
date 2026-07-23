// Module ID: 1306
// Function ID: 15232
// Name: ReflectionBinaryWriter
// Dependencies: [57, 6, 7, 1297, 1293, 1288, 1291]

// Module 1306 (ReflectionBinaryWriter)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_callSuper";
import _defineProperties from "_defineProperties";


export const ReflectionBinaryWriter = (() => {
  class ReflectionBinaryWriter {
    constructor(arg0) {
      tmp = outer1_3(this, ReflectionBinaryWriter);
      this.info = arg0;
      return;
    }
  }
  let obj = {
    key: "prepare",
    value: function prepare() {
      const self = this;
      if (!this.fields) {
        if (self.info.fields) {
          const fields = self.info.fields;
          let combined = fields.concat();
        } else {
          combined = [];
        }
        self.fields = combined.sort((no, no2) => no.no - no2.no);
      }
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "write",
    value: function write(arg0, tag, writeUnknownFields) {
      let localName;
      let repeat;
      const self = this;
      this.prepare();
      const iter = this.fields[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj4 = nextResult;
        ({ repeat, localName } = nextResult);
        let tmp74 = arg0;
        if (nextResult.oneof) {
          let tmp5 = nextResult;
          let tmp6 = arg0[obj4.oneof];
          let tmp8 = localName;
          if (tmp6.oneofKind !== localName) {
            continue;
          } else {
            let tmp75 = tmp6;
            let tmp76 = localName;
            let tmp4 = tmp7[localName];
            let flag = true;
          }
        } else {
          let tmp3 = localName;
          tmp4 = arg0[localName];
          flag = false;
        }
        let tmp9 = nextResult;
        let kind = obj4.kind;
        if ("scalar" !== kind) {
          if ("enum" !== kind) {
            if ("message" === kind) {
              let tmp16 = repeat;
              if (repeat) {
                let tmp23 = ReflectionBinaryWriter;
                let tmp24 = outer1_1;
                let obj = ReflectionBinaryWriter(outer1_1[4]);
                let _Array = Array;
                let tmp25 = tmp4;
                let assertResult = obj.assert(Array.isArray(tmp4));
                let tmp27 = tmp4;
                for (const item10079 of tmp4) {
                  let tmp88 = arg1;
                  let tmp89 = arg2;
                  let tmp90 = nextResult;
                  let tmp91 = self;
                  let tmp92 = item10079;
                  let messageResult = self.message(arg1, arg2, obj4.T(), obj4.no, item10079);
                  continue;
                }
              } else {
                let tmp17 = tag;
                let tmp18 = writeUnknownFields;
                let tmp19 = nextResult;
                let tmp20 = tmp4;
                let tmp21 = self;
                let messageResult1 = self.message(tag, writeUnknownFields, obj4.T(), obj4.no, tmp4);
              }
            } else if ("map" === kind) {
              let tmp77 = ReflectionBinaryWriter;
              let tmp78 = outer1_1;
              let obj5 = ReflectionBinaryWriter(outer1_1[4]);
              let tmp79 = tmp4;
              let tmp80 = "object" === typeof tmp4;
              let tmp11 = tmp80;
              if (tmp80) {
                let tmp10 = tmp4;
                tmp11 = null !== tmp4;
              }
              let assertResult1 = obj5.assert(tmp11);
              let _Object = Object;
              let tmp13 = tmp4;
              let entries = Object.entries(tmp4);
              let tmp15 = entries;
              for (const item10053 of entries) {
                let tmp81 = outer1_2;
                let tmp82 = outer1_2(item10053, 2);
                let tmp83 = arg1;
                let tmp84 = arg2;
                let tmp85 = nextResult;
                let tmp86 = self;
                let mapEntryResult = self.mapEntry(arg1, arg2, obj4, tmp82[0], tmp82[1]);
                continue;
              }
            }
          }
          continue;
        }
        let tmp28 = nextResult;
        if ("enum" == obj4.kind) {
          let tmp30 = ReflectionBinaryWriter;
          let tmp31 = outer1_1;
          let T = ReflectionBinaryWriter(outer1_1[3]).ScalarType.INT32;
        } else {
          let tmp29 = nextResult;
          T = obj4.T;
        }
        let tmp32 = T;
        let tmp33 = repeat;
        if (repeat) {
          let tmp52 = ReflectionBinaryWriter;
          let tmp53 = outer1_1;
          let obj3 = ReflectionBinaryWriter(outer1_1[4]);
          let _Array2 = Array;
          let tmp54 = tmp4;
          let assertResult2 = obj3.assert(Array.isArray(tmp4));
          let tmp56 = repeat;
          if (repeat == ReflectionBinaryWriter(outer1_1[3]).RepeatType.PACKED) {
            let tmp65 = tag;
            let tmp66 = T;
            let tmp67 = nextResult;
            let tmp68 = tmp4;
            let tmp69 = self;
            let packedResult = self.packed(tag, tmp32, obj4.no, tmp4);
          } else {
            let tmp57 = tmp4;
            let tmp58 = tmp4;
            for (const item10136 of tmp4) {
              let tmp59 = arg1;
              let tmp60 = T;
              let tmp61 = nextResult;
              let tmp62 = self;
              let tmp63 = item10136;
              let flag2 = true;
              let scalarResult = self.scalar(arg1, tmp32, obj4.no, item10136, true);
              continue;
            }
          }
        } else {
          let tmp34 = tmp4;
          if (undefined === tmp4) {
            let tmp48 = ReflectionBinaryWriter;
            let tmp49 = outer1_1;
            let obj2 = ReflectionBinaryWriter(outer1_1[4]);
            let tmp50 = nextResult;
            let assertResult3 = obj2.assert(obj4.opt);
          } else {
            let tmp37 = nextResult;
            let no = obj4.no;
            let tmp39 = flag;
            let opt = flag;
            let tmp35 = tag;
            let tmp36 = T;
            let tmp38 = tmp4;
            if (!flag) {
              let tmp40 = nextResult;
              opt = obj4.opt;
            }
            let tmp41 = opt;
            let tmp42 = self;
            let tmp43 = tag;
            let tmp44 = tmp32;
            let tmp45 = no;
            let tmp46 = tmp4;
            let scalarResult1 = self.scalar(tmp35, tmp36, no, tmp38, opt);
          }
        }
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (true === onWrite) {
          onWrite = ReflectionBinaryWriter(outer1_1[5]).UnknownFieldHandler.onWrite;
        }
        onWrite(self.info.typeName, arg0, tag);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "mapEntry",
    value: function mapEntry(tag, arg1, no, replaced) {
      const self = this;
      tag.tag(no.no, ReflectionBinaryWriter(outer1_1[5]).WireType.LengthDelimited);
      tag.fork();
      const K = no.K;
      if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.INT32 !== K) {
        if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.FIXED32 !== K) {
          if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.UINT32 !== K) {
            if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.SFIXED32 !== K) {
              if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.SINT32 !== K) {
                let parsed = replaced;
                if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.BOOL === K) {
                  let tmp8 = "true" == replaced;
                  if (!tmp8) {
                    tmp8 = "false" == replaced;
                  }
                  ReflectionBinaryWriter(outer1_1[4]).assert(tmp8);
                  parsed = "true" == replaced;
                  const obj = ReflectionBinaryWriter(outer1_1[4]);
                }
              }
              self.scalar(tag, no.K, 1, parsed, true);
              const kind = no.V.kind;
              if ("scalar" === kind) {
                self.scalar(tag, no.V.T, 2, arg4, true);
              } else if ("enum" === kind) {
                self.scalar(tag, ReflectionBinaryWriter(outer1_1[3]).ScalarType.INT32, 2, arg4, true);
              } else if ("message" === kind) {
                const V = no.V;
                self.message(tag, arg1, V.T(), 2, arg4);
              }
              const joined = tag.join();
            }
          }
        }
      }
      parsed = Number.parseInt(replaced);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "message",
    value: function message(tag, binaryWriteOptionsResult, internalBinaryWrite, arg3, bodyLocalized) {
      if (undefined !== bodyLocalized) {
        internalBinaryWrite.internalBinaryWrite(bodyLocalized, tag.tag(arg3, ReflectionBinaryWriter(outer1_1[5]).WireType.LengthDelimited).fork(), binaryWriteOptionsResult);
        const joined = tag.join();
        const tagResult = tag.tag(arg3, ReflectionBinaryWriter(outer1_1[5]).WireType.LengthDelimited);
      }
    }
  };
  items[4] = {
    key: "scalar",
    value: function scalar(tag, arg1, arg2, byteLength) {
      let tmp2;
      let tmp3;
      let tmp4;
      [tmp2, tmp3, tmp4] = outer1_2(this.scalarInfo(arg1, byteLength), 3);
      if (!tmp4) {
        tag.tag(arg2, tmp2);
        tag[tmp3](byteLength);
      }
    }
  };
  items[5] = {
    key: "packed",
    value: function packed(tag, arg1, no, arg3) {
      let length;
      const self = this;
      if (arg3.length) {
        let tmp3 = arg1 !== ReflectionBinaryWriter(outer1_1[3]).ScalarType.BYTES;
        if (tmp3) {
          tmp3 = arg1 !== ReflectionBinaryWriter(outer1_1[3]).ScalarType.STRING;
        }
        ReflectionBinaryWriter(outer1_1[4]).assert(tmp3);
        tag.tag(no, ReflectionBinaryWriter(outer1_1[5]).WireType.LengthDelimited);
        tag.fork();
        let num6 = 0;
        if (0 < arg3.length) {
          do {
            let tmp13 = tag[outer1_2(undefined, self.scalarInfo(self, arg1), 2)[1]](arg3[num6]);
            num6 = num6 + 1;
            length = arg3.length;
          } while (num6 < length);
        }
        const joined = tag.join();
        const obj = ReflectionBinaryWriter(outer1_1[4]);
      }
    }
  };
  items[6] = {
    key: "scalarInfo",
    value: function scalarInfo(arg0, byteLength) {
      const Varint = ReflectionBinaryWriter(outer1_1[5]).WireType.Varint;
      let tmp = undefined === byteLength;
      let str = "int32";
      let Bit64 = Varint;
      let tmp3 = tmp2;
      if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.INT32 !== arg0) {
        if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.STRING === arg0) {
          let tmp34 = tmp;
          if (!tmp) {
            tmp34 = !byteLength.length;
          }
          Bit64 = ReflectionBinaryWriter(outer1_1[5]).WireType.LengthDelimited;
          str = "string";
          tmp3 = tmp34;
        } else if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.BOOL === arg0) {
          tmp3 = false === byteLength;
          str = "bool";
          Bit64 = Varint;
        } else {
          str = "uint32";
          Bit64 = Varint;
          tmp3 = tmp2;
          if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.UINT32 !== arg0) {
            if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.DOUBLE === arg0) {
              Bit64 = ReflectionBinaryWriter(outer1_1[5]).WireType.Bit64;
              str = "double";
              tmp3 = tmp2;
            } else if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.FLOAT === arg0) {
              Bit64 = ReflectionBinaryWriter(outer1_1[5]).WireType.Bit32;
              str = "float";
              tmp3 = tmp2;
            } else if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.INT64 === arg0) {
              let isZeroResult = tmp;
              if (!tmp) {
                const PbLong3 = ReflectionBinaryWriter(outer1_1[6]).PbLong;
                isZeroResult = PbLong3.from(byteLength).isZero();
                const fromResult = PbLong3.from(byteLength);
              }
              str = "int64";
              tmp3 = isZeroResult;
              Bit64 = Varint;
            } else if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.UINT64 === arg0) {
              let isZeroResult1 = tmp;
              if (!tmp) {
                const PbULong2 = ReflectionBinaryWriter(outer1_1[6]).PbULong;
                isZeroResult1 = PbULong2.from(byteLength).isZero();
                const fromResult1 = PbULong2.from(byteLength);
              }
              str = "uint64";
              tmp3 = isZeroResult1;
              Bit64 = Varint;
            } else if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.FIXED64 === arg0) {
              let isZeroResult2 = tmp;
              if (!tmp) {
                const PbULong = ReflectionBinaryWriter(outer1_1[6]).PbULong;
                isZeroResult2 = PbULong.from(byteLength).isZero();
                const fromResult2 = PbULong.from(byteLength);
              }
              Bit64 = ReflectionBinaryWriter(outer1_1[5]).WireType.Bit64;
              str = "fixed64";
              tmp3 = isZeroResult2;
            } else if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.BYTES === arg0) {
              let tmp16 = tmp;
              if (!tmp) {
                tmp16 = !byteLength.byteLength;
              }
              Bit64 = ReflectionBinaryWriter(outer1_1[5]).WireType.LengthDelimited;
              str = "bytes";
              tmp3 = tmp16;
            } else if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.FIXED32 === arg0) {
              Bit64 = ReflectionBinaryWriter(outer1_1[5]).WireType.Bit32;
              str = "fixed32";
              tmp3 = tmp2;
            } else if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.SFIXED32 === arg0) {
              Bit64 = ReflectionBinaryWriter(outer1_1[5]).WireType.Bit32;
              str = "sfixed32";
              tmp3 = tmp2;
            } else if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.SFIXED64 === arg0) {
              let isZeroResult3 = tmp;
              if (!tmp) {
                const PbLong2 = ReflectionBinaryWriter(outer1_1[6]).PbLong;
                isZeroResult3 = PbLong2.from(byteLength).isZero();
                const fromResult3 = PbLong2.from(byteLength);
              }
              Bit64 = ReflectionBinaryWriter(outer1_1[5]).WireType.Bit64;
              str = "sfixed64";
              tmp3 = isZeroResult3;
            } else {
              str = "sint32";
              Bit64 = Varint;
              tmp3 = tmp2;
              if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.SINT32 !== arg0) {
                Bit64 = Varint;
                tmp3 = tmp2;
                if (ReflectionBinaryWriter(outer1_1[3]).ScalarType.SINT64 === arg0) {
                  let isZeroResult4 = tmp;
                  if (!tmp) {
                    const PbLong = ReflectionBinaryWriter(outer1_1[6]).PbLong;
                    isZeroResult4 = PbLong.from(byteLength).isZero();
                    const fromResult4 = PbLong.from(byteLength);
                  }
                  str = "sint64";
                  tmp3 = isZeroResult4;
                  Bit64 = Varint;
                }
              }
            }
          }
        }
      }
      const items = [Bit64, str, ];
      if (!tmp) {
        tmp = tmp3;
      }
      items[2] = tmp;
      return items;
    }
  };
  return _defineProperties(ReflectionBinaryWriter, items);
})();
