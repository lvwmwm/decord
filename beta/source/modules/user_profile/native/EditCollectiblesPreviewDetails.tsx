// Module ID: 12747
// Function ID: 12748
// Name: EditCollectiblesPreviewDetails
// Dependencies: [19, 17, 2112, 21, 4836, 504, 4488, 6974, 4512, 4832, 1115, 7618, 2]
// Exports: default

// Module 12747 (EditCollectiblesPreviewDetails)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import intl6 from "intl" /* 1115 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import DateUtils from "DateUtils" /* 4512 */;
import Text_Text from "Text/Text" /* 4832 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 7618 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function EditCollectiblesPreviewDescription(arg0) {
  let Io7ozn;
  let eZSTa5;
  let expiresAt;
  let format;
  let format3;
  let intl4;
  let intl5;
  let locale;
  let nitroJoinCTA;
  let nitroUpgradeCTA;
  let obj5;
  let obj7;
  let obj9;
  let product;
  let purchase;
  let str;
  let tmp23;
  let user;
  ({ user, purchase } = arg0);
  ({ product, nitroJoinCTA, nitroUpgradeCTA } = arg0);
  const items = [LocaleStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const obj2 = PremiumUtilsDefault;
  const canUseCollectiblesResult = obj2.canUseCollectibles(user);
  const obj3 = CollectiblesUtils;
  let result = obj3.isPremiumCollectiblesProduct(product);
  if (!result) {
    const tmpResult = CollectiblesUtils;
    result = tmpResult.isPremiumCollectiblesPurchase(purchase);
  }
  let result1 = !canUseCollectiblesResult;
  if (result1) {
    const tmpResult3 = CollectiblesUtils;
    result1 = tmpResult3.isPremiumCollectiblesPurchase(purchase);
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
        const self = this;
        const self2 = this;
        const diffAsUnits = DateUtils.diffAsUnits;
        DateUtils;
        const date = new Date();
        diffAsUnitsResult = diffAsUnits(date, purchase.expiresAt);
      }
      let tmp16 = null != diffAsUnitsResult;
      const tmp14 = metroImportDefault;
      const tmp15 = metroRequire;
      if (tmp16) {
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: format(Io7ozn, obj5) };
        const Text = tmp(4832).Text;
        const intl = tmp(1115).intl;
        format = intl.format;
        obj5 = { days: str.toString() };
        str = diffAsUnitsResult.days;
        Io7ozn = tmp(1115).t.Io7ozn;
        tmp16 = hasOwnProperty(Text, obj4);
      }
      const items1 = [tmp16, , ];
      const Text2 = tmp(4832).Text;
      const intl2 = tmp(1115).intl;
      const format2 = intl2.format;
      let toLocaleDateStringResult;
      const gW9R4B = tmp(1115).t.gW9R4B;
      if (purchase != null) {
        const purchasedAt = purchase.purchasedAt;
        toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, { month: "long", year: "numeric" });
      }
      const obj6 = { variant: "text-sm/medium", color: "text-default", children: format2(gW9R4B, obj7) };
      obj7 = { date: toLocaleDateStringResult };
      items1[1] = hasOwnProperty(Text2, obj6);
      let expiresAt2;
      if (purchase != null) {
        expiresAt2 = purchase.expiresAt;
      }
      let tmp18Result = null != expiresAt2;
      if (tmp18Result) {
        const obj8 = { variant: "text-sm/medium", color: "text-default", children: format3(eZSTa5, obj9) };
        const Text3 = tmp(4832).Text;
        const intl3 = tmp(1115).intl;
        format3 = intl3.format;
        obj9 = { date: expiresAt.toLocaleDateString(stateFromStores, { minute: "numeric", hour: "numeric", day: "numeric", month: "long", year: "numeric" }) };
        expiresAt = purchase.expiresAt;
        eZSTa5 = tmp(1115).t.eZSTa5;
        tmp18Result = tmp18(Text3, obj8);
      }
      const obj10 = { children: items1 };
      items1[2] = tmp18Result;
      return tmp14(tmp15, obj10);
    }
  }
  if (result) {
    let tmp25Result;
    if (canUseCollectiblesResult) {
      const obj11 = { variant: "text-sm/medium", color: "text-default", children: intl5.string(intl6.t.hmyYK8) };
      const Text6 = tmp(4832).Text;
      intl5 = tmp(1115).intl;
      tmp25Result = hasOwnProperty(Text6, obj11);
    } else {
      const tmp4Result = PremiumUtilsDefault;
      const isPremiumResult = tmp4Result.isPremium(user);
      const Text5 = tmp(4832).Text;
      const obj12 = { variant: "text-sm/medium", color: "text-default", children: null };
      if (isPremiumResult) {
        obj12.children = nitroUpgradeCTA;
        tmp25Result = tmp25(Text5, obj12);
      } else {
        obj12.children = nitroJoinCTA;
        tmp25Result = tmp25(Text5, obj12);
      }
    }
    tmp23 = tmp25Result;
  } else {
    const obj13 = { variant: "text-sm/medium", color: "text-default", children: intl4.string(intl6.t.fEGjVQ) };
    const Text4 = tmp(4832).Text;
    intl4 = tmp(1115).intl;
    tmp23 = hasOwnProperty(Text4, obj13);
  }
  return tmp23;
}
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ productDetailsContainer: { width: "100%", marginTop: 16, alignItems: "center", gap: 2 } });
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesPreviewDetails.tsx");

export default function EditCollectiblesPreviewDetails(previewSkuId) {
  let items;
  let nitroJoinCTA;
  let nitroUpgradeCTA;
  let product;
  let purchase;
  let user;
  previewSkuId = previewSkuId.previewSkuId;
  ({ user, nitroJoinCTA, nitroUpgradeCTA } = previewSkuId);
  const tmp = closure_8();
  ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
  let tmp5Result = null;
  useCollectiblesDataDefault(previewSkuId);
  if (null != previewSkuId) {
    if (null != product) {
      let name;
      const obj = { style: tmp.productDetailsContainer, children: items };
      const Text = Text_Text.Text;
      const tmp5 = metroImportDefault;
      const tmp6 = View;
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
      items = [hasOwnProperty(Text, obj2), ];
      const obj3 = { user, product, purchase, nitroJoinCTA, nitroUpgradeCTA };
      items[1] = hasOwnProperty(EditCollectiblesPreviewDescription, obj3);
      tmp5Result = tmp5(tmp6, obj);
    } else {
      tmp5Result = null;
    }
  }
  return tmp5Result;
};
