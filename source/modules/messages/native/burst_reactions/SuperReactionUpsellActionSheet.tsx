// Module ID: 9316
// Function ID: 72837
// Name: items
// Dependencies: [31, 27, 1849, 653, 33, 1334, 9317, 9318, 9319, 9320, 9321, 9322, 9323, 4130, 689, 5464, 566, 3776, 8139, 7999, 22, 9324, 7037, 9325, 1212, 7026, 1273, 4098, 2]
// Exports: default

// Module 9316 (items)
import result from "result";
import get_ActivityIndicator from "showActionSheet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticsPages } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
const View = get_ActivityIndicator.View;
let closure_8 = require("DismissibleContent").DismissibleContent.SUPER_REACTIONS_COACHMARK_MOBILE;
let items = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["flex"] = 1;
_createForOfIteratorHelperLoose["alignItems"] = "center";
_createForOfIteratorHelperLoose["justifyContent"] = "center";
_createForOfIteratorHelperLoose["top"] = -150;
_createForOfIteratorHelperLoose.fill = _createForOfIteratorHelperLoose;
const obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE, width: 32, height: 32, marginVertical: -8, marginRight: -4 };
_createForOfIteratorHelperLoose.nitroIcon = obj1;
_createForOfIteratorHelperLoose.description = { paddingHorizontal: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx");

export default function SuperReactionCoachmarkActionSheet(onDismiss) {
  let tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  analyticsLocations = analyticsLocations(obj[15])().analyticsLocations;
  obj = { page: AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS };
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(obj[16]).useStateFromStores(items, () => outer1_5.getCurrentUser());
  const obj2 = require(obj[16]);
  [][0] = tmp;
  const obj3 = require(obj[17]);
  let tmp5 = null;
  if (!isPremiumResult) {
    obj = {};
    const intl = require(obj[24]).intl;
    obj.title = intl.string(require(obj[24]).t.Wfl5zp);
    obj = {};
    obj.backdropOpacity = require(obj[25]).BACKDROP_OPACITY;
    obj.backdropChildren = tmp4;
    obj.backdropProps = obj;
    const intl2 = require(obj[24]).intl;
    obj.description = intl2.string(require(obj[24]).t.eikz43);
    obj.descriptionStyle = tmp.description;
    obj.dismissibleContent = closure_8;
    const intl3 = require(obj[24]).intl;
    obj.primaryButtonText = intl3.string(require(obj[24]).t.sEAnVH);
    obj.primaryButtonIcon = function primaryButtonIcon() {
      const obj = { style: tmp.nitroIcon };
      return outer1_7(tmp(obj[26]).NitroWheel, obj);
    };
    obj.onPrimaryButtonPress = function onPrimaryButtonPress() {
      obj = analyticsLocations(obj[27]);
      obj.hideActionSheet();
      obj = { analyticsLocation: obj, analyticsLocations };
      obj.premiumFeatureCardOrder = tmp(obj[19]).PremiumFeatureCardOrder.TIER_2_LEADING;
      analyticsLocations(obj[18])(obj);
    };
    const intl4 = require(obj[24]).intl;
    obj.secondaryButtonText = intl4.string(require(obj[24]).t.TulDPl);
    obj.onDismiss = onDismiss.onDismiss;
    tmp5 = jsx(analyticsLocations(obj[23]), {});
    const tmp9 = analyticsLocations(obj[23]);
  }
  return tmp5;
};
