// Module ID: 14612
// Function ID: 14613
// Name: XboxLinkSuccess
// Dependencies: [32, 19, 17, 9723, 9737, 21, 5014, 575, 9730, 1375, 1497, 5717, 14613, 5624, 1113, 12044, 14614, 1187, 11993, 7292, 5634, 2]
// Exports: default

// Module 14612 (XboxLinkSuccess)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import XboxLinkConstants from "XboxLinkConstants" /* 9723 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameConsoleConstants from "GameConsoleConstants" /* 9737 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let navigation;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let unpackModuleId;
({ View: hasOwnProperty, Linking: metroRequire, Pressable: metroImportDefault } = react_native);
const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
({ XBOX_ANDROID_APP_LINK: c9, XBOX_IOS_APP_LINK: c10, XBOX_URL_BASE: unpackModuleId } = GameConsoleConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { image: { width: 58, height: 85, marginBottom: 24 }, getApp: obj2, appLogoBox: size, appLogo: { width: 32, height: 32 }, getAppTitle: { flex: 1 }, icon: { marginLeft: 8 }, externalLinkIcon: obj3 };
obj2 = { alignItems: "center", alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginTop: 24, padding: 16, borderRadius: nativeDefault.radii.sm, flexDirection: "row" };
createStyles = createStyles.createStyles;
size = { marginRight: 12, width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX };
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_14 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx");

export default function XboxLinkDiscordSuccess() {
  let Button;
  let closure_1;
  let first;
  let intl;
  let intl2;
  let intl4;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj15;
  let obj16;
  let stringResult;
  let tmp13Result;
  let tmp17;
  let tmp = closure_14();
  let obj = first(navigation[8]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  [first, importDefault] = react.useState(true);
  const effect = react.useEffect(() => {
    const canOpenURLResult = metroRequire.canOpenURL(unpackModuleId);
    canOpenURLResult.then(closure_1);
  }, []);
  const items = [first];
  const callback = react.useCallback(() => {
    const tmp = first;
    if (!tmp) {
      const openURL = metroRequire.openURL;
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        openURL(React4);
      } else {
        openURL(authStore);
      }
    }
  }, items);
  const obj2 = first(navigation[10]);
  navigation = obj2.useNavigation();
  const items1 = [navigation];
  const obj3 = { style: twoWayLinkStyles.container, children: items4 };
  const obj4 = { style: twoWayLinkStyles.content, children: items2 };
  const callback1 = react.useCallback(() => {
    navigation.push(XboxLinkModalScenes.EDUCATION);
  }, items1);
  const obj5 = { source: require("AssetRegistry"), style: tmp.image };
  const tmp15 = require("FastImage");
  items2 = [closure_12(tmp15, obj5), , , ];
  const obj6 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(first(navigation[14]).t.aGRPVq) };
  const Text = first(navigation[13]).Text;
  intl = first(navigation[14]).intl;
  items2[1] = closure_12(Text, obj6);
  const obj7 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: intl2.string(first(navigation[14]).t.m3mBYE) };
  const Text2 = first(navigation[13]).Text;
  intl2 = first(navigation[14]).intl;
  items2[2] = closure_12(Text2, obj7);
  const obj8 = { onPress: callback, style: tmp.getApp, children: items3 };
  const obj9 = { style: tmp.appLogoBox, children: closure_12(tmp17, obj10) };
  obj10 = { source: require("AssetRegistry"), style: tmp.appLogo };
  tmp17 = require("FastImage");
  items3 = [closure_12(closure_5, obj9), , ];
  const obj11 = { style: tmp.getAppTitle, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: stringResult };
  const Text3 = first(navigation[13]).Text;
  const intl3 = first(navigation[14]).intl;
  const string = intl3.string;
  const t = first(navigation[14]).t;
  const tmp16 = closure_7;
  if (first) {
    stringResult = string(t.zcKE8W);
  } else {
    stringResult = string(t["12Kx2v"]);
  }
  items3[1] = closure_12(Text3, obj11);
  if (first) {
    const obj12 = { source: require("AssetRegistry"), style: tmp.icon };
    const tmp14Result = require("FastImage");
    tmp13Result = tmp13(tmp14Result, obj12);
  } else {
    const obj13 = { source: require("AssetRegistry"), size: first(navigation[17]).Icon.Sizes.SMALL, color: tmp.externalLinkIcon.color, style: tmp.icon };
    const Icon = tmp2(tmp3[17]).Icon;
    tmp13Result = tmp13(Icon, obj13);
  }
  items3[2] = tmp13Result;
  items2[3] = closure_13(tmp16, obj8);
  items4 = [closure_13(closure_5, obj4), ];
  const obj14 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: closure_12(closure_5, obj15) };
  obj15 = { style: twoWayLinkStyles.footerButton, children: closure_12(Button, obj16) };
  const SafeAreaPaddingView = tmp2(tmp3[19]).SafeAreaPaddingView;
  obj16 = { size: "lg", variant: "primary", text: intl4.string(first(navigation[14]).t["3PatSz"]), onPress: callback1 };
  Button = tmp2(tmp3[20]).Button;
  intl4 = tmp2(tmp3[14]).intl;
  items4[1] = closure_12(SafeAreaPaddingView, obj14);
  return closure_13(closure_5, obj3);
};
