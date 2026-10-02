// Module ID: 12619
// Function ID: 12620
// Name: UserProfileVoiceSettings
// Dependencies: [19, 17, 5320, 1999, 4472, 1086, 1097, 21, 4837, 558, 576, 7639, 504, 4984, 9160, 9081, 9438, 1127, 9117, 9461, 6629, 12620, 11932, 12622, 10976, 6351, 4833, 12027, 9204, 8057, 4801, 9144, 9140, 2]

// Module 12619 (UserProfileVoiceSettings)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import Constants2 from "Constants" /* 1097 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9081 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9144 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12027 */;
import react from "react" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 5320 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
const View = react_native.View;
const VideoToggleState = Constants.VideoToggleState;
const Permissions = Constants2.Permissions;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let isLocalMute;
  let isLocalVideoDisabled;
  let localVolume;
  let tmp10;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp7;
  let tmp9;
  let trackUserProfileAction;
  let tmp = user;
  let tmp2 = trackUserProfileAction;
  let obj = user(trackUserProfileAction[10]);
  const cResult = obj.c(81);
  user = user.user;
  const channel = user.channel;
  const tmp4 = closure_11();
  let obj2 = user(trackUserProfileAction[11]);
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    class V {
      constructor() {
        const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
        return obj;
      }
    }
    cResult[1] = user.id;
    cResult[2] = V;
    tmp7 = V;
  } else {
    class V {
      constructor() {
        const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
        return obj;
      }
    }
  }
  const tmpResult = tmp(tmp2[12]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
  ({ localVolume, isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  const isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
        return obj;
      }
    }
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class V {
      constructor() {
        const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
        return obj;
      }
    }
  }
  if (cResult[4] !== channel) {
    class V {
      constructor() {
        const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
        return obj;
      }
    }
    cResult[4] = channel;
    cResult[5] = tmp11;
    tmp10 = tmp11;
  } else {
    class V {
      constructor() {
        const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
        return obj;
      }
    }
  }
  const tmpResult4 = tmp(tmp2[12]);
  const stateFromStores = tmpResult4.useStateFromStores(tmp9, tmp10);
  channel(tmp2[13])(user.id, channel.id);
  const tmp13 = channel;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
        return obj;
      }
    }
    const items2 = [isLocalVideoAutoDisabled];
    cResult[6] = items2;
    tmp15 = items2;
  } else {
    class V {
      constructor() {
        const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
        return obj;
      }
    }
  }
  if (cResult[7] !== user.id) {
    class R {
      constructor() {
        return SoundboardStore.isLocalSoundboardMuted(user.id);
      }
    }
    cResult[7] = user.id;
    cResult[8] = R;
    tmp16 = R;
  } else {
    class R {
      constructor() {
        return SoundboardStore.isLocalSoundboardMuted(user.id);
      }
    }
  }
  const tmpResult5 = tmp(tmp2[12]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp15, tmp16);
  if (cResult[9] !== channel.id) {
    class R {
      constructor() {
        return SoundboardStore.isLocalSoundboardMuted(user.id);
      }
    }
    tmp19[0] = channel.id;
    cResult[9] = channel.id;
    cResult[10] = tmp19;
    tmp18 = tmp19;
  } else {
    class R {
      constructor() {
        return SoundboardStore.isLocalSoundboardMuted(user.id);
      }
    }
  }
  const tmpResult6 = tmp(tmp2[14]);
  const isSecureFramesUIEnabled = tmpResult6.useIsSecureFramesUIEnabled(tmp18);
  if (cResult[11] === trackUserProfileAction) {
    class R {
      constructor() {
        return SoundboardStore.isLocalSoundboardMuted(user.id);
      }
    }
    if (cResult[14] === localVolume) {
      class R {
        constructor() {
          return SoundboardStore.isLocalSoundboardMuted(user.id);
        }
      }
    }
    const obj3 = { style: tmp4.volumeSlider, value: localVolume, onValueChange: tmp21 };
    cResult[14] = localVolume;
    cResult[15] = tmp4.volumeSlider;
    cResult[16] = tmp21;
    cResult[17] = closure_9(tmp13(tmp2[16]), obj3, "set-volume");
    const tmp24 = closure_9(tmp13(tmp2[16]), obj3, "set-volume");
  }
  const fn = function k(arg0) {
    trackUserProfileAction({ action: "SET_VOLUME" });
    const obj = AudioActionCreatorsDefault;
    obj.setLocalVolume(user.id, arg0);
  };
  cResult[11] = trackUserProfileAction;
  cResult[12] = user.id;
  cResult[13] = fn;
}) : ((user) => {
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
  let obj = user(trackUserProfileAction[11]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(trackUserProfileAction[12]);
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
    return obj;
  });
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  const items1 = [PermissionStore];
  const obj3 = user(trackUserProfileAction[12]);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    const tmp = channel;
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
    }
    return isPrivateResult;
  });
  const tmp7 = channel(trackUserProfileAction[13])(user.id, channel.id);
  const items2 = [isLocalVideoAutoDisabled];
  const obj4 = user(trackUserProfileAction[12]);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => SoundboardStore.isLocalSoundboardMuted(user.id));
  const obj5 = user(trackUserProfileAction[14]);
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
  items3[0] = closure_9(channel(trackUserProfileAction[16]), obj7, "set-volume");
  let tmp11 = !stateFromStores;
  const tmp6 = channel;
  if (stateFromStores) {
    tmp11 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[13]).RequestToSpeakStates.ON_STAGE;
    channel.isGuildStageVoice() && tmp7 !== tmp2(trackUserProfileAction[13]).RequestToSpeakStates.ON_STAGE;
  }
  if (!tmp11) {
    let stringResult;
    const push = items3.push;
    const UserProfileFormRow = tmp2(tmp3[20]).UserProfileFormRow;
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
    push(closure_9(UserProfileFormRow, obj8, "mute"));
  }
  const push2 = items3.push;
  const UserProfileFormRow2 = tmp2(tmp3[20]).UserProfileFormRow;
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
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const obj = AudioActionCreatorsDefault;
      const result = obj.toggleLocalSoundboardMute(user.id);
    }
  };
  if (stateFromStores1) {
    SoundboardIcon = tmp2(tmp3[21]).SoundboardSlashIcon;
  } else {
    SoundboardIcon = tmp2(tmp3[22]).SoundboardIcon;
  }
  push2(closure_9(UserProfileFormRow2, obj9, "mute-soundboard"));
  if (supportsDisableLocalVideo) {
    let string3Result;
    const push3 = items3.push;
    const UserProfileFormRow3 = tmp2(tmp3[20]).UserProfileFormRow;
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
            obj.setDisableLocalVideo(user.id, isLocalVideoDisabled ? VideoToggleState.MANUAL_ENABLED : VideoToggleState.DISABLED);
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
      items4[1] = closure_9(Text, obj12);
      isLocalVideoAutoDisabled = closure_10(isLocalVideoDisabled, obj11);
    }
    push3(closure_9(UserProfileFormRow3, obj10, "disable-video"));
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
    const UserProfileFormRow4 = tmp2(tmp3[20]).UserProfileFormRow;
    intl5 = tmp2(tmp3[17]).intl;
    push4(closure_9(UserProfileFormRow4, obj13, "view-secure-frames-verification-code"));
  }
  let tmp10Result = null;
  if (0 !== items3.length) {
    const obj14 = { style: items5, title: intl6.string(tmp2(trackUserProfileAction[17]).t.dsXapM), titleStyle: tmp.cardTitle, children: closure_9(tmp2(trackUserProfileAction[20]).UserProfileCardRows, obj15) };
    items5 = [tmp.card, style];
    const tmp6Result = tmp6(trackUserProfileAction[20]);
    intl6 = tmp2(tmp3[17]).intl;
    obj15 = { children: items3 };
    tmp10Result = tmp10(tmp6Result, obj14);
  }
  return tmp10Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let obj4;
  let selfMute;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(21);
  channel = channel.channel;
  const style = channel.style;
  const tmp4 = closure_11();
  const obj2 = channel(7639);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function n() {
      return selfMute.isSelfMute();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[2] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channel) {
    class A {
      constructor() {
        let isPrivateResult = channel.isPrivate();
        const tmp = channel;
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
    cResult[3] = channel;
    cResult[4] = A;
    tmp11 = A;
  } else {
    class A {
      constructor() {
        let isPrivateResult = channel.isPrivate();
        const tmp = channel;
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp11);
  if (stateFromStores1) {
    class A {
      constructor() {
        let isPrivateResult = channel.isPrivate();
        const tmp = channel;
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
    if (cResult[5] === style) {
      class A {
        constructor() {
          let isPrivateResult = channel.isPrivate();
          const tmp = channel;
          if (!isPrivateResult) {
            isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
          }
          return isPrivateResult;
        }
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            let isPrivateResult = channel.isPrivate();
            const tmp = channel;
            if (!isPrivateResult) {
              isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
            }
            return isPrivateResult;
          }
        }
        cResult[8] = obj5.string(tmp(1127).t.NiTd0e);
        const stringResult = obj5.string(tmp(1127).t.NiTd0e);
      } else {
        class A {
          constructor() {
            let isPrivateResult = channel.isPrivate();
            const tmp = channel;
            if (!isPrivateResult) {
              isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
            }
            return isPrivateResult;
          }
        }
      }
      if (cResult[9] !== stateFromStores) {
        class A {
          constructor() {
            let isPrivateResult = channel.isPrivate();
            const tmp = channel;
            if (!isPrivateResult) {
              isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
            }
            return isPrivateResult;
          }
        }
        const string = tmp17.string;
        const t = tmp(1127).t;
        if (stateFromStores) {
          class A {
            constructor() {
              let isPrivateResult = channel.isPrivate();
              const tmp = channel;
              if (!isPrivateResult) {
                isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
              }
              return isPrivateResult;
            }
          }
        } else {
          class A {
            constructor() {
              let isPrivateResult = channel.isPrivate();
              const tmp = channel;
              if (!isPrivateResult) {
                isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
              }
              return isPrivateResult;
            }
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = tmp18;
      } else {
        class A {
          constructor() {
            let isPrivateResult = channel.isPrivate();
            const tmp = channel;
            if (!isPrivateResult) {
              isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
            }
            return isPrivateResult;
          }
        }
      }
      if (stateFromStores) {
        class A {
          constructor() {
            let isPrivateResult = channel.isPrivate();
            const tmp = channel;
            if (!isPrivateResult) {
              isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
            }
            return isPrivateResult;
          }
        }
      } else {
        class A {
          constructor() {
            let isPrivateResult = channel.isPrivate();
            const tmp = channel;
            if (!isPrivateResult) {
              isPrivateResult = PermissionStore.can(Permissions.SPEAK, tmp);
            }
            return isPrivateResult;
          }
        }
      }
      if (cResult[11] !== trackUserProfileAction) {
        class D {
          constructor() {
            trackUserProfileAction({ action: "MUTE" });
            const obj = AudioActionCreatorsDefault;
            obj.toggleSelfMute();
          }
        }
        cResult[11] = trackUserProfileAction;
        cResult[12] = D;
      } else {
        class D {
          constructor() {
            trackUserProfileAction({ action: "MUTE" });
            const obj = AudioActionCreatorsDefault;
            obj.toggleSelfMute();
          }
        }
      }
      if (cResult[13] === tmp16) {
        class D {
          constructor() {
            trackUserProfileAction({ action: "MUTE" });
            const obj = AudioActionCreatorsDefault;
            obj.toggleSelfMute();
          }
        }
      }
      const obj3 = { children: closure_9(tmp(6629).UserProfileFormRow, obj4, "mute") };
      const UserProfileCardRows = tmp(6629).UserProfileCardRows;
      obj4 = { label: tmp16, icon: tmp19, onPress: tmp20 };
      cResult[13] = tmp16;
      cResult[14] = tmp19;
      cResult[15] = tmp20;
      cResult[16] = closure_9(UserProfileCardRows, obj3);
      const tmp23 = closure_9(UserProfileCardRows, obj3);
    }
    const items2 = [tmp4.card, style];
    cResult[5] = style;
    cResult[6] = tmp4.card;
    cResult[7] = items2;
  }
  return null;
}) : ((channel) => {
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
  let obj = channel(7639);
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
      const obj4 = { style: items2, title: intl.string(channel(1127).t.NiTd0e), titleStyle: tmp.cardTitle, children: closure_9(UserProfileCardRows, obj6) };
      items2 = [tmp.card, style];
      const tmp6Result = tmp6(6629);
      intl = tmp2(1127).intl;
      UserProfileCardRows = tmp2(6629).UserProfileCardRows;
      const UserProfileFormRow = tmp2(6629).UserProfileFormRow;
      const intl2 = tmp2(1127).intl;
      const string = intl2.string;
      const t = tmp2(1127).t;
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
        MicrophoneIcon = tmp2(9117).MicrophoneSlashIcon;
      } else {
        MicrophoneIcon = tmp2(9461).MicrophoneIcon;
      }
      obj6 = { children: closure_9(UserProfileFormRow, obj5, "mute") };
      tmp9Result = tmp9(tmp6Result, obj4);
    } else {
      tmp9Result = null;
    }
  }
  return tmp9Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let currentUser;
  let style;
  let tmp2;
  let user;
  const obj = react2;
  const cResult = obj.c(8);
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    if (cResult[0] === channel) {
      if (cResult[1] === currentUser) {
        let tmp6;
        if (cResult[2] === style) {
          tmp6 = cResult[3];
        }
        tmp2 = tmp6;
      }
    }
    const obj2 = { user: currentUser, channel, style };
    const tmp9 = React4(closure_13, obj2);
    cResult[0] = channel;
    cResult[1] = currentUser;
    cResult[2] = style;
    cResult[3] = tmp9;
    tmp6 = tmp9;
  } else {
    if (cResult[4] === channel) {
      if (cResult[5] === style) {
        if (cResult[6] === user) {
          tmp2 = cResult[7];
        }
      }
    }
    const obj3 = { user, channel, style };
    const tmp5 = React4(closure_12, obj3);
    cResult[4] = channel;
    cResult[5] = style;
    cResult[6] = user;
    cResult[7] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
}) : ((arg0) => {
  let channel;
  let currentUser;
  let style;
  let tmp3;
  let user;
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    const obj2 = { user: currentUser, channel, style };
    tmp3 = React4(closure_13, obj2);
  } else {
    const obj = { user, channel, style };
    tmp3 = React4(closure_12, obj);
  }
  return tmp3;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceSettings.tsx");

export default tmp4;
