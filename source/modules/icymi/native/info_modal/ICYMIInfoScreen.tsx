// Module ID: 15242
// Function ID: 115985
// Name: ICYMIInfoScreen
// Dependencies: [57, 5, 31, 27, 482, 33, 4130, 689, 5084, 1557, 4066, 1456, 8374, 15243, 4337, 9158, 9166, 1212, 5085, 15245, 15246, 15247, 15248, 4126, 9048, 11958, 4091, 4098, 15249, 1934, 4543, 2]
// Exports: default

// Module 15242 (ICYMIInfoScreen)
import _slicedToArray from "_slicedToArray";
import closure_4 from "jsxProd";
import set from "set";
import get_ActivityIndicator from "showActionSheet";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { position: "absolute", justifyContent: "center", left: 12, width: 24, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, zIndex: 2 };
_createForOfIteratorHelperLoose.closeIcon = obj1;
_createForOfIteratorHelperLoose.closeIconColor = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.bgImage = { position: "absolute", top: 0, left: 0, width: "100%", aspectRatio: 1.2515923566878981, overflow: "visible" };
_createForOfIteratorHelperLoose.headerImg = { position: "absolute", top: 16, width: 361, height: 240 };
_createForOfIteratorHelperLoose.flashIcon = { marginBottom: 32, marginTop: 132 };
_createForOfIteratorHelperLoose.subContainer = { flex: 1, paddingHorizontal: 16, paddingTop: 16 };
_createForOfIteratorHelperLoose.header = { alignItems: "center", paddingHorizontal: 12 };
_createForOfIteratorHelperLoose.headerText = { textAlign: "center", marginTop: 8 };
let obj3 = { gap: 16, padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginTop: 40 };
_createForOfIteratorHelperLoose.body = obj3;
let obj4 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginLeft: 48 };
_createForOfIteratorHelperLoose.divider = obj4;
_createForOfIteratorHelperLoose.infoRow = { display: "flex", flexDirection: "row", alignItems: "center", overflow: "hidden", gap: 16 };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.infoIcon = { padding: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.infoText = { flexShrink: 1 };
_createForOfIteratorHelperLoose.hint = { margin: 12 };
let obj6 = { position: "absolute", bottom: 0, left: require("_createForOfIteratorHelperLoose").space.PX_24, right: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.footer = obj6;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { padding: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
const result = require("result").fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoScreen.tsx");

export default function ICYMIInfoScreen(extendedOnboarding) {
  let bottom;
  let top;
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  let dependencyMap;
  const tmp = _createForOfIteratorHelperLoose();
  ({ top, bottom } = navigation(1557)());
  const tmp2 = navigation(1557)();
  let obj = extendedOnboarding(1456);
  navigation = obj.useNavigation();
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [extendedOnboarding, navigation];
  const items1 = [navigation];
  const callback = React.useCallback(callback2(obj), items);
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      header() {
        return null;
      }
    });
  }, items1);
  const tmp7 = callback(React.useState(false), 2);
  dependencyMap = tmp7[1];
  obj = {};
  obj = { style: items2 };
  items2 = [{ marginTop: top }, tmp.closeIcon];
  const obj1 = {
    source: navigation(9166),
    onPress() {
      return navigation(4337).pop();
    }
  };
  const intl = extendedOnboarding(1212).intl;
  obj1.accessibilityLabel = intl.string(extendedOnboarding(1212).t.cpT0Cq);
  obj1.color = tmp.closeIconColor.backgroundColor;
  obj.children = callback3(extendedOnboarding(9158).HeaderIconButton, obj1);
  const items3 = [callback3(closure_6, obj), , ];
  const obj2 = { style: items4 };
  items4 = [tmp.container, { marginBottom: bottom }];
  const obj3 = {};
  const obj4 = {};
  const tmp10 = callback3;
  const tmp12 = closure_7;
  const tmp3 = navigation(4066)();
  const tmp9 = closure_11;
  obj4.uri = navigation(15245);
  obj3.source = obj4;
  obj3.style = tmp.bgImage;
  const items5 = [callback3(navigation(5085), obj3), ];
  const obj5 = {};
  const items6 = [tmp.subContainer, ];
  const tmp13 = navigation(5085);
  items6[1] = { marginTop: top + navigation(689).space.PX_12 };
  obj5.style = items6;
  const obj7 = { style: tmp.header };
  const obj8 = {};
  const obj9 = {};
  const obj6 = { marginTop: top + navigation(689).space.PX_12 };
  if (tmp3 === ThemeTypes.LIGHT) {
    let tmp17 = navigation(15246);
  } else {
    tmp17 = navigation(15247);
  }
  obj9.uri = tmp17;
  obj8.source = obj9;
  obj8.style = tmp.headerImg;
  const items7 = [tmp10(navigation(5085), obj8), , , ];
  const obj10 = {};
  const tmp14 = navigation(5085);
  obj10.source = navigation(15248);
  obj10.style = tmp.flashIcon;
  items7[1] = callback3(navigation(5085), obj10);
  const obj11 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  const intl2 = extendedOnboarding(1212).intl;
  obj11.children = intl2.string(extendedOnboarding(1212).t["jnXV/V"]);
  items7[2] = callback3(extendedOnboarding(4126).Text, obj11);
  const obj12 = { variant: "text-md/normal", color: "text-default", style: tmp.headerText };
  const intl3 = extendedOnboarding(1212).intl;
  obj12.children = intl3.string(extendedOnboarding(1212).t["9SjvoK"]);
  items7[3] = callback3(extendedOnboarding(4126).Text, obj12);
  obj7.children = items7;
  const items8 = [callback4(closure_6, obj7), ];
  const obj13 = {};
  const obj14 = { style: tmp.body };
  const obj15 = { style: tmp.infoRow };
  const tmp21 = navigation(5085);
  const items9 = [callback3(closure_6, { style: tmp.infoIcon, children: callback3(extendedOnboarding(9048).ServerIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj17 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText };
  const intl4 = extendedOnboarding(1212).intl;
  obj17.children = intl4.string(extendedOnboarding(1212).t.knxfqR);
  items9[1] = callback3(extendedOnboarding(4126).Text, obj17);
  obj15.children = items9;
  const items10 = [callback4(closure_6, obj15), callback3(closure_6, { style: tmp.divider }), , , ];
  const obj19 = { style: tmp.infoRow };
  const obj16 = { style: tmp.infoIcon, children: callback3(extendedOnboarding(9048).ServerIcon, { size: "sm", color: "interactive-text-active" }) };
  const obj18 = { style: tmp.divider };
  const tmp22 = closure_6;
  const items11 = [callback3(closure_6, { style: tmp.infoIcon, children: callback3(extendedOnboarding(11958).NewUserIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj21 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText };
  const intl5 = extendedOnboarding(1212).intl;
  obj21.children = intl5.string(extendedOnboarding(1212).t.BnUXZi);
  items11[1] = callback3(extendedOnboarding(4126).Text, obj21);
  obj19.children = items11;
  items10[2] = callback4(closure_6, obj19);
  items10[3] = callback3(closure_6, { style: tmp.divider });
  const obj23 = { style: tmp.infoRow };
  const obj20 = { style: tmp.infoIcon, children: callback3(extendedOnboarding(11958).NewUserIcon, { size: "sm", color: "interactive-text-active" }) };
  const obj22 = { style: tmp.divider };
  const items12 = [callback3(closure_6, { style: tmp.infoIcon, children: callback3(extendedOnboarding(4091).CircleCheckIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj25 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText };
  const intl6 = extendedOnboarding(1212).intl;
  obj25.children = intl6.string(extendedOnboarding(1212).t.itb1rh);
  items12[1] = callback3(extendedOnboarding(4126).Text, obj25);
  obj23.children = items12;
  items10[4] = callback4(closure_6, obj23);
  obj14.children = items10;
  const items13 = [callback4(closure_6, obj14), ];
  const obj26 = { variant: "text-xs/medium", color: "text-muted", style: tmp.hint };
  const intl7 = extendedOnboarding(1212).intl;
  obj26.children = intl7.format(extendedOnboarding(1212).t["jVS/hc"], {
    feedbackHook(children) {
      const obj = {
        variant: "text-xs/medium",
        color: "text-link",
        onPress() {
          return navigation(paths[27]).openLazy(extendedOnboarding(paths[29])(paths[28], paths.paths), "ICYMIFeedbackSheet", {});
        },
        children
      };
      return outer1_9(extendedOnboarding(4126).Text, obj, arg1);
    }
  });
  items13[1] = callback3(extendedOnboarding(4126).Text, obj26);
  obj13.children = items13;
  items8[1] = callback4(closure_6, obj13);
  obj5.children = items8;
  items5[1] = callback4(closure_6, obj5);
  obj2.children = items5;
  items3[1] = callback4(tmp12, obj2);
  const obj28 = { style: items14 };
  items14 = [{ marginBottom: bottom }, tmp.footer];
  const obj29 = { size: "lg", loading: tmp7[0] };
  const intl8 = extendedOnboarding(1212).intl;
  const string = intl8.string;
  const t = extendedOnboarding(1212).t;
  if (extendedOnboarding) {
    let stringResult = string(t.LhlgY9);
  } else {
    stringResult = string(t["+IrDzN"]);
  }
  obj29.text = stringResult;
  obj29.onPress = callback;
  obj28.children = callback3(extendedOnboarding(4543).Button, obj29);
  items3[2] = callback3(tmp22, obj28);
  obj.children = items3;
  return callback4(tmp9, obj);
};
