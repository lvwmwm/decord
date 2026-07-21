// Module ID: 11705
// Function ID: 90926
// Name: ContactSyncSettingsActionSheet
// Dependencies: [57, 31, 27, 33, 4126, 689, 5226, 1212, 4124, 1273, 4539, 11712, 2]
// Exports: default

// Module 11705 (ContactSyncSettingsActionSheet)
import "_slicedToArray";
import { View } from "module_31";
import keys from "keys";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import result2 from "result2";

({ setAllowEmail: closure_3, setAllowPhone: closure_4, setAllowSync: closure_5, useContactSyncModalStore: closure_6 } = keys);
({ jsx: closure_7, jsxs: closure_8 } = _createForOfIteratorHelperLoose);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("useSafeAreaInsetsKeyboardAware").colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.formRow = { backgroundColor: require("useSafeAreaInsetsKeyboardAware").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.syncRow = { marginTop: 24 };
const obj1 = { backgroundColor: require("useSafeAreaInsetsKeyboardAware").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.formText = { fontFamily: require("module_33").Fonts.PRIMARY_SEMIBOLD, color: require("useSafeAreaInsetsKeyboardAware").colors.INTERACTIVE_TEXT_ACTIVE };
const obj3 = { 1970924292: 0, 1536228356: 287380516, 1560581641: 1078049, 1610837008: 1048576, color: require("useSafeAreaInsetsKeyboardAware").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.info = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = result2.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettingsActionSheet.tsx");

export default function ContactSyncSettingsActionSheet() {
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
  const View = tmp3;
  let obj = { style: tmp.container };
  obj = { DEPRECATED_style: items };
  const items = [, ];
  ({ formRow: arr[0], syncRow: arr[1] } = tmp);
  obj = { style: tmp.formText };
  const intl = arg1(dependencyMap[8]).intl;
  obj.text = intl.string(arg1(dependencyMap[8]).t.a5QL24);
  obj.label = callback2(arg1(dependencyMap[7]).FormRow.Label, obj);
  obj.onPress = function onPress() {
    callback3(!tmp3);
  };
  const obj1 = { selected: tmp3 };
  obj.trailing = callback2(arg1(dependencyMap[7]).FormRow.Checkbox, obj1);
  const items1 = [callback2(arg1(dependencyMap[7]).FormRow, obj), , , , , , ];
  const obj2 = { style: tmp.info };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[8]).t.pfjsB5);
  items1[1] = callback2(arg1(dependencyMap[7]).FormText, obj2);
  const obj3 = { style: tmp.info };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[8]).t.cW1nr9);
  items1[2] = callback2(arg1(dependencyMap[7]).FormText, obj3);
  const obj4 = { style: tmp.info };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj4.children = intl4.format(arg1(dependencyMap[8]).t.eswIfi, {
    learnMoreHook(children) {
      const obj = { onPress: allowPhone(allowEmail[10]).handleOpenLearnMoreLink, children };
      return callback4(allowPhone(allowEmail[9]).Text, obj, arg1);
    }
  });
  items1[3] = callback2(arg1(dependencyMap[7]).FormText, obj4);
  const obj6 = {};
  const intl5 = arg1(dependencyMap[8]).intl;
  obj6.title = intl5.string(arg1(dependencyMap[8]).t.0t2wRW);
  obj6.thinTitle = true;
  items1[4] = callback2(arg1(dependencyMap[7]).FormTitle, obj6);
  const obj7 = { DEPRECATED_style: tmp.formRow };
  const obj8 = { style: tmp.formText };
  const intl6 = arg1(dependencyMap[8]).intl;
  obj8.text = intl6.string(arg1(dependencyMap[8]).t.eJnn0+);
  obj7.label = callback2(arg1(dependencyMap[7]).FormRow.Label, obj8);
  const obj9 = {};
  const intl7 = arg1(dependencyMap[8]).intl;
  obj9.children = intl7.string(arg1(dependencyMap[8]).t.X7pIKN);
  obj7.subLabel = callback2(arg1(dependencyMap[9]).Text, obj9);
  obj7.onPress = function onPress() {
    callback2(!allowPhone);
  };
  obj7.trailing = callback2(arg1(dependencyMap[7]).FormRow.Checkbox, { selected: allowPhone });
  items1[5] = callback2(arg1(dependencyMap[7]).FormRow, obj7);
  const obj10 = { DEPRECATED_style: tmp.formRow };
  const obj11 = { style: tmp.formText };
  const intl8 = arg1(dependencyMap[8]).intl;
  obj11.text = intl8.string(arg1(dependencyMap[8]).t.dI4d4S);
  obj10.label = callback2(arg1(dependencyMap[7]).FormRow.Label, obj11);
  const obj12 = {};
  const intl9 = arg1(dependencyMap[8]).intl;
  obj12.children = intl9.string(arg1(dependencyMap[8]).t.ilGsHE);
  obj10.subLabel = callback2(arg1(dependencyMap[9]).Text, obj12);
  obj10.onPress = function onPress() {
    callback(!allowEmail);
  };
  obj10.trailing = callback2(arg1(dependencyMap[7]).FormRow.Checkbox, { selected: allowEmail });
  items1[6] = callback2(arg1(dependencyMap[7]).FormRow, obj10);
  obj.children = items1;
  const children = callback3(View, obj);
  return callback2(arg1(dependencyMap[11]).ActionSheet, { startExpanded: true, children });
};
