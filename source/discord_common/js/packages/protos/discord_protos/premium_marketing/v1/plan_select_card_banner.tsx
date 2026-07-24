// Module ID: 7153
// Function ID: 57727
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 7144, 7135, 7136, 1284, 2]

// Module 7153 (_isNativeReflectConstruct)
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
  class PlanSelectCardBanner$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, PlanSelectCardBanner$Type);
      obj = { no: 1, name: "asset", kind: "message" };
      obj.T = function T() {
        return PlanSelectCardBanner$Type(outer2_1[6]).ThemeAwareAsset;
      };
      items = [, , , ];
      items[0] = obj;
      items[1] = { no: 2, name: "body", kind: "scalar", T: 9 };
      obj = { no: 3, name: "body_localized", kind: "message" };
      obj.T = function T() {
        return PlanSelectCardBanner$Type(outer2_1[7]).LocalizedString;
      };
      items[2] = obj;
      obj1 = { no: 4, name: "help_article", kind: "message" };
      obj1.T = function T() {
        return PlanSelectCardBanner$Type(outer2_1[8]).HelpArticle;
      };
      items[3] = obj1;
      items1 = ["discord_protos.premium_marketing.v1.PlanSelectCardBanner"];
      items1[1] = items;
      obj4 = outer1_6(PlanSelectCardBanner$Type);
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
  callback2(PlanSelectCardBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { body: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PlanSelectCardBanner$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PlanSelectCardBanner$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = PlanSelectCardBanner$Type(outer1_1[9]);
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
          let tmp36 = PlanSelectCardBanner$Type;
          let tmp37 = outer1_1;
          let ThemeAwareAsset = PlanSelectCardBanner$Type(outer1_1[6]).ThemeAwareAsset;
          let tmp38 = ThemeAwareAsset;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.body = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp31 = PlanSelectCardBanner$Type;
          let tmp32 = outer1_1;
          let LocalizedString = PlanSelectCardBanner$Type(outer1_1[7]).LocalizedString;
          let tmp33 = LocalizedString;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp26 = PlanSelectCardBanner$Type;
          let tmp27 = outer1_1;
          let HelpArticle = PlanSelectCardBanner$Type(outer1_1[8]).HelpArticle;
          let tmp28 = HelpArticle;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
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
                let tmp12 = PlanSelectCardBanner$Type;
                let tmp13 = outer1_1;
                onRead = PlanSelectCardBanner$Type(outer1_1[9]).UnknownFieldHandler.onRead;
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
    value(asset, tag, writeUnknownFields) {
      if (asset.asset) {
        const ThemeAwareAsset = PlanSelectCardBanner$Type(outer1_1[6]).ThemeAwareAsset;
        const tagResult = tag.tag(1, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== asset.body) {
        tag.tag(2, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(asset.body);
        const tagResult1 = tag.tag(2, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (asset.bodyLocalized) {
        const LocalizedString = PlanSelectCardBanner$Type(outer1_1[7]).LocalizedString;
        const tagResult2 = tag.tag(3, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined1 = LocalizedString.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (asset.helpArticle) {
        const HelpArticle = PlanSelectCardBanner$Type(outer1_1[8]).HelpArticle;
        const tagResult3 = tag.tag(4, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined2 = HelpArticle.internalBinaryWrite(asset.helpArticle, tag.tag(4, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = HelpArticle.internalBinaryWrite(asset.helpArticle, tag.tag(4, PlanSelectCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PlanSelectCardBanner$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, asset, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PlanSelectCardBanner$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/plan_select_card_banner.tsx");

export const PlanSelectCardBanner = tmp2;
