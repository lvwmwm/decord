// Module ID: 16166
// Function ID: 16167
// Name: MenuItem
// Dependencies: [19, 21, 5170, 16160, 5792, 7403, 7405, 2]
// Exports: MenuItem

// Module 16166 (MenuItem)
import Fragment from "Fragment" /* 21 */;
import IconDefault from "Icon" /* 5792 */;
import FormRowDefault from "FormRow" /* 7403 */;
import Menu from "Menu" /* 16160 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let tmp8;
const FormLabelDefault = tmp8(7405);
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ formIcon: { width: 20, height: 20 }, formLabel: { fontSize: 14, fontWeight: "500" } });
const result = size.fileFinishedImporting("design/components/Menu/native/MenuItem.tsx");

export function MenuItem(action) {
  let IconComponent;
  let disabled;
  let iconSource;
  let label;
  let showIconFirst;
  let style;
  let tmp3;
  ({ label, IconComponent, iconSource, showIconFirst } = action);
  if (showIconFirst === undefined) {
    showIconFirst = false;
  }
  ({ disabled, style } = action);
  if (disabled === undefined) {
    disabled = false;
  }
  action = action.action;
  const ref = action.ref;
  const tmp = closure_5();
  const menuClose = react.useContext(Menu.MenuContext).menuClose;
  if (null != IconComponent) {
    tmp3 = <IconComponent size="sm" />;
  } else {
    tmp3 = null;
    if (null != iconSource) {
      tmp3 = jsx(IconDefault, { source: iconSource, style: tmp.formIcon });
    }
  }
  let tmp10 = null;
  FormRowDefault;
  if (null != iconSource) {
    tmp10 = null;
    if (showIconFirst) {
      tmp10 = tmp3;
    }
  }
  let tmp11 = null;
  if (null != iconSource) {
    tmp11 = null;
    if (!showIconFirst) {
      tmp11 = tmp3;
    }
  }
  let tmp7Result = label;
  if (typeof label === "string") {
    const obj3 = { text: label, style: tmp.formLabel };
    tmp7Result = tmp7(FormLabelDefault, obj3);
  }
  return <tmp9 ref={ref} style={style} accessibilityRole="menuitem" disabled={disabled} leading={tmp10} trailing={tmp11} label={tmp7Result} onPress={function onPress() {
    action();
    menuClose();
  }} />;
}
