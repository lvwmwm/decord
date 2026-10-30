// Module ID: 16756
// Function ID: 16757
// Name: ChangeSpendingLimitModal
// Dependencies: [5, 19, 17, 21, 5009, 575, 8018, 5619, 1114, 2537, 16757, 5707, 6738, 5706, 7407, 7964, 7965, 6022, 7076, 13158, 6761, 5629, 6992, 11447, 2]
// Exports: default

// Module 16756 (ChangeSpendingLimitModal)
import nativeDefault from "native" /* 575 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c3;

let StyleSheet;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function ChangeSpendingLimitScreen(teenId) {
  let _undefined;
  let amountInput;
  let c0;
  let canSave;
  let currencySymbol;
  let exponent;
  let handleAmountChange;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isClearingCap;
  let isOverspending;
  let isSubmitting;
  let items;
  let items1;
  let items3;
  let items5;
  let monthlySpend;
  let obj11;
  let obj13;
  let obj16;
  let obj19;
  let renewalDate;
  let str;
  let tmp12;
  let tmp16;
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
          return { value: "HermesInternal", done: null };
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
              const presentFailedToast = tmp(c2[13]).presentFailedToast;
              const tmp8 = tmp(c2[13]);
              const intl = tmp(c2[8]).intl;
              presentFailedToast(intl.string(c1(c2[9]).Wu8BK2));
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const obj5 = { text: intl2.string(c1(c2[9])["2WKfG1"]), variant: "success" };
              const open = c1(c2[11]).open;
              const tmp23 = c1(c2[11]);
              intl2 = tmp(c2[8]).intl;
              open("SPENDING_CONTROLS_CHANGED", obj5);
              const arr = c1(c2[12]);
              arr.pop();
              c2 = 0;
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
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
  const tmp = closure_8();
  const tmp3 = dependencyMap;
  obj = require("ChangeSpendingLimitFormState");
  const changeSpendingLimitFormState = obj.useChangeSpendingLimitFormState(teenId);
  ({ amountInput, isOverspending, canSave, isSubmitting, monthlySpend, save: c0 } = changeSpendingLimitFormState);
  let formatPriceResult = null;
  ({ handleAmountChange, currencySymbol, exponent, isClearingCap, renewalDate } = changeSpendingLimitFormState);
  if (null != monthlySpend) {
    formatPriceResult = null;
    if (monthlySpend > 0) {
      const tmp2Result = require("PriceUtils");
      formatPriceResult = tmp2Result.formatPrice(monthlySpend, tmp5);
    }
  }
  let tmp8 = closure_7;
  const tmp7 = amountInput.length > 0;
  const ModalScreen = tmp2(7964).ModalScreen;
  const ModalContent = tmp2(7965).ModalContent;
  let obj2 = { spacing: obj(575).space.PX_16, children: items };
  const Stack = tmp2(6022).Stack;
  let obj3 = { variant: "text-sm/normal", children: intl.string(obj(2537).IFguF2) };
  const Text = tmp2(5619).Text;
  intl = tmp2(1114).intl;
  items = [closure_6(Text, obj3), ];
  let obj4 = { spacing: obj(575).space.PX_8, children: items1 };
  const Stack2 = tmp2(6022).Stack;
  let obj5 = { variant: "text-sm/semibold", color: "text-subtle", children: intl2.string(obj(2537)["1fHSu2"]) };
  const Text2 = tmp2(5619).Text;
  intl2 = tmp2(1114).intl;
  items1 = [closure_6(Text2, obj5), , ];
  const obj6 = { accessibilityLabel: intl3.string(obj(2537)["1fHSu2"]), value: amountInput, onChange: handleAmountChange, leadingText: tmp12, placeholder: intl4.string(obj(2537).DjSv82), keyboardType: str, clearable: true };
  const TextInput = tmp2(7076).TextInput;
  intl3 = tmp2(1114).intl;
  tmp12 = undefined;
  if (tmp7) {
    tmp12 = currencySymbol;
  }
  intl4 = tmp2(1114).intl;
  str = "number-pad";
  if (exponent > 0) {
    str = "decimal-pad";
  }
  const items2 = [tmp9(TextInput, obj6), ];
  let tmp9Result = null;
  if (isOverspending) {
    const obj7 = { style: tmp.warningOverlay, pointerEvents: "none" };
    tmp9Result = tmp9(tmp11, obj7);
  }
  items2[1] = tmp9Result;
  items1[1] = tmp8(closure_5, { children: items2 });
  let tmp14 = null;
  if (null != formatPriceResult) {
    let tmp9Result1;
    if (isOverspending) {
      const obj8 = { style: tmp.warningRow, children: items3 };
      const obj9 = { size: "xs", color: obj(575).colors.ICON_FEEDBACK_WARNING };
      const WarningIcon = tmp2(8018).WarningIcon;
      items3 = [tmp9(WarningIcon, obj9), ];
      const obj10 = { variant: "text-sm/normal", style: tmp.warningText, children: intl6.formatToPlainString(obj(2537).Tk6x4X, obj11) };
      const Text4 = tmp2(5619).Text;
      intl6 = tmp2(1114).intl;
      obj11 = { amount: formatPriceResult, date: renewalDate };
      items3[1] = closure_6(Text4, obj10);
      tmp9Result1 = tmp8(tmp11, obj8);
    } else {
      const obj12 = { variant: "text-sm/normal", color: "text-muted", children: intl5.formatToPlainString(obj(2537).pfAlRY, obj13) };
      const Text3 = tmp2(5619).Text;
      intl5 = tmp2(1114).intl;
      obj13 = { amount: formatPriceResult };
      tmp9Result1 = tmp9(Text3, obj12);
    }
    tmp14 = tmp9Result1;
  }
  function handleSave() {
    return obj(...arguments);
  }
  items1[2] = tmp14;
  const obj14 = { children: tmp8(Stack, obj2) };
  items[1] = tmp8(Stack2, obj4);
  const items4 = [tmp9(ModalContent, obj14), ];
  const ModalFooter = tmp2(13158).ModalFooter;
  const ButtonGroup = tmp2(6761).ButtonGroup;
  const Button = tmp2(5629).Button;
  if (isClearingCap) {
    const obj15 = { variant: "destructive", text: intl8.string(obj(2537).JZDGJ8), onPress: handleSave, disabled: isSubmitting, loading: isSubmitting };
    intl8 = tmp2(1114).intl;
    obj16 = obj15;
  } else {
    obj16 = { text: intl7.string(tmp2(1114).t["R3BPH+"]), onPress: handleSave, disabled: tmp16, loading: isSubmitting };
    intl7 = tmp2(1114).intl;
    tmp16 = !canSave;
    if (canSave) {
      tmp16 = isSubmitting;
    }
  }
  const obj17 = { children: items4 };
  const obj18 = { children: tmp8(ButtonGroup, obj19) };
  obj19 = { children: items5 };
  items5 = [tmp9(Button, obj16), ];
  const obj20 = { variant: "tertiary", text: intl9.string(require("intl").t["ETE/oC"]), onPress: obj(6738).pop };
  const Button2 = tmp2(5629).Button;
  intl9 = tmp2(1114).intl;
  items5[1] = closure_6(Button2, obj20);
  items4[1] = closure_6(ModalFooter, obj18);
  return tmp8(ModalScreen, obj17);
}
({ View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { warningOverlay: obj2, warningRow: obj3, warningText: obj4 };
obj2 = { borderRadius: nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj4 = { flex: 1, color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let closure_8 = createStyles(obj);
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
        const obj = { variant: "text-md/semibold", children: intl.string(closure_1_1(closure_1_2[9]).xMRO6A) };
        const Text = teenId(closure_1_2[7]).Text;
        intl = teenId(closure_1_2[8]).intl;
        return closure_1_6(Text, obj);
      },
      render() {
        const obj = { teenId };
        return closure_2_6(closure_2_9, obj);
      }
    };
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: memo, headerBackTitle: intl.string(teenId(1114).t["13/7kX"]) };
  const Modal = teenId(11447).Modal;
  intl = teenId(1114).intl;
  return closure_6(Modal, obj);
};
