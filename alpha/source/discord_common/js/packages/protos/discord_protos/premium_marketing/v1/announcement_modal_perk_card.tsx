// Module ID: 9165
// Function ID: 9166
// Name: announcement_modal_perk_card
// Dependencies: [32, 1196, 9131, 9127, 2]

// Module 9165 (announcement_modal_perk_card)
import _mod1196 from "module_1196" /* 1196 */;
import localized_string from "localized_string" /* 9127 */;
import theme_aware_asset from "theme_aware_asset" /* 9131 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3;

let tmp;
let tmp2;
let tmp3;
const T2 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T3 = function T() {
  return require("localized_string").LocalizedString;
};
const T4 = function T() {
  const items = ["discord_protos.premium_marketing.v1.AnnouncementModalPerkIcon", AnnouncementModalPerkIcon, "ANNOUNCEMENT_MODAL_PERK_ICON_"];
  return items;
};
const T5 = function T() {
  return require("localized_string").LocalizedString;
};
const AnnouncementModalPerkIcon = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", NITRO_WHEEL: 1, [1]: "NITRO_WHEEL", XBOX: 2, [2]: "XBOX", GAME_CONTROLLER: 3, [3]: "GAME_CONTROLLER", ORBS: 4, [4]: "ORBS", SHOP: 5, [5]: "SHOP", GIFT: 6, [6]: "GIFT", BOOST_GEM: 7, [7]: "BOOST_GEM", REACTION: 8, [8]: "REACTION", STICKER: 9, [9]: "STICKER", UPLOAD: 10, [10]: "UPLOAD", PAINT_PALETTE: 11, [11]: "PAINT_PALETTE", SCREEN_STREAM: 12, [12]: "SCREEN_STREAM", SOUNDBOARD: 13, [13]: "SOUNDBOARD", SPARKLES: 14, [14]: "SPARKLES" };
const MessageType = _mod1196.MessageType;
class AnnouncementModalPerkCard$Type extends MessageType {
  constructor() {
    const items = [, , , , ];
    const obj = { no: 1, name: "asset", kind: "message", T: T2 };
    items[0] = obj;
    const obj2 = { no: 2, name: "title_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    items[1] = obj2;
    items[2] = { no: 3, name: "body_localized", kind: "message", T: T3 };
    items[3] = { no: 4, name: "title", kind: "scalar", T: 9 };
    items[4] = { no: 5, name: "body", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalPerkCard", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { title: "", body: "" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
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
          let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
        } else if (2 === tmp5) {
          let LocalizedString2 = localized_string.LocalizedString;
          obj.titleLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.titleLocalized);
        } else if (3 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
        } else if (4 === tmp5) {
          obj.title = pos.string();
        } else if (5 === tmp5) {
          obj.body = pos.string();
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
  internalBinaryWrite(asset, tag, writeUnknownFields) {
    if (asset.asset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite = ThemeAwareAsset.internalBinaryWrite;
      asset = asset.asset;
      const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(asset, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (asset.titleLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString.internalBinaryWrite;
      const titleLocalized = asset.titleLocalized;
      const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(titleLocalized, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (asset.bodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite3 = LocalizedString2.internalBinaryWrite;
      const bodyLocalized = asset.bodyLocalized;
      const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(bodyLocalized, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if ("" !== asset.title) {
      const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
      tagResult3.string(asset.title);
    }
    if ("" !== asset.body) {
      const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
      tagResult4.string(asset.body);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1196.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, asset, tag);
    }
    return tag;
  }
}
const prototype = AnnouncementModalPerkCard$Type.prototype;
let obj2 = { no: 1, name: "asset", kind: "message", T: T2 };
let items = [
  obj2,
  {
    no: 2,
    name: "title_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    }
  },
  { no: 3, name: "body_localized", kind: "message", T: T3 },
  { no: 4, name: "title", kind: "scalar", T: 9 },
  { no: 5, name: "body", kind: "scalar", T: 9 }
];
let tmp4 = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalPerkCard", items, tmp3, "create", "internalBinaryRead", tmp2, "internalBinaryWrite", AnnouncementModalPerkCard$Type, tmp, require);
const MessageType2 = _mod1196.MessageType;
class AnnouncementModalIconPerkCard$Type extends MessageType2 {
  constructor() {
    let items = [, , , , ];
    const obj = { no: 6, name: "icon", kind: "enum", T: T4 };
    items[0] = obj;
    const obj2 = { no: 2, name: "title_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    items[1] = obj2;
    items[2] = { no: 3, name: "body_localized", kind: "message", T: T5 };
    items[3] = { no: 4, name: "title", kind: "scalar", T: 9 };
    items[4] = { no: 5, name: "body", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.AnnouncementModalIconPerkCard", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { icon: 0, title: "", body: "" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
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
        if (6 === tmp5) {
          obj.icon = pos.int32();
        } else if (2 === tmp5) {
          let LocalizedString2 = localized_string.LocalizedString;
          obj.titleLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.titleLocalized);
        } else if (3 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
        } else if (4 === tmp5) {
          obj.title = pos.string();
        } else if (5 === tmp5) {
          obj.body = pos.string();
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
  internalBinaryWrite(icon, tag, writeUnknownFields) {
    if (0 !== icon.icon) {
      const tagResult = tag.tag(6, _mod1196.WireType.Varint);
      tagResult.int32(icon.icon);
    }
    if (icon.titleLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      const titleLocalized = icon.titleLocalized;
      const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(titleLocalized, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (icon.bodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString2.internalBinaryWrite;
      const bodyLocalized = icon.bodyLocalized;
      const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(bodyLocalized, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("" !== icon.title) {
      const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
      tagResult3.string(icon.title);
    }
    if ("" !== icon.body) {
      const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
      tagResult4.string(icon.body);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1196.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, icon, tag);
    }
    return tag;
  }
}
const prototype2 = AnnouncementModalIconPerkCard$Type.prototype;
const items1 = [, , , , ];
const obj3 = { no: 6, name: "icon", kind: "enum", T: T4 };
items1[0] = obj3;
const obj4 = { no: 2, name: "title_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items1[1] = obj4;
items1[2] = { no: 3, name: "body_localized", kind: "message", T: T5 };
items1[3] = { no: 4, name: "title", kind: "scalar", T: 9 };
items1[4] = { no: 5, name: "body", kind: "scalar", T: 9 };
const tmp6 = new "internalBinaryWrite"("discord_protos.premium_marketing.v1.AnnouncementModalIconPerkCard", items1, tmp3, "create", T, AnnouncementModalIconPerkCard$Type, "internalBinaryWrite", items1, undefined, require, dependencyMap, AnnouncementModalPerkIcon);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_perk_card.tsx");

export { AnnouncementModalPerkIcon };
export const AnnouncementModalPerkCard = tmp4;
export const AnnouncementModalIconPerkCard = tmp6;
