// Module ID: 9077
// Function ID: 9078
// Name: shop_nagbar
// Dependencies: [32, 1197, 9058, 9057, 9056, 1227, 2]

// Module 9077 (shop_nagbar)
import _mod1197 from "module_1197" /* 1197 */;
import wrappers from "wrappers" /* 1227 */;
import localized_string from "localized_string" /* 9056 */;
import help_article from "help_article" /* 9057 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5;

let tmp;
const T2 = function T() {
  const items = ["discord_protos.premium_marketing.v1.ButtonAction", require("cta_button").ButtonAction, "BUTTON_ACTION_"];
  return items;
};
const T3 = function T() {
  return require("help_article").HelpArticle;
};
const T4 = function T() {
  return require("localized_string").LocalizedString;
};
const T5 = function T() {
  return require("localized_string").LocalizedString;
};
const T6 = function T() {
  return require("wrappers").UInt64Value;
};
const T7 = function T() {
  const items = ["discord_protos.premium_marketing.v1.GiftModalDestination", require("cta_button").GiftModalDestination, "GIFT_MODAL_DESTINATION_"];
  return items;
};
const MessageType = _mod1197.MessageType;
class ShopNagbar$Type extends MessageType {
  constructor() {
    let items = [{ no: 1, name: "body", kind: "scalar", T: 9 }, { no: 2, name: "cta_label", kind: "scalar", T: 9 }, { no: 3, name: "cta_action", kind: "enum", T: T2 }, { no: 4, name: "deeplink_section", kind: "scalar", T: 9 }, { no: 5, name: "help_article", kind: "message", T: T3 }, { no: 6, name: "body_localized", kind: "message", T: T4 }, { no: 7, name: "cta_label_localized", kind: "message", T: T5 }, { no: 8, name: "navigable_storefront_application_id", kind: "message", T: T6 }, , ];
    const obj = { no: 9, name: "shop_collection_id", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[5]).UInt64Value;
      }
    }
    items[8] = obj;
    items[9] = { no: 10, name: "gift_modal_destination", kind: "enum", T: T7 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.ShopNagbar", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "", giftModalDestination: 0 };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1197.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1197;
      const result = tmpResult.reflectionMergePartial(this, obj, partialSettings);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  internalBinaryWrite(body, tag, writeUnknownFields) {
    if ("" !== body.body) {
      const tagResult = tag.tag(1, _mod1197.WireType.LengthDelimited);
      tagResult.string(body.body);
    }
    if ("" !== body.ctaLabel) {
      const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
      tagResult1.string(body.ctaLabel);
    }
    if (0 !== body.ctaAction) {
      const tagResult2 = tag.tag(3, _mod1197.WireType.Varint);
      tagResult2.int32(body.ctaAction);
    }
    if ("" !== body.deeplinkSection) {
      const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
      tagResult3.string(body.deeplinkSection);
    }
    if (body.helpArticle) {
      const HelpArticle = help_article.HelpArticle;
      internalBinaryWrite = HelpArticle.internalBinaryWrite;
      const helpArticle = body.helpArticle;
      const tagResult4 = tag.tag(5, _mod1197.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(helpArticle, tagResult4.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (body.bodyLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString.internalBinaryWrite;
      const bodyLocalized = body.bodyLocalized;
      const tagResult5 = tag.tag(6, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(bodyLocalized, tagResult5.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (body.ctaLabelLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite3 = LocalizedString2.internalBinaryWrite;
      const ctaLabelLocalized = body.ctaLabelLocalized;
      const tagResult6 = tag.tag(7, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(ctaLabelLocalized, tagResult6.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (body.navigableStorefrontApplicationId) {
      const UInt64Value = wrappers.UInt64Value;
      internalBinaryWrite4 = UInt64Value.internalBinaryWrite;
      const navigableStorefrontApplicationId = body.navigableStorefrontApplicationId;
      const tagResult7 = tag.tag(8, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(navigableStorefrontApplicationId, tagResult7.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (body.shopCollectionId) {
      const UInt64Value2 = wrappers.UInt64Value;
      internalBinaryWrite5 = UInt64Value2.internalBinaryWrite;
      const shopCollectionId = body.shopCollectionId;
      const tagResult8 = tag.tag(9, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(shopCollectionId, tagResult8.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (0 !== body.giftModalDestination) {
      const tagResult9 = tag.tag(10, _mod1197.WireType.Varint);
      tagResult9.int32(body.giftModalDestination);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1197.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, body, tag);
    }
    return tag;
  }
}
const prototype = ShopNagbar$Type.prototype;
let items = [{ no: 1, name: "body", kind: "scalar", T: 9 }, { no: 2, name: "cta_label", kind: "scalar", T: 9 }, { no: 3, name: "cta_action", kind: "enum", T: T2 }, { no: 4, name: "deeplink_section", kind: "scalar", T: 9 }, { no: 5, name: "help_article", kind: "message", T: T3 }, { no: 6, name: "body_localized", kind: "message", T: T4 }, { no: 7, name: "cta_label_localized", kind: "message", T: T5 }, { no: 8, name: "navigable_storefront_application_id", kind: "message", T: T6 }, , ];
let obj = { no: 9, name: "shop_collection_id", kind: "message", T };
class T {
  constructor() {
    return require("wrappers").UInt64Value;
  }
}
items[8] = obj;
items[9] = { no: 10, name: "gift_modal_destination", kind: "enum", T: T7 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.ShopNagbar", items, tmp, T, ShopNagbar$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_nagbar.tsx");

export const ShopNagbar = prototype1;
