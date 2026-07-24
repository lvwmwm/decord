// Module ID: 13858
// Function ID: 106110
// Name: formatGiftDate
// Dependencies: [1212, 3355, 5616, 2198, 2]
// Exports: getGiftRowDisplayInfo, getGiftSubtext

// Module 13858 (formatGiftDate)
function formatGiftDate(offeredAt) {
  const dateTimeFormat = new Intl.DateTimeFormat(require(1212) /* getSystemLocale */.intl.currentLocale, { month: "short", day: "numeric" });
  return dateTimeFormat.format(require(3355).parseISO(offeredAt));
}
const result = require("formatSingleCurrencyPrice").fileFinishedImporting("modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx");

export const getGiftRowDisplayInfo = function getGiftRowDisplayInfo(giftInfo) {
  return { skuId: giftInfo.sku_id, subscriptionPlanId: giftInfo.subscription_plan_id, price: giftInfo.price, gifterUserId: giftInfo.gifter_user_id, claimed: giftInfo.claimed, offeredAt: giftInfo.offered_at, claimedAt: giftInfo.claimed_at };
};
export { formatGiftDate };
export const getGiftSubtext = function getGiftSubtext(claimed) {
  let claimedAt;
  let gifterName;
  let offeredAt;
  let price;
  ({ price, gifterName, offeredAt, claimedAt } = claimed);
  let formatPriceResult = null;
  if (null != price) {
    let obj = require(5616) /* formatSingleCurrencyPrice */;
    formatPriceResult = obj.formatPrice(price.amount, price.currency);
  }
  if (null != formatPriceResult) {
    if (null != gifterName) {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { price: formatPriceResult, username: gifterName };
      let formatToPlainStringResult = intl.formatToPlainString(importDefault(2198)["o44n/1"], obj);
    }
    const items = [formatToPlainStringResult, ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const tmp11 = importDefault(2198);
    if (claimed.claimed) {
      obj = {};
      if (null != claimedAt) {
        offeredAt = claimedAt;
      }
      obj.date = formatGiftDate(offeredAt);
      let formatToPlainStringResult1 = formatToPlainString(tmp11.kDyllq, obj);
      const tmp14 = formatGiftDate;
    } else {
      const obj1 = { date: formatGiftDate(offeredAt) };
      formatToPlainStringResult1 = formatToPlainString(tmp11.gAG45y, obj1);
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
};
