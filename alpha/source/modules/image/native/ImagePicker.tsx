// Module ID: 8036
// Function ID: 8037
// Name: ImagePicker
// Dependencies: [1207, 1098, 1384, 8037, 8038, 8039, 587, 8041, 1128, 2]

// Module 8036 (ImagePicker)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import intl7 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ImagePickerUtils from "ImagePickerUtils" /* 8037 */;
import AndroidPhotoPickerExperiment from "AndroidPhotoPickerExperiment" /* 8038 */;
import launchCameraAll from "launchCamera" /* 8039 */;
import react_nativeDefault from "react-native" /* 8041 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import size_mod from "module_2" /* 2 */;

function getNativeLibraryOptions(mediaType) {
  let str;
  if ("any" !== mediaType.mediaType) {
    str = mediaType.mediaType;
  } else {
    str = "mixed";
    PlatformUtils;
  }
  let selections = mediaType.selections;
  if (selections == null) {
    selections = [];
  }
  let str2;
  const tmp3 = !mediaType.disableNewIOSPicker;
  const obj2 = PlatformUtils;
  if (obj2.isIOS()) {
    str2 = "pageSheet";
  }
  const tmp4Result = ImagePickerUtils;
  const tmp6 = !tmp4Result.isActionPickSupported();
  const tmp4Result3 = PlatformUtils;
  let enabled = tmp4Result3.isAndroid();
  if (enabled) {
    const tmp4Result4 = AndroidPhotoPickerExperiment;
    enabled = tmp4Result4.getAndroidPhotoPickerExperimentConfig({ location: "ImagePicker" }).enabled;
  }
  const obj3 = { mediaType: str, presentationStyle: str2, selection: selections, useNewIOSPicker: tmp3, forceGetContent: tmp6, enableAndroidPhotoPicker: enabled };
  const merged = Object.assign(mediaType);
  return obj3;
}
const ThemeTypes = Constants.ThemeTypes;
let obj = {
  launchImageLibrary(mediaType, arg1) {
    const obj = launchCameraAll;
    obj.launchImageLibrary(getNativeLibraryOptions(mediaType), arg1);
  },
  launchImageLibraryAsync(arg0) {
    let closure_0 = arg0;
    const promise = new Promise((mediaType) => {
      closure_0 = mediaType;
      const obj = launchCameraAll;
      obj.launchImageLibrary(getNativeLibraryOptions(closure_0), (arg0) => {
        closure_0(arg0);
      });
    });
    return promise;
  },
  canUseAndroidPhotoPicker(mediaType) {
    const obj = PlatformUtils;
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      const obj2 = launchCameraAll;
      isAndroidResult = true === obj2.canUseAndroidPhotoPicker(getNativeLibraryOptions(mediaType));
    }
    return isAndroidResult;
  },
  launchCamera(arg0, arg1) {
    const obj = launchCameraAll;
    obj.launchCamera(arg0, arg1);
  },
  launchCameraAsync(arg0) {
    let closure_0 = arg0;
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      const obj = launchCameraAll;
      obj.launchCamera(closure_0, (arg0) => {
        closure_0(arg0);
      });
    });
    return promise;
  },
  launchCropper(size) {
    let freeStyleCropEnabled;
    let height;
    let includeBase64;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let mimeType;
    let uri;
    let width;
    const theme = ThemeStore.theme;
    ({ uri, width, height, includeBase64, mimeType, freeStyleCropEnabled } = size);
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_BASE_LOW);
    const internal2 = nativeDefault.internal;
    const semanticColor1 = internal2.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
    const internal3 = nativeDefault.internal;
    const semanticColor2 = internal3.resolveSemanticColor(theme, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY);
    const internal4 = nativeDefault.internal;
    const semanticColor3 = internal4.resolveSemanticColor(theme, nativeDefault.colors.TEXT_MUTED);
    const internal5 = nativeDefault.internal;
    const semanticColor4 = internal5.resolveSemanticColor(theme, nativeDefault.colors.TEXT_BRAND);
    const internal6 = nativeDefault.internal;
    const semanticColor5 = internal6.resolveSemanticColor(theme, nativeDefault.colors.TEXT_DEFAULT);
    size = { mediaType: "photo", path: uri, width, height, includeBase64, mimeType, freeStyleCropEnabled, cropperStatusBarLight: theme === ThemeTypes.LIGHT, cropperNavigationBarLight: theme === ThemeTypes.LIGHT, cropperActiveWidgetColor: semanticColor2, cropperInactiveWidgetColor: semanticColor3, cropperControlsColor: semanticColor1, cropperControlsBarColor: semanticColor, cropperChooseColor: semanticColor4, cropperChooseText: intl.string(intl7.t["1Qm822"]), cropperCancelColor: semanticColor5, cropperCancelText: intl2.string(intl7.t["ETE/oC"]), cropperToolbarColor: semanticColor, cropperToolbarWidgetColor: semanticColor2, cropperToolbarTitle: intl3.string(intl7.t.b0y3DL), cropperRotateByAngleAccessibilityLabel: intl4.string(intl7.t.Izf9u1), cropperResetRotationAccessibilityLabel: intl5.string(intl7.t.iz4w1M), cropperClampButtonAccessibilityLabel: intl6.string(intl7.t.QHvDTL) };
    const openCropper = react_nativeDefault.openCropper;
    react_nativeDefault;
    intl = intl7.intl;
    intl2 = intl7.intl;
    intl3 = intl7.intl;
    intl4 = intl7.intl;
    intl5 = intl7.intl;
    intl6 = intl7.intl;
    return openCropper(size);
  },
  cleanSingle(path) {
    const obj = react_nativeDefault;
    return obj.cleanSingle(path);
  }
};
let size = size_mod;
const result = size.fileFinishedImporting("modules/image/native/ImagePicker.tsx");

export default obj;
