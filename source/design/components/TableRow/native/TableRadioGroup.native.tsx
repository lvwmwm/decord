// Module ID: 7514
// Function ID: 60186
// Name: context
// Dependencies: []
// Exports: TableRadioGroup

// Module 7514 (context)
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[3]).jsx;
const context = importAllResult.createContext({ selectedValue: null, onSelect: arg1(dependencyMap[2]).NOOP });
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/TableRow/native/TableRadioGroup.native.tsx");

export const TableRadioGroupContext = context;
export const TableRadioGroup = function TableRadioGroup(arg0) {
  let accessibilityLabel;
  let children;
  let defaultValue;
  let description;
  let groupRef;
  let hasIcons;
  let helperText;
  let onChange;
  let title;
  let value;
  ({ value, defaultValue, onChange } = arg0);
  const arg1 = onChange;
  let callback;
  let importAllResult;
  let jsx;
  let context;
  const dependencyMap = tmp;
  let tmp3 = null;
  ({ children, title, description, helperText, hasIcons, groupRef, accessibilityLabel } = arg0);
  if (undefined === value) {
    let tmp4 = null;
    if (null != defaultValue) {
      tmp4 = defaultValue;
    }
    tmp3 = tmp4;
  }
  const tmp5 = callback(importAllResult.useState(tmp3), 2);
  let first = tmp5[0];
  callback = tmp5[1];
  if (undefined !== value) {
    first = value;
  }
  let tmp7 = null;
  if (null != first) {
    tmp7 = first;
  }
  importAllResult = tmp7;
  const items = [undefined !== value, onChange, tmp7];
  const imperativeHandle = importAllResult.useImperativeHandle(groupRef, () => ({
    setValue(arg0) {
      if (!closure_1) {
        callback2(arg0);
      }
      if (null != callback) {
        callback(arg0);
      }
    },
    getValue() {
      return closure_3;
    }
  }), items);
  jsx = importAllResult.useContext(arg1(dependencyMap[4]).RedesignCompatContext);
  const items1 = [undefined !== value, onChange];
  callback = importAllResult.useCallback((arg0) => {
    if (!tmp) {
      callback(arg0);
      const tmp = callback;
    }
    if (null != onChange) {
      onChange(arg0);
    }
  }, items1);
  context = callback;
  const items2 = [tmp7, callback];
  let obj = { value: importAllResult.useMemo(() => ({ selectedValue: tmp7, onSelect: callback }), items2) };
  obj = { accessibilityRole: "radiogroup", accessibilityLabel, title, description, helperText, hasIcons };
  const Children = importAllResult.Children;
  obj.children = Children.map(children, (type) => {
    if (!tmp7.isValidElement(type)) {
      let tmp4 = null;
      return tmp4;
    }
    tmp4 = type;
  });
  obj.children = jsx(arg1(dependencyMap[5]).TableRowGroup, obj);
  return <context.Provider {...obj} />;
};
