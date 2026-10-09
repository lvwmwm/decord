// Module ID: 9107
// Function ID: 9108
// Name: help_article
// Dependencies: [32, 1210, 9106, 2]

// Module 9107 (help_article)
import _mod1210 from "module_1210" /* 1210 */;
import localized_string from "localized_string" /* 9106 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let internalBinaryWrite;

let tmp;
function T() {
  return localized_string.LocalizedString;
}
const MessageType = _mod1210.MessageType;
class HelpArticle$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "link_text", kind: "scalar", T: 9 }, { no: 3, name: "link_text_localized", kind: "message", T }];
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.HelpArticle", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { id: "", linkText: "" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1210.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1210;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
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
          obj.id = pos.string();
        } else if (2 === tmp5) {
          obj.linkText = pos.string();
        } else if (3 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.linkTextLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.linkTextLocalized);
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
                onRead = _mod1210.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(id, tag, writeUnknownFields) {
    if ("" !== id.id) {
      const tagResult = tag.tag(1, _mod1210.WireType.LengthDelimited);
      tagResult.string(id.id);
    }
    if ("" !== id.linkText) {
      const tagResult1 = tag.tag(2, _mod1210.WireType.LengthDelimited);
      tagResult1.string(id.linkText);
    }
    if (id.linkTextLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      const linkTextLocalized = id.linkTextLocalized;
      const tagResult2 = tag.tag(3, _mod1210.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(linkTextLocalized, tagResult2.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1210.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, id, tag);
    }
    return tag;
  }
}
const prototype = HelpArticle$Type.prototype;
let items = [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "link_text", kind: "scalar", T: 9 }, { no: 3, name: "link_text_localized", kind: "message", T }];
const prototype1 = new prototype("discord_protos.premium_marketing.v1.HelpArticle", items, tmp, HelpArticle$Type, prototype, items, require);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/help_article.tsx");

export const HelpArticle = prototype1;
