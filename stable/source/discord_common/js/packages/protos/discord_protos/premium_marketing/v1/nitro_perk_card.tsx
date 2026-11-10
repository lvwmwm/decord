// Module ID: 9664
// Function ID: 9665
// Name: nitro_perk_card
// Dependencies: [32, 1197, 9631, 9633, 9641, 2]

// Module 9664 (nitro_perk_card)
import _mod1197 from "module_1197" /* 1197 */;
import localized_string from "localized_string" /* 9631 */;
import cta_button from "cta_button" /* 9633 */;
import theme_aware_asset from "theme_aware_asset" /* 9641 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6;

let tmp;
const T2 = function T() {
  return require("localized_string").LocalizedString;
};
const T3 = function T() {
  return require("localized_string").LocalizedString;
};
const T4 = function T() {
  return require("cta_button").CTAButton;
};
const T5 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T6 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T7 = function T() {
  const items = ["discord_protos.premium_marketing.v1.NitroPerkCardPlacement", NitroPerkCardPlacement, "NITRO_PERK_CARD_PLACEMENT_"];
  return items;
};
const NitroPerkCardPlacement = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", MARKETING_PAGE: 1, [1]: "MARKETING_PAGE", NITRO_HOME: 2, [2]: "NITRO_HOME" };
const MessageType = _mod1197.MessageType;
class NitroPerkCard$Type extends MessageType {
  constructor() {
    let items = [, , , , , , , , ];
    const obj = { no: 1, name: "header_localized", kind: "message", T: T2 };
    items[0] = obj;
    items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "description_localized", kind: "message", T: T3 };
    items[3] = { no: 4, name: "description", kind: "scalar", T: 9 };
    items[4] = { no: 5, name: "button", kind: "message", T: T4 };
    items[5] = { no: 6, name: "background", kind: "message", T: T5 };
    items[6] = { no: 7, name: "foreground", kind: "message", T: T6 };
    const obj2 = { no: 8, name: "third_party_logo", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[4]).ThemeAwareAsset;
      }
    }
    items[7] = obj2;
    items[8] = { no: 9, name: "placements", kind: "enum", repeat: 1, T: T7 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.NitroPerkCard", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { header: "", description: "", placements: [] };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1197.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1197;
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
          let LocalizedString2 = localized_string.LocalizedString;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
        } else if (2 === tmp5) {
          obj.header = pos.string();
        } else if (3 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.descriptionLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.descriptionLocalized);
        } else if (4 === tmp5) {
          obj.description = pos.string();
        } else if (5 === tmp5) {
          let CTAButton = cta_button.CTAButton;
          obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
        } else if (6 === tmp5) {
          let ThemeAwareAsset3 = theme_aware_asset.ThemeAwareAsset;
          obj.background = ThemeAwareAsset3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.background);
        } else if (7 === tmp5) {
          let ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
          obj.foreground = ThemeAwareAsset2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.foreground);
        } else if (8 === tmp5) {
          let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
          obj.thirdPartyLogo = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.thirdPartyLogo);
        } else if (9 === tmp5) {
          if (tmp6 === _mod1197.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let placements = obj.placements;
                let arr = placements.push(pos.int32());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let placements1 = obj.placements;
            let arr2 = placements1.push(pos.int32());
          }
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
                onRead = _mod1197.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(headerLocalized, tag, writeUnknownFields) {
    let length;
    if (headerLocalized.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      headerLocalized = headerLocalized.headerLocalized;
      const tagResult = tag.tag(1, _mod1197.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(headerLocalized, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("" !== headerLocalized.header) {
      const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
      tagResult1.string(headerLocalized.header);
    }
    if (headerLocalized.descriptionLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString2.internalBinaryWrite;
      const descriptionLocalized = headerLocalized.descriptionLocalized;
      const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(descriptionLocalized, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("" !== headerLocalized.description) {
      const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
      tagResult3.string(headerLocalized.description);
    }
    if (headerLocalized.button) {
      const CTAButton = cta_button.CTAButton;
      internalBinaryWrite3 = CTAButton.internalBinaryWrite;
      const button = headerLocalized.button;
      const tagResult4 = tag.tag(5, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(button, tagResult4.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (headerLocalized.background) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite4 = ThemeAwareAsset.internalBinaryWrite;
      const background = headerLocalized.background;
      const tagResult5 = tag.tag(6, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(background, tagResult5.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (headerLocalized.foreground) {
      const ThemeAwareAsset2 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite5 = ThemeAwareAsset2.internalBinaryWrite;
      const foreground = headerLocalized.foreground;
      const tagResult6 = tag.tag(7, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(foreground, tagResult6.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (headerLocalized.thirdPartyLogo) {
      const ThemeAwareAsset3 = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite6 = ThemeAwareAsset3.internalBinaryWrite;
      const thirdPartyLogo = headerLocalized.thirdPartyLogo;
      const tagResult7 = tag.tag(8, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(thirdPartyLogo, tagResult7.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if (headerLocalized.placements.length) {
      const tagResult8 = tag.tag(9, _mod1197.WireType.LengthDelimited);
      tagResult8.fork();
      let num10 = 0;
      if (0 < headerLocalized.placements.length) {
        do {
          let int32Result = tag.int32(headerLocalized.placements[num10]);
          num10 = num10 + 1;
          length = headerLocalized.placements.length;
        } while (num10 < length);
      }
      const joined6 = tag.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1197.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, headerLocalized, tag);
    }
    return tag;
  }
}
const prototype = NitroPerkCard$Type.prototype;
let obj2 = { no: 1, name: "header_localized", kind: "message", T: T2 };
let items = [obj2, { no: 2, name: "header", kind: "scalar", T: 9 }, { no: 3, name: "description_localized", kind: "message", T: T3 }, { no: 4, name: "description", kind: "scalar", T: 9 }, { no: 5, name: "button", kind: "message", T: T4 }, { no: 6, name: "background", kind: "message", T: T5 }, { no: 7, name: "foreground", kind: "message", T: T6 }, , ];
const obj3 = { no: 8, name: "third_party_logo", kind: "message", T };
class T {
  constructor() {
    return require("theme_aware_asset").ThemeAwareAsset;
  }
}
items[7] = obj3;
items[8] = { no: 9, name: "placements", kind: "enum", repeat: 1, T: T7 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.NitroPerkCard", items, tmp, T, NitroPerkCard$Type, prototype, items, require, dependencyMap);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/nitro_perk_card.tsx");

export { NitroPerkCardPlacement };
export const NitroPerkCard = prototype1;
