// Module ID: 13681
// Function ID: 13682
// Name: ForumChannelHeader
// Dependencies: [19, 17, 8195, 21, 4829, 13682, 13664, 13683, 2]

// Module 13681 (ForumChannelHeader)
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 13683 */;
import noop from "module_19" /* 19 */;

const ForumChannelSearch = tmp2(13664);
const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles({ search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: fn(8195).MIN_HEADER_HEIGHT } });
const obj = { search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: fn(8195).MIN_HEADER_HEIGHT } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default noop.memo((arg0) => {
  ({ channelId, guildId } = arg0);
  ({ screenIndex, pressable, isGuildMemberCountVisible, isNavigationScreen, searchPlaceholder } = arg0);
  const tmp = closure_5();
  if (obj.useIsForumChannelSearchActive(channelId)) {
    const obj2 = { style: tmp.search, children: null };
    const obj3 = { channelId, guildId, placeholder: searchPlaceholder };
    obj2.children = tmp4(ForumChannelSearch.ForumChannelSearchInput, obj3);
    let tmp4Result = tmp4(View, obj2);
  } else {
    const obj4 = { channelId, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, screenIndex };
    tmp4Result = tmp4(GuildChannelHeaderDefault, obj4);
  }
  return tmp4Result;
});
