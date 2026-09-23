// Module ID: 13568
// Function ID: 13569
// Name: EditCollectiblesPreviewDetails
// Dependencies: [19, 17, 2109, 21, 4827, 504, 4481, 7882, 4505, 4823, 1115, 8517, 2]
// Exports: default

// Module 13568 (EditCollectiblesPreviewDetails)
import initialize from "initialize" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4481 */;
import Text_Text from "Text/Text" /* 4823 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7882 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8517 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2109 */;

require = fn;
function EditCollectiblesPreviewDescription(arg0) {
  ({ user, purchase } = arg0);
  let stringResult = dependencyMap;
  ({ product, nitroJoinCTA, nitroUpgradeCTA } = arg0);
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => locale.locale);
  const canUseCollectiblesResult = PremiumUtilsDefault.canUseCollectibles(user);
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
  if (!result) {
    result = tmp(7882).isPremiumCollectiblesPurchase(purchase);
    const tmpResult = tmp(7882);
  }
  let result1 = !canUseCollectiblesResult;
  if (!canUseCollectiblesResult) {
    result1 = tmp(7882).isPremiumCollectiblesPurchase(purchase);
    const tmpResult3 = tmp(7882);
  }
  if (null != purchase) {
    if (!result1) {
      let expiresAt1;
      if (purchase != null) {
        expiresAt1 = purchase.expiresAt;
      }
      let diffAsUnitsResult = null;
      if (null != expiresAt1) {
        const _Date = Date;
        const date = new Date();
        diffAsUnitsResult = tmp(4505).diffAsUnits(date, purchase.expiresAt);
        const tmpResult4 = tmp(4505);
      }
      let tmp17 = null != diffAsUnitsResult;
      if (tmp17) {
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl = tmp(1115).intl;
        const obj5 = { days: diffAsUnitsResult.days.toString() };
        obj4.children = intl.format(tmp(1115).t.Io7ozn, obj5);
        tmp17 = hasOwnProperty(tmp(4823).Text, obj4);
      }
      const items1 = [tmp17, , ];
      const intl2 = tmp(1115).intl;
      let toLocaleDateStringResult;
      if (purchase != null) {
        const purchasedAt = purchase.purchasedAt;
        toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, { month: "long", year: "numeric" });
      }
      const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
      const obj7 = { date: toLocaleDateStringResult };
      obj6.children = intl2.format(tmp(1115).t.gW9R4B, obj7);
      items1[1] = hasOwnProperty(tmp(4823).Text, obj6);
      let expiresAt2;
      if (purchase != null) {
        expiresAt2 = purchase.expiresAt;
      }
      let tmp19Result = null != expiresAt2;
      if (tmp19Result) {
        const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl3 = tmp(1115).intl;
        const obj9 = { date: null };
        const expiresAt = purchase.expiresAt;
        obj9.date = expiresAt.toLocaleDateString(stateFromStores, { minute: "numeric", hour: "numeric", day: "numeric", month: "long", year: "numeric" });
        obj8.children = intl3.format(tmp(1115).t.eZSTa5, obj9);
        tmp19Result = tmp19(tmp(4823).Text, obj8);
      }
      const obj10 = { children: null };
      items1[2] = tmp19Result;
      obj10.children = items1;
      return React5(timestampProducer, obj10);
    }
  }
  if (result) {
    if (canUseCollectiblesResult) {
      const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl5 = tmp(1115).intl;
      stringResult = intl5.string(tmp(1115).t.hmyYK8);
      obj11.children = stringResult;
      let tmp25Result = hasOwnProperty(tmp(4823).Text, obj11);
    } else {
      const tmp4Result = PremiumUtilsDefault;
      const Text = tmp(4823).Text;
      const obj12 = { variant: "text-sm/medium", color: "text-default", children: null };
      if (isPremiumResult) {
        obj12.children = nitroUpgradeCTA;
        tmp25Result = tmp25(Text, obj12);
      } else {
        obj12.children = nitroJoinCTA;
        tmp25Result = tmp25(Text, obj12);
      }
      isPremiumResult = PremiumUtilsDefault.isPremium(user);
    }
  } else {
    const obj13 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl4 = tmp(1115).intl;
    obj13.children = intl4.string(tmp(1115).t.fEGjVQ);
    return hasOwnProperty(tmp(4823).Text, obj13);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let closure_8 = createStyles.createStyles({ productDetailsContainer: { width: "100%", marginTop: 16, alignItems: "center", gap: 2 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesPreviewDetails.tsx");

export default function EditCollectiblesPreviewDetails(previewSkuId) {
  previewSkuId = previewSkuId.previewSkuId;
  ({ user, nitroJoinCTA, nitroUpgradeCTA } = previewSkuId);
  const tmp = closure_8();
  ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
  let tmp5Result = null;
  if (null != previewSkuId) {
    if (null != product) {
      const obj = { style: tmp.productDetailsContainer, children: null };
      let name;
      if (product != null) {
        name = product.name;
      }
      if (name == null) {
        let name1;
        if (purchase != null) {
          name1 = purchase.name;
        }
        name = name1;
      }
      const obj2 = { variant: "text-md/bold", color: "text-default", children: name };
      const items = [hasOwnProperty(Text_Text.Text, obj2), ];
      const obj3 = { user, product, purchase, nitroJoinCTA, nitroUpgradeCTA };
      items[1] = hasOwnProperty(EditCollectiblesPreviewDescription, obj3);
      obj.children = items;
      tmp5Result = React5(View, obj);
    } else {
      tmp5Result = null;
    }
  }
  return tmp5Result;
};
