// Module ID: 13433
// Function ID: 13434
// Name: GuildSettingsPickerBottomSheet
// Dependencies: [19, 17, 21, 4836, 13434, 6571, 6570, 4832, 1177, 13438, 4800, 5281, 38, 9048, 2]

// Module 13433 (GuildSettingsPickerBottomSheet)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import GuildPickerDefault from "GuildPicker" /* 13438 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const metroRequire = createStyles.createStyles({ content: { paddingHorizontal: 16 } });
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx");
class GuildSettingsPickerBottomSheet {
  constructor(feature) {
    let description;
    let guildId;
    let isGuildSupported;
    let items;
    let obj6;
    let section;
    let selectGuildCta;
    let subsection;
    let title;
    feature = feature.feature;
    ({ section: importDefault, subsection: dependencyMap, guildId } = feature);
    const tmp = closure_6();
    let obj = feature(13434);
    const guildSettingsPickerFeature = obj.useGuildSettingsPickerFeature(feature);
    ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
    let obj2 = { startExpanded: true, children: items };
    BottomSheet = feature(6571).BottomSheet;
    items = [closure_4(feature(6570).BottomSheetTitleHeader, { title }), , , , , ];
    const obj3 = { style: tmp.content, children: closure_4(feature(4832).Text, { variant: "text-md/medium", children: description }) };
    items[1] = closure_4(guildId, obj3);
    items[2] = closure_4(feature(1177).Spacer, { size: 16 });
    const obj4 = {
      guildId,
      onChange(guildId) {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { feature, section: importDefault, subsection: dependencyMap, guildId };
        obj.openLazy(() => Promise.resolve(closure_1_7), "GuildSettingsPickerBottomSheet", obj2);
      },
      isGuildIncluded: isGuildSupported
    };
    items[3] = closure_4(GuildPickerDefault, obj4);
    items[4] = closure_4(feature(1177).Spacer, { size: 16 });
    const obj5 = { style: tmp.content, children: closure_4(feature(5281).Button, obj6) };
    obj6 = {
      grow: true,
      text: selectGuildCta,
      disabled: null == guildId,
      onPress() {
        _modDef38(null != guildId, "Guild ID must not be null on click");
        const obj = GuildSettingsActionCreatorsDefault;
        obj.open(guildId, importDefault, undefined, dependencyMap);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      }
    };
    items[5] = closure_4(guildId, obj5);
    return closure_5(BottomSheet, obj2);
  }
}

export default GuildSettingsPickerBottomSheet;
