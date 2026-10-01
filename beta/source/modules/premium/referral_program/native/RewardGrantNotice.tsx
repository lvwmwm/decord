// Module ID: 12993
// Function ID: 12994
// Name: RewardGrantNotice
// Dependencies: [19, 17, 12975, 21, 4836, 576, 12977, 10553, 4832, 1115, 6554, 2]
// Exports: default

// Module 12993 (RewardGrantNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import CheckmarkSmallIcon2 from "CheckmarkSmallIcon" /* 6554 */;
import BalanceWidgetPill from "BalanceWidgetPill" /* 10553 */;
import PremiumReferralIncentivesExperiment from "PremiumReferralIncentivesExperiment" /* 12977 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 12975 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function OrbsGrantNotice(nRewardsGranted) {
  let items;
  let items1;
  nRewardsGranted = nRewardsGranted.nRewardsGranted;
  const tmp = closure_8();
  const obj = { style: tmp.orbsPillContainer, children: items };
  items = [, ];
  const obj2 = { initialRenderedBalance: 0, balance: nRewardsGranted * hasOwnProperty, style: tmp.balancePillOverride };
  items[0] = metroRequire(BalanceWidgetPill.BalanceWidgetPill, obj2);
  const obj3 = { variant: "text-sm/medium", color: "text-strong", children: items1 };
  const Text = Text_Text.Text;
  const intl = intl3.intl;
  items1 = [" ", intl.string(intl3.t.UhguER)];
  items[1] = metroImportDefault(Text, obj3);
  return metroImportDefault(View, obj);
}
function DiscountGrantNotice(nRewardsGranted) {
  let intl;
  let intl2;
  let items;
  let obj2;
  let obj5;
  nRewardsGranted = nRewardsGranted.nRewardsGranted;
  const obj = { style: closure_8().container, accessible: true, accessibilityLabel: intl.formatToPlainString(intl3.t["P//01n"], obj2), children: items };
  intl = intl3.intl;
  obj2 = { discountPercent, duration: nRewardsGranted };
  const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, size: "xs" };
  const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
  items = [metroRequire(CheckmarkSmallIcon, obj3), ];
  const obj4 = { variant: "text-sm/medium", color: "text-strong", children: intl2.format(intl3.t["P//01n"], obj5) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  obj5 = { discountPercent, duration: nRewardsGranted };
  items[1] = metroRequire(Text, obj4);
  return metroImportDefault(View, obj);
}
const View = react_native.View;
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: closure_4, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, orbsPillContainer: obj3, balancePillOverride: { backgroundColor: "transparent", top: 1, minHeight: 0, paddingHorizontal: 0 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8, alignSelf: "flex-start" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, alignSelf: "flex-start" };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/RewardGrantNotice.tsx");

export default function RewardGrantNotice(arg0) {
  let nRewardsGranted;
  let referralRewardType;
  ({ nRewardsGranted, referralRewardType } = arg0);
  let tmp = null;
  if (nRewardsGranted >= 1) {
    let tmp4;
    const tmp2 = require;
    if (referralRewardType === PremiumReferralIncentivesExperiment.ReferralRewardType.ORBS) {
      const obj2 = { nRewardsGranted };
      tmp4 = metroRequire(OrbsGrantNotice, obj2);
    } else {
      tmp4 = null;
      if (referralRewardType === tmp2(12977).ReferralRewardType.DISCOUNT) {
        const obj = { nRewardsGranted };
        tmp4 = metroRequire(DiscountGrantNotice, obj);
      }
    }
    tmp = tmp4;
  }
  return tmp;
};
