// Module ID: 14858
// Function ID: 111960
// Name: AudienceItem
// Dependencies: []
// Exports: default, getAudienceItemHeight

// Module 14858 (AudienceItem)
function AudienceItem(arg0) {
  let audienceCount;
  let collapsed;
  ({ audienceCount, collapsed } = arg0);
  const tmp = callback2(importDefault(dependencyMap[7])());
  let formatToPlainStringResult = audienceCount;
  if (!collapsed) {
    const intl = arg1(dependencyMap[11]).intl;
    let obj = { count: audienceCount };
    formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[11]).t.+v2pN2, obj);
  }
  obj = { style: collapsed ? tmp.listenersCollapsed : tmp.listeners };
  obj = { style: tmp.listenersIconWrapper, children: callback(arg1(dependencyMap[12]).HeadphonesIcon, obj1) };
  const obj1 = { GuildBadgeSnail: true, EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED: true, style: tmp.headphonesIcon };
  const items = [callback(View, obj), ];
  const obj2 = { style: tmp.listenersText, variant: closure_7, color: "redesign-channel-name-muted-text", children: formatToPlainStringResult };
  items[1] = callback(arg1(dependencyMap[13]).Text, obj2);
  obj.children = items;
  return closure_6(View, obj);
}
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let closure_7 = "text-sm/medium";
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles((arg0) => {
  const colors = importDefault(dependencyMap[5]).colors;
  const tmp = arg0 ? colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT : colors.BACKGROUND_BASE_LOWEST;
  const round = importDefault(dependencyMap[5]).radii.round;
  let obj = { listeners: { highestAncestorCache: false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false }, listenersCollapsed: { backgroundColor: tmp, borderRadius: round } };
  obj = { backgroundColor: tmp, borderRadius: round };
  const merged = Object.assign(arg1(dependencyMap[6]).makeSizeStyle(20));
  obj.listenersIconWrapper = obj;
  obj.listenersText = { marginRight: 4 };
  obj.userCollapsedOverlap = { marginLeft: -20 };
  const obj3 = arg1(dependencyMap[6]);
  obj.headphonesIcon = arg1(dependencyMap[6]).makeSizeStyle(14);
  return obj;
});
let closure_9 = importAllResult.memo((voiceState) => {
  let member;
  let voiceState2;
  voiceState = voiceState.voiceState;
  const user = voiceState.user;
  const arg1 = user;
  ({ member, voiceState: voiceState2 } = voiceState);
  const channel = voiceState.channel;
  const importDefault = channel;
  const collapsed = voiceState.collapsed;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const items1 = [channel.guild_id, user.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ storeMember: closure_4.getMember(channel.guild_id, user.id), isGuest: closure_4.isGuestOrLurker(channel.guild_id, user.id) }), items1);
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
  const tmp = callback2(importDefault(dependencyMap[7])());
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
  obj.children = tmp6(importDefault(dependencyMap[9]), obj, user.id);
  return tmp3(tmp4, obj);
});
const obj2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default function VoiceUsers(collapsed) {
  let audienceCount;
  let voiceStates;
  collapsed = collapsed.collapsed;
  const arg1 = collapsed;
  ({ channel: closure_1, voiceStates, audienceCount } = collapsed);
  let tmp = null;
  if (0 !== voiceStates.length) {
    let obj = { collapsed };
    const items = [voiceStates.map((user) => callback(closure_9, { voiceState: user, channel: closure_1, collapsed, isFirst: 0 === arg1 }, "voice-user-item-" + user.user.id + "-" + user.voiceState.sessionId)), ];
    let tmp6 = null != audienceCount && audienceCount > 0;
    if (tmp6) {
      obj = { audienceCount, collapsed };
      tmp6 = callback(AudienceItem, obj);
    }
    items[1] = tmp6;
    obj.children = items;
    tmp = closure_6(importDefault(dependencyMap[14]), obj);
    const tmp2 = closure_6;
    const tmp5 = importDefault(dependencyMap[14]);
  }
  return tmp;
};
export const getAudienceItemHeight = function getAudienceItemHeight(fontScale) {
  return 8 + Math.max(20, arg1(dependencyMap[10]).scaleTextLineHeight(closure_7, fontScale));
};
