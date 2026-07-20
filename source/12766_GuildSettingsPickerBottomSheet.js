// Module ID: 12766
// Function ID: 97850
// Name: GuildSettingsPickerBottomSheet
// Dependencies: [837156864, 698875904, 837222400, 554631168, 131072, 2373255168, 503316482, 3372220432, 2969567252, 33554434, 2113929216, 5, 57, 31, 1348]

// Module 12766 (GuildSettingsPickerBottomSheet)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ content: { paddingHorizontal: 16 } });
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx");
class GuildSettingsPickerBottomSheet {
  constructor(arg0) {
    feature = global.feature;
    arg1 = feature;
    ({ section: closure_1, subsection: closure_2, guildId } = global);
    View = guildId;
    tmp = closure_6();
    obj = arg1(dependencyMap[4]);
    guildSettingsPickerFeature = obj.useGuildSettingsPickerFeature(feature);
    ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
    obj = { startExpanded: true };
    items = [, , , , , ];
    items[0] = jsx(arg1(dependencyMap[6]).BottomSheetTitleHeader, { title });
    obj1 = { style: tmp.content, children: jsx(arg1(dependencyMap[7]).Text, { variant: "text-md/medium", children: description }) };
    items[1] = jsx(View, obj1);
    items[2] = jsx(arg1(dependencyMap[8]).Spacer, { size: 16 });
    obj2 = {
      guildId,
      onChange(guildId) {
            let obj = callback(closure_2[10]);
            obj = { feature, section: callback, subsection: closure_2, guildId };
            obj.openLazy(() => Promise.resolve(closure_7), "GuildSettingsPickerBottomSheet", obj);
          },
      isGuildIncluded: isGuildSupported
    };
    items[3] = jsx(importDefault(dependencyMap[9]), obj2);
    items[4] = jsx(arg1(dependencyMap[8]).Spacer, { size: 16 });
    obj3 = { style: tmp.content, children: jsx(require("asyncGeneratorStep").Button, obj4) };
    obj4 = {
      grow: true,
      text: selectGuildCta,
      disabled: null == guildId,
      onPress() {
            callback(closure_2[12])(null != guildId, "Guild ID must not be null on click");
            callback(closure_2[13]).open(guildId, callback, undefined, closure_2);
            const obj = callback(closure_2[13]);
            callback(closure_2[10]).hideActionSheet();
          }
    };
    items[5] = jsx(View, obj3);
    obj.children = items;
    return jsxs(arg1(dependencyMap[5]).BottomSheet, obj);
  }
}

export default GuildSettingsPickerBottomSheet;
