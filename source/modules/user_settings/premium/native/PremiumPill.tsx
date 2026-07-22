// Module ID: 6672
// Function ID: 51388
// Name: PremiumPill
// Dependencies: []
// Exports: PremiumPill

// Module 6672 (PremiumPill)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles((arg0) => {
  let obj = {};
  obj = {};
  const tmp = importDefault(dependencyMap[4]);
  if (arg0) {
    let WHITE = tmp.unsafe_rawColors.BLACK;
  } else {
    WHITE = tmp.colors.WHITE;
  }
  obj.backgroundColor = WHITE;
  obj.borderRadius = importDefault(dependencyMap[4]).radii.round;
  obj.pillContainer = obj;
  obj.discountPillText = { textAlign: "center" };
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/premium/native/PremiumPill.tsx");

export const PremiumPill = (discountOffer) => {
  let style;
  let useWhiteBackground;
  discountOffer = discountOffer.discountOffer;
  const arg1 = discountOffer;
  let flag = discountOffer.shouldShowDiscountUpsell;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let flag2 = discountOffer.isActiveDiscount;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const dependencyMap = flag2;
  const premiumType = discountOffer.premiumType;
  const React = premiumType;
  const trialOffer = discountOffer.trialOffer;
  const View = trialOffer;
  ({ useWhiteBackground, style } = discountOffer);
  if (useWhiteBackground === undefined) {
    useWhiteBackground = false;
  }
  let flag3 = discountOffer.hideTrialCountdown;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const jsx = flag3;
  let callback;
  let premiumTrialOfferPremiumType;
  arg1(dependencyMap[5]);
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
  const memo = React.useMemo(() => {
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
  const tmp6 = importDefault(dependencyMap[6])(memo, 60000);
  callback = tmp6;
  let obj = arg1(dependencyMap[7]);
  premiumTrialOfferPremiumType = obj.usePremiumTrialOfferPremiumType();
  const items1 = [flag2, discountOffer, flag, trialOffer, premiumType, premiumTrialOfferPremiumType, tmp6.days, flag3];
  const str3 = React.useMemo(() => {
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
            if (!Number.isNaN(tmp6.days)) {
              const intl = discountOffer(flag2[8]).intl;
              obj = {};
              const _Math = Math;
              obj.days = Math.max(tmp6.days, 1);
              let formatToPlainStringResult = intl.formatToPlainString(discountOffer(flag2[8]).t.+FgdjP, obj);
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
    obj.children = jsx(arg1(dependencyMap[9]).Text, obj);
    tmp8 = <View {...obj} />;
  }
  return tmp8;
};
