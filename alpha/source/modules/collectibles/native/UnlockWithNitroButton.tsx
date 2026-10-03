// Module ID: 12996
// Function ID: 12997
// Name: UnlockWithNitroButton
// Dependencies: [19, 6739, 7068, 1087, 21, 558, 576, 6742, 504, 12982, 1126, 4886, 8313, 5595, 2]

// Module 12996 (UnlockWithNitroButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import ProductIds from "ProductIds" /* 6742 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 12982 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 6739 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7068 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let tmp;
const intl2 = tmp(1126);
const Text_Text = tmp(4886);
const BaseTextButton2 = tmp(5595);
const NitroWheelIcon = tmp(8313);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  let closure_1;
  let isClaiming;
  let onTrackPress;
  let purchasingProduct;
  let shouldShrink;
  let tmp11;
  let tmp5;
  let tmp6;
  const tmp = onTrackPress;
  const obj = onTrackPress(576);
  const cResult = obj.c(18);
  ({ shouldShrink, onTrackPress } = text);
  text = text.text;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore, IAPStore];
    const fn = function u() {
      const isPurchasingProductResult = null != isClaiming.isClaiming || purchasingProduct.isPurchasingProduct(onTrackPress(dependencyMap[7]).ProductIds.GENERIC_CONSUMABLE);
      return isPurchasingProductResult;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp10 = useOpenNitroSubscribeActionSheetDefault();
  importDefault = tmp10;
  if (cResult[2] !== text) {
    let stringResult = text;
    if (text == null) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.sEAnVH);
    }
    cResult[2] = text;
    cResult[3] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp11) {
    let tmp14;
    let tmp18;
    if (cResult[5] === (undefined !== shouldShrink && shouldShrink)) {
      tmp14 = cResult[6];
    }
    let str = "md";
    if (undefined !== shouldShrink && shouldShrink) {
      str = "sm";
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp20 = jsx(tmp(8313).NitroWheelIcon, { size: "sm", color: "white" });
      cResult[7] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] === tmp10) {
      let tmp21;
      if (cResult[9] === onTrackPress) {
        tmp21 = cResult[10];
      }
      if (cResult[11] === tmp11) {
        if (cResult[12] === stateFromStores) {
          if (cResult[13] === tmp14) {
            if (cResult[14] === tmp17) {
              if (cResult[15] === str) {
                let tmp22;
                if (cResult[16] === tmp21) {
                  tmp22 = cResult[17];
                }
                return tmp22;
              }
            }
          }
        }
      }
      class T {
        constructor() {
          if (onTrackPress != null) {
            tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
          }
          closure_1();
        }
      }
      const tmp24 = jsx(tmp(5595).BaseTextButton, { textElement: tmp14, text: tmp17, accessibilityLabel: tmp11, variant: "primary", size: str, grow: true, icon: tmp18, onPress: null, disabled: stateFromStores });
      cResult[11] = tmp11;
      cResult[12] = stateFromStores;
      cResult[13] = tmp14;
      cResult[14] = tmp17;
      cResult[15] = str;
      cResult[16] = tmp21;
      cResult[17] = tmp24;
      tmp22 = tmp24;
    }
    class T {
      constructor() {
        if (onTrackPress != null) {
          tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
        }
        closure_1();
      }
    }
    cResult[8] = tmp10;
    cResult[9] = onTrackPress;
    cResult[10] = T;
    tmp21 = T;
  }
  let tmp15;
  if (undefined !== shouldShrink && shouldShrink) {
    tmp15 = jsx(tmp(4886).Text, { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: tmp11 });
  }
  cResult[4] = tmp11;
  cResult[5] = undefined !== shouldShrink && shouldShrink;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : ((shouldShrink) => {
  let closure_1;
  let isClaiming;
  let purchasingProduct;
  let str;
  let text;
  let tmp6;
  let flag = shouldShrink.shouldShrink;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: require, text } = shouldShrink);
  const tmp = require;
  const items = [CollectiblesPurchaseStore, IAPStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const isPurchasingProductResult = null != isClaiming.isClaiming || purchasingProduct.isPurchasingProduct(ProductIds.ProductIds.GENERIC_CONSUMABLE);
    return isPurchasingProductResult;
  });
  importDefault = useOpenNitroSubscribeActionSheetDefault();
  if (text == null) {
    const intl = intl2.intl;
    text = intl.string(intl2.t.sEAnVH);
  }
  let tmp4Result;
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  if (flag) {
    const obj2 = { variant: "text-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: text };
    tmp4Result = tmp4(Text_Text.Text, obj2);
  }
  const obj3 = {
    textElement: tmp4Result,
    text: tmp6,
    accessibilityLabel: text,
    variant: "primary",
    size: str,
    grow: true,
    icon: jsx(NitroWheelIcon.NitroWheelIcon, { size: "sm", color: "white" }),
    onPress() {
      if (require != null) {
        tmp(ShopCtaEnum.UNLOCK_WITH_NITRO);
      }
      closure_1();
    },
    disabled: stateFromStores
  };
  tmp6 = undefined;
  if (!flag) {
    tmp6 = text;
  }
  str = "md";
  if (flag) {
    str = "sm";
  }
  return jsx(BaseTextButton, obj3);
});
const result = size.fileFinishedImporting("modules/collectibles/native/UnlockWithNitroButton.tsx");

export const UnlockWithNitroButton = tmp3;
