// Module ID: 12390
// Function ID: 96340
// Name: BuyNitroPlanSelector
// Dependencies: [31, 27, 5619, 4113, 482, 33, 4130, 689, 4973, 566, 7430, 12391, 12392, 7524, 1212, 12393, 7654, 7653, 7193, 5616, 477, 2]
// Exports: default

// Module 12390 (BuyNitroPlanSelector)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EUR_TO_HRK_CONVERSION_RATE as closure_5 } from "CustomCheckoutFlow";
import { CurrencyCodes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.hrkWarning = { borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, overflow: "hidden" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, overflow: "hidden" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelector.tsx");

export default function BuyNitroPlanSelector(planSelection) {
  let dependencyMap;
  let items;
  planSelection = planSelection.planSelection;
  const selection = planSelection.selection;
  ({ items, unavailableProductIds: dependencyMap } = planSelection);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = planSelection(566);
  items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let product = null;
    if (null != selection.productId) {
      product = product.getProduct(selection.productId);
    }
    return product;
  });
  let obj1 = planSelection(7430);
  const isBuyNitroPurchaseBlocked = obj1.useIsBuyNitroPurchaseBlocked();
  let obj2 = planSelection(12391);
  _isNativeReflectConstruct = obj2.useBuyNitroPlanLabelRenderer();
  let obj3 = planSelection(12392);
  let closure_5 = obj3.useBuyNitroPlanSubLabelRenderer();
  obj = {};
  obj = { style: tmp.header };
  obj1 = {};
  const intl = planSelection(1212).intl;
  obj1.title = intl.string(planSelection(1212).t.u95Dt4);
  const items1 = [callback(selection(7524), obj1), ];
  obj2 = { selectedTier: selection.tier, setSelectedTier: selection.setTier, disabled: isBuyNitroPurchaseBlocked };
  items1[1] = callback(selection(12393), obj2);
  obj.children = items1;
  const items2 = [callback2(isBuyNitroPurchaseBlocked, obj), , ];
  let tmp7 = null != selection.productId;
  if (tmp7) {
    obj3 = { hasIcons: false };
    ({ productId: obj9.value, setProductId: obj9.onChange } = selection);
    const found = items.filter((productId) => !set.has(productId.productId));
    obj3.children = found.map((productId) => {
      const obj = { value: productId.productId, label: product(planSelection, productId), subLabel: callback(planSelection, productId), disabled: isBuyNitroPurchaseBlocked };
      return outer1_7(planSelection(outer1_2[17]).TableRadioRow, obj, productId.productId);
    });
    tmp7 = callback(planSelection(7654).TableRadioGroup, obj3);
  }
  items2[1] = tmp7;
  let tmp11 = null != stateFromStores;
  if (tmp11) {
    tmp11 = "HR" === stateFromStores.countryCode;
  }
  if (tmp11) {
    tmp11 = stateFromStores.currencyCode.toLowerCase() === CurrencyCodes.EUR;
    const str2 = stateFromStores.currencyCode;
  }
  if (tmp11) {
    const obj4 = { style: tmp.hrkWarning };
    const obj5 = {};
    const intl2 = planSelection(1212).intl;
    const obj6 = {};
    const tmp17 = selection(7193);
    const obj7 = {};
    const result = stateFromStores.price * closure_5;
    const obj13 = planSelection(5616);
    obj7.convertToMajorUnits = planSelection(477).isAndroid();
    obj6.kunaPriceWithCurrency = obj13.formatPrice(result, CurrencyCodes.HRK, obj7);
    obj5.message = intl2.formatToPlainString(planSelection(1212).t["9hnZoK"], obj6);
    obj4.children = callback(tmp17, obj5);
    tmp11 = callback(isBuyNitroPurchaseBlocked, obj4);
    const obj15 = planSelection(477);
  }
  items2[2] = tmp11;
  obj.children = items2;
  return callback2(isBuyNitroPurchaseBlocked, obj);
};
