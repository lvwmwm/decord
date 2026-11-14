// Module ID: 9665
// Function ID: 9666
// Name: game_exit_panel
// Dependencies: [32, 1197, 9630, 9632, 9640, 2]

// Module 9665 (game_exit_panel)
import _mod1197 from "module_1197" /* 1197 */;
import localized_string from "localized_string" /* 9630 */;
import cta_button from "cta_button" /* 9632 */;
import theme_aware_asset from "theme_aware_asset" /* 9640 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3;

let tmp;
const T2 = function T() {
  return require("localized_string").LocalizedString;
};
const T3 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const MessageType = _mod1197.MessageType;
class GameExitPanel$Type extends MessageType {
  constructor() {
    const items = [{ no: 6, name: "trigger_application_id", kind: "scalar", T: 9 }, { no: 2, name: "body_localized", kind: "message", T: T2 }, { no: 3, name: "body", kind: "scalar", T: 9 }, , ];
    const obj = { no: 4, name: "cta", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).CTAButton;
      }
    }
    items[3] = obj;
    items[4] = { no: 5, name: "image", kind: "message", T: T3 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.GameExitPanel", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { triggerApplicationId: "", body: "" };
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
        if (6 === tmp5) {
          obj.triggerApplicationId = pos.string();
        } else if (2 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
        } else if (3 === tmp5) {
          obj.body = pos.string();
        } else if (4 === tmp5) {
          let CTAButton = cta_button.CTAButton;
          obj.cta = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.cta);
        } else if (5 === tmp5) {
          let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
          obj.image = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.image);
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
  internalBinaryWrite(triggerApplicationId, tag, writeUnknownFields) {
    if ("" !== triggerApplicationId.triggerApplicationId) {
      const tagResult = tag.tag(6, _mod1197.WireType.LengthDelimited);
      tagResult.string(triggerApplicationId.triggerApplicationId);
    }
    if (triggerApplicationId.bodyLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      const bodyLocalized = triggerApplicationId.bodyLocalized;
      const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(bodyLocalized, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("" !== triggerApplicationId.body) {
      const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
      tagResult2.string(triggerApplicationId.body);
    }
    if (triggerApplicationId.cta) {
      const CTAButton = cta_button.CTAButton;
      internalBinaryWrite2 = CTAButton.internalBinaryWrite;
      const cta = triggerApplicationId.cta;
      const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(cta, tagResult3.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (triggerApplicationId.image) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite3 = ThemeAwareAsset.internalBinaryWrite;
      const image = triggerApplicationId.image;
      const tagResult4 = tag.tag(5, _mod1197.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(image, tagResult4.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1197.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, triggerApplicationId, tag);
    }
    return tag;
  }
}
const prototype = GameExitPanel$Type.prototype;
let items = [{ no: 6, name: "trigger_application_id", kind: "scalar", T: 9 }, { no: 2, name: "body_localized", kind: "message", T: T2 }, { no: 3, name: "body", kind: "scalar", T: 9 }, , ];
let obj = { no: 4, name: "cta", kind: "message", T };
class T {
  constructor() {
    return require("cta_button").CTAButton;
  }
}
items[3] = obj;
items[4] = { no: 5, name: "image", kind: "message", T: T3 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.GameExitPanel", items, tmp, T, GameExitPanel$Type, prototype, items);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/game_exit_panel.tsx");

export const GameExitPanel = prototype1;
