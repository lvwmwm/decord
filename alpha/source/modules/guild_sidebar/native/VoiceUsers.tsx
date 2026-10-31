// Module ID: 18166
// Function ID: 18167
// Name: VoiceUsers
// Dependencies: [19, 17, 4926, 21, 5014, 575, 11049, 9822, 9235, 504, 18167, 11047, 1113, 14089, 5624, 18171, 7482, 18174, 2]
// Exports: default, getAudienceItemHeight

// Module 18166 (VoiceUsers)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9822 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11047 */;
import ChannelListLayout from "ChannelListLayout" /* 11049 */;
import HeadphonesIcon from "HeadphonesIcon" /* 14089 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function AudienceItem(arg0) {
  let audienceCount;
  let collapsed;
  let items;
  let obj4;
  ({ audienceCount, collapsed } = arg0);
  const tmp2 = closure_11(useIsUsingClientThemeDefault());
  let formatToPlainStringResult = audienceCount;
  if (!collapsed) {
    const intl = intl2.intl;
    const obj = { count: audienceCount };
    formatToPlainStringResult = intl.formatToPlainString(intl2.t["+v2pN2"], obj);
  }
  const obj2 = { style: collapsed ? tmp2.listenersCollapsed : tmp2.listeners, children: items };
  const obj3 = { style: tmp2.listenersIconWrapper, children: metroRequire(HeadphonesIcon.HeadphonesIcon, obj4) };
  obj4 = { color: "redesign-channel-name-muted-text", size: "custom", style: tmp2.headphonesIcon };
  items = [metroRequire(View, obj3), ];
  const obj5 = { style: tmp2.listenersText, variant, color: "redesign-channel-name-muted-text", children: formatToPlainStringResult };
  items[1] = metroRequire(Text_Text.Text, obj5);
  return metroImportDefault(View, obj2);
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = {};
let closure_9 = [];
let c10 = "text-sm/medium";
let closure_11 = createStyles.createStyles((arg0) => {
  let BACKGROUND_BASE_LOWEST;
  let obj2;
  let obj4;
  let tmp5;
  const colors = nativeDefault.colors;
  const tmp3 = arg0;
  if (tmp3) {
    BACKGROUND_BASE_LOWEST = colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
    tmp5 = tmp;
  } else {
    BACKGROUND_BASE_LOWEST = colors.BACKGROUND_BASE_LOWEST;
    tmp5 = tmp;
  }
  const round = tmp5(575).radii.round;
  const obj = { listeners: { display: "flex", flexDirection: "row", alignItems: "center", padding: 4, marginTop: 4, marginLeft: -8 }, listenersCollapsed: { flexDirection: "row", alignItems: "center", backgroundColor: BACKGROUND_BASE_LOWEST, borderRadius: round, marginLeft: -16, marginTop: 4, paddingLeft: 2, paddingRight: 6 }, listenersIconWrapper: obj2, listenersText: { marginRight: 4 }, userCollapsedOverlap: { marginLeft: -20 }, headphonesIcon: obj4.makeSizeStyle(14) };
  obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: BACKGROUND_BASE_LOWEST, marginRight: 8, marginLeft: 4, borderRadius: round };
  const obj3 = ChannelListLayout;
  const merged = Object.assign(obj3.makeSizeStyle(20));
  obj4 = ChannelListLayout;
  return obj;
});
let closure_12 = react.memo(function VoiceStateUserItem(voiceState) {
  let isGuest;
  let obj6;
  let storeMember;
  let tmpResult;
  voiceState = voiceState.voiceState;
  const user = voiceState.user;
  let member = voiceState.member;
  const channel = voiceState.channel;
  const collapsed = voiceState.collapsed;
  const voiceState2 = voiceState.voiceState;
  const isFirst = voiceState.isFirst;
  const tmp3 = closure_11(channel(9822)());
  const withLocalSelfMuteDeaf = user(9235).withLocalSelfMuteDeaf;
  user(9235);
  let obj = user(9235);
  const result = withLocalSelfMuteDeaf(voiceState2, obj.useLocalSelfMuteDeaf());
  const items = [GuildMemberStore];
  const items1 = [channel.guild_id, user.id];
  const obj2 = user(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { storeMember: GuildMemberStore.getMember(channel.guild_id, user.id), isGuest: GuildMemberStore.isGuestOrLurker(channel.guild_id, user.id) };
    return obj;
  }, items1);
  let userCollapsedOverlap = null;
  ({ storeMember, isGuest } = stateFromStoresObject);
  const tmp = channel;
  const tmp8 = View;
  if (collapsed) {
    userCollapsedOverlap = null;
    if (!isFirst) {
      userCollapsedOverlap = tmp3.userCollapsedOverlap;
    }
  }
  const obj3 = { style: userCollapsedOverlap, children: closure_6(tmpResult, obj6, user.id) };
  obj6 = { user, member, mute: null, deaf: null, selfVideo: null, selfMute: null, selfDeaf: null, suppress: null, collapsed, sessionId: result.sessionId, channel, isGuest };
  tmpResult = tmp(18167);
  if (member == null) {
    member = storeMember;
  }
  ({ mute: obj4.mute, deaf: obj4.deaf, selfVideo: obj4.selfVideo, selfMute: obj4.selfMute, selfDeaf: obj4.selfDeaf, suppress: obj4.suppress } = result);
  return closure_6(tmp8, obj3);
});
let result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default function VoiceUsers(collapsed) {
  let audienceCount;
  let items1;
  let length;
  let mapped;
  let voiceStates;
  collapsed = collapsed.collapsed;
  const channel = collapsed.channel;
  ({ voiceStates, audienceCount } = collapsed);
  react = undefined;
  const guild_id = channel.guild_id;
  const tmp2 = guild_id;
  const tmp = channel;
  let tmp3 = channel(guild_id[15]);
  if (null != guild_id) {
    const substr = voiceStates.slice(0, collapsed(tmp2[16]).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
    mapped = substr.map((user) => user.user.id);
  } else {
    mapped = closure_9;
  }
  const tmp3Result = tmp3(mapped);
  react = tmp3Result;
  const items = [guild_id, tmp3Result];
  const memo = react.useMemo(() => {
    if (null != guild_id) {
      let tmp3;
      if (length.length > 0) {
        const obj = {};
        obj[tmp] = tmp2;
        tmp3 = obj;
      }
      return tmp3;
    }
    tmp3 = closure_8;
  }, items);
  let obj = collapsed(tmp2[16]);
  const subscribeGuildMembers = obj.useSubscribeGuildMembers(memo, "voice_channel_games");
  let tmp10Result = null;
  if (0 !== voiceStates.length) {
    const obj2 = { collapsed, children: items1 };
    items1 = [, ];
    const tmpResult = tmp(tmp2[17]);
    items1[0] = voiceStates.map(function renderVoiceState(voiceState, index) {
      const obj = { voiceState, channel, collapsed, isFirst: 0 === index };
      return metroRequire(closure_12, obj, "voice-user-item-" + voiceState.user.id + "-" + voiceState.voiceState.sessionId);
    });
    let tmp12 = null != audienceCount && audienceCount > 0;
    const tmp10 = closure_7;
    if (tmp12) {
      const obj3 = { audienceCount, collapsed };
      tmp12 = closure_6(AudienceItem, obj3);
    }
    items1[1] = tmp12;
    tmp10Result = tmp10(tmpResult, obj2);
  }
  return tmp10Result;
};
export function getAudienceItemHeight(fontScale) {
  const obj = useScaledTextLineHeight;
  return 8 + Math.max(20, obj.scaleTextLineHeight(c10, fontScale));
}
