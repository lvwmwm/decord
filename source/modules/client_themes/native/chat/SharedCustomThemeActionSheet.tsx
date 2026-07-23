// Module ID: 11091
// Function ID: 86228
// Name: sharedClientThemeToThemeSettings
// Dependencies: [57, 31, 27, 3782, 653, 1851, 33, 4130, 689, 675, 11092, 3972, 5187, 5186, 1212, 2396, 4126, 7955, 4543, 566, 3776, 6661, 5484, 1273, 3973, 2]
// Exports: default

// Module 11091 (sharedClientThemeToThemeSettings)
import _slicedToArray from "_slicedToArray";
import closure_4 from "result";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_7;
let require = arg1;
function sharedClientThemeToThemeSettings(sharedClientTheme) {
  if (undefined !== sharedClientTheme) {
    const obj = {};
    const colors = sharedClientTheme.colors;
    obj.colors = colors.map((arg0) => "#" + arg0);
    obj.gradientColorStops = [];
    ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = sharedClientTheme);
    return obj;
  }
}
function PrimaryActionButton(onPressApply) {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = require(566) /* initialize */;
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getPremiumTypeSubscription());
  if (obj2.getPremiumTypeFromSubscription(stateFromStores) !== PremiumTypes.TIER_2) {
    obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.text = intl2.string(require(1212) /* getSystemLocale */.t.pj0XBN);
    obj.onPress = function onPressSubscribe() {
      const obj = { premiumType: outer1_11.TIER_2 };
      const items = [outer1_1(outer1_2[22]).SHARE_CUSTOM_CLIENT_THEME_EMBED];
      obj.analyticsLocations = items;
      obj.analyticsLocation = {};
      outer1_1(outer1_2[21])(obj);
    };
    obj.renderIcon = function renderIcon() {
      const style = [tmp.nitroWheelButton];
      return outer1_12(tmp(outer1_2[23]).NitroWheel, { style });
    };
    obj.style = tmp.getNitroButton;
    let tmp6 = callback4(require(1273) /* Button */.ShinyButton, obj);
  } else {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.text = intl.string(require(1212) /* getSystemLocale */.t["1Qm822"]);
    obj.onPress = onPressApply.onPressApply;
    obj.variant = "primary";
    tmp6 = callback4(require(4543) /* Button */.Button, obj);
  }
  return tmp6;
}
function getBaseThemeFromSharedClientTheme(sharedClientTheme) {
  if (undefined !== sharedClientTheme) {
    return require(3973) /* getThemeForColor */.getBaseTheme(sharedClientTheme.base_theme);
  }
}
({ useEffect: closure_5, useLayoutEffect: closure_6, useRef: closure_7 } = result);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { contentWrapper: { paddingHorizontal: 43.5, paddingVertical: 12 }, centeredText: { textAlign: "center" }, ctaContainer: { paddingHorizontal: 15, flexDirection: "column", display: "flex", gap: 6 }, nitroWheelButton: { marginStart: -2, width: 20, height: 20 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.getNitroButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
result = require("get ActivityIndicator").fileFinishedImporting("modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx");

export default function _default(message) {
  const sharedClientTheme = message.message.sharedClientTheme;
  let tmp = _createForOfIteratorHelperLoose();
  let tmp2 = callback3(null);
  const importDefault = tmp2;
  const tmp3 = callback(first1.useState(sharedClientThemeToThemeSettings(sharedClientTheme)), 2);
  const first = tmp3[0];
  callback = tmp3[1];
  const tmp5 = callback(first1.useState(getBaseThemeFromSharedClientTheme(sharedClientTheme)), 2);
  first1 = tmp5[0];
  const callback2 = tmp5[1];
  const tmp7 = callback(first1.useState(false), 2);
  const first2 = tmp7[0];
  callback3 = tmp7[1];
  const ref = first1.useRef(true);
  const items = [sharedClientTheme];
  callback2(() => {
    callback(outer1_15(sharedClientTheme));
    const tmp2 = callback2(outer1_17(sharedClientTheme));
    callback2(outer1_17(sharedClientTheme))(first[9]).track(outer1_10.CUSTOM_THEME_SHARE_PREVIEWED, {});
  }, items);
  const items1 = [first, first1];
  callback2(() => {
    let tmp = undefined !== first;
    if (tmp) {
      tmp = undefined !== first1;
    }
    if (tmp) {
      let obj = sharedClientTheme(first[10]);
      obj = { baseTheme: first1, customTheme: first };
      obj.previewCustomTheme(obj);
      sharedClientTheme(first[11]).refreshTheme();
      const obj3 = sharedClientTheme(first[11]);
    }
  }, items1);
  const items2 = [first2];
  first2(() => {
    ref.current = !first2;
  }, items2);
  const items3 = [ref];
  callback2(() => () => {
    if (outer1_8.current) {
      sharedClientTheme(first[10]).clearPreviewTheme();
      const obj = sharedClientTheme(first[10]);
      sharedClientTheme(first[11]).refreshTheme();
      const obj2 = sharedClientTheme(first[11]);
    }
  }, items3);
  let obj = { ref: tmp2, backdropOpacity: 0 };
  obj = {};
  const intl = sharedClientTheme(first[14]).intl;
  obj.title = intl.string(importDefault(first[15])["3ej1LT"]);
  const items4 = [callback4(sharedClientTheme(first[13]).BottomSheetTitleHeader, obj), , ];
  obj = { style: tmp.contentWrapper };
  const obj1 = { variant: "heading-md/medium", style: tmp.centeredText };
  const intl2 = sharedClientTheme(first[14]).intl;
  obj1.children = intl2.string(importDefault(first[15]).qZMUoL);
  obj.children = callback4(sharedClientTheme(first[16]).Text, obj1);
  items4[1] = callback4(ref, obj);
  let obj2 = { style: tmp.ctaContainer };
  const items5 = [
    callback4(PrimaryActionButton, {
      onPressApply() {
        let tmp = undefined !== first;
        if (tmp) {
          tmp = undefined !== first1;
        }
        if (tmp) {
          tmp = null !== tmp2.current;
        }
        if (tmp) {
          callback3(true);
          let obj = sharedClientTheme(first[10]);
          obj.updateCustomTheme(first, first1);
          obj = { customUserThemeSettings: first, theme: first1 };
          sharedClientTheme(first[17]).saveClientTheme(obj);
          const obj2 = sharedClientTheme(first[17]);
          sharedClientTheme(first[10]).clearPreviewTheme();
          const obj4 = sharedClientTheme(first[10]);
          tmp2(first[9]).track(outer1_10.CUSTOM_THEME_SHARE_APPLIED, {});
          const current = tmp2.current;
          current.closeActionSheet();
          const obj5 = tmp2(first[9]);
        }
      }
    }),

  ];
  let obj4 = {};
  const intl3 = sharedClientTheme(first[14]).intl;
  obj4.text = intl3.string(sharedClientTheme(first[14]).t["13/7kX"]);
  obj4.onPress = function onPress() {
    if (null !== tmp2.current) {
      sharedClientTheme(first[10]).clearPreviewTheme();
      const obj = sharedClientTheme(first[10]);
      sharedClientTheme(first[11]).refreshTheme();
      const current = tmp2.current;
      current.closeActionSheet();
      const obj2 = sharedClientTheme(first[11]);
    }
  };
  obj4.variant = "secondary";
  items5[1] = callback4(sharedClientTheme(first[18]).Button, obj4);
  obj2.children = items5;
  items4[2] = callback5(ref, obj2);
  obj.children = items4;
  return callback5(sharedClientTheme(first[12]).BottomSheet, obj);
};
