// Module ID: 18250
// Function ID: 18251
// Name: ResourcesRow
// Dependencies: [19, 17, 18251, 21, 4792, 575, 18252, 13049, 5006, 18253, 2121, 6911, 5383, 1113, 2]
// Exports: default

// Module 18250 (ResourcesRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 13049 */;
import OnboardingHomeConstants from "OnboardingHomeConstants" /* 18251 */;
import useResourceChannelsDefault from "useResourceChannels" /* 18252 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
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
      obj2 = { variant: "body-md/medium", color: "text-default", children: children.title };
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
          obj.openLazy(asyncRequire(18253, dependencyMap.paths), closure_4, obj2);
        },
      children: closure_5(Text, obj3)
    };
    let PressableOpacity = guildId(6911).PressableOpacity;
    obj3 = { variant: "body-md/medium", color: "text-default", children: intl.format(guildId(1113).t.F6iMs4, obj4) };
    Text = guildId(5383).Text;
    intl = guildId(1113).intl;
    obj4 = { count: arr.length - 2 };
    tmp6 = closure_5(PressableOpacity, obj2);
  }
  items[1] = tmp6;
  return tmp4(tmp5, obj);
};
