// Module ID: 12230
// Function ID: 12231
// Name: UnlockWithNitroButton
// Dependencies: [19, 5897, 7059, 678, 21, 589, 5900, 9612, 1236, 4755, 4340, 7745, 2]
// Exports: UnlockWithNitroButton

// Module 12230 (UnlockWithNitroButton)
import "noop";
import updateProduct from "updateProduct";
import map from "map";
import { ShopCtaEnum } from "items";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/collectibles/native/UnlockWithNitroButton.tsx");

export const UnlockWithNitroButton = function UnlockWithNitroButton(shouldShrink) {
  let require;
  let text;
  let flag = shouldShrink.shouldShrink;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: require, text } = shouldShrink);
  let importDefault;
  let obj = require(589) /* initialize */;
  const items = [map, updateProduct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPurchasingProductResult = null != isClaiming.isClaiming;
    if (!isPurchasingProductResult) {
      isPurchasingProductResult = purchasingProduct.isPurchasingProduct(callback(table[6]).ProductIds.GENERIC_CONSUMABLE);
    }
    return isPurchasingProductResult;
  });
  importDefault = importDefault(9612)();
  if (text == null) {
    const intl = tmp(1236).intl;
    text = intl.string(tmp(1236).t.sEAnVH);
  }
  let tmp4Result;
  if (flag) {
    obj = { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: null };
    obj[3] = text;
    tmp4Result = tmp4(tmp(4340).Text, obj);
  }
  obj = { textElement: tmp4Result, text: null, accessibilityLabel: null, variant: "primary", size: null, grow: true, icon: null, onPress: null, disabled: null };
  let tmp6;
  if (!flag) {
    tmp6 = text;
  }
  obj[1] = tmp6;
  obj[2] = text;
  let str = "md";
  if (flag) {
    str = "sm";
  }
  obj[4] = str;
  obj[6] = jsx(require(7745) /* NitroWheelIcon */.NitroWheelIcon, { size: "sm", color: "white" });
  obj[7] = function onPress() {
    if (closure_0 != null) {
      tmp(outer1_5.UNLOCK_WITH_NITRO);
    }
    callback2();
  };
  obj[8] = stateFromStores;
  return jsx(require(4755) /* CollapsingText */.BaseTextButton, { textElement: tmp4Result, text: null, accessibilityLabel: null, variant: "primary", size: null, grow: true, icon: null, onPress: null, disabled: null });
};
