// Module ID: 12914
// Function ID: 98472
// Name: MenuItem
// Dependencies: []

// Module 12914 (MenuItem)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = arg1(dependencyMap[2]).createStyles({ formIcon: { aze: false, azj: false }, formLabel: {} });
const obj2 = arg1(dependencyMap[2]);
const forwardRefResult = importAllResult.forwardRef((action, ref) => {
  let IconComponent;
  let disabled;
  let iconSource;
  let label;
  let showIconFirst;
  let style;
  ({ label, IconComponent, iconSource, showIconFirst } = action);
  if (showIconFirst === undefined) {
    showIconFirst = false;
  }
  ({ disabled, style } = action);
  if (disabled === undefined) {
    disabled = false;
  }
  ref = action.action;
  let importDefault;
  const tmp = callback();
  importDefault = importAllResult.useContext(ref(dependencyMap[3]).MenuContext).menuClose;
  if (null != IconComponent) {
    let obj = { size: "sm" };
    let tmp2 = <IconComponent {...obj} />;
  } else {
    tmp2 = null;
    if (null != iconSource) {
      obj = { source: iconSource, style: tmp.formIcon };
      tmp2 = jsx(importDefault(dependencyMap[4]), obj);
    }
  }
  obj = { ref, style, accessibilityRole: "menuitem", disabled };
  let tmp9 = null;
  if (null != iconSource) {
    tmp9 = null;
    if (showIconFirst) {
      tmp9 = tmp2;
    }
  }
  obj.leading = tmp9;
  let tmp10 = null;
  if (null != iconSource) {
    tmp10 = null;
    if (!showIconFirst) {
      tmp10 = tmp2;
    }
  }
  obj.trailing = tmp10;
  let tmp11 = label;
  if ("string" === typeof label) {
    const obj1 = { text: label, style: tmp.formLabel };
    tmp11 = jsx(importDefault(dependencyMap[6]), obj1);
  }
  obj.label = tmp11;
  obj.onPress = function onPress() {
    action();
    menuClose();
  };
  return jsx(importDefault(dependencyMap[5]), obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Menu/native/MenuItem.tsx");

export const MenuItem = forwardRefResult;
