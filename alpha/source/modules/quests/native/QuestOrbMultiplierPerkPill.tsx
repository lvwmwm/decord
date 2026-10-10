// Module ID: 15419
// Function ID: 15420
// Name: QuestOrbMultiplierPerkPill
// Dependencies: [19, 17, 1085, 21, 5092, 587, 558, 576, 5031, 4825, 4818, 4967, 9170, 9163, 15420, 1126, 9035, 5088, 5391, 6184, 2]

// Module 15419 (QuestOrbMultiplierPerkPill)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useToken from "useToken" /* 4818 */;
import themes from "themes" /* 4825 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import useTheme from "useTheme" /* 5031 */;
import Text_Text from "Text/Text" /* 5088 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 9163 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9170 */;
import openQuestOrbMultiplierPerkInfoActionSheetDefault from "openQuestOrbMultiplierPerkInfoActionSheet" /* 15420 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: closure_4, StyleSheet } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };
let createStyles = createStyles_mod;
let obj = { fullGradientContainer: obj2, fullGradient: obj3, fullGradientContent: obj4 };
obj2 = { borderRadius: nativeDefault.radii.round, overflow: "hidden", minHeight: 19, backgroundColor: "transparent" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.round };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: 4, minHeight: 19 };
let closure_11 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestOrbMultiplierPerkPill(onPress) {
  let items;
  let items2;
  let questOrbRewardMultiplier;
  let tmp11;
  let tmp13;
  const tmp = onPress;
  const obj = onPress(questOrbRewardMultiplier[7]);
  const cResult = obj.c(43);
  onPress = onPress.onPress;
  const orbMultiplierEligibility = onPress.orbMultiplierEligibility;
  const questId = onPress.questId;
  const tmp4 = closure_11();
  const obj2 = onPress(questOrbRewardMultiplier[8]);
  const theme = obj2.useTheme();
  const obj3 = onPress(questOrbRewardMultiplier[9]);
  const isThemeDarkResult = obj3.isThemeDark(theme);
  const obj4 = onPress(questOrbRewardMultiplier[10]);
  const token = obj4.useToken(orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.EXPRESSIVE_GRADIENT_PINK_START, ThemeTypes.DARK);
  const obj5 = onPress(questOrbRewardMultiplier[10]);
  const token1 = obj5.useToken(orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, ThemeTypes.DARK);
  const obj6 = onPress(questOrbRewardMultiplier[10]);
  const token2 = obj6.useToken(orbMultiplierEligibility(questOrbRewardMultiplier[5]).colors.BACKGROUND_BASE_LOWEST, ThemeTypes.DARK);
  if (cResult[0] !== token) {
    const tmpResult = tmp(questOrbRewardMultiplier[11]);
    const hexOpacityToRgbaResult = tmpResult.hexOpacityToRgba(token, 1);
    cResult[0] = token;
    cResult[1] = hexOpacityToRgbaResult;
    tmp11 = hexOpacityToRgbaResult;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== token1) {
    const tmpResult5 = tmp(questOrbRewardMultiplier[11]);
    const hexOpacityToRgbaResult1 = tmpResult5.hexOpacityToRgba(token1, 0.5);
    cResult[2] = token1;
    cResult[3] = hexOpacityToRgbaResult1;
    tmp13 = hexOpacityToRgbaResult1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === tmp11) {
    let tmp15;
    let tmp18;
    if (cResult[5] === tmp13) {
      tmp15 = cResult[6];
    }
    const tmpResult6 = tmp(questOrbRewardMultiplier[10]);
    const token3 = tmpResult6.useToken(tmp7(tmp2[5]).colors.BACKGROUND_BRAND);
    const tmpResult7 = tmp(questOrbRewardMultiplier[12]);
    questOrbRewardMultiplier = tmpResult7.useQuestOrbRewardMultiplier(questId);
    if (cResult[7] !== orbMultiplierEligibility) {
      const tmpResult8 = tmp(questOrbRewardMultiplier[13]);
      const result = tmpResult8.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
      cResult[7] = orbMultiplierEligibility;
      cResult[8] = result;
      tmp18 = result;
    } else {
      tmp18 = cResult[8];
    }
    const tmp20 = orbMultiplierEligibility === tmp(questOrbRewardMultiplier[13]).QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
    let tmp21 = token3;
    if (!tmp20) {
      let str = "transparent";
      if (!isThemeDarkResult) {
        str = token2;
      }
      tmp21 = str;
    }
    if (null == questOrbRewardMultiplier) {
      return null;
    } else {
      if (cResult[9] === questOrbRewardMultiplier) {
        if (cResult[10] === onPress) {
          let tmp23;
          let formatToPlainStringResult;
          if (cResult[11] === orbMultiplierEligibility) {
            tmp23 = cResult[12];
          }
          if (cResult[13] === questOrbRewardMultiplier) {
            let tmp24;
            let tmp26;
            let tmp29;
            if (cResult[14] === tmp18) {
              tmp24 = cResult[15];
            }
            if (cResult[16] !== tmp20) {
              const tmp27 = !tmp20 && closure_6(tmp(questOrbRewardMultiplier[16]).NitroWheelIcon, { size: "xs", color: "white" });
              cResult[16] = tmp20;
              cResult[17] = tmp27;
              tmp26 = tmp27;
            } else {
              tmp26 = cResult[17];
            }
            if (cResult[18] !== tmp24) {
              const obj7 = { variant: "text-xs/semibold", color: "text-overlay-light", children: tmp24 };
              const tmp31 = closure_6(tmp(questOrbRewardMultiplier[17]).Text, obj7);
              cResult[18] = tmp24;
              cResult[19] = tmp31;
              tmp29 = tmp31;
            } else {
              tmp29 = cResult[19];
            }
            if (cResult[20] === tmp26) {
              let tmp32;
              let tmp36;
              if (cResult[21] === tmp29) {
                tmp32 = cResult[22];
              }
              if (cResult[23] !== tmp21) {
                const obj8 = { backgroundColor: tmp21 };
                cResult[23] = tmp21;
                cResult[24] = obj8;
                tmp36 = obj8;
              } else {
                tmp36 = cResult[24];
              }
              if (cResult[25] === tmp4.fullGradientContainer) {
                let tmp37;
                if (cResult[26] === tmp36) {
                  tmp37 = cResult[27];
                }
                if (cResult[28] === tmp15) {
                  if (cResult[29] === tmp20) {
                    let tmp38;
                    if (cResult[30] === tmp4.fullGradient) {
                      tmp38 = cResult[31];
                    }
                    if (cResult[32] === tmp32) {
                      let tmp43;
                      if (cResult[33] === tmp4.fullGradientContent) {
                        tmp43 = cResult[34];
                      }
                      if (cResult[35] === tmp37) {
                        if (cResult[36] === tmp38) {
                          let tmp47;
                          if (cResult[37] === tmp43) {
                            tmp47 = cResult[38];
                          }
                          if (cResult[39] === tmp23) {
                            if (cResult[40] === tmp47) {
                              let tmp51;
                              if (cResult[41] === tmp24) {
                                tmp51 = cResult[42];
                              }
                              return tmp51;
                            }
                          }
                          const obj9 = { onPress: tmp23, activeOpacity: 0.8, accessibilityRole: "button", accessibilityLabel: tmp24, children: tmp47 };
                          const tmp53 = closure_6(tmp(questOrbRewardMultiplier[19]).PressableOpacity, obj9);
                          cResult[39] = tmp23;
                          cResult[40] = tmp47;
                          cResult[41] = tmp24;
                          cResult[42] = tmp53;
                          tmp51 = tmp53;
                        }
                      }
                      const obj10 = { style: tmp37, children: items };
                      items = [tmp38, tmp43];
                      const tmp50 = closure_8(closure_4, obj10);
                      cResult[35] = tmp37;
                      cResult[36] = tmp38;
                      cResult[37] = tmp43;
                      cResult[38] = tmp50;
                      tmp47 = tmp50;
                    }
                    const obj11 = { style: tmp4.fullGradientContent, children: tmp32 };
                    const tmp46 = closure_6(closure_4, obj11);
                    cResult[32] = tmp32;
                    cResult[33] = tmp4.fullGradientContent;
                    cResult[34] = tmp46;
                    tmp43 = tmp46;
                  }
                }
                let tmp39 = !tmp20;
                if (tmp39) {
                  const obj12 = { style: tmp4.fullGradient, colors: tmp15, start, end };
                  tmp39 = closure_6(tmp7(tmp2[18]), obj12);
                }
                cResult[28] = tmp15;
                cResult[29] = tmp20;
                cResult[30] = tmp4.fullGradient;
                cResult[31] = tmp39;
                tmp38 = tmp39;
              }
              const items1 = [tmp4.fullGradientContainer, tmp36];
              cResult[25] = tmp4.fullGradientContainer;
              cResult[26] = tmp36;
              cResult[27] = items1;
              tmp37 = items1;
            }
            const obj13 = { children: items2 };
            items2 = [tmp26, tmp29];
            const tmp35 = closure_8(closure_7, obj13);
            cResult[20] = tmp26;
            cResult[21] = tmp29;
            cResult[22] = tmp35;
            tmp32 = tmp35;
          }
          const intl = tmp(tmp2[15]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const t = tmp(tmp2[15]).t;
          if (tmp18) {
            const obj14 = { bonusOrbMultiplier: questOrbRewardMultiplier };
            formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj14);
          } else {
            const obj15 = { bonusOrbMultiplier: questOrbRewardMultiplier };
            formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj15);
          }
          cResult[13] = questOrbRewardMultiplier;
          cResult[14] = tmp18;
          cResult[15] = formatToPlainStringResult;
          tmp24 = formatToPlainStringResult;
        }
      }
      function handlePress() {
        if (null != questOrbRewardMultiplier) {
          openQuestOrbMultiplierPerkInfoActionSheetDefault(tmp, orbMultiplierEligibility);
          if (onPress != null) {
            onPress();
          }
        }
      }
      cResult[9] = questOrbRewardMultiplier;
      cResult[10] = onPress;
      cResult[11] = orbMultiplierEligibility;
      cResult[12] = handlePress;
      tmp23 = handlePress;
    }
  }
  const items3 = [tmp11, tmp13];
  cResult[4] = tmp11;
  cResult[5] = tmp13;
  cResult[6] = items3;
  tmp15 = items3;
}) : (function QuestOrbMultiplierPerkPill(questId) {
  let c2;
  let items2;
  let items3;
  let items4;
  let obj16;
  let orbMultiplierEligibility;
  ({ onPress: require, orbMultiplierEligibility } = questId);
  let questOrbRewardMultiplier;
  questId = questId.questId;
  let tmp = closure_11();
  const obj = useTheme;
  const theme = obj.useTheme();
  const obj2 = themes;
  const isThemeDarkResult = obj2.isThemeDark(theme);
  dependencyMap = isThemeDarkResult;
  const obj3 = useToken;
  const token = obj3.useToken(orbMultiplierEligibility(587).colors.EXPRESSIVE_GRADIENT_PINK_START, questOrbRewardMultiplier.DARK);
  const obj4 = useToken;
  const token1 = obj4.useToken(orbMultiplierEligibility(587).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, questOrbRewardMultiplier.DARK);
  const obj5 = useToken;
  const token2 = obj5.useToken(orbMultiplierEligibility(587).colors.BACKGROUND_BASE_LOWEST, questOrbRewardMultiplier.DARK);
  const items = [, ];
  const obj6 = ColorUtils;
  items[0] = obj6.hexOpacityToRgba(token, 1);
  const obj7 = ColorUtils;
  items[1] = obj7.hexOpacityToRgba(token1, 0.5);
  const obj8 = useToken;
  const token3 = obj8.useToken(orbMultiplierEligibility(587).colors.BACKGROUND_BRAND);
  const obj9 = hooks_QuestHooks;
  questOrbRewardMultiplier = obj9.useQuestOrbRewardMultiplier(questId);
  const obj10 = QuestOrbMultiplierUtils;
  const result = obj10.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const tmp13 = orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS;
  let closure_6 = tmp13;
  const items1 = [tmp13, token2, token3, isThemeDarkResult];
  const tmp6 = orbMultiplierEligibility;
  if (null == questOrbRewardMultiplier) {
    return null;
  } else {
    let formatToPlainStringResult;
    const intl = tmp2(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = tmp2(1126).t;
    if (result) {
      const obj11 = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj11);
    } else {
      const obj12 = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj12);
    }
    let tmp21Result = !tmp13;
    let tmp19 = tmp21Result;
    const tmp17 = closure_7;
    if (!tmp13) {
      tmp19 = closure_6(tmp2(9035).NitroWheelIcon, { size: "xs", color: "white" });
    }
    const obj13 = { children: items2 };
    items2 = [tmp19, ];
    const obj14 = { variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
    items2[1] = closure_6(Text_Text.Text, obj14);
    const obj15 = {
      onPress: function handlePress() {
          if (null != questOrbRewardMultiplier) {
            openQuestOrbMultiplierPerkInfoActionSheetDefault(tmp, orbMultiplierEligibility);
            if (require != null) {
              require();
            }
          }
        },
      activeOpacity: 0.8,
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainStringResult,
      children: closure_8(token3, obj16)
    };
    obj16 = { style: items3, children: items4 };
    items3 = [tmp.fullGradientContainer, ];
    const obj17 = { backgroundColor: tmp14 };
    items3[1] = obj17;
    const tmp16Result = closure_8(tmp17, obj13);
    const PressableOpacity = tmp2(6184).PressableOpacity;
    if (!tmp13) {
      const obj18 = { style: tmp.fullGradient, colors: items, start, end };
      tmp21Result = tmp21(tmp6(5391), obj18);
    }
    items4 = [tmp21Result, ];
    const obj19 = { style: tmp.fullGradientContent, children: tmp16Result };
    items4[1] = closure_6(token3, obj19);
    return closure_6(PressableOpacity, obj15);
  }
});
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export const QuestOrbMultiplierPerkPill = tmp6;
