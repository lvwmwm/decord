// Module ID: 17632
// Function ID: 17633
// Name: VoicePanelVoiceControls
// Dependencies: [19, 17, 2045, 12418, 21, 4758, 580, 4497, 558, 568, 12419, 17470, 9607, 2023, 17494, 10236, 17633, 14064, 5903, 1119, 10246, 5186, 504, 12243, 5173, 6891, 1613, 5804, 7371, 12429, 2]

// Module 17632 (VoicePanelVoiceControls)
import nativeDefault from "native" /* 580 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import UserSettings from "UserSettings" /* 2023 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6891 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 9607 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10236 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12419 */;
import useSelectedActiveStreamDefault from "useSelectedActiveStream" /* 14064 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17470 */;
import MobileGoLiveEntrypointExperiment from "MobileGoLiveEntrypointExperiment" /* 17494 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;

const MobileGoLiveEntrypointExperimentDefault = MobileGoLiveEntrypointExperiment;

require = fn;
function NOOP() {

}
const CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = fn(12418).CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4758);
let obj = { scrollView: { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 }, scrollViewScreenReader: null, blurRegion: null };
let obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.scrollViewScreenReader = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
obj.blurRegion = { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(17).ScrollView);
let ReactCompilerGating = fn(558);
let closure_10 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(treatment[9]).c(49);
  channel = channel.channel;
  const openTab = channel.openTab;
  const channelId = noop.useContext(openTab(treatment[10])).channelId;
  const tmp5 = openTab(treatment[11])(channelId);
  let obj = channel(treatment[9]);
  const embeddedActivityLaunchability = channel(treatment[12]).useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = channel(treatment[13]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { location: "VoicePanelVoiceControls" };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  let obj2 = channel(treatment[12]);
  treatment = openTab(treatment[14]).useConfig(first).treatment;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: "VoicePanelVoiceControls" };
    cResult[1] = obj4;
    let tmp9 = obj4;
  } else {
    tmp9 = cResult[1];
  }
  const tmp4Result = openTab(treatment[14]);
  const nonContextualStreamOutputPresent = openTab(treatment[15]).useConfig(tmp9).nonContextualStreamOutputPresent;
  if (cResult[2] === channel) {
    if (cResult[3] === treatment) {
      if (cResult[4] === openTab) {
        let tmp10 = cResult[5];
      }
      const tmp11 = tmp4(tmp2[17])(channel);
      if (cResult[6] === tmp5) {
        if (cResult[7] === openTab) {
          if (cResult[8] === tmp10) {
            let tmp12 = cResult[9];
          }
          if (cResult[10] === channel) {
            if (cResult[11] === tmp5) {
              let tmp16 = cResult[12];
            }
            if (cResult[13] !== nonContextualStreamOutputPresent) {
              let tmp20 = nonContextualStreamOutputPresent;
              if (nonContextualStreamOutputPresent) {
                tmp20 = closure_5(tmp(tmp2[16]).StreamVolumeItem, {});
              }
              cResult[13] = nonContextualStreamOutputPresent;
              cResult[14] = tmp20;
              let tmp19 = tmp20;
            } else {
              tmp19 = cResult[14];
            }
            const _Symbol = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[19]).intl;
              const stringResult = intl.string(tmp(tmp2[19]).t.NiTd0e);
              cResult[15] = stringResult;
              let tmp22 = stringResult;
            } else {
              tmp22 = cResult[15];
            }
            const _Symbol2 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp26 = closure_5(tmp(tmp2[16]).DeafenSwitch, {});
              cResult[16] = tmp26;
              let tmp24 = tmp26;
            } else {
              tmp24 = cResult[16];
            }
            if (cResult[17] === channel) {
              if (cResult[18] === tmp5) {
                let tmp27 = cResult[19];
              }
              if (cResult[20] !== channelId) {
                const obj5 = { channelId };
                const tmp32 = closure_5(tmp(tmp2[16]).HideNonVideoParticipants, obj5);
                cResult[20] = channelId;
                cResult[21] = tmp32;
                let tmp30 = tmp32;
              } else {
                tmp30 = cResult[21];
              }
              const _Symbol3 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp35 = closure_5(tmp(tmp2[16]).HideSelfVideo, {});
                cResult[22] = tmp35;
                let tmp33 = tmp35;
              } else {
                tmp33 = cResult[22];
              }
              if (cResult[23] === channel) {
                if (cResult[24] === tmp5) {
                  let tmp36 = cResult[25];
                }
                if (cResult[26] === tmp30) {
                  if (cResult[27] === tmp36) {
                    if (cResult[28] === tmp27) {
                      let tmp39 = cResult[29];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp44 = closure_5(tmp(tmp2[20]).VoiceProcessingOptions, {});
                      cResult[30] = tmp44;
                      let tmp42 = tmp44;
                    } else {
                      tmp42 = cResult[30];
                    }
                    if (cResult[31] !== channel.guild_id) {
                      const obj6 = { guildId: channel.guild_id };
                      const tmp47 = closure_5(tmp(tmp2[16]).VoiceSettingsButton, obj6);
                      cResult[31] = channel.guild_id;
                      cResult[32] = tmp47;
                      let tmp45 = tmp47;
                    } else {
                      tmp45 = cResult[32];
                    }
                    if (cResult[33] !== tmp11) {
                      let tmp50 = null != tmp11;
                      if (tmp50) {
                        const obj7 = { stream: tmp11 };
                        tmp50 = closure_5(tmp(tmp2[16]).ReportStreamIssueButton, obj7);
                      }
                      cResult[33] = tmp11;
                      cResult[34] = tmp50;
                      let tmp48 = tmp50;
                    } else {
                      tmp48 = cResult[34];
                    }
                    if (cResult[35] === tmp45) {
                      if (cResult[36] === tmp48) {
                        let tmp52 = cResult[37];
                      }
                      if (cResult[38] === tmp5) {
                        if (cResult[39] === setting) {
                          if (cResult[40] === embeddedActivityLaunchability) {
                            let tmp55 = cResult[41];
                          }
                          if (cResult[42] === tmp39) {
                            if (cResult[43] === tmp52) {
                              if (cResult[44] === tmp55) {
                                if (cResult[45] === tmp12) {
                                  if (cResult[46] === tmp16) {
                                    if (cResult[47] === tmp19) {
                                      let tmp57 = cResult[48];
                                    }
                                    return tmp57;
                                  }
                                }
                              }
                            }
                          }
                          const obj8 = { spacing: 24, children: null };
                          const items = [tmp12, tmp16, tmp19, tmp39, tmp42, tmp52, tmp55];
                          obj8.children = items;
                          const tmp59 = closure_6(tmp(tmp2[21]).Stack, obj8);
                          cResult[42] = tmp39;
                          cResult[43] = tmp52;
                          cResult[44] = tmp55;
                          cResult[45] = tmp12;
                          cResult[46] = tmp16;
                          cResult[47] = tmp19;
                          cResult[48] = tmp59;
                          tmp57 = tmp59;
                        }
                      }
                      let tmp56 = null;
                      if (tmp5) {
                        tmp56 = null;
                        if (setting) {
                          tmp56 = null;
                          if (embeddedActivityLaunchability === tmp(tmp2[12]).EmbeddedActivityLaunchability.CAN_LAUNCH) {
                            const obj9 = { title: null, hasIcons: true, children: null };
                            const intl2 = tmp(tmp2[19]).intl;
                            obj9.title = intl2.string(tmp(tmp2[19]).t.J6rqB7);
                            const items1 = [closure_5(tmp(tmp2[16]).LeaveActivitiesButton, {}), closure_5(tmp(tmp2[16]).ShareActivityLogsButton, {}), closure_5(tmp(tmp2[16]).ToggleShowActivitiesDebugOverlay, {})];
                            obj9.children = items1;
                            tmp56 = closure_6(tmp(tmp2[18]).TableRowGroup, obj9);
                          }
                        }
                      }
                      cResult[38] = tmp5;
                      cResult[39] = setting;
                      cResult[40] = embeddedActivityLaunchability;
                      cResult[41] = tmp56;
                      tmp55 = tmp56;
                    }
                    const obj10 = { hasIcons: true, children: null };
                    const items2 = [tmp45, tmp48];
                    obj10.children = items2;
                    const tmp54 = closure_6(tmp(tmp2[18]).TableRowGroup, obj10);
                    cResult[35] = tmp45;
                    cResult[36] = tmp48;
                    cResult[37] = tmp54;
                    tmp52 = tmp54;
                  }
                }
                const obj11 = { title: tmp22, hasIcons: true, children: null };
                const items3 = [tmp24, tmp27, tmp30, tmp33, tmp36];
                obj11.children = items3;
                const tmp41 = closure_6(tmp(tmp2[18]).TableRowGroup, obj11);
                cResult[26] = tmp30;
                cResult[27] = tmp36;
                cResult[28] = tmp27;
                cResult[29] = tmp41;
                tmp39 = tmp41;
              }
              let tmp37 = tmp5;
              if (tmp5) {
                const obj12 = { channel, connected: tmp5 };
                tmp37 = closure_5(tmp(tmp2[16]).InviteButton, obj12);
              }
              cResult[23] = channel;
              cResult[24] = tmp5;
              cResult[25] = tmp37;
              tmp36 = tmp37;
            }
            const obj13 = { channel, connected: tmp5 };
            const tmp29 = closure_5(tmp(tmp2[16]).AudioRouteButton, obj13);
            cResult[17] = channel;
            cResult[18] = tmp5;
            cResult[19] = tmp29;
            tmp27 = tmp29;
          }
          const obj14 = { channel, connected: tmp5 };
          const tmp18 = closure_5(tmp(tmp2[16]).GameConsoles, obj14);
          cResult[10] = channel;
          cResult[11] = tmp5;
          cResult[12] = tmp18;
          tmp16 = tmp18;
        }
      }
      let tmp13 = tmp5;
      if (tmp5) {
        const obj15 = { hasIcons: true, children: null };
        const obj16 = { openTab };
        const items4 = [closure_5(tmp(tmp2[16]).ActivitiesButton, obj16), tmp10()];
        obj15.children = items4;
        tmp13 = closure_6(tmp(tmp2[18]).TableRowGroup, obj15);
      }
      cResult[6] = tmp5;
      cResult[7] = openTab;
      cResult[8] = tmp10;
      cResult[9] = tmp13;
      tmp12 = tmp13;
    }
  }
  const fn = function v() {
    if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj2 = { openTab };
      return hasOwnProperty(tmp2(17633).ChatButton, obj2);
    } else if (tmp2(17494).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD === tmp) {
      const obj3 = { channel };
      return hasOwnProperty(tmp2(17633).SoundboardButton, obj3);
    } else {
      const obj = { channel };
      return hasOwnProperty(tmp2(17633).ScreenshareButton, obj);
    }
    tmp = treatment;
  };
  cResult[2] = channel;
  cResult[3] = treatment;
  cResult[4] = openTab;
  cResult[5] = fn;
  tmp10 = fn;
}) : ((arg0) => {
  ({ channel, openTab } = arg0);
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp2 = useIsConnectedToVoiceChannelDefault(channelId);
  const embeddedActivityLaunchability = getEmbeddedActivityLaunchability.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const treatment = MobileGoLiveEntrypointExperimentDefault.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({ location: "VoicePanelVoiceControls" }).nonContextualStreamOutputPresent;
  const tmp6 = useSelectedActiveStreamDefault(channel);
  if (!tmp2) {
    const items = [tmp2, , , , , , ];
    const obj4 = { channel, connected: tmp2 };
    items[1] = hasOwnProperty(tmp3(17633).GameConsoles, obj4);
    if (nonContextualStreamOutputPresent) {
      nonContextualStreamOutputPresent = tmp12(tmp3(17633).StreamVolumeItem, {});
    }
    items[2] = nonContextualStreamOutputPresent;
    const obj5 = { title: null, hasIcons: true, children: null };
    const intl = tmp3(1119).intl;
    obj5.title = intl.string(tmp3(1119).t.NiTd0e);
    const items1 = [hasOwnProperty(tmp3(17633).DeafenSwitch, {}), , , , ];
    const obj6 = { channel, connected: tmp2 };
    items1[1] = hasOwnProperty(tmp3(17633).AudioRouteButton, obj6);
    const obj7 = { channelId };
    items1[2] = hasOwnProperty(tmp3(17633).HideNonVideoParticipants, obj7);
    items1[3] = hasOwnProperty(tmp3(17633).HideSelfVideo, {});
    let tmp12Result = tmp2;
    if (tmp2) {
      const obj8 = { channel, connected: tmp2 };
      tmp12Result = tmp12(tmp3(17633).InviteButton, obj8);
    }
    items1[4] = tmp12Result;
    obj5.children = items1;
    items[3] = tmp7(tmp3(5903).TableRowGroup, obj5);
    items[4] = hasOwnProperty(tmp3(10246).VoiceProcessingOptions, {});
    const obj9 = { guildId: channel.guild_id };
    const items2 = [hasOwnProperty(tmp3(17633).VoiceSettingsButton, obj9), ];
    let tmp12Result2 = null != tmp6;
    if (tmp12Result2) {
      const obj10 = { stream: tmp6 };
      tmp12Result2 = tmp12(tmp3(17633).ReportStreamIssueButton, obj10);
    }
    const obj11 = { hasIcons: true, children: null };
    items2[1] = tmp12Result2;
    obj11.children = items2;
    items[5] = tmp7(tmp3(5903).TableRowGroup, obj11);
    let tmp7Result = null;
    if (tmp2) {
      tmp7Result = null;
      if (setting) {
        tmp7Result = null;
        if (embeddedActivityLaunchability === tmp3(9607).EmbeddedActivityLaunchability.CAN_LAUNCH) {
          const obj12 = { title: null, hasIcons: true, children: null };
          const intl2 = tmp3(1119).intl;
          obj12.title = intl2.string(tmp3(1119).t.J6rqB7);
          const items3 = [tmp12(tmp3(17633).LeaveActivitiesButton, {}), tmp12(tmp3(17633).ShareActivityLogsButton, {}), tmp12(tmp3(17633).ToggleShowActivitiesDebugOverlay, {})];
          obj12.children = items3;
          tmp7Result = tmp7(tmp3(5903).TableRowGroup, obj12);
        }
      }
    }
    const obj13 = { spacing: 24, children: null };
    items[6] = tmp7Result;
    obj13.children = items;
    return tmp7(tmp8, obj13);
  } else {
    const obj14 = { openTab };
    const items4 = [hasOwnProperty(tmp3(17633).ActivitiesButton, obj14), ];
    if (tmp3(17494).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj15 = { openTab };
      let tmp9Result = tmp9(tmp3(17633).ChatButton, obj15);
      const obj16 = { hasIcons: true, children: null };
      items4[1] = tmp9Result;
      obj16.children = items4;
      tmp7(tmp3(5903).TableRowGroup, obj16);
    } else if (tmp3(17494).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !== treatment) {
      const obj17 = { channel };
      tmp9Result = tmp9(tmp3(17633).ScreenshareButton, obj17);
    }
    const obj18 = { channel };
    tmp9Result = tmp9(tmp3(17633).SoundboardButton, obj18);
  }
}));
const scrollIndicatorInsets = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
const __initData = { code: "function VoicePanelVoiceControlsTsx1(t4){const{isScrolled}=this.__closure;const{offset:offset}=t4;isScrolled.set(offset>0);}" };
const __initData2 = { code: "function VoicePanelVoiceControlsTsx2({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}" };
ReactCompilerGating = fn(558);
let obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isVisible) => {
  const cResult = isVisible(sharedValue[9]).c(38);
  isVisible = isVisible.isVisible;
  const openTab = isVisible.openTab;
  const tmp4 = closure_8();
  channelId = scrollerRef.useContext(channelId(sharedValue[10])).channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = isVisible(sharedValue[9]);
  const obj2 = scrollerRef;
  const tmp5 = channelId;
  const stateFromStores = isVisible(sharedValue[22]).useStateFromStores(first, tmp8);
  const tmpResult = isVisible(sharedValue[22]);
  sharedValue = isVisible(sharedValue[7]).useSharedValue(false);
  if (cResult[3] !== sharedValue) {
    class T {
      constructor(arg0) {
        result = closure_2.set(isVisible.offset > 0);
        return;
      }
    }
    const obj3 = { isScrolled: sharedValue };
    T.__closure = obj3;
    T.__workletHash = 6455256137176;
    T.__initData = __initData;
    cResult[3] = sharedValue;
    cResult[4] = T;
  } else {
    class T {
      constructor(arg0) {
        result = closure_2.set(isVisible.offset > 0);
        return;
      }
    }
  }
  if (cResult[5] !== tmp11) {
    class T {
      constructor(arg0) {
        result = closure_2.set(isVisible.offset > 0);
        return;
      }
    }
    tmp14[0] = tmp11;
    cResult[5] = tmp11;
    cResult[6] = tmp14;
    const tmp13 = tmp14;
  } else {
    class T {
      constructor(arg0) {
        result = closure_2.set(isVisible.offset > 0);
        return;
      }
    }
  }
  const tmpResult4 = isVisible(sharedValue[7]);
  const animatedScrollLock = isVisible(sharedValue[23]).useAnimatedScrollLock(tmp13);
  ({ onScroll, gestureRef, scrollerRef } = animatedScrollLock);
  const animatedProps = animatedScrollLock.animatedProps;
  const tmpResult5 = isVisible(sharedValue[23]);
  const isScreenReaderEnabled = isVisible(sharedValue[24]).useIsScreenReaderEnabled();
  if (cResult[7] === isVisible) {
    class T {
      constructor(arg0) {
        result = closure_2.set(isVisible.offset > 0);
        return;
      }
    }
    const effect = obj2.useEffect(B, items2);
    if (cResult[11] !== gestureRef) {
      class T {
        constructor(arg0) {
          result = closure_2.set(isVisible.offset > 0);
          return;
        }
      }
      let NativeResult = obj8.Native();
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            result = closure_2.set(isVisible.offset > 0);
            return;
          }
        }
        const isMetaQuestResult = obj10.isMetaQuest();
        cResult[13] = isMetaQuestResult;
        const tmp18 = isMetaQuestResult;
      } else {
        class T {
          constructor(arg0) {
            result = closure_2.set(isVisible.offset > 0);
            return;
          }
        }
      }
      NativeResult = NativeResult.enabled(!tmp18);
      let result = NativeResult.simultaneousWithExternalGesture(gestureRef);
      cResult[11] = gestureRef;
      cResult[12] = result;
    } else {
      class T {
        constructor(arg0) {
          result = closure_2.set(isVisible.offset > 0);
          return;
        }
      }
      const tmp22 = isScreenReaderEnabled ? tmp4.scrollViewScreenReader : tmp4.scrollView;
      if (cResult[14] === isScreenReaderEnabled) {
        class T {
          constructor(arg0) {
            result = closure_2.set(isVisible.offset > 0);
            return;
          }
        }
        if (cResult[17] === stateFromStores) {
          class T {
            constructor(arg0) {
              result = closure_2.set(isVisible.offset > 0);
              return;
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor(arg0) {
                result = closure_2.set(isVisible.offset > 0);
                return;
              }
            }
            const tmp30 = closure_5(tmp(tmp2[28]).SafeAreaPaddingView, { bottom: true });
            cResult[20] = tmp30;
            const tmp29 = tmp30;
          } else {
            class T {
              constructor(arg0) {
                result = closure_2.set(isVisible.offset > 0);
                return;
              }
            }
          }
          if (cResult[21] === animatedProps) {
            class T {
              constructor(arg0) {
                result = closure_2.set(isVisible.offset > 0);
                return;
              }
            }
          }
          const obj4 = { style: tmp22, ref: scrollerRef, onScroll, animatedProps, onMomentumScrollEnd: NOOP, scrollEventThrottle: 8.333333333333334, scrollIndicatorInsets, children: null };
          const items1 = [tmp23, tmp25, tmp29];
          obj4.children = items1;
          const tmp36 = closure_6(closure_9, obj4);
          cResult[21] = animatedProps;
          cResult[22] = onScroll;
          cResult[23] = scrollerRef;
          cResult[24] = tmp25;
          cResult[25] = tmp22;
          cResult[26] = tmp23;
          cResult[27] = tmp36;
        }
        let tmp27 = null != stateFromStores;
        if (tmp27) {
          class T {
            constructor(arg0) {
              result = closure_2.set(isVisible.offset > 0);
              return;
            }
          }
          const obj5 = { channel: stateFromStores, openTab };
          tmp27 = closure_5(closure_10, obj5);
        }
        cResult[17] = stateFromStores;
        cResult[18] = openTab;
        cResult[19] = tmp27;
      }
      let tmp24 = !isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        class T {
          constructor(arg0) {
            result = closure_2.set(isVisible.offset > 0);
            return;
          }
        }
        const obj6 = { style: tmp4.blurRegion };
        tmp24 = closure_5(tmp5(tmp2[27]), obj6);
      }
      cResult[14] = isScreenReaderEnabled;
      cResult[15] = tmp4.blurRegion;
      cResult[16] = tmp24;
    }
  }
  class B {
    constructor() {
      if (isVisible) {
        tmp = scrollerRef;
        current = scrollerRef.current;
        tmp2 = null;
        if (current != null) {
          scrollToResult = current.scrollTo({ x: 0, y: 0, animated: false });
        }
      }
      return;
    }
  }
  items2 = [isVisible, scrollerRef];
  cResult[7] = isVisible;
  cResult[8] = scrollerRef;
  cResult[9] = B;
  cResult[10] = items2;
}) : ((isVisible) => {
  isVisible = isVisible.isVisible;
  let channelId;
  let sharedValue;
  let gestureRef;
  let scrollerRef;
  const tmp = closure_8();
  channelId = gestureRef.useContext(channelId(sharedValue[10])).channelId;
  const items = [scrollerRef];
  const stateFromStores = isVisible(sharedValue[22]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = isVisible(sharedValue[22]);
  const tmp4 = isVisible;
  sharedValue = isVisible(sharedValue[7]).useSharedValue(false);
  const fn = function c(offset) {
    const result = sharedValue.set(offset.offset > 0);
  };
  fn.__closure = { isScrolled: sharedValue };
  fn.__workletHash = 6771473467736;
  fn.__initData = __initData2;
  const items1 = [sharedValue];
  const callback = gestureRef.useCallback(fn, items1);
  let obj2 = isVisible(sharedValue[7]);
  const animatedScrollLock = isVisible(sharedValue[23]).useAnimatedScrollLock({ onScrollHandlerWorkletized: callback });
  gestureRef = animatedScrollLock.gestureRef;
  scrollerRef = animatedScrollLock.scrollerRef;
  ({ onScroll, animatedProps } = animatedScrollLock);
  const obj3 = isVisible(sharedValue[23]);
  const isScreenReaderEnabled = isVisible(sharedValue[24]).useIsScreenReaderEnabled();
  const items2 = [isVisible, scrollerRef];
  const effect = gestureRef.useEffect(() => {
    if (isVisible) {
      const current = scrollerRef.current;
      if (current != null) {
        current.scrollTo({ x: 0, y: 0, animated: false });
      }
    }
  }, items2);
  const items3 = [gestureRef];
  const memo = gestureRef.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const NativeResult = Gesture.Native();
    return NativeResult.enabled(!MetaQuestUtils.isMetaQuest()).simultaneousWithExternalGesture(gestureRef);
  }, items3);
  const obj5 = { gesture: memo, children: null };
  const obj6 = { style: isScreenReaderEnabled ? tmp.scrollViewScreenReader : tmp.scrollView, ref: scrollerRef, onScroll, animatedProps, onMomentumScrollEnd: NOOP, scrollEventThrottle: 8.333333333333334, scrollIndicatorInsets, children: null };
  let tmp14Result = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj7 = { style: tmp.blurRegion };
    tmp14Result = tmp14(tmp2(tmp3[27]), obj7);
  }
  const items4 = [tmp14Result, , ];
  let tmp14Result3 = null != stateFromStores;
  if (tmp14Result3) {
    const obj8 = { channel: stateFromStores, openTab: isVisible.openTab };
    tmp14Result3 = tmp14(closure_10, obj8);
  }
  items4[1] = tmp14Result3;
  items4[2] = closure_5(tmp4(sharedValue[28]).SafeAreaPaddingView, { bottom: true });
  obj6.children = items4;
  obj5.children = closure_6(closure_9, obj6);
  const children = [closure_5(isVisible(sharedValue[25]).GestureDetector, obj5), ];
  let tmp14Result4 = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj9 = { shown: sharedValue, style: tmp.blurRegion };
    tmp14Result4 = tmp14(tmp2(tmp3[29]), obj9);
  }
  children[1] = tmp14Result4;
  return closure_6(closure_7, { children });
}));
