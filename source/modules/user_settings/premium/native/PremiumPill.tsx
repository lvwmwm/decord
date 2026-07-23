// Module ID: 6677
// Function ID: 51420
// Name: PremiumPill
// Dependencies: [31, 27, 33, 4130, 689, 4066, 6678, 6685, 1212, 4126, 2]
// Exports: PremiumPill

// Module 6677 (PremiumPill)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: null, borderRadius: null, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingVertical: 1 };
  const tmp = importDefault(689);
  if (arg0) {
    let WHITE = tmp.unsafe_rawColors.BLACK;
  } else {
    WHITE = tmp.colors.WHITE;
  }
  obj.backgroundColor = WHITE;
  obj.borderRadius = importDefault(689).radii.round;
  obj.pillContainer = obj;
  obj.discountPillText = { textAlign: "center" };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumPill.tsx");

export const PremiumPill = (discountOffer) => {
  let style;
  let useWhiteBackground;
  discountOffer = discountOffer.discountOffer;
  let flag = discountOffer.shouldShowDiscountUpsell;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = discountOffer.isActiveDiscount;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const premiumType = discountOffer.premiumType;
  const trialOffer = discountOffer.trialOffer;
  ({ useWhiteBackground, style } = discountOffer);
  if (useWhiteBackground === undefined) {
    useWhiteBackground = false;
  }
  let flag3 = discountOffer.hideTrialCountdown;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let callback;
  let premiumTrialOfferPremiumType;
  discountOffer(flag2[5]);
  let tmp3 = !useWhiteBackground;
  if (tmp3) {
    tmp3 = "light" === tmp2;
  }
  let str2 = "text-overlay-dark";
  if (tmp3) {
    str2 = "text-overlay-light";
  }
  const tmp4 = callback(tmp3);
  const items = [trialOffer];
  const memo = premiumType.useMemo(() => {
    let expires_at;
    if (null != trialOffer) {
      expires_at = trialOffer.expires_at;
    }
    let str = "";
    if (null != expires_at) {
      str = expires_at;
    }
    return Date.parse(str);
  }, items);
  const tmp6 = flag(flag2[6])(memo, 60000);
  callback = tmp6;
  let obj = discountOffer(flag2[7]);
  premiumTrialOfferPremiumType = obj.usePremiumTrialOfferPremiumType();
  const items1 = [flag2, discountOffer, flag, trialOffer, premiumType, premiumTrialOfferPremiumType, tmp6.days, flag3];
  const str3 = premiumType.useMemo(() => {
    if (flag2) {
      const intl4 = discountOffer(flag2[8]).intl;
      let stringResult = intl4.string(discountOffer(flag2[8]).t.EyjDRE);
    } else {
      if (null != discountOffer) {
        if (flag) {
          const intl3 = discountOffer(flag2[8]).intl;
          let obj = { percent: discountOffer.discount.amount };
          stringResult = intl3.formatToPlainString(discountOffer(flag2[8]).t.iiLbvu, obj);
        }
      }
      stringResult = null;
      if (null != trialOffer) {
        stringResult = null;
        if (premiumType === premiumTrialOfferPremiumType) {
          if (!flag3) {
            const _Number = Number;
            if (!Number.isNaN(_undefined.days)) {
              const intl = discountOffer(flag2[8]).intl;
              obj = {};
              const _Math = Math;
              obj.days = Math.max(_undefined.days, 1);
              let formatToPlainStringResult = intl.formatToPlainString(discountOffer(flag2[8]).t["+FgdjP"], obj);
            }
          }
          const intl2 = discountOffer(flag2[8]).intl;
          formatToPlainStringResult = intl2.string(discountOffer(flag2[8]).t.qVcfa0);
        }
      }
    }
    return stringResult;
  }, items1);
  let tmp8 = null;
  if (null != str3) {
    obj = {};
    const items2 = [tmp4.pillContainer, style];
    obj.style = items2;
    obj = { variant: "text-xs/bold", color: str2, style: tmp4.discountPillText, children: str3.toUpperCase() };
    obj.children = flag3(discountOffer(flag2[9]).Text, obj);
    tmp8 = flag3(trialOffer, obj);
  }
  return tmp8;
};
