// Module ID: 9030
// Function ID: 9031
// Name: cta_button
// Dependencies: [32, 1196, 9028, 1226, 2]

// Module 9030 (cta_button)
import _mod1196 from "module_1196" /* 1196 */;
import wrappers from "wrappers" /* 1226 */;
import localized_string from "localized_string" /* 9028 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3;

let tmp;
const T2 = function T() {
  const items = ["discord_protos.premium_marketing.v1.ButtonAction", ButtonAction, "BUTTON_ACTION_"];
  return items;
};
const T3 = function T() {
  return require("localized_string").LocalizedString;
};
const T4 = function T() {
  return require("wrappers").UInt64Value;
};
const T5 = function T() {
  const items = ["discord_protos.premium_marketing.v1.GiftModalDestination", obj2, "GIFT_MODAL_DESTINATION_"];
  return items;
};
const ButtonAction = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", OPEN_MARKETING_PAGE: 1, [1]: "OPEN_MARKETING_PAGE", OPEN_TIER_2_PAYMENT_MODAL: 2, [2]: "OPEN_TIER_2_PAYMENT_MODAL", OPEN_TIER_1_PAYMENT_MODAL: 3, [3]: "OPEN_TIER_1_PAYMENT_MODAL", OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER: 4, [4]: "OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER", OPEN_PLAN_SELECTION_MODAL: 5, [5]: "OPEN_PLAN_SELECTION_MODAL", OPEN_PREMIUM_GROUP_PAYMENT_MODAL: 6, [6]: "OPEN_PREMIUM_GROUP_PAYMENT_MODAL", OPEN_SOCIAL_LAYER_STOREFRONT: 7, [7]: "OPEN_SOCIAL_LAYER_STOREFRONT", OPEN_GUILD_BOOST_CHECKOUT: 8, [8]: "OPEN_GUILD_BOOST_CHECKOUT", OPEN_SHOP: 9, [9]: "OPEN_SHOP", OPEN_GIFT_MODAL: 10, [10]: "OPEN_GIFT_MODAL" };
let obj2 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PLAN_SELECTION: 1, [1]: "PLAN_SELECTION", TIER_2: 2, [2]: "TIER_2" };
const MessageType = _mod1196.MessageType;
class CTAButton$Type extends MessageType {
  constructor() {
    let items = [{ no: 1, name: "copy", kind: "scalar", T: 9 }, { no: 2, name: "button_action", kind: "enum", T: T2 }, { no: 3, name: "deeplink_section", kind: "scalar", T: 9 }, { no: 4, name: "copy_localized", kind: "message", T: T3 }, { no: 5, name: "navigable_storefront_application_id", kind: "message", T: T4 }, , ];
    const obj = { no: 6, name: "shop_collection_id", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).UInt64Value;
      }
    }
    items[5] = obj;
    items[6] = { no: 7, name: "gift_modal_destination", kind: "enum", T: T5 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.CTAButton", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { copy: "", buttonAction: 0, deeplinkSection: "", giftModalDestination: 0 };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1196;
      const result = tmpResult.reflectionMergePartial(this, obj, partialSettings);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          obj.copy = pos.string();
        } else if (2 === tmp5) {
          obj.buttonAction = pos.int32();
        } else if (3 === tmp5) {
          obj.deeplinkSection = pos.string();
        } else if (4 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.copyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.copyLocalized);
        } else if (5 === tmp5) {
          let UInt64Value2 = wrappers.UInt64Value;
          obj.navigableStorefrontApplicationId = UInt64Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.navigableStorefrontApplicationId);
        } else if (6 === tmp5) {
          let UInt64Value = wrappers.UInt64Value;
          obj.shopCollectionId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.shopCollectionId);
        } else if (7 === tmp5) {
          obj.giftModalDestination = pos.int32();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1196.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(copy, tag, writeUnknownFields) {
    if ("" !== copy.copy) {
      const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
      tagResult.string(copy.copy);
    }
    if (0 !== copy.buttonAction) {
      const tagResult1 = tag.tag(2, _mod1196.WireType.Varint);
      tagResult1.int32(copy.buttonAction);
    }
    if ("" !== copy.deeplinkSection) {
      const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
      tagResult2.string(copy.deeplinkSection);
    }
    if (copy.copyLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      const copyLocalized = copy.copyLocalized;
      const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(copyLocalized, tagResult3.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (copy.navigableStorefrontApplicationId) {
      const UInt64Value = wrappers.UInt64Value;
      internalBinaryWrite2 = UInt64Value.internalBinaryWrite;
      const navigableStorefrontApplicationId = copy.navigableStorefrontApplicationId;
      const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(navigableStorefrontApplicationId, tagResult4.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (copy.shopCollectionId) {
      const UInt64Value2 = wrappers.UInt64Value;
      internalBinaryWrite3 = UInt64Value2.internalBinaryWrite;
      const shopCollectionId = copy.shopCollectionId;
      const tagResult5 = tag.tag(6, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(shopCollectionId, tagResult5.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (0 !== copy.giftModalDestination) {
      const tagResult6 = tag.tag(7, _mod1196.WireType.Varint);
      tagResult6.int32(copy.giftModalDestination);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1196.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, copy, tag);
    }
    return tag;
  }
}
const prototype = CTAButton$Type.prototype;
let items = [{ no: 1, name: "copy", kind: "scalar", T: 9 }, { no: 2, name: "button_action", kind: "enum", T: T2 }, { no: 3, name: "deeplink_section", kind: "scalar", T: 9 }, { no: 4, name: "copy_localized", kind: "message", T: T3 }, { no: 5, name: "navigable_storefront_application_id", kind: "message", T: T4 }, , ];
const obj3 = { no: 6, name: "shop_collection_id", kind: "message", T };
class T {
  constructor() {
    return require("wrappers").UInt64Value;
  }
}
items[5] = obj3;
items[6] = { no: 7, name: "gift_modal_destination", kind: "enum", T: T5 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.CTAButton", items, tmp, T, CTAButton$Type, prototype, items, require, dependencyMap, ButtonAction, obj2, this, exports);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/cta_button.tsx");

export { ButtonAction };
export const GiftModalDestination = obj2;
export const CTAButton = prototype1;
