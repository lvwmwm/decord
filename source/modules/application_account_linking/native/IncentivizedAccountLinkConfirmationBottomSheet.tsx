// Module ID: 15626
// Function ID: 120530
// Name: IncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [31, 27, 4122, 653, 33, 566, 14497, 477, 7876, 14498, 5085, 4543, 1212, 10157, 689, 4098, 3827, 1920, 11548, 2844, 2]
// Exports: default

// Module 15626 (IncentivizedAccountLinkConfirmationBottomSheet)
import "result";
import { Image } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  if (obj.useStateFromStores(items, () => outer1_4.useReducedMotion)) {
    obj = {};
    obj = { uri: importDefault(14497) };
    obj.source = obj;
    obj.style = { width: 150, height: 150 };
    let tmp3Result = <Image uri={importDefault(14497)} />;
  } else {
    let obj1 = require(477) /* set */;
    if (obj1.isAndroid()) {
      obj1 = {};
      let tmp4Result = tmp4(7876);
      obj1.url = tmp4(14498);
      obj1.style = { width: 150, height: 150 };
      tmp3Result = tmp3(tmp4Result, obj1);
    } else {
      let obj2 = {};
      const obj3 = {};
      tmp4Result = tmp4(5085);
      obj3.uri = tmp4(14498);
      obj2.source = obj3;
      obj2.resizeMode = "contain";
      obj2.style = { width: 150, height: 150 };
      tmp3Result = tmp3(tmp4Result, obj2);
    }
  }
  const obj4 = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl.string(require(1212) /* getSystemLocale */.t.aRIFWD);
  const obj5 = { size: "sm", color: importDefault(689).colors.WHITE };
  obj4.icon = jsx(require(10157) /* WindowLaunchIcon */.WindowLaunchIcon, { size: "sm", color: importDefault(689).colors.WHITE });
  obj4.iconPosition = "end";
  obj4.size = "lg";
  obj4.onPress = function onPress() {
    outer1_1(outer1_2[15]).hideActionSheet();
    const obj = outer1_1(outer1_2[15]);
    const obj2 = outer1_1(outer1_2[16]);
    obj2.openURL(outer1_1(outer1_2[17]).getArticleURL(outer1_5.IN_GAME_FEATURES));
  };
  const obj6 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj6.title = intl2.string(importDefault(2844).ublzTG);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.description = intl3.string(importDefault(2844).JgM2xu);
  obj6.actions = jsx(require(4543) /* Button */.Button, {});
  obj6.illustration = tmp3Result;
  obj6.onDismiss = function onDismiss() {
    outer1_1(outer1_2[15]).hideActionSheet();
  };
  return jsx(require(11548) /* PromoSheet */.PromoSheet, {});
};
