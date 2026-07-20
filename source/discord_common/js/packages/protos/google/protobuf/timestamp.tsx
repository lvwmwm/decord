// Module ID: 1312
// Function ID: 15256
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1312 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let tmp2 = (MessageType) => {
  class Timestamp$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, Timestamp$Type);
      items = [, ];
      items[0] = {};
      items[1] = {};
      items1 = [];
      items1[1] = items;
      obj = closure_6(Timestamp$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = Timestamp$Type;
  callback2(Timestamp$Type, MessageType);
  let obj = {
    key: "now",
    value() {
      const obj = this.create();
      const timestamp = Date.now();
      const PbLong = Timestamp$Type(closure_1[6]).PbLong;
      obj.seconds = PbLong.from(Math.floor(timestamp / 1000)).toString();
      obj.nanos = timestamp % 1000 * 1000000;
      return obj;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "toDate",
    value(seconds) {
      const PbLong = Timestamp$Type(closure_1[6]).PbLong;
      const result = 1000 * PbLong.from(seconds.seconds).toNumber();
      const fromResult = PbLong.from(seconds.seconds);
      return new Date(result + Math.ceil(seconds.nanos / 1000000));
    }
  };
  items[1] = obj;
  obj = {
    key: "fromDate",
    value(getTime) {
      const obj = this.create();
      const time = getTime.getTime();
      const PbLong = Timestamp$Type(closure_1[6]).PbLong;
      obj.seconds = PbLong.from(Math.floor(time / 1000)).toString();
      obj.nanos = time % 1000 * 1000000;
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalJsonWrite",
    value(seconds) {
      const PbLong = Timestamp$Type(closure_1[6]).PbLong;
      const result = 1000 * PbLong.from(seconds.seconds).toNumber();
      if (result >= Date.parse("0001-01-01T00:00:00Z")) {
        const _Date2 = Date;
        if (result <= Date.parse("9999-12-31T23:59:59Z")) {
          if (seconds.nanos < 0) {
            const _Error = Error;
            const error = new Error("Unable to encode invalid Timestamp to JSON. Nanos must not be negative.");
            throw error;
          } else if (seconds.nanos <= 0) {
            const _Date = Date;
            const date = new Date(result);
            return date.toISOString().replace(".000Z", "Z");
          } else {
            const str3 = seconds.nanos + 1000000000.toString().substring(1);
            let num3 = 3;
            if ("000000" === str3.substring(3)) {
              num3 = str3.substring(0, num3);
              let text = `${"." + num3}Z`;
            } else if ("000" === str3.substring(6)) {
              text = `${"." + str3.substring(0, 6)}Z`;
            } else {
              text = `${"." + str3}Z`;
            }
            const str = seconds.nanos + 1000000000;
            const str2 = seconds.nanos + 1000000000.toString();
          }
        }
      }
      const error1 = new Error("Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
      throw error1;
    }
  };
  items[4] = {
    key: "internalJsonRead",
    value(prepareResult) {
      let obj = arg2;
      const self = this;
      if ("string" !== typeof prepareResult) {
        const _Error4 = Error;
        obj = Timestamp$Type(closure_1[6]);
        const error = new Error("Unable to parse Timestamp from JSON " + obj.typeofJsonValue(prepareResult) + ".");
        throw error;
      } else {
        const match = prepareResult.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (match) {
          let str5 = "Z";
          const text = `${tmp26[1]}-${tmp26[2]}-${tmp26[3]}T${tmp26[4]}:${tmp26[5]}:${tmp26[6]}`;
          if (match[8]) {
            str5 = match[8];
          }
          const parsed = Date.parse(text + str5);
          const _Number = Number;
          if (Number.isNaN(parsed)) {
            const _Error3 = Error;
            const error1 = new Error("Unable to parse Timestamp from JSON. Invalid value.");
            throw error1;
          } else {
            const _Date = Date;
            if (parsed >= Date.parse("0001-01-01T00:00:00Z")) {
              const _Date2 = Date;
              if (parsed <= Date.parse("9999-12-31T23:59:59Z")) {
                if (!obj) {
                  obj = self.create();
                }
                const PbLong = Timestamp$Type(closure_1[6]).PbLong;
                obj.seconds = PbLong.from(parsed / 1000).toString();
                obj.nanos = 0;
                if (match[7]) {
                  const _parseInt = parseInt;
                  const repeat = "0".repeat;
                  const text1 = `1${tmp26[7]}`;
                  obj.nanos = parseInt(`1${tmp26[7]}` + "0".repeat(9 - match[7].length)) - 1000000000;
                }
                return obj;
              }
            }
            const _globalThis = globalThis;
            let _Error2 = Error;
            const prototype2 = _Error2.prototype;
            _Error2 = new _Error2("Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
            throw _Error2;
          }
        } else {
          const _Error = Error;
          const error2 = new Error("Unable to parse Timestamp from JSON. Invalid format.");
          throw error2;
        }
      }
    }
  };
  items[5] = {
    key: "create",
    value(arr) {
      let obj = { 0: 217054453166274260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017651682751916608 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Timestamp$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Timestamp$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Timestamp$Type(closure_1[6]);
      }
      return obj;
    }
  };
  items[6] = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let str4 = pos.int64();
          obj.seconds = str4.toString();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.nanos = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = Timestamp$Type;
                let tmp13 = closure_1;
                onRead = Timestamp$Type(closure_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[7] = {
    key: "internalBinaryWrite",
    value(seconds, tag, writeUnknownFields) {
      if ("0" !== seconds.seconds) {
        tag.tag(1, Timestamp$Type(closure_1[6]).WireType.Varint).int64(seconds.seconds);
        const tagResult = tag.tag(1, Timestamp$Type(closure_1[6]).WireType.Varint);
      }
      if (0 !== seconds.nanos) {
        tag.tag(2, Timestamp$Type(closure_1[6]).WireType.Varint).int32(seconds.nanos);
        const tagResult1 = tag.tag(2, Timestamp$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Timestamp$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, seconds, tag);
      }
      return tag;
    }
  };
  return callback(Timestamp$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/protos/google/protobuf/timestamp.tsx");

export const Timestamp = tmp2;
