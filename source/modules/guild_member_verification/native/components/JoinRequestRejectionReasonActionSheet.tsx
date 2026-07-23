// Module ID: 11667
// Function ID: 90475
// Name: JoinRequestRejectionReasonActionSheet
// Dependencies: [5, 57, 31, 33, 4130, 7186, 9160, 3950, 3831, 1212, 5776, 689, 4098, 5187, 5121, 7504, 4965, 4543, 2]

// Module 11667 (JoinRequestRejectionReasonActionSheet)
import useBottomSheetRef from "useBottomSheetRef";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
class JoinRequestRejectionReasonActionSheet {
  constructor(arg0) {
    ({ joinRequest, onError } = global);
    tmp2 = c8();
    userId = joinRequest.userId;
    guildId = joinRequest.guildId;
    joinRequestId = joinRequest.joinRequestId;
    tmp3 = c4(c5.useState(), 2);
    first = tmp3[0];
    c4 = first;
    obj = require("useBottomSheetRef");
    bottomSheetRef = obj.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
    tmp6 = c4(c5.useState(false), 2);
    [tmp7, c5] = tmp6;
    // CreateGeneratorClosureLongIndex (0x67)
    items = [, , , , ];
    items[0] = guildId;
    items[1] = joinRequestId;
    items[2] = onError;
    items[3] = first;
    items[4] = userId;
    callback = c5.useCallback(joinRequestId(tmp), items);
    obj = { bodyStyles: tmp2.container, onDismiss: global.onDismiss, ref: bottomSheetRef };
    obj1 = { bottom: true };
    obj2 = {};
    intl = require("getSystemLocale").intl;
    obj2.label = intl.string(require("getSystemLocale").t["mFP/qw"]);
    obj2.maxLength = 160;
    obj2.onChange = tmp3[1];
    obj2.value = first;
    items1 = [, ];
    items1[0] = jsx(require("TextArea").TextArea, obj2);
    obj3 = { direction: "horizontal", style: tmp2.buttonGroup };
    obj4 = { grow: true, variant: "secondary" };
    intl2 = require("getSystemLocale").intl;
    obj4.text = intl2.string(require("getSystemLocale").t["ETE/oC"]);
    obj4.onPress = bottomSheetClose;
    obj4.disabled = tmp7;
    items2 = [, ];
    items2[0] = jsx(require("Button").Button, obj4);
    obj5 = { grow: true, variant: "destructive" };
    intl3 = require("getSystemLocale").intl;
    obj5.text = intl3.string(require("getSystemLocale").t.hDtbsz);
    obj5.onPress = callback;
    obj5.disabled = tmp7;
    items2[1] = jsx(require("Button").Button, obj5);
    obj3.children = items2;
    items1[1] = jsxs(require("ButtonGroup").ButtonGroup, obj3);
    obj1.children = items1;
    obj.children = jsxs(require("SafeAreaPaddingView").SafeAreaPaddingView, obj1);
    return jsx(require("Background").BottomSheet, obj);
  }
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 20 }, buttonGroup: { marginTop: 16 } });
const memoResult = importAllResult.memo(JoinRequestRejectionReasonActionSheet);
const result = require("result").fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestRejectionReasonActionSheet.tsx");

export default memoResult;
export { JoinRequestRejectionReasonActionSheet };
