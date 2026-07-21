// Module ID: 4683
// Function ID: 40794
// Name: launchImageLibrary
// Dependencies: []

// Module 4683 (launchImageLibrary)
function launchImageLibrary(mediaType) {
  if ("any" !== mediaType.mediaType) {
    let str = mediaType.mediaType;
  } else {
    let obj = arg1(dependencyMap[2]);
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
  const obj2 = arg1(dependencyMap[2]);
  const tmp3 = !mediaType.disableNewIOSPicker;
  const obj3 = arg1(dependencyMap[3]);
  const tmp4 = !arg1(dependencyMap[3]).isActionPickSupported();
  obj = {};
  const merged = Object.assign(mediaType);
  obj["mediaType"] = str;
  obj["presentationStyle"] = str2;
  obj["selection"] = selections;
  obj["useNewIOSPicker"] = tmp3;
  obj["forceGetContent"] = tmp4;
  arg1(dependencyMap[4]).launchImageLibrary(obj, arg1);
}
function launchCamera(arg0, arg1) {
  arg1(dependencyMap[4]).launchCamera(arg0, arg1);
}
let closure_3 = importDefault(dependencyMap[0]);
const ThemeTypes = arg1(dependencyMap[1]).ThemeTypes;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/image/native/ImagePicker.tsx");

export default {
  launchImageLibrary,
  launchImageLibraryAsync(arg0) {
    const arg1 = arg0;
    return new Promise((arg0) => {
      callback(arg0, (arg0) => {
        arg0(arg0);
      });
    });
  },
  launchCamera,
  launchCameraAsync(arg0) {
    const arg1 = arg0;
    return new Promise((arg0) => {
      callback(arg0, (arg0) => {
        arg0(arg0);
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
    const theme = theme.theme;
    ({ uri, width, height, includeBase64, mimeType, freeStyleCropEnabled } = arg0);
    const internal = importDefault(dependencyMap[5]).internal;
    const semanticColor = internal.resolveSemanticColor(theme, importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW);
    const internal2 = importDefault(dependencyMap[5]).internal;
    const semanticColor1 = internal2.resolveSemanticColor(theme, importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH);
    const internal3 = importDefault(dependencyMap[5]).internal;
    const semanticColor2 = internal3.resolveSemanticColor(theme, importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY);
    const internal4 = importDefault(dependencyMap[5]).internal;
    const semanticColor3 = internal4.resolveSemanticColor(theme, importDefault(dependencyMap[5]).colors.TEXT_MUTED);
    const internal5 = importDefault(dependencyMap[5]).internal;
    const semanticColor4 = internal5.resolveSemanticColor(theme, importDefault(dependencyMap[5]).colors.TEXT_BRAND);
    const internal6 = importDefault(dependencyMap[5]).internal;
    const semanticColor5 = internal6.resolveSemanticColor(theme, importDefault(dependencyMap[5]).colors.TEXT_DEFAULT);
    let obj = importDefault(dependencyMap[6]);
    obj = { mediaType: "photo", path: uri, width, height, includeBase64, mimeType, freeStyleCropEnabled, cropperStatusBarLight: theme === ThemeTypes.LIGHT, cropperNavigationBarLight: theme === ThemeTypes.LIGHT, cropperActiveWidgetColor: semanticColor2, cropperInactiveWidgetColor: semanticColor3, cropperControlsColor: semanticColor1, cropperControlsBarColor: semanticColor, cropperChooseColor: semanticColor4 };
    const intl = arg1(dependencyMap[7]).intl;
    obj.cropperChooseText = intl.string(arg1(dependencyMap[7]).t.1Qm822);
    obj.cropperCancelColor = semanticColor5;
    const intl2 = arg1(dependencyMap[7]).intl;
    obj.cropperCancelText = intl2.string(arg1(dependencyMap[7]).t.ETE/oC);
    obj.cropperToolbarColor = semanticColor;
    obj.cropperToolbarWidgetColor = semanticColor2;
    const intl3 = arg1(dependencyMap[7]).intl;
    obj.cropperToolbarTitle = intl3.string(arg1(dependencyMap[7]).t.b0y3DL);
    const intl4 = arg1(dependencyMap[7]).intl;
    obj.cropperRotateByAngleAccessibilityLabel = intl4.string(arg1(dependencyMap[7]).t.Izf9u1);
    const intl5 = arg1(dependencyMap[7]).intl;
    obj.cropperResetRotationAccessibilityLabel = intl5.string(arg1(dependencyMap[7]).t.iz4w1M);
    const intl6 = arg1(dependencyMap[7]).intl;
    obj.cropperClampButtonAccessibilityLabel = intl6.string(arg1(dependencyMap[7]).t.QHvDTL);
    return obj.openCropper(obj);
  }
};
