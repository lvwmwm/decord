// Module ID: 11966
// Function ID: 92472
// Name: UserVoiceSettings
// Dependencies: [31, 27, 4578, 4177, 3758, 653, 482, 33, 4130, 8266, 566, 4314, 8916, 10716, 8843, 5511, 1212, 8874, 10735, 11967, 11561, 11969, 10159, 7507, 4126, 11653, 8931, 7495, 4098, 8901, 8897, 2]
// Exports: default

// Module 11966 (UserVoiceSettings)
import "set";
import { View } from "Form";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { VideoToggleState } from "ME";
import { Permissions } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function UserVoiceSettings(user) {
  let isLocalMute;
  let isLocalVideoDisabled;
  let localVolume;
  let supportsDisableLocalVideo;
  user = user.user;
  const channel = user.channel;
  const tmp = callback3();
  let obj = user(trackUserProfileAction[9]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = user(trackUserProfileAction[10]);
  const items = [closure_5];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ localVolume: outer1_5.getLocalVolume(user.id), isLocalMute: outer1_5.isLocalMute(user.id), isLocalVideoDisabled: outer1_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: outer1_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: outer1_5.supportsDisableLocalVideo() }));
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  let obj2 = user(trackUserProfileAction[10]);
  const items1 = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = outer1_6.can(outer1_8.SPEAK, channel);
    }
    return isPrivateResult;
  });
  let obj3 = user(trackUserProfileAction[10]);
  const items2 = [isLocalVideoAutoDisabled];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => isLocalVideoAutoDisabled.isLocalSoundboardMuted(user.id));
  let obj4 = user(trackUserProfileAction[12]);
  obj = { channelId: channel.id };
  const isSecureFramesUIEnabled = obj4.useIsSecureFramesUIEnabled(obj);
  obj = {
    style: tmp.volumeSlider,
    value: localVolume,
    onValueChange(volume) {
      trackUserProfileAction({ action: "SET_VOLUME" });
      channel(trackUserProfileAction[14]).setLocalVolume(user.id, volume);
    }
  };
  const items3 = [callback(channel(trackUserProfileAction[13]), obj, "set-volume")];
  let tmp7 = !stateFromStores;
  if (!tmp7) {
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = tmp4 !== user(trackUserProfileAction[11]).RequestToSpeakStates.ON_STAGE;
    }
    tmp7 = isGuildStageVoiceResult;
  }
  if (tmp7) {
    obj1 = {};
    const intl2 = user(trackUserProfileAction[16]).intl;
    const string2 = intl2.string;
    const t2 = user(trackUserProfileAction[16]).t;
    if (stateFromStores1) {
      let string2Result = string2(t2["639hQT"]);
    } else {
      string2Result = string2(t2.LxhEuG);
    }
    obj1.label = string2Result;
    if (stateFromStores1) {
      let SoundboardIcon = tmp26(tmp27[19]).SoundboardSlashIcon;
    } else {
      SoundboardIcon = tmp26(tmp27[20]).SoundboardIcon;
    }
    obj1.icon = SoundboardIcon;
    obj1.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const result = channel(trackUserProfileAction[14]).toggleLocalSoundboardMute(user.id);
    };
    items3.push(callback(user(trackUserProfileAction[15]).UserProfileFormRow, obj1, "mute-soundboard"));
    if (supportsDisableLocalVideo) {
      obj2 = {};
      const intl3 = user(trackUserProfileAction[16]).intl;
      const string3 = intl3.string;
      const t3 = user(trackUserProfileAction[16]).t;
      if (isLocalVideoDisabled) {
        let string3Result = string3(t3["xc+Psz"]);
      } else {
        string3Result = string3(t3["4MMsWF"]);
      }
      obj2.label = string3Result;
      if (isLocalVideoDisabled) {
        let VideoIcon = tmp35(tmp36[21]).VideoSlashIcon;
      } else {
        VideoIcon = tmp35(tmp36[22]).VideoIcon;
      }
      obj2.icon = VideoIcon;
      if (isLocalVideoAutoDisabled) {
        obj3 = { style: tmp.disableVideoSublabel };
        const items4 = [callback(user(trackUserProfileAction[23]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" }), ];
        obj4 = { variant: "text-xs/medium", color: "text-feedback-warning" };
        const intl4 = user(trackUserProfileAction[16]).intl;
        obj4.children = intl4.string(user(trackUserProfileAction[16]).t.m2Hyj0);
        items4[1] = callback(user(trackUserProfileAction[24]).Text, obj4);
        obj3.children = items4;
        isLocalVideoAutoDisabled = callback2(isLocalVideoDisabled, obj3);
      }
      obj2.sublabel = isLocalVideoAutoDisabled;
      obj2.onPress = function onPress() {
        trackUserProfileAction({ action: "DISABLE_VIDEO" });
        if (isLocalVideoAutoDisabled) {
          const result = user(trackUserProfileAction[25]).confirmVideoUnstableConnection(() => channel(trackUserProfileAction[14]).setDisableLocalVideo(outer1_0.id, outer2_7.MANUAL_ENABLED));
          const obj2 = user(trackUserProfileAction[25]);
        } else {
          channel(trackUserProfileAction[14]).setDisableLocalVideo(user.id, isLocalVideoDisabled ? outer1_7.MANUAL_ENABLED : outer1_7.DISABLED);
          const obj = channel(trackUserProfileAction[14]);
        }
      };
      items3.push(callback(user(trackUserProfileAction[15]).UserProfileFormRow, obj2, "disable-video"));
      const tmp29 = callback;
    }
    if (isSecureFramesUIEnabled) {
      const obj5 = {};
      const intl5 = user(trackUserProfileAction[16]).intl;
      obj5.label = intl5.string(user(trackUserProfileAction[16]).t["8ErYvY"]);
      obj5.icon = user(trackUserProfileAction[26]).ShieldLockIcon;
      obj5.hint = user(trackUserProfileAction[27]).FormArrow;
      obj5.onPress = function onPress() {
        trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
        channel(trackUserProfileAction[28]).hideActionSheet();
        let obj = channel(trackUserProfileAction[28]);
        const result = channel(trackUserProfileAction[29]).openSecureFramesUserVerificationModal(user.id, channel.id, () => {
          let obj = user(trackUserProfileAction[30]);
          obj = { userId: outer1_0.id, channelId: outer1_1.id, guildId: outer1_1.guild_id };
          return obj.validateSecureFramesKeyConsistent(obj);
        });
      };
      items3.push(callback(user(trackUserProfileAction[15]).UserProfileFormRow, obj5, "view-secure-frames-verification-code"));
    }
    let tmp48 = null;
    if (0 !== items3.length) {
      const obj6 = {};
      const items5 = [tmp.card, user.style];
      obj6.style = items5;
      const intl6 = user(trackUserProfileAction[16]).intl;
      obj6.title = intl6.string(user(trackUserProfileAction[16]).t.NiTd0e);
      obj6.titleStyle = tmp.cardTitle;
      const obj7 = { children: items3 };
      obj6.children = callback(user(trackUserProfileAction[15]).UserProfileCardRows, obj7);
      tmp48 = callback(channel(trackUserProfileAction[15]), obj6);
      const tmp52 = channel(trackUserProfileAction[15]);
    }
    return tmp48;
  } else {
    const obj8 = {};
    const intl = user(trackUserProfileAction[16]).intl;
    const string = intl.string;
    const t = user(trackUserProfileAction[16]).t;
    if (isLocalMute) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    obj8.label = stringResult;
    if (isLocalMute) {
      let MicrophoneIcon = tmp17(tmp18[17]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp17(tmp18[18]).MicrophoneIcon;
    }
    obj8.icon = MicrophoneIcon;
    obj8.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      channel(trackUserProfileAction[14]).toggleLocalMute(user.id);
    };
    items3.push(callback(user(trackUserProfileAction[15]).UserProfileFormRow, obj8, "mute"));
    const tmp11 = callback;
  }
}
function CurrentUserVoiceSettings(channel) {
  let style;
  let user;
  channel = channel.channel;
  ({ user, style } = channel);
  const tmp = callback3();
  let obj = channel(8266);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = channel(566);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.isSelfMute());
  const items1 = [closure_6];
  const stateFromStores1 = channel(566).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = outer1_6.can(outer1_8.SPEAK, channel);
    }
    return isPrivateResult;
  });
  let tmp5 = null;
  if (stateFromStores1) {
    if (channel.isGuildStageVoice()) {
      tmp5 = null;
    }
    obj = {};
    const items2 = [tmp.card, style];
    obj.style = items2;
    const intl = channel(1212).intl;
    obj.title = intl.string(channel(1212).t.NiTd0e);
    obj.titleStyle = tmp.cardTitle;
    obj = {};
    obj1 = {};
    const intl2 = channel(1212).intl;
    const string = intl2.string;
    const t = channel(1212).t;
    if (stateFromStores) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    obj1.label = stringResult;
    if (stateFromStores) {
      let MicrophoneIcon = tmp18(8874).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp18(10735).MicrophoneIcon;
    }
    obj1.icon = MicrophoneIcon;
    obj1.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      trackUserProfileAction(outer1_2[14]).toggleSelfMute();
    };
    obj.children = closure_9(channel(5511).UserProfileFormRow, obj1, "mute");
    obj = closure_9(channel(5511).UserProfileCardRows, obj);
    obj.children = obj;
    closure_9(trackUserProfileAction(5511), obj);
    const tmp11 = trackUserProfileAction(5511);
    const tmp13 = closure_9;
    const tmp14 = closure_9;
    const tmp8 = closure_9;
  }
  return tmp5;
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileVoiceSettings.tsx");

export default function UserProfileVoiceSettings(arg0) {
  let channel;
  let currentUser;
  let style;
  let user;
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    let obj = { user: currentUser, channel, style };
    let tmp3 = callback(CurrentUserVoiceSettings, obj);
  } else {
    obj = { user, channel, style };
    tmp3 = callback(UserVoiceSettings, obj);
  }
  return tmp3;
};
