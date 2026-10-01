// Module ID: 6858
// Function ID: 6859
// Name: PremiumPill
// Dependencies: [19, 17, 21, 4836, 576, 4767, 6859, 6866, 1115, 4832, 2]
// Exports: PremiumPill

// Module 6858 (PremiumPill)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0) => {
  let WHITE;
  let tmp6;
  const tmp3 = nativeDefault;
  const tmp4 = arg0;
  if (tmp4) {
    WHITE = tmp3.unsafe_rawColors.BLACK;
    tmp6 = tmp;
  } else {
    WHITE = tmp3.colors.WHITE;
    tmp6 = tmp;
  }
  const obj = { pillContainer: { backgroundColor: WHITE, borderRadius: tmp6(576).radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingVertical: 1 }, discountPillText: { textAlign: "center" } };
  ({ backgroundColor: WHITE, borderRadius: tmp6(576).radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingVertical: 1 });
  return obj;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumPill.tsx");

export const PremiumPill = (discountOffer) => {
  let Text;
  let items2;
  let obj2;
  let style;
  let tmp4;
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
  let days;
  let premiumTrialOfferPremiumType;
  let tmp = discountOffer;
  const tmp2 = flag2;
  discountOffer(flag2[5]);
  let str2 = "text-overlay-dark";
  if (!useWhiteBackground && "light" === tmp4) {
    str2 = "text-overlay-light";
  }
  const tmp6 = days(!useWhiteBackground && "light" === tmp4);
  const items = [trialOffer];
  const memo = premiumType.useMemo(() => {
    let expiresAt1;
    if (trialOffer != null) {
      expiresAt1 = tmp.expiresAt;
    }
    let num = NaN;
    if (null != expiresAt1) {
      const expiresAt = tmp.expiresAt;
      num = expiresAt.getTime();
    }
    return num;
  }, items);
  const tmp8 = flag(tmp2[6]);
  const tmp8Result = tmp8(memo, 60000, undefined, isNaN(memo));
  days = tmp8Result;
  const tmpResult = tmp(tmp2[7]);
  premiumTrialOfferPremiumType = tmpResult.usePremiumTrialOfferPremiumType();
  const items1 = [flag2, discountOffer, flag, trialOffer, premiumType, premiumTrialOfferPremiumType, tmp8Result.days, flag3];
  const str3 = premiumType.useMemo(() => {
    let stringResult;
    const tmp = flag2;
    if (tmp) {
      const intl4 = intl5.intl;
      stringResult = intl4.string(intl5.t.EyjDRE);
    } else {
      if (null != discountOffer) {
        const tmp4 = flag;
        if (tmp4) {
          const intl3 = intl5.intl;
          const obj2 = { percent: tmp2.discount.amount };
          stringResult = intl3.formatToPlainString(intl5.t.iiLbvu, obj2);
        }
      }
      stringResult = null;
      if (null != trialOffer) {
        stringResult = null;
        if (premiumType === premiumTrialOfferPremiumType) {
          const tmp29 = flag3;
          if (!tmp29) {
            let formatToPlainStringResult;
            const _Number = Number;
            const tmp10 = days;
            if (!Number.isNaN(days.days)) {
              const intl = intl5.intl;
              const formatToPlainString = intl.formatToPlainString;
              const _Math = Math;
              const obj = { days: Math.max(tmp10.days, 1) };
              const prop = intl5.t["+FgdjP"];
              formatToPlainStringResult = formatToPlainString(prop, obj);
            }
            stringResult = formatToPlainStringResult;
          }
          const intl2 = intl5.intl;
          formatToPlainStringResult = intl2.string(intl5.t.qVcfa0);
        }
      }
    }
    return stringResult;
  }, items1);
  let tmp11 = null;
  if (null != str3) {
    let obj = { style: items2, children: flag3(Text, obj2) };
    items2 = [tmp6.pillContainer, style];
    obj2 = { variant: "text-xs/bold", color: str2, style: tmp6.discountPillText, children: str3.toUpperCase() };
    Text = tmp(tmp2[9]).Text;
    tmp11 = flag3(trialOffer, obj);
  }
  return tmp11;
};
