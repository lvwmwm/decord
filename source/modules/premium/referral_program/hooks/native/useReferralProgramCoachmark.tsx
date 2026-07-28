// Module ID: 15584
// Function ID: 119800
// Name: ReferralProgramCoachmarkImg
// Dependencies: [57, 31, 27, 653, 1345, 33, 4165, 5119, 15585, 3981, 1334, 7814, 8417, 1212, 15582, 689, 6590, 2]
// Exports: useReferralProgramCoachmark

// Module 15584 (ReferralProgramCoachmarkImg)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function ReferralProgramCoachmarkImg() {
  const tmp = callback2();
  let obj = { style: tmp.coachmarkImageContainer };
  obj = { source: importDefault(15585), style: tmp.coachmarkImage };
  obj.children = jsx(importDefault(5119), { source: importDefault(15585), style: tmp.coachmarkImage });
  return <View source={importDefault(15585)} style={tmp.coachmarkImage} />;
}
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 200, height: 112 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx");

export const useReferralProgramCoachmark = function useReferralProgramCoachmark(disabled) {
  disabled = disabled.disabled;
  let _require;
  let c1;
  let obj = _require(3981);
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(_require(1334).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = _require(7814).useIsEligibleSenderForReferralProgram(result);
  _require(8417);
  if (isEligibleSenderForReferralProgram) {
    if (!disabled) {
      let items = [_require(1334).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp8 = callback(tmp4(items), 2);
    _require = tmp9;
    const tmp12 = tmp8[0] === _require(1334).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    c1 = tmp12;
    const items1 = [tmp12, tmp8[1]];
    let tmp15 = null;
    if (tmp12) {
      obj = { props: tmp14 };
      tmp15 = obj;
    }
    return tmp15;
  }
  items = [];
};
