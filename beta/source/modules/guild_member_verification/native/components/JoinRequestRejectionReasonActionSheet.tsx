// Module ID: 12131
// Function ID: 12132
// Name: JoinRequestRejectionReasonActionSheet
// Dependencies: [5, 32, 19, 21, 4836, 7615, 5853, 4658, 4528, 1115, 6034, 576, 4800, 6571, 6544, 6506, 5745, 5281, 2]

// Module 12131 (JoinRequestRejectionReasonActionSheet)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, _undefined, c4;

let metroImportDefault;
let metroRequire;
class JoinRequestRejectionReasonActionSheet {
  constructor(onDismiss) {
    let SafeAreaPaddingView;
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
    const userId = joinRequest.userId;
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
      let closure_1;
      let closure_2;
      let intl;
      let v3;
      if (_undefined === 2) {
        _undefined = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          _undefined = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              _undefined = 3;
              throw value;
            } else if (arg0 === 2) {
              _undefined = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              _undefined(true);
              c3 = 2;
              const obj7 = tmp(guildId[6]);
              c4 = 3;
              _undefined = 1;
              const obj4 = { value: obj7.updateGuildJoinRequest(guildId, userId, joinRequestId, tmp(guildId[7]).GuildJoinRequestApplicationStatuses.REJECTED, first), done: false };
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_5(false);
            throw guildId;
          } else {
            if (2 === c4) {
              c3 = 1;
              closure_129_0();
            } else if (arg0 === 1) {
              _undefined = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_5(false);
              _undefined = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              const obj5 = {
                key: "JOIN_REQUEST_REJECT",
                content: intl.string(tmp(guildId[9]).t["TQY/Rd"]),
                icon() {
                          const obj = { color: closure_1_1(closure_1_2[11]).colors.BACKGROUND_FEEDBACK_CRITICAL, secondaryColor: closure_1_1(closure_1_2[11]).colors.ICON_FEEDBACK_CRITICAL };
                          const CircleXIcon = closure_1_0(closure_1_2[10]).CircleXIcon;
                          return closure_1_6(CircleXIcon, obj);
                        }
              };
              const open = tmp2(guildId[8]).open;
              const tmp30 = tmp2(guildId[8]);
              intl = tmp(guildId[9]).intl;
              open(obj5);
              const obj6 = tmp2(guildId[12]);
              obj6.hideAllActionSheets();
              c3 = 1;
            }
            c3 = 0;
            closure_129_5(false);
            _undefined = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          guildId = tmp20;
          if (0 === c3) {
            _undefined = 3;
            throw tmp20;
          } else if (1 === tmp22) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    }), items);
    let obj2 = { bodyStyles: tmp.container, onDismiss, ref: bottomSheetRef, children: closure_7(SafeAreaPaddingView, obj3) };
    BottomSheet = onError(guildId[13]).BottomSheet;
    obj3 = { bottom: true, children: items1 };
    SafeAreaPaddingView = onError(guildId[14]).SafeAreaPaddingView;
    let obj4 = { label: intl.string(onError(guildId[9]).t["mFP/qw"]), maxLength: 160, onChange: tmp4, value };
    const TextArea = onError(guildId[15]).TextArea;
    intl = onError(guildId[9]).intl;
    items1 = [closure_6(TextArea, obj4), ];
    let obj5 = { direction: "horizontal", style: tmp.buttonGroup, children: items2 };
    const ButtonGroup = onError(guildId[16]).ButtonGroup;
    let obj6 = { grow: true, variant: "secondary", text: intl2.string(onError(guildId[9]).t["ETE/oC"]), onPress: bottomSheetClose, disabled: tmp7 };
    const Button = onError(guildId[17]).Button;
    intl2 = onError(guildId[9]).intl;
    items2 = [closure_6(Button, obj6), ];
    let obj7 = { grow: true, variant: "destructive", text: intl3.string(onError(guildId[9]).t.hDtbsz), onPress: callback, disabled: tmp7 };
    const Button2 = onError(guildId[17]).Button;
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
