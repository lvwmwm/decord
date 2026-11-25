// Module ID: 9168
// Function ID: 9169
// Name: orbs_confirmation_modal
// Dependencies: [32, 1196, 9131, 9127, 2]

// Module 9168 (orbs_confirmation_modal)
import _mod1196 from "module_1196" /* 1196 */;
import localized_string from "localized_string" /* 9127 */;
import theme_aware_asset from "theme_aware_asset" /* 9131 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3;

let tmp;
const T2 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const T3 = function T() {
  return require("localized_string").LocalizedString;
};
const MessageType = _mod1196.MessageType;
class OrbsConfirmationModal$Type extends MessageType {
  constructor() {
    const items = [, , , , ];
    const obj = { no: 1, name: "art", kind: "message", T: T2 };
    items[0] = obj;
    const obj2 = { no: 2, name: "header_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).LocalizedString;
      }
    }
    items[1] = obj2;
    items[2] = { no: 3, name: "header", kind: "scalar", T: 9 };
    items[3] = { no: 4, name: "subheader_localized", kind: "message", T: T3 };
    items[4] = { no: 5, name: "subheader", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.OrbsConfirmationModal", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { header: "", subheader: "" };
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
          obj.art = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.art);
        } else if (2 === tmp5) {
          let LocalizedString2 = localized_string.LocalizedString;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
        } else if (3 === tmp5) {
          obj.header = pos.string();
        } else if (4 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.subheaderLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.subheaderLocalized);
        } else if (5 === tmp5) {
          obj.subheader = pos.string();
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
  internalBinaryWrite(art, tag, writeUnknownFields) {
    if (art.art) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite = ThemeAwareAsset.internalBinaryWrite;
      art = art.art;
      const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(art, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (art.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString.internalBinaryWrite;
      const headerLocalized = art.headerLocalized;
      const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(headerLocalized, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("" !== art.header) {
      const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
      tagResult2.string(art.header);
    }
    if (art.subheaderLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite3 = LocalizedString2.internalBinaryWrite;
      const subheaderLocalized = art.subheaderLocalized;
      const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(subheaderLocalized, tagResult3.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if ("" !== art.subheader) {
      const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
      tagResult4.string(art.subheader);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1196.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, art, tag);
    }
    return tag;
  }
}
const prototype = OrbsConfirmationModal$Type.prototype;
let obj = { no: 1, name: "art", kind: "message", T: T2 };
let items = [obj, , , , ];
let obj2 = { no: 2, name: "header_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[1] = obj2;
items[2] = { no: 3, name: "header", kind: "scalar", T: 9 };
items[3] = { no: 4, name: "subheader_localized", kind: "message", T: T3 };
items[4] = { no: 5, name: "subheader", kind: "scalar", T: 9 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.OrbsConfirmationModal", items, tmp, T, OrbsConfirmationModal$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/orbs_confirmation_modal.tsx");

export const OrbsConfirmationModal = prototype1;
