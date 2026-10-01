// Module ID: 17558
// Function ID: 17559
// Name: FormImagePicker
// Dependencies: [5, 19, 17, 21, 4836, 576, 5450, 1432, 9203, 1115, 5899, 17559, 9713, 4832, 5281, 2]
// Exports: default

// Module 17558 (FormImagePicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1432 */;
import utils_UploadUtilsDefault from "utils/UploadUtils" /* 5450 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_2;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let tmp6;
const FastImageDefault = tmp6(5899);
function pickImage() {
  return obj(...arguments);
}
let obj = function _pickImage() {
  obj = _asyncToGenerator(async (size, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj3;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let base64;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              size = closure_1;
              base64 = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { size };
              const obj6 = { value: obj3.openImagePicker(obj5), done: false };
              obj3 = utils_UploadUtilsDefault;
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            base64 = value.base64;
            if (null != base64) {
              obj = { uri: base64 };
              size(obj);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c4 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
class ImagePickerIcon {
  constructor(disabled) {
    let image;
    let intl;
    let items1;
    let items2;
    let items3;
    let obj3;
    let previewResizeMode;
    let standalone;
    let style;
    let tmp10;
    let tmp12Result;
    ({ style, image } = disabled);
    ({ imageUploadSize: importDefault, setImage: dependencyMap, previewResizeMode, standalone, size } = disabled);
    let flag = disabled.disabled;
    const previewShape = disabled.previewShape;
    if (flag === undefined) {
      flag = false;
    }
    const tmp = closure_8();
    const tmp3 = previewShape === obj4.CIRCLE ? tmp.imageCircle : tmp.imageSquircle;
    const items = [image, size];
    const tmp2 = "center" === previewResizeMode ? tmp.imageCentered : tmp.image;
    const memo = react.useMemo(() => {
      let uri1;
      if (image != null) {
        uri1 = tmp.uri;
      }
      if (null != uri1) {
        const uri = tmp.uri;
        if (!uri.startsWith("data:")) {
          let uri3;
          if (null != size) {
            const uri2 = tmp.uri;
            const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
            ImageLoaderUtils;
            const _HermesInternal = HermesInternal;
            obj = ImageLoaderUtils;
            uri3 = uri2 + "?size=" + getBestMediaProxySize(tmp3 * obj.getDevicePixelRatio());
            image.uri = uri3;
          }
          return uri3;
        }
        uri3 = tmp.uri;
      }
    }, items);
    obj = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(image(1115).t.HNo5cG),
      accessibilityState: { disabled: flag },
      onPress() {
        return pickImage(importDefault, dependencyMap);
      },
      style: items1,
      disabled: flag,
      children: items3
    };
    const tmp8 = TouchableHitBoxDefault;
    intl = image(1115).intl;
    items1 = [tmp.image, tmp3, tmp.imageContainerEmpty, flag && tmp.disabled, style];
    const tmp5 = closure_7;
    if (null != image) {
      const obj2 = { style: items2, resizeMode: previewResizeMode, source: obj3 };
      items2 = [tmp2, style, tmp3];
      const tmp6Result = FastImageDefault;
      if (previewResizeMode == null) {
        previewResizeMode = "cover";
      }
      obj3 = { uri: memo };
      tmp12Result = tmp12(tmp6Result, obj2);
      tmp10 = tmp12;
    } else {
      tmp10 = closure_6;
      tmp12Result = closure_6(tmp9(17559).ImagePlusIcon, {});
    }
    items3 = [tmp12Result, ];
    let tmp10Result = null != image && !flag;
    if (tmp10Result) {
      const items4 = [tmp.editImageIcon, ];
      const tmp15 = View;
      if (standalone) {
        standalone = tmp.standaloneIcon;
      }
      obj4 = { style: items4, children: tmp10(image(9713).PencilIcon, { color: "#292b30", size: "sm" }) };
      items4[1] = standalone;
      tmp10Result = tmp10(tmp15, obj4);
    }
    items3[1] = tmp10Result;
    return tmp5(tmp8, obj);
  }
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
obj = { imageSelectionRow: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16 }, buttonColumn: { flex: 1, flexDirection: "column", marginEnd: 16 }, imageDescription: { flexWrap: "wrap", marginBottom: 16 }, image: { alignSelf: "center", width: 84, height: 84 }, imageCentered: { alignSelf: "center", width: 20, height: 20 }, imageCircle: { borderRadius: 42 }, imageSquircle: obj2, imageContainerEmpty: obj3, editImageIcon: size, standaloneIcon: { top: -4, right: -4 }, disabled: { opacity: 0.3 } };
obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
size = { alignItems: "center", backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, top: 0, height: 24, justifyContent: "center", right: 0, padding: 4, position: "absolute", width: 24 };
const metroImportAll = createStyles(obj);
let obj4 = { CIRCLE: 0, [0]: "CIRCLE", SQUIRCLE: 1, [1]: "SQUIRCLE" };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormImagePicker.tsx");

export default function FormImagePicker(imageUploadSize) {
  let image;
  let items;
  let items1;
  let setImage;
  let stringResult;
  let tmp6;
  imageUploadSize = imageUploadSize.imageUploadSize;
  ({ image, setImage } = imageUploadSize);
  const disabled = imageUploadSize.disabled;
  const description = imageUploadSize.description;
  const merged = Object.assign(imageUploadSize, Object.assign({ description: 0, imageUploadSize: 0, image: 0, setImage: 0, disabled: 0 }));
  const tmp2 = closure_8();
  if (null == image) {
    const intl2 = imageUploadSize(1115).intl;
    stringResult = intl2.string(imageUploadSize(1115).t.bGPfSp);
    tmp6 = imageUploadSize;
  } else {
    const intl = imageUploadSize(1115).intl;
    stringResult = intl.string(imageUploadSize(1115).t["0KOido"]);
    tmp6 = imageUploadSize;
  }
  const obj2 = { style: tmp2.buttonColumn, children: items };
  items = [, ];
  obj = { style: tmp2.imageSelectionRow, children: items1 };
  const obj3 = { style: tmp2.imageDescription, variant: "text-sm/medium", color: "text-default", children: description };
  items[0] = closure_6(tmp6(4832).Text, obj3);
  obj4 = {
    text: stringResult,
    variant: "secondary",
    onPress() {
      return pickImage(imageUploadSize, setImage);
    },
    size: "md",
    disabled
  };
  items[1] = closure_6(tmp6(5281).Button, obj4);
  items1 = [closure_7(View, obj2), ];
  const obj5 = { disabled, imageUploadSize, image, setImage };
  const merged1 = Object.assign(merged);
  items1[1] = closure_6(ImagePickerIcon, obj5);
  return closure_7(View, obj);
};
export const PreviewShape = obj4;
export { ImagePickerIcon };
