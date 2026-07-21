// Module ID: 11656
// Function ID: 90413
// Name: JoinRequestRejectionReasonActionSheet
// Dependencies: [270401536, 45154304, 764215296, 659619840, 131072, 2356412416, 2415919144, 2432696365, 33554477, 1996488704, 31, 27, 33, 10382, 10386, 3989, 2, 3747312, 2031616]

// Module 11656 (JoinRequestRejectionReasonActionSheet)
class JoinRequestRejectionReasonActionSheet {
  constructor(arg0) {
    ({ joinRequest, onError } = global);
    arg1 = onError;
    tmp2 = closure_8();
    userId = joinRequest.userId;
    importDefault = userId;
    guildId = joinRequest.guildId;
    dependencyMap = guildId;
    joinRequestId = joinRequest.joinRequestId;
    tmp3 = closure_4(closure_5.useState(), 2);
    first = tmp3[0];
    closure_4 = first;
    obj = arg1(dependencyMap[5]);
    bottomSheetRef = obj.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
    tmp6 = closure_4(closure_5.useState(false), 2);
    [tmp7, closure_5] = tmp6;
    // CreateGeneratorClosureLongIndex (0x67)
    items = [, , , , ];
    items[0] = guildId;
    items[1] = joinRequestId;
    items[2] = onError;
    items[3] = first;
    items[4] = userId;
    callback = closure_5.useCallback(joinRequestId(tmp), items);
    obj = { bodyStyles: tmp2.container, onDismiss: global.onDismiss, ref: bottomSheetRef };
    obj1 = { bottom: true };
    obj2 = {};
    intl = arg1(dependencyMap[9]).intl;
    obj2.label = intl.string(arg1(dependencyMap[9]).t.mFP/qw);
    obj2.maxLength = 160;
    obj2.onChange = tmp3[1];
    obj2.value = first;
    items1 = [, ];
    items1[0] = jsx(require("module_3989").TextArea, obj2);
    obj3 = { direction: "horizontal", style: tmp2.buttonGroup };
    obj4 = { FINISH: true, hasMediaOptions: true };
    intl2 = arg1(dependencyMap[9]).intl;
    obj4.text = intl2.string(arg1(dependencyMap[9]).t.ETE/oC);
    obj4.onPress = bottomSheetClose;
    obj4.disabled = tmp7;
    items2 = [, ];
    items2[0] = jsx(arg1(dependencyMap[17]).Button, obj4);
    obj5 = {};
    intl3 = arg1(dependencyMap[9]).intl;
    obj5.text = intl3.string(arg1(dependencyMap[9]).t.hDtbsz);
    obj5.onPress = callback;
    obj5.disabled = tmp7;
    items2[1] = jsx(arg1(dependencyMap[17]).Button, obj5);
    obj3.children = items2;
    items1[1] = jsxs(require("result2").ButtonGroup, obj3);
    obj1.children = items1;
    obj.children = jsxs(require("useChannelSafeAreaBottomStyles").SafeAreaPaddingView, obj1);
    return jsx(require("useChannelSafeAreaHeightSharedValue").BottomSheet, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ container: { padding: 20 }, buttonGroup: { marginTop: 16 } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(JoinRequestRejectionReasonActionSheet);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestRejectionReasonActionSheet.tsx");

export default memoResult;
export { JoinRequestRejectionReasonActionSheet };
