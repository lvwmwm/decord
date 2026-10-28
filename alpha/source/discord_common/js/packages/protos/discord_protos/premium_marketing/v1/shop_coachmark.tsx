// Module ID: 9588
// Function ID: 9589
// Name: shop_coachmark
// Dependencies: [32, 1209, 9566, 9556, 2]

// Module 9588 (shop_coachmark)
import _mod1209 from "module_1209" /* 1209 */;
import localized_string from "localized_string" /* 9556 */;
import theme_aware_asset from "theme_aware_asset" /* 9566 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6;

let tmp;
const T2 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T3 = function T() {
  return require("localized_string").LocalizedString;
};
const T4 = function T() {
  return require("localized_string").LocalizedString;
};
const T5 = function T() {
  return require("localized_string").LocalizedString;
};
const T6 = function T() {
  const items = ["discord_protos.premium_marketing.v1.ShopCoachmarkDisplayType", ShopCoachmarkDisplayType, "SHOP_COACHMARK_DISPLAY_TYPE_"];
  return items;
};
const T7 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const ShopCoachmarkDisplayType = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", SM_TILE: 1, [1]: "SM_TILE", MD_TILE: 2, [2]: "MD_TILE", LG_TILE: 3, [3]: "LG_TILE", VIDEO_TILE: 4, [4]: "VIDEO_TILE" };
const MessageType = _mod1209.MessageType;
class ShopCoachmark$Type extends MessageType {
  constructor() {
    let items = [, , , , , , , , , , , , , ];
    const obj = { no: 1, name: "asset", kind: "message", T: T2 };
    items[0] = obj;
    items[1] = { no: 2, name: "header_localized", kind: "message", T: T3 };
    items[2] = { no: 3, name: "body_localized", kind: "message", T: T4 };
    items[3] = { no: 4, name: "button_label_localized", kind: "message", T: T5 };
    items[4] = { no: 5, name: "display_type", kind: "enum", T: T6 };
    const obj2 = { no: 6, name: "badge_text_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    items[5] = obj2;
    items[6] = { no: 7, name: "badge_icon", kind: "scalar", T: 9 };
    items[7] = { no: 8, name: "badge_countdown_ends_at", kind: "scalar", T: 9 };
    items[8] = { no: 9, name: "show_hover_gradient", kind: "scalar", T: 8 };
    items[9] = { no: 10, name: "hover_background", kind: "message", T: T7 };
    items[10] = { no: 11, name: "header", kind: "scalar", T: 9 };
    items[11] = { no: 12, name: "body", kind: "scalar", T: 9 };
    items[12] = { no: 13, name: "button_label", kind: "scalar", T: 9 };
    items[13] = { no: 14, name: "badge_text", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.ShopCoachmark", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { displayType: 0, badgeIcon: "", badgeCountdownEndsAt: "", showHoverGradient: false, header: "", body: "", buttonLabel: "", badgeText: "" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1209.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1209;
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
  internalBinaryWrite(asset, tag, writeUnknownFields) {
    if (asset.asset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite = ThemeAwareAsset.internalBinaryWrite;
      asset = asset.asset;
      const tagResult = tag.tag(1, _mod1209.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(asset, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (asset.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString.internalBinaryWrite;
      const headerLocalized = asset.headerLocalized;
      const tagResult1 = tag.tag(2, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(headerLocalized, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (asset.bodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite3 = LocalizedString2.internalBinaryWrite;
      const bodyLocalized = asset.bodyLocalized;
      const tagResult2 = tag.tag(3, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(bodyLocalized, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (asset.buttonLabelLocalized) {
      const LocalizedString3 = localized_string.LocalizedString;
      internalBinaryWrite4 = LocalizedString3.internalBinaryWrite;
      const buttonLabelLocalized = asset.buttonLabelLocalized;
      const tagResult3 = tag.tag(4, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(buttonLabelLocalized, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (0 !== asset.displayType) {
      const tagResult4 = tag.tag(5, _mod1209.WireType.Varint);
      tagResult4.int32(asset.displayType);
    }
    if (asset.badgeTextLocalized) {
      const LocalizedString4 = localized_string.LocalizedString;
      internalBinaryWrite5 = LocalizedString4.internalBinaryWrite;
      const badgeTextLocalized = asset.badgeTextLocalized;
      const tagResult5 = tag.tag(6, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(badgeTextLocalized, tagResult5.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if ("" !== asset.badgeIcon) {
      const tagResult6 = tag.tag(7, _mod1209.WireType.LengthDelimited);
      tagResult6.string(asset.badgeIcon);
    }
    if ("" !== asset.badgeCountdownEndsAt) {
      const tagResult7 = tag.tag(8, _mod1209.WireType.LengthDelimited);
      tagResult7.string(asset.badgeCountdownEndsAt);
    }
    if (false !== asset.showHoverGradient) {
      const tagResult8 = tag.tag(9, _mod1209.WireType.Varint);
      tagResult8.bool(asset.showHoverGradient);
    }
    if (asset.hoverBackground) {
      const ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite6 = ThemeAwareAsset2.internalBinaryWrite;
      const hoverBackground = asset.hoverBackground;
      const tagResult9 = tag.tag(10, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(hoverBackground, tagResult9.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if ("" !== asset.header) {
      const tagResult10 = tag.tag(11, _mod1209.WireType.LengthDelimited);
      tagResult10.string(asset.header);
    }
    if ("" !== asset.body) {
      const tagResult11 = tag.tag(12, _mod1209.WireType.LengthDelimited);
      tagResult11.string(asset.body);
    }
    if ("" !== asset.buttonLabel) {
      const tagResult12 = tag.tag(13, _mod1209.WireType.LengthDelimited);
      tagResult12.string(asset.buttonLabel);
    }
    if ("" !== asset.badgeText) {
      const tagResult13 = tag.tag(14, _mod1209.WireType.LengthDelimited);
      tagResult13.string(asset.badgeText);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1209.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, asset, tag);
    }
    return tag;
  }
}
const prototype = ShopCoachmark$Type.prototype;
let obj2 = { no: 1, name: "asset", kind: "message", T: T2 };
let items = [obj2, { no: 2, name: "header_localized", kind: "message", T: T3 }, { no: 3, name: "body_localized", kind: "message", T: T4 }, { no: 4, name: "button_label_localized", kind: "message", T: T5 }, { no: 5, name: "display_type", kind: "enum", T: T6 }, , , , , , , , , ];
const obj3 = { no: 6, name: "badge_text_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[5] = obj3;
items[6] = { no: 7, name: "badge_icon", kind: "scalar", T: 9 };
items[7] = { no: 8, name: "badge_countdown_ends_at", kind: "scalar", T: 9 };
items[8] = { no: 9, name: "show_hover_gradient", kind: "scalar", T: 8 };
items[9] = { no: 10, name: "hover_background", kind: "message", T: T7 };
items[10] = { no: 11, name: "header", kind: "scalar", T: 9 };
items[11] = { no: 12, name: "body", kind: "scalar", T: 9 };
items[12] = { no: 13, name: "button_label", kind: "scalar", T: 9 };
items[13] = { no: 14, name: "badge_text", kind: "scalar", T: 9 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.ShopCoachmark", items, tmp, T, ShopCoachmark$Type, prototype, items, require, dependencyMap);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_coachmark.tsx");

export { ShopCoachmarkDisplayType };
export const ShopCoachmark = prototype1;
