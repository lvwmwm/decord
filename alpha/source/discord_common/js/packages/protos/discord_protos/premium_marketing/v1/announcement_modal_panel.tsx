// Module ID: 9601
// Function ID: 9602
// Name: announcement_modal_panel
// Dependencies: [32, 1197, 9573, 9563, 9565, 9600, 2]

// Module 9601 (announcement_modal_panel)
import _mod1197 from "module_1197" /* 1197 */;
import localized_string from "localized_string" /* 9563 */;
import cta_button from "cta_button" /* 9565 */;
import theme_aware_asset from "theme_aware_asset" /* 9573 */;
import announcement_modal_perk_card from "announcement_modal_perk_card" /* 9600 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6, internalBinaryWrite7;

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
  return require("cta_button").CTAButton;
};
const T7 = function T() {
  return require("announcement_modal_perk_card").AnnouncementModalPerkCard;
};
const MessageType = _mod1197.MessageType;
class AnnouncementModalPanel$Type extends MessageType {
  constructor() {
    const items = [, , , , , , , , , , , ];
    const obj = { no: 1, name: "asset", kind: "message", T: T2 };
    items[0] = obj;
    items[1] = { no: 2, name: "title_localized", kind: "message", T: T3 };
    items[2] = { no: 3, name: "body_localized", kind: "message", T: T4 };
    items[3] = { no: 4, name: "legalese_localized", kind: "message", T: T5 };
    items[4] = { no: 5, name: "terms_url", kind: "scalar", T: 9 };
    items[5] = { no: 6, name: "button", kind: "message", T: T6 };
    const obj2 = { no: 7, name: "perk_title_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    items[6] = obj2;
    items[7] = { no: 8, name: "perk_cards", kind: "message", repeat: 1, T: T7 };
    items[8] = { no: 9, name: "title", kind: "scalar", T: 9 };
    items[9] = { no: 10, name: "body", kind: "scalar", T: 9 };
    items[10] = { no: 11, name: "legalese", kind: "scalar", T: 9 };
    items[11] = { no: 12, name: "perk_title", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalPanel", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { termsUrl: "", perkCards: [], title: "", body: "", legalese: "", perkTitle: "" };
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
  internalBinaryWrite(asset, tag, writeUnknownFields) {
    let length;
    if (asset.asset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite = ThemeAwareAsset.internalBinaryWrite;
      asset = asset.asset;
      const tagResult = tag.tag(1, _mod1197.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(asset, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (asset.titleLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString.internalBinaryWrite;
      const titleLocalized = asset.titleLocalized;
      const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(titleLocalized, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (asset.bodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite3 = LocalizedString2.internalBinaryWrite;
      const bodyLocalized = asset.bodyLocalized;
      const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(bodyLocalized, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (asset.legaleseLocalized) {
      const LocalizedString3 = localized_string.LocalizedString;
      internalBinaryWrite4 = LocalizedString3.internalBinaryWrite;
      const legaleseLocalized = asset.legaleseLocalized;
      const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(legaleseLocalized, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if ("" !== asset.termsUrl) {
      const tagResult4 = tag.tag(5, _mod1197.WireType.LengthDelimited);
      tagResult4.string(asset.termsUrl);
    }
    if (asset.button) {
      const CTAButton = cta_button.CTAButton;
      internalBinaryWrite5 = CTAButton.internalBinaryWrite;
      const button = asset.button;
      const tagResult5 = tag.tag(6, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(button, tagResult5.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (asset.perkTitleLocalized) {
      const LocalizedString4 = localized_string.LocalizedString;
      internalBinaryWrite6 = LocalizedString4.internalBinaryWrite;
      const perkTitleLocalized = asset.perkTitleLocalized;
      const tagResult6 = tag.tag(7, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(perkTitleLocalized, tagResult6.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    let num8 = 0;
    if (0 < asset.perkCards.length) {
      do {
        let AnnouncementModalPerkCard = announcement_modal_perk_card.AnnouncementModalPerkCard;
        internalBinaryWrite7 = AnnouncementModalPerkCard.internalBinaryWrite;
        let tmp24 = asset.perkCards[num8];
        let tagResult7 = tag.tag(8, _mod1197.WireType.LengthDelimited);
        let internalBinaryWrite7Result = internalBinaryWrite7(tmp24, tagResult7.fork(), writeUnknownFields);
        let joined6 = internalBinaryWrite7Result.join();
        num8 = num8 + 1;
        length = asset.perkCards.length;
      } while (num8 < length);
    }
    if ("" !== asset.title) {
      const tagResult8 = tag.tag(9, _mod1197.WireType.LengthDelimited);
      tagResult8.string(asset.title);
    }
    if ("" !== asset.body) {
      const tagResult9 = tag.tag(10, _mod1197.WireType.LengthDelimited);
      tagResult9.string(asset.body);
    }
    if ("" !== asset.legalese) {
      const tagResult10 = tag.tag(11, _mod1197.WireType.LengthDelimited);
      tagResult10.string(asset.legalese);
    }
    if ("" !== asset.perkTitle) {
      const tagResult11 = tag.tag(12, _mod1197.WireType.LengthDelimited);
      tagResult11.string(asset.perkTitle);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1197.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, asset, tag);
    }
    return tag;
  }
}
const prototype = AnnouncementModalPanel$Type.prototype;
let obj = { no: 1, name: "asset", kind: "message", T: T2 };
let items = [obj, { no: 2, name: "title_localized", kind: "message", T: T3 }, { no: 3, name: "body_localized", kind: "message", T: T4 }, { no: 4, name: "legalese_localized", kind: "message", T: T5 }, { no: 5, name: "terms_url", kind: "scalar", T: 9 }, { no: 6, name: "button", kind: "message", T: T6 }, , , , , , ];
let obj2 = { no: 7, name: "perk_title_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[6] = obj2;
items[7] = { no: 8, name: "perk_cards", kind: "message", repeat: 1, T: T7 };
items[8] = { no: 9, name: "title", kind: "scalar", T: 9 };
items[9] = { no: 10, name: "body", kind: "scalar", T: 9 };
items[10] = { no: 11, name: "legalese", kind: "scalar", T: 9 };
items[11] = { no: 12, name: "perk_title", kind: "scalar", T: 9 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.AnnouncementModalPanel", items, tmp, T, AnnouncementModalPanel$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_panel.tsx");

export const AnnouncementModalPanel = prototype1;
