// Module ID: 17118
// Function ID: 17119
// Name: ChangeSpendingLimitModal
// Dependencies: [5, 19, 17, 7792, 21, 5140, 575, 8096, 5751, 1113, 2664, 6799, 17119, 5837, 5836, 8041, 8043, 7015, 13451, 5758, 7477, 6159, 7148, 6822, 7064, 11627, 2]
// Exports: default

// Module 17118 (ChangeSpendingLimitModal)
import nativeDefault from "native" /* 575 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import NavigatorHeader from "NavigatorHeader" /* 7064 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7792 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c3;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function closeChangeSpendingLimitModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_6);
}
function ChangeSpendingLimitScreen(teenId) {
  let Button;
  let _undefined;
  let amountInput;
  let c0;
  let canSave;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isOverspending;
  let isSubmitting;
  let items;
  let items1;
  let items3;
  let items5;
  let items6;
  let monthlySpend;
  let obj12;
  let obj14;
  let obj20;
  let obj24;
  let obj26;
  let str;
  let tmp22;
  let tmp26;
  let tmp8;
  _require = undefined;
  let obj = function _handleSave() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let intl2;
      let v1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c2;
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c2 = 1;
              c1 = 2;
              c3 = 1;
              const obj4 = { value: _undefined(), done: false };
              return obj4;
            }
          } else {
            if (1 === tmp4) {
              c2 = 0;
              const presentFailedToast = tmp(c2[14]).presentFailedToast;
              const tmp8 = tmp(c2[14]);
              const intl = tmp(c2[9]).intl;
              presentFailedToast(intl.string(c1(c2[10]).Wu8BK2));
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const obj5 = { text: intl2.string(c1(c2[10])["2WKfG1"]), variant: "success" };
              const open = c1(c2[13]).open;
              const tmp23 = c1(c2[13]);
              intl2 = tmp(c2[9]).intl;
              open("SPENDING_CONTROLS_CHANGED", obj5);
              const arr = c1(c2[11]);
              arr.pop();
              c2 = 0;
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp15) {
          if (0 === c2) {
            c3 = 3;
            throw tmp15;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  teenId = teenId.teenId;
  const tmp = closure_9();
  const tmp3 = dependencyMap;
  obj = require("ChangeSpendingLimitFormState");
  const changeSpendingLimitFormState = obj.useChangeSpendingLimitFormState(teenId, closeChangeSpendingLimitModal);
  ({ amountInput, isOverspending, canSave, isSubmitting, monthlySpend, save: c0 } = changeSpendingLimitFormState);
  if (changeSpendingLimitFormState.isLoaded) {
    let obj17;
    const tmp15 = null;
    let formatPriceResult = null;
    if (null != monthlySpend) {
      formatPriceResult = null;
      if (monthlySpend > 0) {
        const tmp2Result = require("PriceUtils");
        formatPriceResult = tmp2Result.formatPrice(monthlySpend, tmp6);
      }
    }
    const tmp17 = amountInput.length > 0;
    const ModalScreen2 = tmp2(8041).ModalScreen;
    const ModalContent2 = tmp2(8043).ModalContent;
    let obj2 = { spacing: obj(575).space.PX_16, children: items };
    const Stack = tmp2(6159).Stack;
    let obj3 = { variant: "body-sm/normal", children: intl2.string(obj(2664).IFguF2) };
    const Text = tmp2(5751).Text;
    intl2 = tmp2(1113).intl;
    items = [closure_7(Text, obj3), ];
    let obj4 = { spacing: obj(575).space.PX_8, children: items1 };
    const Stack2 = tmp2(6159).Stack;
    let obj5 = { variant: "body-sm/semibold", color: "text-subtle", children: intl3.string(obj(2664)["1fHSu2"]) };
    const Text2 = tmp2(5751).Text;
    intl3 = tmp2(1113).intl;
    items1 = [closure_7(Text2, obj5), , ];
    const obj6 = { accessibilityLabel: intl4.string(obj(2664)["1fHSu2"]), value: amountInput, onChange: tmp5, leadingText: tmp22, placeholder: intl5.string(obj(2664).DjSv82), keyboardType: str, clearable: true };
    const TextInput = tmp2(7148).TextInput;
    intl4 = tmp2(1113).intl;
    tmp22 = undefined;
    if (tmp17) {
      tmp22 = tmp7;
    }
    intl5 = tmp2(1113).intl;
    str = "number-pad";
    if (tmp8 > 0) {
      str = "decimal-pad";
    }
    const items2 = [tmp19(TextInput, obj6), ];
    let tmp19Result = null;
    if (isOverspending) {
      const obj7 = { style: tmp.warningOverlay, pointerEvents: "none" };
      tmp19Result = tmp19(tmp21, obj7);
    }
    const obj8 = { children: items2 };
    items2[1] = tmp19Result;
    items1[1] = closure_8(closure_5, obj8);
    let tmp24 = null;
    if (null != formatPriceResult) {
      let tmp19Result1;
      if (isOverspending) {
        const obj9 = { style: tmp.warningRow, children: items3 };
        const obj10 = { size: "xs", color: obj(575).colors.ICON_FEEDBACK_WARNING };
        const WarningIcon = tmp2(8096).WarningIcon;
        items3 = [tmp19(WarningIcon, obj10), ];
        const obj11 = { variant: "body-sm/normal", style: tmp.warningText, children: intl7.formatToPlainString(obj(2664).Tk6x4X, obj12) };
        const Text4 = tmp2(5751).Text;
        intl7 = tmp2(1113).intl;
        obj12 = { amount: formatPriceResult, date: tmp10 };
        items3[1] = closure_7(Text4, obj11);
        tmp19Result1 = tmp18(tmp21, obj9);
      } else {
        const obj13 = { variant: "body-sm/normal", color: "text-muted", children: intl6.formatToPlainString(obj(2664).pfAlRY, obj14) };
        const Text3 = tmp2(5751).Text;
        intl6 = tmp2(1113).intl;
        obj14 = { amount: formatPriceResult };
        tmp19Result1 = tmp19(Text3, obj13);
      }
      tmp24 = tmp19Result1;
    }
    function handleSave() {
      return obj(...arguments);
    }
    items1[2] = tmp24;
    const obj15 = { children: closure_8(Stack, obj2) };
    items[1] = closure_8(Stack2, obj4);
    const items4 = [tmp19(ModalContent2, obj15), ];
    const ModalFooter2 = tmp2(13451).ModalFooter;
    const ButtonGroup = tmp2(6822).ButtonGroup;
    const Button2 = tmp2(5758).Button;
    if (tmp9) {
      const obj16 = { variant: "destructive", text: intl9.string(obj(2664).JZDGJ8), onPress: handleSave, disabled: isSubmitting, loading: isSubmitting };
      intl9 = tmp2(1113).intl;
      obj17 = obj16;
    } else {
      obj17 = { text: intl8.string(tmp2(1113).t["R3BPH+"]), onPress: handleSave, disabled: tmp26, loading: isSubmitting };
      intl8 = tmp2(1113).intl;
      tmp26 = !canSave;
      if (canSave) {
        tmp26 = isSubmitting;
      }
    }
    const obj18 = { children: items4 };
    const obj19 = { children: closure_8(ButtonGroup, obj20) };
    obj20 = { children: items5 };
    items5 = [tmp19(Button2, obj17), ];
    const obj21 = { variant: "tertiary", text: intl10.string(require("intl").t["ETE/oC"]), onPress: obj(6799).pop };
    const Button3 = tmp2(5758).Button;
    intl10 = tmp2(1113).intl;
    items5[1] = closure_7(Button3, obj21);
    items4[1] = closure_7(ModalFooter2, obj19);
    return closure_8(ModalScreen2, obj18);
  } else {
    const obj22 = { children: items6 };
    const ModalScreen = tmp2(8041).ModalScreen;
    const obj23 = { children: closure_7(closure_5, obj24) };
    obj24 = { style: tmp.loading, children: closure_7(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, {}) };
    const ModalContent = tmp2(8043).ModalContent;
    items6 = [closure_7(ModalContent, obj23), ];
    const obj25 = { children: closure_7(Button, obj26) };
    const ModalFooter = tmp2(13451).ModalFooter;
    obj26 = { variant: "tertiary", text: intl.string(require("intl").t["ETE/oC"]), onPress: obj(6799).pop };
    Button = tmp2(5758).Button;
    intl = tmp2(1113).intl;
    items6[1] = closure_7(ModalFooter, obj25);
    return closure_8(ModalScreen, obj22);
  }
}
({ View: hasOwnProperty, StyleSheet } = react_native);
let closure_6 = FamilyCenterConstants.CHANGE_SPENDING_LIMIT_MODAL_KEY;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { warningOverlay: obj2, warningRow: obj3, warningText: obj4, loading: obj5 };
obj2 = { borderRadius: nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_WARNING };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj4 = { flex: 1, color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj5 = { alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/ChangeSpendingLimitModal.tsx");

export default function ChangeSpendingLimitModal(teenId) {
  let intl;
  teenId = teenId.teenId;
  const items = [teenId];
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    let obj = { CHANGE_SPENDING_LIMIT: obj2 };
    obj2 = {
      headerShown: true,
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        let intl;
        const obj = { variant: "body-md/semibold", children: intl.string(closure_1_1(closure_1_2[10]).xMRO6A) };
        const Text = teenId(closure_1_2[8]).Text;
        intl = teenId(closure_1_2[9]).intl;
        return closure_1_7(Text, obj);
      },
      render() {
        const obj = { teenId };
        return closure_2_7(closure_2_11, obj);
      }
    };
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: memo, headerBackTitle: intl.string(teenId(1113).t["13/7kX"]) };
  const Modal = teenId(11627).Modal;
  intl = teenId(1113).intl;
  return closure_7(Modal, obj);
};
