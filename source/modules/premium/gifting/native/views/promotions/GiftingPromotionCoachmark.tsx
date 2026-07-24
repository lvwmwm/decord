// Module ID: 15658
// Function ID: 120725
// Name: GiftingPromotionCoachmarkActionSheet
// Dependencies: [31, 27, 4122, 653, 1345, 33, 4130, 689, 566, 9722, 5462, 5482, 4098, 9713, 5187, 477, 7964, 5085, 4126, 4543, 1212, 2]
// Exports: default

// Module 15658 (GiftingPromotionCoachmarkActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ AnalyticsSections: closure_6, AnalyticsObjects: closure_7, AnalyticsPages: closure_8 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.textContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.text = { textAlign: "center" };
let obj2 = { height: 188, width: 335, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.imageShared = obj2;
_createForOfIteratorHelperLoose.imageWrapperAndroid = { overflow: "hidden" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default function GiftingPromotionCoachmarkActionSheet(arg0) {
  let coachmarkComponent;
  let markAsDismissed;
  ({ coachmarkComponent, markAsDismissed } = arg0);
  let analyticsLocations;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = markAsDismissed(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  let obj1 = markAsDismissed(9722);
  let asset;
  if (null != coachmarkComponent) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj1.useThemeAndReducedMotionAwareAssetUrl(asset);
  analyticsLocations = analyticsLocations(5462)(analyticsLocations(5482).GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items1 = [analyticsLocations, markAsDismissed];
  let tmp8Result = null;
  if (null != coachmarkComponent) {
    obj = {
      startExpanded: true,
      onDismiss() {
          return markAsDismissed(outer1_9.USER_DISMISS);
        }
    };
    obj = { style: tmp.container };
    if (null == themeAndReducedMotionAwareAssetUrl) {
      const items2 = [tmp14, , ];
      obj1 = { style: tmp.textContainer };
      const obj2 = { style: tmp.text, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
      const items3 = [callback(markAsDismissed(4126).Text, obj2), ];
      const obj3 = { style: tmp.text, variant: "text-md/normal", color: "text-default", children: coachmarkComponent.body };
      items3[1] = callback(markAsDismissed(4126).Text, obj3);
      obj1.children = items3;
      items2[1] = callback2(View, obj1);
      let obj4 = { grow: true };
      const intl = markAsDismissed(1212).intl;
      obj4.text = intl.string(markAsDismissed(1212).t.RzWDqY);
      obj4.onPress = tmp6;
      items2[2] = callback(markAsDismissed(4543).Button, obj4);
      obj.children = items2;
      obj.children = tmp12(tmp13, obj);
      tmp8Result = tmp8(tmp11, obj);
    } else {
      obj4 = markAsDismissed(477);
      if (obj4.isAndroid()) {
        if (!stateFromStores) {
          const obj5 = {};
          const items4 = [, ];
          ({ imageShared: arr3[0], imageWrapperAndroid: arr3[1] } = tmp);
          obj5.style = items4;
          const obj6 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared };
          obj5.children = callback(analyticsLocations(7964), obj6);
          let tmp21 = callback(View, obj5);
        }
      }
      const obj7 = {};
      const obj8 = { uri: themeAndReducedMotionAwareAssetUrl };
      obj7.source = obj8;
      obj7.style = tmp.imageShared;
      tmp21 = callback(analyticsLocations(5085), obj7);
    }
    tmp8 = callback;
  }
  return tmp8Result;
};
