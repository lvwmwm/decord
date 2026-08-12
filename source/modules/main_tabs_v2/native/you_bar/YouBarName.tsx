// Module ID: 15577
// Function ID: 15578
// Name: Username
// Dependencies: [19, 17, 5036, 21, 4344, 712, 15560, 9516, 9298, 9524, 589, 9494, 9497, 9569, 4340, 4189, 2]

// Module 15577 (Username)
import { View } from "get ActivityIndicator";
import filterPlayingActivities from "filterPlayingActivities";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c5;
let closure_6;
const require = arg1;
function Username(userId) {
  userId = userId.userId;
  const tmp = callback2();
  let obj = require(15560) /* apexExperiment */;
  obj = { style: items, children: null };
  items = [tmp.usernameRow];
  const isYouBarGuildTagEnabled = obj.useIsYouBarGuildTagEnabled("YouBarName");
  obj = { userId, userName: userId.username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp.username, style: tmp.username };
  const items1 = [callback(importDefault(9516), obj), , ];
  let tmp7Result = null;
  if (isYouBarGuildTagEnabled) {
    const obj1 = { userId: null, disabledTooltip: true, containerStyles: null };
    obj1[0] = userId;
    obj1[2] = tmp.guildTag;
    tmp7Result = tmp7(importDefault(9298), obj1);
  }
  items1[1] = tmp7Result;
  items1[2] = callback(require(9524) /* ChevronSmallDownIcon */.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" });
  obj[1] = items1;
  return closure_6(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 }, statusRow: null, statusEmoji: null, usernameRow: null, username: null, guildTag: null, statusText: null };
obj = { flexDirection: "row", gap: require("Themes").space.PX_4 };
obj[1] = obj;
obj[2] = { width: 16, height: 16 };
obj[3] = { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 };
obj[4] = { flexShrink: 1 };
obj[5] = { marginLeft: 2, flexShrink: 0 };
obj[6] = { flexShrink: 1 };
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function YouName(arg0) {
  let userId;
  let username;
  ({ userId, username } = arg0);
  const tmp = callback2();
  let obj = require(589) /* initialize */;
  const items = [filterPlayingActivities];
  const stateFromStores = obj.useStateFromStores(items, () => status.getStatus());
  let obj1 = require(9494) /* _activityFromSetting */;
  const customStatusActivity = obj1.useCustomStatusActivity();
  let obj2 = require(9497) /* useGameMentionsAsPlainText */;
  let state;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(state);
  obj = { style: tmp.userText, children: null };
  const items1 = [callback(Username, { username, userId }), ];
  obj = { style: tmp.statusRow, children: null };
  let emoji;
  if (customStatusActivity != null) {
    emoji = customStatusActivity.emoji;
  }
  let tmp10Result = null;
  if (null != emoji) {
    obj1 = { size: 16, style: null, emoji: null };
    obj1[1] = tmp.statusEmoji;
    obj1[2] = customStatusActivity.emoji;
    tmp10Result = tmp10(importDefault(9569), obj1);
  }
  const items2 = [tmp10Result, ];
  obj2 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, style: tmp.statusText, children: null };
  if (gameMentionsAsPlainText == null) {
    gameMentionsAsPlainText = tmp2(4189).humanizeStatus(stateFromStores);
    const tmp2Result = tmp2(4189);
  }
  obj2[6] = gameMentionsAsPlainText;
  items2[1] = callback(require(4340) /* Text */.Text, obj2);
  obj[1] = items2;
  items1[1] = closure_6(View, obj);
  obj[1] = items1;
  return closure_6(View, obj);
});
const result = require("filterPlayingActivities").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default memoResult;
