// Module ID: 16300
// Function ID: 125788
// Name: pickImage
// Dependencies: []
// Exports: default

// Module 16300 (pickImage)
function pickImage() {
  return _pickImage(...arguments);
}
function _pickImage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _pickImage = obj;
  return obj(...arguments);
}
class ImagePickerIcon {
  constructor(arg0) {
    ({ style, image } = global);
    arg1 = image;
    ({ imageUploadSize: closure_1, setImage: closure_2, previewResizeMode, standalone, size } = global);
    flag = global.disabled;
    if (flag === undefined) {
      flag = false;
    }
    tmp = closure_8();
    tmp3 = global.previewShape === closure_9.CIRCLE ? tmp.imageCircle : tmp.imageSquircle;
    items = [, ];
    items[0] = image;
    items[1] = size;
    tmp2 = "center" === previewResizeMode ? tmp.imageCentered : tmp.image;
    memo = importAll.useMemo(() => {
      let uri;
      if (null != image) {
        uri = image.uri;
      }
      if (null != uri) {
        uri = image.uri;
        if (!uri.startsWith("data:")) {
          if (null != size) {
            const obj = image(closure_2[7]);
            const _HermesInternal = HermesInternal;
            let uri2 = image.uri + "?size=" + obj.getBestMediaProxySize(size * image(closure_2[7]).getDevicePixelRatio());
            image.uri = uri2;
            const obj2 = image(closure_2[7]);
          }
          return uri2;
        }
        uri2 = image.uri;
      }
    }, items);
    tmp5 = jsxs;
    obj = { accessibilityRole: "button" };
    tmp6 = importDefault(dependencyMap[8]);
    intl = arg1(dependencyMap[9]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.HNo5cG);
    obj = {};
    obj.disabled = flag;
    obj.accessibilityState = obj;
    obj.onPress = function onPress() {
      return callback(closure_1, closure_2);
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
      tmp12 = importDefault;
      tmp13 = dependencyMap;
      num2 = 10;
      tmp11 = jsx;
      obj1 = {};
      items2 = [, , ];
      items2[0] = tmp2;
      items2[1] = style;
      items2[2] = tmp3;
      obj1.style = items2;
      str = "cover";
      tmp14 = importDefault(dependencyMap[10]);
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
      tmp8 = arg1;
      tmp9 = dependencyMap;
      num = 11;
      tmp11Result = jsx(arg1(dependencyMap[11]).ImagePlusIcon, {});
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
      tmp19 = arg1;
      tmp20 = dependencyMap;
      num3 = 12;
      obj3.children = jsx(arg1(dependencyMap[12]).PencilIcon, { "Null": "Array", "Null": "isArray" });
      tmp16Result = tmp16(tmp17, obj3);
    }
    items3[1] = tmp16Result;
    obj.children = items3;
    return tmp5(tmp6, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { imageSelectionRow: {}, buttonColumn: {}, imageDescription: {}, image: {}, imageCentered: {}, imageCircle: { borderRadius: 42 } };
obj = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.imageSquircle = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.imageContainerEmpty = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
const obj2 = { width: "application", height: "now", borderRadius: importDefault(dependencyMap[5]).radii.lg, borderWidth: "Text", borderColor: "then", justifyContent: "accessibilityRole", alignItems: "r", "Bool(false)": "isArray", "Bool(false)": "LIGHT", "Bool(false)": "isArray", backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.editImageIcon = obj2;
obj.standaloneIcon = { <string:2885813600>: "bannerOriginalMd5", <string:2339432560>: "splashOriginalMd5" };
obj.disabled = { opacity: 0.3 };
let closure_8 = obj.createStyles(obj);
const obj3 = { CIRCLE: 0, [0]: "CIRCLE", SQUIRCLE: 1, [1]: "SQUIRCLE" };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormImagePicker.tsx");

export default function FormImagePicker(children) {
  let image;
  let setImage;
  const imageUploadSize = children.imageUploadSize;
  const arg1 = imageUploadSize;
  ({ image, setImage } = children);
  const importDefault = setImage;
  const disabled = children.disabled;
  let obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
  Object.setPrototypeOf(null);
  const merged = Object.assign(children, obj);
  const tmp3 = callback4();
  if (null == image) {
    const intl2 = arg1(dependencyMap[9]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[9]).t.bGPfSp);
  } else {
    const intl = arg1(dependencyMap[9]).intl;
    stringResult = intl.string(arg1(dependencyMap[9]).t.0KOido);
  }
  obj = { style: tmp3.imageSelectionRow };
  obj = { style: tmp3.buttonColumn };
  const items = [callback2(arg1(dependencyMap[13]).Text, { style: tmp3.imageDescription, children: children.description }), ];
  const obj2 = {
    text: stringResult,
    variant: "secondary",
    onPress() {
      return callback(imageUploadSize, setImage);
    },
    size: "md",
    disabled
  };
  items[1] = callback2(arg1(dependencyMap[14]).Button, obj2);
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
