// Module ID: 14857
// Function ID: 14858
// Name: UserProfileVoiceSettings
// Dependencies: [19, 17, 6053, 2007, 4941, 5759, 1072, 1083, 21, 5009, 8753, 504, 6043, 9265, 11910, 5896, 7370, 1114, 9223, 11933, 14858, 14052, 1253, 14860, 11021, 7080, 5619, 14143, 14697, 8169, 5253, 9250, 9246, 2]
// Exports: default

// Module 14857 (UserProfileVoiceSettings)
import react_native from "react-native" /* 17 */;
import Constants2 from "Constants" /* 1083 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5896 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9250 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 14143 */;
import react from "react" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6053 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
function UserVoiceSettings(user) {
  let MicrophoneIcon;
  let SoundboardIcon;
  let VideoIcon;
  let intl4;
  let intl5;
  let intl6;
  let isLocalMute;
  let isLocalVideoDisabled;
  let items4;
  let items5;
  let localVolume;
  let obj15;
  let string2Result;
  let supportsDisableLocalVideo;
  user = user.user;
  const channel = user.channel;
  let trackUserProfileAction;
  isLocalVideoDisabled = undefined;
  let stateFromStores1;
  const style = user.style;
  let tmp = closure_13();
  let tmp2 = user;
  let obj = user(trackUserProfileAction[10]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(trackUserProfileAction[11]);
  const items = [stateFromStores1];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
    return obj;
  });
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  const items1 = [PermissionStore];
  const obj3 = user(trackUserProfileAction[11]);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    const tmp = channel;
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
    }
    return isPrivateResult;
  });
  const tmp7 = channel(trackUserProfileAction[12])(user.id, channel.id);
  const items2 = [isLocalVideoAutoDisabled];
  const obj4 = user(trackUserProfileAction[11]);
  stateFromStores1 = obj4.useStateFromStores(items2, () => SoundboardStore.isLocalSoundboardMuted(user.id));
  const obj5 = user(trackUserProfileAction[13]);
  const obj6 = { channelId: channel.id };
  const isSecureFramesUIEnabled = obj5.useIsSecureFramesUIEnabled(obj6);
  const items3 = [];
  const obj7 = {
    style: tmp.volumeSlider,
    value: localVolume,
    onValueChange(arg0) {
      trackUserProfileAction({ action: "SET_VOLUME" });
      const obj = AudioActionCreatorsDefault;
      obj.setLocalVolume(user.id, arg0);
    }
  };
  items3[0] = closure_11(channel(trackUserProfileAction[14]), obj7, "set-volume");
  let tmp11 = !stateFromStores;
  const tmp6 = channel;
  if (stateFromStores) {
    tmp11 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[12]).RequestToSpeakStates.ON_STAGE;
    channel.isGuildStageVoice() && tmp7 !== tmp2(trackUserProfileAction[12]).RequestToSpeakStates.ON_STAGE;
  }
  if (!tmp11) {
    let stringResult;
    const push = items3.push;
    const UserProfileFormRow = tmp2(tmp3[16]).UserProfileFormRow;
    const intl = tmp2(tmp3[17]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[17]).t;
    if (isLocalMute) {
      stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj8 = {
      label: stringResult,
      icon: MicrophoneIcon,
      onPress() {
          trackUserProfileAction({ action: "MUTE" });
          const obj = AudioActionCreatorsDefault;
          obj.toggleLocalMute(user.id);
        }
    };
    if (isLocalMute) {
      MicrophoneIcon = tmp2(tmp3[18]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[19]).MicrophoneIcon;
    }
    push(closure_11(UserProfileFormRow, obj8, "mute"));
  }
  const push2 = items3.push;
  const UserProfileFormRow2 = tmp2(tmp3[16]).UserProfileFormRow;
  const intl2 = tmp2(tmp3[17]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(tmp3[17]).t;
  if (stateFromStores1) {
    string2Result = string2(t2["639hQT"]);
  } else {
    string2Result = string2(t2.LxhEuG);
  }
  const obj9 = {
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
      const AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED = metroImportAll.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED;
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
    SoundboardIcon = tmp2(tmp3[20]).SoundboardSlashIcon;
  } else {
    SoundboardIcon = tmp2(tmp3[21]).SoundboardIcon;
  }
  push2(closure_11(UserProfileFormRow2, obj9, "mute-soundboard"));
  if (supportsDisableLocalVideo) {
    let string3Result;
    const push3 = items3.push;
    const UserProfileFormRow3 = tmp2(tmp3[16]).UserProfileFormRow;
    const intl3 = tmp2(tmp3[17]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(tmp3[17]).t;
    if (isLocalVideoDisabled) {
      string3Result = string3(t3["xc+Psz"]);
    } else {
      string3Result = string3(t3["4MMsWF"]);
    }
    const obj10 = {
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
              const obj = channel(trackUserProfileAction[15]);
              return obj.setDisableLocalVideo(id.id, constants.MANUAL_ENABLED);
            });
          } else {
            let obj = AudioActionCreatorsDefault;
            obj.setDisableLocalVideo(user.id, isLocalVideoDisabled ? React4.MANUAL_ENABLED : React4.DISABLED);
          }
        }
    };
    if (isLocalVideoDisabled) {
      VideoIcon = tmp2(tmp3[23]).VideoSlashIcon;
    } else {
      VideoIcon = tmp2(tmp3[24]).VideoIcon;
    }
    if (isLocalVideoAutoDisabled) {
      const obj11 = { style: tmp.disableVideoSublabel, children: items4 };
      items4 = [tmp10(tmp2(tmp3[25]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" }), ];
      const obj12 = { variant: "text-xs/medium", color: "text-feedback-warning", children: intl4.string(tmp2(trackUserProfileAction[17]).t.m2Hyj0) };
      const Text = tmp2(tmp3[26]).Text;
      intl4 = tmp2(tmp3[17]).intl;
      items4[1] = closure_11(Text, obj12);
      isLocalVideoAutoDisabled = closure_12(isLocalVideoDisabled, obj11);
    }
    push3(closure_11(UserProfileFormRow3, obj10, "disable-video"));
  }
  if (isSecureFramesUIEnabled) {
    const push4 = items3.push;
    const obj13 = {
      label: intl5.string(tmp2(trackUserProfileAction[17]).t["8ErYvY"]),
      icon: tmp2(trackUserProfileAction[28]).ShieldLockIcon,
      hint: tmp2(trackUserProfileAction[29]).FormArrow,
      onPress() {
          let id;
          trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          let obj2 = SecureFramesPlatformUtilsDefault;
          const result = obj2.openSecureFramesUserVerificationModal(user.id, channel.id, () => {
            const obj = user(trackUserProfileAction[32]);
            const obj2 = { userId: id.id, channelId: channel.id, guildId: channel.guild_id };
            return obj.validateSecureFramesKeyConsistent(obj2);
          });
        }
    };
    const UserProfileFormRow4 = tmp2(tmp3[16]).UserProfileFormRow;
    intl5 = tmp2(tmp3[17]).intl;
    push4(closure_11(UserProfileFormRow4, obj13, "view-secure-frames-verification-code"));
  }
  let tmp10Result = null;
  if (0 !== items3.length) {
    const obj14 = { style: items5, title: intl6.string(tmp2(trackUserProfileAction[17]).t.dsXapM), titleStyle: tmp.cardTitle, children: closure_11(tmp2(trackUserProfileAction[16]).UserProfileCardRows, obj15) };
    items5 = [tmp.card, style];
    const tmp6Result = tmp6(trackUserProfileAction[16]);
    intl6 = tmp2(tmp3[17]).intl;
    obj15 = { children: items3 };
    tmp10Result = tmp10(tmp6Result, obj14);
  }
  return tmp10Result;
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
  let tmp = closure_13();
  let obj = channel(8753);
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
      const obj4 = { style: items2, title: intl.string(channel(1114).t.NiTd0e), titleStyle: tmp.cardTitle, children: closure_11(UserProfileCardRows, obj6) };
      items2 = [tmp.card, style];
      const tmp6Result = tmp6(7370);
      intl = tmp2(1114).intl;
      UserProfileCardRows = tmp2(7370).UserProfileCardRows;
      const UserProfileFormRow = tmp2(7370).UserProfileFormRow;
      const intl2 = tmp2(1114).intl;
      const string = intl2.string;
      const t = tmp2(1114).t;
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
        MicrophoneIcon = tmp2(9223).MicrophoneSlashIcon;
      } else {
        MicrophoneIcon = tmp2(11933).MicrophoneIcon;
      }
      obj6 = { children: closure_11(UserProfileFormRow, obj5, "mute") };
      tmp9Result = tmp9(tmp6Result, obj4);
    } else {
      tmp9Result = null;
    }
  }
  return tmp9Result;
}
const View = react_native.View;
({ AnalyticEvents: metroImportAll, VideoToggleState: c9 } = Constants);
const Permissions = Constants2.Permissions;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 } });
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
    tmp3 = unpackModuleId(CurrentUserVoiceSettings, obj2);
  } else {
    const obj = { user, channel, style };
    tmp3 = unpackModuleId(UserVoiceSettings, obj);
  }
  return tmp3;
};
