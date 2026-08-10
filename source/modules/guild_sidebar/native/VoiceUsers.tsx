// Module ID: 15253
// Function ID: 15254
// Name: AudienceItem
// Dependencies: [19, 17, 1971, 21, 4303, 712, 9796, 8392, 589, 15254, 9452, 1236, 11889, 4299, 9238, 15258, 5926, 15261, 2]
// Exports: default, getAudienceItemHeight

// Module 15253 (AudienceItem)
import importAllResult from "noop";
import { View } from "VoiceUsersItem";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
function AudienceItem(arg0) {
  let audienceCount;
  let collapsed;
  ({ audienceCount, collapsed } = arg0);
  const tmp2 = callback2(importDefault(8392)());
  let formatToPlainStringResult = audienceCount;
  if (!collapsed) {
    const intl = require(1236) /* getSystemLocale */.intl;
    let obj = { count: null };
    obj[0] = audienceCount;
    formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t["+v2pN2"], obj);
  }
  obj = { style: collapsed ? tmp2.listenersCollapsed : tmp2.listeners, children: null };
  obj = { style: tmp2.listenersIconWrapper, children: callback(require(11889) /* HeadphonesIcon */.HeadphonesIcon, obj1) };
  const items = [callback(View, obj), callback(require(4299) /* Text */.Text, { style: tmp2.listenersText, variant: c10, color: "redesign-channel-name-muted-text", children: formatToPlainStringResult })];
  obj[1] = items;
  return closure_7(View, obj);
}
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = {};
let closure_9 = [];
let c10 = "text-sm/medium";
let closure_11 = createCacheKey.createStyles((arg0) => {
  const colors = importDefault(712).colors;
  if (arg0) {
    let BACKGROUND_BASE_LOWEST = colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
    let tmp4 = tmp;
  } else {
    BACKGROUND_BASE_LOWEST = colors.BACKGROUND_BASE_LOWEST;
    tmp4 = tmp;
  }
  const round = tmp4(712).radii.round;
  let obj = { listeners: { display: "flex", flexDirection: "row", alignItems: "center", padding: 4, marginTop: 4, marginLeft: -8 }, listenersCollapsed: { flexDirection: "row", alignItems: "center", backgroundColor: BACKGROUND_BASE_LOWEST, borderRadius: round, marginLeft: -16, marginTop: 4, paddingLeft: 2, paddingRight: 6 }, listenersIconWrapper: null, listenersText: null, userCollapsedOverlap: null, headphonesIcon: null };
  obj = { alignItems: "center", justifyContent: "center", backgroundColor: BACKGROUND_BASE_LOWEST, marginRight: 8, marginLeft: 4, borderRadius: round };
  const merged = Object.assign(require(9796) /* getLayoutStyles */.makeSizeStyle(20));
  obj[2] = obj;
  obj[3] = { marginRight: 4 };
  obj[4] = { marginLeft: -20 };
  const obj3 = require(9796) /* getLayoutStyles */;
  obj[5] = require(9796) /* getLayoutStyles */.makeSizeStyle(14);
  return obj;
});
let closure_12 = importAllResult.memo((voiceState) => {
  let isGuest;
  let member;
  let storeMember;
  let voiceState2;
  voiceState = voiceState.voiceState;
  const user = voiceState.user;
  ({ member, voiceState: voiceState2 } = voiceState);
  const channel = voiceState.channel;
  const collapsed = voiceState.collapsed;
  let obj = user(589);
  const items = [trackCommunicationDisabled];
  const items1 = [channel.guild_id, user.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ storeMember: outer1_5.getMember(channel.guild_id, user.id), isGuest: outer1_5.isGuestOrLurker(channel.guild_id, user.id) }), items1);
  let userCollapsedOverlap = null;
  ({ storeMember, isGuest } = stateFromStoresObject);
  if (collapsed) {
    userCollapsedOverlap = null;
    if (!voiceState.isFirst) {
      userCollapsedOverlap = tmp3.userCollapsedOverlap;
    }
  }
  obj = { style: userCollapsedOverlap, children: null };
  obj = { user, member: null, mute: null, deaf: null, selfVideo: null, selfMute: null, selfDeaf: null, suppress: null, collapsed: null, sessionId: null, channel: null, isGuest: null };
  const tmp = channel;
  tmp3 = callback2(channel(8392)());
  const tmp6 = View;
  if (member == null) {
    member = storeMember;
  }
  obj[1] = member;
  ({ mute: obj3[2], deaf: obj3[3], selfVideo: obj3[4], selfMute: obj3[5], selfDeaf: obj3[6], suppress: obj3[7] } = voiceState2);
  obj[8] = collapsed;
  obj[9] = voiceState2.sessionId;
  obj[10] = channel;
  obj[11] = isGuest;
  obj[1] = closure_6(channel(15254), obj, user.id);
  return closure_6(tmp6, obj);
});
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default function VoiceUsers(collapsed) {
  let audienceCount;
  let voiceStates;
  collapsed = collapsed.collapsed;
  const channel = collapsed.channel;
  ({ voiceStates, audienceCount } = collapsed);
  let guild_id;
  let importAllResult;
  guild_id = channel.guild_id;
  if (tmp3) {
    if (null != guild_id) {
      const substr = voiceStates.slice(0, collapsed(tmp2[16]).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
      let mapped = substr.map((user) => user.user.id);
    }
    const tmp4Result = tmp4(mapped);
    importAllResult = tmp4Result;
    const items = [guild_id, tmp4Result];
    const memo = importAllResult.useMemo(() => {
      if (null != guild_id) {
        if (_undefined.length > 0) {
          const obj = {};
          obj[tmp] = tmp2;
          let tmp3 = obj;
        }
        return tmp3;
      }
      tmp3 = outer1_8;
    }, items);
    let obj = collapsed(tmp2[16]);
    const subscribeGuildMembers = obj.useSubscribeGuildMembers(memo, "voice_channel_games");
    let tmp15Result = null;
    if (0 !== voiceStates.length) {
      obj = { collapsed: null, children: null };
      obj[0] = collapsed;
      const items1 = [voiceStates.map((user) => outer1_6(outer1_12, { voiceState: user, channel, collapsed, isFirst: 0 === arg1 }, "voice-user-item-" + user.user.id + "-" + user.voiceState.sessionId)), ];
      let tmp17 = null != audienceCount && audienceCount > 0;
      if (tmp17) {
        obj = { audienceCount: null, collapsed: null };
        obj[0] = audienceCount;
        obj[1] = collapsed;
        tmp17 = callback(AudienceItem, obj);
      }
      items1[1] = tmp17;
      obj[1] = items1;
      tmp15Result = closure_7(channel(tmp2[17]), obj);
      const tmp15 = closure_7;
      const tmpResult = channel(tmp2[17]);
    }
    return tmp15Result;
  }
  mapped = closure_9;
};
export const getAudienceItemHeight = function getAudienceItemHeight(fontScale) {
  return 8 + Math.max(20, require(9452) /* map */.scaleTextLineHeight(c10, fontScale));
};
