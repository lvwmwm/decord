// Module ID: 9210
// Function ID: 72085
// Name: SplitTextField
// Dependencies: []

// Module 9210 (SplitTextField)
const importAllResult = importAll(dependencyMap[0]);
({ Pressable: closure_2, View: closure_3 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
const forwardRefResult = importAllResult.forwardRef((size) => {
  let innerRef;
  let inputStyle;
  let state;
  let trailing;
  let obj = arg1(dependencyMap[3]);
  obj = { size: size.size, isRound: size.isRound };
  const inputStyles = obj.useInputStyles(obj);
  let obj2 = arg1(dependencyMap[4]);
  const textField = obj2.useTextField(size, arg1);
  ({ innerRef, state } = textField);
  let obj3 = arg1(dependencyMap[5]);
  const inputClearButtonConfig = obj3.useInputClearButtonConfig(size, state);
  let tmp4;
  if (null != inputClearButtonConfig) {
    obj = {};
    ({ content: obj5.trailing, pressableProps: obj5.trailingPressableProps } = inputClearButtonConfig);
    tmp4 = obj;
  }
  const inputAttachments = arg1(dependencyMap[6]).useInputAttachments(size, tmp4);
  let tmp6 = null;
  ({ trailing, inputStyle } = inputAttachments);
  if (null != size.leadingText) {
    tmp6 = null;
    if (size.leadingText.length > 0) {
      const obj1 = { style: inputStyles.splitBorder };
      obj2 = {
        style(pressed) {
              let tmp;
              if (pressed.pressed) {
                const obj = { opacity: 0.2 };
                tmp = obj;
              }
              const items = [tmp];
              return items;
            }
      };
      const merged = Object.assign(size.leadingPressableProps);
      obj2["children"] = arg1(dependencyMap[6]).renderInputAttachment(undefined, size.leadingText, inputStyles.text);
      obj1.children = <closure_2 {...obj2} />;
      tmp6 = <closure_3 {...obj1} />;
      const obj9 = arg1(dependencyMap[6]);
    }
  }
  obj3 = {};
  const merged1 = Object.assign(textField.inputProps);
  obj3["ref"] = innerRef;
  obj3["leading"] = tmp6;
  obj3["trailing"] = trailing;
  obj3["inputStyle"] = inputStyle;
  return jsx(arg1(dependencyMap[7]).BaseTextField, obj3);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export const SplitTextField = forwardRefResult;
