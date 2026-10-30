// Module ID: 18406
// Function ID: 18407
// Name: YouBarName
// Dependencies: [19, 17, 6708, 4858, 4941, 5756, 4951, 6564, 5674, 21, 5009, 575, 10752, 9276, 11377, 504, 11357, 10729, 5757, 10727, 10728, 18407, 10725, 10746, 5619, 5063, 2]

// Module 18406 (YouBarName)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import GuildTagDefault from "GuildTag" /* 9276 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10727 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10728 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10752 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11377 */;
import shouldShowActivityStatusDefault from "shouldShowActivityStatus" /* 18407 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import PresenceStore from "PresenceStore" /* 5756 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6564 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_12;
let map1;
let obj2;
let unpackModuleId;
function Username(userId) {
  let items;
  userId = userId.userId;
  const username = userId.username;
  const tmp = closure_14();
  const obj = { style: tmp.usernameRow, children: items };
  items = [, , ];
  const obj2 = { userId, userName: username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp.username, style: tmp.username };
  items[0] = unpackModuleId(UsernameWithEffectsDefault, obj2);
  const obj3 = { userId, disabledTooltip: true, containerStyles: tmp.guildTag };
  items[1] = unpackModuleId(GuildTagDefault, obj3);
  items[2] = unpackModuleId(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" });
  return authStore2(View, obj);
}
const View = react_native.View;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let obj = { userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 }, statusRow: obj2, statusEmoji: { width: 16, height: 16 }, usernameRow: { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 }, username: { flexShrink: 1 }, guildTag: { marginLeft: 2, flexShrink: 0 }, statusText: { flexShrink: 1 } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
let closure_14 = createStyles.createStyles(obj);
const memoResult = react.memo(function YouName(userId) {
  let humanizeStatusResult;
  let items2;
  let status;
  let tmp10Result;
  userId = userId.userId;
  const username = userId.username;
  const tmp = closure_14();
  let obj = userId(504);
  let items = [SelfPresenceStore];
  const stateFromStores = obj.useStateFromStores(items, () => status.getStatus());
  let obj2 = userId(11357);
  const customStatusActivity = obj2.useCustomStatusActivity();
  let state;
  const useGameMentionsAsPlainText = userId(10729).useGameMentionsAsPlainText;
  userId(10729);
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = useGameMentionsAsPlainText(state);
  const items1 = [PresenceStore, ApplicationStreamingStore, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore];
  let obj3 = { style: tmp.userText, children: items2 };
  const tmp2Result = userId(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const activities = PresenceStore.getActivities(userId);
    const found = activities.filter((type) => type.type !== userId(closure_1_2[18]).ActivityTypes.CUSTOM_STATUS);
    const items = [ApplicationStreamingStore, RelationshipStore];
    const obj = useDiscoverableApplicationStream;
    const discoverableApplicationStream = obj.getDiscoverableApplicationStream(userId, items);
    const obj2 = useUserVoiceActivity;
    const obj3 = { userId };
    const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
    const obj5 = { activities: found, status: stateFromStores, applicationStream: discoverableApplicationStream, voiceChannel: obj2.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel };
    return shouldShowActivityStatusDefault(obj5);
  });
  items2 = [closure_11(Username, { username, userId }), ];
  let obj4 = { style: tmp.statusRow, children: tmp10Result };
  if (stateFromStores1) {
    let obj5 = { userId, emojiSize: 16, maxFontSizeMultiplier: 1.75 };
    tmp10Result = tmp12(stateFromStores(10725), obj5);
  } else {
    let emoji;
    const tmp13 = closure_13;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    let tmp12Result2 = null;
    if (null != emoji) {
      const obj6 = { size: 16, style: tmp.statusEmoji, emoji: customStatusActivity.emoji };
      tmp12Result2 = tmp12(stateFromStores(10746), obj6);
    }
    const items3 = [tmp12Result2, ];
    const obj7 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, style: tmp.statusText, children: humanizeStatusResult };
    humanizeStatusResult = gameMentionsAsPlainText;
    const Text = tmp2(5619).Text;
    if (gameMentionsAsPlainText == null) {
      const tmp2Result2 = userId(5063);
      humanizeStatusResult = tmp2Result2.humanizeStatus(stateFromStores);
    }
    const obj8 = { children: items3 };
    items3[1] = closure_11(Text, obj7);
    tmp10Result = tmp10(tmp13, obj8);
  }
  items2[1] = closure_11(View, obj4);
  return closure_12(View, obj3);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default memoResult;
