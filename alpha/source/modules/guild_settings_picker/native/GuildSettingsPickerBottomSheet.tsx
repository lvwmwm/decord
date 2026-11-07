// Module ID: 16016
// Function ID: 16017
// Name: GuildSettingsPickerBottomSheet
// Dependencies: [19, 17, 21, 5140, 575, 16017, 5388, 7382, 16021, 5374, 5758, 38, 9154, 2]

// Module 16016 (GuildSettingsPickerBottomSheet)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9154 */;
import GuildPickerDefault from "GuildPicker" /* 16021 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
const metroRequire = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx");
class GuildSettingsPickerBottomSheet {
  constructor(feature) {
    let description;
    let guildId;
    let isGuildSupported;
    let items;
    let obj3;
    let section;
    let selectGuildCta;
    let subsection;
    let title;
    feature = feature.feature;
    ({ section: importDefault, subsection: dependencyMap, guildId } = feature);
    const tmp = closure_6();
    let obj = feature(16017);
    const guildSettingsPickerFeature = obj.useGuildSettingsPickerFeature(feature);
    ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
    let obj2 = { startExpanded: true, header: closure_4(feature(7382).BottomSheetTitleHeader, { title, subtitle: description }), children: closure_5(guildId, obj3) };
    const BottomSheet = feature(5388).BottomSheet;
    obj3 = { style: tmp.content, children: items };
    items = [, ];
    const obj4 = {
      guildId,
      onChange: function handleGuildSelected(guildId) {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { feature, section: importDefault, subsection: dependencyMap, guildId };
        obj.openLazy(() => Promise.resolve(closure_1_7), "GuildSettingsPickerBottomSheet", obj2);
      },
      isGuildIncluded: isGuildSupported
    };
    items[0] = closure_4(GuildPickerDefault, obj4);
    const obj5 = {
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
    items[1] = closure_4(feature(5758).Button, obj5);
    return closure_4(BottomSheet, obj2);
  }
}

export default GuildSettingsPickerBottomSheet;
