// Module ID: 15347
// Function ID: 116889
// Name: ReferralProgramCoachmarkImg
// Dependencies: []
// Exports: useReferralProgramCoachmark

// Module 15347 (ReferralProgramCoachmarkImg)
function ReferralProgramCoachmarkImg() {
  const tmp = callback2();
  let obj = { style: tmp.coachmarkImageContainer };
  obj = { source: importDefault(dependencyMap[8]), style: tmp.coachmarkImage };
  obj.children = jsx(importDefault(dependencyMap[7]), obj);
  return <View {...obj} />;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const jsx = arg1(dependencyMap[5]).jsx;
let closure_9 = arg1(dependencyMap[6]).createStyles({ coachmarkImageContainer: {}, coachmarkImage: { bhk: false, bic: false } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx");

export const useReferralProgramCoachmark = function useReferralProgramCoachmark(disabled) {
  disabled = disabled.disabled;
  let arg1;
  let importDefault;
  let obj = arg1(dependencyMap[9]);
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[10]).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = arg1(dependencyMap[11]).useIsEligibleSenderForReferralProgram(result);
  arg1(dependencyMap[12]);
  if (isEligibleSenderForReferralProgram) {
    if (!disabled) {
      let items = [arg1(dependencyMap[10]).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp8 = callback(tmp4(items), 2);
    arg1 = tmp9;
    const tmp12 = tmp8[0] === arg1(dependencyMap[10]).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    importDefault = tmp12;
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
