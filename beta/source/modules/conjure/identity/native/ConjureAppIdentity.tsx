// Module ID: 17091
// Function ID: 17092
// Name: ConjureAppIdentity
// Dependencies: [109, 32, 5, 19, 17, 21, 5092, 587, 7755, 7765, 17060, 1126, 3849, 1494, 17087, 558, 576, 6157, 17092, 6182, 5088, 5377, 9401, 5379, 6286, 6947, 6774, 2031, 8762, 2]

// Module 17091 (ConjureAppIdentity)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import StringUtils from "StringUtils" /* 2031 */;
import _modDef3849 from "module_3849" /* 3849 */;
import Text_Text from "Text/Text" /* 5088 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import FastImageDefault from "FastImage" /* 6157 */;
import Card_Card from "Card/Card" /* 6182 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6286 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6947 */;
import ImagePickerDefault from "ImagePicker" /* 7765 */;
import BotTagDefault from "BotTag" /* 8762 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3, c4, dependencyMap, importDefault;

let c10;
let c9;
let obj2;
let obj3;
let size;
let unpackModuleId;
function pickConjureAppIcon() {
  return obj(...arguments);
}
let value = function _pickConjureAppIcon() {
  let obj = _asyncToGenerator(async (arg0, value) => {
    let intl;
    let intl2;
    let obj8;
    function pickedIconType(arg0) {
      const items = [, , ];
      ({ mimeType: arr[0], fileType: arr[1], type: arr[2] } = arg0);
      const str = items.find((arr) => {
        let hasItem;
        if (arr != null) {
          hasItem = arr.includes("/");
        }
        return true === hasItem;
      });
      if (null != str) {
        let str3 = "image/jpeg";
        if ("image/jpg" !== str.toLowerCase()) {
          str3 = str.toLowerCase();
        }
        return str3;
      } else {
        const obj3 = { uri: null, overrideFilename: null };
        ({ uri: obj2.uri, fileName: obj2.overrideFilename } = arg0);
        const obj = imagepng(closure_1_2[8]);
        const type = obj.getFile(obj3).type;
        let tmp3 = null;
        if ("unknown" !== type) {
          tmp3 = type;
        }
        return tmp3;
      }
    }
    if (c4 === 2) {
      c4 = 3;
      const str4 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        let imagepng;
        let first;
        let closure_2;
        let icon;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp2;
            imagepng = undefined;
            first = undefined;
            closure_2 = undefined;
            icon = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj8.launchImageLibraryAsync({ mediaType: "photo", selectionLimit: 1, includeBase64: true }), done: false };
            obj8 = ImagePickerDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          imagepng = value;
          let tmp9 = null;
          if (!imagepng.didCancel) {
            const assets = imagepng.assets;
            first = undefined;
            if (assets != null) {
              first = assets[0];
            }
            tmp9 = first;
          }
          first = tmp9;
          let base64;
          if (first != null) {
            base64 = first.base64;
          }
          if (null == base64) {
            c4 = 3;
            return { value: null, done: true };
          } else {
            let obj10;
            closure_2 = pickedIconType(first);
            if (null != closure_2) {
              const CONJURE_VIEWABLE_IMAGE_TYPES = closure_130_0(closure_130_2[10]).CONJURE_VIEWABLE_IMAGE_TYPES;
              if (!CONJURE_VIEWABLE_IMAGE_TYPES.has(closure_2)) {
                value = { error: intl.string(closure_130_1(closure_130_2[12]).TWrjpi) };
                intl = closure_130_0(closure_130_2[11]).intl;
                c4 = 3;
                const obj7 = { value, done: true };
                return obj7;
              }
            }
            let c0 = closure_2;
            if (closure_2 == null) {
              let str = "image/png";
              c0 = "image/png";
            }
            const _HermesInternal = HermesInternal;
            const str2 = ";base64,";
            let str3 = "data:";
            icon = "data:" + c0 + ";base64," + first.base64;
            let obj3 = closure_130_0(closure_130_2[13]);
            const dataUriFileSizeResult = obj3.dataUriFileSize(icon);
            if (dataUriFileSizeResult > closure_130_0(closure_130_2[14]).MAX_CONJURE_APP_ICON_BYTES) {
              const obj9 = { error: intl2.string(closure_130_1(closure_130_2[12]).ZTAAMc) };
              intl2 = closure_130_0(closure_130_2[11]).intl;
              obj10 = obj9;
            } else {
              obj10 = { icon };
            }
            c4 = 3;
            const obj11 = { value: obj10, done: true };
            return obj11;
          }
        }
      } catch (tmp39) {
        c4 = 3;
        throw tmp39;
      }
    }
  });
  return obj(...arguments);
};
let closure_3 = ["iconURL", "canRemove", "onIconChange", "previewName"];
const View = react_native.View;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
value = { tile: { width: 80, height: 80, padding: 0, alignItems: "center", justifyContent: "center", overflow: "hidden" }, tileEmpty: { borderStyle: "dashed" }, tileImage: { width: 80, height: 80 }, iconDetails: { flex: 1 }, previewCard: obj2, previewTile: size, previewImage: { width: 40, height: 40 }, previewText: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj3 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_12 = createStyles(value);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppIconRow(arg0) {
  let canRemove;
  let closure_1;
  let disabled;
  let iconURL;
  let intl;
  let intl5;
  let items;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj14;
  let onChange;
  let tmp7;
  let tmp = onChange;
  const obj = onChange(576);
  const cResult = obj.c(47);
  ({ iconURL, canRemove, disabled, onChange } = arg0);
  importDefault = tmp4;
  const tmp5 = closure_12();
  [tmp7, dependencyMap] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] === (undefined !== disabled && disabled)) {
    let tmp8;
    if (cResult[1] === onChange) {
      tmp8 = cResult[2];
    }
    let str = "subtle";
    if (null == iconURL) {
      str = "strong";
    }
    if (cResult[3] === tmp5.tile) {
      let tmp10;
      let tmp14;
      if (cResult[4] === (null == iconURL && tmp5.tileEmpty)) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === iconURL) {
        let tmp11;
        if (cResult[7] === tmp5.tileImage) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === (undefined !== disabled && disabled)) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === str) {
              if (cResult[12] === tmp10) {
                let tmp17;
                let tmp21;
                let tmp25;
                if (cResult[13] === tmp11) {
                  tmp17 = cResult[14];
                }
                const _Symbol = Symbol;
                const iconDetails = tmp5.iconDetails;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj2 = { variant: "text-sm/medium", color: "text-strong", children: intl.string(_modDef3849.M3q9QZ) };
                  const Text = tmp(5088).Text;
                  intl = tmp(1126).intl;
                  const tmp24 = closure_9(Text, obj2);
                  cResult[15] = tmp24;
                  tmp21 = tmp24;
                } else {
                  tmp21 = cResult[15];
                }
                let str3 = "text-muted";
                if (null != tmp7) {
                  str3 = "text-feedback-critical";
                }
                if (cResult[16] !== tmp7) {
                  let stringResult = tmp7;
                  if (tmp7 == null) {
                    const intl2 = tmp(1126).intl;
                    stringResult = intl2.string(_modDef3849.F6L3s4);
                  }
                  cResult[16] = tmp7;
                  cResult[17] = stringResult;
                  tmp25 = stringResult;
                } else {
                  tmp25 = cResult[17];
                }
                if (cResult[18] === str3) {
                  let tmp28;
                  let tmp34;
                  let tmp37;
                  let tmp41;
                  if (cResult[19] === tmp25) {
                    tmp28 = cResult[20];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp36 = closure_9(tmp(9401).UploadIcon, { size: "sm" });
                    cResult[21] = tmp36;
                    tmp34 = tmp36;
                  } else {
                    tmp34 = cResult[21];
                  }
                  if (cResult[22] !== iconURL) {
                    let iwCCor;
                    const intl3 = tmp(1126).intl;
                    const string = intl3.string;
                    if (null == iconURL) {
                      iwCCor = _modDef3849.WpXHIP;
                    } else {
                      iwCCor = _modDef3849.iwCCor;
                    }
                    const stringResult1 = string(iwCCor);
                    cResult[22] = iconURL;
                    cResult[23] = stringResult1;
                    tmp37 = stringResult1;
                  } else {
                    tmp37 = cResult[23];
                  }
                  if (cResult[24] !== iconURL) {
                    let stringResult2;
                    if (null != iconURL) {
                      const intl4 = tmp(1126).intl;
                      stringResult2 = intl4.string(_modDef3849["75j6Qp"]);
                    }
                    cResult[24] = iconURL;
                    cResult[25] = stringResult2;
                    tmp41 = stringResult2;
                  } else {
                    tmp41 = cResult[25];
                  }
                  if (cResult[26] === (undefined !== disabled && disabled)) {
                    if (cResult[27] === tmp8) {
                      if (cResult[28] === tmp37) {
                        let tmp44;
                        if (cResult[29] === tmp41) {
                          tmp44 = cResult[30];
                        }
                        if (cResult[31] === canRemove) {
                          if (cResult[32] === (undefined !== disabled && disabled)) {
                            let tmp47;
                            if (cResult[33] === onChange) {
                              tmp47 = cResult[34];
                            }
                            if (cResult[35] === tmp44) {
                              let tmp51;
                              if (cResult[36] === tmp47) {
                                tmp51 = cResult[37];
                              }
                              if (cResult[38] === tmp28) {
                                let tmp55;
                                if (cResult[39] === tmp51) {
                                  tmp55 = cResult[40];
                                }
                                if (cResult[41] === tmp5.iconDetails) {
                                  let tmp59;
                                  if (cResult[42] === tmp55) {
                                    tmp59 = cResult[43];
                                  }
                                  if (cResult[44] === tmp59) {
                                    let tmp63;
                                    if (cResult[45] === tmp17) {
                                      tmp63 = cResult[46];
                                    }
                                    return tmp63;
                                  }
                                  const obj3 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, align: "center", children: items };
                                  const Stack4 = tmp(5377).Stack;
                                  items = [tmp17, tmp59];
                                  const tmp66 = closure_10(Stack4, obj3);
                                  cResult[44] = tmp59;
                                  cResult[45] = tmp17;
                                  cResult[46] = tmp66;
                                  tmp63 = tmp66;
                                }
                                const obj4 = { style: iconDetails, children: tmp55 };
                                const tmp62 = closure_9(View, obj4);
                                cResult[41] = tmp5.iconDetails;
                                cResult[42] = tmp55;
                                cResult[43] = tmp62;
                                tmp59 = tmp62;
                              }
                              const obj5 = { spacing: nativeDefault.space.PX_8, align: "flex-start", children: items1 };
                              const Stack3 = tmp(5377).Stack;
                              items1 = [tmp28, tmp51];
                              const tmp58 = closure_10(Stack3, obj5);
                              cResult[38] = tmp28;
                              cResult[39] = tmp51;
                              cResult[40] = tmp58;
                              tmp55 = tmp58;
                            }
                            const obj6 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: items2 };
                            const Stack2 = tmp(5377).Stack;
                            items2 = [tmp44, tmp47];
                            const tmp54 = closure_10(Stack2, obj6);
                            cResult[35] = tmp44;
                            cResult[36] = tmp47;
                            cResult[37] = tmp54;
                            tmp51 = tmp54;
                          }
                        }
                        let tmp48 = null;
                        if (canRemove) {
                          const obj7 = {
                            size: "sm",
                            variant: "tertiary",
                            text: intl5.string(_modDef3849.gqtFOS),
                            disabled: undefined !== disabled && disabled,
                            onPress() {
                                                      dependencyMap(null);
                                                      onChange(null);
                                                    }
                          };
                          const Button = tmp(5379).Button;
                          intl5 = tmp(1126).intl;
                          tmp48 = closure_9(Button, obj7);
                        }
                        cResult[31] = canRemove;
                        cResult[32] = undefined !== disabled && disabled;
                        cResult[33] = onChange;
                        cResult[34] = tmp48;
                        tmp47 = tmp48;
                      }
                    }
                  }
                  const obj8 = { size: "sm", variant: "secondary", icon: tmp34, text: tmp37, accessibilityLabel: tmp41, disabled: undefined !== disabled && disabled, onPress: tmp8 };
                  const tmp46 = closure_9(tmp(5379).Button, obj8);
                  cResult[26] = undefined !== disabled && disabled;
                  cResult[27] = tmp8;
                  cResult[28] = tmp37;
                  cResult[29] = tmp41;
                  cResult[30] = tmp46;
                  tmp44 = tmp46;
                }
                const obj9 = { spacing: nativeDefault.space.PX_4, children: items3 };
                const Stack = tmp(5377).Stack;
                items3 = [tmp21, ];
                const obj10 = { accessibilityLiveRegion: "polite", children: closure_9(tmp(5088).Text, obj11) };
                obj11 = { variant: "text-xs/normal", color: str3, children: tmp25 };
                items3[1] = closure_9(View, obj10);
                const tmp33 = closure_10(Stack, obj9);
                cResult[18] = str3;
                cResult[19] = tmp25;
                cResult[20] = tmp33;
                tmp28 = tmp33;
              }
            }
          }
        }
        const obj12 = { variant: "secondary", border: str, radius: 16, style: tmp10, accessible: false, importantForAccessibility: "no-hide-descendants", disabled: undefined !== disabled && disabled, onPress: tmp8, children: tmp11 };
        const tmp19 = closure_9(tmp(6182).Card, obj12);
        cResult[9] = undefined !== disabled && disabled;
        cResult[10] = tmp8;
        cResult[11] = str;
        cResult[12] = tmp10;
        cResult[13] = tmp11;
        cResult[14] = tmp19;
        tmp17 = tmp19;
      }
      if (null != iconURL) {
        const obj13 = { source: obj14, style: tmp5.tileImage, resizeMode: "cover" };
        obj14 = { uri: iconURL };
        tmp14 = closure_9(FastImageDefault, obj13);
      } else {
        const obj15 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
        const ImagePlusIcon = tmp(17092).ImagePlusIcon;
        tmp14 = closure_9(ImagePlusIcon, obj15);
      }
      cResult[6] = iconURL;
      cResult[7] = tmp5.tileImage;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
    const items4 = [tmp5.tile, null == iconURL && tmp5.tileEmpty];
    cResult[3] = tmp5.tile;
    cResult[4] = null == iconURL && tmp5.tileEmpty;
    cResult[5] = items4;
    tmp10 = items4;
  }
  const fn = function t() {
    const tmp = closure_1;
    if (!tmp) {
      const promise = pickConjureAppIcon();
      const nextPromise = promise.then((error) => {
        if (null != error) {
          if ("error" in error) {
            closure_1_2(error.error);
          } else {
            closure_1_2(null);
            onChange(error.icon);
          }
        }
      });
      nextPromise.catch(() => {

      });
    }
  };
  cResult[0] = undefined !== disabled && disabled;
  cResult[1] = onChange;
  cResult[2] = fn;
  tmp8 = fn;
}) : (function ConjureAppIconRow(canRemove) {
  let Stack2;
  let _undefined;
  let c2;
  let disabled;
  let iconURL;
  let intl;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let iwCCor;
  let obj4;
  let obj7;
  let string;
  let stringResult;
  let stringResult1;
  let tmp3;
  let tmp9Result;
  ({ iconURL, disabled } = canRemove);
  canRemove = canRemove.canRemove;
  if (disabled === undefined) {
    disabled = false;
  }
  const onChange = canRemove.onChange;
  dependencyMap = undefined;
  let tmp = closure_12();
  [tmp3, c2] = _slicedToArray(react.useState(null), 2);
  const items = [disabled, onChange];
  const tmp2 = _slicedToArray(react.useState(null), 2);
  const callback = react.useCallback(() => {
    const tmp = disabled;
    if (!tmp) {
      const promise = pickConjureAppIcon();
      const nextPromise = promise.then((error) => {
        if (null != error) {
          if ("error" in error) {
            _undefined(error.error);
          } else {
            _undefined(null);
            onChange(error.icon);
          }
        }
      });
      nextPromise.catch(() => {

      });
    }
  }, items);
  const obj = { direction: "horizontal", spacing: onChange(587).space.PX_16, align: "center", children: items2 };
  const Stack = disabled(5377).Stack;
  let str = "subtle";
  const Card = disabled(6182).Card;
  if (null == iconURL) {
    str = "strong";
  }
  const obj2 = { variant: "secondary", border: str, radius: 16, style: items1, accessible: false, importantForAccessibility: "no-hide-descendants", disabled, onPress: callback, children: tmp9Result };
  items1 = [tmp.tile, null == iconURL && tmp.tileEmpty];
  if (null != iconURL) {
    const obj3 = { source: obj4, style: tmp.tileImage, resizeMode: "cover" };
    obj4 = { uri: iconURL };
    tmp9Result = tmp9(tmp8(6157), obj3);
  } else {
    const obj5 = { size: "md", color: onChange(587).colors.ICON_MUTED };
    const ImagePlusIcon = tmp6(17092).ImagePlusIcon;
    tmp9Result = tmp9(ImagePlusIcon, obj5);
  }
  items2 = [closure_9(Card, obj2), ];
  const obj6 = { style: tmp.iconDetails, children: closure_10(Stack2, obj7) };
  obj7 = { spacing: onChange(587).space.PX_8, align: "flex-start", children: items4 };
  Stack2 = tmp6(5377).Stack;
  const obj8 = { spacing: onChange(587).space.PX_4, children: items3 };
  const Stack3 = tmp6(5377).Stack;
  const obj9 = { variant: "text-sm/medium", color: "text-strong", children: intl.string(onChange(3849).M3q9QZ) };
  const Text = tmp6(5088).Text;
  intl = tmp6(1126).intl;
  items3 = [closure_9(Text, obj9), ];
  let str2 = "text-muted";
  const Text2 = tmp6(5088).Text;
  if (null != stringResult) {
    str2 = "text-feedback-critical";
  }
  const obj10 = { variant: "text-xs/normal", color: str2, children: stringResult };
  if (stringResult == null) {
    const intl2 = tmp6(1126).intl;
    stringResult = intl2.string(onChange(3849).F6L3s4);
  }
  const obj11 = { accessibilityLiveRegion: "polite", children: closure_9(Text2, obj10) };
  items3[1] = closure_9(View, obj11);
  items4 = [closure_10(Stack3, obj8), ];
  const obj12 = { direction: "horizontal", spacing: onChange(587).space.PX_8, align: "center", children: items5 };
  const Stack4 = tmp6(5377).Stack;
  const obj13 = { size: "sm", variant: "secondary", icon: closure_9(disabled(9401).UploadIcon, { size: "sm" }), text: string(iwCCor), accessibilityLabel: stringResult1, disabled, onPress: callback };
  const Button = tmp6(5379).Button;
  const intl3 = tmp6(1126).intl;
  string = intl3.string;
  if (null == iconURL) {
    iwCCor = tmp8(3849).WpXHIP;
  } else {
    iwCCor = tmp8(3849).iwCCor;
  }
  stringResult1 = undefined;
  if (null != iconURL) {
    const intl4 = tmp6(1126).intl;
    stringResult1 = intl4.string(tmp8(3849)["75j6Qp"]);
  }
  items5 = [closure_9(Button, obj13), ];
  let tmp9Result2 = null;
  if (canRemove) {
    const obj14 = {
      size: "sm",
      variant: "tertiary",
      text: intl5.string(onChange(3849).gqtFOS),
      disabled,
      onPress() {
          _undefined(null);
          onChange(null);
        }
    };
    const Button2 = tmp6(5379).Button;
    intl5 = tmp6(1126).intl;
    tmp9Result2 = tmp9(Button2, obj14);
  }
  items5[1] = tmp9Result2;
  items4[1] = closure_10(Stack4, obj12);
  items2[1] = closure_9(View, obj6);
  return closure_10(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppIdentityTextFields(arg0) {
  let description;
  let disabled;
  let first;
  let items;
  let name;
  let nameError;
  let onDescriptionChange;
  let onNameChange;
  const obj = react2;
  const cResult = obj.c(15);
  ({ name, nameError, onNameChange, description, onDescriptionChange, disabled } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef3849.GWBCF9);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined !== disabled && disabled)) {
    if (cResult[2] === name) {
      if (cResult[3] === onNameChange) {
        let tmp8;
        let tmp11;
        let tmp10;
        if (cResult[4] === nameError) {
          tmp8 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(_modDef3849.ynaGa1);
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(_modDef3849["I+3UTL"]);
          cResult[6] = stringResult1;
          cResult[7] = stringResult2;
          tmp11 = stringResult2;
          tmp10 = stringResult1;
        } else {
          tmp10 = cResult[6];
          tmp11 = cResult[7];
        }
        if (cResult[8] === description) {
          if (cResult[9] === (undefined !== disabled && disabled)) {
            let tmp15;
            if (cResult[10] === onDescriptionChange) {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp8) {
              let tmp18;
              if (cResult[13] === tmp15) {
                tmp18 = cResult[14];
              }
              return tmp18;
            }
            const obj2 = { children: items };
            items = [tmp8, tmp15];
            const tmp21 = authStore(unpackModuleId, obj2);
            cResult[12] = tmp8;
            cResult[13] = tmp15;
            cResult[14] = tmp21;
            tmp18 = tmp21;
          }
        }
        const obj3 = { label: tmp10, placeholder: tmp11, value: description, onChange: onDescriptionChange, maxLength: ConjureProjectTypes.MAX_APP_DESCRIPTION_LENGTH, disabled: undefined !== disabled && disabled };
        const TextArea = tmp(6774).TextArea;
        const tmp17 = React4(TextArea, obj3);
        cResult[8] = description;
        cResult[9] = undefined !== disabled && disabled;
        cResult[10] = onDescriptionChange;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      }
    }
  }
  const obj4 = { label: first, value: name, onChange: onNameChange, maxLength: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH, disabled: undefined !== disabled && disabled, errorMessage: nameError };
  const TextInput = tmp(6286).TextInput;
  const tmp9 = React4(TextInput, obj4);
  cResult[1] = undefined !== disabled && disabled;
  cResult[2] = name;
  cResult[3] = onNameChange;
  cResult[4] = nameError;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : (function ConjureAppIdentityTextFields(arg0) {
  let description;
  let disabled;
  let intl;
  let intl2;
  let intl3;
  let items;
  let name;
  let nameError;
  let onDescriptionChange;
  let onNameChange;
  ({ nameError, disabled } = arg0);
  ({ name, onNameChange, description, onDescriptionChange } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const obj = { label: intl.string(_modDef3849.GWBCF9), value: name, onChange: onNameChange, maxLength: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH, disabled, errorMessage: nameError };
  const TextInput = TextInput_TextInput.TextInput;
  intl = intl6.intl;
  const obj2 = { children: items };
  items = [React4(TextInput, obj), ];
  const obj3 = { label: intl2.string(_modDef3849.ynaGa1), placeholder: intl3.string(_modDef3849["I+3UTL"]), value: description, onChange: onDescriptionChange, maxLength: ConjureProjectTypes.MAX_APP_DESCRIPTION_LENGTH, disabled };
  const TextArea = tmp4(6774).TextArea;
  intl2 = tmp4(1126).intl;
  intl3 = tmp4(1126).intl;
  items[1] = React4(TextArea, obj3);
  return authStore(unpackModuleId, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppPreviewCard(arg0) {
  let description;
  let first;
  let iconURL;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let name;
  let obj11;
  let tmp11;
  let tmpResult;
  const obj = react2;
  const cResult = obj.c(26);
  ({ iconURL, name, description } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(_modDef3849.KhR80V) };
    const Text = tmp(5088).Text;
    intl = tmp(1126).intl;
    const tmp8 = React4(Text, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === iconURL) {
    if (cResult[2] === name) {
      let tmp9;
      if (cResult[3] === tmp4.previewImage) {
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp4.previewTile) {
        let tmp14;
        let tmp18;
        let tmp21;
        let tmp25;
        let tmp30;
        if (cResult[6] === tmp9) {
          tmp14 = cResult[7];
        }
        if (cResult[8] !== name) {
          const obj3 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: name };
          const tmp20 = React4(Text_Text.Text, obj3);
          cResult[8] = name;
          cResult[9] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp24 = React4(BotTagDefault, {});
          cResult[10] = tmp24;
          tmp21 = tmp24;
        } else {
          tmp21 = cResult[10];
        }
        if (cResult[11] !== tmp18) {
          const obj4 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: items };
          const Stack = tmp(5377).Stack;
          items = [tmp18, tmp21];
          const tmp28 = authStore(Stack, obj4);
          cResult[11] = tmp18;
          cResult[12] = tmp28;
          tmp25 = tmp28;
        } else {
          tmp25 = cResult[12];
        }
        let str2 = "text-default";
        if ("" === description) {
          str2 = "text-muted";
        }
        if (cResult[13] !== description) {
          let stringResult = description;
          if ("" === description) {
            const intl2 = tmp(1126).intl;
            stringResult = intl2.string(_modDef3849.yQ158z);
          }
          cResult[13] = description;
          cResult[14] = stringResult;
          tmp30 = stringResult;
        } else {
          tmp30 = cResult[14];
        }
        if (cResult[15] === str2) {
          let tmp33;
          if (cResult[16] === tmp30) {
            tmp33 = cResult[17];
          }
          if (cResult[18] === tmp4.previewText) {
            if (cResult[19] === tmp25) {
              let tmp36;
              if (cResult[20] === tmp33) {
                tmp36 = cResult[21];
              }
              if (cResult[22] === tmp4.previewCard) {
                if (cResult[23] === tmp36) {
                  let tmp40;
                  if (cResult[24] === tmp14) {
                    tmp40 = cResult[25];
                  }
                  return tmp40;
                }
              }
              const obj5 = { spacing: nativeDefault.space.PX_8, children: items1 };
              const Stack2 = tmp(5377).Stack;
              items1 = [first, ];
              const obj6 = { border: "subtle", style: tmp4.previewCard, accessibilityLiveRegion: "polite", children: items2 };
              items2 = [tmp14, tmp36];
              items1[1] = authStore(Card_Card.Card, obj6);
              const tmp43 = authStore(Stack2, obj5);
              cResult[22] = tmp4.previewCard;
              cResult[23] = tmp36;
              cResult[24] = tmp14;
              cResult[25] = tmp43;
              tmp40 = tmp43;
            }
          }
          const obj7 = { style: tmp4.previewText, children: items3 };
          items3 = [tmp25, tmp33];
          const tmp39 = authStore(View, obj7);
          cResult[18] = tmp4.previewText;
          cResult[19] = tmp25;
          cResult[20] = tmp33;
          cResult[21] = tmp39;
          tmp36 = tmp39;
        }
        const obj8 = { variant: "text-sm/normal", color: str2, lineClamp: 2, children: tmp30 };
        const tmp35 = React4(Text_Text.Text, obj8);
        cResult[15] = str2;
        cResult[16] = tmp30;
        cResult[17] = tmp35;
        tmp33 = tmp35;
      }
      const obj9 = { style: tmp4.previewTile, children: tmp9 };
      const tmp17 = React4(View, obj9);
      cResult[5] = tmp4.previewTile;
      cResult[6] = tmp9;
      cResult[7] = tmp17;
      tmp14 = tmp17;
    }
  }
  if (null != iconURL) {
    const obj10 = { source: obj11, style: tmp4.previewImage, resizeMode: "cover" };
    obj11 = { uri: iconURL };
    tmp11 = React4(FastImageDefault, obj10);
  } else {
    const obj12 = { variant: "text-sm/semibold", color: "text-muted", children: tmpResult.getAcronym(name) };
    const Text2 = tmp(5088).Text;
    tmpResult = StringUtils;
    tmp11 = React4(Text2, obj12);
  }
  cResult[1] = iconURL;
  cResult[2] = name;
  cResult[3] = tmp4.previewImage;
  cResult[4] = tmp11;
  tmp9 = tmp11;
}) : (function ConjureAppPreviewCard(arg0) {
  let description;
  let iconURL;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let name;
  let obj6;
  let tmp3Result;
  let tmp6Result;
  ({ iconURL, name, description } = arg0);
  const tmp = closure_12();
  const obj = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack = Stack_Stack.Stack;
  const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(_modDef3849.KhR80V) };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  items = [React4(Text, obj2), ];
  const obj3 = { border: "subtle", style: tmp.previewCard, accessibilityLiveRegion: "polite", children: items1 };
  const obj4 = { style: tmp.previewTile, children: tmp6Result };
  const Card = Card_Card.Card;
  if (null != iconURL) {
    const obj5 = { source: obj6, style: tmp.previewImage, resizeMode: "cover" };
    obj6 = { uri: iconURL };
    tmp6Result = tmp6(tmp5(6157), obj5);
  } else {
    const obj7 = { variant: "text-sm/semibold", color: "text-muted", children: tmp3Result.getAcronym(name) };
    const Text2 = tmp3(5088).Text;
    tmp3Result = StringUtils;
    tmp6Result = tmp6(Text2, obj7);
  }
  items1 = [React4(View, obj4), ];
  const obj8 = { style: tmp.previewText, children: items3 };
  const obj9 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: items2 };
  const Stack2 = tmp3(5377).Stack;
  items2 = [React4(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: name }), React4(BotTagDefault, {})];
  items3 = [authStore(Stack2, obj9), ];
  let str = "text-default";
  const Text3 = tmp3(5088).Text;
  if ("" === description) {
    str = "text-muted";
  }
  const obj10 = { variant: "text-sm/normal", color: str, lineClamp: 2, children: description };
  if ("" === description) {
    const intl2 = tmp3(1126).intl;
    description = intl2.string(tmp5(3849).yQ158z);
  }
  items3[1] = React4(Text3, obj10);
  items1[1] = authStore(View, obj8);
  items[1] = authStore(Card, obj3);
  return authStore(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppIdentitySection(arg0) {
  let canRemove;
  let iconURL;
  let items;
  let onIconChange;
  let previewName;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(23);
  if (cResult[0] !== arg0) {
    ({ iconURL, canRemove, onIconChange, previewName } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = canRemove;
    cResult[2] = tmp9;
    cResult[3] = iconURL;
    cResult[4] = onIconChange;
    cResult[5] = previewName;
    tmp6 = previewName;
    tmp5 = onIconChange;
    tmp4 = iconURL;
    tmp3 = tmp9;
    tmp2 = canRemove;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
    tmp5 = cResult[4];
    tmp6 = cResult[5];
  }
  if (cResult[6] === tmp2) {
    if (cResult[7] === tmp3.disabled) {
      if (cResult[8] === tmp4) {
        let tmp10;
        let tmp12;
        let tmp19;
        if (cResult[9] === tmp5) {
          tmp10 = cResult[10];
        }
        if (cResult[11] !== tmp3) {
          const obj2 = {};
          const merged = Object.assign(tmp3);
          const tmp18 = React4(closure_16, obj2);
          cResult[11] = tmp3;
          cResult[12] = tmp18;
          tmp12 = tmp18;
        } else {
          tmp12 = cResult[12];
        }
        if (cResult[13] !== tmp3.description) {
          const str = tmp3.description;
          const trimmed = str.trim();
          cResult[13] = tmp3.description;
          cResult[14] = trimmed;
          tmp19 = trimmed;
        } else {
          tmp19 = cResult[14];
        }
        if (cResult[15] === tmp4) {
          if (cResult[16] === tmp6) {
            let tmp21;
            if (cResult[17] === tmp19) {
              tmp21 = cResult[18];
            }
            if (cResult[19] === tmp10) {
              if (cResult[20] === tmp12) {
                let tmp25;
                if (cResult[21] === tmp21) {
                  tmp25 = cResult[22];
                }
                return tmp25;
              }
            }
            const obj3 = { children: items };
            items = [tmp10, tmp12, tmp21];
            const tmp28 = authStore(unpackModuleId, obj3);
            cResult[19] = tmp10;
            cResult[20] = tmp12;
            cResult[21] = tmp21;
            cResult[22] = tmp28;
            tmp25 = tmp28;
          }
        }
        const obj4 = { iconURL: tmp4, name: tmp6, description: tmp19 };
        const tmp24 = React4(closure_17, obj4);
        cResult[15] = tmp4;
        cResult[16] = tmp6;
        cResult[17] = tmp19;
        cResult[18] = tmp24;
        tmp21 = tmp24;
      }
    }
  }
  const obj5 = { iconURL: tmp4, canRemove: tmp2, disabled: tmp3.disabled, onChange: tmp5 };
  const tmp11 = React4(closure_15, obj5);
  cResult[6] = tmp2;
  cResult[7] = tmp3.disabled;
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = tmp11;
  tmp10 = tmp11;
}) : (function ConjureAppIdentitySection(iconURL) {
  let canRemove;
  let items;
  let onIconChange;
  let previewName;
  let str;
  iconURL = iconURL.iconURL;
  ({ canRemove, onIconChange, previewName } = iconURL);
  const merged = Object.assign(iconURL, Object.assign({ iconURL: 0, canRemove: 0, onIconChange: 0, previewName: 0 }));
  const obj = { children: items };
  items = [, , ];
  const obj2 = { iconURL, canRemove, disabled: merged.disabled, onChange: onIconChange };
  items[0] = React4(closure_15, obj2);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  items[1] = React4(closure_16, obj3);
  const obj4 = { iconURL, name: previewName, description: str.trim() };
  str = merged.description;
  items[2] = React4(closure_17, obj4);
  return authStore(unpackModuleId, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/identity/native/ConjureAppIdentity.tsx");

export const ConjureAppIdentitySection = tmp4;
