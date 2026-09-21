// Module ID: 13585
// Function ID: 13586
// Name: ForumChannelHeader
// Dependencies: [19, 17, 8113, 21, 4758, 558, 568, 13586, 13568, 13587, 2]

// Module 13585 (ForumChannelHeader)
import c from "c" /* 568 */;
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 13587 */;
import noop from "module_19" /* 19 */;

const ForumChannelSearch = tmp(13568);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_5 = createStyles.createStyles({ search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: fn(8113).MIN_HEADER_HEIGHT } });
const ReactCompilerGating = fn(558);
let obj = { search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: fn(8113).MIN_HEADER_HEIGHT } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ channelId, screenIndex, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, searchPlaceholder } = arg0);
  let search = closure_5();
  if (obj2.useIsForumChannelSearchActive(channelId)) {
    if (cResult[0] === channelId) {
      if (cResult[1] === guildId) {
        if (cResult[2] === searchPlaceholder) {
          let tmp8 = cResult[3];
        }
        if (cResult[4] === search.search) {
        }
        const obj3 = { style: search.search, children: tmp8 };
        const tmp14 = <View style={search.search}>{tmp8}</View>;
        search = search.search;
        cResult[4] = search;
        cResult[5] = tmp8;
        cResult[6] = tmp14;
      }
    }
    const obj4 = { channelId, guildId, placeholder: searchPlaceholder };
    const tmp10 = jsx(ForumChannelSearch.ForumChannelSearchInput, { channelId, guildId, placeholder: searchPlaceholder });
    cResult[0] = channelId;
    cResult[1] = guildId;
    cResult[2] = searchPlaceholder;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    if (cResult[7] === channelId) {
      if (cResult[8] === guildId) {
        if (cResult[9] === isGuildMemberCountVisible) {
          if (cResult[10] === isNavigationScreen) {
            if (cResult[11] === pressable) {
              if (cResult[12] === screenIndex) {
                let tmp4 = cResult[13];
              }
              return tmp4;
            }
          }
        }
      }
    }
    const obj5 = { channelId, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, screenIndex };
    const tmp7 = jsx(GuildChannelHeaderDefault, { channelId, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, screenIndex });
    cResult[7] = channelId;
    cResult[8] = guildId;
    cResult[9] = isGuildMemberCountVisible;
    cResult[10] = isNavigationScreen;
    cResult[11] = pressable;
    cResult[12] = screenIndex;
    cResult[13] = tmp7;
    tmp4 = tmp7;
  }
}) : ((arg0) => {
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
}));
