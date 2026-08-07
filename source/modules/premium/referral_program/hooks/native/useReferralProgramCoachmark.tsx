// Module ID: 15780
// Function ID: 15781
// Name: ReferralProgramCoachmarkImg
// Dependencies: [32, 19, 17, 676, 1369, 21, 4302, 5267, 15781, 4117, 1358, 8102, 5962, 1236, 712, 5956, 2]
// Exports: useReferralProgramCoachmark

// Module 15780 (ReferralProgramCoachmarkImg)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function ReferralProgramCoachmarkImg() {
  const tmp = callback2();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  obj = { source: null, style: null };
  obj[0] = importDefault(15781);
  obj[1] = tmp.coachmarkImage;
  obj[1] = jsx(importDefault(5267), { source: null, style: null });
  return <View source={null} style={null} />;
}
let closure_9 = createCacheKey.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 200, height: 112 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx");

export const useReferralProgramCoachmark = function useReferralProgramCoachmark(disabled) {
  disabled = disabled.disabled;
  let _require;
  let c1;
  let obj = _require(4117);
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(_require(1358).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = _require(8102).useIsEligibleSenderForReferralProgram(result);
  _require(5962);
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
