// Module ID: 12617
// Function ID: 12618
// Name: UserProfileVoiceSettings
// Dependencies: [19, 17, 5319, 1993, 4469, 1074, 1085, 21, 4836, 7635, 504, 4983, 9183, 9442, 9104, 6628, 1115, 9140, 9465, 12618, 12024, 12620, 9569, 6028, 4832, 12117, 9238, 8053, 4800, 9167, 9163, 2]
// Exports: default

// Module 12617 (UserProfileVoiceSettings)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1085 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9167 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12117 */;
import react from "react" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 5319 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
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
  const style = user.style;
  let tmp = closure_11();
  let tmp2 = user;
  let obj = user(trackUserProfileAction[9]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(trackUserProfileAction[10]);
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
    return obj;
  });
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  const items1 = [PermissionStore];
  const obj3 = user(trackUserProfileAction[10]);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    const tmp = channel;
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
    }
    return isPrivateResult;
  });
  const tmp7 = channel(trackUserProfileAction[11])(user.id, channel.id);
  const items2 = [isLocalVideoAutoDisabled];
  const obj4 = user(trackUserProfileAction[10]);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => SoundboardStore.isLocalSoundboardMuted(user.id));
  const obj5 = user(trackUserProfileAction[12]);
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
  items3[0] = closure_9(channel(trackUserProfileAction[13]), obj7, "set-volume");
  let tmp11 = !stateFromStores;
  const tmp6 = channel;
  if (stateFromStores) {
    tmp11 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[11]).RequestToSpeakStates.ON_STAGE;
    channel.isGuildStageVoice() && tmp7 !== tmp2(trackUserProfileAction[11]).RequestToSpeakStates.ON_STAGE;
  }
  if (!tmp11) {
    let stringResult;
    const push = items3.push;
    const UserProfileFormRow = tmp2(tmp3[15]).UserProfileFormRow;
    const intl = tmp2(tmp3[16]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[16]).t;
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
      MicrophoneIcon = tmp2(tmp3[17]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[18]).MicrophoneIcon;
    }
    push(closure_9(UserProfileFormRow, obj8, "mute"));
  }
  const push2 = items3.push;
  const UserProfileFormRow2 = tmp2(tmp3[15]).UserProfileFormRow;
  const intl2 = tmp2(tmp3[16]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(tmp3[16]).t;
  if (stateFromStores1) {
    string2Result = string2(t2["639hQT"]);
  } else {
    string2Result = string2(t2.LxhEuG);
  }
  const obj9 = {
    label: string2Result,
    icon: SoundboardIcon,
    onPress() {
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const obj = AudioActionCreatorsDefault;
      const result = obj.toggleLocalSoundboardMute(user.id);
    }
  };
  if (stateFromStores1) {
    SoundboardIcon = tmp2(tmp3[19]).SoundboardSlashIcon;
  } else {
    SoundboardIcon = tmp2(tmp3[20]).SoundboardIcon;
  }
  push2(closure_9(UserProfileFormRow2, obj9, "mute-soundboard"));
  if (supportsDisableLocalVideo) {
    let string3Result;
    const push3 = items3.push;
    const UserProfileFormRow3 = tmp2(tmp3[15]).UserProfileFormRow;
    const intl3 = tmp2(tmp3[16]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(tmp3[16]).t;
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
              const obj = channel(trackUserProfileAction[14]);
              return obj.setDisableLocalVideo(id.id, constants.MANUAL_ENABLED);
            });
          } else {
            let obj = AudioActionCreatorsDefault;
            obj.setDisableLocalVideo(user.id, isLocalVideoDisabled ? VideoToggleState.MANUAL_ENABLED : VideoToggleState.DISABLED);
          }
        }
    };
    if (isLocalVideoDisabled) {
      VideoIcon = tmp2(tmp3[21]).VideoSlashIcon;
    } else {
      VideoIcon = tmp2(tmp3[22]).VideoIcon;
    }
    if (isLocalVideoAutoDisabled) {
      const obj11 = { style: tmp.disableVideoSublabel, children: items4 };
      items4 = [tmp10(tmp2(tmp3[23]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" }), ];
      const obj12 = { variant: "text-xs/medium", color: "text-feedback-warning", children: intl4.string(tmp2(trackUserProfileAction[16]).t.m2Hyj0) };
      const Text = tmp2(tmp3[24]).Text;
      intl4 = tmp2(tmp3[16]).intl;
      items4[1] = closure_9(Text, obj12);
      isLocalVideoAutoDisabled = closure_10(isLocalVideoDisabled, obj11);
    }
    push3(closure_9(UserProfileFormRow3, obj10, "disable-video"));
  }
  if (isSecureFramesUIEnabled) {
    const push4 = items3.push;
    const obj13 = {
      label: intl5.string(tmp2(trackUserProfileAction[16]).t["8ErYvY"]),
      icon: tmp2(trackUserProfileAction[26]).ShieldLockIcon,
      hint: tmp2(trackUserProfileAction[27]).FormArrow,
      onPress() {
          let id;
          trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          let obj2 = SecureFramesPlatformUtilsDefault;
          const result = obj2.openSecureFramesUserVerificationModal(user.id, channel.id, () => {
            const obj = user(trackUserProfileAction[30]);
            const obj2 = { userId: id.id, channelId: channel.id, guildId: channel.guild_id };
            return obj.validateSecureFramesKeyConsistent(obj2);
          });
        }
    };
    const UserProfileFormRow4 = tmp2(tmp3[15]).UserProfileFormRow;
    intl5 = tmp2(tmp3[16]).intl;
    push4(closure_9(UserProfileFormRow4, obj13, "view-secure-frames-verification-code"));
  }
  let tmp10Result = null;
  if (0 !== items3.length) {
    const obj14 = { style: items5, title: intl6.string(tmp2(trackUserProfileAction[16]).t.dsXapM), titleStyle: tmp.cardTitle, children: closure_9(tmp2(trackUserProfileAction[15]).UserProfileCardRows, obj15) };
    items5 = [tmp.card, style];
    const tmp6Result = tmp6(trackUserProfileAction[15]);
    intl6 = tmp2(tmp3[16]).intl;
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
  let tmp = closure_11();
  let obj = channel(7635);
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
      const obj4 = { style: items2, title: intl.string(channel(1115).t.NiTd0e), titleStyle: tmp.cardTitle, children: closure_9(UserProfileCardRows, obj6) };
      items2 = [tmp.card, style];
      const tmp6Result = tmp6(6628);
      intl = tmp2(1115).intl;
      UserProfileCardRows = tmp2(6628).UserProfileCardRows;
      const UserProfileFormRow = tmp2(6628).UserProfileFormRow;
      const intl2 = tmp2(1115).intl;
      const string = intl2.string;
      const t = tmp2(1115).t;
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
        MicrophoneIcon = tmp2(9140).MicrophoneSlashIcon;
      } else {
        MicrophoneIcon = tmp2(9465).MicrophoneIcon;
      }
      obj6 = { children: closure_9(UserProfileFormRow, obj5, "mute") };
      tmp9Result = tmp9(tmp6Result, obj4);
    } else {
      tmp9Result = null;
    }
  }
  return tmp9Result;
}
const View = react_native.View;
const VideoToggleState = Constants.VideoToggleState;
const Permissions = Constants2.Permissions;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 } });
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
    tmp3 = React4(CurrentUserVoiceSettings, obj2);
  } else {
    const obj = { user, channel, style };
    tmp3 = React4(UserVoiceSettings, obj);
  }
  return tmp3;
};
