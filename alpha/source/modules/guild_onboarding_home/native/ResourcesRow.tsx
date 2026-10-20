// Module ID: 17755
// Function ID: 17756
// Name: ResourcesRow
// Dependencies: [19, 17, 17756, 21, 4945, 587, 17757, 12984, 5171, 17758, 2002, 6859, 5195, 1128, 2]
// Exports: default

// Module 17755 (ResourcesRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12984 */;
import OnboardingHomeConstants from "OnboardingHomeConstants" /* 17756 */;
import useResourceChannelsDefault from "useResourceChannels" /* 17757 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4945 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
const ScrollView = react_native.ScrollView;
let closure_4 = OnboardingHomeConstants.ONBOARDING_HOME_RESOURCES_SHEET_KEY;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { display: "flex", flexDirection: "row", paddingBottom: 8, marginBottom: 16 }, channelItem: obj2 };
obj2 = { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round, marginLeft: 8, paddingVertical: 8, paddingHorizontal: 12 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/ResourcesRow.tsx");

export default function ResourcesRow(guildId) {
  let Text;
  let channelItem;
  let intl;
  let items;
  let obj3;
  let obj4;
  guildId = guildId.guildId;
  const tmp = closure_7();
  importDefault = tmp;
  const arr = useResourceChannelsDefault(guildId);
  let obj = { horizontal: true, style: tmp.container, children: items };
  const tmp3 = arr.length > 2;
  const substr = arr.slice(0, 2);
  items = [
    substr.map((children) => {
      let obj2;
      let obj = {
        style: channelItem.channelItem,
        onPress() {
          const channelId = children.channelId;
          const obj = GuildOnboardingHomeActionCreators;
          const homeResourceChannel = obj.selectHomeResourceChannel(guildId, channelId);
        },
        children: closure_1_5(guildId(dependencyMap[12]).Text, obj2)
      };
      const PressableOpacity = guildId(dependencyMap[11]).PressableOpacity;
      obj2 = { variant: "text-md/medium", color: "text-default", children: children.title };
      return closure_1_5(PressableOpacity, obj, children.channelId);
    }),

  ];
  let tmp6 = null;
  const tmp4 = closure_6;
  const tmp5 = ScrollView;
  if (tmp3) {
    let obj2 = {
      style: tmp.channelItem,
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guildId };
          obj.openLazy(asyncRequire(17758, dependencyMap.paths), closure_4, obj2);
        },
      children: closure_5(Text, obj3)
    };
    let PressableOpacity = guildId(6859).PressableOpacity;
    obj3 = { variant: "text-md/medium", color: "text-default", children: intl.format(guildId(1128).t.F6iMs4, obj4) };
    Text = guildId(5195).Text;
    intl = guildId(1128).intl;
    obj4 = { count: arr.length - 2 };
    tmp6 = closure_5(PressableOpacity, obj2);
  }
  items[1] = tmp6;
  return tmp4(tmp5, obj);
};
