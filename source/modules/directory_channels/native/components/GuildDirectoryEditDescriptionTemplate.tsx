// Module ID: 10032
// Function ID: 77561
// Name: GuildDirectoryEditDescriptionTemplate
// Dependencies: []
// Exports: default

// Module 10032 (GuildDirectoryEditDescriptionTemplate)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, Keyboard: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ DirectoryEntryCategories: closure_9, getHubCategories: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
let closure_13 = arg1(dependencyMap[7]).createStyles({ container: {} });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionTemplate.tsx");

export default function GuildDirectoryEditDescriptionTemplate(buttonLabel) {
  let directoryChannelId;
  let entry;
  let obj2;
  let tmp11;
  ({ onSubmit: closure_0, entry, directoryChannelId } = buttonLabel);
  const importDefault = directoryChannelId;
  let dependencyMap;
  let closure_3;
  let callback;
  let React;
  let closure_6;
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback2(tmp);
    const _handleSubmit = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_8];
  let stateFromStores = obj.useStateFromStores(items, () => currentCategoryId.getCurrentCategoryId(directoryChannelId));
  let primaryCategoryId;
  if (null != entry) {
    primaryCategoryId = entry.primaryCategoryId;
  }
  if (null != primaryCategoryId) {
    stateFromStores = primaryCategoryId;
  }
  const tmp5 = callback(React.useState(stateFromStores), 2);
  const first = tmp5[0];
  dependencyMap = first;
  closure_3 = tmp5[1];
  let description;
  if (null != entry) {
    description = entry.description;
  }
  let str = "";
  if (null != description) {
    str = description;
  }
  const tmp9 = callback(React.useState(str), 2);
  const first1 = tmp9[0];
  callback = first1;
  const arr = callback2(directoryChannelId);
  [tmp11, closure_5] = callback(React.useState(false), 2);
  const tmp10 = callback(React.useState(false), 2);
  [obj2, closure_6] = callback(React.useState(null), 2);
  obj = { style: tmp.container };
  obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.label = intl.string(arg1(dependencyMap[11]).t.FFFAGt);
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.description = intl2.string(arg1(dependencyMap[11]).t./zbXqm);
  obj.value = first1;
  obj.onChange = tmp9[1];
  const intl3 = arg1(dependencyMap[11]).intl;
  obj.placeholder = intl3.string(arg1(dependencyMap[11]).t.VzuITC);
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
  const items1 = [callback3(arg1(dependencyMap[10]).TextArea, obj), , ];
  const obj1 = {};
  const intl4 = arg1(dependencyMap[11]).intl;
  obj1.title = intl4.string(arg1(dependencyMap[11]).t.Olo8FB);
  obj1.defaultValue = first;
  obj1.onChange = function onChange(arg0) {
    _handleSubmit.dismiss();
    callback2(arg0);
  };
  obj1.hasIcons = false;
  obj1.children = arr.map((label) => callback3(callback(first[13]).TableRadioRow, { label: label.label, value: label.value }, label.value));
  items1[1] = callback3(arg1(dependencyMap[12]).TableRadioGroup, obj1);
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
  items1[2] = callback3(arg1(dependencyMap[14]).Button, obj2);
  obj.children = items1;
  return closure_12(closure_6, obj);
};
