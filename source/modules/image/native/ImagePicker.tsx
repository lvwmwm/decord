// Module ID: 4686
// Function ID: 40825
// Name: launchImageLibrary
// Dependencies: [1278, 482, 477, 4687, 4688, 689, 4690, 1212, 2]

// Module 4686 (launchImageLibrary)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ThemeTypes } from "sum";

const require = arg1;
function launchImageLibrary(mediaType) {
  if ("any" !== mediaType.mediaType) {
    let str = mediaType.mediaType;
  } else {
    let obj = require(477) /* set */;
    str = "mixed";
  }
  let selections = mediaType.selections;
  if (null == selections) {
    selections = [];
  }
  let str2;
  if (obj2.isIOS()) {
    str2 = "pageSheet";
  }
  obj2 = require(477) /* set */;
  const tmp3 = !mediaType.disableNewIOSPicker;
  const obj3 = require(4687) /* isActionPickSupported */;
  const tmp4 = !require(4687) /* isActionPickSupported */.isActionPickSupported();
  obj = {};
  const merged = Object.assign(mediaType);
  obj["mediaType"] = str;
  obj["presentationStyle"] = str2;
  obj["selection"] = selections;
  obj["useNewIOSPicker"] = tmp3;
  obj["forceGetContent"] = tmp4;
  require(4688) /* launchCamera */.launchImageLibrary(obj, arg1);
}
function launchCamera(arg0, arg1) {
  require(4688) /* launchCamera */.launchCamera(arg0, arg1);
}
const result = require("set").fileFinishedImporting("modules/image/native/ImagePicker.tsx");

export default {
  launchImageLibrary,
  launchImageLibraryAsync(arg0) {
    let closure_0 = arg0;
    return new Promise((arg0) => {
      let closure_0 = arg0;
      outer1_5(closure_0, (arg0) => {
        callback(arg0);
      });
    });
  },
  launchCamera,
  launchCameraAsync(arg0) {
    let closure_0 = arg0;
    return new Promise((arg0) => {
      let closure_0 = arg0;
      outer1_6(closure_0, (arg0) => {
        callback(arg0);
      });
    });
  },
  launchCropper(arg0) {
    let freeStyleCropEnabled;
    let height;
    let includeBase64;
    let mimeType;
    let uri;
    let width;
    theme = theme.theme;
    ({ uri, width, height, includeBase64, mimeType, freeStyleCropEnabled } = arg0);
    const internal = importDefault(689).internal;
    const semanticColor = internal.resolveSemanticColor(theme, importDefault(689).colors.BACKGROUND_BASE_LOW);
    const internal2 = importDefault(689).internal;
    const semanticColor1 = internal2.resolveSemanticColor(theme, importDefault(689).colors.BACKGROUND_SURFACE_HIGH);
    const internal3 = importDefault(689).internal;
    const semanticColor2 = internal3.resolveSemanticColor(theme, importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY);
    const internal4 = importDefault(689).internal;
    const semanticColor3 = internal4.resolveSemanticColor(theme, importDefault(689).colors.TEXT_MUTED);
    const internal5 = importDefault(689).internal;
    const semanticColor4 = internal5.resolveSemanticColor(theme, importDefault(689).colors.TEXT_BRAND);
    const internal6 = importDefault(689).internal;
    const semanticColor5 = internal6.resolveSemanticColor(theme, importDefault(689).colors.TEXT_DEFAULT);
    let obj = importDefault(4690);
    obj = { mediaType: "photo", path: uri, width, height, includeBase64, mimeType, freeStyleCropEnabled, cropperStatusBarLight: theme === ThemeTypes.LIGHT, cropperNavigationBarLight: theme === ThemeTypes.LIGHT, cropperActiveWidgetColor: semanticColor2, cropperInactiveWidgetColor: semanticColor3, cropperControlsColor: semanticColor1, cropperControlsBarColor: semanticColor, cropperChooseColor: semanticColor4 };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.cropperChooseText = intl.string(require(1212) /* getSystemLocale */.t["1Qm822"]);
    obj.cropperCancelColor = semanticColor5;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.cropperCancelText = intl2.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
    obj.cropperToolbarColor = semanticColor;
    obj.cropperToolbarWidgetColor = semanticColor2;
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.cropperToolbarTitle = intl3.string(require(1212) /* getSystemLocale */.t.b0y3DL);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.cropperRotateByAngleAccessibilityLabel = intl4.string(require(1212) /* getSystemLocale */.t.Izf9u1);
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj.cropperResetRotationAccessibilityLabel = intl5.string(require(1212) /* getSystemLocale */.t.iz4w1M);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj.cropperClampButtonAccessibilityLabel = intl6.string(require(1212) /* getSystemLocale */.t.QHvDTL);
    return obj.openCropper(obj);
  }
};
