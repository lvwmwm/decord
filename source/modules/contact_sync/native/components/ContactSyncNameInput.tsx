// Module ID: 11753
// Function ID: 91265
// Name: ContactSyncNameInput
// Dependencies: [57, 31, 27, 33, 4130, 689, 5160, 1212, 4126, 1273, 4543, 11750, 2]
// Exports: default

// Module 11753 (ContactSyncNameInput)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 }, content: { flex: 1, padding: 16, paddingBottom: 0 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center", marginBottom: 16 } };
_createForOfIteratorHelperLoose = { width: "100%", marginTop: 8, marginBottom: 12, padding: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.input = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.formSubtitle = { lineHeight: 16 };
_createForOfIteratorHelperLoose.button = { flexGrow: 0, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.error = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { flexGrow: 0, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameInput.tsx");

export default function ContactSyncNameInput(prefilledFromContactBook) {
  let error;
  let initialName;
  let loading;
  let onRemoveName;
  let require;
  let flag = prefilledFromContactBook.prefilledFromContactBook;
  ({ loading, error, initialName } = prefilledFromContactBook);
  if (flag === undefined) {
    flag = false;
  }
  ({ onNext: require, onRemoveName } = prefilledFromContactBook);
  let first;
  let tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(initialName), 2);
  first = tmp2[0];
  const intl = require(first[7]).intl;
  const string = intl.string;
  const t = require(first[7]).t;
  if (null != onRemoveName) {
    let stringResult = string(t.i4jeWR);
  } else {
    stringResult = string(t.PDTjLN);
  }
  let obj = { style: items };
  items = [tmp.content, { paddingBottom: onRemoveName(first[6])({ includeKeyboardHeight: true }).insets.bottom }];
  obj = { style: tmp.flex };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl2 = require(first[7]).intl;
  const string2 = intl2.string;
  const t2 = require(first[7]).t;
  if (null != onRemoveName) {
    let string2Result = string2(t2["/OywGQ"]);
  } else {
    string2Result = string2(t2["sO+NI5"]);
  }
  obj.children = string2Result;
  const items1 = [callback2(require(first[8]).Text, obj), , , , ];
  const obj1 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default" };
  const intl3 = require(first[7]).intl;
  const string3 = intl3.string;
  const t3 = require(first[7]).t;
  if (null != onRemoveName) {
    let string3Result = string3(t3["xCHh/t"]);
  } else {
    string3Result = string3(t3.xI496M);
  }
  obj1.children = string3Result;
  items1[1] = callback2(require(first[8]).Text, obj1);
  const obj2 = { variant: "eyebrow", color: "interactive-text-default" };
  const intl4 = require(first[7]).intl;
  obj2.children = intl4.string(require(first[7]).t["42/D2U"]);
  items1[2] = callback2(require(first[8]).Text, obj2);
  const obj3 = { value: first, onChangeText: tmp2[1], style: tmp.input, autoFocus: true, showBorder: false, showTopContainer: false, clearButtonVisibility: require(first[9]).ClearButtonVisibility.WITH_CONTENT, autoCorrect: true, autoComplete: "name", textContentType: "name" };
  items1[3] = callback2(require(first[9]).InputView, obj3);
  let tmp12 = null;
  if (flag) {
    const obj4 = { style: tmp.formSubtitle, variant: "text-xs/medium", color: "text-default" };
    const intl5 = require(first[7]).intl;
    obj4.children = intl5.string(require(first[7]).t.bCQt9K);
    tmp12 = callback2(require(first[8]).Text, obj4);
  }
  items1[4] = tmp12;
  obj.children = items1;
  const items2 = [closure_7(View, obj), , , ];
  const obj5 = { variant: "primary" };
  let str = "lg";
  if (null != onRemoveName) {
    str = "md";
  }
  obj5.size = str;
  obj5.text = stringResult;
  obj5.onPress = function onPress() {
    return callback(first);
  };
  obj5.loading = loading;
  obj5.disabled = "" === first;
  items2[1] = callback2(require(first[10]).Button, obj5);
  let tmp17 = null;
  if (null != onRemoveName) {
    const obj6 = { style: tmp.button };
    const obj7 = { variant: "secondary", size: "md" };
    const intl6 = require(first[7]).intl;
    obj7.text = intl6.string(require(first[7]).t["91RssO"]);
    obj7.onPress = function onPress() {
      let tmp;
      if (null != onRemoveName) {
        tmp = onRemoveName();
      }
      return tmp;
    };
    obj6.children = callback2(require(first[10]).Button, obj7);
    tmp17 = callback2(View, obj6);
  }
  items2[2] = tmp17;
  items2[3] = callback2(onRemoveName(first[11]), { style: tmp.error, error });
  obj.children = items2;
  return closure_7(View, obj);
};
