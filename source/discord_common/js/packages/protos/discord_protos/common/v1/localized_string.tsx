// Module ID: 7131
// Function ID: 57423
// Name: _callSuper
// Dependencies: []

// Module 7131 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_5(arg0, constructResult);
}
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
  class LocalizedString$Type {
    constructor() {
      tmp = closure_3(this, LocalizedString$Type);
      items = [, ];
      items[0] = {};
      obj = { -111020099: "body", 1351895378: "scalar", 1456955659: 9, -1801654842: 0 };
      obj.V = {};
      items[1] = obj;
      items1 = [null];
      items1[1] = items;
      return closure_8(this, LocalizedString$Type, items1);
    }
  }
  const arg1 = LocalizedString$Type;
  callback3(LocalizedString$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { default: "", localizations: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, LocalizedString$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = LocalizedString$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = LocalizedString$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
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
          obj.default = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let binaryReadMap2Result = self.binaryReadMap2(obj.localizations, pos, readUnknownField);
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
                let tmp12 = LocalizedString$Type;
                let tmp13 = closure_1;
                onRead = LocalizedString$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[1] = obj;
  obj = {
    key: "binaryReadMap2",
    value(arg0, pos) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let tmp5;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10020] = tmp7;
          if (1 === tmp8) {
            let stringResult = pos.string();
            let stringResult1 = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            stringResult1 = pos.string();
          }
          let tmp3 = stringResult1;
          tmp4 = stringResult;
          tmp5 = stringResult1;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.common.v1.LocalizedString.localizations");
        throw _Error;
      }
      let str2 = "";
      let str3 = "";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null != tmp5) {
        str2 = tmp5;
      }
      arg0[str3] = str2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(localizations, tag, writeUnknownFields) {
      let length;
      if ("" !== localizations.default) {
        tag.tag(1, LocalizedString$Type(closure_1[6]).WireType.LengthDelimited).string(localizations.default);
        const tagResult = tag.tag(1, LocalizedString$Type(closure_1[6]).WireType.LengthDelimited);
      }
      const keys = Object.keys(localizations.localizations);
      let num3 = 0;
      if (0 < keys.length) {
        do {
          let tmp4 = keys[num3];
          let tmp5 = closure_0;
          let tmp6 = closure_1;
          let tagResult1 = tag.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult = tagResult1.fork();
          let tagResult2 = forkResult.tag(1, closure_0(closure_1[6]).WireType.LengthDelimited);
          let stringResult1 = tagResult2.string(tmp4);
          let tagResult3 = stringResult1.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let stringResult2 = tagResult3.string(localizations.localizations[tmp4]);
          let joined = stringResult2.join();
          num3 = num3 + 1;
          length = keys.length;
        } while (num3 < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = LocalizedString$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, localizations, tag);
      }
      return tag;
    }
  };
  return callback(LocalizedString$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class LocalizedSnowflake$Type {
    constructor() {
      tmp = closure_3(this, LocalizedSnowflake$Type);
      items = [, ];
      items[0] = {};
      obj = { -111020099: "body", 1351895378: "scalar", 1456955659: 9, -1801654842: 0 };
      obj.V = { 0: "Array", -9223372036854775808: "isArray" };
      items[1] = obj;
      items1 = [null];
      items1[1] = items;
      return closure_8(this, LocalizedSnowflake$Type, items1);
    }
  }
  const arg1 = LocalizedSnowflake$Type;
  callback3(LocalizedSnowflake$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { default: "0", localizations: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, LocalizedSnowflake$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = LocalizedSnowflake$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = LocalizedSnowflake$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
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
          let str4 = pos.fixed64();
          obj.default = str4.toString();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let binaryReadMap2Result = self.binaryReadMap2(obj.localizations, pos, readUnknownField);
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
                let tmp12 = LocalizedSnowflake$Type;
                let tmp13 = closure_1;
                onRead = LocalizedSnowflake$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[1] = obj;
  obj = {
    key: "binaryReadMap2",
    value(arg0, pos) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let tmp5;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10020] = tmp7;
          if (1 === tmp8) {
            let stringResult = pos.string();
            let str = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let str2 = pos.fixed64();
            str = str2.toString();
          }
          let tmp3 = str;
          tmp4 = stringResult;
          tmp5 = str;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        str = "unknown map entry field for field discord_protos.common.v1.LocalizedSnowflake.localizations";
        _Error = new _Error("unknown map entry field for field discord_protos.common.v1.LocalizedSnowflake.localizations");
        throw _Error;
      }
      let str3 = "";
      if (null != tmp4) {
        str3 = tmp4;
      }
      let str4 = "0";
      if (null != tmp5) {
        str4 = tmp5;
      }
      arg0[str3] = str4;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(localizations, tag, writeUnknownFields) {
      let length;
      if ("0" !== localizations.default) {
        tag.tag(1, LocalizedSnowflake$Type(closure_1[6]).WireType.Bit64).fixed64(localizations.default);
        const tagResult = tag.tag(1, LocalizedSnowflake$Type(closure_1[6]).WireType.Bit64);
      }
      const keys = Object.keys(localizations.localizations);
      let num3 = 0;
      if (0 < keys.length) {
        do {
          let tmp4 = keys[num3];
          let tmp5 = closure_0;
          let tmp6 = closure_1;
          let tagResult1 = tag.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult = tagResult1.fork();
          let tagResult2 = forkResult.tag(1, closure_0(closure_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult2.string(tmp4);
          let tagResult3 = stringResult.tag(2, closure_0(closure_1[6]).WireType.Bit64);
          let fixed64Result1 = tagResult3.fixed64(localizations.localizations[tmp4]);
          let joined = fixed64Result1.join();
          num3 = num3 + 1;
          length = keys.length;
        } while (num3 < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = LocalizedSnowflake$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, localizations, tag);
      }
      return tag;
    }
  };
  return callback(LocalizedSnowflake$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp4 = new tmp4();
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/common/v1/localized_string.tsx");

export const LocalizedString = tmp2;
export const LocalizedSnowflake = tmp4;
