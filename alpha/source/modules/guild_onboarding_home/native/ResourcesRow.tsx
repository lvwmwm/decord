// Module ID: 17906
// Function ID: 17907
// Name: ResourcesRow
// Dependencies: [19, 17, 17907, 21, 4969, 587, 17908, 13088, 5196, 17909, 2002, 6894, 5220, 1128, 2]
// Exports: default

// Module 17906 (ResourcesRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 13088 */;
import OnboardingHomeConstants from "OnboardingHomeConstants" /* 17907 */;
import useResourceChannelsDefault from "useResourceChannels" /* 17908 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
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
          obj.openLazy(asyncRequire(17909, dependencyMap.paths), closure_4, obj2);
        },
      children: closure_5(Text, obj3)
    };
    let PressableOpacity = guildId(6894).PressableOpacity;
    obj3 = { variant: "text-md/medium", color: "text-default", children: intl.format(guildId(1128).t.F6iMs4, obj4) };
    Text = guildId(5220).Text;
    intl = guildId(1128).intl;
    obj4 = { count: arr.length - 2 };
    tmp6 = closure_5(PressableOpacity, obj2);
  }
  items[1] = tmp6;
  return tmp4(tmp5, obj);
};
