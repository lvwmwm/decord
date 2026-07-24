// Module ID: 9071
// Function ID: 71210
// Name: XboxLinkDiscordSuccess
// Dependencies: [57, 31, 27, 8977, 8989, 33, 4130, 689, 8982, 477, 1456, 9072, 4126, 1212, 9073, 9074, 1273, 9075, 5121, 4543, 2]
// Exports: default

// Module 9071 (XboxLinkDiscordSuccess)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import XBOX_URL_BASE from "XBOX_URL_BASE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ Image: closure_5, View: closure_6, Linking: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
({ XBOX_ANDROID_APP_LINK: closure_10, XBOX_IOS_APP_LINK: closure_11, XBOX_URL_BASE: closure_12 } = XBOX_URL_BASE);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { image: { width: 58, height: 85, marginBottom: 24 } };
_createForOfIteratorHelperLoose = { alignItems: "center", alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, marginTop: 24, padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, flexDirection: "row" };
_createForOfIteratorHelperLoose.getApp = _createForOfIteratorHelperLoose;
let obj1 = { marginRight: 12, width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_XBOX };
_createForOfIteratorHelperLoose.appLogoBox = obj1;
_createForOfIteratorHelperLoose.appLogo = { width: 32, height: 32 };
_createForOfIteratorHelperLoose.getAppTitle = { flex: 1 };
_createForOfIteratorHelperLoose.icon = { marginLeft: 8 };
_createForOfIteratorHelperLoose.externalLinkIcon = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx");

export default function XboxLinkDiscordSuccess() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = first(navigation[8]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const tmp3 = callback(React.useState(true), 2);
  first = tmp3[0];
  const importDefault = tmp3[1];
  const effect = React.useEffect(() => {
    outer1_7.canOpenURL(outer1_12).then(closure_1);
  }, []);
  const items = [first];
  callback = React.useCallback(() => {
    if (!first) {
      const openURL = outer1_7.openURL;
      if (obj.isAndroid()) {
        openURL(outer1_10);
      } else {
        openURL(outer1_11);
      }
      obj = first(navigation[9]);
    }
  }, items);
  let obj1 = first(navigation[10]);
  navigation = obj1.useNavigation();
  const items1 = [navigation];
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  obj1 = {};
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_9.EDUCATION);
  }, items1);
  obj1.source = importDefault(navigation[11]);
  obj1.style = tmp.image;
  const items2 = [callback2(closure_5, obj1), , , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title };
  const intl = first(navigation[13]).intl;
  obj2.children = intl.string(first(navigation[13]).t.aGRPVq);
  items2[1] = callback2(first(navigation[12]).Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body };
  const intl2 = first(navigation[13]).intl;
  obj3.children = intl2.string(first(navigation[13]).t.m3mBYE);
  items2[2] = callback2(first(navigation[12]).Text, obj3);
  const obj4 = { onPress: callback, style: tmp.getApp };
  const obj5 = { style: tmp.appLogoBox, children: callback2(closure_5, { source: importDefault(navigation[14]), style: tmp.appLogo }) };
  const items3 = [callback2(closure_6, obj5), , ];
  const obj7 = { style: tmp.getAppTitle, variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
  const intl3 = first(navigation[13]).intl;
  const string = intl3.string;
  const t = first(navigation[13]).t;
  if (first) {
    let stringResult = string(t.zcKE8W);
  } else {
    stringResult = string(t["12Kx2v"]);
  }
  obj7.children = stringResult;
  items3[1] = callback2(first(navigation[12]).Text, obj7);
  if (first) {
    const obj8 = { source: importDefault(navigation[15]), style: tmp.icon };
    let tmp14Result = tmp14(closure_5, obj8);
  } else {
    const obj9 = { source: importDefault(navigation[17]), size: first(navigation[16]).Icon.Sizes.SMALL, color: tmp.externalLinkIcon.color, style: tmp.icon };
    tmp14Result = tmp14(first(navigation[16]).Icon, obj9);
  }
  items3[2] = tmp14Result;
  obj4.children = items3;
  items2[3] = closure_14(closure_8, obj4);
  obj.children = items2;
  const items4 = [closure_14(closure_6, obj), ];
  const obj10 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj11 = { style: twoWayLinkStyles.footerButton };
  const obj12 = { size: "lg", variant: "primary" };
  const intl4 = first(navigation[13]).intl;
  obj12.text = intl4.string(first(navigation[13]).t["3PatSz"]);
  obj12.onPress = callback1;
  obj11.children = callback2(first(navigation[19]).Button, obj12);
  obj10.children = callback2(closure_6, obj11);
  items4[1] = callback2(first(navigation[18]).SafeAreaPaddingView, obj10);
  obj.children = items4;
  return closure_14(closure_6, obj);
};
