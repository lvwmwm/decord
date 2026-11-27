// Module ID: 16418
// Function ID: 16419
// Name: FamilyCenterActivityGiftRowUtils
// Dependencies: [1112, 2169, 6325, 2847, 2]
// Exports: formatGiftDate, getGiftRowDisplayInfo, getGiftSubtext

// Module 16418 (FamilyCenterActivityGiftRowUtils)
import intl3 from "intl" /* 1112 */;
import _modDef2169 from "module_2169" /* 2169 */;
import _modDef2847 from "module_2847" /* 2847 */;
import PriceUtils from "PriceUtils" /* 6325 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx");

export function getGiftRowDisplayInfo(giftInfo) {
  return { skuId: giftInfo.sku_id, subscriptionPlanId: giftInfo.subscription_plan_id, price: giftInfo.price, gifterUserId: giftInfo.gifter_user_id, claimed: giftInfo.claimed, offeredAt: giftInfo.offered_at, claimedAt: giftInfo.claimed_at };
}
export function formatGiftDate(arg0) {
  const dateTimeFormat = new Intl.DateTimeFormat(intl3.intl.currentLocale, { month: "short", day: "numeric" });
  const format = dateTimeFormat.format;
  const obj = _modDef2169(arg0);
  return format(obj.toDate());
}
export function getGiftSubtext(claimed) {
  let claimedAt;
  let format;
  let format2;
  let formatToPlainStringResult;
  let gifterName;
  let obj4;
  let obj6;
  let offeredAt;
  let price;
  ({ price, gifterName, offeredAt, claimedAt } = claimed);
  let formatPriceResult = null;
  claimed = claimed.claimed;
  if (null != price) {
    const obj = PriceUtils;
    formatPriceResult = obj.formatPrice(price.amount, price.currency);
  }
  if (null != formatPriceResult) {
    let formatToPlainStringResult1;
    if (null != gifterName) {
      const intl = intl3.intl;
      const obj2 = { price: formatPriceResult, username: gifterName };
      formatToPlainStringResult = intl.formatToPlainString(_modDef2847["o44n/1"], obj2);
    }
    const items = [formatToPlainStringResult, ];
    const intl2 = intl3.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const tmp11 = _modDef2847;
    if (claimed) {
      const kDyllq = tmp11.kDyllq;
      if (claimedAt == null) {
        claimedAt = offeredAt;
      }
      const _Intl2 = Intl;
      const self3 = this;
      const self4 = this;
      const obj3 = { date: format2(obj6.toDate()) };
      const dateTimeFormat = new Intl.DateTimeFormat(tmp8(1112).intl.currentLocale, { month: "short", day: "numeric" });
      format2 = dateTimeFormat.format;
      obj6 = _modDef2169(claimedAt);
      formatToPlainStringResult1 = formatToPlainString(kDyllq, obj3);
    } else {
      const _Intl = Intl;
      const gAG45y = tmp11.gAG45y;
      const self = this;
      const self2 = this;
      const obj5 = { date: format(obj4.toDate()) };
      const dateTimeFormat1 = new Intl.DateTimeFormat(tmp8(1112).intl.currentLocale, { month: "short", day: "numeric" });
      format = dateTimeFormat1.format;
      obj4 = _modDef2169(offeredAt);
      formatToPlainStringResult1 = formatToPlainString(gAG45y, obj5);
    }
    items[1] = formatToPlainStringResult1;
    const _Boolean = Boolean;
    const found = items.filter(Boolean);
    return found.join(" \u2022 ");
  }
  formatToPlainStringResult = null;
  if (null != formatPriceResult) {
    formatToPlainStringResult = formatPriceResult;
  }
}
