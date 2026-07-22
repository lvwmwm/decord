// Module ID: 11657
// Function ID: 90426
// Name: JoinRequestRejectionReasonActionSheet
// Dependencies: [0, 0, 0, 0, 4294967295, 4294967295, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 0, 0, 0, 0]

// Module 11657 (JoinRequestRejectionReasonActionSheet)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import importAllResult from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

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
    intl = require("__exportStarResult1").intl;
    obj2.label = intl.string(require("__exportStarResult1").t.mFP/qw);
    obj2.maxLength = 160;
    obj2.onChange = tmp3[1];
    obj2.value = first;
    items1 = [, ];
    items1[0] = jsx(require("__exportStarResult1").TextArea, obj2);
    obj3 = { direction: "horizontal", style: tmp2.buttonGroup };
    obj4 = {};
    intl2 = require("__exportStarResult1").intl;
    obj4.text = intl2.string(require("__exportStarResult1").t.ETE/oC);
    obj4.onPress = bottomSheetClose;
    obj4.disabled = tmp7;
    items2 = [, ];
    items2[0] = jsx(require("__exportStarResult1").Button, obj4);
    obj5 = {};
    intl3 = require("__exportStarResult1").intl;
    obj5.text = intl3.string(require("__exportStarResult1").t.hDtbsz);
    obj5.onPress = callback;
    obj5.disabled = tmp7;
    items2[1] = jsx(require("__exportStarResult1").Button, obj5);
    obj3.children = items2;
    items1[1] = jsxs(require("__exportStarResult1").ButtonGroup, obj3);
    obj1.children = items1;
    obj.children = jsxs(arg1(dependencyMap[14]).SafeAreaPaddingView, obj1);
    return jsx(arg1(dependencyMap[13]).BottomSheet, obj);
  }
}
({ jsx: closure_6, jsxs: closure_7 } = __exportStarResult1);
let closure_8 = arg1(dependencyMap[4]).createStyles({ container: { padding: 20 }, buttonGroup: { marginTop: 16 } });
const obj2 = arg1(dependencyMap[4]);
const result = __exportStarResult1.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestRejectionReasonActionSheet.tsx");

export default importAllResult.memo(JoinRequestRejectionReasonActionSheet);
export { JoinRequestRejectionReasonActionSheet };
