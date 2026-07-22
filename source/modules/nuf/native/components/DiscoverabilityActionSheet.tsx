// Module ID: 11774
// Function ID: 91409
// Name: DiscoverabilityActionSheet
// Dependencies: [57, 31, 27, 33, 4126, 689, 5157, 1212, 4124, 1273, 4539, 11713, 2]
// Exports: default

// Module 11774 (DiscoverabilityActionSheet)
import _slicedToArray from "_slicedToArray";
import { View } from "module_31";
import get ActivityIndicator from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import result2 from "result2";

({ useContactSyncModalStore: closure_4, setAllowSync: closure_5, setAllowPhone: closure_6, setAllowEmail: closure_7 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = _createForOfIteratorHelperLoose);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("useSafeAreaInsetsKeyboardAware").colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.formRow = { backgroundColor: require("useSafeAreaInsetsKeyboardAware").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.syncRow = { marginTop: 24 };
const obj1 = { backgroundColor: require("useSafeAreaInsetsKeyboardAware").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.formText = { fontFamily: require("module_33").Fonts.PRIMARY_SEMIBOLD, color: require("useSafeAreaInsetsKeyboardAware").colors.INTERACTIVE_TEXT_ACTIVE };
const obj2 = { fontFamily: require("module_33").Fonts.PRIMARY_SEMIBOLD, color: require("useSafeAreaInsetsKeyboardAware").colors.INTERACTIVE_TEXT_ACTIVE };
_createForOfIteratorHelperLoose.info = { color: require("useSafeAreaInsetsKeyboardAware").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = result2.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityActionSheet.tsx");

export default function DiscoverabilityActionSheet() {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback();
  const allowPhone = tmp2.allowPhone;
  const arg1 = allowPhone;
  const allowEmail = tmp2.allowEmail;
  const dependencyMap = allowEmail;
  let tmp3 = allowPhone;
  if (!allowPhone) {
    tmp3 = allowEmail;
  }
  const React = tmp3;
  const items = [tmp3];
  const items1 = [allowPhone];
  const callback = React.useCallback(() => {
    callback(!tmp3);
  }, items);
  const items2 = [allowEmail];
  const callback1 = React.useCallback(() => {
    callback2(!allowPhone);
  }, items1);
  let obj = { style: tmp.container };
  const callback2 = React.useCallback(() => {
    callback3(!allowEmail);
  }, items2);
  obj = { DEPRECATED_style: items3 };
  const items3 = [, ];
  ({ formRow: arr4[0], syncRow: arr4[1] } = tmp);
  obj = { style: tmp.formText };
  const intl = arg1(dependencyMap[8]).intl;
  obj.text = intl.string(arg1(dependencyMap[8]).t.gMUgpv);
  obj.label = callback2(arg1(dependencyMap[7]).FormRow.Label, obj);
  obj.onPress = callback;
  const obj1 = { selected: tmp3 };
  obj.trailing = callback2(arg1(dependencyMap[7]).FormRow.Checkbox, obj1);
  const items4 = [callback2(arg1(dependencyMap[7]).FormRow, obj), , , , , , ];
  const obj2 = { style: tmp.info };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[8]).t.pfjsB5);
  items4[1] = callback2(arg1(dependencyMap[7]).FormText, obj2);
  const obj3 = { style: tmp.info };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[8]).t.cW1nr9);
  items4[2] = callback2(arg1(dependencyMap[7]).FormText, obj3);
  const obj4 = { style: tmp.info };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj4.children = intl4.format(arg1(dependencyMap[8]).t.eswIfi, {
    learnMoreHook(children) {
      const obj = { "Null": "business", "Null": "cached", "Null": "cancel", onPress: allowPhone(allowEmail[10]).handleOpenLearnMoreLink, children };
      return callback4(allowPhone(allowEmail[9]).Text, obj, arg1);
    }
  });
  items4[3] = callback2(arg1(dependencyMap[7]).FormText, obj4);
  const obj6 = {};
  const intl5 = arg1(dependencyMap[8]).intl;
  obj6.title = intl5.string(arg1(dependencyMap[8]).t.0t2wRW);
  obj6.thinTitle = true;
  items4[4] = callback2(arg1(dependencyMap[7]).FormTitle, obj6);
  const obj7 = { DEPRECATED_style: tmp.formRow };
  const obj8 = { style: tmp.formText };
  const intl6 = arg1(dependencyMap[8]).intl;
  obj8.text = intl6.string(arg1(dependencyMap[8]).t.eJnn0+);
  obj7.label = callback2(arg1(dependencyMap[7]).FormRow.Label, obj8);
  const obj9 = {};
  const intl7 = arg1(dependencyMap[8]).intl;
  obj9.children = intl7.string(arg1(dependencyMap[8]).t.X7pIKN);
  obj7.subLabel = callback2(arg1(dependencyMap[9]).Text, obj9);
  obj7.onPress = callback1;
  obj7.trailing = callback2(arg1(dependencyMap[7]).FormRow.Checkbox, { selected: allowPhone });
  items4[5] = callback2(arg1(dependencyMap[7]).FormRow, obj7);
  const obj10 = { DEPRECATED_style: tmp.formRow };
  const obj11 = { style: tmp.formText };
  const intl8 = arg1(dependencyMap[8]).intl;
  obj11.text = intl8.string(arg1(dependencyMap[8]).t.dI4d4S);
  obj10.label = callback2(arg1(dependencyMap[7]).FormRow.Label, obj11);
  const obj12 = {};
  const intl9 = arg1(dependencyMap[8]).intl;
  obj12.children = intl9.string(arg1(dependencyMap[8]).t.ilGsHE);
  obj10.subLabel = callback2(arg1(dependencyMap[9]).Text, obj12);
  obj10.onPress = callback2;
  obj10.trailing = callback2(arg1(dependencyMap[7]).FormRow.Checkbox, { selected: allowEmail });
  items4[6] = callback2(arg1(dependencyMap[7]).FormRow, obj10);
  obj.children = items4;
  const children = callback3(View, obj);
  return callback2(arg1(dependencyMap[11]).ActionSheet, { startExpanded: true, children });
};
