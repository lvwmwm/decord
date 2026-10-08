// Module ID: 16142
// Function ID: 16143
// Name: VEVOOPropTintColor
// Dependencies: [32, 19, 17, 5364, 21, 5090, 587, 558, 576, 16139, 4927, 6883, 8555, 16141, 14662, 1103, 2]

// Module 16142 (VEVOOPropTintColor)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import ColorUtils from "ColorUtils" /* 4927 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14662 */;
import VEVOO from "VEVOO" /* 16139 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import VEVOOStore from "VEVOOStore" /* 5364 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_0, dependencyMap, obj1, tmp10, tmp11, tmp12, tmp13, tmp2, tmp2Result, tmp2Result1, tmp3, tmp5, tmp9;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
let tmp;
const FormSwitch = tmp(6883);
const Form = tmp(8555);
let react = react_mod;
const View = react_native.View;
({ getVisualEffectViewOverrides: metroRequire, setVisualEffectViewOverides: metroImportDefault } = VEVOOStore);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let obj = { tintColor: size };
size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, borderRadius: nativeDefault.radii.sm };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VEVOOPropTintColor() {
  let closure_2;
  let closure_4;
  let first;
  let first2;
  let items;
  let require;
  let tmp14;
  let tmp19;
  let tmp8;
  let tmp = require;
  let obj = react2;
  const cResult = obj.c(43);
  const tmp4 = closure_11();
  let obj2 = VEVOO;
  const visualEffectViewOverrideSharedStyles = obj2.useVisualEffectViewOverrideSharedStyles();
  let obj3 = react;
  [tmp8, require] = first2(react.useState(false), 2);
  const tmp7 = first2(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let str = closure_6().tintColorOverrideHex;
    if (str == null) {
      str = "black";
    }
    cResult[0] = str;
    first = str;
  } else {
    first = cResult[0];
  }
  const tmp6Result = first2(obj3.useState(first), 2);
  const first1 = tmp6Result[0];
  dependencyMap = tmp6Result[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = closure_6();
    cResult[1] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[1];
  }
  const tmp6Result2 = first2(obj3.useState(tmp14.tintColorOverrideOpacity), 2);
  first2 = tmp6Result2[0];
  react = tmp6Result2[1];
  const ref = obj3.useRef(first2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(arg0, arg1) {
        if (null != arg0) {
          tmp = closure_2;
          tmp2 = closure_2(arg0);
        }
        if (null != arg1) {
          tmp3 = closure_4;
          tmp4 = closure_4(arg1);
        }
        hexToRgbaStringResult = undefined;
        if (null != arg0) {
          if (null != arg1) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj = closure_0(closure_2[10]);
            hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
          }
        }
        obj1 = {};
        merged = Object.assign(closure_6());
        obj1.tintColorOverrideOpacity = arg1;
        obj1.tintColorOverrideHex = arg0;
        obj1.tintColorOverride = hexToRgbaStringResult;
        closure_0 = obj1;
        if (null == hexToRgbaStringResult) {
          tmp11 = closure_7;
          obj4 = {};
          tmp12 = obj4;
          tmp13 = obj1;
          merged1 = Object.assign(obj1);
          str = "rgba(0, 0, 0, 0)";
          obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
          tmp15 = closure_7(obj4);
          tmp16 = globalThis;
          _setTimeout = setTimeout;
          timerId = setTimeout(() => { /* body not rendered: F146813 */ });
        } else {
          tmp9 = closure_7;
          tmp10 = closure_7(obj1);
        }
        return;
      }
    }
    cResult[2] = R;
    tmp19 = R;
  } else {
    class R {
      constructor(arg0, arg1) {
        if (null != arg0) {
          tmp = closure_2;
          tmp2 = closure_2(arg0);
        }
        if (null != arg1) {
          tmp3 = closure_4;
          tmp4 = closure_4(arg1);
        }
        hexToRgbaStringResult = undefined;
        if (null != arg0) {
          if (null != arg1) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj = closure_0(closure_2[10]);
            hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
          }
        }
        obj1 = {};
        merged = Object.assign(closure_6());
        obj1.tintColorOverrideOpacity = arg1;
        obj1.tintColorOverrideHex = arg0;
        obj1.tintColorOverride = hexToRgbaStringResult;
        closure_0 = obj1;
        if (null == hexToRgbaStringResult) {
          tmp11 = closure_7;
          obj4 = {};
          tmp12 = obj4;
          tmp13 = obj1;
          merged1 = Object.assign(obj1);
          str = "rgba(0, 0, 0, 0)";
          obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
          tmp15 = closure_7(obj4);
          tmp16 = globalThis;
          _setTimeout = setTimeout;
          timerId = setTimeout(() => { /* body not rendered: F146813 */ });
        } else {
          tmp9 = closure_7;
          tmp10 = closure_7(obj1);
        }
        return;
      }
    }
  }
  R = tmp19;
  if (cResult[3] === first1) {
    class R {
      constructor(arg0, arg1) {
        if (null != arg0) {
          tmp = closure_2;
          tmp2 = closure_2(arg0);
        }
        if (null != arg1) {
          tmp3 = closure_4;
          tmp4 = closure_4(arg1);
        }
        hexToRgbaStringResult = undefined;
        if (null != arg0) {
          if (null != arg1) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj = closure_0(closure_2[10]);
            hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
          }
        }
        obj1 = {};
        merged = Object.assign(closure_6());
        obj1.tintColorOverrideOpacity = arg1;
        obj1.tintColorOverrideHex = arg0;
        obj1.tintColorOverride = hexToRgbaStringResult;
        closure_0 = obj1;
        if (null == hexToRgbaStringResult) {
          tmp11 = closure_7;
          obj4 = {};
          tmp12 = obj4;
          tmp13 = obj1;
          merged1 = Object.assign(obj1);
          str = "rgba(0, 0, 0, 0)";
          obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
          tmp15 = closure_7(obj4);
          tmp16 = globalThis;
          _setTimeout = setTimeout;
          timerId = setTimeout(() => { /* body not rendered: F146813 */ });
        } else {
          tmp9 = closure_7;
          tmp10 = closure_7(obj1);
        }
        return;
      }
    }
    if (cResult[6] === tmp20) {
      class R {
        constructor(arg0, arg1) {
          if (null != arg0) {
            tmp = closure_2;
            tmp2 = closure_2(arg0);
          }
          if (null != arg1) {
            tmp3 = closure_4;
            tmp4 = closure_4(arg1);
          }
          hexToRgbaStringResult = undefined;
          if (null != arg0) {
            if (null != arg1) {
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj = closure_0(closure_2[10]);
              hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
            }
          }
          obj1 = {};
          merged = Object.assign(closure_6());
          obj1.tintColorOverrideOpacity = arg1;
          obj1.tintColorOverrideHex = arg0;
          obj1.tintColorOverride = hexToRgbaStringResult;
          closure_0 = obj1;
          if (null == hexToRgbaStringResult) {
            tmp11 = closure_7;
            obj4 = {};
            tmp12 = obj4;
            tmp13 = obj1;
            merged1 = Object.assign(obj1);
            str = "rgba(0, 0, 0, 0)";
            obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
            tmp15 = closure_7(obj4);
            tmp16 = globalThis;
            _setTimeout = setTimeout;
            timerId = setTimeout(() => { /* body not rendered: F146813 */ });
          } else {
            tmp9 = closure_7;
            tmp10 = closure_7(obj1);
          }
          return;
        }
      }
      if (cResult[9] !== first1) {
        class R {
          constructor(arg0, arg1) {
            if (null != arg0) {
              tmp = closure_2;
              tmp2 = closure_2(arg0);
            }
            if (null != arg1) {
              tmp3 = closure_4;
              tmp4 = closure_4(arg1);
            }
            hexToRgbaStringResult = undefined;
            if (null != arg0) {
              if (null != arg1) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj = closure_0(closure_2[10]);
                hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
              }
            }
            obj1 = {};
            merged = Object.assign(closure_6());
            obj1.tintColorOverrideOpacity = arg1;
            obj1.tintColorOverrideHex = arg0;
            obj1.tintColorOverride = hexToRgbaStringResult;
            closure_0 = obj1;
            if (null == hexToRgbaStringResult) {
              tmp11 = closure_7;
              obj4 = {};
              tmp12 = obj4;
              tmp13 = obj1;
              merged1 = Object.assign(obj1);
              str = "rgba(0, 0, 0, 0)";
              obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
              tmp15 = closure_7(obj4);
              tmp16 = globalThis;
              _setTimeout = setTimeout;
              timerId = setTimeout(() => { /* body not rendered: F146813 */ });
            } else {
              tmp9 = closure_7;
              tmp10 = closure_7(obj1);
            }
            return;
          }
        }
        tmp25[0] = first1;
        cResult[9] = first1;
        cResult[10] = tmp25;
      } else {
        class R {
          constructor(arg0, arg1) {
            if (null != arg0) {
              tmp = closure_2;
              tmp2 = closure_2(arg0);
            }
            if (null != arg1) {
              tmp3 = closure_4;
              tmp4 = closure_4(arg1);
            }
            hexToRgbaStringResult = undefined;
            if (null != arg0) {
              if (null != arg1) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj = closure_0(closure_2[10]);
                hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
              }
            }
            obj1 = {};
            merged = Object.assign(closure_6());
            obj1.tintColorOverrideOpacity = arg1;
            obj1.tintColorOverrideHex = arg0;
            obj1.tintColorOverride = hexToRgbaStringResult;
            closure_0 = obj1;
            if (null == hexToRgbaStringResult) {
              tmp11 = closure_7;
              obj4 = {};
              tmp12 = obj4;
              tmp13 = obj1;
              merged1 = Object.assign(obj1);
              str = "rgba(0, 0, 0, 0)";
              obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
              tmp15 = closure_7(obj4);
              tmp16 = globalThis;
              _setTimeout = setTimeout;
              timerId = setTimeout(() => { /* body not rendered: F146813 */ });
            } else {
              tmp9 = closure_7;
              tmp10 = closure_7(obj1);
            }
            return;
          }
        }
      }
      if (cResult[11] === tmp4.tintColor) {
        class R {
          constructor(arg0, arg1) {
            if (null != arg0) {
              tmp = closure_2;
              tmp2 = closure_2(arg0);
            }
            if (null != arg1) {
              tmp3 = closure_4;
              tmp4 = closure_4(arg1);
            }
            hexToRgbaStringResult = undefined;
            if (null != arg0) {
              if (null != arg1) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj = closure_0(closure_2[10]);
                hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
              }
            }
            obj1 = {};
            merged = Object.assign(closure_6());
            obj1.tintColorOverrideOpacity = arg1;
            obj1.tintColorOverrideHex = arg0;
            obj1.tintColorOverride = hexToRgbaStringResult;
            closure_0 = obj1;
            if (null == hexToRgbaStringResult) {
              tmp11 = closure_7;
              obj4 = {};
              tmp12 = obj4;
              tmp13 = obj1;
              merged1 = Object.assign(obj1);
              str = "rgba(0, 0, 0, 0)";
              obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
              tmp15 = closure_7(obj4);
              tmp16 = globalThis;
              _setTimeout = setTimeout;
              timerId = setTimeout(() => { /* body not rendered: F146813 */ });
            } else {
              tmp9 = closure_7;
              tmp10 = closure_7(obj1);
            }
            return;
          }
        }
        if (cResult[14] === visualEffectViewOverrideSharedStyles.zeroPadding) {
          let tmp34;
          class R {
            constructor(arg0, arg1) {
              if (null != arg0) {
                tmp = closure_2;
                tmp2 = closure_2(arg0);
              }
              if (null != arg1) {
                tmp3 = closure_4;
                tmp4 = closure_4(arg1);
              }
              hexToRgbaStringResult = undefined;
              if (null != arg0) {
                if (null != arg1) {
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  obj = closure_0(closure_2[10]);
                  hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
                }
              }
              obj1 = {};
              merged = Object.assign(closure_6());
              obj1.tintColorOverrideOpacity = arg1;
              obj1.tintColorOverrideHex = arg0;
              obj1.tintColorOverride = hexToRgbaStringResult;
              closure_0 = obj1;
              if (null == hexToRgbaStringResult) {
                tmp11 = closure_7;
                obj4 = {};
                tmp12 = obj4;
                tmp13 = obj1;
                merged1 = Object.assign(obj1);
                str = "rgba(0, 0, 0, 0)";
                obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
                tmp15 = closure_7(obj4);
                tmp16 = globalThis;
                _setTimeout = setTimeout;
                timerId = setTimeout(() => { /* body not rendered: F146813 */ });
              } else {
                tmp9 = closure_7;
                tmp10 = closure_7(obj1);
              }
              return;
            }
          }
          if (cResult[17] !== first2) {
            class R {
              constructor(arg0, arg1) {
                if (null != arg0) {
                  tmp = closure_2;
                  tmp2 = closure_2(arg0);
                }
                if (null != arg1) {
                  tmp3 = closure_4;
                  tmp4 = closure_4(arg1);
                }
                hexToRgbaStringResult = undefined;
                if (null != arg0) {
                  if (null != arg1) {
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    obj = closure_0(closure_2[10]);
                    hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
                  }
                }
                obj1 = {};
                merged = Object.assign(closure_6());
                obj1.tintColorOverrideOpacity = arg1;
                obj1.tintColorOverrideHex = arg0;
                obj1.tintColorOverride = hexToRgbaStringResult;
                closure_0 = obj1;
                if (null == hexToRgbaStringResult) {
                  tmp11 = closure_7;
                  obj4 = {};
                  tmp12 = obj4;
                  tmp13 = obj1;
                  merged1 = Object.assign(obj1);
                  str = "rgba(0, 0, 0, 0)";
                  obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
                  tmp15 = closure_7(obj4);
                  tmp16 = globalThis;
                  _setTimeout = setTimeout;
                  timerId = setTimeout(() => { /* body not rendered: F146813 */ });
                } else {
                  tmp9 = closure_7;
                  tmp10 = closure_7(obj1);
                }
                return;
              }
            }
            let toFixedResult;
            if (first2 != null) {
              class R {
                constructor(arg0, arg1) {
                  if (null != arg0) {
                    tmp = closure_2;
                    tmp2 = closure_2(arg0);
                  }
                  if (null != arg1) {
                    tmp3 = closure_4;
                    tmp4 = closure_4(arg1);
                  }
                  hexToRgbaStringResult = undefined;
                  if (null != arg0) {
                    if (null != arg1) {
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      obj = closure_0(closure_2[10]);
                      hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
                    }
                  }
                  obj1 = {};
                  merged = Object.assign(closure_6());
                  obj1.tintColorOverrideOpacity = arg1;
                  obj1.tintColorOverrideHex = arg0;
                  obj1.tintColorOverride = hexToRgbaStringResult;
                  closure_0 = obj1;
                  if (null == hexToRgbaStringResult) {
                    tmp11 = closure_7;
                    obj4 = {};
                    tmp12 = obj4;
                    tmp13 = obj1;
                    merged1 = Object.assign(obj1);
                    str = "rgba(0, 0, 0, 0)";
                    obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
                    tmp15 = closure_7(obj4);
                    tmp16 = globalThis;
                    _setTimeout = setTimeout;
                    timerId = setTimeout(() => { /* body not rendered: F146813 */ });
                  } else {
                    tmp9 = closure_7;
                    tmp10 = closure_7(obj1);
                  }
                  return;
                }
              }
              toFixedResult = first2.toFixed(3);
            }
            if (toFixedResult == null) {
              class R {
                constructor(arg0, arg1) {
                  if (null != arg0) {
                    tmp = closure_2;
                    tmp2 = closure_2(arg0);
                  }
                  if (null != arg1) {
                    tmp3 = closure_4;
                    tmp4 = closure_4(arg1);
                  }
                  hexToRgbaStringResult = undefined;
                  if (null != arg0) {
                    if (null != arg1) {
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      obj = closure_0(closure_2[10]);
                      hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
                    }
                  }
                  obj1 = {};
                  merged = Object.assign(closure_6());
                  obj1.tintColorOverrideOpacity = arg1;
                  obj1.tintColorOverrideHex = arg0;
                  obj1.tintColorOverride = hexToRgbaStringResult;
                  closure_0 = obj1;
                  if (null == hexToRgbaStringResult) {
                    tmp11 = closure_7;
                    obj4 = {};
                    tmp12 = obj4;
                    tmp13 = obj1;
                    merged1 = Object.assign(obj1);
                    str = "rgba(0, 0, 0, 0)";
                    obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
                    tmp15 = closure_7(obj4);
                    tmp16 = globalThis;
                    _setTimeout = setTimeout;
                    timerId = setTimeout(() => { /* body not rendered: F146813 */ });
                  } else {
                    tmp9 = closure_7;
                    tmp10 = closure_7(obj1);
                  }
                  return;
                }
              }
            }
            cResult[17] = first2;
            cResult[18] = toFixedResult;
            tmp34 = toFixedResult;
          } else {
            class R {
              constructor(arg0, arg1) {
                if (null != arg0) {
                  tmp = closure_2;
                  tmp2 = closure_2(arg0);
                }
                if (null != arg1) {
                  tmp3 = closure_4;
                  tmp4 = closure_4(arg1);
                }
                hexToRgbaStringResult = undefined;
                if (null != arg0) {
                  if (null != arg1) {
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    obj = closure_0(closure_2[10]);
                    hexToRgbaStringResult = obj.hexToRgbaString(arg0, arg1);
                  }
                }
                obj1 = {};
                merged = Object.assign(closure_6());
                obj1.tintColorOverrideOpacity = arg1;
                obj1.tintColorOverrideHex = arg0;
                obj1.tintColorOverride = hexToRgbaStringResult;
                closure_0 = obj1;
                if (null == hexToRgbaStringResult) {
                  tmp11 = closure_7;
                  obj4 = {};
                  tmp12 = obj4;
                  tmp13 = obj1;
                  merged1 = Object.assign(obj1);
                  str = "rgba(0, 0, 0, 0)";
                  obj4.tintColorOverride = "rgba(0, 0, 0, 0)";
                  tmp15 = closure_7(obj4);
                  tmp16 = globalThis;
                  _setTimeout = setTimeout;
                  timerId = setTimeout(() => { /* body not rendered: F146813 */ });
                } else {
                  tmp9 = closure_7;
                  tmp10 = closure_7(obj1);
                }
                return;
              }
            }
          }
          const _HermesInternal = HermesInternal;
          const combined = "Blur Tint Opacity " + tmp34;
          if (cResult[19] !== first1) {
            class Y {
              constructor(arg0) {
                tmp = closure_5(closure_1, arg0);
                return;
              }
            }
            cResult[19] = first1;
            cResult[20] = Y;
          } else {
            class Y {
              constructor(arg0) {
                tmp = closure_5(closure_1, arg0);
                return;
              }
            }
          }
          if (cResult[21] === !tmp8) {
            class Y {
              constructor(arg0) {
                tmp = closure_5(closure_1, arg0);
                return;
              }
            }
            if (cResult[24] === visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal) {
              class Y {
                constructor(arg0) {
                  tmp = closure_5(closure_1, arg0);
                  return;
                }
              }
            }
            const obj4 = { style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, disabled: !tmp8, label: combined, subLabel: tmp39 };
            cResult[24] = visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal;
            cResult[25] = combined;
            cResult[26] = tmp39;
            cResult[27] = !tmp8;
            cResult[28] = closure_8(Form.FormRow, obj4);
            const tmp45 = closure_8(Form.FormRow, obj4);
          }
          const obj5 = { disabled: !tmp8, initialValue: ref, onValueChange: tmp38 };
          cResult[21] = !tmp8;
          cResult[22] = tmp38;
          cResult[23] = closure_8(first1(16141), obj5);
          const tmp42 = closure_8(first1(16141), obj5);
        }
        const obj6 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint", trailing: tmp26 };
        cResult[14] = visualEffectViewOverrideSharedStyles.zeroPadding;
        cResult[15] = tmp26;
        cResult[16] = closure_8(Form.FormRow, obj6);
        const tmp32 = closure_8(Form.FormRow, obj6);
      }
      const obj7 = { style: items };
      items = [tmp4.tintColor, tmp24];
      cResult[11] = tmp4.tintColor;
      cResult[12] = tmp24;
      cResult[13] = closure_8(R, obj7);
      const tmp29 = closure_8(R, obj7);
    }
    const obj8 = { value: tmp8, onValueChange: tmp20 };
    cResult[6] = tmp20;
    cResult[7] = tmp8;
    cResult[8] = closure_8(FormSwitch.FormSwitch, obj8);
    const tmp23 = closure_8(FormSwitch.FormSwitch, obj8);
  }
  class B {
    constructor(arg0) {
      tmp = closure_0(arg0);
      tmp2 = closure_5;
      if (arg0) {
        tmp4 = closure_1;
        tmp5 = closure_3;
        tmp2Result = tmp2(closure_1, closure_3);
      } else {
        tmp2Result1 = tmp2(undefined, undefined);
      }
      return;
    }
  }
  cResult[3] = first1;
  cResult[4] = first2;
  cResult[5] = B;
}) : (function VEVOOPropTintColor() {
  let closure_2;
  let closure_4;
  let first1;
  let items;
  let obj4;
  let obj6;
  let obj8;
  let obj9;
  let require;
  let str2;
  let tmp14;
  let tmp15;
  let tmp7;
  let tmp = closure_11();
  let obj = VEVOO;
  const visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  let obj2 = react;
  [tmp7, require] = first1(react.useState(false), 2);
  const useState = react.useState;
  const tmp6 = first1(react.useState(false), 2);
  let str = closure_6().tintColorOverrideHex;
  const tmp8 = closure_6;
  if (str == null) {
    str = "black";
  }
  const tmp5Result = first1(useState(str), 2);
  const backgroundColor = tmp5Result[0];
  dependencyMap = tmp5Result[1];
  const tmp5Result2 = first1(obj2.useState(tmp8().tintColorOverrideOpacity), 2);
  first1 = tmp5Result2[0];
  react = tmp5Result2[1];
  const ref = obj2.useRef(first1);
  let closure_5 = obj2.useCallback((tintColorOverrideHex, tintColorOverrideOpacity) => {
    if (null != tintColorOverrideHex) {
      closure_2(tintColorOverrideHex);
    }
    if (null != tintColorOverrideOpacity) {
      closure_4(tintColorOverrideOpacity);
    }
    let hexToRgbaStringResult;
    if (null != tintColorOverrideHex) {
      if (null != tintColorOverrideOpacity) {
        const obj = ColorUtils;
        hexToRgbaStringResult = obj.hexToRgbaString(tintColorOverrideHex, tintColorOverrideOpacity);
      }
    }
    const obj2 = { tintColorOverrideOpacity, tintColorOverrideHex, tintColorOverride: hexToRgbaStringResult };
    const merged = Object.assign(metroRequire());
    if (null == hexToRgbaStringResult) {
      const obj3 = { tintColorOverride: "rgba(0, 0, 0, 0)" };
      const merged1 = Object.assign(obj2);
      metroImportDefault(obj3);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_2_7(obj2);
      });
    } else {
      metroImportDefault(obj2);
    }
  }, []);
  let obj3 = {
    style: visualEffectViewOverrideSharedStyles.zeroPaddingVertical,
    labelStyle: visualEffectViewOverrideSharedStyles.zeroHeight,
    leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle,
    leading: closure_8(tmp2(6883).FormSwitch, obj4),
    subLabel: tmp14(tmp15, obj8),
    disabled: !tmp7,
    onPress() {
      let obj2;
      let obj = {
        color: obj2.hex2int(first),
        onSelect(color) {
          const obj = require("utils/ColorUtils");
          closure_1_5(obj.int2hex(color), first1);
        }
      };
      const tmp = showCustomColorPickerActionSheetDefault;
      obj2 = utils_ColorUtils;
      tmp(obj);
    }
  };
  const FormRow = tmp2(8555).FormRow;
  obj4 = {
    value: tmp7,
    onValueChange(arg0) {
      _require(arg0);
      if (arg0) {
        closure_5(first, first1);
      } else {
        closure_5(undefined, undefined);
      }
    }
  };
  const obj5 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint", trailing: closure_8(closure_5, obj6) };
  obj6 = { style: items };
  items = [tmp.tintColor, { backgroundColor }];
  const FormRow2 = tmp2(8555).FormRow;
  const items1 = [closure_8(FormRow2, obj5), ];
  const obj7 = { style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, disabled: !tmp7, label: "Blur Tint Opacity " + str2, subLabel: closure_8(backgroundColor(16141), obj9) };
  str2 = undefined;
  const FormRow3 = tmp2(8555).FormRow;
  tmp14 = closure_10;
  tmp15 = closure_9;
  if (first1 != null) {
    str2 = first1.toFixed(3);
  }
  if (str2 == null) {
    str2 = "";
  }
  obj8 = { children: items1 };
  obj9 = {
    disabled: !tmp7,
    initialValue: ref,
    onValueChange(arg0) {
      closure_5(first, arg0);
    }
  };
  items1[1] = closure_8(FormRow3, obj7);
  return closure_8(FormRow, obj3);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropTintColor.tsx");

export default memoResult;
