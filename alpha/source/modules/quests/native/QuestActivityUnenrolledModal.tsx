// Module ID: 17720
// Function ID: 17721
// Name: QuestActivityUnenrolledModal
// Dependencies: [5, 32, 19, 17, 7390, 17719, 5972, 21, 5092, 587, 1383, 558, 576, 5031, 4825, 504, 7412, 6857, 9170, 5975, 12978, 1415, 9171, 7415, 5934, 4832, 12977, 15373, 6156, 12973, 5088, 1126, 5379, 6177, 5377, 7088, 7728, 12981, 10602, 2]

// Module 17720 (QuestActivityUnenrolledModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import QuestConstants from "QuestConstants" /* 5972 */;
import QuestTypes from "QuestTypes" /* 5975 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7088 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7415 */;
import AssetRegistryDefault from "AssetRegistry" /* 7728 */;
import QuestActionCreators from "QuestActionCreators" /* 9171 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 12981 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 15373 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestStore from "QuestStore" /* 7390 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 17719 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c1, c2, dependencyMap;

let closure_12;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
({ Pressable: metroRequire, View: metroImportDefault } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const constants = { MAIN: "main" };
let c14 = 87;
let closure_15 = createStyles.createStyles((arg0) => {
  let items2;
  let items3;
  let obj13;
  let obj14;
  let obj3;
  let obj9;
  let tmp5;
  const obj = { container: { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 }, content: { marginTop: "auto" }, imagesContainer: obj3, baseShadow: tmp5, appIconContainer: obj13, appIcon: size, rewardTileContainer: obj14, questRewardTile: { borderRadius: nativeDefault.radii.xl - 2.18 }, textContainer: { alignItems: "center", gap: nativeDefault.space.PX_8 }, buttonsContainer: { flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: 20 }, footer: { flexDirection: "column", width: "100%", marginTop: "auto" } };
  ({ flex: 1, paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 });
  obj3 = { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: nativeDefault.space.PX_32 };
  const obj4 = utils_PlatformUtils;
  if (obj4.isIOS()) {
    let obj6;
    if (arg0) {
      obj6 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 85 };
      const obj5 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 85 };
    } else {
      obj6 = {};
    }
    obj9 = obj6;
  } else {
    let items1;
    if (arg0) {
      const items = [{ dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 } }, ];
      const obj7 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 } };
      const obj8 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 250, 0.41)", offsetX: 0, offsetY: 0 } };
      items[1] = obj8;
      items1 = items;
    } else {
      items1 = [];
    }
    obj9 = { filter: items1 };
  }
  const merged = Object.assign(obj9);
  const obj10 = {};
  const tmp3Result = utils_PlatformUtils;
  if (tmp3Result.isIOS()) {
    let obj12;
    if (arg0) {
      obj12 = { shadowColor: "rgb(144, 144, 250)", shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.4, shadowRadius: 85 };
      const obj11 = { shadowColor: "rgb(144, 144, 250)", shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.4, shadowRadius: 85 };
    } else {
      obj12 = {};
    }
    const merged1 = Object.assign(obj12);
    tmp5 = obj10;
  } else {
    tmp5 = obj10;
  }
  obj13 = { borderRadius: nativeDefault.radii.xl, borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderStyle: "solid", transform: items2, overflow: "hidden" };
  items2 = [{ rotate: "-12.41deg" }];
  size = { width: v87, height: v87, borderRadius: tmp(587).radii.xl - 2.18 };
  obj14 = { borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderRadius: nativeDefault.radii.xl, borderStyle: "solid", transform: items3, overflow: "hidden" };
  items3 = [{ translateX: -10 }, { rotate: "7.81deg" }];
  ({ borderRadius: nativeDefault.radii.xl - 2.18 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: 20 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestActivityUnenrolledModalInner(quest) {
  let accessibilityRole;
  let accessibilityState;
  let closure_2;
  let closure_3;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let state;
  let tmp13;
  let tmp5;
  let tmp8;
  let tmp9;
  let trackQuestContentClickedWithImpression;
  const tmp2 = dependencyMap;
  let obj = quest(576);
  const cResult = obj.c(85);
  quest = quest.quest;
  let obj2 = quest(5031);
  const theme = obj2.useTheme();
  if (cResult[0] !== theme) {
    const tmpResult = quest(4825);
    const isThemeDarkResult = tmpResult.isThemeDark(theme);
    cResult[0] = theme;
    cResult[1] = isThemeDarkResult;
    tmp5 = isThemeDarkResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_15(tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnenrolledActivityQuestStore];
    class I {
      constructor() {
        return state.getState().autoEnroll;
      }
    }
    cResult[2] = items;
    cResult[3] = I;
    tmp9 = I;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult9 = quest(504);
  const tmp11 = trackQuestContentClickedWithImpression(react.useState(tmpResult9.useStateFromStores(tmp8, tmp9)), 2);
  const checked = tmp11[0];
  dependencyMap = tmp11[1];
  if (cResult[4] !== quest) {
    const tmpResult10 = quest(7412);
    const activityApplicationId = tmpResult10.getActivityApplicationId(quest);
    class I {
      constructor() {
        return state.getState().autoEnroll;
      }
    }
    cResult[5] = activityApplicationId;
    tmp13 = activityApplicationId;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult11 = quest(6857);
  const getOrFetchApplication = tmpResult11.useGetOrFetchApplication(tmp13);
  const tmpResult12 = quest(9170);
  const questTaskDetails = tmpResult12.useQuestTaskDetails(quest);
  if (cResult[6] === quest) {
    let tmp17;
    let tmp25;
    let tmp27;
    let tmp28;
    let tmp29;
    if (cResult[7] === questTaskDetails) {
      tmp17 = cResult[8];
    }
    const tmpResult13 = quest(12978);
    const questsInstructionsToWinReward = tmpResult13.useQuestsInstructionsToWinReward(tmp17);
    class I {
      constructor() {
        return state.getState().autoEnroll;
      }
    }
    let tmp19 = null;
    if (null != getOrFetchApplication) {
      if (cResult[9] === getOrFetchApplication.icon) {
        let tmp20;
        if (cResult[10] === getOrFetchApplication.id) {
          tmp20 = cResult[11];
        }
        tmp19 = tmp20;
      }
      const obj10 = checked(1415);
      class I {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
      ({ id: tmp22[0], icon: tmp22[1] } = getOrFetchApplication);
      tmp22[2] = v87;
      const applicationIconSource = obj10.getApplicationIconSource(tmp22);
      cResult[9] = getOrFetchApplication.icon;
      cResult[10] = getOrFetchApplication.id;
      cResult[11] = applicationIconSource;
      tmp20 = applicationIconSource;
    }
    if (cResult[12] !== quest.id) {
      let closure_0 = _asyncToGenerator(async (arg0, value) => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "+51" };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const obj4 = { questContent: tmp3(closure_2_2[19]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: tmp3(closure_2_2[23]).QuestContentCTA.START_QUEST, sourceQuestContent: tmp3(closure_2_2[19]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
                const enrollInQuest = tmp3(closure_2_2[22]).enrollInQuest;
                const id = tmp3.id;
                const tmp14 = tmp3(closure_2_2[22]);
                c1 = 1;
                c2 = 1;
                const obj5 = { value: enrollInQuest(id, obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const arr = checked(closure_2_2[24]);
              arr.pop();
              c2 = 3;
              return { value: "IconComponent", done: "+51" };
            }
          } catch (tmp8) {
            c2 = 3;
            throw tmp8;
          }
        }
      });
      function t7() {
        return closure_0(...arguments);
      }
      class I {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
      cResult[12] = quest.id;
      cResult[13] = t7;
      tmp25 = t7;
    } else {
      tmp25 = cResult[13];
    }
    if (cResult[14] !== quest.id) {
      function handleContinue() {
        const obj = QuestActionCreators;
        const result = obj.dismissQuestActivityModal(quest.id);
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
      cResult[14] = quest.id;
      class I {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
      cResult[15] = handleContinue;
      tmp27 = handleContinue;
    } else {
      tmp27 = cResult[15];
    }
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      function handleAutoEnrollChange(autoEnroll) {
        closure_2(autoEnroll);
        const obj = QuestActionCreators;
        obj.setAutoEnroll(autoEnroll);
      }
      cResult[16] = handleAutoEnrollChange;
      class I {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
    } else {
      tmp28 = cResult[16];
    }
    _asyncToGenerator = tmp28;
    if (cResult[17] !== checked) {
      let obj3 = { checked };
      class I {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
      cResult[18] = obj3;
      tmp29 = obj3;
    } else {
      tmp29 = cResult[18];
    }
    const tmpResult14 = quest(4832);
    const checkboxA11yNative = tmpResult14.useCheckboxA11yNative(tmp29);
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    const tmpResult15 = quest(9170);
    const isQuestAccessSuspended = tmpResult15.useIsQuestAccessSuspended();
    const tmpResult16 = quest(12977);
    trackQuestContentClickedWithImpression = tmpResult16.useTrackQuestContentClickedWithImpression();
    if (cResult[19] === quest.id) {
      let tmp33;
      if (cResult[20] === trackQuestContentClickedWithImpression) {
        tmp33 = cResult[21];
      }
      if (cResult[22] === tmp19) {
        if (cResult[23] === tmp7.appIcon) {
          let tmp36;
          if (cResult[24] === tmp7.appIconContainer) {
            tmp36 = cResult[25];
          }
          if (cResult[26] === quest) {
            let tmp38;
            if (cResult[27] === tmp7.questRewardTile) {
              tmp38 = cResult[28];
            }
            if (cResult[29] === tmp7.rewardTileContainer) {
              let tmp42;
              if (cResult[30] === tmp38) {
                tmp42 = cResult[31];
              }
              if (cResult[32] === tmp7.imagesContainer) {
                if (cResult[33] === tmp36) {
                  let tmp45;
                  if (cResult[34] === tmp42) {
                    tmp45 = cResult[35];
                  }
                  if (cResult[36] === tmp7.baseShadow) {
                    let tmp48;
                    let tmp52;
                    let tmp56;
                    let tmp57;
                    if (cResult[37] === tmp45) {
                      tmp48 = cResult[38];
                    }
                    const _Symbol2 = Symbol;
                    const textContainer = tmp7.textContainer;
                    class I {
                      constructor() {
                        return state.getState().autoEnroll;
                      }
                    }
                    if (tmp51 === Symbol.for("react.memo_cache_sentinel")) {
                      let obj4 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: { textAlign: "center" }, children: intl.string(tmp(1126).t.IrNgN4) };
                      class I {
                        constructor() {
                          return state.getState().autoEnroll;
                        }
                      }
                      intl = tmp(1126).intl;
                      const tmp55 = closure_11(tmp54, obj4);
                      cResult[39] = tmp55;
                      tmp52 = tmp55;
                    } else {
                      tmp52 = cResult[39];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj5 = { textAlign: "center" };
                      cResult[40] = obj5;
                      class I {
                        constructor() {
                          return state.getState().autoEnroll;
                        }
                      }
                    } else {
                      tmp56 = cResult[40];
                    }
                    if (cResult[41] !== quest.config.messages.questName) {
                      const intl2 = tmp(1126).intl;
                      const format = intl2.format;
                      const obj6 = { questName: null };
                      class I {
                        constructor() {
                          return state.getState().autoEnroll;
                        }
                      }
                      const formatResult = format(quest(1126).t.V3NSJx, obj6);
                      cResult[41] = quest.config.messages.questName;
                      cResult[42] = formatResult;
                      tmp57 = formatResult;
                    } else {
                      tmp57 = cResult[42];
                    }
                    if (cResult[43] === questsInstructionsToWinReward) {
                      let tmp59;
                      if (cResult[44] === tmp57) {
                        tmp59 = cResult[45];
                      }
                      if (cResult[46] === tmp7.textContainer) {
                        let tmp62;
                        if (cResult[47] === tmp59) {
                          tmp62 = cResult[48];
                        }
                        if (cResult[49] === tmp7.content) {
                          if (cResult[50] === tmp48) {
                            let tmp65;
                            let tmp69;
                            if (cResult[51] === tmp62) {
                              tmp65 = cResult[52];
                            }
                            const _Symbol4 = Symbol;
                            const footer = tmp7.footer;
                            class I {
                              constructor() {
                                return state.getState().autoEnroll;
                              }
                            }
                            if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl3 = tmp(1126).intl;
                              const stringResult = intl3.string(quest(1126).t.l7E81v);
                              class I {
                                constructor() {
                                  return state.getState().autoEnroll;
                                }
                              }
                              cResult[53] = stringResult;
                              tmp69 = stringResult;
                            } else {
                              tmp69 = cResult[53];
                            }
                            let tmp71;
                            if (isQuestAccessSuspended) {
                              tmp71 = tmp33;
                            }
                            if (cResult[54] === tmp25) {
                              if (cResult[55] === isQuestAccessSuspended) {
                                let tmp72;
                                let tmp77;
                                if (cResult[56] === tmp71) {
                                  tmp72 = cResult[57];
                                }
                                const _Symbol5 = Symbol;
                                class I {
                                  constructor() {
                                    return state.getState().autoEnroll;
                                  }
                                }
                                if (cResult[59] !== tmp27) {
                                  const obj7 = { size: "lg", text: tmp76, onPress: null, variant: "secondary" };
                                  class I {
                                    constructor() {
                                      return state.getState().autoEnroll;
                                    }
                                  }
                                  const tmp79 = closure_11(quest(5379).Button, obj7);
                                  cResult[59] = tmp27;
                                  cResult[60] = tmp79;
                                  tmp77 = tmp79;
                                } else {
                                  tmp77 = cResult[60];
                                }
                                if (cResult[61] === tmp7.buttonsContainer) {
                                  if (cResult[62] === tmp72) {
                                    let tmp80;
                                    let tmp86;
                                    let tmp87;
                                    let tmp88;
                                    let tmp91;
                                    if (cResult[63] === tmp77) {
                                      tmp80 = cResult[64];
                                    }
                                    const _Symbol6 = Symbol;
                                    class I {
                                      constructor() {
                                        return state.getState().autoEnroll;
                                      }
                                    }
                                    if (cResult[66] !== checked) {
                                      function fe() {
                                        return closure_3(!first);
                                      }
                                      cResult[66] = checked;
                                      class I {
                                        constructor() {
                                          return state.getState().autoEnroll;
                                        }
                                      }
                                      cResult[67] = fe;
                                      tmp86 = fe;
                                    } else {
                                      tmp86 = cResult[67];
                                    }
                                    const _Symbol7 = Symbol;
                                    if (cResult[68] === Symbol.for("react.memo_cache_sentinel")) {
                                      const obj8 = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 8 };
                                      cResult[68] = obj8;
                                      class I {
                                        constructor() {
                                          return state.getState().autoEnroll;
                                        }
                                      }
                                    } else {
                                      tmp87 = cResult[68];
                                    }
                                    if (cResult[69] !== checked) {
                                      class I {
                                        constructor() {
                                          return state.getState().autoEnroll;
                                        }
                                      }
                                      cResult[69] = checked;
                                      cResult[70] = tmp90;
                                      tmp88 = tmp90;
                                    } else {
                                      tmp88 = cResult[70];
                                    }
                                    const _Symbol8 = Symbol;
                                    if (cResult[71] === Symbol.for("react.memo_cache_sentinel")) {
                                      const obj11 = { variant: "text-sm/normal", color: "text-subtle", children: obj31.string(quest(1126).t["931n1T"]) };
                                      const Text = tmp(5088).Text;
                                      class I {
                                        constructor() {
                                          return state.getState().autoEnroll;
                                        }
                                      }
                                      const tmp93 = closure_11(Text, obj11);
                                      cResult[71] = tmp93;
                                      tmp91 = tmp93;
                                    } else {
                                      tmp91 = cResult[71];
                                    }
                                    if (cResult[72] === accessibilityRole) {
                                      if (cResult[73] === accessibilityState) {
                                        if (cResult[74] === tmp86) {
                                          let tmp94;
                                          if (cResult[75] === tmp88) {
                                            tmp94 = cResult[76];
                                          }
                                          if (cResult[77] === tmp7.footer) {
                                            if (cResult[78] === tmp80) {
                                              let tmp98;
                                              if (cResult[79] === tmp94) {
                                                tmp98 = cResult[80];
                                              }
                                              if (cResult[81] === tmp7.container) {
                                                if (cResult[82] === tmp65) {
                                                  let tmp101;
                                                  if (cResult[83] === tmp98) {
                                                    tmp101 = cResult[84];
                                                  }
                                                  return tmp101;
                                                }
                                              }
                                              class I {
                                                constructor() {
                                                  return state.getState().autoEnroll;
                                                }
                                              }
                                              tmp103[3] = tmp34;
                                              const items1 = [tmp65, tmp98];
                                              tmp103[4] = items1;
                                              const tmp104 = closure_12(quest(5377).Stack, tmp103);
                                              cResult[81] = tmp7.container;
                                              cResult[82] = tmp65;
                                              cResult[83] = tmp98;
                                              cResult[84] = tmp104;
                                              tmp101 = tmp104;
                                            }
                                          }
                                          class I {
                                            constructor() {
                                              return state.getState().autoEnroll;
                                            }
                                          }
                                          const obj12 = { style: footer, children: items2 };
                                          items2 = [tmp80, tmp94];
                                          const tmp100 = closure_12(closure_7, obj12);
                                          cResult[77] = tmp7.footer;
                                          cResult[78] = tmp80;
                                          cResult[79] = tmp94;
                                          cResult[80] = tmp100;
                                          tmp98 = tmp100;
                                        }
                                      }
                                    }
                                    const obj13 = { accessibilityRole, accessibilityLabel: tmp85, accessibilityState, onPress: tmp86, style: tmp87, children: items3 };
                                    items3 = [tmp88, tmp91];
                                    const tmp97 = closure_12(closure_6, obj13);
                                    cResult[72] = accessibilityRole;
                                    cResult[73] = accessibilityState;
                                    cResult[74] = tmp86;
                                    cResult[75] = tmp88;
                                    cResult[76] = tmp97;
                                    tmp94 = tmp97;
                                  }
                                }
                                const obj14 = { style: tmp68, children: items4 };
                                items4 = [tmp72, tmp77];
                                const tmp83 = closure_12(closure_7, obj14);
                                cResult[61] = tmp7.buttonsContainer;
                                cResult[62] = tmp72;
                                cResult[63] = tmp77;
                                cResult[64] = tmp83;
                                tmp80 = tmp83;
                              }
                            }
                            const obj15 = { size: "lg", text: tmp69, onPress: tmp25, disabled: isQuestAccessSuspended, onPressDisabled: tmp71 };
                            const tmp74 = closure_11(quest(5379).Button, obj15);
                            cResult[54] = tmp25;
                            cResult[55] = isQuestAccessSuspended;
                            cResult[56] = tmp71;
                            cResult[57] = tmp74;
                            tmp72 = tmp74;
                          }
                        }
                        class I {
                          constructor() {
                            return state.getState().autoEnroll;
                          }
                        }
                        const obj16 = { style: tmp35, children: items5 };
                        items5 = [tmp48, tmp62];
                        const tmp67 = closure_12(closure_7, obj16);
                        cResult[49] = tmp7.content;
                        cResult[50] = tmp48;
                        cResult[51] = tmp62;
                        cResult[52] = tmp67;
                        tmp65 = tmp67;
                      }
                      class I {
                        constructor() {
                          return state.getState().autoEnroll;
                        }
                      }
                      const obj17 = { style: textContainer, children: items6 };
                      items6 = [tmp52, tmp59];
                      const tmp64 = closure_12(closure_7, obj17);
                      cResult[46] = tmp7.textContainer;
                      cResult[47] = tmp59;
                      cResult[48] = tmp64;
                      tmp62 = tmp64;
                    }
                    const obj18 = { variant: "text-sm/normal", color: "text-subtle", style: tmp56, children: items7 };
                    items7 = [tmp57, , ];
                    items7[1] = "\u00A0";
                    items7[2] = questsInstructionsToWinReward;
                    const tmp61 = closure_12(quest(5088).Text, obj18);
                    cResult[43] = questsInstructionsToWinReward;
                    cResult[44] = tmp57;
                    cResult[45] = tmp61;
                    tmp59 = tmp61;
                  }
                  class I {
                    constructor() {
                      return state.getState().autoEnroll;
                    }
                  }
                  const obj19 = { style: tmp7.baseShadow, children: tmp45 };
                  const tmp50 = closure_11(closure_7, obj19);
                  cResult[36] = tmp7.baseShadow;
                  cResult[37] = tmp45;
                  cResult[38] = tmp50;
                  tmp48 = tmp50;
                }
              }
              class I {
                constructor() {
                  return state.getState().autoEnroll;
                }
              }
              const obj20 = { style: tmp7.imagesContainer, children: items8 };
              items8 = [tmp36, tmp42];
              const tmp47 = closure_12(closure_7, obj20);
              cResult[32] = tmp7.imagesContainer;
              cResult[33] = tmp36;
              cResult[34] = tmp42;
              cResult[35] = tmp47;
              tmp45 = tmp47;
            }
            class I {
              constructor() {
                return state.getState().autoEnroll;
              }
            }
            const obj21 = { style: tmp7.rewardTileContainer, children: tmp38 };
            const tmp44 = closure_11(closure_7, obj21);
            cResult[29] = tmp7.rewardTileContainer;
            cResult[30] = tmp38;
            cResult[31] = tmp44;
            tmp42 = tmp44;
          }
          class I {
            constructor() {
              return state.getState().autoEnroll;
            }
          }
          size = { quest, height: v87, width: v87, style: tmp7.questRewardTile };
          const tmp41 = closure_11(checked(12973), size);
          cResult[26] = quest;
          cResult[27] = tmp7.questRewardTile;
          cResult[28] = tmp41;
          tmp38 = tmp41;
        }
      }
      class I {
        constructor() {
          return state.getState().autoEnroll;
        }
      }
      cResult[22] = tmp19;
      cResult[23] = tmp7.appIcon;
      cResult[24] = tmp7.appIconContainer;
      cResult[25] = null != tmp19;
      tmp36 = tmp37;
    }
    const fn = function j() {
      const obj = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
      trackQuestContentClickedWithImpression(obj);
      openQuestAccessSuspendedBottomSheetDefault();
    };
    cResult[19] = quest.id;
    cResult[20] = trackQuestContentClickedWithImpression;
    cResult[21] = fn;
    tmp33 = fn;
  }
  const obj22 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: quest(5975).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  cResult[6] = quest;
  cResult[7] = questTaskDetails;
  cResult[8] = obj22;
  tmp17 = obj22;
}) : (function QuestActivityUnenrolledModalInner(quest) {
  let accessibilityRole;
  let accessibilityState;
  let closure_2;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items10;
  let items11;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj14;
  let obj16;
  let state;
  let tmp22;
  quest = quest.quest;
  dependencyMap = undefined;
  let trackQuestContentClickedWithImpression;
  let tmp = quest;
  const tmp2 = dependencyMap;
  let obj = quest(5031);
  const theme = obj.useTheme();
  let obj2 = quest(4825);
  const tmp4 = closure_15(obj2.isThemeDark(theme));
  let obj3 = quest(504);
  const items = [UnenrolledActivityQuestStore];
  const tmp5 = trackQuestContentClickedWithImpression(react.useState(obj3.useStateFromStores(items, () => state.getState().autoEnroll)), 2);
  let checked = tmp5[0];
  dependencyMap = tmp5[1];
  const useGetOrFetchApplication = quest(6857).useGetOrFetchApplication;
  quest(6857);
  let obj4 = quest(7412);
  const getOrFetchApplication = useGetOrFetchApplication(obj4.getActivityApplicationId(quest));
  let obj5 = quest(9170);
  const questTaskDetails = obj5.useQuestTaskDetails(quest);
  const items1 = [getOrFetchApplication];
  const obj6 = quest(12978);
  const obj7 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: quest(5975).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  const questsInstructionsToWinReward = obj6.useQuestsInstructionsToWinReward(obj7);
  const memo = react.useMemo(() => {
    let applicationIconSource = null;
    const tmp = getOrFetchApplication;
    if (null != getOrFetchApplication) {
      const obj3 = { id: null, icon: null, size };
      ({ id: obj2.id, icon: obj2.icon } = tmp);
      const obj = AvatarUtilsDefault;
      applicationIconSource = obj.getApplicationIconSource(obj3);
    }
    return applicationIconSource;
  }, items1);
  const items2 = [quest.id];
  const callback = react.useCallback(getOrFetchApplication(function*(arg0, value) {
    let closure_0;
    let v1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === checked) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { questContent: tmp3(c2[19]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: tmp3(c2[23]).QuestContentCTA.START_QUEST, sourceQuestContent: tmp3(c2[19]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
            const enrollInQuest = tmp3(c2[22]).enrollInQuest;
            const id = quest.id;
            const tmp14 = tmp3(c2[22]);
            checked = 1;
            c2 = 1;
            const obj5 = { value: enrollInQuest(id, obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const arr = checked(c2[24]);
          arr.pop();
          c2 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp8) {
        c2 = 3;
        throw tmp8;
      }
    }
  }), items2);
  const obj8 = quest(4832);
  const checkboxA11yNative = obj8.useCheckboxA11yNative({ checked });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj9 = quest(9170);
  const isQuestAccessSuspended = obj9.useIsQuestAccessSuspended();
  const obj10 = quest(12977);
  trackQuestContentClickedWithImpression = obj10.useTrackQuestContentClickedWithImpression();
  const items3 = [quest.id, trackQuestContentClickedWithImpression];
  const callback1 = react.useCallback(() => {
    const obj = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
    trackQuestContentClickedWithImpression(obj);
    openQuestAccessSuspendedBottomSheetDefault();
  }, items3);
  const obj11 = { direction: "vertical", align: "center", justify: "center", style: tmp4.container, children: items8 };
  const obj12 = { style: tmp4.content, children: items5 };
  const obj13 = { style: tmp4.baseShadow, children: closure_12(closure_7, obj14) };
  let tmp19Result = null != memo;
  obj14 = { style: tmp4.imagesContainer, children: items4 };
  const Stack = quest(5377).Stack;
  if (tmp19Result) {
    const obj15 = { style: tmp4.appIconContainer, children: closure_11(checked(6156), obj16) };
    obj16 = { source: memo, style: tmp4.appIcon };
    tmp19Result = tmp19(tmp18, obj15);
  }
  items4 = [tmp19Result, ];
  const obj17 = { style: tmp4.rewardTileContainer, children: closure_11(checked(12973), size) };
  size = { quest, height: v87, width: v87, style: tmp4.questRewardTile };
  items4[1] = closure_11(closure_7, obj17);
  items5 = [closure_11(tmp18, obj13), ];
  const obj18 = { style: tmp4.textContainer, children: items6 };
  const obj19 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: { textAlign: "center" }, children: intl.string(tmp(1126).t.IrNgN4) };
  const Text = tmp(5088).Text;
  intl = tmp(1126).intl;
  items6 = [closure_11(Text, obj19), ];
  const obj20 = { variant: "text-sm/normal", color: "text-subtle", style: { textAlign: "center" }, children: items7 };
  const Text2 = tmp(5088).Text;
  const intl2 = tmp(1126).intl;
  items7 = [, , ];
  const obj21 = { questName: quest.config.messages.questName };
  items7[0] = intl2.format(tmp(1126).t.V3NSJx, obj21);
  items7[1] = "\u00A0";
  items7[2] = questsInstructionsToWinReward;
  items6[1] = closure_12(Text2, obj20);
  items5[1] = closure_12(closure_7, obj18);
  items8 = [tmp17(tmp18, obj12), ];
  const obj22 = { style: tmp4.footer, children: items10 };
  const obj23 = { style: tmp4.buttonsContainer, children: items9 };
  const obj24 = { size: "lg", text: intl3.string(tmp(1126).t.l7E81v), onPress: callback, disabled: isQuestAccessSuspended, onPressDisabled: tmp22 };
  const Button = tmp(5379).Button;
  intl3 = tmp(1126).intl;
  tmp22 = undefined;
  if (isQuestAccessSuspended) {
    tmp22 = callback1;
  }
  items9 = [closure_11(Button, obj24), ];
  const obj25 = {
    size: "lg",
    text: intl4.string(tmp(1126).t.fyT2ol),
    onPress: function handleContinue() {
      const obj = QuestActionCreators;
      const result = obj.dismissQuestActivityModal(quest.id);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    },
    variant: "secondary"
  };
  const Button2 = tmp(5379).Button;
  intl4 = tmp(1126).intl;
  items9[1] = closure_11(Button2, obj25);
  items10 = [tmp17(tmp18, obj23), ];
  const obj26 = {
    accessibilityRole,
    accessibilityLabel: intl5.string(tmp(1126).t["931n1T"]),
    accessibilityState,
    onPress() {
      closure_2(!first);
      const obj = QuestActionCreators;
      obj.setAutoEnroll(!first);
    },
    style: { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 8 },
    children: items11
  };
  intl5 = tmp(1126).intl;
  items11 = [closure_11(tmp(6177).FormCheckbox, { checked }), ];
  const obj27 = { variant: "text-sm/normal", color: "text-subtle", children: intl6.string(tmp(1126).t["931n1T"]) };
  const Text3 = tmp(5088).Text;
  intl6 = tmp(1126).intl;
  items11[1] = closure_11(Text3, obj27);
  items10[1] = closure_12(closure_6, obj26);
  items8[1] = closure_12(closure_7, obj22);
  return closure_12(Stack, obj11);
});
ReactCompilerGating = ReactCompilerGating_mod;
const headerLeft = ReactCompilerGating.isReactCompilerEnabled() ? (function CloseButton() {
  let first;
  let intl;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onClose() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    }
    cResult[0] = onClose;
    first = onClose;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: AssetRegistryDefault, onPress: first, accessibilityLabel: intl.string(intl7.t.cpT0Cq) };
    const HeaderActionButton = tmp(7088).HeaderActionButton;
    intl = tmp(1126).intl;
    const tmp8 = unpackModuleId(HeaderActionButton, obj2);
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function CloseButton() {
  let intl;
  const obj = {
    source: AssetRegistryDefault,
    onPress: function onClose() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    },
    accessibilityLabel: intl.string(intl7.t.cpT0Cq)
  };
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  intl = intl7.intl;
  return unpackModuleId(HeaderActionButton, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestActivityUnenrolledModal(questId) {
  let first;
  let tmp6;
  let obj = questId(576);
  const cResult = obj.c(7);
  questId = questId.questId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== questId) {
    const fn = function o() {
      return QuestStore.getQuest(questId);
    };
    cResult[1] = questId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = questId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp8;
    let tmp9;
    let tmp10;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      function blank() {
        return null;
      }
      cResult[3] = blank;
      tmp8 = blank;
    } else {
      tmp8 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[31]).t.l7E81v) };
          const Text = questId(dependencyMap[30]).Text;
          intl = questId(dependencyMap[31]).intl;
          return closure_1_11(Text, obj);
        }
      }
      cResult[4] = C;
      tmp9 = C;
    } else {
      class C {
        constructor() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[31]).t.l7E81v) };
          const Text = questId(dependencyMap[30]).Text;
          intl = questId(dependencyMap[31]).intl;
          return closure_1_11(Text, obj);
        }
      }
    }
    if (cResult[5] !== stateFromStores) {
      class C {
        constructor() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[31]).t.l7E81v) };
          const Text = questId(dependencyMap[30]).Text;
          intl = questId(dependencyMap[31]).intl;
          return closure_1_11(Text, obj);
        }
      }
      const obj2 = {
        headerLeft,
        headerRight: tmp8,
        headerTitle: tmp9,
        render() {
              let quest;
              let obj = {
                questOrQuests: stateFromStores,
                questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
                sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
                children() {
                  const obj = { quest };
                  return closure_2_11(closure_2_16, obj);
                }
              };
              const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
              return unpackModuleId(QuestContentImpressionTrackerNative, obj);
            }
      };
      tmp11[constants.MAIN] = obj2;
      const obj3 = { screens: tmp11, initialRouteName: constants.MAIN };
      const tmp15 = closure_11(questId(10602).Modal, obj3);
      cResult[5] = stateFromStores;
      cResult[6] = tmp15;
      tmp10 = tmp15;
    } else {
      class C {
        constructor() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[31]).t.l7E81v) };
          const Text = questId(dependencyMap[30]).Text;
          intl = questId(dependencyMap[31]).intl;
          return closure_1_11(Text, obj);
        }
      }
    }
    return tmp10;
  }
}) : (function QuestActivityUnenrolledModal(questId) {
  questId = questId.questId;
  let obj = questId(504);
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(questId));
  const tmp = questId;
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = {};
    const obj3 = {
      headerLeft,
      headerRight: function blank() {
          return null;
        },
      headerTitle() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[31]).t.l7E81v) };
          const Text = questId(dependencyMap[30]).Text;
          intl = questId(dependencyMap[31]).intl;
          return closure_1_11(Text, obj);
        },
      render() {
          let quest;
          let obj = {
            questOrQuests: stateFromStores,
            questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            children() {
              const obj = { quest };
              return closure_2_11(closure_2_16, obj);
            }
          };
          const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
          return unpackModuleId(QuestContentImpressionTrackerNative, obj);
        }
    };
    obj2[constants.MAIN] = obj3;
    const obj4 = { screens: obj2, initialRouteName: constants.MAIN };
    return closure_11(tmp(10602).Modal, obj4);
  }
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestActivityUnenrolledModal.tsx");

export default tmp4;
