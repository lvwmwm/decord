// Module ID: 13804
// Function ID: 105770
// Name: FamilyCenterActivityPurchaseRow
// Dependencies: [31, 27, 33, 4130, 689, 7857, 13805, 5618, 13806, 4126, 2]
// Exports: default

// Module 13804 (FamilyCenterActivityPurchaseRow)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.textContainer = { display: "flex", flexDirection: "column", flexShrink: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx");

export default function FamilyCenterActivityPurchaseRow(arg0) {
  let currency;
  let displayName;
  let isSubscription;
  let skuId;
  let subscriptionPlanId;
  let total;
  let typeName;
  ({ skuId, subscriptionPlanId } = arg0);
  ({ total, currency } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const product = importDefault(7857)(skuId).product;
  let obj = require(13805) /* getCollectibleTypeName */;
  let tmp2 = null;
  if (null != product) {
    tmp2 = product;
  }
  const purchaseDisplayInfo = obj.getPurchaseDisplayInfo(tmp2, subscriptionPlanId);
  ({ displayName, typeName, isSubscription } = purchaseDisplayInfo);
  if (null != skuId) {
    if (!isSubscription) {
      if (null == product) {
        return null;
      }
    }
  }
  if (null == displayName) {
    return null;
  } else {
    let combined = displayName;
    const obj7 = require(5618) /* formatSingleCurrencyPrice */;
    if (null != typeName) {
      const _HermesInternal = HermesInternal;
      combined = "" + displayName + " \u2022 " + typeName;
    }
    obj = { style: tmp.container };
    obj = { displayName };
    let tmp12 = null;
    const formatPriceResult = require(5618) /* formatSingleCurrencyPrice */.formatPrice(total, currency);
    const tmp6 = callback2;
    const tmp7 = View;
    const tmp8 = callback;
    if (null != product) {
      tmp12 = product;
    }
    obj.product = tmp12;
    obj.isSubscription = isSubscription;
    obj.subscriptionPlanId = subscriptionPlanId;
    const items = [tmp8(importDefault(13806), obj), ];
    const obj1 = { style: tmp.textContainer };
    const obj2 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: combined };
    const items1 = [callback(require(4126) /* Text */.Text, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: formatPriceResult };
    items1[1] = callback(require(4126) /* Text */.Text, obj3);
    obj1.children = items1;
    items[1] = callback2(View, obj1);
    obj.children = items;
    return tmp6(tmp7, obj);
  }
};
