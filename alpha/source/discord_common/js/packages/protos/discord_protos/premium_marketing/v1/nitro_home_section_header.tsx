// Module ID: 9681
// Function ID: 9682
// Name: nitro_home_section_header
// Dependencies: [32, 1197, 9642, 9643, 2]

// Module 9681 (nitro_home_section_header)
import _mod1197 from "module_1197" /* 1197 */;
import localized_string from "localized_string" /* 9642 */;
import help_article from "help_article" /* 9643 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3;

let tmp;
const T2 = function T() {
  return require("localized_string").LocalizedString;
};
const T3 = function T() {
  return require("help_article").HelpArticle;
};
const MessageType = _mod1197.MessageType;
class NitroHomeSectionHeader$Type extends MessageType {
  constructor() {
    const items = [, , , , ];
    const obj = { no: 1, name: "header_localized", kind: "message", T: T2 };
    items[0] = obj;
    items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
    const obj2 = { no: 3, name: "subheader_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).LocalizedString;
      }
    }
    items[2] = obj2;
    items[3] = { no: 4, name: "subheader", kind: "scalar", T: 9 };
    items[4] = { no: 5, name: "help_article", kind: "message", T: T3 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.NitroHomeSectionHeader", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { header: "", subheader: "" };
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
          obj.subheaderLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.subheaderLocalized);
        } else if (4 === tmp5) {
          obj.subheader = pos.string();
        } else if (5 === tmp5) {
          let HelpArticle = help_article.HelpArticle;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
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
    if (headerLocalized.subheaderLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString2.internalBinaryWrite;
      const subheaderLocalized = headerLocalized.subheaderLocalized;
      const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(subheaderLocalized, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("" !== headerLocalized.subheader) {
      const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
      tagResult3.string(headerLocalized.subheader);
    }
    if (headerLocalized.helpArticle) {
      const HelpArticle = help_article.HelpArticle;
      internalBinaryWrite3 = HelpArticle.internalBinaryWrite;
      const helpArticle = headerLocalized.helpArticle;
      const tagResult4 = tag.tag(5, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(helpArticle, tagResult4.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
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
const prototype = NitroHomeSectionHeader$Type.prototype;
let obj = { no: 1, name: "header_localized", kind: "message", T: T2 };
let items = [obj, { no: 2, name: "header", kind: "scalar", T: 9 }, , , ];
let obj2 = { no: 3, name: "subheader_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[2] = obj2;
items[3] = { no: 4, name: "subheader", kind: "scalar", T: 9 };
items[4] = { no: 5, name: "help_article", kind: "message", T: T3 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.NitroHomeSectionHeader", items, tmp, T, NitroHomeSectionHeader$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/nitro_home_section_header.tsx");

export const NitroHomeSectionHeader = prototype1;
