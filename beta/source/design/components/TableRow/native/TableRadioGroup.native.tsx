// Module ID: 5997
// Function ID: 5998
// Name: TableRadioGroup
// Dependencies: [32, 19, 1074, 21, 5998, 5999, 6000, 2]
// Exports: TableRadioGroup

// Module 5997 (TableRadioGroup)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const NOOP = Constants.NOOP;
let jsx = Fragment.jsx;
const context = react.createContext({ selectedValue: null, onSelect: NOOP });
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRadioGroup.native.tsx");

export const TableRadioGroupContext = context;
export const TableRadioGroup = function TableRadioGroup(arg0) {
  let Children;
  let _undefined;
  let accessibilityLabel;
  let c2;
  let children;
  let closure_1;
  let closure_4;
  let defaultValue;
  let description;
  let groupRef;
  let hasIcons;
  let helperText;
  let onChange;
  let selectedValue;
  let title;
  let tmp4;
  let value;
  ({ value, defaultValue, onChange } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  jsx = undefined;
  let onSelect;
  let tmp = undefined !== value;
  dependencyMap = tmp;
  let tmp2 = null;
  ({ children, title, description, helperText, hasIcons, groupRef, accessibilityLabel } = arg0);
  const useState = react.useState;
  if (!tmp) {
    if (defaultValue == null) {
      defaultValue = null;
    }
    tmp2 = defaultValue;
  }
  [tmp4, c2] = _slicedToArray(useState(tmp2), 2);
  const tmp3 = _slicedToArray(useState(tmp2), 2);
  if (tmp) {
    tmp4 = value;
  }
  if (tmp4 == null) {
    tmp4 = null;
  }
  react = tmp4;
  const items = [tmp, onChange, tmp4];
  const imperativeHandle = obj.useImperativeHandle(groupRef, () => ({
    setValue(arg0) {
      const tmp = closure_1_1;
      if (!tmp) {
        _undefined(arg0);
      }
      if (onChange != null) {
        tmp4(arg0);
      }
    },
    getValue() {
      return selectedValue;
    }
  }), items);
  jsx = obj.useContext(onChange(5998).RedesignCompatContext);
  const items1 = [tmp, onChange];
  onSelect = obj.useCallback((arg0) => {
    const tmp = closure_1;
    if (!tmp) {
      _undefined(arg0);
    }
    if (onChange != null) {
      tmp4(arg0);
    }
  }, items1);
  const items2 = [tmp4, onSelect];
  const Provider = onSelect.Provider;
  ({
    accessibilityRole: "radiogroup",
    accessibilityLabel,
    title,
    description,
    helperText,
    hasIcons,
    children: Children.map(children, (type) => {
      if (!react.isValidElement(type)) {
        let tmp4 = null;
        return tmp4;
      }
      tmp4 = type;
    })
  });
  Children = obj.Children;
  const TableRowGroup = onChange(5999).TableRowGroup;
  return <Provider value={react.useMemo(() => ({ selectedValue, onSelect }), items2)}>{null}</Provider>;
};
