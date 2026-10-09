// Module ID: 12331
// Function ID: 12332
// Name: JoinRequestRejectionReasonActionSheet
// Dependencies: [5, 32, 19, 21, 5091, 8278, 6123, 4903, 4768, 1126, 5055, 6836, 6810, 6770, 5965, 5376, 2]

// Module 12331 (JoinRequestRejectionReasonActionSheet)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

let BottomSheet, c4;

let metroImportDefault;
let metroRequire;
class JoinRequestRejectionReasonActionSheet {
  constructor(onDismiss) {
    let SafeAreaPaddingView;
    let _undefined;
    let bottomSheetClose;
    let bottomSheetRef;
    let c5;
    let intl;
    let intl2;
    let intl3;
    let items1;
    let items2;
    let joinRequest;
    let obj3;
    let onError;
    let tmp7;
    ({ joinRequest, onError } = onDismiss);
    let value;
    react = undefined;
    onDismiss = onDismiss.onDismiss;
    const tmp = closure_8();
    let userId = joinRequest.userId;
    let guildId = joinRequest.guildId;
    const joinRequestId = joinRequest.joinRequestId;
    const tmp2 = value(react.useState(), 2);
    value = tmp2[0];
    const tmp4 = tmp2[1];
    let obj = onError(guildId[5]);
    const bottomSheetRef1 = obj.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
    [tmp7, c5] = value(react.useState(false), 2);
    const items = [guildId, joinRequestId, onError, value, userId];
    const tmp6 = value(react.useState(false), 2);
    const callback = react.useCallback(joinRequestId(function*(arg0, value) {
      let closure_0;
      let closure_2;
      let intl;
      let v2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === userId) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              _undefined(true);
              c3 = 2;
              const obj7 = userId(guildId[6]);
              userId = 3;
              c4 = 1;
              const obj4 = { value: obj7.updateGuildJoinRequest(guildId, userId, joinRequestId, tmp(guildId[7]).GuildJoinRequestApplicationStatuses.REJECTED, first), done: false };
              return obj4;
            }
          } else if (1 === userId) {
            c3 = 0;
            closure_128_5(false);
            throw guildId;
          } else {
            if (2 === userId) {
              c3 = 1;
              closure_128_0();
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_5(false);
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const obj5 = { text: intl.string(tmp(guildId[9]).t["TQY/Rd"]), variant: "critical" };
              const openMana = userId(guildId[8]).openMana;
              const tmp29 = userId(guildId[8]);
              intl = tmp(guildId[9]).intl;
              openMana("JOIN_REQUEST_REJECT", obj5);
              const obj6 = userId(guildId[10]);
              obj6.hideAllActionSheets();
              c3 = 1;
            }
            c3 = 0;
            closure_128_5(false);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp20) {
          guildId = tmp20;
          if (0 === c3) {
            c4 = 3;
            throw tmp20;
          } else if (1 === tmp22) {
            userId = 1;
          } else {
            userId = 2;
          }
        }
      }
    }), items);
    let obj2 = { bodyStyles: tmp.container, onDismiss, ref: bottomSheetRef, children: closure_7(SafeAreaPaddingView, obj3) };
    BottomSheet = onError(guildId[11]).BottomSheet;
    obj3 = { bottom: true, children: items1 };
    SafeAreaPaddingView = onError(guildId[12]).SafeAreaPaddingView;
    let obj4 = { label: intl.string(onError(guildId[9]).t["mFP/qw"]), maxLength: 160, onChange: tmp4, value };
    const TextArea = onError(guildId[13]).TextArea;
    intl = onError(guildId[9]).intl;
    items1 = [closure_6(TextArea, obj4), ];
    let obj5 = { direction: "horizontal", style: tmp.buttonGroup, children: items2 };
    const ButtonGroup = onError(guildId[14]).ButtonGroup;
    let obj6 = { grow: true, variant: "secondary", text: intl2.string(onError(guildId[9]).t["ETE/oC"]), onPress: bottomSheetClose, disabled: tmp7 };
    const Button = onError(guildId[15]).Button;
    intl2 = onError(guildId[9]).intl;
    items2 = [closure_6(Button, obj6), ];
    let obj7 = { grow: true, variant: "destructive", text: intl3.string(onError(guildId[9]).t.hDtbsz), onPress: callback, disabled: tmp7 };
    const Button2 = onError(guildId[15]).Button;
    intl3 = onError(guildId[9]).intl;
    items2[1] = closure_6(Button2, obj7);
    items1[1] = closure_7(ButtonGroup, obj5);
    return closure_6(BottomSheet, obj2);
  }
}
let react = react_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const metroImportAll = createStyles.createStyles({ container: { padding: 20 }, buttonGroup: { marginTop: 16 } });
const memoResult = react.memo(JoinRequestRejectionReasonActionSheet);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestRejectionReasonActionSheet.tsx");

export default memoResult;
export { JoinRequestRejectionReasonActionSheet };
