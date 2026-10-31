// Module ID: 18168
// Function ID: 18169
// Name: VoiceUserItem
// Dependencies: [19, 17, 1072, 21, 1187, 11047, 5014, 575, 11049, 9291, 9293, 1252, 1409, 18169, 9240, 9242, 9236, 9238, 11040, 8608, 14738, 9294, 2]
// Exports: getVoiceUserHeight

// Module 18168 (VoiceUserItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11047 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import ChannelListLayout from "ChannelListLayout" /* 11049 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = "text-sm/medium";
let c9 = "redesign-channel-name-muted-text";
const XSMALL_20 = native.AvatarSizes.XSMALL_20;
let createStyles = createStyles_mod;
let obj = { voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 }, disabled: { opacity: 0.5 }, voiceStateCollapsed: size, voiceStateIcon: obj2, legacyVoiceStateIcon: obj3, gameIcon: { marginLeft: 6 } };
size = { marginTop: 4, marginRight: 8, width: 32, height: 32, borderRadius: nativeDefault.radii.lg, borderWidth: 4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { marginLeft: 6 };
let merged = Object.assign(ChannelListLayout.makeSizeStyle(14));
obj3 = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
let closure_11 = createStyles(obj);
const memoResult = react.memo(function VoiceUserItem(guildId) {
  let collapsed;
  let deaf;
  let disabled;
  let isInEmbeddedActivity;
  let items2;
  let localMute;
  let mute;
  let obj3;
  let platform;
  let serverDeaf;
  let serverMute;
  let stream;
  let tmp7Result;
  let user;
  let video;
  let voicePlatform;
  ({ member: require, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ disabled, platform, isInEmbeddedActivity } = guildId);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, voicePlatform } = guildId);
  const tmp = closure_11();
  const first = user(guildId[9])(user.id, guildId)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  function getSource() {
    if (null != require) {
      let guildMemberAvatarSource;
      if (null != require.avatar) {
        const obj = AvatarUtilsDefault;
        guildMemberAvatarSource = obj.getGuildMemberAvatarSource(tmp, user);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = user.getAvatarSource(guildId);
  }
  const gameRecord = tmp2(tmp3[10])(application_id).gameRecord;
  const items = [guildId, channelId, application_id];
  if (collapsed) {
    let obj2 = { style: tmp.voiceStateCollapsed, children: closure_6(require("native").Avatar, obj3) };
    obj3 = { source: getSource, size: XSMALL_20 };
    tmp7Result = closure_6(application_id, obj2);
  } else {
    const items1 = [tmp.voiceState, ];
    let disabled2 = disabled;
    const tmp7 = closure_7;
    const tmp8 = application_id;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    let obj = { style: items1, children: items2 };
    items1[1] = disabled2;
    const obj4 = { source: getSource, size: XSMALL_20 };
    items2 = [closure_6(require("native").Avatar, obj4), , , , , , , , ];
    const obj5 = { variant, color };
    const tmp2Result = user(guildId[13]);
    const merged = Object.assign(guildId);
    items2[1] = closure_6(tmp2Result, obj5);
    let tmp18 = null;
    if (!disabled) {
      let tmp9Result;
      if (serverMute) {
        const obj6 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        tmp9Result = tmp9(tmp10(tmp3[14]).MicrophoneDenyIcon, obj6);
      } else if (localMute) {
        const obj7 = { style: tmp.voiceStateIcon, size: "custom", color };
        tmp9Result = tmp9(tmp10(tmp3[14]).MicrophoneDenyIcon, obj7);
      } else {
        tmp9Result = null;
        if (mute) {
          const obj8 = { style: tmp.voiceStateIcon, size: "custom", color };
          tmp9Result = tmp9(tmp10(tmp3[15]).MicrophoneSlashIcon, obj8);
        }
      }
      tmp18 = tmp9Result;
    }
    items2[2] = tmp18;
    let tmp20 = null;
    if (!disabled) {
      let tmp9Result7;
      if (serverDeaf) {
        const obj9 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        tmp9Result7 = tmp9(tmp10(tmp3[16]).HeadphonesDenyIcon, obj9);
      } else {
        tmp9Result7 = null;
        if (deaf) {
          const obj10 = { style: tmp.voiceStateIcon, size: "custom", color };
          tmp9Result7 = tmp9(tmp10(tmp3[17]).HeadphonesSlashIcon, obj10);
        }
      }
      tmp20 = tmp9Result7;
    }
    items2[3] = tmp20;
    let tmp9Result8 = null;
    if (video) {
      tmp9Result8 = null;
      if (!disabled) {
        const obj11 = { size: "custom", color, style: tmp.voiceStateIcon };
        tmp9Result8 = tmp9(tmp10(tmp3[18]).VideoIcon, obj11);
      }
    }
    items2[4] = tmp9Result8;
    let tmp9Result9 = null;
    if (isInEmbeddedActivity) {
      const obj12 = { source: user(guildId[19]), size: require("native").Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
      const Icon = tmp10(tmp3[4]).Icon;
      tmp9Result9 = tmp9(Icon, obj12);
    }
    items2[5] = tmp9Result9;
    const tmp2Result2 = user(guildId[20]);
    if (platform == null) {
      platform = "";
    }
    let tmp2Result1Result = tmp2Result2(platform);
    if (tmp2Result1Result == null) {
      const tmp10Result = require("getConsoleIcon");
      tmp2Result1Result = tmp10Result.getConsoleIconForVoicePlatform(voicePlatform);
    }
    let tmp9Result10 = null;
    if (null != tmp2Result1Result) {
      const obj13 = { source: tmp2Result1Result, size: require("native").Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
      const Icon2 = tmp10(tmp3[4]).Icon;
      tmp9Result10 = tmp9(Icon2, obj13);
    }
    items2[6] = tmp9Result10;
    let tmp9Result11 = null;
    if (stream) {
      const obj14 = { style: tmp.legacyVoiceStateIcon };
      tmp9Result11 = tmp9(tmp10(tmp3[4]).LiveTag, obj14);
    }
    items2[7] = tmp9Result11;
    let tmp9Result12 = null;
    if (!disabled) {
      tmp9Result12 = null;
      if (!isInEmbeddedActivity) {
        tmp9Result12 = null;
        if (null != gameRecord) {
          const obj15 = { game: gameRecord, size: 16, fallback: "none", style: tmp.gameIcon, onShown: tmp6 };
          tmp9Result12 = tmp9(tmp2(tmp3[21]), obj15);
        }
      }
    }
    items2[8] = tmp9Result12;
    tmp7Result = tmp7(tmp8, obj);
  }
  return tmp7Result;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default memoResult;
export function getVoiceUserHeight(fontScale) {
  const obj = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight(c8, fontScale);
  return Math.max(scaleTextLineHeightResult, native.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
}
