// Module ID: 12851
// Function ID: 12852
// Name: ForumChannelHeader
// Dependencies: [19, 17, 7289, 21, 4836, 12852, 12834, 12853, 2]

// Module 12851 (ForumChannelHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react_native2 from "react-native" /* 7289 */;
import useIsForumChannelSearchActive from "useIsForumChannelSearchActive" /* 12852 */;
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 12853 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const MIN_HEADER_HEIGHT = react_native2.MIN_HEADER_HEIGHT;
const jsx = Fragment.jsx;
let obj = { search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: MIN_HEADER_HEIGHT } };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo((arg0) => {
  let channelId;
  let guildId;
  let isGuildMemberCountVisible;
  let isNavigationScreen;
  let pressable;
  let screenIndex;
  let searchPlaceholder;
  let tmp4Result;
  ({ channelId, guildId } = arg0);
  ({ screenIndex, pressable, isGuildMemberCountVisible, isNavigationScreen, searchPlaceholder } = arg0);
  const tmp = closure_5();
  const obj = useIsForumChannelSearchActive;
  if (obj.useIsForumChannelSearchActive(channelId)) {
    const obj2 = { style: tmp.search, children: null };
    tmp4Result = tmp4(View, obj2);
  } else {
    const obj4 = { channelId, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, screenIndex };
    tmp4Result = tmp4(GuildChannelHeaderDefault, obj4);
  }
  return tmp4Result;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default memoResult;
