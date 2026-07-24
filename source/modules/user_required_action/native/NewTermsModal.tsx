// Module ID: 16251
// Function ID: 126103
// Name: handleTouch
// Dependencies: [5, 57, 31, 27, 1342, 653, 33, 4130, 689, 5495, 1212, 5588, 1557, 5093, 4540, 7976, 8604, 480, 4126, 4543, 8518, 8512, 2]
// Exports: default

// Module 16251 (handleTouch)
import closure_3 from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function handleTouch() {
  closure_7.dismiss();
}
function handleMoreActions() {
  let obj = require(5495) /* showSimpleActionSheet */;
  obj = { key: "NewTermsModalMore", options: null, hasIcons: false };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["2jxGer"]);
  obj.isDestructive = true;
  obj.onPress = function onPress() {
    return outer1_1(outer1_2[11]).logout("new_terms_modal");
  };
  const items = [obj];
  obj.options = items;
  const result = obj.showSimpleActionSheet(obj);
}
({ View: closure_6, Keyboard: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ MarketingURLs: closure_10, UserRequiredActions: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, flexGrow: 1, display: "flex", alignContent: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollView = { flex: 1 };
_createForOfIteratorHelperLoose.container = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.description = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.agreementDescription = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj4 = { position: "absolute", right: 0, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.navbarRight = obj4;
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.stickyFooter = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let result = require("result").fileFinishedImporting("modules/user_required_action/native/NewTermsModal.tsx");

export default function NewTermsModal() {
  const tmp = _createForOfIteratorHelperLoose();
  const rect = importDefault(1557)();
  const top = rect.top;
  const memo = React.useMemo(() => outer1_9.getAction(), []);
  const tmp3 = callback2(React.useState(false), 2);
  importDefault = tmp3[1];
  let obj = memo(5093);
  // CreateGeneratorClosureLongIndex (0x67)
  const dependencyMap = React.useCallback(callback(obj.useNavigatorBackPressHandler(memo(4540).BackPressHandler.minimize)), []);
  obj = { type: memo(480).ImpressionTypes.VIEW, name: memo(480).ImpressionNames.USER_AGREEMENTS, properties: { required_action: memo } };
  importDefault(8604)(obj, {}, []);
  let tmp6 = null;
  if (null != memo) {
    obj = {};
    const items = [tmp.container, ];
    const obj1 = { paddingTop: top, paddingBottom: rect.bottom };
    items[1] = obj1;
    obj.style = items;
    const obj2 = {};
    const items1 = [tmp.scrollView];
    obj2.style = items1;
    obj2.contentContainerStyle = tmp.contentContainer;
    obj2.onTouchStart = handleTouch;
    const obj3 = { maxFontSizeMultiplier: 2, variant: "heading-xxl/bold" };
    const intl = memo(1212).intl;
    obj3.children = intl.string(memo(1212).t["7glvXu"]);
    const items2 = [callback3(memo(4126).Text, obj3), , , , , , ];
    const obj4 = { variant: "text-md/normal", style: tmp.description };
    const intl2 = memo(1212).intl;
    const obj5 = { url: constants.TERMS_SUMMARY };
    obj4.children = intl2.format(memo(1212).t.CN0Hvb, obj5);
    items2[1] = callback3(memo(4126).Text, obj4);
    const obj6 = { variant: "text-md/normal" };
    const intl3 = memo(1212).intl;
    const obj7 = { url: constants.TERMS };
    obj6.children = intl3.format(memo(1212).t.iw0hFi, obj7);
    items2[2] = callback3(memo(4126).Text, obj6);
    const obj8 = { variant: "text-md/normal" };
    const intl4 = memo(1212).intl;
    const obj9 = { url: constants.PAID_TERMS };
    obj8.children = intl4.format(memo(1212).t["36klnD"], obj9);
    items2[3] = callback3(memo(4126).Text, obj8);
    const obj10 = { variant: "text-md/normal" };
    const intl5 = memo(1212).intl;
    const obj11 = { url: constants.PRIVACY };
    obj10.children = intl5.format(memo(1212).t.TquFBF, obj11);
    items2[4] = callback3(memo(4126).Text, obj10);
    const obj12 = { variant: "text-md/normal" };
    const intl6 = memo(1212).intl;
    const obj13 = { url: constants.GUIDELINES };
    obj12.children = intl6.format(memo(1212).t.ia96Tb, obj13);
    items2[5] = callback3(memo(4126).Text, obj12);
    const obj14 = { variant: "text-md/normal", style: tmp.agreementDescription };
    const intl7 = memo(1212).intl;
    obj14.children = intl7.string(memo(1212).t["+USXQE"]);
    items2[6] = callback3(memo(4126).Text, obj14);
    obj2.children = items2;
    const items3 = [callback4(closure_8, obj2), , ];
    const obj15 = { style: tmp.stickyFooter };
    const obj16 = {
      loading: tmp3[0],
      onPress() {
          if (memo === outer1_11.AGREEMENTS) {
            callback();
          }
        }
    };
    const intl8 = memo(1212).intl;
    obj16.text = intl8.string(memo(1212).t["+TBKL1"]);
    obj15.children = callback3(memo(4543).Button, obj16);
    items3[1] = callback3(closure_6, obj15);
    const obj17 = {};
    const items4 = [tmp.navbarRight, ];
    const obj18 = { top };
    items4[1] = obj18;
    obj17.style = items4;
    obj17.source = importDefault(8512);
    obj17.color = tmp.navbarRight.tintColor;
    obj17.onPress = handleMoreActions;
    obj17.accessibilityRole = "button";
    const intl9 = memo(1212).intl;
    obj17.accessibilityLabel = intl9.string(memo(1212).t["UKOtz+"]);
    items3[2] = callback3(importDefault(8518), obj17);
    obj.children = items3;
    tmp6 = callback4(closure_6, obj);
    const tmp16 = importDefault(8518);
  }
  return tmp6;
};
