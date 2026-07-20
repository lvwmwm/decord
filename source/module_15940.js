// Module ID: 15940
// Function ID: 122280
// Dependencies: []

// Module 15940
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo((type) => {
  let executeStateUpdate;
  let label;
  let maxLength;
  let placeholder;
  let required;
  let style;
  let value;
  type = type.type;
  const arg1 = type;
  ({ style, label, value } = type);
  const dependencyMap = value;
  ({ placeholder, required, maxLength } = type);
  let obj = arg1(dependencyMap[3]);
  let tmp;
  if (null != value) {
    obj = { type, value };
    tmp = obj;
  }
  const componentState = obj.useComponentState(type, tmp);
  ({ state: closure_2, executeStateUpdate } = componentState);
  const error = componentState.error;
  let obj2 = arg1(dependencyMap[4]);
  const isFirstTextInputInModal = obj2.useIsFirstTextInputInModal(type.id);
  obj = { placeholder, maxLength };
  let str = "default";
  const state = importAllResult.useState(() => {
    let type;
    if (null != closure_2) {
      type = closure_2.type;
    }
    if (type === type) {
      const value = closure_2.value;
    }
    return value;
  });
  if (null != error) {
    str = "error";
  }
  obj.status = str;
  obj.defaultValue = callback(state, 1)[0];
  const items = [type, executeStateUpdate];
  obj.onChange = executeStateUpdate.useCallback((value) => executeStateUpdate({ type, value }), items);
  obj.autoFocus = isFirstTextInputInModal;
  obj.isClearable = true;
  if (arg1(dependencyMap[5]).TextInputComponentStyle.SMALL === style) {
    const obj1 = {};
    const merged = Object.assign(obj);
    let tmp7 = jsx(arg1(dependencyMap[6]).TextField, obj1);
  } else if (arg1(dependencyMap[5]).TextInputComponentStyle.PARAGRAPH === style) {
    obj2 = {};
    const merged1 = Object.assign(obj);
    tmp7 = jsx(arg1(dependencyMap[7]).TextAreaField, obj2);
  }
  let tmp20 = tmp7;
  if (null != label) {
    const obj3 = { label, required, errorMessage: error, children: tmp7 };
    tmp20 = jsx(arg1(dependencyMap[8]).Input, obj3);
  }
  return tmp20;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/interaction_components/native/actions/TextInputActionComponent.tsx");

export default memoResult;
