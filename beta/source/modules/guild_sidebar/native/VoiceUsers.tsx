// Module ID: 15753
// Function ID: 15754
// Name: VoiceUsers
// Dependencies: [19, 17, 2108, 21, 4836, 576, 9580, 7298, 504, 15754, 9578, 1115, 12026, 4832, 9190, 15758, 6729, 15761, 2]
// Exports: default, getAudienceItemHeight

// Module 15753 (VoiceUsers)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7298 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import ChannelListLayout from "ChannelListLayout" /* 9580 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12026 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let voiceState;

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
  const round = tmp5(576).radii.round;
  const obj = { listeners: { display: "flex", flexDirection: "row", alignItems: "center", padding: 4, marginTop: 4, marginLeft: -8 }, listenersCollapsed: { flexDirection: "row", alignItems: "center", backgroundColor: BACKGROUND_BASE_LOWEST, borderRadius: round, marginLeft: -16, marginTop: 4, paddingLeft: 2, paddingRight: 6 }, listenersIconWrapper: obj2, listenersText: { marginRight: 4 }, userCollapsedOverlap: { marginLeft: -20 }, headphonesIcon: obj4.makeSizeStyle(14) };
  obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: BACKGROUND_BASE_LOWEST, marginRight: 8, marginLeft: 4, borderRadius: round };
  const obj3 = ChannelListLayout;
  const merged = Object.assign(obj3.makeSizeStyle(20));
  obj4 = ChannelListLayout;
  return obj;
});
let closure_12 = react.memo((voiceState) => {
  let isGuest;
  let member;
  let obj5;
  let storeMember;
  let tmpResult;
  let voiceState2;
  voiceState = voiceState.voiceState;
  const user = voiceState.user;
  ({ member, voiceState: voiceState2 } = voiceState);
  const channel = voiceState.channel;
  const collapsed = voiceState.collapsed;
  const isFirst = voiceState.isFirst;
  const tmp3 = closure_11(channel(7298)());
  let obj = user(504);
  const items = [GuildMemberStore];
  const items1 = [channel.guild_id, user.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { storeMember: GuildMemberStore.getMember(channel.guild_id, user.id), isGuest: GuildMemberStore.isGuestOrLurker(channel.guild_id, user.id) };
    return obj;
  }, items1);
  let userCollapsedOverlap = null;
  ({ storeMember, isGuest } = stateFromStoresObject);
  const tmp = channel;
  const tmp6 = View;
  if (collapsed) {
    userCollapsedOverlap = null;
    if (!isFirst) {
      userCollapsedOverlap = tmp3.userCollapsedOverlap;
    }
  }
  const obj2 = { style: userCollapsedOverlap, children: closure_6(tmpResult, obj5, user.id) };
  obj5 = { user, member, mute: null, deaf: null, selfVideo: null, selfMute: null, selfDeaf: null, suppress: null, collapsed, sessionId: voiceState2.sessionId, channel, isGuest };
  tmpResult = tmp(15754);
  if (member == null) {
    member = storeMember;
  }
  ({ mute: obj3.mute, deaf: obj3.deaf, selfVideo: obj3.selfVideo, selfMute: obj3.selfMute, selfDeaf: obj3.selfDeaf, suppress: obj3.suppress } = voiceState2);
  return closure_6(tmp6, obj2);
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default function VoiceUsers(collapsed) {
  let audienceCount;
  let items1;
  let length;
  let voiceStates;
  collapsed = collapsed.collapsed;
  const channel = collapsed.channel;
  ({ voiceStates, audienceCount } = collapsed);
  let guild_id;
  react = undefined;
  const tmp2 = guild_id;
  const tmp = channel;
  guild_id = channel.guild_id;
  let tmp3 = channel(guild_id[14])("channel_list");
  if (tmp3) {
    let mapped;
    if (null != guild_id) {
      const substr = voiceStates.slice(0, collapsed(tmp2[16]).MAX_GUILD_MEMBER_SUBSCRIPTIONS);
      mapped = substr.map((user) => user.user.id);
    }
    const tmp4Result = tmp4(mapped);
    react = tmp4Result;
    const items = [guild_id, tmp4Result];
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
    let tmp15Result = null;
    if (0 !== voiceStates.length) {
      const obj2 = { collapsed, children: items1 };
      items1 = [, ];
      const tmpResult = tmp(tmp2[17]);
      items1[0] = voiceStates.map((voiceState, index) => {
        const obj = { voiceState, channel, collapsed, isFirst: 0 === index };
        return metroRequire(closure_12, obj, "voice-user-item-" + voiceState.user.id + "-" + voiceState.voiceState.sessionId);
      });
      let tmp17 = null != audienceCount && audienceCount > 0;
      const tmp15 = closure_7;
      if (tmp17) {
        const obj3 = { audienceCount, collapsed };
        tmp17 = closure_6(AudienceItem, obj3);
      }
      items1[1] = tmp17;
      tmp15Result = tmp15(tmpResult, obj2);
    }
    return tmp15Result;
  }
  mapped = closure_9;
};
export const getAudienceItemHeight = function getAudienceItemHeight(fontScale) {
  const obj = useScaledTextLineHeight;
  return 8 + Math.max(20, obj.scaleTextLineHeight(c10, fontScale));
};
