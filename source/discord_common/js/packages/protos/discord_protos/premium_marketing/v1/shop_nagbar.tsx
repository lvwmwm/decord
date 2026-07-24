// Module ID: 7155
// Function ID: 57762
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 7134, 7136, 7135, 1313, 1284, 2]

// Module 7155 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
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
  class ShopNagbar$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, ShopNagbar$Type);
      items = [, , , , , , , ];
      items[0] = { no: 1, name: "body", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "cta_label", kind: "scalar", T: 9 };
      obj = { no: 3, name: "cta_action", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.premium_marketing.v1.ButtonAction", ShopNagbar$Type(outer2_1[6]).ButtonAction, "BUTTON_ACTION_"];
        return items;
      };
      items[2] = obj;
      items[3] = { no: 4, name: "deeplink_section", kind: "scalar", T: 9 };
      obj = { no: 5, name: "help_article", kind: "message" };
      obj.T = function T() {
        return ShopNagbar$Type(outer2_1[7]).HelpArticle;
      };
      items[4] = obj;
      obj1 = { no: 6, name: "body_localized", kind: "message" };
      obj1.T = function T() {
        return ShopNagbar$Type(outer2_1[8]).LocalizedString;
      };
      items[5] = obj1;
      obj2 = { no: 7, name: "cta_label_localized", kind: "message" };
      obj2.T = function T() {
        return ShopNagbar$Type(outer2_1[8]).LocalizedString;
      };
      items[6] = obj2;
      obj3 = { no: 8, name: "navigable_storefront_application_id", kind: "message" };
      obj3.T = function T() {
        return ShopNagbar$Type(outer2_1[9]).UInt64Value;
      };
      items[7] = obj3;
      items1 = ["discord_protos.premium_marketing.v1.ShopNagbar"];
      items1[1] = items;
      obj6 = outer1_6(ShopNagbar$Type);
      tmp2 = outer1_5;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj6, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj6.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ShopNagbar$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ShopNagbar$Type(outer1_1[10]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ShopNagbar$Type(outer1_1[10]).reflectionMergePartial(this, obj, arr);
        const obj3 = ShopNagbar$Type(outer1_1[10]);
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
          obj.body = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.ctaLabel = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.ctaAction = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.deeplinkSection = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp41 = ShopNagbar$Type;
          let tmp42 = outer1_1;
          let HelpArticle = ShopNagbar$Type(outer1_1[7]).HelpArticle;
          let tmp43 = HelpArticle;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp36 = ShopNagbar$Type;
          let tmp37 = outer1_1;
          let LocalizedString2 = ShopNagbar$Type(outer1_1[8]).LocalizedString;
          let tmp38 = LocalizedString2;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.bodyLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let tmp31 = ShopNagbar$Type;
          let tmp32 = outer1_1;
          let LocalizedString = ShopNagbar$Type(outer1_1[8]).LocalizedString;
          let tmp33 = LocalizedString;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.ctaLabelLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.ctaLabelLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (8 === tmp7) {
          let tmp26 = ShopNagbar$Type;
          let tmp27 = outer1_1;
          let UInt64Value = ShopNagbar$Type(outer1_1[9]).UInt64Value;
          let tmp28 = UInt64Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.navigableStorefrontApplicationId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.navigableStorefrontApplicationId);
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
                let tmp12 = ShopNagbar$Type;
                let tmp13 = outer1_1;
                onRead = ShopNagbar$Type(outer1_1[10]).UnknownFieldHandler.onRead;
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
    value(body, tag, writeUnknownFields) {
      if ("" !== body.body) {
        tag.tag(1, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).string(body.body);
        const tagResult = tag.tag(1, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited);
      }
      if ("" !== body.ctaLabel) {
        tag.tag(2, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).string(body.ctaLabel);
        const tagResult1 = tag.tag(2, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited);
      }
      if (0 !== body.ctaAction) {
        tag.tag(3, ShopNagbar$Type(outer1_1[10]).WireType.Varint).int32(body.ctaAction);
        const tagResult2 = tag.tag(3, ShopNagbar$Type(outer1_1[10]).WireType.Varint);
      }
      if ("" !== body.deeplinkSection) {
        tag.tag(4, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).string(body.deeplinkSection);
        const tagResult3 = tag.tag(4, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited);
      }
      if (body.helpArticle) {
        const HelpArticle = ShopNagbar$Type(outer1_1[7]).HelpArticle;
        const tagResult4 = tag.tag(5, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited);
        const joined = HelpArticle.internalBinaryWrite(body.helpArticle, tag.tag(5, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = HelpArticle.internalBinaryWrite(body.helpArticle, tag.tag(5, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (body.bodyLocalized) {
        const LocalizedString = ShopNagbar$Type(outer1_1[8]).LocalizedString;
        const tagResult5 = tag.tag(6, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited);
        const joined1 = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(6, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(6, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (body.ctaLabelLocalized) {
        const LocalizedString2 = ShopNagbar$Type(outer1_1[8]).LocalizedString;
        const tagResult6 = tag.tag(7, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited);
        const joined2 = LocalizedString2.internalBinaryWrite(body.ctaLabelLocalized, tag.tag(7, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(body.ctaLabelLocalized, tag.tag(7, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (body.navigableStorefrontApplicationId) {
        const UInt64Value = ShopNagbar$Type(outer1_1[9]).UInt64Value;
        const tagResult7 = tag.tag(8, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited);
        const joined3 = UInt64Value.internalBinaryWrite(body.navigableStorefrontApplicationId, tag.tag(8, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = UInt64Value.internalBinaryWrite(body.navigableStorefrontApplicationId, tag.tag(8, ShopNagbar$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ShopNagbar$Type(outer1_1[10]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, body, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ShopNagbar$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_nagbar.tsx");

export const ShopNagbar = tmp2;
