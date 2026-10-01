// Module ID: 5462
// Function ID: 5463
// Name: ImagePicker
// Dependencies: [1182, 1085, 1364, 5463, 5464, 576, 5466, 1115, 2]

// Module 5462 (ImagePicker)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl7 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ImagePickerUtils from "ImagePickerUtils" /* 5463 */;
import react_native from "react-native" /* 5464 */;
import react_nativeDefault from "react-native" /* 5466 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import size_mod from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
let obj = {
  launchImageLibrary(mediaType, arg1) {
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
    const obj3 = { mediaType: str, presentationStyle: str2, selection: selections, useNewIOSPicker: tmp3, forceGetContent: !tmp4Result.isActionPickSupported() };
    const launchImageLibrary = react_native.launchImageLibrary;
    react_native;
    const merged = Object.assign(mediaType);
    launchImageLibrary(obj3, arg1);
  },
  launchImageLibraryAsync(arg0) {
    let mediaType = arg0;
    const promise = new Promise((arg0) => {
      let str;
      mediaType = arg0;
      if ("any" !== mediaType.mediaType) {
        str = tmp.mediaType;
      } else {
        str = "mixed";
        PlatformUtils;
      }
      let selections = tmp.selections;
      if (selections == null) {
        selections = [];
      }
      let str2;
      const tmp4 = !mediaType.disableNewIOSPicker;
      const obj2 = PlatformUtils;
      if (obj2.isIOS()) {
        str2 = "pageSheet";
      }
      const fn = (arg0) => {
        closure_0(arg0);
      };
      const tmp5Result = ImagePickerUtils;
      const obj3 = { mediaType: str, presentationStyle: str2, selection: selections, useNewIOSPicker: tmp4, forceGetContent: !tmp5Result.isActionPickSupported() };
      const launchImageLibrary = react_native.launchImageLibrary;
      react_native;
      const merged = Object.assign(tmp);
      launchImageLibrary(obj3, fn);
    });
    return promise;
  },
  launchCamera(arg0, arg1) {
    const obj = react_native;
    obj.launchCamera(arg0, arg1);
  },
  launchCameraAsync(arg0) {
    let closure_0 = arg0;
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      const obj = react_native;
      obj.launchCamera(closure_0, (arg0) => {
        closure_0(arg0);
      });
    });
    return promise;
  },
  launchCropper(catchPromise) {
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
    ({ uri, width, height, includeBase64, mimeType, freeStyleCropEnabled } = catchPromise);
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
