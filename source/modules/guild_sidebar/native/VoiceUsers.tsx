// Module ID: 14974
// Function ID: 114128
// Name: AudienceItem
// Dependencies: [31, 27, 1917, 33, 4130, 689, 10261, 8830, 566, 14975, 9889, 1212, 11563, 4126, 14979, 2]
// Exports: default, getAudienceItemHeight

// Module 14974 (AudienceItem)
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_5;
let closure_6;
const require = arg1;
function AudienceItem(arg0) {
  let audienceCount;
  let collapsed;
  ({ audienceCount, collapsed } = arg0);
  const tmp = callback2(importDefault(8830)());
  let formatToPlainStringResult = audienceCount;
  if (!collapsed) {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = { count: audienceCount };
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["+v2pN2"], obj);
  }
  obj = { style: collapsed ? tmp.listenersCollapsed : tmp.listeners };
  obj = { style: tmp.listenersIconWrapper, children: callback(require(11563) /* HeadphonesIcon */.HeadphonesIcon, obj1) };
  obj1 = { color: "redesign-channel-name-muted-text", size: "custom", style: tmp.headphonesIcon };
  const items = [callback(View, obj), ];
  const obj2 = { style: tmp.listenersText, variant: c7, color: "redesign-channel-name-muted-text", children: formatToPlainStringResult };
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  return closure_6(View, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let c7 = "text-sm/medium";
let closure_8 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  const colors = importDefault(689).colors;
  const tmp = arg0 ? colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT : colors.BACKGROUND_BASE_LOWEST;
  const round = importDefault(689).radii.round;
  obj = { listeners: { display: "flex", flexDirection: "row", alignItems: "center", padding: 4, marginTop: 4, marginLeft: -8 }, listenersCollapsed: obj };
  obj = { flexDirection: "row", alignItems: "center", backgroundColor: tmp, borderRadius: round, marginLeft: -16, marginTop: 4, paddingLeft: 2, paddingRight: 6 };
  obj = { alignItems: "center", justifyContent: "center", backgroundColor: tmp, marginRight: 8, marginLeft: 4, borderRadius: round };
  const merged = Object.assign(require(10261) /* getLayoutStyles */.makeSizeStyle(20));
  obj.listenersIconWrapper = obj;
  obj.listenersText = { marginRight: 4 };
  obj.userCollapsedOverlap = { marginLeft: -20 };
  const obj4 = require(10261) /* getLayoutStyles */;
  obj.headphonesIcon = require(10261) /* getLayoutStyles */.makeSizeStyle(14);
  return obj;
});
let closure_9 = require("result").memo((voiceState) => {
  let member;
  let voiceState2;
  voiceState = voiceState.voiceState;
  const user = voiceState.user;
  ({ member, voiceState: voiceState2 } = voiceState);
  const channel = voiceState.channel;
  const collapsed = voiceState.collapsed;
  let obj = user(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [channel.guild_id, user.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ storeMember: outer1_4.getMember(channel.guild_id, user.id), isGuest: outer1_4.isGuestOrLurker(channel.guild_id, user.id) }), items1);
  let storeMember = stateFromStoresObject.storeMember;
  obj = {};
  let userCollapsedOverlap = null;
  if (collapsed) {
    userCollapsedOverlap = null;
    if (!voiceState.isFirst) {
      userCollapsedOverlap = tmp.userCollapsedOverlap;
    }
  }
  obj.style = userCollapsedOverlap;
  obj = { user };
  tmp = callback2(channel(8830)());
  const tmp3 = closure_5;
  const tmp4 = View;
  const tmp6 = closure_5;
  if (null != member) {
    storeMember = member;
  }
  obj.member = storeMember;
  ({ mute: obj3.mute, deaf: obj3.deaf, selfVideo: obj3.selfVideo, selfMute: obj3.selfMute, selfDeaf: obj3.selfDeaf, suppress: obj3.suppress } = voiceState2);
  obj.collapsed = collapsed;
  obj.sessionId = voiceState2.sessionId;
  obj.channel = channel;
  obj.isGuest = stateFromStoresObject.isGuest;
  obj.children = tmp6(channel(14975), obj, user.id);
  return tmp3(tmp4, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default function VoiceUsers(collapsed) {
  let audienceCount;
  let importDefault;
  let voiceStates;
  collapsed = collapsed.collapsed;
  ({ channel: importDefault, voiceStates, audienceCount } = collapsed);
  let tmp = null;
  if (0 !== voiceStates.length) {
    let obj = { collapsed };
    const items = [voiceStates.map((user) => outer1_5(outer1_9, { voiceState: user, channel: closure_1, collapsed, isFirst: 0 === arg1 }, "voice-user-item-" + user.user.id + "-" + user.voiceState.sessionId)), ];
    let tmp6 = null != audienceCount && audienceCount > 0;
    if (tmp6) {
      obj = { audienceCount, collapsed };
      tmp6 = callback(AudienceItem, obj);
    }
    items[1] = tmp6;
    obj.children = items;
    tmp = closure_6(importDefault(14979), obj);
    const tmp2 = closure_6;
    const tmp5 = importDefault(14979);
  }
  return tmp;
};
export const getAudienceItemHeight = function getAudienceItemHeight(fontScale) {
  return 8 + Math.max(20, require(9889) /* scaleLineHeight */.scaleTextLineHeight(c7, fontScale));
};
