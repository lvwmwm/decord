// Module ID: 11784
// Function ID: 91458
// Name: DiscoverabilityActionSheet
// Dependencies: [31, 27, 11706, 653, 33, 4130, 689, 7495, 1212, 4126, 11709, 5500, 2]
// Exports: default

// Module 11784 (DiscoverabilityActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import initialValues from "initialValues";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ useContactSyncModalStore: closure_4, setAllowSync: closure_5, setAllowPhone: closure_6, setAllowEmail: closure_7 } = initialValues);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { marginTop: 8, paddingVertical: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.formRow = obj1;
_createForOfIteratorHelperLoose.syncRow = { marginTop: 24 };
_createForOfIteratorHelperLoose.formText = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
let obj3 = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.info = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
const result = require("initialValues").fileFinishedImporting("modules/nuf/native/components/DiscoverabilityActionSheet.tsx");

export default function DiscoverabilityActionSheet() {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback();
  const allowPhone = tmp2.allowPhone;
  const allowEmail = tmp2.allowEmail;
  let tmp3 = allowPhone;
  if (!allowPhone) {
    tmp3 = allowEmail;
  }
  const React = tmp3;
  const items = [tmp3];
  const items1 = [allowPhone];
  callback = React.useCallback(() => {
    outer1_5(!result);
  }, items);
  const items2 = [allowEmail];
  const callback1 = React.useCallback(() => {
    outer1_6(!allowPhone);
  }, items1);
  let obj = { style: tmp.container };
  const callback2 = React.useCallback(() => {
    outer1_7(!allowEmail);
  }, items2);
  obj = { DEPRECATED_style: items3 };
  items3 = [, ];
  ({ formRow: arr4[0], syncRow: arr4[1] } = tmp);
  obj = { style: tmp.formText };
  const intl = allowPhone(allowEmail[8]).intl;
  obj.text = intl.string(allowPhone(allowEmail[8]).t.gMUgpv);
  obj.label = callback2(allowPhone(allowEmail[7]).FormRow.Label, obj);
  obj.onPress = callback;
  const obj1 = { selected: tmp3 };
  obj.trailing = callback2(allowPhone(allowEmail[7]).FormRow.Checkbox, obj1);
  const items4 = [callback2(allowPhone(allowEmail[7]).FormRow, obj), , , , , , ];
  const obj2 = { style: tmp.info };
  const intl2 = allowPhone(allowEmail[8]).intl;
  obj2.children = intl2.string(allowPhone(allowEmail[8]).t.pfjsB5);
  items4[1] = callback2(allowPhone(allowEmail[7]).FormText, obj2);
  const obj3 = { style: tmp.info };
  const intl3 = allowPhone(allowEmail[8]).intl;
  obj3.children = intl3.string(allowPhone(allowEmail[8]).t.cW1nr9);
  items4[2] = callback2(allowPhone(allowEmail[7]).FormText, obj3);
  const obj4 = { style: tmp.info };
  const intl4 = allowPhone(allowEmail[8]).intl;
  obj4.children = intl4.format(allowPhone(allowEmail[8]).t.eswIfi, {
    learnMoreHook(children) {
      const obj = { onPress: allowPhone(allowEmail[10]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children };
      return outer1_8(allowPhone(allowEmail[9]).Text, obj, arg1);
    }
  });
  items4[3] = callback2(allowPhone(allowEmail[7]).FormText, obj4);
  const obj6 = {};
  const intl5 = allowPhone(allowEmail[8]).intl;
  obj6.title = intl5.string(allowPhone(allowEmail[8]).t["0t2wRW"]);
  obj6.thinTitle = true;
  items4[4] = callback2(allowPhone(allowEmail[7]).FormTitle, obj6);
  const obj7 = { DEPRECATED_style: tmp.formRow };
  const obj8 = { style: tmp.formText };
  const intl6 = allowPhone(allowEmail[8]).intl;
  obj8.text = intl6.string(allowPhone(allowEmail[8]).t["eJnn0+"]);
  obj7.label = callback2(allowPhone(allowEmail[7]).FormRow.Label, obj8);
  const obj9 = { variant: "text-sm/medium", color: "text-default" };
  const intl7 = allowPhone(allowEmail[8]).intl;
  obj9.children = intl7.string(allowPhone(allowEmail[8]).t.X7pIKN);
  obj7.subLabel = callback2(allowPhone(allowEmail[9]).Text, obj9);
  obj7.onPress = callback1;
  obj7.trailing = callback2(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowPhone });
  items4[5] = callback2(allowPhone(allowEmail[7]).FormRow, obj7);
  const obj10 = { DEPRECATED_style: tmp.formRow };
  const obj11 = { style: tmp.formText };
  const intl8 = allowPhone(allowEmail[8]).intl;
  obj11.text = intl8.string(allowPhone(allowEmail[8]).t.dI4d4S);
  obj10.label = callback2(allowPhone(allowEmail[7]).FormRow.Label, obj11);
  const obj12 = { variant: "text-sm/medium", color: "text-default" };
  const intl9 = allowPhone(allowEmail[8]).intl;
  obj12.children = intl9.string(allowPhone(allowEmail[8]).t.ilGsHE);
  obj10.subLabel = callback2(allowPhone(allowEmail[9]).Text, obj12);
  obj10.onPress = callback2;
  obj10.trailing = callback2(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowEmail });
  items4[6] = callback2(allowPhone(allowEmail[7]).FormRow, obj10);
  obj.children = items4;
  const children = callback3(View, obj);
  return callback2(allowPhone(allowEmail[11]).ActionSheet, { startExpanded: true, children });
};
