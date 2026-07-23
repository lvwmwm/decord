// Module ID: 12896
// Function ID: 100084
// Name: GuildSettingsPickerBottomSheet
// Dependencies: [31, 27, 33, 4130, 12897, 5187, 5186, 4126, 1273, 12901, 4098, 4543, 44, 8438, 2]

// Module 12896 (GuildSettingsPickerBottomSheet)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ content: { paddingHorizontal: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx");
class GuildSettingsPickerBottomSheet {
  constructor(arg0) {
    feature = global.feature;
    ({ section, subsection, guildId } = global);
    tmp = c6();
    obj = require("useGuildSettingsPickerFeature");
    guildSettingsPickerFeature = obj.useGuildSettingsPickerFeature(feature);
    ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
    obj = { startExpanded: true };
    items = [, , , , , ];
    items[0] = jsx(require("RedesignBottomSheetTitleHeaderBase").BottomSheetTitleHeader, { title });
    obj1 = { style: tmp.content, children: jsx(require("Text").Text, { variant: "text-md/medium", children: description }) };
    items[1] = jsx(guildId, obj1);
    items[2] = jsx(require("Button").Spacer, { size: 16 });
    obj2 = {
      guildId,
      onChange(guildId) {
            let obj = outer1_1(outer1_2[10]);
            obj = { feature, section: closure_1, subsection: closure_2, guildId };
            obj.openLazy(() => Promise.resolve(outer2_7), "GuildSettingsPickerBottomSheet", obj);
          },
      isGuildIncluded: isGuildSupported
    };
    items[3] = jsx(require("GuildPicker"), obj2);
    items[4] = jsx(require("Button").Spacer, { size: 16 });
    obj3 = { style: tmp.content, children: jsx(require("Button").Button, obj4) };
    obj4 = {
      grow: true,
      text: selectGuildCta,
      disabled: null == guildId,
      onPress() {
            outer1_1(outer1_2[12])(null != guildId, "Guild ID must not be null on click");
            outer1_1(outer1_2[13]).open(guildId, closure_1, undefined, closure_2);
            const obj = outer1_1(outer1_2[13]);
            outer1_1(outer1_2[10]).hideActionSheet();
          }
    };
    items[5] = jsx(guildId, obj3);
    obj.children = items;
    return jsxs(require("Background").BottomSheet, obj);
  }
}

export default GuildSettingsPickerBottomSheet;
