// Module ID: 8707
// Function ID: 68932
// Name: LimitedTimeBadge
// Dependencies: [31, 27, 1921, 1278, 33, 4130, 689, 1212, 566, 3976, 6678, 4126, 2]
// Exports: default

// Module 8707 (LimitedTimeBadge)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingHorizontal: 8, paddingVertical: 2 };
_createForOfIteratorHelperLoose.root = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.backgroundDarkMode = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.backgroundLightMode = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/LimitedTimeBadge.tsx");

export default function LimitedTimeBadge(unpublishedAt) {
  let days;
  let hours;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_0(outer1_2[9]).isThemeDark(outer1_5.theme));
  let obj1 = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  const items2 = ["en-US", "en-GB"];
  const hasItem = items2.includes(obj1.useStateFromStores(items1, () => outer1_4.locale));
  ({ days, hours } = importDefault(6678)(unpublishedAt.unpublishedAt, 1000, undefined, true));
  if (hasItem) {
    if (days > 1) {
      const intl6 = require(1212) /* getSystemLocale */.intl;
      obj = { days };
      let formatToPlainStringResult = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t.DkxLY0, obj);
    } else {
      if (days <= 1) {
        if (hours > 0) {
          const intl5 = require(1212) /* getSystemLocale */.intl;
          obj = { hours };
          formatToPlainStringResult = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.WJieZ2, obj);
        }
      }
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj1 = { hours: 0 };
      formatToPlainStringResult = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.WJieZ2, obj1);
    }
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    let sum = days + intl.string(require(1212) /* getSystemLocale */.t.QJyuxY);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let sum1 = hours + intl2.string(require(1212) /* getSystemLocale */.t["1LyF1h"]);
    if (days <= 1) {
      if (days > 1) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        sum1 = `0${tmp11(require(1212) /* getSystemLocale */.t["1LyF1h"])}`;
      }
      sum = sum1;
    }
    const obj2 = {};
    const items3 = [tmp.root, stateFromStores ? tmp.backgroundDarkMode : tmp.backgroundLightMode, unpublishedAt.style];
    obj2.style = items3;
    const obj3 = {};
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    obj3.color = str2;
    obj3.variant = "text-xs/bold";
    const intl7 = require(1212) /* getSystemLocale */.intl;
    const obj4 = { daysLeft: days };
    obj3.accessibilityLabel = intl7.formatToPlainString(require(1212) /* getSystemLocale */.t.TlZULM, obj4);
    obj3.allowFontScaling = false;
    obj3.children = sum;
    obj2.children = jsx(require(4126) /* Text */.Text, {});
    return <View />;
  }
};
