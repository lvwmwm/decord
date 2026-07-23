// Module ID: 10047
// Function ID: 77643
// Name: GuildDirectoryEditDescriptionTemplate
// Dependencies: [5, 57, 31, 27, 10042, 10035, 33, 4130, 566, 4030, 7504, 1212, 7519, 7518, 4543, 2]
// Exports: default

// Module 10047 (GuildDirectoryEditDescriptionTemplate)
import closure_3 from "DirectoryEntryTypes";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import DirectoryEntryTypes from "DirectoryEntryTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ View: closure_6, Keyboard: closure_7 } = get_ActivityIndicator);
({ DirectoryEntryCategories: closure_9, getHubCategories: closure_10 } = DirectoryEntryTypes);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ container: { marginHorizontal: 16, gap: 24 } });
const result = require("result").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionTemplate.tsx");

export default function GuildDirectoryEditDescriptionTemplate(buttonLabel) {
  let c5;
  let c6;
  let directoryChannelId;
  let entry;
  let obj2;
  let require;
  let tmp11;
  ({ onSubmit: require, entry, directoryChannelId } = buttonLabel);
  let first;
  let closure_3;
  let first1;
  let React;
  c6 = undefined;
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  const tmp = callback3();
  let obj = require(first[8]);
  const items = [_isNativeReflectConstruct];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_8.getCurrentCategoryId(directoryChannelId));
  let primaryCategoryId;
  if (null != entry) {
    primaryCategoryId = entry.primaryCategoryId;
  }
  if (null != primaryCategoryId) {
    stateFromStores = primaryCategoryId;
  }
  const tmp5 = first1(React.useState(stateFromStores), 2);
  first = tmp5[0];
  closure_3 = tmp5[1];
  let description;
  if (null != entry) {
    description = entry.description;
  }
  let str = "";
  if (null != description) {
    str = description;
  }
  const tmp9 = first1(React.useState(str), 2);
  first1 = tmp9[0];
  const arr = callback(directoryChannelId);
  [tmp11, c5] = first1(React.useState(false), 2);
  const tmp10 = first1(React.useState(false), 2);
  [obj2, c6] = first1(React.useState(null), 2);
  obj = { style: tmp.container };
  obj = {};
  const intl = require(first[11]).intl;
  obj.label = intl.string(require(first[11]).t.FFFAGt);
  const intl2 = require(first[11]).intl;
  obj.description = intl2.string(require(first[11]).t["/zbXqm"]);
  obj.value = first1;
  obj.onChange = tmp9[1];
  const intl3 = require(first[11]).intl;
  obj.placeholder = intl3.string(require(first[11]).t.VzuITC);
  obj.maxLength = 200;
  let str2 = "default";
  if (null != obj1) {
    str2 = "error";
  }
  obj.status = str2;
  let anyErrorMessage;
  if (null != obj1) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  obj.errorMessage = anyErrorMessage;
  obj.submitBehavior = "blurAndSubmit";
  obj.returnKeyType = "done";
  const items1 = [callback2(require(first[10]).TextArea, obj), , ];
  obj1 = {};
  const intl4 = require(first[11]).intl;
  obj1.title = intl4.string(require(first[11]).t.Olo8FB);
  obj1.defaultValue = first;
  obj1.onChange = function onChange(arg0) {
    _handleSubmit.dismiss();
    callback(arg0);
  };
  obj1.hasIcons = false;
  obj1.children = arr.map((label) => outer1_11(outer1_0(first[13]).TableRadioRow, { label: label.label, value: label.value }, label.value));
  items1[1] = callback2(require(first[12]).TableRadioGroup, obj1);
  obj2 = {};
  let tmp18 = 0 === first1.length;
  if (!tmp18) {
    tmp18 = first === constants.ALL;
  }
  obj2.disabled = tmp18;
  obj2.onPress = function handleSubmit() {
    return _handleSubmit(...arguments);
  };
  obj2.loading = tmp11;
  obj2.text = buttonLabel.buttonLabel;
  obj2.size = "lg";
  items1[2] = callback2(require(first[14]).Button, obj2);
  obj.children = items1;
  return closure_12(c6, obj);
};
