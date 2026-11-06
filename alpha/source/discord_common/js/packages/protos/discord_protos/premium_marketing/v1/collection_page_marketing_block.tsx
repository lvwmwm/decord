// Module ID: 9771
// Function ID: 9772
// Name: collection_page_marketing_block
// Dependencies: [32, 1197, 9737, 9747, 9739, 2]

// Module 9771 (collection_page_marketing_block)
import _mod1197 from "module_1197" /* 1197 */;
import localized_string from "localized_string" /* 9737 */;
import cta_button from "cta_button" /* 9739 */;
import theme_aware_asset from "theme_aware_asset" /* 9747 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3;

let tmp;
const T2 = function T() {
  return require("localized_string").LocalizedString;
};
const T3 = function T() {
  return require("cta_button").CTAButton;
};
const MessageType = _mod1197.MessageType;
class CollectionPageMarketingBlock$Type extends MessageType {
  constructor() {
    const items = [, , , ];
    const obj = { no: 1, name: "title_localized", kind: "message", T: T2 };
    items[0] = obj;
    items[1] = { no: 2, name: "title", kind: "scalar", T: 9 };
    const obj2 = { no: 3, name: "art", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).ThemeAwareAsset;
      }
    }
    items[2] = obj2;
    items[3] = { no: 4, name: "button", kind: "message", T: T3 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.CollectionPageMarketingBlock", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { title: "" };
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
          let LocalizedString = localized_string.LocalizedString;
          obj.titleLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.titleLocalized);
        } else if (2 === tmp5) {
          obj.title = pos.string();
        } else if (3 === tmp5) {
          let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
          obj.art = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.art);
        } else if (4 === tmp5) {
          let CTAButton = cta_button.CTAButton;
          obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
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
  internalBinaryWrite(titleLocalized, tag, writeUnknownFields) {
    if (titleLocalized.titleLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      titleLocalized = titleLocalized.titleLocalized;
      const tagResult = tag.tag(1, _mod1197.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(titleLocalized, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("" !== titleLocalized.title) {
      const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
      tagResult1.string(titleLocalized.title);
    }
    if (titleLocalized.art) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite2 = ThemeAwareAsset.internalBinaryWrite;
      const art = titleLocalized.art;
      const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(art, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (titleLocalized.button) {
      const CTAButton = cta_button.CTAButton;
      internalBinaryWrite3 = CTAButton.internalBinaryWrite;
      const button = titleLocalized.button;
      const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(button, tagResult3.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1197.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, titleLocalized, tag);
    }
    return tag;
  }
}
const prototype = CollectionPageMarketingBlock$Type.prototype;
let obj = { no: 1, name: "title_localized", kind: "message", T: T2 };
let items = [obj, { no: 2, name: "title", kind: "scalar", T: 9 }, , ];
let obj2 = { no: 3, name: "art", kind: "message", T };
class T {
  constructor() {
    return require("theme_aware_asset").ThemeAwareAsset;
  }
}
items[2] = obj2;
items[3] = { no: 4, name: "button", kind: "message", T: T3 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.CollectionPageMarketingBlock", items, tmp, T, CollectionPageMarketingBlock$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/collection_page_marketing_block.tsx");

export const CollectionPageMarketingBlock = prototype1;
