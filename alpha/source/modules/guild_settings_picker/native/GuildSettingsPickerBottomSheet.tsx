// Module ID: 15672
// Function ID: 15673
// Name: GuildSettingsPickerBottomSheet
// Dependencies: [19, 17, 21, 5009, 15673, 5267, 7315, 5619, 1188, 15677, 5253, 5629, 38, 9055, 2]

// Module 15672 (GuildSettingsPickerBottomSheet)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import GuildPickerDefault from "GuildPicker" /* 15677 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
    let obj = feature(15673);
    const guildSettingsPickerFeature = obj.useGuildSettingsPickerFeature(feature);
    ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
    let obj2 = { startExpanded: true, children: items };
    BottomSheet = feature(5267).BottomSheet;
    items = [closure_4(feature(7315).BottomSheetTitleHeader, { title }), , , , , ];
    const obj3 = { style: tmp.content, children: closure_4(feature(5619).Text, { variant: "text-md/medium", children: description }) };
    items[1] = closure_4(guildId, obj3);
    items[2] = closure_4(feature(1188).Spacer, { size: 16 });
    const obj4 = {
      guildId,
      onChange: function handleGuildSelected(guildId) {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { feature, section: importDefault, subsection: dependencyMap, guildId };
        obj.openLazy(() => Promise.resolve(closure_1_7), "GuildSettingsPickerBottomSheet", obj2);
      },
      isGuildIncluded: isGuildSupported
    };
    items[3] = closure_4(GuildPickerDefault, obj4);
    items[4] = closure_4(feature(1188).Spacer, { size: 16 });
    const obj5 = { style: tmp.content, children: closure_4(feature(5629).Button, obj6) };
    obj6 = {
      grow: true,
      text: selectGuildCta,
      disabled: null == guildId,
      onPress: function handleOpenSelected() {
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
