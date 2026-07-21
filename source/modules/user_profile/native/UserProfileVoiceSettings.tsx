// Module ID: 11953
// Function ID: 92393
// Name: UserVoiceSettings
// Dependencies: []
// Exports: default

// Module 11953 (UserVoiceSettings)
function UserVoiceSettings(user) {
  let isLocalMute;
  let isLocalVideoDisabled;
  let localVolume;
  let supportsDisableLocalVideo;
  user = user.user;
  const arg1 = user;
  const channel = user.channel;
  const importDefault = channel;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const dependencyMap = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = arg1(dependencyMap[10]);
  const items = [closure_5];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ localVolume: closure_5.getLocalVolume(user.id), isLocalMute: closure_5.isLocalMute(user.id), isLocalVideoDisabled: closure_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: closure_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: closure_5.supportsDisableLocalVideo() }));
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  const View = isLocalVideoDisabled;
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  let closure_4 = isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  let obj2 = arg1(dependencyMap[10]);
  const items1 = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = closure_6.can(constants.SPEAK, channel);
    }
    return isPrivateResult;
  });
  let obj3 = arg1(dependencyMap[10]);
  const items2 = [closure_4];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => isLocalVideoAutoDisabled.isLocalSoundboardMuted(user.id));
  let obj4 = arg1(dependencyMap[12]);
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
  const items3 = [callback(importDefault(dependencyMap[13]), obj, "set-volume")];
  let tmp7 = !stateFromStores;
  if (!tmp7) {
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = tmp4 !== arg1(dependencyMap[11]).RequestToSpeakStates.ON_STAGE;
    }
    tmp7 = isGuildStageVoiceResult;
  }
  if (tmp7) {
    obj1 = {};
    const intl2 = arg1(dependencyMap[16]).intl;
    const string2 = intl2.string;
    const t2 = arg1(dependencyMap[16]).t;
    if (stateFromStores1) {
      let string2Result = string2(t2.639hQT);
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
    items3.push(callback(arg1(dependencyMap[15]).UserProfileFormRow, obj1, "mute-soundboard"));
    if (supportsDisableLocalVideo) {
      obj2 = {};
      const intl3 = arg1(dependencyMap[16]).intl;
      const string3 = intl3.string;
      const t3 = arg1(dependencyMap[16]).t;
      if (isLocalVideoDisabled) {
        let string3Result = string3(t3.xc+Psz);
      } else {
        string3Result = string3(t3.4MMsWF);
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
        const items4 = [callback(arg1(dependencyMap[23]).CircleErrorIcon, { flex: null, flexGrow: "header" }), ];
        obj4 = {};
        const intl4 = arg1(dependencyMap[16]).intl;
        obj4.children = intl4.string(arg1(dependencyMap[16]).t.m2Hyj0);
        items4[1] = callback(arg1(dependencyMap[24]).Text, obj4);
        obj3.children = items4;
        isLocalVideoAutoDisabled = callback2(View, obj3);
      }
      obj2.sublabel = isLocalVideoAutoDisabled;
      obj2.onPress = function onPress() {
        trackUserProfileAction({ action: "DISABLE_VIDEO" });
        if (isLocalVideoAutoDisabled) {
          const result = user(trackUserProfileAction[25]).confirmVideoUnstableConnection(() => callback(closure_2[14]).setDisableLocalVideo(id.id, constants.MANUAL_ENABLED));
          const obj2 = user(trackUserProfileAction[25]);
        } else {
          channel(trackUserProfileAction[14]).setDisableLocalVideo(user.id, isLocalVideoDisabled ? closure_7.MANUAL_ENABLED : closure_7.DISABLED);
          const obj = channel(trackUserProfileAction[14]);
        }
      };
      items3.push(callback(arg1(dependencyMap[15]).UserProfileFormRow, obj2, "disable-video"));
      const tmp29 = callback;
    }
    if (isSecureFramesUIEnabled) {
      const obj5 = {};
      const intl5 = arg1(dependencyMap[16]).intl;
      obj5.label = intl5.string(arg1(dependencyMap[16]).t.8ErYvY);
      obj5.icon = arg1(dependencyMap[26]).ShieldLockIcon;
      obj5.hint = arg1(dependencyMap[27]).FormArrow;
      obj5.onPress = function onPress() {
        trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
        channel(trackUserProfileAction[28]).hideActionSheet();
        const obj = channel(trackUserProfileAction[28]);
        const result = channel(trackUserProfileAction[29]).openSecureFramesUserVerificationModal(user.id, channel.id, () => {
          let obj = lib(closure_2[30]);
          obj = { userId: lib.id, channelId: closure_1.id, guildId: closure_1.guild_id };
          return obj.validateSecureFramesKeyConsistent(obj);
        });
      };
      items3.push(callback(arg1(dependencyMap[15]).UserProfileFormRow, obj5, "view-secure-frames-verification-code"));
    }
    let tmp48 = null;
    if (0 !== items3.length) {
      const obj6 = {};
      const items5 = [tmp.card, user.style];
      obj6.style = items5;
      const intl6 = arg1(dependencyMap[16]).intl;
      obj6.title = intl6.string(arg1(dependencyMap[16]).t.NiTd0e);
      obj6.titleStyle = tmp.cardTitle;
      const obj7 = { children: items3 };
      obj6.children = callback(arg1(dependencyMap[15]).UserProfileCardRows, obj7);
      tmp48 = callback(importDefault(dependencyMap[15]), obj6);
      const tmp52 = importDefault(dependencyMap[15]);
    }
    return tmp48;
  } else {
    const obj8 = {};
    const intl = arg1(dependencyMap[16]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[16]).t;
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
    items3.push(callback(arg1(dependencyMap[15]).UserProfileFormRow, obj8, "mute"));
    const tmp11 = callback;
  }
}
function CurrentUserVoiceSettings(channel) {
  let style;
  let user;
  channel = channel.channel;
  const arg1 = channel;
  ({ user, style } = channel);
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const importDefault = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = arg1(dependencyMap[10]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => selfMute.isSelfMute());
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = closure_6.can(constants.SPEAK, channel);
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
    const intl = arg1(dependencyMap[16]).intl;
    obj.title = intl.string(arg1(dependencyMap[16]).t.NiTd0e);
    obj.titleStyle = tmp.cardTitle;
    obj = {};
    obj1 = {};
    const intl2 = arg1(dependencyMap[16]).intl;
    const string = intl2.string;
    const t = arg1(dependencyMap[16]).t;
    if (stateFromStores) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    obj1.label = stringResult;
    if (stateFromStores) {
      let MicrophoneIcon = tmp18(tmp19[17]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp18(tmp19[18]).MicrophoneIcon;
    }
    obj1.icon = MicrophoneIcon;
    obj1.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      trackUserProfileAction(closure_2[14]).toggleSelfMute();
    };
    obj.children = closure_9(arg1(dependencyMap[15]).UserProfileFormRow, obj1, "mute");
    obj = closure_9(arg1(dependencyMap[15]).UserProfileCardRows, obj);
    obj.children = obj;
    closure_9(importDefault(dependencyMap[15]), obj);
    const tmp11 = importDefault(dependencyMap[15]);
    const tmp13 = closure_9;
    const tmp14 = closure_9;
    const tmp8 = closure_9;
  }
  return tmp5;
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const VideoToggleState = arg1(dependencyMap[5]).VideoToggleState;
const Permissions = arg1(dependencyMap[6]).Permissions;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
let closure_11 = arg1(dependencyMap[8]).createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { <string:3461472865>: "safety_user_sentiment_notice_dismissed_at", <string:1447977218>: "message", <string:1640807382>: null } });
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/user_profile/native/UserProfileVoiceSettings.tsx");

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
