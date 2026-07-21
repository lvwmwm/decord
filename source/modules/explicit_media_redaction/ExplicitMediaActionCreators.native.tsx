// Module ID: 8136
// Function ID: 64368
// Name: handleSenderFalsePositiveFlow
// Dependencies: []
// Exports: handleSenderFalsePositiveFlow

// Module 8136 (handleSenderFalsePositiveFlow)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, closure_1) {
  let obj = closure_1(dependencyMap[2]);
  obj = { action: closure_1(dependencyMap[2]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId: closure_1, channelId };
  const result = obj.trackMediaRedactionAction(obj);
  if (closure_3.canSubmitFpReport(closure_1)) {
    let tmp2Result = tmp2(tmp3[6]);
    obj = { channelId, messageId: closure_1 };
    tmp2Result.openLazy(closure_1(tmp3[8])(tmp3[7], tmp3.paths), closure_4, obj);
  } else {
    tmp2Result = tmp2(tmp3[3]);
    const obj1 = {};
    const intl = closure_1(tmp3[4]).intl;
    obj1.title = intl.string(closure_1(tmp3[4]).t.iS/eFN);
    const intl2 = closure_1(tmp3[4]).intl;
    obj1.body = intl2.string(closure_1(tmp3[4]).t.YrjcgR);
    const intl3 = closure_1(tmp3[4]).intl;
    obj1.confirmText = intl3.string(closure_1(tmp3[4]).t.BddRzS);
    tmp2Result.show(obj1);
    const result1 = tmp2(tmp3[5]).disableFalsePositiveButton(channelId, closure_1);
  }
};
