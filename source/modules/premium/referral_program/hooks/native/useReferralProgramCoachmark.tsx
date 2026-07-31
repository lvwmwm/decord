// Module ID: 15640
// Function ID: 15641
// Name: ReferralProgramCoachmarkImg
// Dependencies: [32, 19, 17, 676, 1369, 21, 4193, 5145, 15641, 4009, 1358, 7842, 8451, 1236, 15638, 712, 6614, 2]
// Exports: useReferralProgramCoachmark

// Module 15640 (ReferralProgramCoachmarkImg)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "set";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function ReferralProgramCoachmarkImg() {
  const tmp = callback2();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  obj = { source: null, style: null };
  obj[0] = importDefault(15641);
  obj[1] = tmp.coachmarkImage;
  obj[1] = jsx(importDefault(5145), { source: null, style: null });
  return <View source={null} style={null} />;
}
let closure_9 = createCacheKey.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 200, height: 112 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx");

export const useReferralProgramCoachmark = function useReferralProgramCoachmark(disabled) {
  disabled = disabled.disabled;
  let _require;
  let c1;
  let obj = _require(4009);
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(_require(1358).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = _require(7842).useIsEligibleSenderForReferralProgram(result);
  _require(8451);
  if (isEligibleSenderForReferralProgram) {
    if (!disabled) {
      let items = [tmp(1358).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp8 = callback(tmp6(items), 2);
    _require = tmp9;
    const tmp10 = tmp8[0] === tmp(1358).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    c1 = tmp10;
    const items1 = [tmp10, tmp8[1]];
    let tmp13 = null;
    if (tmp10) {
      obj = { props: null };
      obj[0] = tmp12;
      tmp13 = obj;
    }
    return tmp13;
  }
  items = [];
};
