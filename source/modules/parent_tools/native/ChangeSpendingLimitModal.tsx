// Module ID: 13687
// Function ID: 103599
// Name: renderMonthlySpendLine
// Dependencies: []
// Exports: default

// Module 13687 (renderMonthlySpendLine)
function renderMonthlySpendLine(formatPriceResult, isOverspending, renewalDate, arg3) {
  let tmp = formatPriceResult;
  let formatToPlainStringResult = arg3;
  if (null == formatPriceResult) {
    return null;
  } else if (isOverspending) {
    let obj = { style: formatToPlainStringResult.warningRow };
    obj = { size: "xs", color: importDefault(dependencyMap[5]).colors.ICON_FEEDBACK_WARNING };
    const items = [callback2(isOverspending(dependencyMap[6]).WarningIcon, obj), ];
    const obj1 = { variant: "text-sm/normal", style: formatToPlainStringResult.warningText };
    const intl2 = isOverspending(dependencyMap[8]).intl;
    const obj2 = { amount: tmp };
    tmp = renewalDate;
    obj2.date = renewalDate;
    formatToPlainStringResult = intl2.formatToPlainString(importDefault(dependencyMap[9]).Tk6x4X, obj2);
    obj1.children = formatToPlainStringResult;
    items[1] = callback2(isOverspending(dependencyMap[7]).Text, obj1);
    obj.children = items;
    let tmp8 = callback3(View, obj);
  } else {
    obj = {};
    const intl = isOverspending(dependencyMap[8]).intl;
    const obj3 = { amount: tmp };
    obj.children = intl.formatToPlainString(importDefault(dependencyMap[9]).pfAlRY, obj3);
    tmp8 = callback2(isOverspending(dependencyMap[7]).Text, obj);
  }
}
function ChangeSpendingLimitScreen(teenId) {
  let amountInput;
  let canSave;
  let currencySymbol;
  let exponent;
  let handleAmountChange;
  let isClearingCap;
  let isOverspending;
  let isSubmitting;
  let monthlySpend;
  let renewalDate;
  let callback;
  function handleSave() {
    return _handleSave(...arguments);
  }
  function _handleSave(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleSave = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  let obj = callback(dependencyMap[10]);
  const changeSpendingLimitFormState = obj.useChangeSpendingLimitFormState(teenId.teenId);
  ({ amountInput, isOverspending, isSubmitting, renewalDate, monthlySpend, save: closure_0 } = changeSpendingLimitFormState);
  let formatPriceResult = null;
  ({ handleAmountChange, currencySymbol, exponent, isClearingCap, canSave } = changeSpendingLimitFormState);
  if (null != monthlySpend) {
    formatPriceResult = null;
    if (monthlySpend > 0) {
      let obj1 = callback(dependencyMap[15]);
      formatPriceResult = obj1.formatPrice(monthlySpend, tmp3);
    }
  }
  obj = {};
  obj = {};
  obj1 = { spacing: _handleSave(dependencyMap[5]).space.PX_16 };
  const obj2 = { variant: "text-sm/normal" };
  const intl = callback(dependencyMap[8]).intl;
  obj2.children = intl.string(_handleSave(dependencyMap[9]).IFguF2);
  const items = [callback2(callback(dependencyMap[7]).Text, obj2), ];
  const obj3 = { spacing: _handleSave(dependencyMap[5]).space.PX_8 };
  const obj4 = {};
  const intl2 = callback(dependencyMap[8]).intl;
  obj4.children = intl2.string(_handleSave(dependencyMap[9]).1fHSu2);
  const items1 = [callback2(callback(dependencyMap[7]).Text, obj4), , ];
  const obj5 = {};
  const obj6 = {};
  const intl3 = callback(dependencyMap[8]).intl;
  obj6.accessibilityLabel = intl3.string(_handleSave(dependencyMap[9]).1fHSu2);
  obj6.value = amountInput;
  obj6.onChange = handleAmountChange;
  let tmp15;
  if (tmp7) {
    tmp15 = currencySymbol;
  }
  obj6.leadingText = tmp15;
  const intl4 = callback(dependencyMap[8]).intl;
  obj6.placeholder = intl4.string(_handleSave(dependencyMap[9]).DjSv82);
  let str = "number-pad";
  if (exponent > 0) {
    str = "decimal-pad";
  }
  obj6.keyboardType = str;
  obj6.isClearable = true;
  const items2 = [callback2(callback(dependencyMap[19]).TextInput, obj6), ];
  let tmp16 = null;
  if (isOverspending) {
    const obj7 = { style: tmp.warningOverlay, pointerEvents: "none" };
    tmp16 = callback2(View, obj7);
  }
  items2[1] = tmp16;
  obj5.children = items2;
  items1[1] = closure_7(View, obj5);
  items1[2] = renderMonthlySpendLine(formatPriceResult, isOverspending, renewalDate, tmp);
  obj3.children = items1;
  items[1] = closure_7(callback(dependencyMap[18]).Stack, obj3);
  obj1.children = items;
  obj.children = closure_7(callback(dependencyMap[18]).Stack, obj1);
  const items3 = [callback2(callback(dependencyMap[17]).ModalContent, obj), ];
  const obj8 = {};
  const obj9 = {};
  if (isClearingCap) {
    const obj10 = { variant: "destructive" };
    const intl6 = callback(dependencyMap[8]).intl;
    obj10.text = intl6.string(_handleSave(dependencyMap[9]).JZDGJ8);
    obj10.onPress = handleSave;
    obj10.disabled = isSubmitting;
    obj10.loading = isSubmitting;
    let obj11 = obj10;
  } else {
    obj11 = {};
    const intl5 = callback(dependencyMap[8]).intl;
    obj11.text = intl5.string(callback(dependencyMap[8]).t.R3BPH+);
    obj11.onPress = handleSave;
    obj11.disabled = !canSave || isSubmitting;
    obj11.loading = isSubmitting;
  }
  const items4 = [callback2(callback(dependencyMap[22]).Button, obj11), ];
  const obj12 = { variant: "tertiary" };
  const intl7 = callback(dependencyMap[8]).intl;
  obj12.text = intl7.string(callback(dependencyMap[8]).t.ETE/oC);
  obj12.onPress = _handleSave(dependencyMap[13]).pop;
  items4[1] = callback2(callback(dependencyMap[22]).Button, obj12);
  obj9.children = items4;
  obj8.children = closure_7(callback(dependencyMap[21]).ButtonGroup, obj9);
  items3[1] = callback2(callback(dependencyMap[20]).ModalFooter, obj8);
  obj.children = items3;
  return closure_7(callback(dependencyMap[16]).ModalScreen, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["borderRadius"] = importDefault(dependencyMap[5]).modules.mobile.INPUT_FIELD_RADIUS_LG;
obj["borderWidth"] = 1;
obj["borderColor"] = importDefault(dependencyMap[5]).colors.ICON_FEEDBACK_WARNING;
obj["backgroundColor"] = importDefault(dependencyMap[5]).colors.BACKGROUND_FEEDBACK_WARNING;
obj.warningOverlay = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.warningRow = { gap: importDefault(dependencyMap[5]).space.PX_8 };
const obj1 = { gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.warningText = { flex: 1, color: importDefault(dependencyMap[5]).colors.ICON_FEEDBACK_WARNING };
let closure_8 = obj.createStyles(obj);
const obj2 = { flex: 1, color: importDefault(dependencyMap[5]).colors.ICON_FEEDBACK_WARNING };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/parent_tools/native/ChangeSpendingLimitModal.tsx");

export default function ChangeSpendingLimitModal(teenId) {
  teenId = teenId.teenId;
  const arg1 = teenId;
  const items = [teenId];
  const memo = React.useMemo(() => function getScreens(teenId) {
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: teenId(closure_2[23]).getHeaderCloseButton(callback(closure_2[13]).pop),
      headerTitle() {
        const obj = { variant: "text-md/semibold" };
        const intl = arg0(closure_2[8]).intl;
        obj.children = intl.string(callback(closure_2[9]).xMRO6A);
        return callback2(arg0(closure_2[7]).Text, obj);
      },
      render() {
        return callback2(closure_10, { teenId: arg0 });
      }
    };
    obj.CHANGE_SPENDING_LIMIT = obj;
    return obj;
  }(teenId), items);
  const obj = { initialRouteName: "CHANGE_SPENDING_LIMIT", screens: memo };
  const intl = arg1(dependencyMap[8]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[8]).t.13/7kX);
  return callback2(arg1(dependencyMap[24]).Modal, obj);
};
