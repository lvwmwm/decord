// Module ID: 17836
// Function ID: 17837
// Name: useDisplayNameStylesHandleApply
// Dependencies: [5, 32, 19, 1385, 1072, 5268, 1393, 16961, 5271, 7734, 16962, 5278, 9332, 9331, 1252, 1395, 1396, 2]
// Exports: useDisplayNameStylesHandleApply

// Module 17836 (useDisplayNameStylesHandleApply)
import Constants from "Constants" /* 1072 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5268 */;
import size from "module_2" /* 2 */;

let c3, c4, c5, closure_0, colors, displayNameStyles;

let c9;
let metroImportAll;
const AnalyticEvents = Constants.AnalyticEvents;
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: metroImportAll, HexagonCampaignPerk: c9 } = HexagonCampaignConstants);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const DisplayNameStylesEntryPoints = { TRY_THIS_STYLE: "try_this_style", PROFILE_EDITOR: "profile_editor" };
export function useDisplayNameStylesHandleApply(hasChanges) {
  hasChanges = hasChanges.hasChanges;
  const entryPoint = hasChanges.entryPoint;
  let selectedFontId = hasChanges.selectedFontId;
  const selectedEffectId = hasChanges.selectedEffectId;
  const selectedColors = hasChanges.selectedColors;
  const defaultColor = hasChanges.defaultColor;
  const guildId = hasChanges.guildId;
  const isTryItOut = hasChanges.isTryItOut;
  const onClose = hasChanges.onClose;
  const onEnrollmentError = hasChanges.onEnrollmentError;
  let flag = hasChanges.shouldSaveWithoutPendingChanges;
  if (flag === undefined) {
    flag = false;
  }
  const onSaveError = hasChanges.onSaveError;
  let closure_12 = defaultColor.useRef(false);
  const tmp = selectedColors(defaultColor.useState(false), 2);
  let closure_13 = tmp[1];
  let items = [hasChanges, entryPoint, selectedFontId, selectedEffectId, selectedColors, defaultColor, onClose, onEnrollmentError, guildId, isTryItOut, flag, onSaveError];
  let obj = {
    handleApply: defaultColor.useCallback(selectedEffectId(function*(arg0, value) {
      let c2;
      let currentUser;
      let tmp19Result2;
      if (c4 === 2) {
        c4 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        flag = true;
        const flag2 = false;
        if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let closure_1;
            let closure_2;
            let apply;
            let obj;
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                let c0;
                closure_1 = undefined;
                closure_2 = undefined;
                apply = function apply() {
                  return closure_1_4(...arguments);
                };
                obj = function _apply() {
                  let constants2;
                  obj = apply(function*(arg0, value) {
                    let items;
                    if (c5 === 2) {
                      c5 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        let entry_point;
                        let trackHexagonCampaignPerkAction;
                        c5 = 2;
                        if (0 === colors) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            closure_0 = undefined;
                            entry_point = undefined;
                            const tmp84 = closure_2_1;
                            if (tmp84) {
                              const obj5 = displayNameStyles(closure_2_2[7]);
                              const result = obj5.saveHexagonCampaignPreviousDisplayNameStyles();
                            }
                            const tmp32 = closure_1_10;
                            if (tmp32) {
                              closure_1_12.current = true;
                              let tmp64 = closure_2_1;
                              if (tmp64) {
                                const hasHexagonCampaignDisplayNameFont = displayNameStyles(closure_2_2[8]).hasHexagonCampaignDisplayNameFont;
                                const tmp67 = displayNameStyles(closure_2_2[8]);
                                currentUser = currentUser.getCurrentUser();
                                displayNameStyles = undefined;
                                if (currentUser != null) {
                                  displayNameStyles = currentUser.displayNameStyles;
                                }
                                tmp64 = !hasHexagonCampaignDisplayNameFont(displayNameStyles);
                              }
                              closure_0 = tmp64;
                              c3 = 2;
                              const obj4 = { displayNameStyles };
                              const obj11 = displayNameStyles(closure_2_2[9]);
                              trackHexagonCampaignPerkAction = obj11.saveProfileAndAccountChanges(obj4);
                              colors = 3;
                              c5 = 1;
                              const obj6 = { value: trackHexagonCampaignPerkAction, done: false };
                              return obj6;
                            } else if (closure_1_7) {
                              const tmp34Result = displayNameStyles(closure_2_2[12]);
                              const result1 = tmp34Result.setTryItOutDisplayNameStyles(displayNameStyles);
                            } else {
                              const obj7 = { guildId, displayNameStyles };
                              const tmp34Result2 = displayNameStyles(closure_2_2[13]);
                              tmp34Result2.setPendingChanges(obj7);
                            }
                          }
                        } else if (1 === colors) {
                          c3 = 0;
                          trackHexagonCampaignPerkAction = closure_1_12;
                          closure_1_12.current = false;
                          throw closure_2;
                        } else if (2 === colors) {
                          c3 = 1;
                          trackHexagonCampaignPerkAction = closure_1_11;
                          if (closure_1_11 != null) {
                            const result2 = trackHexagonCampaignPerkAction();
                          }
                          c3 = 0;
                          trackHexagonCampaignPerkAction = closure_1_12;
                          closure_1_12.current = false;
                          c5 = 3;
                          const obj8 = { value: undefined, done: true };
                          return obj8;
                        } else if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 0;
                          closure_1_12.current = false;
                          c5 = 3;
                          const obj9 = { value, done: true };
                          return obj9;
                        } else {
                          entry_point = value;
                          trackHexagonCampaignPerkAction = entry_point;
                          let ok;
                          if (entry_point != null) {
                            ok = trackHexagonCampaignPerkAction.ok;
                          }
                          if (true !== ok) {
                            trackHexagonCampaignPerkAction = closure_1_11;
                            if (closure_1_11 != null) {
                              const result3 = trackHexagonCampaignPerkAction();
                            }
                            c3 = 0;
                            trackHexagonCampaignPerkAction = closure_1_12;
                            closure_1_12.current = false;
                            c5 = 3;
                            const obj12 = { value: undefined, done: true };
                            return obj12;
                          } else {
                            const tmp83 = closure_0;
                            if (tmp83) {
                              trackHexagonCampaignPerkAction = displayNameStyles(closure_2_2[10]).trackHexagonCampaignPerkAction;
                              obj = { perks: items, content: displayNameStyles(closure_2_2[11]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, contentSurface: displayNameStyles(closure_2_2[10]).HexagonCampaignContentSurface.USER_PROFILE };
                              items = [constants2.DISPLAY_NAME_STYLE];
                              const tmp9 = displayNameStyles(closure_2_2[10]);
                              const result4 = trackHexagonCampaignPerkAction(obj);
                            }
                            c3 = 0;
                            closure_1_12.current = false;
                          }
                        }
                        const obj13 = { font_name: displayNameStyles(closure_2_2[15]).DisplayNameFont[closure_2], effect_name: displayNameStyles(closure_2_2[16]).DisplayNameEffect[c3], colors, entry_point };
                        const track = closure_2_1(closure_2_2[14]).track;
                        const DISPLAY_NAME_STYLES_APPLIED = constants.DISPLAY_NAME_STYLES_APPLIED;
                        const tmp44 = closure_2_1(closure_2_2[14]);
                        track(DISPLAY_NAME_STYLES_APPLIED, obj13);
                        const tmp55 = closure_129_1;
                        if (tmp55) {
                          const obj10 = displayNameStyles(closure_2_2[7]);
                          const result5 = obj10.markHexagonCampaignPerkApplied(constants2.DISPLAY_NAME_STYLE);
                        }
                        if (closure_1_8 != null) {
                          closure_1_8();
                        }
                        c5 = 3;
                        return { value: "HermesInternal", done: null };
                      } catch (tmp74) {
                        closure_2 = tmp74;
                        if (0 === c3) {
                          c5 = 3;
                          throw tmp74;
                        } else if (1 === tmp76) {
                          colors = 1;
                        } else {
                          colors = 2;
                        }
                      }
                    }
                  });
                  return obj(...arguments);
                };
                const tmp41 = hasChanges;
                if (tmp41) {
                  if (!ref.current) {
                    const tmp20 = selectedFontId;
                    let obj5 = tmp2(selectedFontId[6]);
                    let obj4 = { fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors };
                    let result = obj5.normalizeDisplayNameStylesForApply(obj4, defaultColor);
                    c0 = result;
                    let tmp27 = true !== isTryItOut;
                    if (tmp27) {
                      tmp27 = result.fontId === onClose;
                    }
                    closure_1 = tmp27;
                    if (closure_1) {
                      const tmp30 = constants;
                      const tmp19Result = tmp2(tmp20[8]);
                      if (!tmp19Result.isEnrolledInHexagonCampaign(currentUser.getCurrentUser(), constants.DISPLAY_NAME_STYLE)) {
                        ref.current = true;
                        let tmp32 = closure_13;
                        const tmp33 = closure_13(true);
                        closure_2 = false;
                        selectedFontId = 1;
                        c3 = 3;
                        c4 = 1;
                        let obj6 = { value: tmp19Result2.ensureHexagonCampaignEnrollment(tmp30.DISPLAY_NAME_STYLE), done: false };
                        tmp19Result2 = tmp2(tmp20[7]);
                        return obj6;
                      }
                    }
                    c3 = 2;
                    c4 = 1;
                    let obj7 = { value: apply(), done: false };
                    return obj7;
                  }
                }
              }
            } else if (1 === c3) {
              selectedFontId = 0;
              closure_2 = false;
              let tmp9 = closure_1;
              closure_129_12.current = false;
              const tmp12 = closure_129_13(false);
              const tmp13 = closure_2;
              if (tmp13) {
                c3 = 4;
                c4 = 1;
                let obj8 = { value: apply(), done: false };
                return obj8;
              } else if (closure_129_9 != null) {
                closure_129_9();
              }
            } else if (2 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj9 = { value, done: true };
                return obj9;
              }
            } else if (3 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                selectedFontId = 0;
                c4 = 3;
                let obj10 = { value, done: true };
                return obj10;
              } else {
                closure_2 = value;
                selectedFontId = 0;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp34) {
            if (0 === selectedFontId) {
              c4 = 3;
              throw tmp34;
            } else {
              c3 = 1;
            }
          }
        }
      }
    }), items),
    isApplying: tmp[0]
  };
  return obj;
}
