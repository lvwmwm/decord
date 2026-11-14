// Module ID: 15759
// Function ID: 15760
// Name: UserProfileVoiceSettings
// Dependencies: [19, 17, 6369, 6820, 2133, 5238, 6071, 1072, 1083, 6075, 21, 5306, 8545, 504, 6358, 10646, 13060, 6096, 13002, 6225, 13017, 7746, 15760, 1113, 6233, 15762, 15764, 7961, 10604, 13048, 15765, 10726, 1256, 15767, 11046, 7623, 5929, 12123, 10815, 8106, 5552, 10631, 10627, 2]
// Exports: default

// Module 15759 (UserProfileVoiceSettings)
import react_native from "react-native" /* 17 */;
import Constants2 from "Constants" /* 1083 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Constants3 from "Constants" /* 6075 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6225 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6233 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 10631 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12123 */;
import completeStreamVolumeMovedTutorialDefault from "completeStreamVolumeMovedTutorial" /* 15764 */;
import react from "react" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6369 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6820 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_14;
let map1;
function UserVoiceSettings(user) {
  let MicrophoneIcon;
  let SoundboardIcon;
  let TableSliderRow2;
  let VideoIcon;
  let _undefined;
  let c6;
  let cardTitle;
  let effectiveVolume;
  let intl;
  let intl2;
  let intl6;
  let intl7;
  let intl8;
  let isLocalMute;
  let isLocalVideoDisabled;
  let items6;
  let items7;
  let localVolume;
  let obj11;
  let obj20;
  let string2Result;
  let tmp14Result;
  let tmp15;
  let tmp2Result;
  let tmp2Result2;
  user = user.user;
  const channel = user.channel;
  let trackUserProfileAction;
  isLocalVideoDisabled = undefined;
  c6 = undefined;
  const style = user.style;
  let tmp = closure_15();
  let tmp2 = user;
  let obj = user(trackUserProfileAction[12]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(trackUserProfileAction[13]);
  const items = [c6];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
    return obj;
  });
  ({ localVolume, isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  const supportsDisableLocalVideo = stateFromStoresObject.supportsDisableLocalVideo;
  const items1 = [PermissionStore];
  const obj3 = user(trackUserProfileAction[13]);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    const tmp = channel;
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
    }
    return isPrivateResult;
  });
  const tmp7 = channel(trackUserProfileAction[14])(user.id, channel.id);
  const items2 = [isLocalVideoAutoDisabled];
  const obj4 = user(trackUserProfileAction[13]);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => SoundboardStore.isLocalSoundboardMuted(user.id));
  const obj5 = user(trackUserProfileAction[15]);
  const obj6 = { channelId: channel.id };
  const isSecureFramesUIEnabled = obj5.useIsSecureFramesUIEnabled(obj6);
  const items3 = [stateFromStores1];
  const obj7 = user(trackUserProfileAction[13]);
  const stateFromStores2 = obj7.useStateFromStores(items3, () => ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined));
  let ownerId;
  const tmp11 = channel(trackUserProfileAction[16]);
  if (stateFromStores2 != null) {
    ownerId = stateFromStores2.ownerId;
  }
  ({ handleVolumeChange: c6, effectiveVolume } = tmp11(ownerId, tmp2(trackUserProfileAction[17]).MediaEngineContextTypes.STREAM));
  tmp11(ownerId, tmp2(trackUserProfileAction[17]).MediaEngineContextTypes.STREAM);
  const tmp6Result = channel(trackUserProfileAction[18]);
  const nonContextualStreamOutputPresent = tmp6Result.useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  if (nonContextualStreamOutputPresent) {
    function handleVolumeChange(arg0) {
      trackUserProfileAction({ action: "SET_VOLUME" });
      const obj = AudioActionCreatorsDefault;
      obj.setLocalVolume(user.id, arg0);
    }
    const obj8 = { style: tmp.volumeSlider, value: localVolume, onValueChange: handleVolumeChange };
    tmp14Result = closure_13(tmp6(tmp3[20]), obj8, "set-volume");
    tmp15 = closure_13;
  } else {
    tmp15 = closure_13;
    const TableRowGroup = tmp2(tmp3[21]).TableRowGroup;
    const obj9 = {
      label: intl.string(tmp2(trackUserProfileAction[23]).t.m7TNdF),
      value: tmp2Result.amplitudeToPerceptual(localVolume),
      maxValue,
      formatValue(arg0) {
          return "" + Math.round(arg0) + "%";
        },
      onChange(arg0) {
          const obj = PerceptualVolumeUtils;
          const result = obj.perceptualToAmplitude(arg0);
          trackUserProfileAction({ action: "SET_VOLUME" });
          const obj2 = AudioActionCreatorsDefault;
          obj2.setLocalVolume(user.id, result);
        }
    };
    const TableSliderRow = tmp2(tmp3[22]).TableSliderRow;
    intl = tmp2(tmp3[23]).intl;
    tmp2Result = tmp2(tmp3[24]);
    const items4 = [closure_13(TableSliderRow, obj9), ];
    let tmp15Result = null != stateFromStores2;
    const tmp14 = closure_14;
    const tmp16 = maxValue;
    if (tmp15Result) {
      const obj10 = { userId: user.id, children: tmp15(TableSliderRow2, obj11) };
      obj11 = {
        label: intl2.string(tmp2(trackUserProfileAction[23]).t.pEAl4b),
        value: tmp2Result2.amplitudeToPerceptual(effectiveVolume),
        maxValue: tmp16,
        formatValue(arg0) {
              return "" + Math.round(arg0) + "%";
            },
        onChange(arg0) {
              const obj = PerceptualVolumeUtils;
              _undefined(obj.perceptualToAmplitude(arg0));
              completeStreamVolumeMovedTutorialDefault();
            }
      };
      const tmp6Result3 = channel(trackUserProfileAction[25]);
      TableSliderRow2 = tmp2(tmp3[22]).TableSliderRow;
      intl2 = tmp2(tmp3[23]).intl;
      tmp2Result2 = tmp2(trackUserProfileAction[24]);
      tmp15Result = tmp15(tmp6Result3, obj10);
    }
    const obj12 = { hasIcons: false, children: items4 };
    items4[1] = tmp15Result;
    tmp14Result = tmp14(TableRowGroup, obj12, "set-volume");
  }
  const items5 = [tmp14Result];
  let tmp21 = !stateFromStores;
  if (stateFromStores) {
    tmp21 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[14]).RequestToSpeakStates.ON_STAGE;
    channel.isGuildStageVoice() && tmp7 !== tmp2(trackUserProfileAction[14]).RequestToSpeakStates.ON_STAGE;
  }
  if (!tmp21) {
    let stringResult;
    const push = items5.push;
    const UserProfileFormRow = tmp2(tmp3[27]).UserProfileFormRow;
    const intl3 = tmp2(tmp3[23]).intl;
    const string = intl3.string;
    const t = tmp2(tmp3[23]).t;
    if (isLocalMute) {
      stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj13 = {
      label: stringResult,
      icon: MicrophoneIcon,
      onPress() {
          trackUserProfileAction({ action: "MUTE" });
          const obj = AudioActionCreatorsDefault;
          obj.toggleLocalMute(user.id);
        }
    };
    if (isLocalMute) {
      MicrophoneIcon = tmp2(tmp3[28]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[29]).MicrophoneIcon;
    }
    push(tmp15(UserProfileFormRow, obj13, "mute"));
  }
  const push2 = items5.push;
  const UserProfileFormRow2 = tmp2(tmp3[27]).UserProfileFormRow;
  const intl4 = tmp2(tmp3[23]).intl;
  const string2 = intl4.string;
  const t2 = tmp2(tmp3[23]).t;
  if (stateFromStores1) {
    string2Result = string2(t2["639hQT"]);
  } else {
    string2Result = string2(t2.LxhEuG);
  }
  const obj14 = {
    label: string2Result,
    icon: SoundboardIcon,
    onPress() {
      let mediaSessionId;
      let parentMediaSessionId;
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      const obj = { guild_id: channel.guild_id, target_user_id: user.id, media_session_id: mediaSessionId, parent_media_session_id: parentMediaSessionId, mute_soundboard: !stateFromStores1 };
      mediaSessionId = undefined;
      const track = AnalyticsUtilsDefault.track;
      const AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED = constants.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED;
      AnalyticsUtilsDefault;
      const tmp5 = user;
      if (rTCConnection != null) {
        mediaSessionId = rTCConnection.getMediaSessionId();
      }
      parentMediaSessionId = undefined;
      if (rTCConnection != null) {
        parentMediaSessionId = rTCConnection.parentMediaSessionId;
      }
      track(AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, obj);
      const tmp2Result = AudioActionCreatorsDefault;
      const result = tmp2Result.toggleLocalSoundboardMute(tmp5.id);
    }
  };
  if (stateFromStores1) {
    SoundboardIcon = tmp2(tmp3[30]).SoundboardSlashIcon;
  } else {
    SoundboardIcon = tmp2(tmp3[31]).SoundboardIcon;
  }
  push2(tmp15(UserProfileFormRow2, obj14, "mute-soundboard"));
  if (supportsDisableLocalVideo) {
    let string3Result;
    const push3 = items5.push;
    const UserProfileFormRow3 = tmp2(tmp3[27]).UserProfileFormRow;
    const intl5 = tmp2(tmp3[23]).intl;
    const string3 = intl5.string;
    const t3 = tmp2(tmp3[23]).t;
    if (isLocalVideoDisabled) {
      string3Result = string3(t3["xc+Psz"]);
    } else {
      string3Result = string3(t3["4MMsWF"]);
    }
    const obj15 = {
      label: string3Result,
      icon: VideoIcon,
      sublabel: isLocalVideoAutoDisabled,
      onPress() {
          let id;
          trackUserProfileAction({ action: "DISABLE_VIDEO" });
          const tmp2 = isLocalVideoAutoDisabled;
          if (tmp2) {
            const obj2 = UserProfileAlertUtils;
            const result = obj2.confirmVideoUnstableConnection(() => {
              const obj = channel(trackUserProfileAction[19]);
              return obj.setDisableLocalVideo(id.id, constants.MANUAL_ENABLED);
            });
          } else {
            let obj = AudioActionCreatorsDefault;
            obj.setDisableLocalVideo(user.id, isLocalVideoDisabled ? authStore.MANUAL_ENABLED : authStore.DISABLED);
          }
        }
    };
    if (isLocalVideoDisabled) {
      VideoIcon = tmp2(tmp3[33]).VideoSlashIcon;
    } else {
      VideoIcon = tmp2(tmp3[34]).VideoIcon;
    }
    if (isLocalVideoAutoDisabled) {
      const obj16 = { style: tmp.disableVideoSublabel, children: items6 };
      items6 = [tmp15(tmp2(tmp3[35]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" }), ];
      const obj17 = { variant: "body-xs/medium", color: "text-feedback-warning", children: intl6.string(tmp2(trackUserProfileAction[23]).t.m2Hyj0) };
      const Text = tmp2(tmp3[36]).Text;
      intl6 = tmp2(tmp3[23]).intl;
      items6[1] = tmp15(Text, obj17);
      isLocalVideoAutoDisabled = closure_14(isLocalVideoDisabled, obj16);
    }
    push3(tmp15(UserProfileFormRow3, obj15, "disable-video"));
  }
  if (isSecureFramesUIEnabled) {
    const push4 = items5.push;
    const obj18 = {
      label: intl7.string(tmp2(trackUserProfileAction[23]).t["8ErYvY"]),
      icon: tmp2(trackUserProfileAction[38]).ShieldLockIcon,
      hint: tmp2(trackUserProfileAction[39]).FormArrow,
      onPress() {
          let id;
          trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          let obj2 = SecureFramesPlatformUtilsDefault;
          const result = obj2.openSecureFramesUserVerificationModal(user.id, channel.id, () => {
            const obj = user(trackUserProfileAction[42]);
            const obj2 = { userId: id.id, channelId: channel.id, guildId: channel.guild_id };
            return obj.validateSecureFramesKeyConsistent(obj2);
          });
        }
    };
    const UserProfileFormRow4 = tmp2(tmp3[27]).UserProfileFormRow;
    intl7 = tmp2(tmp3[23]).intl;
    push4(tmp15(UserProfileFormRow4, obj18, "view-secure-frames-verification-code"));
  }
  let tmp15Result2 = null;
  if (0 !== items5.length) {
    const obj19 = { style: items7, title: intl8.string(tmp2(trackUserProfileAction[23]).t.dsXapM), titleStyle: cardTitle, children: tmp15(tmp2(trackUserProfileAction[27]).UserProfileCardRows, obj20) };
    items7 = [tmp.card, style];
    const tmp6Result4 = channel(trackUserProfileAction[27]);
    intl8 = tmp2(tmp3[23]).intl;
    cardTitle = undefined;
    if (nonContextualStreamOutputPresent) {
      cardTitle = tmp.cardTitle;
    }
    obj20 = { children: items5 };
    tmp15Result2 = tmp15(tmp6Result4, obj19);
  }
  return tmp15Result2;
}
function CurrentUserVoiceSettings(channel) {
  let MicrophoneIcon;
  let UserProfileCardRows;
  let intl;
  let items2;
  let obj6;
  let selfMute;
  let style;
  let user;
  channel = channel.channel;
  ({ user, style } = channel);
  let tmp = closure_15();
  let obj = channel(8545);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const items = [MediaEngineStore];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items, () => selfMute.isSelfMute());
  const items1 = [PermissionStore];
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    const tmp = channel;
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
    }
    return isPrivateResult;
  });
  let tmp9Result = null;
  const tmp6 = trackUserProfileAction;
  if (stateFromStores1) {
    if (!channel.isGuildStageVoice()) {
      let stringResult;
      const obj4 = { style: items2, title: intl.string(channel(1113).t.NiTd0e), titleStyle: tmp.cardTitle, children: closure_13(UserProfileCardRows, obj6) };
      items2 = [tmp.card, style];
      const tmp6Result = tmp6(7961);
      intl = tmp2(1113).intl;
      UserProfileCardRows = tmp2(7961).UserProfileCardRows;
      const UserProfileFormRow = tmp2(7961).UserProfileFormRow;
      const intl2 = tmp2(1113).intl;
      const string = intl2.string;
      const t = tmp2(1113).t;
      if (stateFromStores) {
        stringResult = string(t.NHJxcg);
      } else {
        stringResult = string(t.sWmtI6);
      }
      const obj5 = {
        label: stringResult,
        icon: MicrophoneIcon,
        onPress() {
              trackUserProfileAction({ action: "MUTE" });
              const obj = AudioActionCreatorsDefault;
              obj.toggleSelfMute();
            }
      };
      if (stateFromStores) {
        MicrophoneIcon = tmp2(10604).MicrophoneSlashIcon;
      } else {
        MicrophoneIcon = tmp2(13048).MicrophoneIcon;
      }
      obj6 = { children: closure_13(UserProfileFormRow, obj5, "mute") };
      tmp9Result = tmp9(tmp6Result, obj4);
    } else {
      tmp9Result = null;
    }
  }
  return tmp9Result;
}
const View = react_native.View;
({ AnalyticEvents: c9, VideoToggleState: c10 } = Constants);
const Permissions = Constants2.Permissions;
const maxValue = Constants3.MAX_EMBEDDED_VOLUME_PERCEPTUAL;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 } });
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceSettings.tsx");

export default function UserProfileVoiceSettings(arg0) {
  let channel;
  let currentUser;
  let style;
  let tmp3;
  let user;
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    const obj2 = { user: currentUser, channel, style };
    tmp3 = map1(CurrentUserVoiceSettings, obj2);
  } else {
    const obj = { user, channel, style };
    tmp3 = map1(UserVoiceSettings, obj);
  }
  return tmp3;
};
