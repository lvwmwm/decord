// Module ID: 9325
// Function ID: 72852
// Name: PremiumUpsellTooltipActionSheet
// Dependencies: [31, 27, 1345, 33, 4130, 689, 3946, 5187, 1273, 4126, 4543, 4098, 2]
// Exports: default

// Module 9325 (PremiumUpsellTooltipActionSheet)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { justifyContent: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { alignSelf: "center", width: 231, height: 231, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginBottom: 16 };
_createForOfIteratorHelperLoose.img = obj1;
_createForOfIteratorHelperLoose.header = { flexDirection: "row", justifyContent: "center" };
_createForOfIteratorHelperLoose.title = { textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
_createForOfIteratorHelperLoose.nitroWheel = obj3;
const obj2 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.buttonContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("ContentDismissActionType").fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default function PremiumUpsellTooltipActionSheet(arg0) {
  let backdropProps;
  let closure_3;
  let dependencyMap;
  let description;
  let descriptionStyle;
  let imageSource;
  let imageStyle;
  let importDefault;
  let primaryButtonIcon;
  let primaryButtonText;
  let require;
  let secondaryButtonText;
  let title;
  ({ imageSource, dismissibleContent: require, primaryButtonIcon, secondaryButtonText, onDismiss: importDefault, onPrimaryButtonPress: dependencyMap, onSecondaryButtonPress: closure_3 } = arg0);
  function handleDismiss(dismissAction) {
    let tmp = null != dismissAction;
    if (tmp) {
      tmp = dismissAction !== outer1_5.DISMISS;
    }
    if (!tmp) {
      tmp = null == callback;
    }
    if (!tmp) {
      callback();
    }
    let obj = outer1_0(outer1_2[6]);
    obj = { forceTrack: true, dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_0, obj);
  }
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = { startExpanded: true };
  const merged = Object.assign(backdropProps);
  obj["onDismiss"] = handleDismiss;
  obj = { style: tmp.container };
  let tmp6 = null;
  if (null != imageSource) {
    obj = {};
    const items = [tmp.img, imageStyle];
    obj.style = items;
    obj.source = imageSource;
    tmp6 = callback(closure_3, obj);
  }
  const items1 = [tmp6, , , ];
  const obj1 = { style: tmp.header };
  const items2 = [callback(require(1273) /* Button */.NitroWheel, { style: tmp.nitroWheel }), ];
  const obj3 = { variant: "heading-xl/bold", style: tmp.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  items2[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items2;
  items1[1] = callback2(handleDismiss, obj1);
  const obj4 = { style: null, variant: "text-md/medium", color: "text-default" };
  const items3 = [tmp.description, descriptionStyle];
  obj4.style = items3;
  obj4.children = description;
  items1[2] = callback(require(4126) /* Text */.Text, obj4);
  const obj5 = { style: tmp.buttonContainer };
  const obj6 = {
    variant: "active",
    text: primaryButtonText,
    onPress() {
      callback2();
      outer1_1(outer1_2[11]).hideActionSheet();
      handleDismiss(outer1_5.PRIMARY);
    }
  };
  let primaryButtonIconResult;
  if (null != primaryButtonIcon) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  obj6.icon = primaryButtonIconResult;
  obj6.size = "lg";
  const items4 = [callback(require(4543) /* Button */.Button, obj6), ];
  let tmp13 = null;
  if (null != secondaryButtonText) {
    const obj7 = {
      variant: "secondary",
      text: secondaryButtonText,
      onPress() {
          if (null != callback3) {
            callback3();
          }
          outer1_1(outer1_2[11]).hideActionSheet();
          handleDismiss(outer1_5.DISMISS);
        },
      size: "lg"
    };
    tmp13 = callback(require(4543) /* Button */.Button, obj7);
  }
  items4[1] = tmp13;
  obj5.children = items4;
  items1[3] = callback2(handleDismiss, obj5);
  obj.children = items1;
  obj["children"] = callback2(handleDismiss, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
