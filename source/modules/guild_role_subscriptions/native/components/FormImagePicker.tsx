// Module ID: 16472
// Function ID: 128328
// Name: pickImage
// Dependencies: [5, 31, 27, 33, 4130, 689, 4674, 1426, 8518, 1212, 5085, 16473, 9142, 4126, 4543, 2]
// Exports: default

// Module 16472 (pickImage)
import closure_3 from "_createForOfIteratorHelperLoose";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function pickImage() {
  return _pickImage(...arguments);
}
function _pickImage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
class ImagePickerIcon {
  constructor(arg0) {
    ({ style, image } = global);
    ({ imageUploadSize, setImage, previewResizeMode, standalone, size } = global);
    flag = global.disabled;
    if (flag === undefined) {
      flag = false;
    }
    tmp = c8();
    tmp3 = global.previewShape === c9.CIRCLE ? tmp.imageCircle : tmp.imageSquircle;
    items = [, ];
    items[0] = image;
    items[1] = size;
    tmp2 = "center" === previewResizeMode ? tmp.imageCentered : tmp.image;
    memo = result.useMemo(() => {
      let uri;
      if (null != image) {
        uri = image.uri;
      }
      if (null != uri) {
        uri = image.uri;
        if (!uri.startsWith("data:")) {
          if (null != size) {
            const obj = image(outer1_2[7]);
            const _HermesInternal = HermesInternal;
            let uri2 = image.uri + "?size=" + obj.getBestMediaProxySize(size * image(outer1_2[7]).getDevicePixelRatio());
            image.uri = uri2;
            const obj2 = image(outer1_2[7]);
          }
          return uri2;
        }
        uri2 = image.uri;
      }
    }, items);
    tmp5 = jsxs;
    obj = { accessibilityRole: "button" };
    tmp6 = require("_isNativeReflectConstruct");
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = intl.string(require("getSystemLocale").t.HNo5cG);
    obj = {};
    obj.disabled = flag;
    obj.accessibilityState = obj;
    obj.onPress = function onPress() {
      return outer1_10(closure_1, closure_2);
    };
    items1 = [, , , , ];
    items1[0] = tmp.image;
    items1[1] = tmp3;
    items1[2] = tmp.imageContainerEmpty;
    disabled = flag;
    if (flag) {
      disabled = tmp.disabled;
    }
    items1[3] = disabled;
    items1[4] = style;
    obj.style = items1;
    obj.disabled = flag;
    if (null != image) {
      tmp12 = imageUploadSize;
      tmp13 = setImage;
      num2 = 10;
      tmp11 = jsx;
      obj1 = {};
      items2 = [, , ];
      items2[0] = tmp2;
      items2[1] = style;
      items2[2] = tmp3;
      obj1.style = items2;
      str = "cover";
      tmp14 = require("preload");
      if (null != previewResizeMode) {
        str = previewResizeMode;
      }
      obj1.resizeMode = str;
      obj2 = {};
      obj2.uri = memo;
      obj1.source = obj2;
      tmp11Result = tmp11(tmp14, obj1);
    } else {
      tmp7 = jsx;
      tmp8 = image;
      tmp9 = setImage;
      num = 11;
      tmp11Result = jsx(require("ImagePlusIcon").ImagePlusIcon, {});
    }
    items3 = [, ];
    items3[0] = tmp11Result;
    tmp16Result = null != image && !flag;
    if (tmp16Result) {
      obj3 = {};
      items4 = [, ];
      items4[0] = tmp.editImageIcon;
      tmp16 = jsx;
      tmp17 = View;
      if (standalone) {
        standalone = tmp.standaloneIcon;
      }
      items4[1] = standalone;
      obj3.style = items4;
      tmp18 = jsx;
      tmp19 = image;
      tmp20 = setImage;
      num3 = 12;
      obj3.children = jsx(require("PencilIcon").PencilIcon, { color: "#292b30", size: "sm" });
      tmp16Result = tmp16(tmp17, obj3);
    }
    items3[1] = tmp16Result;
    obj.children = items3;
    return tmp5(tmp6, obj);
  }
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { imageSelectionRow: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16 }, buttonColumn: { flex: 1, flexDirection: "column", marginEnd: 16 }, imageDescription: { flexWrap: "wrap", marginBottom: 16 }, image: { alignSelf: "center", width: 84, height: 84 }, imageCentered: { alignSelf: "center", width: 20, height: 20 }, imageCircle: { borderRadius: 42 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.imageSquircle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.imageContainerEmpty = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
let obj2 = { alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, top: 0, height: 24, justifyContent: "center", right: 0, padding: 4, position: "absolute", width: 24 };
_createForOfIteratorHelperLoose.editImageIcon = obj2;
_createForOfIteratorHelperLoose.standaloneIcon = { top: -4, right: -4 };
_createForOfIteratorHelperLoose.disabled = { opacity: 0.3 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { CIRCLE: 0, [0]: "CIRCLE", SQUIRCLE: 1, [1]: "SQUIRCLE" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormImagePicker.tsx");

export default function FormImagePicker(imageUploadSize) {
  let image;
  let setImage;
  imageUploadSize = imageUploadSize.imageUploadSize;
  ({ image, setImage } = imageUploadSize);
  const disabled = imageUploadSize.disabled;
  let obj = { description: 0, imageUploadSize: 0, image: 0, setImage: 0, disabled: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(imageUploadSize, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  if (null == image) {
    const intl2 = imageUploadSize(1212).intl;
    let stringResult = intl2.string(imageUploadSize(1212).t.bGPfSp);
  } else {
    const intl = imageUploadSize(1212).intl;
    stringResult = intl.string(imageUploadSize(1212).t["0KOido"]);
  }
  obj = { style: tmp3.imageSelectionRow };
  obj = { style: tmp3.buttonColumn };
  const obj1 = { style: tmp3.imageDescription, variant: "text-sm/medium", color: "text-default", children: imageUploadSize.description };
  const items = [callback2(imageUploadSize(4126).Text, obj1), ];
  const obj2 = {
    text: stringResult,
    variant: "secondary",
    onPress() {
      return outer1_10(imageUploadSize, setImage);
    },
    size: "md",
    disabled
  };
  items[1] = callback2(imageUploadSize(4543).Button, obj2);
  obj.children = items;
  const items1 = [callback3(View, obj), ];
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3["disabled"] = disabled;
  obj3["imageUploadSize"] = imageUploadSize;
  obj3["image"] = image;
  obj3["setImage"] = setImage;
  items1[1] = callback2(ImagePickerIcon, obj3);
  obj.children = items1;
  return callback3(View, obj);
};
export const PreviewShape = obj3;
export { ImagePickerIcon };
