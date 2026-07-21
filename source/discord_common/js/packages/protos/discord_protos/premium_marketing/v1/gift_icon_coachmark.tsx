// Module ID: 7138
// Function ID: 57514
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7138 (_isNativeReflectConstruct)
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
  class GiftIconCoachmark$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, GiftIconCoachmark$Type);
      items = [, , , , , ];
      items[0] = {};
      items[1] = { 9223372036854775807: "background_asset", 0: "message", 9223372036854775807: 0, no: 50.06 };
      items[2] = {};
      items[3] = {
        T() {
              return callback(closure_1[6]).ThemeAwareAsset;
            }
      };
      obj = { "Null": "message", "Null": 0, "Null": 16.95 };
      obj.T = function T() {
        return callback(closure_1[7]).LocalizedString;
      };
      items[4] = obj;
      items[5] = {
        T() {
              return callback(closure_1[7]).LocalizedString;
            }
      };
      items1 = [null];
      items1[1] = items;
      obj2 = closure_6(GiftIconCoachmark$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj2, items1, closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GiftIconCoachmark$Type;
  callback2(GiftIconCoachmark$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Bool(true)": false, "Bool(true)": false, "Bool(false)": false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GiftIconCoachmark$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GiftIconCoachmark$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = GiftIconCoachmark$Type(closure_1[8]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
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
          obj.header = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.body = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.assetUrl = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp36 = GiftIconCoachmark$Type;
          let tmp37 = closure_1;
          let ThemeAwareAsset = GiftIconCoachmark$Type(closure_1[6]).ThemeAwareAsset;
          let tmp38 = ThemeAwareAsset;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp31 = GiftIconCoachmark$Type;
          let tmp32 = closure_1;
          let LocalizedString2 = GiftIconCoachmark$Type(closure_1[7]).LocalizedString;
          let tmp33 = LocalizedString2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp26 = GiftIconCoachmark$Type;
          let tmp27 = closure_1;
          let LocalizedString = GiftIconCoachmark$Type(closure_1[7]).LocalizedString;
          let tmp28 = LocalizedString;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
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
                let tmp12 = GiftIconCoachmark$Type;
                let tmp13 = closure_1;
                onRead = GiftIconCoachmark$Type(closure_1[8]).UnknownFieldHandler.onRead;
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
    key: "internalBinaryWrite",
    value(header, tag, writeUnknownFields) {
      if ("" !== header.header) {
        tag.tag(1, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited).string(header.header);
        const tagResult = tag.tag(1, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.body) {
        tag.tag(2, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited).string(header.body);
        const tagResult1 = tag.tag(2, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.assetUrl) {
        tag.tag(3, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited).string(header.assetUrl);
        const tagResult2 = tag.tag(3, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (header.asset) {
        const ThemeAwareAsset = GiftIconCoachmark$Type(closure_1[6]).ThemeAwareAsset;
        const tagResult3 = tag.tag(4, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited);
        const joined = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(4, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(4, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.headerLocalized) {
        const LocalizedString = GiftIconCoachmark$Type(closure_1[7]).LocalizedString;
        const tagResult4 = tag.tag(5, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited);
        const joined1 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(5, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(5, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.bodyLocalized) {
        const LocalizedString2 = GiftIconCoachmark$Type(closure_1[7]).LocalizedString;
        const tagResult5 = tag.tag(6, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited);
        const joined2 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(6, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(6, GiftIconCoachmark$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GiftIconCoachmark$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, header, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GiftIconCoachmark$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_icon_coachmark.tsx");

export const GiftIconCoachmark = tmp2;
