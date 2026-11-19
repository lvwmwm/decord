// Module ID: 14159
// Function ID: 14160
// Name: UnlockWithNitroButton
// Dependencies: [19, 8691, 7971, 1074, 21, 504, 8051, 14141, 1113, 5391, 5383, 8832, 2]
// Exports: UnlockWithNitroButton

// Module 14159 (UnlockWithNitroButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import ProductIds from "ProductIds" /* 8051 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 14141 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 8691 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7971 */;
import size from "module_2" /* 2 */;

let importDefault;

let tmp;
const intl2 = tmp(1113);
const Text_Text = tmp(5383);
const BaseTextButton2 = tmp(5391);
const NitroWheelIcon = tmp(8832);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/collectibles/native/UnlockWithNitroButton.tsx");

export function UnlockWithNitroButton(shouldShrink) {
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
    const obj2 = { variant: "body-xs/semibold", color: "text-overlay-light", allowFontScaling: false, children: text };
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
}
