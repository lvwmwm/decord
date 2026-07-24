// Module ID: 7654
// Function ID: 60855
// Name: context
// Dependencies: [57, 31, 653, 33, 5164, 5501, 7653, 2]
// Exports: TableRadioGroup

// Module 7654 (context)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const context = importAllResult.createContext({ selectedValue: null, onSelect: require("ME").NOOP });
const result = require("ME").fileFinishedImporting("design/components/TableRow/native/TableRadioGroup.native.tsx");

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
  let callback;
  let importAllResult;
  let jsx;
  callback = undefined;
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
      if (!outer1_1) {
        outer1_2(arg0);
      }
      if (null != outer1_0) {
        outer1_0(arg0);
      }
    },
    getValue() {
      return outer1_3;
    }
  }), items);
  jsx = importAllResult.useContext(onChange(5164).RedesignCompatContext);
  const items1 = [undefined !== value, onChange];
  callback = importAllResult.useCallback((arg0) => {
    if (!closure_1) {
      callback(arg0);
    }
    if (null != onChange) {
      onChange(arg0);
    }
  }, items1);
  const items2 = [tmp7, callback];
  let obj = { value: importAllResult.useMemo(() => ({ selectedValue: c3, onSelect: callback }), items2) };
  obj = { accessibilityRole: "radiogroup", accessibilityLabel, title, description, helperText, hasIcons };
  const Children = importAllResult.Children;
  obj.children = Children.map(children, (type) => {
    if (!_undefined.isValidElement(type)) {
      let tmp4 = null;
      return tmp4;
    }
    tmp4 = type;
  });
  obj.children = jsx(onChange(5501).TableRowGroup, { accessibilityRole: "radiogroup", accessibilityLabel, title, description, helperText, hasIcons });
  return <callback.Provider accessibilityRole="radiogroup" accessibilityLabel={accessibilityLabel} title={title} description={description} helperText={helperText} hasIcons={hasIcons} />;
};
