// Module ID: 12458
// Function ID: 12459
// Name: ConjureAppIdentity
// Dependencies: [32, 5, 19, 17, 21, 575, 5014, 8212, 8221, 12459, 1113, 3868, 1488, 12455, 6977, 12460, 5717, 12462, 6027, 7082, 6845, 5624, 7253, 2]
// Exports: ConjureAppIdentitySection

// Module 12458 (ConjureAppIdentity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ImagePickerDefault from "ImagePicker" /* 8221 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3, c4, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
class ConjureAppIconTile {
  constructor(onError) {
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
      function pickConjureAppIcon() {
        return closure_1_12(...arguments);
      }
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp18) {
          if (0 === c2) {
            c4 = 3;
            throw tmp18;
          } else {
            c3 = 1;
          }
        }
      }
    }), items);
    const tmp4 = closure_8;
    let str = "subtle";
    const Card = onChange(6977).Card;
    const tmp5 = View;
    if (null == iconURL) {
      str = "strong";
    }
    let obj2 = { variant: "secondary", border: str, radius, style: items1, accessibilityLabel: string(tmp2 ? t["MsUY/S"] : t.VATxfe), disabled, onPress: callback, children: tmp6Result };
    items1 = [tmp.tile, { width: size, height: size }, tmp2 && tmp.tileEmpty];
    const intl = tmp7(1113).intl;
    string = intl.string;
    t = tmp7(1113).t;
    if (null == iconURL) {
      let obj3 = { size: "md", color: onError(575).colors.ICON_MUTED };
      const ImagePlusIcon = tmp7(12460).ImagePlusIcon;
      tmp6Result = tmp6(ImagePlusIcon, obj3);
      tmp9 = onError;
    } else {
      tmp9 = onError;
      let obj4 = { source: obj5, style: tmp.tileImage, resizeMode: "cover" };
      obj5 = { uri: iconURL };
      tmp6Result = tmp6(onError(5717), obj4);
    }
    items2 = [tmp6(Card, obj2), ];
    let tmp6Result2 = null;
    if (null != iconURL) {
      tmp6Result2 = null;
      if (!disabled) {
        const obj6 = { style: tmp.editIcon };
        tmp6Result2 = tmp6(tmp9(12462), obj6);
      }
    }
    items2[1] = tmp6Result2;
    return tmp4(tmp5, obj);
  }
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
const PX_4 = nativeDefault.space.PX_4;
let createStyles = createStyles_mod;
value = { nameRow: obj2, tileFrame: { alignSelf: "flex-start" }, tile: { padding: 0, alignItems: "center", justifyContent: "center", overflow: "hidden" }, tileEmpty: { borderStyle: "dashed" }, tileImage: { width: "100%", height: "100%" }, editIcon: rect, nameField: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: -nativeDefault.space.PX_4, right: -nativeDefault.space.PX_4, pointerEvents: "none" };
const unpackModuleId = createStyles(value);
const result = size.fileFinishedImporting("modules/conjure/identity/native/ConjureAppIdentity.tsx");

export { ConjureAppIconTile };
export function ConjureAppIdentitySection(nameError) {
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
  const Stack = nameError(6027).Stack;
  const obj2 = { style: tmp.nameRow, children: items1 };
  items1 = [closure_7(ConjureAppIconTile, { iconURL, size: first1, disabled: flag, onChange: onIconChange, onError: tmp4 }), ];
  const obj3 = { style: tmp.nameField, onLayout: callback, children: closure_7(TextInput, obj4) };
  obj4 = { label: intl.string(_modDef3868.GWBCF9), value: name, onChange: onNameChange, maxLength: nameError(6845).MAX_PROJECT_NAME_LENGTH, disabled: flag, errorMessage: nameError };
  TextInput = nameError(7082).TextInput;
  intl = nameError(1113).intl;
  items1[1] = closure_7(View, obj3);
  items2 = [closure_8(View, obj2), ];
  let tmp14Result = null;
  const tmp9 = closure_9;
  if (null != first) {
    const obj5 = { accessibilityLiveRegion: "polite", children: closure_7(nameError(5624).Text, obj6) };
    obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: first };
    tmp14Result = tmp14(tmp13, obj5);
  }
  const obj7 = { children: items3 };
  items2[1] = tmp14Result;
  items3 = [closure_8(Stack, obj), ];
  const obj8 = { label: intl2.string(_modDef3868.ynaGa1), placeholder: intl3.string(_modDef3868["I+3UTL"]), value: description, onChange: onDescriptionChange, maxLength: nameError(6845).MAX_APP_DESCRIPTION_LENGTH, disabled: flag };
  const TextArea = tmp10(7253).TextArea;
  intl2 = tmp10(1113).intl;
  intl3 = tmp10(1113).intl;
  items3[1] = closure_7(TextArea, obj8);
  return closure_8(tmp9, obj7);
}
