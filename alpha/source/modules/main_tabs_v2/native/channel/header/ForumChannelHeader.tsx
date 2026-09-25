// Module ID: 12835
// Function ID: 12836
// Name: ForumChannelHeader
// Dependencies: [19, 17, 7284, 21, 4829, 12836, 12818, 12837, 2]

// Module 12835 (ForumChannelHeader)
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 12837 */;
import noop from "module_19" /* 19 */;

const ForumChannelSearch = tmp2(12818);
const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles({ search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: fn(7284).MIN_HEADER_HEIGHT } });
const obj = { search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: fn(7284).MIN_HEADER_HEIGHT } };
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
