// Module ID: 11813
// Function ID: 11814
// Name: ConjureAppIdentity
// Dependencies: [32, 5, 19, 17, 21, 587, 4971, 8146, 8155, 11759, 1128, 3830, 1496, 11809, 558, 576, 11814, 5669, 6905, 11816, 7008, 6774, 5234, 5977, 7180, 2]

// Module 11813 (ConjureAppIdentity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ImagePickerDefault from "ImagePicker" /* 8155 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3, c4, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
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
        const obj = imagepng(closure_1_2[7]);
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
        return { value: "IconComponent", done: "+352" };
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
              const CONJURE_VIEWABLE_IMAGE_TYPES = closure_130_0(closure_130_2[9]).CONJURE_VIEWABLE_IMAGE_TYPES;
              if (!CONJURE_VIEWABLE_IMAGE_TYPES.has(closure_2)) {
                value = { error: intl.string(closure_130_1(closure_130_2[11]).TWrjpi) };
                intl = closure_130_0(closure_130_2[10]).intl;
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
            let obj3 = closure_130_0(closure_130_2[12]);
            const dataUriFileSizeResult = obj3.dataUriFileSize(icon);
            if (dataUriFileSizeResult > closure_130_0(closure_130_2[13]).MAX_CONJURE_APP_ICON_BYTES) {
              const obj9 = { error: intl2.string(closure_130_1(closure_130_2[11]).ZTAAMc) };
              intl2 = closure_130_0(closure_130_2[10]).intl;
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
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
const PX_4 = nativeDefault.space.PX_4;
let createStyles = createStyles_mod;
value = { nameRow: obj2, tileFrame: { alignSelf: "flex-start" }, tile: { padding: 0, alignItems: "center", justifyContent: "center", overflow: "hidden" }, tileEmpty: { borderStyle: "dashed" }, tileImage: { width: "100%", height: "100%" }, editIcon: rect, nameField: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: -nativeDefault.space.PX_4, right: -nativeDefault.space.PX_4, pointerEvents: "none" };
let closure_11 = createStyles(value);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppIconTile(onError) {
  let disabled;
  let iconURL;
  let items;
  let obj7;
  let onChange;
  let radius;
  const tmp = onChange;
  let obj = onChange(576);
  const cResult = obj.c(31);
  ({ iconURL, size, radius, disabled, onChange } = onError);
  onError = onError.onError;
  let num = 16;
  if (undefined !== radius) {
    num = radius;
  }
  const tmp4 = closure_11();
  if (cResult[0] === onChange) {
    let tmp6;
    let tmp7;
    if (cResult[1] === onError) {
      tmp6 = cResult[2];
    }
    let str = "subtle";
    const tileFrame = tmp4.tileFrame;
    if (null == iconURL) {
      str = "strong";
    }
    if (cResult[3] !== size) {
      const size1 = { width: size, height: size };
      cResult[3] = size;
      cResult[4] = size1;
      tmp7 = size1;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.tile) {
      if (cResult[6] === tmp7) {
        let tmp9;
        let tmp10;
        let tmp13Result;
        if (cResult[7] === (null == iconURL && tmp4.tileEmpty)) {
          tmp9 = cResult[8];
        }
        if (cResult[9] !== (null == iconURL)) {
          const intl = tmp(1128).intl;
          const string = intl.string;
          const t = tmp(1128).t;
          const stringResult = string(null == iconURL ? t["MsUY/S"] : t.VATxfe);
          cResult[9] = null == iconURL;
          cResult[10] = stringResult;
          tmp10 = stringResult;
        } else {
          tmp10 = cResult[10];
        }
        if (cResult[11] === null == iconURL) {
          if (cResult[12] === iconURL) {
            let tmp12;
            if (cResult[13] === tmp4.tileImage) {
              tmp12 = cResult[14];
            }
            if (cResult[15] === disabled) {
              if (cResult[16] === tmp6) {
                if (cResult[17] === num) {
                  if (cResult[18] === str) {
                    if (cResult[19] === tmp9) {
                      if (cResult[20] === tmp10) {
                        let tmp17;
                        if (cResult[21] === tmp12) {
                          tmp17 = cResult[22];
                        }
                        if (cResult[23] === disabled) {
                          if (cResult[24] === null == iconURL) {
                            let tmp20;
                            if (cResult[25] === tmp4.editIcon) {
                              tmp20 = cResult[26];
                            }
                            if (cResult[27] === tmp4.tileFrame) {
                              if (cResult[28] === tmp17) {
                                let tmp24;
                                if (cResult[29] === tmp20) {
                                  tmp24 = cResult[30];
                                }
                                return tmp24;
                              }
                            }
                            let obj2 = { style: tileFrame, children: items };
                            items = [tmp17, tmp20];
                            const tmp27 = closure_8(View, obj2);
                            cResult[27] = tmp4.tileFrame;
                            cResult[28] = tmp17;
                            cResult[29] = tmp20;
                            cResult[30] = tmp27;
                            tmp24 = tmp27;
                          }
                        }
                        let tmp21 = null;
                        if (null != iconURL) {
                          tmp21 = null;
                          if (!disabled) {
                            let obj3 = { style: tmp4.editIcon };
                            tmp21 = closure_7(onError(11816), obj3);
                          }
                        }
                        cResult[23] = disabled;
                        cResult[24] = null == iconURL;
                        cResult[25] = tmp4.editIcon;
                        cResult[26] = tmp21;
                        tmp20 = tmp21;
                      }
                    }
                  }
                }
              }
            }
            let obj4 = { variant: "secondary", border: str, radius: num, style: tmp9, accessibilityLabel: tmp10, disabled, onPress: tmp6, children: tmp12 };
            const tmp19 = closure_7(tmp(6905).Card, obj4);
            cResult[15] = disabled;
            cResult[16] = tmp6;
            cResult[17] = num;
            cResult[18] = str;
            cResult[19] = tmp9;
            cResult[20] = tmp10;
            cResult[21] = tmp12;
            cResult[22] = tmp19;
            tmp17 = tmp19;
          }
        }
        if (null == iconURL) {
          const obj5 = { size: "md", color: onError(587).colors.ICON_MUTED };
          const ImagePlusIcon = tmp(11814).ImagePlusIcon;
          tmp13Result = tmp13(ImagePlusIcon, obj5);
        } else {
          const obj6 = { source: obj7, style: tmp4.tileImage, resizeMode: "cover" };
          obj7 = { uri: iconURL };
          tmp13Result = tmp13(onError(5669), obj6);
        }
        cResult[11] = null == iconURL;
        cResult[12] = iconURL;
        cResult[13] = tmp4.tileImage;
        cResult[14] = tmp13Result;
        tmp12 = tmp13Result;
      }
    }
    const items1 = [tmp4.tile, tmp7, tmp8];
    cResult[5] = tmp4.tile;
    cResult[6] = tmp7;
    cResult[7] = null == iconURL && tmp4.tileEmpty;
    cResult[8] = items1;
    tmp9 = items1;
  }
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      let c2;
      try {
        let closure_1;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp;
            closure_0 = undefined;
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj4 = { value: pickConjureAppIcon(), done: false };
            return obj4;
          }
        } else if (1 === c3) {
          c2 = 0;
          c4 = 3;
          return { value: "IconComponent", done: "+352" };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          c2 = 0;
          if (null != closure_0) {
            if ("error" in closure_0) {
              closure_1(closure_0.error);
            } else {
              closure_1(null);
              closure_0(closure_0.icon);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: "+352" };
        }
      } catch (tmp19) {
        if (0 === c2) {
          c4 = 3;
          throw tmp19;
        } else {
          c3 = 1;
        }
      }
    }
  });
  function t2() {
    return closure_0(...arguments);
  }
  cResult[0] = onChange;
  cResult[1] = onError;
  cResult[2] = t2;
  tmp6 = t2;
}) : (function ConjureAppIconTile(onError) {
  let disabled;
  let iconURL;
  let items1;
  let items2;
  let obj5;
  let onChange;
  let radius;
  let string;
  let t;
  let tmp6Result;
  let tmp9;
  ({ iconURL, size, radius } = onError);
  if (radius === undefined) {
    radius = 16;
  }
  ({ disabled, onChange } = onError);
  onError = onError.onError;
  const tmp = closure_11();
  const items = [onChange, onError];
  let obj = { style: tmp.tileFrame, children: items2 };
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      let c2;
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            onChange = undefined;
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj4 = { value: pickConjureAppIcon(), done: false };
            return obj4;
          }
        } else if (1 === c3) {
          c2 = 0;
          c4 = 3;
          return { value: "IconComponent", done: "+352" };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          onChange = value;
          c2 = 0;
          if (null != onChange) {
            if ("error" in onChange) {
              closure_129_1(onChange.error);
            } else {
              closure_129_1(null);
              closure_129_0(onChange.icon);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: "+352" };
        }
      } catch (tmp19) {
        if (0 === c2) {
          c4 = 3;
          throw tmp19;
        } else {
          c3 = 1;
        }
      }
    }
  }), items);
  const tmp4 = closure_8;
  let str = "subtle";
  const Card = onChange(6905).Card;
  const tmp5 = View;
  if (null == iconURL) {
    str = "strong";
  }
  let obj2 = { variant: "secondary", border: str, radius, style: items1, accessibilityLabel: string(tmp2 ? t["MsUY/S"] : t.VATxfe), disabled, onPress: callback, children: tmp6Result };
  items1 = [tmp.tile, { width: size, height: size }, tmp2 && tmp.tileEmpty];
  const intl = tmp7(1128).intl;
  string = intl.string;
  t = tmp7(1128).t;
  if (null == iconURL) {
    let obj3 = { size: "md", color: onError(587).colors.ICON_MUTED };
    const ImagePlusIcon = tmp7(11814).ImagePlusIcon;
    tmp6Result = tmp6(ImagePlusIcon, obj3);
    tmp9 = onError;
  } else {
    tmp9 = onError;
    let obj4 = { source: obj5, style: tmp.tileImage, resizeMode: "cover" };
    obj5 = { uri: iconURL };
    tmp6Result = tmp6(onError(5669), obj4);
  }
  items2 = [tmp6(Card, obj2), ];
  let tmp6Result2 = null;
  if (null != iconURL) {
    tmp6Result2 = null;
    if (!disabled) {
      const obj6 = { style: tmp.editIcon };
      tmp6Result2 = tmp6(tmp9(11816), obj6);
    }
  }
  items2[1] = tmp6Result2;
  return tmp4(tmp5, obj);
});
let closure_14 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppIdentitySection(arg0) {
  let description;
  let disabled;
  let first;
  let iconURL;
  let items;
  let items1;
  let items2;
  let name;
  let nameError;
  let obj3;
  let onDescriptionChange;
  let onIconChange;
  let onNameChange;
  let tmp10;
  let tmp11;
  let tmp8;
  const obj = nameError(576);
  const cResult = obj.c(35);
  ({ iconURL, onIconChange, name, nameError } = arg0);
  ({ onNameChange, description, onDescriptionChange, disabled } = arg0);
  const tmp5 = closure_11();
  [first, tmp8] = react.useState(null);
  [tmp10, importDefault] = react.useState(80);
  _slicedToArray(react.useState(80), 2);
  if (cResult[0] !== nameError) {
    const fn = function c(nativeEvent) {
      if (null == nameError) {
        const _Math = Math;
        importDefault(Math.round(nativeEvent.nativeEvent.layout.height - PX_4));
      }
    };
    cResult[0] = nameError;
    cResult[1] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] === (undefined !== disabled && disabled)) {
    if (cResult[3] === iconURL) {
      if (cResult[4] === onIconChange) {
        let tmp13;
        let tmp16;
        if (cResult[5] === tmp10) {
          tmp13 = cResult[6];
        }
        const _Symbol = Symbol;
        const nameField = tmp5.nameField;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1128).intl;
          const stringResult = intl.string(_modDef3830.GWBCF9);
          cResult[7] = stringResult;
          tmp16 = stringResult;
        } else {
          tmp16 = cResult[7];
        }
        if (cResult[8] === (undefined !== disabled && disabled)) {
          if (cResult[9] === name) {
            if (cResult[10] === onNameChange) {
              let tmp19;
              if (cResult[11] === nameError) {
                tmp19 = cResult[12];
              }
              if (cResult[13] === tmp11) {
                if (cResult[14] === tmp5.nameField) {
                  let tmp22;
                  if (cResult[15] === tmp19) {
                    tmp22 = cResult[16];
                  }
                  if (cResult[17] === tmp5.nameRow) {
                    if (cResult[18] === tmp13) {
                      let tmp26;
                      let tmp30;
                      if (cResult[19] === tmp22) {
                        tmp26 = cResult[20];
                      }
                      if (cResult[21] !== first) {
                        let tmp31 = null;
                        if (null != first) {
                          const obj2 = { accessibilityLiveRegion: "polite", children: closure_7(nameError(5234).Text, obj3) };
                          obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: first };
                          tmp31 = closure_7(View, obj2);
                        }
                        cResult[21] = first;
                        cResult[22] = tmp31;
                        tmp30 = tmp31;
                      } else {
                        tmp30 = cResult[22];
                      }
                      if (cResult[23] === tmp26) {
                        let tmp34;
                        let tmp39;
                        let tmp38;
                        if (cResult[24] === tmp30) {
                          tmp34 = cResult[25];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = tmp(1128).intl;
                          const stringResult1 = intl2.string(_modDef3830.ynaGa1);
                          const intl3 = tmp(1128).intl;
                          const stringResult2 = intl3.string(_modDef3830["I+3UTL"]);
                          cResult[26] = stringResult1;
                          cResult[27] = stringResult2;
                          tmp39 = stringResult2;
                          tmp38 = stringResult1;
                        } else {
                          tmp38 = cResult[26];
                          tmp39 = cResult[27];
                        }
                        if (cResult[28] === description) {
                          if (cResult[29] === (undefined !== disabled && disabled)) {
                            let tmp43;
                            if (cResult[30] === onDescriptionChange) {
                              tmp43 = cResult[31];
                            }
                            if (cResult[32] === tmp34) {
                              let tmp46;
                              if (cResult[33] === tmp43) {
                                tmp46 = cResult[34];
                              }
                              return tmp46;
                            }
                            const obj4 = { children: items };
                            items = [tmp34, tmp43];
                            const tmp49 = closure_8(closure_9, obj4);
                            cResult[32] = tmp34;
                            cResult[33] = tmp43;
                            cResult[34] = tmp49;
                            tmp46 = tmp49;
                          }
                        }
                        const obj5 = { label: tmp38, placeholder: tmp39, value: description, onChange: onDescriptionChange, maxLength: nameError(6774).MAX_APP_DESCRIPTION_LENGTH, disabled: undefined !== disabled && disabled };
                        const TextArea = tmp(7180).TextArea;
                        const tmp45 = closure_7(TextArea, obj5);
                        cResult[28] = description;
                        cResult[29] = undefined !== disabled && disabled;
                        cResult[30] = onDescriptionChange;
                        cResult[31] = tmp45;
                        tmp43 = tmp45;
                      }
                      const obj6 = { spacing: nativeDefault.space.PX_8, children: items1 };
                      const Stack = tmp(5977).Stack;
                      items1 = [tmp26, tmp30];
                      const tmp37 = closure_8(Stack, obj6);
                      cResult[23] = tmp26;
                      cResult[24] = tmp30;
                      cResult[25] = tmp37;
                      tmp34 = tmp37;
                    }
                  }
                  const obj7 = { style: tmp12, children: items2 };
                  items2 = [tmp13, tmp22];
                  const tmp29 = closure_8(View, obj7);
                  cResult[17] = tmp5.nameRow;
                  cResult[18] = tmp13;
                  cResult[19] = tmp22;
                  cResult[20] = tmp29;
                  tmp26 = tmp29;
                }
              }
              const obj8 = { style: nameField, onLayout: tmp11, children: tmp19 };
              const tmp25 = closure_7(View, obj8);
              cResult[13] = tmp11;
              cResult[14] = tmp5.nameField;
              cResult[15] = tmp19;
              cResult[16] = tmp25;
              tmp22 = tmp25;
            }
          }
        }
        const obj9 = { label: tmp16, value: name, onChange: onNameChange, maxLength: nameError(6774).MAX_PROJECT_NAME_LENGTH, disabled: undefined !== disabled && disabled, errorMessage: nameError };
        const TextInput = tmp(7008).TextInput;
        const tmp21 = closure_7(TextInput, obj9);
        cResult[8] = undefined !== disabled && disabled;
        cResult[9] = name;
        cResult[10] = onNameChange;
        cResult[11] = nameError;
        cResult[12] = tmp21;
        tmp19 = tmp21;
      }
    }
  }
  const tmp14 = closure_7(closure_14, { iconURL, size: tmp10, disabled: undefined !== disabled && disabled, onChange: onIconChange, onError: tmp8 });
  cResult[2] = undefined !== disabled && disabled;
  cResult[3] = iconURL;
  cResult[4] = onIconChange;
  cResult[5] = tmp10;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : (function ConjureAppIdentitySection(nameError) {
  let TextInput;
  let closure_1;
  let description;
  let first;
  let first1;
  let iconURL;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let name;
  let obj4;
  let obj6;
  let onDescriptionChange;
  let onIconChange;
  let onNameChange;
  let tmp4;
  nameError = nameError.nameError;
  let flag = nameError.disabled;
  ({ iconURL, onIconChange, name, onNameChange, description, onDescriptionChange } = nameError);
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  const tmp = closure_11();
  [first, tmp4] = react.useState(null);
  [first1, importDefault] = react.useState(80);
  const items = [nameError];
  const callback = react.useCallback((nativeEvent) => {
    if (null == nameError) {
      const _Math = Math;
      closure_1(Math.round(nativeEvent.nativeEvent.layout.height - PX_4));
    }
  }, items);
  const obj = { spacing: nativeDefault.space.PX_8, children: items2 };
  const Stack = nameError(5977).Stack;
  const obj2 = { style: tmp.nameRow, children: items1 };
  items1 = [closure_7(closure_14, { iconURL, size: first1, disabled: flag, onChange: onIconChange, onError: tmp4 }), ];
  const obj3 = { style: tmp.nameField, onLayout: callback, children: closure_7(TextInput, obj4) };
  obj4 = { label: intl.string(_modDef3830.GWBCF9), value: name, onChange: onNameChange, maxLength: nameError(6774).MAX_PROJECT_NAME_LENGTH, disabled: flag, errorMessage: nameError };
  TextInput = nameError(7008).TextInput;
  intl = nameError(1128).intl;
  items1[1] = closure_7(View, obj3);
  items2 = [closure_8(View, obj2), ];
  let tmp14Result = null;
  const tmp9 = closure_9;
  if (null != first) {
    const obj5 = { accessibilityLiveRegion: "polite", children: closure_7(nameError(5234).Text, obj6) };
    obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: first };
    tmp14Result = tmp14(tmp13, obj5);
  }
  const obj7 = { children: items3 };
  items2[1] = tmp14Result;
  items3 = [closure_8(Stack, obj), ];
  const obj8 = { label: intl2.string(_modDef3830.ynaGa1), placeholder: intl3.string(_modDef3830["I+3UTL"]), value: description, onChange: onDescriptionChange, maxLength: nameError(6774).MAX_APP_DESCRIPTION_LENGTH, disabled: flag };
  const TextArea = tmp10(7180).TextArea;
  intl2 = tmp10(1128).intl;
  intl3 = tmp10(1128).intl;
  items3[1] = closure_7(TextArea, obj8);
  return closure_8(tmp9, obj7);
});
const result = size.fileFinishedImporting("modules/conjure/identity/native/ConjureAppIdentity.tsx");

export const ConjureAppIconTile = tmp4;
export const ConjureAppIdentitySection = tmp5;
