// Module ID: 11885
// Function ID: 11886
// Name: ChatInputActionButtonApps
// Dependencies: [19, 17, 11589, 21, 558, 576, 11671, 11737, 11886, 5786, 1126, 11882, 11888, 2]

// Module 11885 (ChatInputActionButtonApps)
import react_native from "react-native" /* 17 */;
import react_native2 from "react-native" /* 5786 */;
import ChatInputConstants from "ChatInputConstants" /* 11589 */;
import AppLauncherOnboardingActionCreators from "AppLauncherOnboardingActionCreators" /* 11737 */;
import AppLauncherOnboardingChatInputButtonAnimation from "AppLauncherOnboardingChatInputButtonAnimation" /* 11886 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onPress;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const ChatInputActionType = ChatInputConstants.ChatInputActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let accessible;
  let active;
  let canShowBotsBanner;
  let canShowOnboarding;
  let channel;
  let disabled;
  let ref;
  let styleActive;
  let styleActiveIcon;
  let styleButton;
  let tmp5;
  let tmp = channel;
  let obj = channel(ref[5]);
  const cResult = obj.c(37);
  ({ accessible, active, disabled, styleButton, styleActive, styleActiveIcon, channel } = onPress);
  onPress = onPress.onPress;
  let obj2 = canShowBotsBanner;
  ref = canShowBotsBanner.useRef(null);
  if (cResult[0] !== channel.id) {
    let obj3 = { channelId: channel.id };
    cResult[0] = channel.id;
    cResult[1] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  const tmp6 = onPress;
  let tmp7 = onPress(tmp2[6])(tmp5);
  ({ canShowOnboarding, canShowBotsBanner } = tmp7);
  const canShowAppsOrActivitiesBanner = tmp7.canShowAppsOrActivitiesBanner;
  const willShowGlobalSearchOnboarding = tmp7.willShowGlobalSearchOnboarding;
  if (canShowOnboarding) {
    canShowOnboarding = !tmp7.fromTriggeredOnboarding;
  }
  ref = obj2.useRef(-1);
  if (cResult[2] === canShowOnboarding) {
    if (cResult[3] === canShowAppsOrActivitiesBanner) {
      if (cResult[4] === canShowBotsBanner) {
        if (cResult[5] === channel.guild_id) {
          if (cResult[6] === channel.id) {
            let tmp8;
            if (cResult[7] === willShowGlobalSearchOnboarding) {
              tmp8 = cResult[8];
            }
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            if (cResult[9] === canShowOnboarding) {
              if (cResult[10] === canShowAppsOrActivitiesBanner) {
                if (cResult[11] === canShowBotsBanner) {
                  if (cResult[12] === channel.id) {
                    if (cResult[13] === guild_id) {
                      let tmp10;
                      if (cResult[14] === willShowGlobalSearchOnboarding) {
                        tmp10 = cResult[15];
                      }
                      const effect = obj2.useEffect(tmp8, tmp10);
                      if (cResult[16] === active) {
                        if (cResult[17] === canShowOnboarding) {
                          let tmp16;
                          if (cResult[20] !== onPress) {
                            class G {
                              constructor(arg0) {
                                clearTimeout(ref.current);
                                onPress(arg0, ChatInputActionType.APPS, ref);
                                const obj = react_native2;
                                const obj2 = { ref };
                                const result = obj.setAccessibilityFocus(obj2);
                              }
                            }
                            cResult[20] = onPress;
                            cResult[21] = G;
                          } else {
                            class G {
                              constructor(arg0) {
                                clearTimeout(ref.current);
                                onPress(arg0, ChatInputActionType.APPS, ref);
                                const obj = react_native2;
                                const obj2 = { ref };
                                const result = obj.setAccessibilityFocus(obj2);
                              }
                            }
                          }
                          const tmp15 = globalThis;
                          const _Symbol = Symbol;
                          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                            class G {
                              constructor(arg0) {
                                clearTimeout(ref.current);
                                onPress(arg0, ChatInputActionType.APPS, ref);
                                const obj = react_native2;
                                const obj2 = { ref };
                                const result = obj.setAccessibilityFocus(obj2);
                              }
                            }
                            const stringResult = obj5.string(tmp(ref[10]).t.rugBPp);
                            cResult[22] = stringResult;
                            tmp16 = stringResult;
                          } else {
                            class G {
                              constructor(arg0) {
                                clearTimeout(ref.current);
                                onPress(arg0, ChatInputActionType.APPS, ref);
                                const obj = react_native2;
                                const obj2 = { ref };
                                const result = obj.setAccessibilityFocus(obj2);
                              }
                            }
                          }
                          if (cResult[23] !== active) {
                            class G {
                              constructor(arg0) {
                                clearTimeout(ref.current);
                                onPress(arg0, ChatInputActionType.APPS, ref);
                                const obj = react_native2;
                                const obj2 = { ref };
                                const result = obj.setAccessibilityFocus(obj2);
                              }
                            }
                            tmp19[0] = active;
                            cResult[23] = active;
                            cResult[24] = tmp19;
                          } else {
                            class G {
                              constructor(arg0) {
                                clearTimeout(ref.current);
                                onPress(arg0, ChatInputActionType.APPS, ref);
                                const obj = react_native2;
                                const obj2 = { ref };
                                const result = obj.setAccessibilityFocus(obj2);
                              }
                            }
                          }
                          if (cResult[25] === accessible) {
                            class G {
                              constructor(arg0) {
                                clearTimeout(ref.current);
                                onPress(arg0, ChatInputActionType.APPS, ref);
                                const obj = react_native2;
                                const obj2 = { ref };
                                const result = obj.setAccessibilityFocus(obj2);
                              }
                            }
                          }
                          const obj4 = { ref, accessible, style: styleButton, disabled, active, activeIconStyle: styleActiveIcon, activeStyle: styleActive, onPress: tmp14, IconComponent: tmp(ref[12]).AppLauncherButtonIcon, accessibilityLabel: tmp16, accessibilityState: tmp18 };
                          const tmp6Result = tmp6(ref[11]);
                          const tmp23 = canShowOnboarding(tmp6Result, obj4);
                          cResult[25] = accessible;
                          cResult[26] = active;
                          cResult[27] = disabled;
                          cResult[28] = styleActive;
                          cResult[29] = styleActiveIcon;
                          cResult[30] = styleButton;
                          cResult[31] = tmp14;
                          cResult[32] = tmp18;
                          cResult[33] = tmp23;
                        }
                      }
                      let tmp13 = null;
                      if (canShowOnboarding) {
                        class G {
                          constructor(arg0) {
                            clearTimeout(ref.current);
                            onPress(arg0, ChatInputActionType.APPS, ref);
                            const obj = react_native2;
                            const obj2 = { ref };
                            const result = obj.setAccessibilityFocus(obj2);
                          }
                        }
                        if (!active) {
                          class G {
                            constructor(arg0) {
                              clearTimeout(ref.current);
                              onPress(arg0, ChatInputActionType.APPS, ref);
                              const obj = react_native2;
                              const obj2 = { ref };
                              const result = obj.setAccessibilityFocus(obj2);
                            }
                          }
                          const obj6 = { channelId: channel.id };
                          tmp13 = canShowOnboarding(tmp(tmp2[8]).AppLauncherOnboardingChatInputButtonAnimation, obj6);
                        }
                      }
                      cResult[16] = active;
                      cResult[17] = canShowOnboarding;
                      cResult[18] = channel.id;
                      cResult[19] = tmp13;
                    }
                  }
                }
              }
            }
            const items = [canShowOnboarding, canShowAppsOrActivitiesBanner, canShowBotsBanner, guild_id, channel.id, willShowGlobalSearchOnboarding];
            cResult[9] = canShowOnboarding;
            cResult[10] = canShowAppsOrActivitiesBanner;
            cResult[11] = canShowBotsBanner;
            cResult[12] = channel.id;
            cResult[13] = guild_id;
            cResult[14] = willShowGlobalSearchOnboarding;
            cResult[15] = items;
            tmp10 = items;
          }
        }
      }
    }
  }
  const fn = function _() {
    let guild_id;
    let guild_id1;
    let guild_id2;
    const tmp = canShowOnboarding;
    if (tmp) {
      if (canShowBotsBanner) {
        const _Date2 = Date;
        const obj2 = { channelId: channel.id, timeMs: Date.now(), guildId: guild_id, canShowBotsBanner: true, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding };
        const setTriggeredOnboardingContentMetadata2 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata;
        AppLauncherOnboardingActionCreators;
        guild_id = undefined;
        const tmp16 = channel;
        if (channel != null) {
          guild_id = tmp16.guild_id;
        }
        const result = setTriggeredOnboardingContentMetadata2(obj2);
      } else {
        const tmp3 = canShowAppsOrActivitiesBanner;
        if (tmp3) {
          let obj = { channelId: channel.id, timeMs: Date.now(), guildId: guild_id1, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: true, willShowGlobalSearchOnboarding };
          const _Date = Date;
          const setTriggeredOnboardingContentMetadata = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata;
          AppLauncherOnboardingActionCreators;
          guild_id1 = undefined;
          const tmp7 = channel;
          if (channel != null) {
            guild_id1 = tmp7.guild_id;
          }
          const result1 = setTriggeredOnboardingContentMetadata(obj);
        }
      }
      const tmp22 = willShowGlobalSearchOnboarding;
      if (tmp22) {
        const _Date3 = Date;
        const obj3 = { channelId: channel.id, timeMs: Date.now(), guildId: guild_id2, canShowAppsOrActivitiesBanner, canShowBotsBanner, willShowGlobalSearchOnboarding: true };
        const setTriggeredOnboardingContentMetadata3 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata;
        AppLauncherOnboardingActionCreators;
        guild_id2 = undefined;
        const tmp26 = channel;
        if (channel != null) {
          guild_id2 = tmp26.guild_id;
        }
        const result2 = setTriggeredOnboardingContentMetadata3(obj3);
      }
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        const obj = channel(ref[7]);
        obj.setLastSeenTimeMs();
      }, AppLauncherOnboardingChatInputButtonAnimation.APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS);
    }
  };
  cResult[2] = canShowOnboarding;
  cResult[3] = canShowAppsOrActivitiesBanner;
  cResult[4] = canShowBotsBanner;
  cResult[5] = channel.guild_id;
  cResult[6] = channel.id;
  cResult[7] = willShowGlobalSearchOnboarding;
  cResult[8] = fn;
  tmp8 = fn;
}) : ((onPress) => {
  let accessible;
  let active;
  let canShowBotsBanner;
  let canShowOnboarding;
  let channel;
  let disabled;
  let intl;
  let items1;
  let styleActive;
  let styleActiveIcon;
  let styleButton;
  ({ active, channel } = onPress);
  onPress = onPress.onPress;
  canShowBotsBanner = undefined;
  canShowOnboarding = undefined;
  let obj = canShowBotsBanner;
  ({ accessible, disabled, styleButton, styleActive, styleActiveIcon } = onPress);
  let ref = canShowBotsBanner.useRef(null);
  let tmp3 = ref;
  let obj2 = { channelId: channel.id };
  const tmp4 = onPress(ref[6])(obj2);
  ({ canShowOnboarding, canShowBotsBanner } = tmp4);
  const canShowAppsOrActivitiesBanner = tmp4.canShowAppsOrActivitiesBanner;
  const willShowGlobalSearchOnboarding = tmp4.willShowGlobalSearchOnboarding;
  const tmp2 = onPress;
  if (canShowOnboarding) {
    canShowOnboarding = !tmp4.fromTriggeredOnboarding;
  }
  ref = obj.useRef(-1);
  const items = [canShowOnboarding, canShowAppsOrActivitiesBanner, canShowBotsBanner, , , ];
  let guild_id;
  const useEffect = obj.useEffect;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  items[3] = guild_id;
  items[4] = channel.id;
  items[5] = willShowGlobalSearchOnboarding;
  const effect = useEffect(() => {
    let guild_id;
    let guild_id1;
    let guild_id2;
    const tmp = canShowOnboarding;
    if (tmp) {
      if (canShowBotsBanner) {
        const _Date2 = Date;
        const obj2 = { channelId: channel.id, timeMs: Date.now(), guildId: guild_id, canShowBotsBanner: true, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding };
        const setTriggeredOnboardingContentMetadata2 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata;
        AppLauncherOnboardingActionCreators;
        guild_id = undefined;
        const tmp16 = channel;
        if (channel != null) {
          guild_id = tmp16.guild_id;
        }
        const result = setTriggeredOnboardingContentMetadata2(obj2);
      } else {
        const tmp3 = canShowAppsOrActivitiesBanner;
        if (tmp3) {
          let obj = { channelId: channel.id, timeMs: Date.now(), guildId: guild_id1, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: true, willShowGlobalSearchOnboarding };
          const _Date = Date;
          const setTriggeredOnboardingContentMetadata = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata;
          AppLauncherOnboardingActionCreators;
          guild_id1 = undefined;
          const tmp7 = channel;
          if (channel != null) {
            guild_id1 = tmp7.guild_id;
          }
          const result1 = setTriggeredOnboardingContentMetadata(obj);
        }
      }
      const tmp22 = willShowGlobalSearchOnboarding;
      if (tmp22) {
        const _Date3 = Date;
        const obj3 = { channelId: channel.id, timeMs: Date.now(), guildId: guild_id2, canShowAppsOrActivitiesBanner, canShowBotsBanner, willShowGlobalSearchOnboarding: true };
        const setTriggeredOnboardingContentMetadata3 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata;
        AppLauncherOnboardingActionCreators;
        guild_id2 = undefined;
        const tmp26 = channel;
        if (channel != null) {
          guild_id2 = tmp26.guild_id;
        }
        const result2 = setTriggeredOnboardingContentMetadata3(obj3);
      }
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        const obj = channel(ref[7]);
        obj.setLastSeenTimeMs();
      }, AppLauncherOnboardingChatInputButtonAnimation.APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS);
    }
  }, items);
  let tmp9 = null;
  let tmp7 = ref;
  const tmp8 = canShowAppsOrActivitiesBanner;
  if (canShowOnboarding) {
    tmp9 = null;
    if (!active) {
      let obj3 = { channelId: channel.id };
      tmp9 = canShowOnboarding(channel(tmp3[8]).AppLauncherOnboardingChatInputButtonAnimation, obj3);
    }
  }
  const obj4 = { children: items1 };
  items1 = [tmp9, ];
  const obj5 = {
    ref,
    accessible,
    style: styleButton,
    disabled,
    active,
    activeIconStyle: styleActiveIcon,
    activeStyle: styleActive,
    onPress(arg0) {
      clearTimeout(ref.current);
      onPress(arg0, ChatInputActionType.APPS, ref);
      const obj = react_native2;
      const obj2 = { ref };
      const result = obj.setAccessibilityFocus(obj2);
    },
    IconComponent: channel(tmp3[12]).AppLauncherButtonIcon,
    accessibilityLabel: intl.string(channel(tmp3[10]).t.rugBPp),
    accessibilityState: { expanded: active }
  };
  const tmp2Result = tmp2(tmp3[11]);
  intl = channel(tmp3[10]).intl;
  items1[1] = canShowOnboarding(tmp2Result, obj5);
  return tmp7(tmp8, obj4);
}));
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx");

export default memoResult;
