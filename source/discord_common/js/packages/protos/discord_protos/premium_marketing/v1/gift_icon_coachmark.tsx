// Module ID: 7143
// Function ID: 57585
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 7144, 7135, 1284, 2]

// Module 7143 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((MessageType) => {
  class GiftIconCoachmark$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, GiftIconCoachmark$Type);
      items = [, , , , , ];
      items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "body", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "asset_url", kind: "scalar", T: 9 };
      obj = { no: 4, name: "asset", kind: "message" };
      obj.T = function T() {
        return GiftIconCoachmark$Type(outer2_1[6]).ThemeAwareAsset;
      };
      items[3] = obj;
      obj = { no: 5, name: "header_localized", kind: "message" };
      obj.T = function T() {
        return GiftIconCoachmark$Type(outer2_1[7]).LocalizedString;
      };
      items[4] = obj;
      obj1 = { no: 6, name: "body_localized", kind: "message" };
      obj1.T = function T() {
        return GiftIconCoachmark$Type(outer2_1[7]).LocalizedString;
      };
      items[5] = obj1;
      items1 = ["discord_protos.premium_marketing.v1.GiftIconCoachmark"];
      items1[1] = items;
      obj4 = outer1_6(GiftIconCoachmark$Type);
      tmp2 = outer1_5;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj4, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj4.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GiftIconCoachmark$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { header: "", body: "", assetUrl: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GiftIconCoachmark$Type(outer1_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GiftIconCoachmark$Type(outer1_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = GiftIconCoachmark$Type(outer1_1[8]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
          let tmp37 = outer1_1;
          let ThemeAwareAsset = GiftIconCoachmark$Type(outer1_1[6]).ThemeAwareAsset;
          let tmp38 = ThemeAwareAsset;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp31 = GiftIconCoachmark$Type;
          let tmp32 = outer1_1;
          let LocalizedString2 = GiftIconCoachmark$Type(outer1_1[7]).LocalizedString;
          let tmp33 = LocalizedString2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp26 = GiftIconCoachmark$Type;
          let tmp27 = outer1_1;
          let LocalizedString = GiftIconCoachmark$Type(outer1_1[7]).LocalizedString;
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
                let tmp13 = outer1_1;
                onRead = GiftIconCoachmark$Type(outer1_1[8]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(header, tag, writeUnknownFields) {
      if ("" !== header.header) {
        tag.tag(1, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited).string(header.header);
        const tagResult = tag.tag(1, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.body) {
        tag.tag(2, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited).string(header.body);
        const tagResult1 = tag.tag(2, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.assetUrl) {
        tag.tag(3, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited).string(header.assetUrl);
        const tagResult2 = tag.tag(3, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited);
      }
      if (header.asset) {
        const ThemeAwareAsset = GiftIconCoachmark$Type(outer1_1[6]).ThemeAwareAsset;
        const tagResult3 = tag.tag(4, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited);
        const joined = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(4, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(4, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.headerLocalized) {
        const LocalizedString = GiftIconCoachmark$Type(outer1_1[7]).LocalizedString;
        const tagResult4 = tag.tag(5, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited);
        const joined1 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(5, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(5, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.bodyLocalized) {
        const LocalizedString2 = GiftIconCoachmark$Type(outer1_1[7]).LocalizedString;
        const tagResult5 = tag.tag(6, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited);
        const joined2 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(6, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(6, GiftIconCoachmark$Type(outer1_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GiftIconCoachmark$Type(outer1_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, header, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GiftIconCoachmark$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_icon_coachmark.tsx");

export const GiftIconCoachmark = tmp2;
