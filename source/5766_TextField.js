// Module ID: 5766
// Function ID: 49342
// Name: TextField
// Dependencies: [131072, 2893348864, 2902458373, 2919235589, 318767109, 33554438, 1929379840]

// Module 5766 (TextField)
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((onClear) => {
  let innerRef;
  let inputStyle;
  let leading;
  let state;
  let trailing;
  let obj = arg1(dependencyMap[2]);
  const textField = obj.useTextField(onClear, arg1);
  ({ innerRef, state } = textField);
  const inputClearButtonConfig = arg1(dependencyMap[3]).useInputClearButtonConfig(onClear, state);
  let tmp3;
  if (null != inputClearButtonConfig) {
    obj = {};
    ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
    tmp3 = obj;
  }
  const obj2 = arg1(dependencyMap[3]);
  const inputAttachments = arg1(dependencyMap[4]).useInputAttachments(onClear, tmp3);
  ({ leading, trailing, inputStyle } = inputAttachments);
  obj = {};
  const merged = Object.assign(textField.inputProps);
  obj["ref"] = innerRef;
  obj["leading"] = leading;
  obj["trailing"] = trailing;
  obj["inputStyle"] = inputStyle;
  return jsx(arg1(dependencyMap[5]).BaseTextField, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = forwardRefResult;
