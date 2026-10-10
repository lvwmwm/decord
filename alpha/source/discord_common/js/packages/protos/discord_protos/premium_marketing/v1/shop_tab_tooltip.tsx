// Module ID: 9153
// Function ID: 9154
// Name: shop_tab_tooltip
// Dependencies: [32, 1210, 9136, 9126, 2]

// Module 9153 (shop_tab_tooltip)
import _mod1210 from "module_1210" /* 1210 */;
import localized_string from "localized_string" /* 9126 */;
import theme_aware_asset from "theme_aware_asset" /* 9136 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5;

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
  return require("theme_aware_asset").ThemeAwareAsset;
};
const MessageType = _mod1210.MessageType;
class ShopTabTooltip$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "header", kind: "scalar", T: 9 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "asset", kind: "message", T: T2 }, { no: 4, name: "header_localized", kind: "message", T: T3 }, { no: 5, name: "body_localized", kind: "message", T: T4 }, { no: 6, name: "badge_text", kind: "scalar", T: 9 }, , , , , ];
    const obj = { no: 7, name: "badge_text_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    items[6] = obj;
    items[7] = { no: 8, name: "badge_icon", kind: "scalar", T: 9 };
    items[8] = { no: 9, name: "badge_countdown_ends_at", kind: "scalar", T: 9 };
    items[9] = { no: 10, name: "show_hover_gradient", kind: "scalar", T: 8 };
    items[10] = { no: 11, name: "hover_background", kind: "message", T: T5 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.ShopTabTooltip", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { header: "", body: "", badgeText: "", badgeIcon: "", badgeCountdownEndsAt: "", showHoverGradient: false };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1210.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1210;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
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
  internalBinaryWrite(header, tag, writeUnknownFields) {
    if ("" !== header.header) {
      const tagResult = tag.tag(1, _mod1210.WireType.LengthDelimited);
      tagResult.string(header.header);
    }
    if ("" !== header.body) {
      const tagResult1 = tag.tag(2, _mod1210.WireType.LengthDelimited);
      tagResult1.string(header.body);
    }
    if (header.asset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite = ThemeAwareAsset.internalBinaryWrite;
      const asset = header.asset;
      const tagResult2 = tag.tag(3, _mod1210.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(asset, tagResult2.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (header.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString.internalBinaryWrite;
      const headerLocalized = header.headerLocalized;
      const tagResult3 = tag.tag(4, _mod1210.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(headerLocalized, tagResult3.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (header.bodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite3 = LocalizedString2.internalBinaryWrite;
      const bodyLocalized = header.bodyLocalized;
      const tagResult4 = tag.tag(5, _mod1210.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(bodyLocalized, tagResult4.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if ("" !== header.badgeText) {
      const tagResult5 = tag.tag(6, _mod1210.WireType.LengthDelimited);
      tagResult5.string(header.badgeText);
    }
    if (header.badgeTextLocalized) {
      const LocalizedString3 = localized_string.LocalizedString;
      internalBinaryWrite4 = LocalizedString3.internalBinaryWrite;
      const badgeTextLocalized = header.badgeTextLocalized;
      const tagResult6 = tag.tag(7, _mod1210.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(badgeTextLocalized, tagResult6.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if ("" !== header.badgeIcon) {
      const tagResult7 = tag.tag(8, _mod1210.WireType.LengthDelimited);
      tagResult7.string(header.badgeIcon);
    }
    if ("" !== header.badgeCountdownEndsAt) {
      const tagResult8 = tag.tag(9, _mod1210.WireType.LengthDelimited);
      tagResult8.string(header.badgeCountdownEndsAt);
    }
    if (false !== header.showHoverGradient) {
      const tagResult9 = tag.tag(10, _mod1210.WireType.Varint);
      tagResult9.bool(header.showHoverGradient);
    }
    if (header.hoverBackground) {
      const ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite5 = ThemeAwareAsset2.internalBinaryWrite;
      const hoverBackground = header.hoverBackground;
      const tagResult10 = tag.tag(11, _mod1210.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(hoverBackground, tagResult10.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1210.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, header, tag);
    }
    return tag;
  }
}
const prototype = ShopTabTooltip$Type.prototype;
let items = [{ no: 1, name: "header", kind: "scalar", T: 9 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "asset", kind: "message", T: T2 }, { no: 4, name: "header_localized", kind: "message", T: T3 }, { no: 5, name: "body_localized", kind: "message", T: T4 }, { no: 6, name: "badge_text", kind: "scalar", T: 9 }, , , , , ];
let obj = { no: 7, name: "badge_text_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[6] = obj;
items[7] = { no: 8, name: "badge_icon", kind: "scalar", T: 9 };
items[8] = { no: 9, name: "badge_countdown_ends_at", kind: "scalar", T: 9 };
items[9] = { no: 10, name: "show_hover_gradient", kind: "scalar", T: 8 };
items[10] = { no: 11, name: "hover_background", kind: "message", T: T5 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.ShopTabTooltip", items, tmp, T, ShopTabTooltip$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/shop_tab_tooltip.tsx");

export const ShopTabTooltip = prototype1;
