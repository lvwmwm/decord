// Module ID: 18253
// Function ID: 18254
// Name: GuildSettingsServerTagColorPickerActionSheet
// Dependencies: [32, 19, 17, 7869, 21, 587, 5091, 14770, 4928, 558, 576, 1497, 4811, 11145, 1126, 8513, 5055, 6835, 14065, 8839, 5087, 8761, 14771, 8610, 5376, 5374, 6836, 2]

// Module 18253 (GuildSettingsServerTagColorPickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ColorUtils from "ColorUtils" /* 4928 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14770 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildTagConstants from "GuildTagConstants" /* 7869 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: metroRequire, GUILD_TAG_BADGE_PALETTE_PRESETS: metroImportDefault, GuildTagBadgeSize: metroImportAll } = GuildTagConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let closure_12 = { leading: true, trailing: true };
let closure_13 = createStyles.createStyles((width) => {
  const obj = { container: { paddingHorizontal: PX_16, paddingBottom: nativeDefault.space.PX_16 }, preview: { alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, previewChiplet: { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 0, columnGap: nativeDefault.space.PX_8 }, colorTabs: { alignSelf: "center", width }, saturationValuePicker: { alignSelf: "center" }, saturationValueColorBox: { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE }, saturationValueColorBoxInner: { width, minWidth: width, height: 160, minHeight: 160 }, selector: size, huePicker: { alignSelf: "center" }, hueColorBarInner: { width, minWidth: width, height: 24 }, hexInput: { height: 48, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_12, textAlign: "center" }, buttonGroup: { marginTop: nativeDefault.space.PX_24 } };
  ({ paddingHorizontal: PX_16, paddingBottom: nativeDefault.space.PX_16 });
  ({ alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  ({ backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 0, columnGap: nativeDefault.space.PX_8 });
  ({ borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE });
  size = { width: 16, height: 16, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.unsafe_rawColors.WHITE };
  ({ height: 48, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_12, textAlign: "center" });
  ({ marginTop: nativeDefault.space.PX_24 });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsServerTagColorPickerActionSheet(secondaryColor) {
  let Stack2;
  let badge;
  let closure_3;
  let closure_6;
  let first1;
  let first2;
  let intl3;
  let items3;
  let items4;
  let obj7;
  let onSelectColor;
  let primaryColor;
  let ref;
  let sharedValue2;
  let tag;
  let tmp25;
  let tmp = primaryColor;
  let tmp2 = onSelectColor;
  let obj = primaryColor(onSelectColor[10]);
  const cResult = obj.c(114);
  ({ tag, badge, primaryColor } = secondaryColor);
  secondaryColor = secondaryColor.secondaryColor;
  onSelectColor = secondaryColor.onSelectColor;
  let tmp4 = secondaryColor;
  const bound = Math.max(240, Math.min(secondaryColor(onSelectColor[11])().width - 2 * ref, 358));
  const tmp6 = sharedValue2(bound);
  let tmp7 = closure_6[badge] >= 2;
  _slicedToArray = tmp7;
  const first = first2[0];
  let obj2 = first;
  [first1, closure_6] = first.useState(primaryColor);
  let tmp12 = null;
  const useState = first.useState;
  if (tmp7) {
    tmp12 = secondaryColor;
  }
  const tmp9Result = _slicedToArray(useState(tmp12), 2);
  first2 = tmp9Result[0];
  let closure_8 = tmp9Result[1];
  const tmp9Result3 = _slicedToArray(obj2.useState("primary"), 2);
  const first3 = tmp9Result3[0];
  let closure_10 = tmp9Result3[1];
  ref = obj2.useRef(false);
  let primary = first1;
  const hex2rgb2hsv = tmp(tmp2[8]).hex2rgb2hsv;
  tmp(tmp2[8]);
  if (first1 == null) {
    primary = first.primary;
  }
  let hex2rgb2hsvResult = hex2rgb2hsv(primary);
  let num;
  const useSharedValue = tmp(tmp2[12]).useSharedValue;
  tmp(tmp2[12]);
  if (hex2rgb2hsvResult != null) {
    num = hex2rgb2hsvResult.h;
  }
  if (num == null) {
    num = 0;
  }
  const sharedValue = useSharedValue(num);
  let num2;
  const useSharedValue2 = tmp(tmp2[12]).useSharedValue;
  tmp(tmp2[12]);
  if (hex2rgb2hsvResult != null) {
    num2 = hex2rgb2hsvResult.s;
  }
  if (num2 == null) {
    num2 = 100;
  }
  sharedValue2 = useSharedValue2(num2 / 100);
  let num3;
  const useSharedValue3 = tmp(tmp2[12]).useSharedValue;
  tmp(tmp2[12]);
  if (hex2rgb2hsvResult != null) {
    num3 = hex2rgb2hsvResult.v;
  }
  if (num3 == null) {
    num3 = 100;
  }
  const sharedValue3 = useSharedValue3(num3 / 100);
  let str = first1;
  if (first1 == null) {
    str = first.primary;
  }
  if (cResult[0] !== str) {
    let formatted = str.toUpperCase();
    cResult[0] = str;
    cResult[1] = formatted;
    tmp25 = formatted;
  } else {
    tmp25 = cResult[1];
  }
  const tmp9Result4 = _slicedToArray(obj2.useState(tmp25), 2);
  const first4 = tmp9Result4[0];
  let closure_16 = tmp9Result4[1];
  let primary2 = first1;
  if (first1 == null) {
    primary2 = first.primary;
  }
  let tmp29 = null;
  if (tmp7) {
    let secondary = first2;
    if (first2 == null) {
      secondary = first.secondary;
    }
    tmp29 = secondary;
  }
  secondary = tmp29;
  if (cResult[2] === primary2) {
    let tmp30;
    if (cResult[3] === tmp29) {
      tmp30 = cResult[4];
    }
    let closure_19 = tmp30;
    if (cResult[5] === primaryColor) {
      let tmp31;
      let tmp32;
      if (cResult[6] === secondaryColor) {
        tmp31 = cResult[7];
      }
      let closure_20 = tmp31;
      const _Symbol = Symbol;
      let str2 = "react.memo_cache_sentinel";
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        function le(arg0, str) {
          let formatted;
          if (str != null) {
            formatted = str.toUpperCase();
          }
          if (formatted == null) {
            formatted = null;
          }
          if ("primary" === arg0) {
            closure_6(formatted);
          } else {
            closure_8(formatted);
          }
        }
        cResult[8] = le;
        tmp32 = le;
      } else {
        tmp32 = cResult[8];
      }
      let closure_21 = tmp32;
      if (cResult[9] === sharedValue) {
        if (cResult[10] === sharedValue2) {
          let tmp33;
          if (cResult[11] === sharedValue3) {
            tmp33 = cResult[12];
          }
          let closure_22 = tmp33;
          if (cResult[13] === sharedValue) {
            if (cResult[14] === sharedValue2) {
              let tmp34;
              let tmp35;
              let tmp41;
              if (cResult[15] === sharedValue3) {
                tmp34 = cResult[16];
              }
              let closure_23 = tmp34;
              if (cResult[17] !== tmp34) {
                const items = [tmp34];
                cResult[17] = tmp34;
                cResult[18] = items;
                tmp35 = items;
              } else {
                tmp35 = cResult[18];
              }
              const tmpResult10 = tmp(tmp2[13]);
              const throttledFunction = tmpResult10.useThrottledFunction(tmp34, 32, tmp35, sharedValue);
              if (cResult[19] !== throttledFunction) {
                function he() {
                  if (ref.current) {
                    let flushResult = throttledFunction.flush();
                    if (flushResult == null) {
                      flushResult = null;
                    }
                    if (null != flushResult) {
                      tmp.current = false;
                    }
                    return flushResult;
                  } else {
                    return null;
                  }
                }
                cResult[19] = throttledFunction;
                cResult[20] = he;
                tmp41 = he;
              } else {
                tmp41 = cResult[20];
              }
              let closure_25 = tmp41;
              if (cResult[21] === first3) {
                let tmp42;
                let tmp44;
                let tmp43;
                if (cResult[22] === throttledFunction) {
                  tmp42 = cResult[23];
                }
                if (cResult[24] !== throttledFunction) {
                  function ve() {
                    return () => throttledFunction.cancel();
                  }
                  const items1 = [throttledFunction];
                  cResult[24] = throttledFunction;
                  cResult[25] = ve;
                  cResult[26] = items1;
                  tmp44 = items1;
                  tmp43 = ve;
                } else {
                  tmp43 = cResult[25];
                  tmp44 = cResult[26];
                }
                const effect = obj2.useEffect(tmp43, tmp44);
                if (cResult[27] === first3) {
                  if (cResult[28] === throttledFunction) {
                    let tmp46;
                    if (cResult[29] === tmp34) {
                      tmp46 = cResult[30];
                    }
                    if (cResult[31] === first3) {
                      if (cResult[32] === throttledFunction) {
                        let tmp47;
                        if (cResult[33] === tmp33) {
                          tmp47 = cResult[34];
                        }
                        if (cResult[35] === first3) {
                          if (cResult[36] === tmp31) {
                            if (cResult[37] === throttledFunction) {
                              let tmp49;
                              if (cResult[38] === tmp33) {
                                tmp49 = cResult[39];
                              }
                              if (cResult[40] === first3) {
                                if (cResult[41] === tmp41) {
                                  if (cResult[42] === tmp30) {
                                    if (cResult[43] === throttledFunction) {
                                      let tmp51;
                                      let tmp53;
                                      let tmp55;
                                      if (cResult[44] === tmp33) {
                                        tmp51 = cResult[45];
                                      }
                                      const _Symbol2 = Symbol;
                                      class Be {
                                        constructor(arg0) {
                                          let str = "secondary";
                                          if (0 === arg0) {
                                            str = "primary";
                                          }
                                          if (str !== first3) {
                                            closure_25();
                                            throttledFunction.cancel();
                                            closure_10(str);
                                            const str2 = closure_19(str);
                                            const formatted = str2.toUpperCase();
                                            closure_16(formatted);
                                            closure_22(formatted);
                                          }
                                        }
                                      }
                                      if (tmp52 === Symbol.for("react.memo_cache_sentinel")) {
                                        const obj3 = { id: "primary", label: tmp54(tmp(tmp2[14]).t.PHT1N2), page: null };
                                        const intl = tmp(tmp2[14]).intl;
                                        class Be {
                                          constructor(arg0) {
                                            let str = "secondary";
                                            if (0 === arg0) {
                                              str = "primary";
                                            }
                                            if (str !== first3) {
                                              closure_25();
                                              throttledFunction.cancel();
                                              closure_10(str);
                                              const str2 = closure_19(str);
                                              const formatted = str2.toUpperCase();
                                              closure_16(formatted);
                                              closure_22(formatted);
                                            }
                                          }
                                        }
                                        cResult[46] = obj3;
                                        tmp53 = obj3;
                                      } else {
                                        tmp53 = cResult[46];
                                      }
                                      const _Symbol3 = Symbol;
                                      if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                        const items2 = [tmp53, ];
                                        class Be {
                                          constructor(arg0) {
                                            let str = "secondary";
                                            if (0 === arg0) {
                                              str = "primary";
                                            }
                                            if (str !== first3) {
                                              closure_25();
                                              throttledFunction.cancel();
                                              closure_10(str);
                                              const str2 = closure_19(str);
                                              const formatted = str2.toUpperCase();
                                              closure_16(formatted);
                                              closure_22(formatted);
                                            }
                                          }
                                        }
                                        const intl2 = tmp(tmp2[14]).intl;
                                        tmp56[1] = intl2.string(tmp(tmp2[14]).t["9/wzjF"]);
                                        items2[1] = tmp56;
                                        cResult[47] = items2;
                                        tmp55 = items2;
                                      } else {
                                        tmp55 = cResult[47];
                                      }
                                      if (cResult[48] === tmp51) {
                                        tmp(tmp2[15]);
                                        class Be {
                                          constructor(arg0) {
                                            let str = "secondary";
                                            if (0 === arg0) {
                                              str = "primary";
                                            }
                                            if (str !== first3) {
                                              closure_25();
                                              throttledFunction.cancel();
                                              closure_10(str);
                                              const str2 = closure_19(str);
                                              const formatted = str2.toUpperCase();
                                              closure_16(formatted);
                                              closure_22(formatted);
                                            }
                                          }
                                        }
                                        if (cResult[51] === first1) {
                                          if (cResult[52] === first2) {
                                            if (cResult[53] === tmp41) {
                                              if (cResult[54] === tmp7) {
                                                if (cResult[55] === first4) {
                                                  let tmp60;
                                                  let tmp61;
                                                  let tmp64;
                                                  let tmp68;
                                                  if (cResult[56] === onSelectColor) {
                                                    tmp60 = cResult[57];
                                                  }
                                                  let str3 = "WUMP";
                                                  class Be {
                                                    constructor(arg0) {
                                                      let str = "secondary";
                                                      if (0 === arg0) {
                                                        str = "primary";
                                                      }
                                                      if (str !== first3) {
                                                        closure_25();
                                                        throttledFunction.cancel();
                                                        closure_10(str);
                                                        const str2 = closure_19(str);
                                                        const formatted = str2.toUpperCase();
                                                        closure_16(formatted);
                                                        closure_22(formatted);
                                                      }
                                                    }
                                                  }
                                                  if ("" !== tag) {
                                                    str3 = tag;
                                                  }
                                                  if (cResult[58] !== first4) {
                                                    const tmpResult12 = tmp(tmp2[8]);
                                                    const hex2rgb2hsvResult1 = tmpResult12.hex2rgb2hsv(first4);
                                                    class Be {
                                                      constructor(arg0) {
                                                        let str = "secondary";
                                                        if (0 === arg0) {
                                                          str = "primary";
                                                        }
                                                        if (str !== first3) {
                                                          closure_25();
                                                          throttledFunction.cancel();
                                                          closure_10(str);
                                                          const str2 = closure_19(str);
                                                          const formatted = str2.toUpperCase();
                                                          closure_16(formatted);
                                                          closure_22(formatted);
                                                        }
                                                      }
                                                    }
                                                    cResult[58] = first4;
                                                    cResult[59] = hex2rgb2hsvResult1;
                                                    tmp61 = hex2rgb2hsvResult1;
                                                  } else {
                                                    tmp61 = cResult[59];
                                                  }
                                                  const _Symbol4 = Symbol;
                                                  if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
                                                    const obj4 = { title: intl3.string(tmp(tmp2[14]).t.T1IxYH) };
                                                    class Be {
                                                      constructor(arg0) {
                                                        let str = "secondary";
                                                        if (0 === arg0) {
                                                          str = "primary";
                                                        }
                                                        if (str !== first3) {
                                                          closure_25();
                                                          throttledFunction.cancel();
                                                          closure_10(str);
                                                          const str2 = closure_19(str);
                                                          const formatted = str2.toUpperCase();
                                                          closure_16(formatted);
                                                          closure_22(formatted);
                                                        }
                                                      }
                                                    }
                                                    intl3 = tmp(tmp2[14]).intl;
                                                    const tmp67 = first3(tmp66, obj4);
                                                    cResult[60] = tmp67;
                                                    tmp64 = tmp67;
                                                  } else {
                                                    tmp64 = cResult[60];
                                                  }
                                                  const container = tmp6.container;
                                                  if (cResult[61] !== str3) {
                                                    const intl4 = tmp(tmp2[14]).intl;
                                                    const formatToPlainString = intl4.formatToPlainString;
                                                    class Be {
                                                      constructor(arg0) {
                                                        let str = "secondary";
                                                        if (0 === arg0) {
                                                          str = "primary";
                                                        }
                                                        if (str !== first3) {
                                                          closure_25();
                                                          throttledFunction.cancel();
                                                          closure_10(str);
                                                          const str2 = closure_19(str);
                                                          const formatted = str2.toUpperCase();
                                                          closure_16(formatted);
                                                          closure_22(formatted);
                                                        }
                                                      }
                                                    }
                                                    tmp69[0] = str3;
                                                    const formatToPlainStringResult = formatToPlainString(tmp(tmp2[14]).t.R1AXap, tmp69);
                                                    cResult[61] = str3;
                                                    cResult[62] = formatToPlainStringResult;
                                                    tmp68 = formatToPlainStringResult;
                                                  } else {
                                                    tmp68 = cResult[62];
                                                  }
                                                  let tmp71;
                                                  if (tmp7) {
                                                    tmp71 = first2;
                                                  }
                                                  if (cResult[63] === badge) {
                                                    if (cResult[64] === first1) {
                                                      let tmp72;
                                                      if (cResult[65] === tmp71) {
                                                        tmp72 = cResult[66];
                                                      }
                                                      if (cResult[67] === str3) {
                                                        if (cResult[68] === tmp6.previewChiplet) {
                                                          let tmp76;
                                                          if (cResult[69] === tmp72) {
                                                            tmp76 = cResult[70];
                                                          }
                                                          if (cResult[71] === tmp6.preview) {
                                                            if (cResult[72] === tmp68) {
                                                              let tmp79;
                                                              let tmp83;
                                                              if (cResult[73] === tmp76) {
                                                                tmp79 = cResult[74];
                                                              }
                                                              if (cResult[75] === tmp59) {
                                                                if (cResult[76] === tmp7) {
                                                                  let tmp82;
                                                                  if (cResult[77] === tmp6.colorTabs) {
                                                                    tmp82 = cResult[78];
                                                                  }
                                                                  if (cResult[79] === tmp46) {
                                                                    if (cResult[80] === tmp42) {
                                                                      if (cResult[81] === sharedValue) {
                                                                        if (cResult[82] === sharedValue2) {
                                                                          if (cResult[83] === tmp6.hueColorBarInner) {
                                                                            if (cResult[84] === tmp6.huePicker) {
                                                                              if (cResult[85] === tmp6.saturationValueColorBox) {
                                                                                if (cResult[86] === tmp6.saturationValueColorBoxInner) {
                                                                                  if (cResult[87] === tmp6.saturationValuePicker) {
                                                                                    if (cResult[88] === tmp6.selector) {
                                                                                      let tmp87;
                                                                                      let tmp90;
                                                                                      if (cResult[89] === sharedValue3) {
                                                                                        tmp87 = cResult[90];
                                                                                      }
                                                                                      const _Symbol5 = Symbol;
                                                                                      class Be {
                                                                                        constructor(arg0) {
                                                                                          let str = "secondary";
                                                                                          if (0 === arg0) {
                                                                                            str = "primary";
                                                                                          }
                                                                                          if (str !== first3) {
                                                                                            closure_25();
                                                                                            throttledFunction.cancel();
                                                                                            closure_10(str);
                                                                                            const str2 = closure_19(str);
                                                                                            const formatted = str2.toUpperCase();
                                                                                            closure_16(formatted);
                                                                                            closure_22(formatted);
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      if (tmp89 === Symbol.for("react.memo_cache_sentinel")) {
                                                                                        const string = tmp(tmp2[14]).intl.string;
                                                                                        class Be {
                                                                                          constructor(arg0) {
                                                                                            let str = "secondary";
                                                                                            if (0 === arg0) {
                                                                                              str = "primary";
                                                                                            }
                                                                                            if (str !== first3) {
                                                                                              closure_25();
                                                                                              throttledFunction.cancel();
                                                                                              closure_10(str);
                                                                                              const str2 = closure_19(str);
                                                                                              const formatted = str2.toUpperCase();
                                                                                              closure_16(formatted);
                                                                                              closure_22(formatted);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        cResult[91] = tmp91;
                                                                                        tmp90 = tmp91;
                                                                                      } else {
                                                                                        tmp90 = cResult[91];
                                                                                      }
                                                                                      if (cResult[92] === tmp47) {
                                                                                        if (cResult[93] === first4) {
                                                                                          let tmp92;
                                                                                          let tmp96;
                                                                                          if (cResult[94] === tmp6.hexInput) {
                                                                                            tmp92 = cResult[95];
                                                                                          }
                                                                                          const _Symbol6 = Symbol;
                                                                                          class Be {
                                                                                            constructor(arg0) {
                                                                                              let str = "secondary";
                                                                                              if (0 === arg0) {
                                                                                                str = "primary";
                                                                                              }
                                                                                              if (str !== first3) {
                                                                                                closure_25();
                                                                                                throttledFunction.cancel();
                                                                                                closure_10(str);
                                                                                                const str2 = closure_19(str);
                                                                                                const formatted = str2.toUpperCase();
                                                                                                closure_16(formatted);
                                                                                                closure_22(formatted);
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                          if (cResult[96] === Symbol.for("react.memo_cache_sentinel")) {
                                                                                            const string2 = tmp(tmp2[14]).intl.string;
                                                                                            class Be {
                                                                                              constructor(arg0) {
                                                                                                let str = "secondary";
                                                                                                if (0 === arg0) {
                                                                                                  str = "primary";
                                                                                                }
                                                                                                if (str !== first3) {
                                                                                                  closure_25();
                                                                                                  throttledFunction.cancel();
                                                                                                  closure_10(str);
                                                                                                  const str2 = closure_19(str);
                                                                                                  const formatted = str2.toUpperCase();
                                                                                                  closure_16(formatted);
                                                                                                  closure_22(formatted);
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            cResult[96] = tmp97;
                                                                                            tmp96 = tmp97;
                                                                                          } else {
                                                                                            tmp96 = cResult[96];
                                                                                          }
                                                                                          if (cResult[97] === tmp60) {
                                                                                            let tmp98;
                                                                                            let tmp104;
                                                                                            if (cResult[98] === null == tmp61) {
                                                                                              tmp98 = cResult[99];
                                                                                            }
                                                                                            const _Symbol7 = Symbol;
                                                                                            class Be {
                                                                                              constructor(arg0) {
                                                                                                let str = "secondary";
                                                                                                if (0 === arg0) {
                                                                                                  str = "primary";
                                                                                                }
                                                                                                if (str !== first3) {
                                                                                                  closure_25();
                                                                                                  throttledFunction.cancel();
                                                                                                  closure_10(str);
                                                                                                  const str2 = closure_19(str);
                                                                                                  const formatted = str2.toUpperCase();
                                                                                                  closure_16(formatted);
                                                                                                  closure_22(formatted);
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            if (tmp101 === Symbol.for("react.memo_cache_sentinel")) {
                                                                                              const string3 = tmp(tmp2[14]).intl.string;
                                                                                              class Be {
                                                                                                constructor(arg0) {
                                                                                                  let str = "secondary";
                                                                                                  if (0 === arg0) {
                                                                                                    str = "primary";
                                                                                                  }
                                                                                                  if (str !== first3) {
                                                                                                    closure_25();
                                                                                                    throttledFunction.cancel();
                                                                                                    closure_10(str);
                                                                                                    const str2 = closure_19(str);
                                                                                                    const formatted = str2.toUpperCase();
                                                                                                    closure_16(formatted);
                                                                                                    closure_22(formatted);
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                              cResult[100] = tmp103;
                                                                                            }
                                                                                            if (cResult[101] !== tmp49) {
                                                                                              const obj5 = { grow: true, variant: "secondary", text: null, onPress: tmp49 };
                                                                                              class Be {
                                                                                                constructor(arg0) {
                                                                                                  let str = "secondary";
                                                                                                  if (0 === arg0) {
                                                                                                    str = "primary";
                                                                                                  }
                                                                                                  if (str !== first3) {
                                                                                                    closure_25();
                                                                                                    throttledFunction.cancel();
                                                                                                    closure_10(str);
                                                                                                    const str2 = closure_19(str);
                                                                                                    const formatted = str2.toUpperCase();
                                                                                                    closure_16(formatted);
                                                                                                    closure_22(formatted);
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                              const tmp106 = first3(tmp(tmp2[24]).Button, obj5);
                                                                                              cResult[101] = tmp49;
                                                                                              cResult[102] = tmp106;
                                                                                              tmp104 = tmp106;
                                                                                            } else {
                                                                                              tmp104 = cResult[102];
                                                                                            }
                                                                                            if (cResult[103] === tmp6.buttonGroup) {
                                                                                              if (cResult[104] === tmp98) {
                                                                                                let tmp107;
                                                                                                if (cResult[105] === tmp104) {
                                                                                                  tmp107 = cResult[106];
                                                                                                }
                                                                                                if (cResult[107] === tmp6.container) {
                                                                                                  if (cResult[108] === tmp79) {
                                                                                                    if (cResult[109] === tmp82) {
                                                                                                      if (cResult[110] === tmp87) {
                                                                                                        if (cResult[111] === tmp92) {
                                                                                                          let tmp110;
                                                                                                          if (cResult[112] === tmp107) {
                                                                                                            tmp110 = cResult[113];
                                                                                                          }
                                                                                                          return tmp110;
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                class Be {
                                                                                                  constructor(arg0) {
                                                                                                    let str = "secondary";
                                                                                                    if (0 === arg0) {
                                                                                                      str = "primary";
                                                                                                    }
                                                                                                    if (str !== first3) {
                                                                                                      closure_25();
                                                                                                      throttledFunction.cancel();
                                                                                                      closure_10(str);
                                                                                                      const str2 = closure_19(str);
                                                                                                      const formatted = str2.toUpperCase();
                                                                                                      closure_16(formatted);
                                                                                                      closure_22(formatted);
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                const obj6 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: tmp64, children: closure_10(Stack2, obj7) };
                                                                                                BottomSheet = tmp(tmp2[26]).BottomSheet;
                                                                                                obj7 = { spacing: tmp4(tmp2[5]).space.PX_8, style: container, children: items3 };
                                                                                                Stack2 = tmp(tmp2[25]).Stack;
                                                                                                items3 = [tmp79, tmp82, tmp87, tmp92, tmp107];
                                                                                                const tmp112 = first3(BottomSheet, obj6);
                                                                                                cResult[107] = tmp6.container;
                                                                                                cResult[108] = tmp79;
                                                                                                cResult[109] = tmp82;
                                                                                                cResult[110] = tmp87;
                                                                                                cResult[111] = tmp92;
                                                                                                cResult[112] = tmp107;
                                                                                                cResult[113] = tmp112;
                                                                                                tmp110 = tmp112;
                                                                                              }
                                                                                            }
                                                                                            const obj9 = { spacing: tmp4(tmp2[5]).space.PX_8, style: tmp95, children: items4 };
                                                                                            const Stack = tmp(tmp2[25]).Stack;
                                                                                            items4 = [tmp98, tmp104];
                                                                                            const tmp109 = closure_10(Stack, obj9);
                                                                                            cResult[103] = tmp6.buttonGroup;
                                                                                            cResult[104] = tmp98;
                                                                                            cResult[105] = tmp104;
                                                                                            cResult[106] = tmp109;
                                                                                            tmp107 = tmp109;
                                                                                          }
                                                                                          const obj10 = { grow: true, text: tmp96, onPress: tmp60, disabled: null == tmp61 };
                                                                                          const tmp100 = first3(tmp(tmp2[24]).Button, obj10);
                                                                                          cResult[97] = tmp60;
                                                                                          cResult[98] = null == tmp61;
                                                                                          cResult[99] = tmp100;
                                                                                          tmp98 = tmp100;
                                                                                        }
                                                                                      }
                                                                                      const obj11 = { accessibilityLabel: tmp90, value: first4, onChangeText: tmp47, maxLength: 7, autoCapitalize: "characters", autoCorrect: false, style: tmp6.hexInput };
                                                                                      const tmp94 = first3(tmp(tmp2[23]).BottomSheetTextInput, obj11);
                                                                                      cResult[92] = tmp47;
                                                                                      cResult[93] = first4;
                                                                                      cResult[94] = tmp6.hexInput;
                                                                                      cResult[95] = tmp94;
                                                                                      tmp92 = tmp94;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                  class Be {
                                                                    constructor(arg0) {
                                                                      let str = "secondary";
                                                                      if (0 === arg0) {
                                                                        str = "primary";
                                                                      }
                                                                      if (str !== first3) {
                                                                        closure_25();
                                                                        throttledFunction.cancel();
                                                                        closure_10(str);
                                                                        const str2 = closure_19(str);
                                                                        const formatted = str2.toUpperCase();
                                                                        closure_16(formatted);
                                                                        closure_22(formatted);
                                                                      }
                                                                    }
                                                                  }
                                                                  const obj13 = { hue: sharedValue, saturation: sharedValue2, value: sharedValue3, saturationValuePickerStyle: null, saturationValueColorBoxStyle: null, saturationValueColorBoxInnerStyle: null, saturationValueSelectorStyle: null, huePickerStyle: null, hueColorBarInnerStyle: null, hueSliderStyle: null, onPanUpdate: tmp42, onPanFinalize: tmp46 };
                                                                  ({ saturationValuePicker: obj12.saturationValuePickerStyle, saturationValueColorBox: obj12.saturationValueColorBoxStyle, saturationValueColorBoxInner: obj12.saturationValueColorBoxInnerStyle, selector: obj12.saturationValueSelectorStyle, huePicker: obj12.huePickerStyle, hueColorBarInner: obj12.hueColorBarInnerStyle, selector: obj12.hueSliderStyle } = tmp6);
                                                                  const tmp88 = first3(tmp4(tmp2[22]), obj13);
                                                                  cResult[79] = tmp46;
                                                                  cResult[80] = tmp42;
                                                                  cResult[81] = sharedValue;
                                                                  cResult[82] = sharedValue2;
                                                                  cResult[83] = tmp6.hueColorBarInner;
                                                                  cResult[84] = tmp6.huePicker;
                                                                  cResult[85] = tmp6.saturationValueColorBox;
                                                                  cResult[86] = tmp6.saturationValueColorBoxInner;
                                                                  cResult[87] = tmp6.saturationValuePicker;
                                                                  cResult[88] = tmp6.selector;
                                                                  cResult[89] = sharedValue3;
                                                                  cResult[90] = tmp88;
                                                                  tmp87 = tmp88;
                                                                }
                                                              }
                                                              class Be {
                                                                constructor(arg0) {
                                                                  let str = "secondary";
                                                                  if (0 === arg0) {
                                                                    str = "primary";
                                                                  }
                                                                  if (str !== first3) {
                                                                    closure_25();
                                                                    throttledFunction.cancel();
                                                                    closure_10(str);
                                                                    const str2 = closure_19(str);
                                                                    const formatted = str2.toUpperCase();
                                                                    closure_16(formatted);
                                                                    closure_22(formatted);
                                                                  }
                                                                }
                                                              }
                                                              if (tmp7) {
                                                                class Be {
                                                                  constructor(arg0) {
                                                                    let str = "secondary";
                                                                    if (0 === arg0) {
                                                                      str = "primary";
                                                                    }
                                                                    if (str !== first3) {
                                                                      closure_25();
                                                                      throttledFunction.cancel();
                                                                      closure_10(str);
                                                                      const str2 = closure_19(str);
                                                                      const formatted = str2.toUpperCase();
                                                                      closure_16(formatted);
                                                                      closure_22(formatted);
                                                                    }
                                                                  }
                                                                }
                                                                tmp86[0] = tmp6.colorTabs;
                                                                const obj14 = { state: tmp59, variant: "experimental_Large", keyboardShouldPersistTaps: "handled" };
                                                                tmp86[1] = first3(tmp(tmp2[21]).SegmentedControl, obj14);
                                                                tmp83 = first3(first1, tmp86);
                                                              }
                                                              cResult[75] = tmp59;
                                                              cResult[76] = tmp7;
                                                              cResult[77] = tmp6.colorTabs;
                                                              cResult[78] = tmp83;
                                                              tmp82 = tmp83;
                                                            }
                                                          }
                                                          class Be {
                                                            constructor(arg0) {
                                                              let str = "secondary";
                                                              if (0 === arg0) {
                                                                str = "primary";
                                                              }
                                                              if (str !== first3) {
                                                                closure_25();
                                                                throttledFunction.cancel();
                                                                closure_10(str);
                                                                const str2 = closure_19(str);
                                                                const formatted = str2.toUpperCase();
                                                                closure_16(formatted);
                                                                closure_22(formatted);
                                                              }
                                                            }
                                                          }
                                                          const obj15 = { accessible: true, accessibilityLabel: tmp68, style: tmp6.preview, children: tmp76 };
                                                          const tmp81 = first3(first1, obj15);
                                                          cResult[71] = tmp6.preview;
                                                          cResult[72] = tmp68;
                                                          cResult[73] = tmp76;
                                                          cResult[74] = tmp81;
                                                          tmp79 = tmp81;
                                                        }
                                                      }
                                                      class Be {
                                                        constructor(arg0) {
                                                          let str = "secondary";
                                                          if (0 === arg0) {
                                                            str = "primary";
                                                          }
                                                          if (str !== first3) {
                                                            closure_25();
                                                            throttledFunction.cancel();
                                                            closure_10(str);
                                                            const str2 = closure_19(str);
                                                            const formatted = str2.toUpperCase();
                                                            closure_16(formatted);
                                                            closure_22(formatted);
                                                          }
                                                        }
                                                      }
                                                      const obj16 = { guildTag: str3, guildBadge: tmp72, textVariant: "heading-xxl/semibold", textStyle: tmp(tmp2[20]).TextStyleSheet["heading-xxl/semibold"], badgeSize: closure_8.SIZE_36, containerStyles: tmp6.previewChiplet };
                                                      const BaseGuildTagChiplet = tmp(tmp2[19]).BaseGuildTagChiplet;
                                                      const tmp78 = first3(BaseGuildTagChiplet, obj16);
                                                      cResult[67] = str3;
                                                      cResult[68] = tmp6.previewChiplet;
                                                      cResult[69] = tmp72;
                                                      cResult[70] = tmp78;
                                                      tmp76 = tmp78;
                                                    }
                                                  }
                                                  size = { badge, width: null, height: null, primaryTintColor: first1, secondaryTintColor: tmp71 };
                                                  ({ SIZE_36: obj8.width, SIZE_36: obj8.height } = closure_8);
                                                  const tmp75 = first3(tmp(tmp2[18]).GuildBadge, size);
                                                  cResult[63] = badge;
                                                  cResult[64] = first1;
                                                  cResult[65] = tmp71;
                                                  cResult[66] = tmp75;
                                                  tmp72 = tmp75;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        function we() {
                                          const obj = ColorUtils;
                                          if (null != obj.hex2rgb2hsv(first4)) {
                                            const tmp13 = closure_25();
                                            let colorChannel;
                                            if (tmp13 != null) {
                                              colorChannel = tmp13.colorChannel;
                                            }
                                            const str2 = "primary" === colorChannel ? tmp13.hex : first1;
                                            let colorChannel1;
                                            if (tmp13 != null) {
                                              colorChannel1 = tmp13.colorChannel;
                                            }
                                            const str4 = "secondary" === colorChannel1 ? tmp13.hex : first2;
                                            let formatted;
                                            const tmp4 = onSelectColor;
                                            if (str2 != null) {
                                              formatted = str2.toLowerCase();
                                            }
                                            if (formatted == null) {
                                              formatted = null;
                                            }
                                            let tmp7 = null;
                                            if (closure_3) {
                                              let formatted1;
                                              if (str4 != null) {
                                                formatted1 = str4.toLowerCase();
                                              }
                                              if (formatted1 == null) {
                                                formatted1 = null;
                                              }
                                              tmp7 = formatted1;
                                            }
                                            tmp4(formatted, tmp7);
                                            const obj2 = ActionSheetActionCreatorsDefault;
                                            obj2.hideActionSheet();
                                          }
                                        }
                                        cResult[51] = first1;
                                        cResult[52] = first2;
                                        cResult[53] = tmp41;
                                        cResult[54] = tmp7;
                                        cResult[55] = first4;
                                        cResult[56] = onSelectColor;
                                        cResult[57] = we;
                                        tmp60 = we;
                                      }
                                      const obj17 = { items: tmp55, pageWidth: bound, onSetActiveIndex: tmp51 };
                                      cResult[48] = tmp51;
                                      cResult[49] = bound;
                                      cResult[50] = obj17;
                                    }
                                  }
                                }
                              }
                              class Be {
                                constructor(arg0) {
                                  let str = "secondary";
                                  if (0 === arg0) {
                                    str = "primary";
                                  }
                                  if (str !== first3) {
                                    closure_25();
                                    throttledFunction.cancel();
                                    closure_10(str);
                                    const str2 = closure_19(str);
                                    const formatted = str2.toUpperCase();
                                    closure_16(formatted);
                                    closure_22(formatted);
                                  }
                                }
                              }
                              cResult[40] = first3;
                              cResult[41] = tmp41;
                              cResult[42] = tmp30;
                              cResult[43] = throttledFunction;
                              cResult[44] = tmp33;
                              cResult[45] = Be;
                              tmp51 = Be;
                            }
                          }
                        }
                        cResult[35] = first3;
                        cResult[36] = tmp31;
                        cResult[37] = throttledFunction;
                        cResult[38] = tmp33;
                        cResult[39] = tmp50;
                        tmp49 = tmp50;
                      }
                    }
                    cResult[31] = first3;
                    cResult[32] = throttledFunction;
                    cResult[33] = tmp33;
                    cResult[34] = tmp48;
                    tmp47 = tmp48;
                  }
                }
                function me() {
                  throttledFunction.cancel();
                  ref.current = false;
                  closure_23(first3);
                }
                cResult[27] = first3;
                cResult[28] = throttledFunction;
                cResult[29] = tmp34;
                cResult[30] = me;
                tmp46 = me;
              }
              function ge() {
                ref.current = true;
                throttledFunction(first3);
              }
              cResult[21] = first3;
              cResult[22] = throttledFunction;
              cResult[23] = ge;
              tmp42 = ge;
            }
          }
          function se(colorChannel) {
            const value = sharedValue.get();
            const value3 = sharedValue2.get();
            const value4 = sharedValue3.get();
            const obj = ColorPickerUtils;
            const hsvToRgbWorkletResult = obj.hsvToRgbWorklet({ h: value, s: value3, v: value4 });
            const obj2 = ColorUtils;
            const str = obj2.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]);
            const formatted = str.toUpperCase();
            closure_16(formatted);
            closure_21(colorChannel, formatted);
            return { colorChannel, hex: formatted };
          }
          cResult[13] = sharedValue;
          cResult[14] = sharedValue2;
          cResult[15] = sharedValue3;
          cResult[16] = se;
          tmp34 = se;
        }
      }
      function oe(first4) {
        const obj = ColorUtils;
        const hex2rgb2hsvResult = obj.hex2rgb2hsv(first4);
        if (null != hex2rgb2hsvResult) {
          const result = sharedValue.set(hex2rgb2hsvResult.h);
          const result1 = sharedValue2.set(hex2rgb2hsvResult.s / 100);
          const result2 = sharedValue3.set(hex2rgb2hsvResult.v / 100);
        }
      }
      cResult[9] = sharedValue;
      cResult[10] = sharedValue2;
      cResult[11] = sharedValue3;
      cResult[12] = oe;
      tmp33 = oe;
    }
    function te(arg0) {
      return "primary" === arg0 ? primaryColor : secondaryColor;
    }
    cResult[5] = primaryColor;
    cResult[6] = secondaryColor;
    cResult[7] = te;
    tmp31 = te;
  }
  class Q {
    constructor(arg0) {
      let tmp;
      if ("primary" === arg0) {
        tmp = primary2;
      } else {
        tmp = secondary;
        if (secondary == null) {
          tmp = primary2;
        }
      }
      return tmp;
    }
  }
  cResult[2] = primary2;
  cResult[3] = tmp29;
  cResult[4] = Q;
  tmp30 = Q;
}) : (function GuildSettingsServerTagColorPickerActionSheet(secondaryColor) {
  let BaseGuildTagChiplet;
  let BottomSheetTitleHeader;
  let GuildBadge;
  let Stack;
  let badge;
  let closure_3;
  let closure_6;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items13;
  let items14;
  let obj3;
  let obj4;
  let obj6;
  let obj8;
  let primaryColor;
  let tag;
  let tmp47;
  let tmp48;
  ({ tag, badge, primaryColor } = secondaryColor);
  secondaryColor = secondaryColor.secondaryColor;
  const onSelectColor = secondaryColor.onSelectColor;
  first1 = undefined;
  closure_6 = undefined;
  let first2;
  let closure_8;
  let first3;
  let closure_10;
  let ref;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let first4;
  let closure_16;
  let primary2;
  let secondary;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let throttledFunction;
  let callback5;
  let tmp = secondaryColor;
  let tmp2 = onSelectColor;
  const bound = Math.max(240, Math.min(secondaryColor(onSelectColor[11])().width - 2 * ref, 358));
  let tmp4 = sharedValue2(bound);
  _slicedToArray = tmp5;
  const first = first2[0];
  let obj = first;
  let tmp7 = _slicedToArray;
  [first1, closure_6] = first.useState(primaryColor);
  let tmp10 = null;
  const useState = first.useState;
  if (closure_6[badge] >= 2) {
    tmp10 = secondaryColor;
  }
  const tmp7Result = tmp7(useState(tmp10), 2);
  first2 = tmp7Result[0];
  closure_8 = tmp7Result[1];
  const tmp7Result3 = tmp7(obj.useState("primary"), 2);
  first3 = tmp7Result3[0];
  closure_10 = tmp7Result3[1];
  ref = obj.useRef(false);
  let primary = first1;
  const hex2rgb2hsv = primaryColor(tmp2[8]).hex2rgb2hsv;
  primaryColor(tmp2[8]);
  if (first1 == null) {
    primary = first.primary;
  }
  let hex2rgb2hsvResult = hex2rgb2hsv(primary);
  let num;
  const useSharedValue = tmp15(tmp2[12]).useSharedValue;
  primaryColor(tmp2[12]);
  if (hex2rgb2hsvResult != null) {
    num = hex2rgb2hsvResult.h;
  }
  if (num == null) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  let num2;
  const useSharedValue2 = tmp15(tmp2[12]).useSharedValue;
  primaryColor(tmp2[12]);
  if (hex2rgb2hsvResult != null) {
    num2 = hex2rgb2hsvResult.s;
  }
  if (num2 == null) {
    num2 = 100;
  }
  sharedValue2 = useSharedValue2(num2 / 100);
  let num3;
  const useSharedValue3 = tmp15(tmp2[12]).useSharedValue;
  primaryColor(tmp2[12]);
  if (hex2rgb2hsvResult != null) {
    num3 = hex2rgb2hsvResult.v;
  }
  if (num3 == null) {
    num3 = 100;
  }
  sharedValue3 = useSharedValue3(num3 / 100);
  let str = first1;
  const useState2 = obj.useState;
  if (first1 == null) {
    str = first.primary;
  }
  const tmp7Result4 = tmp7(useState2(str.toUpperCase()), 2);
  first4 = tmp7Result4[0];
  closure_16 = tmp7Result4[1];
  primary2 = first1;
  if (first1 == null) {
    primary2 = first.primary;
  }
  let tmp26 = null;
  if (closure_6[badge] >= 2) {
    secondary = first2;
    if (first2 == null) {
      secondary = first.secondary;
    }
    tmp26 = secondary;
  }
  secondary = tmp26;
  let items = [primary2, tmp26];
  callback = obj.useCallback((arg0) => {
    let tmp;
    if ("primary" === arg0) {
      tmp = primary2;
    } else {
      tmp = secondary;
      if (secondary == null) {
        tmp = primary2;
      }
    }
    return tmp;
  }, items);
  const items1 = [primaryColor, secondaryColor];
  callback1 = obj.useCallback((arg0) => "primary" === arg0 ? primaryColor : secondaryColor, items1);
  callback2 = obj.useCallback((arg0, str) => {
    let formatted;
    if (str != null) {
      formatted = str.toUpperCase();
    }
    if (formatted == null) {
      formatted = null;
    }
    if ("primary" === arg0) {
      closure_6(formatted);
    } else {
      closure_8(formatted);
    }
  }, []);
  const items2 = [sharedValue, sharedValue2, sharedValue3];
  callback3 = obj.useCallback((first4) => {
    const obj = ColorUtils;
    const hex2rgb2hsvResult = obj.hex2rgb2hsv(first4);
    if (null != hex2rgb2hsvResult) {
      const result = sharedValue.set(hex2rgb2hsvResult.h);
      const result1 = sharedValue2.set(hex2rgb2hsvResult.s / 100);
      const result2 = sharedValue3.set(hex2rgb2hsvResult.v / 100);
    }
  }, items2);
  const items3 = [sharedValue, sharedValue2, callback2, sharedValue3];
  callback4 = obj.useCallback((colorChannel) => {
    const value = sharedValue.get();
    const value3 = sharedValue2.get();
    const value4 = sharedValue3.get();
    const obj = ColorPickerUtils;
    const hsvToRgbWorkletResult = obj.hsvToRgbWorklet({ h: value, s: value3, v: value4 });
    const obj2 = ColorUtils;
    const str = obj2.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]);
    const formatted = str.toUpperCase();
    closure_16(formatted);
    callback2(colorChannel, formatted);
    return { colorChannel, hex: formatted };
  }, items3);
  const items4 = [callback4];
  const tmp15Result8 = primaryColor(tmp2[13]);
  throttledFunction = tmp15Result8.useThrottledFunction(callback4, 32, items4, sharedValue);
  const items5 = [throttledFunction];
  callback5 = obj.useCallback(() => {
    if (ref.current) {
      let flushResult = throttledFunction.flush();
      if (flushResult == null) {
        flushResult = null;
      }
      if (null != flushResult) {
        tmp.current = false;
      }
      return flushResult;
    } else {
      return null;
    }
  }, items5);
  const items6 = [first3, throttledFunction];
  const items7 = [throttledFunction];
  const callback6 = obj.useCallback(() => {
    ref.current = true;
    throttledFunction(first3);
  }, items6);
  const effect = obj.useEffect(() => () => throttledFunction.cancel(), items7);
  const items8 = [first3, throttledFunction, callback4];
  const items9 = [first3, callback2, throttledFunction, callback3];
  const callback7 = obj.useCallback(() => {
    throttledFunction.cancel();
    ref.current = false;
    callback4(first3);
  }, items8);
  const items10 = [first3, first, callback1, callback2, throttledFunction, callback3];
  const callback8 = obj.useCallback((first4) => {
    if (first4.length > 0) {
      let combined;
      if ("#" !== first4.charAt(0)) {
        const _HermesInternal = HermesInternal;
        combined = "#" + first4.toUpperCase();
      }
      ref.current = false;
      throttledFunction.cancel();
      closure_16(combined);
      const obj = ColorUtils;
      if (null != obj.hex2rgb2hsv(combined)) {
        callback2(first3, combined);
        callback3(combined);
      }
    }
    combined = first4.toUpperCase();
  }, items9);
  const items11 = [first3, callback5, callback, throttledFunction, callback3];
  const callback9 = obj.useCallback(() => {
    const tmp2 = callback1(first3);
    const tmp = first3;
    if ("primary" === first3) {
      secondary = first.primary;
    } else {
      secondary = first.secondary;
    }
    let str = tmp2;
    if (tmp2 == null) {
      str = secondary;
    }
    ref.current = false;
    throttledFunction.cancel();
    closure_16(str.toUpperCase());
    callback2(tmp, tmp2);
    callback3(str);
  }, items10);
  const callback10 = obj.useCallback((arg0) => {
    let str = "secondary";
    if (0 === arg0) {
      str = "primary";
    }
    if (str !== first3) {
      callback5();
      throttledFunction.cancel();
      closure_10(str);
      const str2 = callback(str);
      const formatted = str2.toUpperCase();
      closure_16(formatted);
      callback3(formatted);
    }
  }, items11);
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    const obj = { id: "primary", label: intl.string(primaryColor(onSelectColor[14]).t.PHT1N2), page: null };
    intl = primaryColor(onSelectColor[14]).intl;
    const items = [obj, ];
    const obj2 = { id: "secondary", label: intl2.string(primaryColor(onSelectColor[14]).t["9/wzjF"]), page: null };
    intl2 = primaryColor(onSelectColor[14]).intl;
    items[1] = obj2;
    return items;
  }, []);
  const items12 = [first1, first2, callback5, tmp5, first4, onSelectColor];
  const tmp15Result9 = primaryColor(tmp2[15]);
  const segmentedControlState = tmp15Result9.useSegmentedControlState({ items: memo, pageWidth: bound, onSetActiveIndex: callback10 });
  let str2 = "WUMP";
  const callback11 = obj.useCallback(() => {
    const obj = ColorUtils;
    if (null != obj.hex2rgb2hsv(first4)) {
      const tmp13 = callback5();
      let colorChannel;
      if (tmp13 != null) {
        colorChannel = tmp13.colorChannel;
      }
      const str2 = "primary" === colorChannel ? tmp13.hex : first1;
      let colorChannel1;
      if (tmp13 != null) {
        colorChannel1 = tmp13.colorChannel;
      }
      const str4 = "secondary" === colorChannel1 ? tmp13.hex : first2;
      let formatted;
      const tmp4 = onSelectColor;
      if (str2 != null) {
        formatted = str2.toLowerCase();
      }
      if (formatted == null) {
        formatted = null;
      }
      let tmp7 = null;
      if (closure_3) {
        let formatted1;
        if (str4 != null) {
          formatted1 = str4.toLowerCase();
        }
        if (formatted1 == null) {
          formatted1 = null;
        }
        tmp7 = formatted1;
      }
      tmp4(formatted, tmp7);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  }, items12);
  if ("" !== tag) {
    str2 = tag;
  }
  const tmp15Result10 = primaryColor(tmp2[8]);
  let obj2 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: first3(BottomSheetTitleHeader, obj3), children: closure_10(Stack, obj4) };
  const tmp43 = null == tmp15Result10.hex2rgb2hsv(first4);
  BottomSheet = tmp15(tmp2[26]).BottomSheet;
  obj3 = { title: intl.string(primaryColor(tmp2[14]).t.T1IxYH) };
  BottomSheetTitleHeader = tmp15(tmp2[17]).BottomSheetTitleHeader;
  intl = tmp15(tmp2[14]).intl;
  obj4 = { spacing: tmp(tmp2[5]).space.PX_8, style: tmp4.container, children: items13 };
  Stack = tmp15(tmp2[25]).Stack;
  const obj5 = { accessible: true, accessibilityLabel: intl2.formatToPlainString(primaryColor(tmp2[14]).t.R1AXap, { tag: str2 }), style: tmp4.preview, children: first3(BaseGuildTagChiplet, obj6) };
  intl2 = tmp15(tmp2[14]).intl;
  obj6 = { guildTag: str2, guildBadge: first3(GuildBadge, size), textVariant: "heading-xxl/semibold", textStyle: primaryColor(tmp2[20]).TextStyleSheet["heading-xxl/semibold"], badgeSize: tmp47.SIZE_36, containerStyles: tmp4.previewChiplet };
  BaseGuildTagChiplet = tmp15(tmp2[19]).BaseGuildTagChiplet;
  size = { badge, width: closure_8.SIZE_36, height: closure_8.SIZE_36, primaryTintColor: first1, secondaryTintColor: tmp48 };
  GuildBadge = tmp15(tmp2[18]).GuildBadge;
  tmp48 = undefined;
  tmp47 = closure_8;
  if (closure_6[badge] >= 2) {
    tmp48 = first2;
  }
  items13 = [first3(first1, obj5), , , , ];
  let tmp44Result = null;
  if (closure_6[badge] >= 2) {
    const obj7 = { style: tmp4.colorTabs, children: first3(primaryColor(tmp2[21]).SegmentedControl, obj8) };
    obj8 = { state: segmentedControlState, variant: "experimental_Large", keyboardShouldPersistTaps: "handled" };
    tmp44Result = tmp44(tmp46, obj7);
  }
  items13[1] = tmp44Result;
  const obj9 = { hue: sharedValue, saturation: sharedValue2, value: sharedValue3, saturationValuePickerStyle: tmp4.saturationValuePicker, saturationValueColorBoxStyle: tmp4.saturationValueColorBox, saturationValueColorBoxInnerStyle: tmp4.saturationValueColorBoxInner, saturationValueSelectorStyle: tmp4.selector, huePickerStyle: tmp4.huePicker, hueColorBarInnerStyle: tmp4.hueColorBarInner, hueSliderStyle: tmp4.selector, onPanUpdate: callback6, onPanFinalize: callback7 };
  items13[2] = first3(tmp(tmp2[22]), obj9);
  const obj10 = { accessibilityLabel: intl3.string(primaryColor(tmp2[14]).t["ozfa/h"]), value: first4, onChangeText: callback8, maxLength: 7, autoCapitalize: "characters", autoCorrect: false, style: tmp4.hexInput };
  const BottomSheetTextInput = tmp15(tmp2[23]).BottomSheetTextInput;
  intl3 = tmp15(tmp2[14]).intl;
  items13[3] = first3(BottomSheetTextInput, obj10);
  const obj11 = { spacing: tmp(tmp2[5]).space.PX_8, style: tmp4.buttonGroup, children: items14 };
  const Stack2 = tmp15(tmp2[25]).Stack;
  const obj12 = { grow: true, text: intl4.string(primaryColor(tmp2[14]).t["R3BPH+"]), onPress: callback11, disabled: tmp43 };
  const Button = tmp15(tmp2[24]).Button;
  intl4 = tmp15(tmp2[14]).intl;
  items14 = [first3(Button, obj12), ];
  const obj13 = { grow: true, variant: "secondary", text: intl5.string(primaryColor(tmp2[14]).t.yBZMsQ), onPress: callback9 };
  const Button2 = tmp15(tmp2[24]).Button;
  intl5 = tmp15(tmp2[14]).intl;
  items14[1] = first3(Button2, obj13);
  items13[4] = closure_10(Stack2, obj11);
  return first3(BottomSheet, obj2);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorPickerActionSheet.tsx");

export default tmp4;
