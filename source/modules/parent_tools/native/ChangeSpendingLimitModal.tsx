// Module ID: 13861
// Function ID: 106134
// Name: renderMonthlySpendLine
// Dependencies: [5, 31, 27, 33, 4130, 689, 7631, 4126, 1212, 2198, 13862, 3831, 4091, 4337, 3830, 5616, 7613, 7614, 4541, 7574, 11098, 4965, 4543, 5087, 11100, 2]
// Exports: default

// Module 13861 (renderMonthlySpendLine)
import closure_3 from "_createForOfIteratorHelperLoose";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function renderMonthlySpendLine(formatPriceResult, isOverspending, renewalDate, arg3) {
  let tmp = formatPriceResult;
  let formatToPlainStringResult = arg3;
  if (null == formatPriceResult) {
    return null;
  } else if (isOverspending) {
    let obj = { style: formatToPlainStringResult.warningRow };
    obj = { size: "xs", color: importDefault(689).colors.ICON_FEEDBACK_WARNING };
    const items = [callback(require(7631) /* WarningIcon */.WarningIcon, obj), ];
    const obj1 = { variant: "text-sm/normal", style: formatToPlainStringResult.warningText };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj2 = { amount: tmp };
    tmp = renewalDate;
    obj2.date = renewalDate;
    formatToPlainStringResult = intl2.formatToPlainString(importDefault(2198).Tk6x4X, obj2);
    obj1.children = formatToPlainStringResult;
    items[1] = callback(require(4126) /* Text */.Text, obj1);
    obj.children = items;
    let tmp8 = callback2(View, obj);
  } else {
    obj = { variant: "text-sm/normal", color: "text-muted" };
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj3 = { amount: tmp };
    obj.children = intl.formatToPlainString(importDefault(2198).pfAlRY, obj3);
    tmp8 = callback(require(4126) /* Text */.Text, obj);
  }
}
function ChangeSpendingLimitScreen(teenId) {
  let amountInput;
  let c0;
  let canSave;
  let currencySymbol;
  let exponent;
  let handleAmountChange;
  let isClearingCap;
  let isOverspending;
  let isSubmitting;
  let monthlySpend;
  let renewalDate;
  let _require;
  function handleSave() {
    return _handleSave(...arguments);
  }
  function _handleSave(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = _require(13862);
  const changeSpendingLimitFormState = obj.useChangeSpendingLimitFormState(teenId.teenId);
  ({ amountInput, isOverspending, isSubmitting, renewalDate, monthlySpend, save: c0 } = changeSpendingLimitFormState);
  let formatPriceResult = null;
  ({ handleAmountChange, currencySymbol, exponent, isClearingCap, canSave } = changeSpendingLimitFormState);
  if (null != monthlySpend) {
    formatPriceResult = null;
    if (monthlySpend > 0) {
      let obj1 = _require(5616);
      formatPriceResult = obj1.formatPrice(monthlySpend, tmp3);
    }
  }
  obj = {};
  obj = {};
  obj1 = { spacing: _handleSave(689).space.PX_16 };
  const obj2 = { variant: "text-sm/normal" };
  const intl = _require(1212).intl;
  obj2.children = intl.string(_handleSave(2198).IFguF2);
  const items = [callback(_require(4126).Text, obj2), ];
  const obj3 = { spacing: _handleSave(689).space.PX_8 };
  const obj4 = { variant: "text-sm/semibold", color: "text-subtle" };
  const intl2 = _require(1212).intl;
  obj4.children = intl2.string(_handleSave(2198)["1fHSu2"]);
  const items1 = [callback(_require(4126).Text, obj4), , ];
  const obj5 = {};
  const obj6 = {};
  const intl3 = _require(1212).intl;
  obj6.accessibilityLabel = intl3.string(_handleSave(2198)["1fHSu2"]);
  obj6.value = amountInput;
  obj6.onChange = handleAmountChange;
  let tmp15;
  if (tmp7) {
    tmp15 = currencySymbol;
  }
  obj6.leadingText = tmp15;
  const intl4 = _require(1212).intl;
  obj6.placeholder = intl4.string(_handleSave(2198).DjSv82);
  let str = "number-pad";
  if (exponent > 0) {
    str = "decimal-pad";
  }
  obj6.keyboardType = str;
  obj6.isClearable = true;
  const items2 = [callback(_require(7574).TextInput, obj6), ];
  let tmp16 = null;
  if (isOverspending) {
    const obj7 = { style: tmp.warningOverlay, pointerEvents: "none" };
    tmp16 = callback(View, obj7);
  }
  items2[1] = tmp16;
  obj5.children = items2;
  items1[1] = closure_7(View, obj5);
  items1[2] = renderMonthlySpendLine(formatPriceResult, isOverspending, renewalDate, tmp);
  obj3.children = items1;
  items[1] = closure_7(_require(4541).Stack, obj3);
  obj1.children = items;
  obj.children = closure_7(_require(4541).Stack, obj1);
  const items3 = [callback(_require(7614).ModalContent, obj), ];
  const obj8 = {};
  const obj9 = {};
  if (isClearingCap) {
    const obj10 = { variant: "destructive" };
    const intl6 = _require(1212).intl;
    obj10.text = intl6.string(_handleSave(2198).JZDGJ8);
    obj10.onPress = handleSave;
    obj10.disabled = isSubmitting;
    obj10.loading = isSubmitting;
    let obj11 = obj10;
  } else {
    obj11 = {};
    const intl5 = _require(1212).intl;
    obj11.text = intl5.string(_require(1212).t["R3BPH+"]);
    obj11.onPress = handleSave;
    obj11.disabled = !canSave || isSubmitting;
    obj11.loading = isSubmitting;
  }
  const items4 = [callback(_require(4543).Button, obj11), ];
  const obj12 = { variant: "tertiary" };
  const intl7 = _require(1212).intl;
  obj12.text = intl7.string(_require(1212).t["ETE/oC"]);
  obj12.onPress = _handleSave(4337).pop;
  items4[1] = callback(_require(4543).Button, obj12);
  obj9.children = items4;
  obj8.children = closure_7(_require(4965).ButtonGroup, obj9);
  items3[1] = callback(_require(11098).ModalFooter, obj8);
  obj.children = items3;
  return closure_7(_require(7613).ModalScreen, obj);
}
const View = get_ActivityIndicator.View;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["borderRadius"] = require("_createForOfIteratorHelperLoose").modules.mobile.INPUT_FIELD_RADIUS_LG;
_createForOfIteratorHelperLoose["borderWidth"] = 1;
_createForOfIteratorHelperLoose["borderColor"] = require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING;
_createForOfIteratorHelperLoose["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_WARNING;
_createForOfIteratorHelperLoose.warningOverlay = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "flex-start" };
_createForOfIteratorHelperLoose.warningRow = obj1;
_createForOfIteratorHelperLoose.warningText = { flex: 1, color: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { flex: 1, color: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/parent_tools/native/ChangeSpendingLimitModal.tsx");

export default function ChangeSpendingLimitModal(teenId) {
  teenId = teenId.teenId;
  const items = [teenId];
  const memo = React.useMemo(() => (function getScreens(teenId) {
    let closure_0 = teenId;
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: teenId(outer2_2[23]).getHeaderCloseButton(outer2_1(outer2_2[13]).pop),
      headerTitle() {
        const obj = { variant: "text-md/semibold" };
        const intl = teenId(outer3_2[8]).intl;
        obj.children = intl.string(outer3_1(outer3_2[9]).xMRO6A);
        return outer3_6(teenId(outer3_2[7]).Text, obj);
      },
      render() {
        return outer3_6(outer3_10, { teenId: closure_0 });
      }
    };
    obj.CHANGE_SPENDING_LIMIT = obj;
    return obj;
  })(teenId), items);
  let obj = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: memo };
  let intl = teenId(1212).intl;
  obj.headerBackTitle = intl.string(teenId(1212).t["13/7kX"]);
  return callback(teenId(11100).Modal, obj);
};
