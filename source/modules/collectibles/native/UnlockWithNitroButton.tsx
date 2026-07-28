// Module ID: 11890
// Function ID: 91999
// Name: UnlockWithNitroButton
// Dependencies: [31, 5654, 5796, 655, 33, 566, 5657, 8736, 1212, 4579, 4161, 6606, 2]
// Exports: UnlockWithNitroButton

// Module 11890 (UnlockWithNitroButton)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { ShopCtaEnum } from "items";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/UnlockWithNitroButton.tsx");

export const UnlockWithNitroButton = function UnlockWithNitroButton(shouldShrink) {
  let require;
  let text;
  let flag = shouldShrink.shouldShrink;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: require, text } = shouldShrink);
  let importDefault;
  let obj = require(566) /* initialize */;
  const items = [closure_4, _isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPurchasingProductResult = null != outer1_4.isClaiming;
    if (!isPurchasingProductResult) {
      isPurchasingProductResult = outer1_3.isPurchasingProduct(outer1_0(outer1_2[6]).ProductIds.GENERIC_CONSUMABLE);
    }
    return isPurchasingProductResult;
  });
  importDefault = importDefault(8736)();
  if (null == text) {
    const intl = require(1212) /* getSystemLocale */.intl;
    text = intl.string(require(1212) /* getSystemLocale */.t.sEAnVH);
  }
  obj = {};
  let tmp5;
  if (flag) {
    obj = { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: text };
    tmp5 = jsx(require(4161) /* Text */.Text, { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: text });
  }
  obj.textElement = tmp5;
  let tmp9;
  if (!flag) {
    tmp9 = text;
  }
  obj.text = tmp9;
  obj.accessibilityLabel = text;
  obj.variant = "primary";
  let str = "md";
  if (flag) {
    str = "sm";
  }
  obj.size = str;
  obj.grow = true;
  obj.icon = jsx(require(6606) /* NitroWheelIcon */.NitroWheelIcon, { size: "sm", color: "white" });
  obj.onPress = function onPress() {
    if (null != callback) {
      callback(outer1_5.UNLOCK_WITH_NITRO);
    }
    callback2();
  };
  obj.disabled = stateFromStores;
  return jsx(require(4579) /* CollapsingText */.BaseTextButton, {});
};
