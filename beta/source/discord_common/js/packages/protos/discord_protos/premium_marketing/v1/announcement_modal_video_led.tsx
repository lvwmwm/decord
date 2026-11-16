// Module ID: 9666
// Function ID: 9667
// Name: announcement_modal_video_led
// Dependencies: [32, 1197, 9640, 9630, 9667, 9632, 2]

// Module 9666 (announcement_modal_video_led)
import _mod1197 from "module_1197" /* 1197 */;
import localized_string from "localized_string" /* 9630 */;
import cta_button from "cta_button" /* 9632 */;
import theme_aware_asset from "theme_aware_asset" /* 9640 */;
import announcement_modal_perk_card from "announcement_modal_perk_card" /* 9667 */;
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
  return require("announcement_modal_perk_card").AnnouncementModalPerkCard;
};
const T6 = function T() {
  return require("localized_string").LocalizedString;
};
const MessageType = _mod1197.MessageType;
class AnnouncementModalVideoLed$Type extends MessageType {
  constructor() {
    const items = [, , , , , , , , , ];
    const obj = { no: 1, name: "asset", kind: "message", T: T2 };
    items[0] = obj;
    items[1] = { no: 2, name: "title_localized", kind: "message", T: T3 };
    items[2] = { no: 3, name: "body_localized", kind: "message", T: T4 };
    items[3] = { no: 4, name: "perk_cards", kind: "message", repeat: 1, T: T5 };
    const obj2 = { no: 5, name: "button", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[5]).CTAButton;
      }
    }
    items[4] = obj2;
    items[5] = { no: 6, name: "legalese_localized", kind: "message", T: T6 };
    items[6] = { no: 7, name: "terms_url", kind: "scalar", T: 9 };
    items[7] = { no: 8, name: "title", kind: "scalar", T: 9 };
    items[8] = { no: 9, name: "body", kind: "scalar", T: 9 };
    items[9] = { no: 10, name: "legalese", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalVideoLed", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { perkCards: [], termsUrl: "", title: "", body: "", legalese: "" };
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
    let num4 = 0;
    if (0 < asset.perkCards.length) {
      do {
        let AnnouncementModalPerkCard = announcement_modal_perk_card.AnnouncementModalPerkCard;
        internalBinaryWrite4 = AnnouncementModalPerkCard.internalBinaryWrite;
        let tmp12 = asset.perkCards[num4];
        let tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
        let internalBinaryWrite4Result = internalBinaryWrite4(tmp12, tagResult3.fork(), writeUnknownFields);
        let joined3 = internalBinaryWrite4Result.join();
        num4 = num4 + 1;
        length = asset.perkCards.length;
      } while (num4 < length);
    }
    if (asset.button) {
      const CTAButton = cta_button.CTAButton;
      internalBinaryWrite5 = CTAButton.internalBinaryWrite;
      const button = asset.button;
      const tagResult4 = tag.tag(5, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(button, tagResult4.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (asset.legaleseLocalized) {
      const LocalizedString3 = localized_string.LocalizedString;
      internalBinaryWrite6 = LocalizedString3.internalBinaryWrite;
      const legaleseLocalized = asset.legaleseLocalized;
      const tagResult5 = tag.tag(6, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(legaleseLocalized, tagResult5.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if ("" !== asset.termsUrl) {
      const tagResult6 = tag.tag(7, _mod1197.WireType.LengthDelimited);
      tagResult6.string(asset.termsUrl);
    }
    if ("" !== asset.title) {
      const tagResult7 = tag.tag(8, _mod1197.WireType.LengthDelimited);
      tagResult7.string(asset.title);
    }
    if ("" !== asset.body) {
      const tagResult8 = tag.tag(9, _mod1197.WireType.LengthDelimited);
      tagResult8.string(asset.body);
    }
    if ("" !== asset.legalese) {
      const tagResult9 = tag.tag(10, _mod1197.WireType.LengthDelimited);
      tagResult9.string(asset.legalese);
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
const prototype = AnnouncementModalVideoLed$Type.prototype;
let obj = { no: 1, name: "asset", kind: "message", T: T2 };
let items = [obj, { no: 2, name: "title_localized", kind: "message", T: T3 }, { no: 3, name: "body_localized", kind: "message", T: T4 }, { no: 4, name: "perk_cards", kind: "message", repeat: 1, T: T5 }, , , , , , ];
let obj2 = { no: 5, name: "button", kind: "message", T };
class T {
  constructor() {
    return require("cta_button").CTAButton;
  }
}
items[4] = obj2;
items[5] = { no: 6, name: "legalese_localized", kind: "message", T: T6 };
items[6] = { no: 7, name: "terms_url", kind: "scalar", T: 9 };
items[7] = { no: 8, name: "title", kind: "scalar", T: 9 };
items[8] = { no: 9, name: "body", kind: "scalar", T: 9 };
items[9] = { no: 10, name: "legalese", kind: "scalar", T: 9 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.AnnouncementModalVideoLed", items, tmp, T, AnnouncementModalVideoLed$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_video_led.tsx");

export const AnnouncementModalVideoLed = prototype1;
