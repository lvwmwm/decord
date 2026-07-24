// Module ID: 13096
// Function ID: 101029
// Name: MenuItem
// Dependencies: [31, 33, 4130, 13094, 4545, 5158, 5177, 2]

// Module 13096 (MenuItem)
import importAllResult from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ formIcon: { width: 20, height: 20 }, formLabel: { fontSize: 14, fontWeight: "500" } });
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
  action = action.action;
  let menuClose;
  const tmp = callback();
  menuClose = importAllResult.useContext(action(13094).MenuContext).menuClose;
  if (null != IconComponent) {
    let obj = { size: "sm" };
    let tmp2 = <IconComponent size="sm" />;
  } else {
    tmp2 = null;
    if (null != iconSource) {
      obj = { source: iconSource, style: tmp.formIcon };
      tmp2 = jsx(menuClose(4545), { source: iconSource, style: tmp.formIcon });
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
    tmp11 = jsx(menuClose(5177), { text: label, style: tmp.formLabel });
  }
  obj.label = tmp11;
  obj.onPress = function onPress() {
    action();
    menuClose();
  };
  return jsx(menuClose(5158), { ref, style, accessibilityRole: "menuitem", disabled });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Menu/native/MenuItem.tsx");

export const MenuItem = forwardRefResult;
