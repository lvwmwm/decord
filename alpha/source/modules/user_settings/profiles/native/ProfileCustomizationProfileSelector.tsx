// Module ID: 15895
// Function ID: 15896
// Name: ProfileCustomizationProfileSelector
// Dependencies: [19, 17, 15896, 21, 4823, 575, 7259, 6956, 1113, 7233, 9505, 12724, 5773, 5037, 15897, 2121, 2]
// Exports: default

// Module 15895 (ProfileCustomizationProfileSelector)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import react_nativeDefault from "react-native" /* 5773 */;
import GuildIconDefault from "GuildIcon" /* 7233 */;
import ProfileSelectorActionSheetConstants from "ProfileSelectorActionSheetConstants" /* 15896 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

let id;

let obj2;
const View = react_native.View;
let closure_4 = ProfileSelectorActionSheetConstants.PROFILE_SELECTOR_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationProfileSelector.tsx");

export default function ProfileCustomizationProfileSelector(guild) {
  let ChevronSmallDownIcon;
  let TableRowGroup;
  let formatToPlainString;
  let intl4;
  let name1;
  let obj5;
  let obj6;
  let paths;
  let tmp8;
  let tmpResult;
  let u9XiCz;
  guild = guild.guild;
  ({ onBeforeOpen: importDefault, onSelectMainProfile: dependencyMap, onSelectGuild: View } = guild);
  let obj = { style: closure_6().container, children: tmp(TableRowGroup, obj6) };
  TableRowGroup = guild(7259).TableRowGroup;
  let name;
  const TableRow = guild(6956).TableRow;
  const tmp2 = View;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = tmp3(1113).intl;
    name = intl.string(tmp3(1113).t["2p07FR"]);
  }
  let obj2 = {
    label: name,
    labelLineClamp: 1,
    icon: tmpResult,
    trailing: tmp(ChevronSmallDownIcon, obj5),
    accessibilityLabel: formatToPlainString(u9XiCz, { profileName: name1 }),
    accessibilityHint: intl4.string(guild(1113).t["5h07Mp"]),
    onPress: function handlePress() {
      let onSelectGuild;
      let onSelectMainProfile;
      react_nativeDefault();
      importDefault(() => {
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        if (id == null) {
          id = null;
        }
        const obj = { selectedGuildId: id, onSelectMainProfile, onSelectGuild };
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.openLazy(guild(dependencyMap[15])(dependencyMap[14], dependencyMap.paths), closure_2_4, obj);
      });
    }
  };
  if (null != guild) {
    const obj3 = { guild, size: guild(7233).GuildIconSizes.XSMALL };
    const tmp10 = GuildIconDefault;
    tmpResult = tmp(tmp10, obj3);
    tmp8 = importDefault;
  } else {
    const obj4 = { size: "md", color: nativeDefault.colors.ICON_DEFAULT };
    const ClydeIcon = tmp3(9505).ClydeIcon;
    tmpResult = tmp(ClydeIcon, obj4);
    tmp8 = importDefault;
  }
  obj5 = { size: "sm", color: tmp8(575).colors.ICON_SUBTLE };
  ChevronSmallDownIcon = tmp3(12724).ChevronSmallDownIcon;
  const intl2 = tmp3(1113).intl;
  formatToPlainString = intl2.formatToPlainString;
  name1 = undefined;
  u9XiCz = tmp3(1113).t.u9XiCz;
  if (guild != null) {
    name1 = guild.name;
  }
  if (name1 == null) {
    const intl3 = tmp3(1113).intl;
    name1 = intl3.string(tmp3(1113).t["2p07FR"]);
  }
  obj6 = { hasIcons: true, children: jsx(TableRow, obj2) };
  intl4 = tmp3(1113).intl;
  return jsx(tmp2, obj);
};
