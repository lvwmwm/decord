// Module ID: 16728
// Function ID: 16729
// Name: useDisplayNameStylesHandleApply
// Dependencies: [5, 32, 19, 1392, 1087, 5028, 1409, 15890, 7110, 8688, 8685, 1267, 1412, 1411, 5030, 2]
// Exports: useDisplayNameStylesHandleApply

// Module 16728 (useDisplayNameStylesHandleApply)
import Constants from "Constants" /* 1087 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5028 */;
import size from "module_2" /* 2 */;

let c3, c4, c5, colors;

let c9;
let metroImportAll;
const AnalyticEvents = Constants.AnalyticEvents;
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: metroImportAll, HexagonCampaignPerk: c9 } = HexagonCampaignConstants);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const DisplayNameStylesEntryPoints = { TRY_THIS_STYLE: "try_this_style", PROFILE_EDITOR: "profile_editor" };
export const useDisplayNameStylesHandleApply = function useDisplayNameStylesHandleApply(hasChanges) {
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
  const items = [hasChanges, entryPoint, selectedFontId, selectedEffectId, selectedColors, defaultColor, onClose, onEnrollmentError, guildId, isTryItOut, flag, onSaveError];
  let obj = {
    handleApply: defaultColor.useCallback(selectedEffectId(function*(arg0, value) {
      let c2;
      let closure_0;
      let tmp19Result2;
      if (c4 === 2) {
        c4 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        let tmp37 = arg0;
        flag = true;
        const flag2 = false;
        if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
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
                let closure_1;
                closure_2 = undefined;
                apply = function apply() {
                  return closure_1_4(...arguments);
                };
                obj = function _apply() {
                  let constants2;
                  let displayNameStyles;
                  obj = apply(function*(arg0, value) {
                    let obj10;
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
                        return { value: "IconComponent", done: null };
                      }
                    } else {
                      try {
                        let entry_point;
                        let ok;
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
                            entry_point = tmp;
                            ok = undefined;
                            const tmp68 = closure_2_1;
                            if (tmp68) {
                              const obj4 = displayNameStyles(closure_2_2[7]);
                              const result = obj4.saveHexagonCampaignPreviousDisplayNameStyles();
                            }
                            const tmp25 = closure_1_10;
                            if (tmp25) {
                              closure_1_12.current = true;
                              c3 = 2;
                              const obj5 = { displayNameStyles };
                              colors = 3;
                              c5 = 1;
                              const obj6 = { value: obj10.saveProfileAndAccountChanges(obj5), done: false };
                              obj10 = displayNameStyles(closure_2_2[8]);
                              return obj6;
                            } else if (closure_1_7) {
                              const tmp27Result = displayNameStyles(closure_2_2[9]);
                              const result1 = tmp27Result.setTryItOutDisplayNameStyles(displayNameStyles);
                            } else {
                              const obj7 = { guildId, displayNameStyles };
                              const tmp27Result2 = displayNameStyles(closure_2_2[10]);
                              tmp27Result2.setPendingChanges(obj7);
                            }
                          }
                        } else if (1 === colors) {
                          c3 = 0;
                          closure_1_12.current = false;
                          throw closure_2;
                        } else if (2 === colors) {
                          c3 = 1;
                          if (closure_1_11 != null) {
                            closure_1_11();
                          }
                          c3 = 0;
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
                          const obj11 = { value, done: true };
                          return obj11;
                        } else {
                          ok = undefined;
                          if (ok != null) {
                            ok = ok.ok;
                          }
                          if (true !== ok) {
                            if (closure_1_11 != null) {
                              closure_1_11();
                            }
                            c3 = 0;
                            closure_1_12.current = false;
                            c5 = 3;
                            obj = { value: undefined, done: true };
                            return obj;
                          } else {
                            c3 = 0;
                            closure_1_12.current = false;
                          }
                        }
                        const obj12 = { font_name: displayNameStyles(closure_2_2[12]).DisplayNameFont[closure_2], effect_name: displayNameStyles(closure_2_2[13]).DisplayNameEffect[c3], colors, entry_point };
                        const track = closure_2_1(closure_2_2[11]).track;
                        const DISPLAY_NAME_STYLES_APPLIED = constants.DISPLAY_NAME_STYLES_APPLIED;
                        const tmp37 = closure_2_1(closure_2_2[11]);
                        track(DISPLAY_NAME_STYLES_APPLIED, obj12);
                        const tmp48 = closure_129_1;
                        if (tmp48) {
                          const obj9 = displayNameStyles(closure_2_2[7]);
                          const result2 = obj9.markHexagonCampaignPerkApplied(constants2.DISPLAY_NAME_STYLE);
                        }
                        if (closure_1_8 != null) {
                          closure_1_8();
                        }
                        c5 = 3;
                        return { value: "IconComponent", done: null };
                      } catch (tmp60) {
                        closure_2 = tmp60;
                        if (0 === c3) {
                          c5 = 3;
                          throw tmp60;
                        } else if (1 === tmp62) {
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
                    const tmp19 = tmp2;
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
                      const tmp19Result = tmp19(tmp20[14]);
                      if (!tmp19Result.isEnrolledInHexagonCampaign(currentUser.getCurrentUser(), constants.DISPLAY_NAME_STYLE)) {
                        ref.current = true;
                        closure_13(true);
                        closure_2 = false;
                        selectedFontId = 1;
                        c3 = 3;
                        c4 = 1;
                        let obj6 = { value: tmp19Result2.ensureHexagonCampaignEnrollment(tmp30.DISPLAY_NAME_STYLE), done: false };
                        tmp19Result2 = tmp19(tmp20[7]);
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
              closure_129_12.current = false;
              const tmp12 = closure_129_13(false);
              const tmp13 = closure_2;
              if (tmp13) {
                c3 = 4;
                c4 = 1;
                let obj8 = { value: apply(), done: false };
                return obj8;
              } else if (closure_129_9 != null) {
                const tmp40 = closure_129_9();
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
            return { value: "IconComponent", done: null };
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
};
