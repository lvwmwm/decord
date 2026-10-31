// Module ID: 18857
// Function ID: 18858
// Name: useReferralProgramCoachmark
// Dependencies: [32, 19, 17, 1072, 4860, 21, 5014, 5717, 18858, 5044, 4847, 8524, 7569, 1113, 575, 7563, 2]
// Exports: useReferralProgramCoachmark

// Module 18857 (useReferralProgramCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AssetRegistryDefault from "AssetRegistry" /* 18858 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function ReferralProgramCoachmarkImg() {
  const tmp = closure_9();
  ({ source: AssetRegistryDefault, style: tmp.coachmarkImage });
  FastImageDefault;
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
}
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 200, height: 112 } });
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx");

export function useReferralProgramCoachmark(disabled) {
  let closure_0;
  let constants2;
  disabled = disabled.disabled;
  _require = undefined;
  let visible;
  let obj = require("DismissibleContentUnsafeUtils");
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  const useIsEligibleSenderForReferralProgram = require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram;
  require("useIsEligibleSenderForReferralProgram");
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram(result);
  require("useSelectedDismissibleContent");
  if (isEligibleSenderForReferralProgram) {
    let items;
    if (!disabled) {
      items = [tmp(4847).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp9 = _slicedToArray(tmp7(items), 2);
    _require = tmp10;
    const tmp11 = tmp9[0] === require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    visible = tmp11;
    const items1 = [tmp11, tmp9[1]];
    let tmp14 = null;
    if (tmp11) {
      let obj2 = { props: tmp13 };
      tmp14 = obj2;
    }
    return tmp14;
  }
  items = [];
}
