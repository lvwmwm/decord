// Module ID: 10154
// Function ID: 78526
// Dependencies: [31, 27, 9159, 33, 4130, 10155, 10133, 10156, 2]

// Module 10154
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: require("MIN_HEADER_HEIGHT").MIN_HEADER_HEIGHT };
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ search: obj });
const memoResult = require("result").memo((arg0) => {
  let channelId;
  let guildId;
  let isGuildMemberCountVisible;
  let isNavigationScreen;
  let pressable;
  let screenIndex;
  let searchPlaceholder;
  ({ channelId, guildId } = arg0);
  ({ screenIndex, pressable, isGuildMemberCountVisible, isNavigationScreen, searchPlaceholder } = arg0);
  let obj = require(10155) /* useIsForumChannelSearchActive */;
  if (obj.useIsForumChannelSearchActive(channelId)) {
    obj = { style: tmp.search };
    obj = { channelId, guildId, placeholder: searchPlaceholder };
    obj.children = tmp2(require(10133) /* ForumChannelCloseSearchButton */.ForumChannelSearchInput, obj);
    let tmp2Result = tmp2(View, obj);
  } else {
    const obj1 = { channelId, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, screenIndex };
    tmp2Result = tmp2(importDefault(10156), obj1);
  }
  return tmp2Result;
});
const result = require("MIN_HEADER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default memoResult;
