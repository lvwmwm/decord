// Module ID: 13375
// Function ID: 13376
// Name: UserProfileVoiceSettings
// Dependencies: [19, 17, 5258, 1996, 4431, 1078, 1089, 21, 4790, 558, 568, 8496, 504, 4937, 10000, 9921, 10279, 1119, 9957, 10298, 7486, 13376, 12727, 13378, 11769, 7208, 4786, 12820, 10045, 8908, 4757, 9984, 9980, 2]

// Module 13375 (UserProfileVoiceSettings)
import c from "c" /* 568 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9921 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9984 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12820 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 5258 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import PermissionStore from "PermissionStore" /* 4431 */;

require = fn;
const View = fn(17).View;
const VideoToggleState = fn(1078).VideoToggleState;
const Permissions = fn(1089).Permissions;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4790);
let closure_11 = createStyles.createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 } });
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(trackUserProfileAction[10]).c(81);
  user = user.user;
  const channel = user.channel;
  const tmp4 = closure_11();
  let obj = user(trackUserProfileAction[10]);
  trackUserProfileAction = user(trackUserProfileAction[11]).useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    class V {
      constructor() {
        obj = { localVolume: closure_5.getLocalVolume(user.id), isLocalMute: closure_5.isLocalMute(user.id), isLocalVideoDisabled: closure_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: closure_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: closure_5.supportsDisableLocalVideo() };
        return obj;
      }
    }
    cResult[1] = user.id;
    cResult[2] = V;
    const tmp7 = V;
  } else {
    class V {
      constructor() {
        obj = { localVolume: closure_5.getLocalVolume(user.id), isLocalMute: closure_5.isLocalMute(user.id), isLocalVideoDisabled: closure_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: closure_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: closure_5.supportsDisableLocalVideo() };
        return obj;
      }
    }
  }
  let obj2 = user(trackUserProfileAction[11]);
  const stateFromStoresObject = user(trackUserProfileAction[12]).useStateFromStoresObject(first, tmp7);
  ({ localVolume, isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  const isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        obj = { localVolume: closure_5.getLocalVolume(user.id), isLocalMute: closure_5.isLocalMute(user.id), isLocalVideoDisabled: closure_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: closure_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: closure_5.supportsDisableLocalVideo() };
        return obj;
      }
    }
    const items1 = [PermissionStore];
    cResult[3] = items1;
    const tmp9 = items1;
  } else {
    class V {
      constructor() {
        obj = { localVolume: closure_5.getLocalVolume(user.id), isLocalMute: closure_5.isLocalMute(user.id), isLocalVideoDisabled: closure_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: closure_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: closure_5.supportsDisableLocalVideo() };
        return obj;
      }
    }
  }
  if (cResult[4] !== channel) {
    class M {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
    cResult[4] = channel;
    cResult[5] = M;
    const tmp10 = M;
  } else {
    class M {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  const tmpResult = user(trackUserProfileAction[12]);
  const stateFromStores = user(trackUserProfileAction[12]).useStateFromStores(tmp9, tmp10);
  channel(trackUserProfileAction[13])(user.id, channel.id);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
    const items2 = [isLocalVideoAutoDisabled];
    cResult[6] = items2;
    const tmp14 = items2;
  } else {
    class M {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  if (cResult[7] !== user.id) {
    class R {
      constructor() {
        return closure_4.isLocalSoundboardMuted(user.id);
      }
    }
    cResult[7] = user.id;
    cResult[8] = R;
    const tmp15 = R;
  } else {
    class R {
      constructor() {
        return closure_4.isLocalSoundboardMuted(user.id);
      }
    }
  }
  const tmp12 = channel;
  const tmpResult4 = user(trackUserProfileAction[12]);
  const stateFromStores1 = user(trackUserProfileAction[12]).useStateFromStores(tmp14, tmp15);
  if (cResult[9] !== channel.id) {
    class R {
      constructor() {
        return closure_4.isLocalSoundboardMuted(user.id);
      }
    }
    tmp18[0] = channel.id;
    cResult[9] = channel.id;
    cResult[10] = tmp18;
    const tmp17 = tmp18;
  } else {
    class R {
      constructor() {
        return closure_4.isLocalSoundboardMuted(user.id);
      }
    }
  }
  const tmpResult5 = user(trackUserProfileAction[12]);
  const isSecureFramesUIEnabled = user(trackUserProfileAction[14]).useIsSecureFramesUIEnabled(tmp17);
  if (cResult[11] === trackUserProfileAction) {
    class R {
      constructor() {
        return closure_4.isLocalSoundboardMuted(user.id);
      }
    }
    if (cResult[14] === localVolume) {
      class R {
        constructor() {
          return closure_4.isLocalSoundboardMuted(user.id);
        }
      }
    }
    const obj3 = { style: tmp4.volumeSlider, value: localVolume, onValueChange: tmp20 };
    const tmp23 = closure_9(tmp12(tmp2[16]), obj3, "set-volume");
    cResult[14] = localVolume;
    cResult[15] = tmp4.volumeSlider;
    cResult[16] = tmp20;
    cResult[17] = tmp23;
  }
  const fn = function k(arg0) {
    trackUserProfileAction({ action: "SET_VOLUME" });
    AudioActionCreatorsDefault.setLocalVolume(user.id, arg0);
  };
  cResult[11] = trackUserProfileAction;
  cResult[12] = user.id;
  cResult[13] = fn;
}) : ((user) => {
  user = user.user;
  const channel = user.channel;
  let trackUserProfileAction;
  isLocalVideoDisabled = undefined;
  const tmp = closure_11();
  trackUserProfileAction = user(trackUserProfileAction[11]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(trackUserProfileAction[11]);
  const items = [MediaEngineStore];
  const stateFromStoresObject = user(trackUserProfileAction[12]).useStateFromStoresObject(items, () => ({ localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() }));
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  let obj2 = user(trackUserProfileAction[12]);
  const items1 = [PermissionStore];
  const stateFromStores = user(trackUserProfileAction[12]).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, channel);
    }
    return isPrivateResult;
  });
  const obj3 = user(trackUserProfileAction[12]);
  const tmp6 = channel;
  const tmp7 = channel(trackUserProfileAction[13])(user.id, channel.id);
  const items2 = [isLocalVideoAutoDisabled];
  const stateFromStores1 = user(trackUserProfileAction[12]).useStateFromStores(items2, () => SoundboardStore.isLocalSoundboardMuted(user.id));
  const obj4 = user(trackUserProfileAction[12]);
  const isSecureFramesUIEnabled = user(trackUserProfileAction[14]).useIsSecureFramesUIEnabled({ channelId: channel.id });
  const items3 = [
    closure_9(channel(trackUserProfileAction[16]), {
      style: tmp.volumeSlider,
      value: localVolume,
      onValueChange(arg0) {
        trackUserProfileAction({ action: "SET_VOLUME" });
        AudioActionCreatorsDefault.setLocalVolume(user.id, arg0);
      }
    }, "set-volume")
  ];
  let tmp11 = !stateFromStores;
  if (stateFromStores) {
    tmp11 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[13]).RequestToSpeakStates.ON_STAGE;
    const tmp12 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[13]).RequestToSpeakStates.ON_STAGE;
  }
  if (tmp11) {
    const intl2 = tmp2(tmp3[17]).intl;
    const string2 = intl2.string;
    const t2 = tmp2(tmp3[17]).t;
    if (stateFromStores1) {
      let string2Result = string2(t2["639hQT"]);
    } else {
      string2Result = string2(t2.LxhEuG);
    }
    const obj8 = { label: string2Result, icon: null, onPress: null };
    if (stateFromStores1) {
      let SoundboardIcon = tmp2(tmp3[21]).SoundboardSlashIcon;
    } else {
      SoundboardIcon = tmp2(tmp3[22]).SoundboardIcon;
    }
    obj8.icon = SoundboardIcon;
    obj8.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const result = AudioActionCreatorsDefault.toggleLocalSoundboardMute(user.id);
    };
    items3.push(tmp10(tmp2(tmp3[20]).UserProfileFormRow, obj8, "mute-soundboard"));
    if (supportsDisableLocalVideo) {
      const intl3 = tmp2(tmp3[17]).intl;
      const string3 = intl3.string;
      const t3 = tmp2(tmp3[17]).t;
      if (isLocalVideoDisabled) {
        let string3Result = string3(t3["xc+Psz"]);
      } else {
        string3Result = string3(t3["4MMsWF"]);
      }
      const obj9 = { label: string3Result, icon: null, sublabel: null, onPress: null };
      if (isLocalVideoDisabled) {
        let VideoIcon = tmp2(tmp3[23]).VideoSlashIcon;
      } else {
        VideoIcon = tmp2(tmp3[24]).VideoIcon;
      }
      obj9.icon = VideoIcon;
      if (isLocalVideoAutoDisabled) {
        const obj10 = { style: tmp.disableVideoSublabel, children: null };
        const items4 = [tmp10(tmp2(tmp3[25]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" }), ];
        const obj11 = { variant: "text-xs/medium", color: "text-feedback-warning", children: null };
        const intl4 = tmp2(tmp3[17]).intl;
        obj11.children = intl4.string(tmp2(tmp3[17]).t.m2Hyj0);
        items4[1] = tmp10(tmp2(tmp3[26]).Text, obj11);
        obj10.children = items4;
        isLocalVideoAutoDisabled = closure_10(isLocalVideoDisabled, obj10);
      }
      obj9.sublabel = isLocalVideoAutoDisabled;
      obj9.onPress = function onPress() {
        trackUserProfileAction({ action: "DISABLE_VIDEO" });
        if (isLocalVideoAutoDisabled) {
          const result = UserProfileAlertUtils.confirmVideoUnstableConnection(() => channel(trackUserProfileAction[15]).setDisableLocalVideo(id.id, constants.MANUAL_ENABLED));
        } else {
          AudioActionCreatorsDefault.setDisableLocalVideo(user.id, isLocalVideoDisabled ? VideoToggleState.MANUAL_ENABLED : VideoToggleState.DISABLED);
        }
      };
      items3.push(tmp10(tmp2(tmp3[20]).UserProfileFormRow, obj9, "disable-video"));
    }
    if (isSecureFramesUIEnabled) {
      const obj12 = { label: null, icon: null, hint: null, onPress: null };
      const intl5 = tmp2(tmp3[17]).intl;
      obj12.label = intl5.string(tmp2(tmp3[17]).t["8ErYvY"]);
      obj12.icon = tmp2(tmp3[28]).ShieldLockIcon;
      obj12.hint = tmp2(tmp3[29]).FormArrow;
      obj12.onPress = function onPress() {
        trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const result = SecureFramesPlatformUtilsDefault.openSecureFramesUserVerificationModal(user.id, channel.id, () => user(trackUserProfileAction[32]).validateSecureFramesKeyConsistent({ userId: id.id, channelId: channel.id, guildId: channel.guild_id }));
      };
      items3.push(tmp10(tmp2(tmp3[20]).UserProfileFormRow, obj12, "view-secure-frames-verification-code"));
    }
    let tmp10Result = null;
    if (0 !== items3.length) {
      const obj13 = { style: null, title: null, titleStyle: null, children: null };
      const items5 = [tmp.card, user.style];
      obj13.style = items5;
      const intl6 = tmp2(tmp3[17]).intl;
      obj13.title = intl6.string(tmp2(tmp3[17]).t.NiTd0e);
      obj13.titleStyle = tmp.cardTitle;
      const obj14 = { children: items3 };
      obj13.children = tmp10(tmp2(tmp3[20]).UserProfileCardRows, obj14);
      tmp10Result = tmp10(tmp6(tmp3[20]), obj13);
      const tmp6Result = tmp6(tmp3[20]);
    }
    return tmp10Result;
  } else {
    const intl = tmp2(tmp3[17]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[17]).t;
    if (isLocalMute) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj15 = { label: stringResult, icon: null, onPress: null };
    if (isLocalMute) {
      let MicrophoneIcon = tmp2(tmp3[18]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[19]).MicrophoneIcon;
    }
    obj15.icon = MicrophoneIcon;
    obj15.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleLocalMute(user.id);
    };
    items3.push(tmp10(tmp2(tmp3[20]).UserProfileFormRow, obj15, "mute"));
  }
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(21);
  channel = channel.channel;
  const style = channel.style;
  const tmp4 = closure_11();
  const obj = channel(568);
  const trackUserProfileAction = channel(8496).useUserProfileAnalyticsContext().trackUserProfileAction;
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
  const obj2 = channel(8496);
  const stateFromStores = channel(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[2] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channel) {
    class A {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
    cResult[3] = channel;
    cResult[4] = A;
    const tmp11 = A;
  } else {
    class A {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  const tmpResult = channel(504);
  const stateFromStores1 = channel(504).useStateFromStores(tmp9, tmp11);
  if (stateFromStores1) {
    class A {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
    if (cResult[5] === style) {
      class A {
        constructor() {
          tmp = channel;
          isPrivateResult = channel.isPrivate();
          if (!isPrivateResult) {
            tmp3 = closure_6;
            tmp4 = Permissions;
            isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
          }
          return isPrivateResult;
        }
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            tmp = channel;
            isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              tmp3 = closure_6;
              tmp4 = Permissions;
              isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
            }
            return isPrivateResult;
          }
        }
        const stringResult = obj5.string(tmp(1119).t.NiTd0e);
        cResult[8] = stringResult;
      } else {
        class A {
          constructor() {
            tmp = channel;
            isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              tmp3 = closure_6;
              tmp4 = Permissions;
              isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
            }
            return isPrivateResult;
          }
        }
      }
      if (cResult[9] !== stateFromStores) {
        class A {
          constructor() {
            tmp = channel;
            isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              tmp3 = closure_6;
              tmp4 = Permissions;
              isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
            }
            return isPrivateResult;
          }
        }
        if (stateFromStores) {
          class A {
            constructor() {
              tmp = channel;
              isPrivateResult = channel.isPrivate();
              if (!isPrivateResult) {
                tmp3 = closure_6;
                tmp4 = Permissions;
                isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
              }
              return isPrivateResult;
            }
          }
          const stringResult1 = obj6.string(tmp(1119).t);
        } else {
          class A {
            constructor() {
              tmp = channel;
              isPrivateResult = channel.isPrivate();
              if (!isPrivateResult) {
                tmp3 = closure_6;
                tmp4 = Permissions;
                isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
              }
              return isPrivateResult;
            }
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = stringResult1;
      } else {
        class A {
          constructor() {
            tmp = channel;
            isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              tmp3 = closure_6;
              tmp4 = Permissions;
              isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
            }
            return isPrivateResult;
          }
        }
        if (stateFromStores) {
          class A {
            constructor() {
              tmp = channel;
              isPrivateResult = channel.isPrivate();
              if (!isPrivateResult) {
                tmp3 = closure_6;
                tmp4 = Permissions;
                isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
              }
              return isPrivateResult;
            }
          }
        } else {
          class A {
            constructor() {
              tmp = channel;
              isPrivateResult = channel.isPrivate();
              if (!isPrivateResult) {
                tmp3 = closure_6;
                tmp4 = Permissions;
                isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
              }
              return isPrivateResult;
            }
          }
        }
        if (cResult[11] !== trackUserProfileAction) {
          class D {
            constructor() {
              tmp = trackUserProfileAction({ action: "MUTE" });
              obj = closure_1(closure_2[15]);
              toggleSelfMuteResult = obj.toggleSelfMute();
              return;
            }
          }
          cResult[11] = trackUserProfileAction;
          cResult[12] = D;
        } else {
          class D {
            constructor() {
              tmp = trackUserProfileAction({ action: "MUTE" });
              obj = closure_1(closure_2[15]);
              toggleSelfMuteResult = obj.toggleSelfMute();
              return;
            }
          }
        }
        if (cResult[13] === tmp16) {
          class D {
            constructor() {
              tmp = trackUserProfileAction({ action: "MUTE" });
              obj = closure_1(closure_2[15]);
              toggleSelfMuteResult = obj.toggleSelfMute();
              return;
            }
          }
        }
        const obj3 = { children: null };
        const obj4 = { label: tmp16, icon: tmp19, onPress: tmp20 };
        obj3.children = closure_9(tmp(7486).UserProfileFormRow, obj4, "mute");
        const tmp23 = closure_9(tmp(7486).UserProfileCardRows, obj3);
        cResult[13] = tmp16;
        cResult[14] = tmp19;
        cResult[15] = tmp20;
        cResult[16] = tmp23;
      }
    }
    const items2 = [tmp4.card, style];
    cResult[5] = style;
    cResult[6] = tmp4.card;
    cResult[7] = items2;
  }
  return null;
}) : ((channel) => {
  channel = channel.channel;
  ({ user, style } = channel);
  const tmp = closure_11();
  let tmp9Result = dependencyMap;
  const trackUserProfileAction = channel(8496).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = channel(8496);
  const items = [MediaEngineStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => selfMute.isSelfMute());
  const obj2 = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, channel);
    }
    return isPrivateResult;
  });
  let tmp8 = null;
  if (stateFromStores1) {
    if (channel.isGuildStageVoice()) {
      tmp8 = null;
    }
    const obj4 = { style: null, title: null, titleStyle: null, children: null };
    const items2 = [tmp.card, style];
    obj4.style = items2;
    const intl = tmp2(1119).intl;
    obj4.title = intl.string(tmp2(1119).t.NiTd0e);
    obj4.titleStyle = tmp.cardTitle;
    const intl2 = tmp2(1119).intl;
    const string = intl2.string;
    const t = tmp2(1119).t;
    if (stateFromStores) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj5 = { label: stringResult, icon: null, onPress: null };
    if (stateFromStores) {
      let MicrophoneIcon = tmp2(9957).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(10298).MicrophoneIcon;
    }
    const obj6 = { children: null };
    obj5.icon = MicrophoneIcon;
    obj5.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleSelfMute();
    };
    obj6.children = closure_9(tmp2(7486).UserProfileFormRow, obj5, "mute");
    tmp9Result = tmp9(tmp2(7486).UserProfileCardRows, obj6);
    obj4.children = tmp9Result;
    closure_9(trackUserProfileAction(7486), obj4);
    const tmp6Result = trackUserProfileAction(7486);
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceSettings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    if (cResult[0] === channel) {
      if (cResult[1] === currentUser) {
      }
    }
    const obj2 = { user: currentUser, channel, style };
    const tmp9 = options(closure_13, obj2);
    cResult[0] = channel;
    cResult[1] = currentUser;
    cResult[2] = style;
    cResult[3] = tmp9;
  } else {
    if (cResult[4] === channel) {
      if (cResult[5] === style) {
        if (cResult[6] === user) {
          let tmp2 = cResult[7];
        }
        return tmp2;
      }
    }
    const obj3 = { user, channel, style };
    const tmp5 = options(closure_12, obj3);
    cResult[4] = channel;
    cResult[5] = style;
    cResult[6] = user;
    cResult[7] = tmp5;
    tmp2 = tmp5;
  }
}) : ((arg0) => {
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    const obj2 = { user: currentUser, channel, style };
    let tmp3 = options(closure_13, obj2);
  } else {
    const obj = { user, channel, style };
    tmp3 = options(closure_12, obj);
  }
  return tmp3;
});
