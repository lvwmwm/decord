// Module ID: 16792
// Function ID: 16793
// Name: FamilyCenterActivityPurchaseRow
// Dependencies: [19, 17, 21, 5014, 575, 8744, 16793, 7413, 16794, 5624, 2]
// Exports: default

// Module 16792 (FamilyCenterActivityPurchaseRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import PriceUtils from "PriceUtils" /* 7413 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8744 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 16793 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp2;
const FamilyCenterActivityItemPreviewDefault = tmp2(16794);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, textContainer: { display: "flex", flexDirection: "column", flexShrink: 1 } };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx");

export default function FamilyCenterActivityPurchaseRow(arg0) {
  let currency;
  let displayName;
  let isSubscription;
  let items;
  let items1;
  let skuId;
  let subscriptionPlanId;
  let total;
  let typeName;
  ({ skuId, subscriptionPlanId } = arg0);
  ({ total, currency } = arg0);
  const tmp = closure_6();
  let product = useCollectiblesDataDefault(skuId).product;
  let tmp7 = product;
  const getPurchaseDisplayInfo = FamilyCenterActivityPurchaseRowUtils.getPurchaseDisplayInfo;
  FamilyCenterActivityPurchaseRowUtils;
  if (product == null) {
    tmp7 = null;
  }
  const purchaseDisplayInfo = getPurchaseDisplayInfo(tmp7, subscriptionPlanId);
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
    const tmp5Result = PriceUtils;
    const formatPriceResult = tmp5Result.formatPrice(total, currency);
    if (null != typeName) {
      const _HermesInternal = HermesInternal;
      combined = "" + displayName + " \u2022 " + typeName;
    }
    const obj = { style: tmp.container, children: items };
    const obj2 = { displayName, product, isSubscription, subscriptionPlanId };
    const tmp2Result = FamilyCenterActivityItemPreviewDefault;
    if (product == null) {
      product = null;
    }
    items = [React3(tmp2Result, obj2), ];
    const obj3 = { style: tmp.textContainer, children: items1 };
    const obj4 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: combined };
    items1 = [React3(Text_Text.Text, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: formatPriceResult };
    items1[1] = React3(Text_Text.Text, obj5);
    items[1] = hasOwnProperty(View, obj3);
    return hasOwnProperty(View, obj);
  }
};
