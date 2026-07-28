// Module ID: 6250
// Function ID: 55985
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 6248, 1313, 1284, 2]

// Module 6250 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _callSuper from "_callSuper";
import closure_4 from "_callSuper";
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
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", OPEN_MARKETING_PAGE: 1, [1]: "OPEN_MARKETING_PAGE", OPEN_TIER_2_PAYMENT_MODAL: 2, [2]: "OPEN_TIER_2_PAYMENT_MODAL", OPEN_TIER_1_PAYMENT_MODAL: 3, [3]: "OPEN_TIER_1_PAYMENT_MODAL", OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER: 4, [4]: "OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER", OPEN_PLAN_SELECTION_MODAL: 5, [5]: "OPEN_PLAN_SELECTION_MODAL", OPEN_PREMIUM_GROUP_PAYMENT_MODAL: 6, [6]: "OPEN_PREMIUM_GROUP_PAYMENT_MODAL", OPEN_SOCIAL_LAYER_STOREFRONT: 7, [7]: "OPEN_SOCIAL_LAYER_STOREFRONT" };
let tmp2 = ((MessageType) => {
  class CTAButton$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, CTAButton$Type);
      items = [, , , , ];
      items[0] = { no: 1, name: "copy", kind: "scalar", T: 9 };
      obj = { no: 2, name: "button_action", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.premium_marketing.v1.ButtonAction", outer2_8, "BUTTON_ACTION_"];
        return items;
      };
      items[1] = obj;
      items[2] = { no: 3, name: "deeplink_section", kind: "scalar", T: 9 };
      obj = { no: 4, name: "copy_localized", kind: "message" };
      obj.T = function T() {
        return CTAButton$Type(outer2_1[6]).LocalizedString;
      };
      items[3] = obj;
      obj1 = { no: 5, name: "navigable_storefront_application_id", kind: "message" };
      obj1.T = function T() {
        return CTAButton$Type(outer2_1[7]).UInt64Value;
      };
      items[4] = obj1;
      items1 = ["discord_protos.premium_marketing.v1.CTAButton"];
      items1[1] = items;
      obj4 = outer1_6(CTAButton$Type);
      tmp2 = outer1_5;
      if (outer1_9()) {
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
  callback2(CTAButton$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { copy: "", buttonAction: 0, deeplinkSection: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CTAButton$Type(outer1_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CTAButton$Type(outer1_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = CTAButton$Type(outer1_1[8]);
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
          obj.copy = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.buttonAction = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.deeplinkSection = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp31 = CTAButton$Type;
          let tmp32 = outer1_1;
          let LocalizedString = CTAButton$Type(outer1_1[6]).LocalizedString;
          let tmp33 = LocalizedString;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.copyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.copyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = CTAButton$Type;
          let tmp27 = outer1_1;
          let UInt64Value = CTAButton$Type(outer1_1[7]).UInt64Value;
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
                let tmp12 = CTAButton$Type;
                let tmp13 = outer1_1;
                onRead = CTAButton$Type(outer1_1[8]).UnknownFieldHandler.onRead;
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
    value(copy, tag, writeUnknownFields) {
      if ("" !== copy.copy) {
        tag.tag(1, CTAButton$Type(outer1_1[8]).WireType.LengthDelimited).string(copy.copy);
        const tagResult = tag.tag(1, CTAButton$Type(outer1_1[8]).WireType.LengthDelimited);
      }
      if (0 !== copy.buttonAction) {
        tag.tag(2, CTAButton$Type(outer1_1[8]).WireType.Varint).int32(copy.buttonAction);
        const tagResult1 = tag.tag(2, CTAButton$Type(outer1_1[8]).WireType.Varint);
      }
      if ("" !== copy.deeplinkSection) {
        tag.tag(3, CTAButton$Type(outer1_1[8]).WireType.LengthDelimited).string(copy.deeplinkSection);
        const tagResult2 = tag.tag(3, CTAButton$Type(outer1_1[8]).WireType.LengthDelimited);
      }
      if (copy.copyLocalized) {
        const LocalizedString = CTAButton$Type(outer1_1[6]).LocalizedString;
        const tagResult3 = tag.tag(4, CTAButton$Type(outer1_1[8]).WireType.LengthDelimited);
        const joined = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, CTAButton$Type(outer1_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, CTAButton$Type(outer1_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (copy.navigableStorefrontApplicationId) {
        const UInt64Value = CTAButton$Type(outer1_1[7]).UInt64Value;
        const tagResult4 = tag.tag(5, CTAButton$Type(outer1_1[8]).WireType.LengthDelimited);
        const joined1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, CTAButton$Type(outer1_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, CTAButton$Type(outer1_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CTAButton$Type(outer1_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, copy, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CTAButton$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/cta_button.tsx");

export const ButtonAction = obj;
export const CTAButton = tmp2;
