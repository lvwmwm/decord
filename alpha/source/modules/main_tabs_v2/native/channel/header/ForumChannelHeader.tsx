// Module ID: 14566
// Function ID: 14567
// Name: ForumChannelHeader
// Dependencies: [19, 17, 9813, 21, 5014, 11346, 14552, 14567, 2]

// Module 14566 (ForumChannelHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react_native2 from "react-native" /* 9813 */;
import useIsForumChannelSearchActive from "useIsForumChannelSearchActive" /* 11346 */;
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 14567 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const MIN_HEADER_HEIGHT = react_native2.MIN_HEADER_HEIGHT;
const jsx = Fragment.jsx;
let obj = { search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: MIN_HEADER_HEIGHT } };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(function ForumChannelHeader(arg0) {
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
