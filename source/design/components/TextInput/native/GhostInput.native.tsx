// Module ID: 12959
// Function ID: 98612
// Name: GhostInput
// Dependencies: []
// Exports: GhostInput

// Module 12959 (GhostInput)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = arg1(dependencyMap[2]).createStyles(() => {
  let str = arg0;
  let str2 = arg1;
  if (arg0 === undefined) {
    str = "lg";
  }
  if (str2 === undefined) {
    str2 = "default";
  }
  let obj = {};
  obj = {};
  obj = { md: arg1(dependencyMap[3]).TextStyleSheet.text-md/semibold, lg: arg1(dependencyMap[3]).TextStyleSheet.text-lg/semibold };
  const merged = Object.assign(obj[str]);
  if ("error" === str2) {
    let TEXT_DEFAULT = importDefault(dependencyMap[4]).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_DEFAULT = importDefault(dependencyMap[4]).colors.TEXT_DEFAULT;
  }
  obj["color"] = TEXT_DEFAULT;
  obj["minWidth"] = 48;
  obj.input = obj;
  obj.centeredContainerStyle = { alignItems: "center" };
  return obj;
});
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = function GhostInput(size) {
  let obj = arg1(dependencyMap[5]);
  obj = { size: size.size };
  const inputStyles = obj.useInputStyles(obj);
  const tmp2 = callback(size.size, size.status);
  const isCentered = size.isCentered;
  const autoFocus = size.autoFocus;
  const textField = arg1(dependencyMap[6]).useTextField(size, undefined);
  obj = {};
  const merged = Object.assign(size);
  const items = [size.containerStyle, ];
  let prop;
  if (tmp3) {
    prop = tmp2.centeredContainerStyle;
  }
  items[1] = prop;
  obj["containerStyle"] = items;
  const obj1 = {};
  const merged1 = Object.assign(textField.inputProps);
  obj1["ref"] = textField.innerRef;
  const items1 = [tmp2.input];
  obj1["style"] = items1;
  obj1["placeholderTextColor"] = inputStyles.placeholderText.color;
  obj1["spellCheck"] = false;
  obj1["autoFocus"] = undefined === autoFocus || autoFocus;
  obj["children"] = jsx(arg1(dependencyMap[8]).NativeTextInput, obj1);
  return jsx(arg1(dependencyMap[7]).Input, obj);
};
