// Module ID: 9150
// Function ID: 9151
// Name: admin_editor_test_component
// Dependencies: [32, 1196, 9127, 9131, 9128, 9129, 9137, 9132, 2]

// Module 9150 (admin_editor_test_component)
import _mod1196 from "module_1196" /* 1196 */;
import localized_string from "localized_string" /* 9127 */;
import help_article from "help_article" /* 9128 */;
import cta_button from "cta_button" /* 9129 */;
import theme_aware_asset from "theme_aware_asset" /* 9131 */;
import tab_gradient_colors from "tab_gradient_colors" /* 9132 */;
import gradient from "gradient" /* 9137 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6, internalBinaryWrite7, internalBinaryWrite8, internalBinaryWrite9;

let tmp;
let tmp2;
function T() {
  return require("localized_string").LocalizedString;
}
const T2 = function T() {
  return require("theme_aware_asset").ThemeAwareAsset;
};
const AdminEditorTestSelectOption = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", FIRST: 1, [1]: "FIRST", SECOND: 2, [2]: "SECOND" };
const MessageType = _mod1196.MessageType;
class AdminEditorTestComponent$Type extends MessageType {
  constructor() {
    let items = [
      { no: 1, name: "deprecated_field", kind: "scalar", T: 9 },
      {
        no: 2,
        name: "localized_text_field",
        kind: "message",
        T() {
          return require("localized_string").LocalizedString;
        }
      },
      { no: 3, name: "plain_text_field", kind: "scalar", T: 9 },
      {
        no: 4,
        name: "textarea_field",
        kind: "message",
        T() {
          return require("localized_string").LocalizedString;
        }
      },
      { no: 5, name: "checkbox_field", kind: "scalar", T: 8 },
      { no: 6, name: "asset_field", kind: "scalar", T: 9 },
      {
        no: 7,
        name: "themed_asset_field",
        kind: "message",
        T() {
          return require("theme_aware_asset").ThemeAwareAsset;
        }
      },
      {
        no: 8,
        name: "help_article_field",
        kind: "message",
        T() {
          return require("help_article").HelpArticle;
        }
      },
      {
        no: 9,
        name: "cta_field",
        kind: "message",
        T() {
          return require("cta_button").CTAButton;
        }
      },
      {
        no: 10,
        name: "gradient_field",
        kind: "message",
        T() {
          return require("gradient").Gradient;
        }
      },
      {
        no: 11,
        name: "select_field",
        kind: "enum",
        T() {
          const items = ["discord_protos.premium_marketing.v1.AdminEditorTestSelectOption", AdminEditorTestSelectOption, "ADMIN_EDITOR_TEST_SELECT_OPTION_"];
          return items;
        }
      },
      {
        no: 12,
        name: "multi_select_field",
        kind: "enum",
        repeat: 1,
        T() {
          const items = ["discord_protos.premium_marketing.v1.AdminEditorTestSelectOption", AdminEditorTestSelectOption, "ADMIN_EDITOR_TEST_SELECT_OPTION_"];
          return items;
        }
      },
      {
        no: 13,
        name: "list_field",
        kind: "message",
        repeat: 1,
        T() {
          return internalBinaryWrite;
        }
      },
    ,
    ,

    ];
    const obj = { no: 14, name: "tab_gradient_colors_field", kind: "message", T };
    class T {
      constructor() {
        return require("tab_gradient_colors").TabGradientColors;
      }
    }
    items[13] = obj;
    items[14] = { no: 15, name: "shown_when_checkbox_field", kind: "scalar", T: 8 };
    items[15] = {
      no: 16,
      name: "shown_when_field",
      kind: "message",
      T() {
        return require("tab_gradient_colors").TabGradientColors;
      }
    };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.AdminEditorTestComponent", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { deprecatedField: "", plainTextField: "", checkboxField: false, assetField: "", selectField: 0, multiSelectField: [], listField: [], shownWhenCheckboxField: false };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1196;
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
  internalBinaryWrite(deprecatedField, tag, writeUnknownFields) {
    let length;
    let length2;
    if ("" !== deprecatedField.deprecatedField) {
      const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
      tagResult.string(deprecatedField.deprecatedField);
    }
    if (deprecatedField.localizedTextField) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      const localizedTextField = deprecatedField.localizedTextField;
      const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(localizedTextField, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("" !== deprecatedField.plainTextField) {
      const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
      tagResult2.string(deprecatedField.plainTextField);
    }
    if (deprecatedField.textareaField) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString2.internalBinaryWrite;
      const textareaField = deprecatedField.textareaField;
      const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(textareaField, tagResult3.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (false !== deprecatedField.checkboxField) {
      const tagResult4 = tag.tag(5, _mod1196.WireType.Varint);
      tagResult4.bool(deprecatedField.checkboxField);
    }
    if ("" !== deprecatedField.assetField) {
      const tagResult5 = tag.tag(6, _mod1196.WireType.LengthDelimited);
      tagResult5.string(deprecatedField.assetField);
    }
    if (deprecatedField.themedAssetField) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite3 = ThemeAwareAsset.internalBinaryWrite;
      const themedAssetField = deprecatedField.themedAssetField;
      const tagResult6 = tag.tag(7, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(themedAssetField, tagResult6.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (deprecatedField.helpArticleField) {
      const HelpArticle = help_article.HelpArticle;
      internalBinaryWrite4 = HelpArticle.internalBinaryWrite;
      const helpArticleField = deprecatedField.helpArticleField;
      const tagResult7 = tag.tag(8, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(helpArticleField, tagResult7.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (deprecatedField.ctaField) {
      const CTAButton = cta_button.CTAButton;
      internalBinaryWrite5 = CTAButton.internalBinaryWrite;
      const ctaField = deprecatedField.ctaField;
      const tagResult8 = tag.tag(9, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(ctaField, tagResult8.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (deprecatedField.gradientField) {
      const Gradient = gradient.Gradient;
      internalBinaryWrite6 = Gradient.internalBinaryWrite;
      const gradientField = deprecatedField.gradientField;
      const tagResult9 = tag.tag(10, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(gradientField, tagResult9.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if (0 !== deprecatedField.selectField) {
      const tagResult10 = tag.tag(11, _mod1196.WireType.Varint);
      tagResult10.int32(deprecatedField.selectField);
    }
    if (deprecatedField.multiSelectField.length) {
      const tagResult11 = tag.tag(12, _mod1196.WireType.LengthDelimited);
      tagResult11.fork();
      let num14 = 0;
      if (0 < deprecatedField.multiSelectField.length) {
        do {
          let int32Result1 = tag.int32(deprecatedField.multiSelectField[num14]);
          num14 = num14 + 1;
          length = deprecatedField.multiSelectField.length;
        } while (num14 < length);
      }
      const joined6 = tag.join();
    }
    let num15 = 0;
    if (0 < deprecatedField.listField.length) {
      do {
        internalBinaryWrite7 = internalBinaryWrite.internalBinaryWrite;
        let tmp40 = deprecatedField.listField[num15];
        let tagResult12 = tag.tag(13, _mod1196.WireType.LengthDelimited);
        let internalBinaryWrite7Result = internalBinaryWrite7(tmp40, tagResult12.fork(), writeUnknownFields);
        let joined7 = internalBinaryWrite7Result.join();
        num15 = num15 + 1;
        length2 = deprecatedField.listField.length;
      } while (num15 < length2);
    }
    if (deprecatedField.tabGradientColorsField) {
      const TabGradientColors = tab_gradient_colors.TabGradientColors;
      internalBinaryWrite8 = TabGradientColors.internalBinaryWrite;
      const tabGradientColorsField = deprecatedField.tabGradientColorsField;
      const tagResult13 = tag.tag(14, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite8Result = internalBinaryWrite8(tabGradientColorsField, tagResult13.fork(), writeUnknownFields);
      const joined8 = internalBinaryWrite8Result.join();
    }
    if (false !== deprecatedField.shownWhenCheckboxField) {
      const tagResult14 = tag.tag(15, _mod1196.WireType.Varint);
      tagResult14.bool(deprecatedField.shownWhenCheckboxField);
    }
    if (deprecatedField.shownWhenField) {
      const TabGradientColors2 = tab_gradient_colors.TabGradientColors;
      internalBinaryWrite9 = TabGradientColors2.internalBinaryWrite;
      const shownWhenField = deprecatedField.shownWhenField;
      const tagResult15 = tag.tag(16, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite9Result = internalBinaryWrite9(shownWhenField, tagResult15.fork(), writeUnknownFields);
      const joined9 = internalBinaryWrite9Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1196.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, deprecatedField, tag);
    }
    return tag;
  }
}
const prototype = AdminEditorTestComponent$Type.prototype;
const adminEditorTestComponentType = new AdminEditorTestComponent$Type();
const MessageType2 = _mod1196.MessageType;
class AdminEditorTestListItem$Type extends MessageType2 {
  constructor() {
    const items = [, , ];
    const obj = { no: 1, name: "text_localized", kind: "message", T };
    items[0] = obj;
    items[1] = { no: 2, name: "asset", kind: "message", T: T2 };
    items[2] = { no: 3, name: "text", kind: "scalar", T: 9 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.AdminEditorTestListItem", items, new.target);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { text: "" };
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
          let LocalizedString = localized_string.LocalizedString;
          obj.textLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.textLocalized);
        } else if (2 === tmp5) {
          let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
        } else if (3 === tmp5) {
          obj.text = pos.string();
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
  internalBinaryWrite(textLocalized, tag, writeUnknownFields) {
    if (textLocalized.textLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      textLocalized = textLocalized.textLocalized;
      const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(textLocalized, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (textLocalized.asset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite2 = ThemeAwareAsset.internalBinaryWrite;
      const asset = textLocalized.asset;
      const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(asset, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("" !== textLocalized.text) {
      const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
      tagResult2.string(textLocalized.text);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1196.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, textLocalized, tag);
    }
    return tag;
  }
}
const prototype2 = AdminEditorTestListItem$Type.prototype;
let obj2 = { no: 1, name: "text_localized", kind: "message", T };
let items = [obj2, { no: 2, name: "asset", kind: "message", T: T2 }, { no: 3, name: "text", kind: "scalar", T: 9 }];
const tmp5 = new "internalBinaryRead"("discord_protos.premium_marketing.v1.AdminEditorTestListItem", items, tmp2, "create", AdminEditorTestListItem$Type, "internalBinaryRead", items, this, tmp, require, dependencyMap);
const React3 = tmp5;
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/admin_editor_test_component.tsx");

export { AdminEditorTestSelectOption };
export const AdminEditorTestComponent = adminEditorTestComponentType;
export const AdminEditorTestListItem = tmp5;
