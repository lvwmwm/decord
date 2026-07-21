// Module ID: 7145
// Function ID: 57607
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7145 (_isNativeReflectConstruct)
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
  class PremiumTabTooltip$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, PremiumTabTooltip$Type);
      items = [, , , , ];
      items[0] = {};
      items[1] = { 9223372036854775807: "background_asset", 0: "message", 9223372036854775807: 0, no: 50.06 };
      obj = { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006403427937624729, "Null": 9126805520.75, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001427678768759017 };
      obj.T = function T() {
        return callback(closure_1[6]).ThemeAwareAsset;
      };
      items[2] = obj;
      obj = { "Null": "3", "Null": 3, "Null": "mobile_body" };
      obj.T = function T() {
        return callback(closure_1[7]).LocalizedString;
      };
      items[3] = obj;
      obj1 = { "Null": null, "Null": 9, "Null": null };
      obj1.T = function T() {
        return callback(closure_1[7]).LocalizedString;
      };
      items[4] = obj1;
      items1 = ["now"];
      items1[1] = items;
      obj4 = closure_6(PremiumTabTooltip$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj4, items1, closure_6(self).constructor);
      } else {
        constructResult = obj4.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PremiumTabTooltip$Type;
  callback2(PremiumTabTooltip$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { 0: "\u{1F9BB}\u{1F3FF}", 0: true };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PremiumTabTooltip$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PremiumTabTooltip$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = PremiumTabTooltip$Type(closure_1[8]);
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
          let tmp36 = PremiumTabTooltip$Type;
          let tmp37 = closure_1;
          let ThemeAwareAsset = PremiumTabTooltip$Type(closure_1[6]).ThemeAwareAsset;
          let tmp38 = ThemeAwareAsset;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp31 = PremiumTabTooltip$Type;
          let tmp32 = closure_1;
          let LocalizedString2 = PremiumTabTooltip$Type(closure_1[7]).LocalizedString;
          let tmp33 = LocalizedString2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = PremiumTabTooltip$Type;
          let tmp27 = closure_1;
          let LocalizedString = PremiumTabTooltip$Type(closure_1[7]).LocalizedString;
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
                let tmp12 = PremiumTabTooltip$Type;
                let tmp13 = closure_1;
                onRead = PremiumTabTooltip$Type(closure_1[8]).UnknownFieldHandler.onRead;
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
        tag.tag(1, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited).string(header.header);
        const tagResult = tag.tag(1, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.body) {
        tag.tag(2, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited).string(header.body);
        const tagResult1 = tag.tag(2, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (header.asset) {
        const ThemeAwareAsset = PremiumTabTooltip$Type(closure_1[6]).ThemeAwareAsset;
        const tagResult2 = tag.tag(3, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited);
        const joined = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.headerLocalized) {
        const LocalizedString = PremiumTabTooltip$Type(closure_1[7]).LocalizedString;
        const tagResult3 = tag.tag(4, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited);
        const joined1 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(4, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(4, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.bodyLocalized) {
        const LocalizedString2 = PremiumTabTooltip$Type(closure_1[7]).LocalizedString;
        const tagResult4 = tag.tag(5, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited);
        const joined2 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(5, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(5, PremiumTabTooltip$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PremiumTabTooltip$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, header, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PremiumTabTooltip$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab_tooltip.tsx");

export const PremiumTabTooltip = tmp2;
