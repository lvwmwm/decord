// Module ID: 6569
// Function ID: 6570
// Name: FormIcon
// Dependencies: [19, 21, 4836, 1177, 2]
// Exports: default

// Module 6569 (FormIcon)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1177 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ icon: { opacity: 0.6 } });
const result = size.fileFinishedImporting("design/void/Form/native/FormIcon.tsx");

export default function FormIcon(color) {
  let style;
  let themedColor;
  let tmp9;
  ({ style, themedColor } = color);
  color = color.color;
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0, themedColor: 0 }));
  const tmp2 = closure_3();
  if (null != themedColor) {
    const items = [tmp2.icon, style];
    const ThemedIcon = native.ThemedIcon;
    const merged1 = Object.assign(merged);
    tmp9 = <ThemedIcon style={items} themedColor={themedColor} />;
  } else {
    const items1 = [tmp2.icon, style];
    const Icon = native.Icon;
    const merged2 = Object.assign(merged);
    tmp9 = <Icon style={items1} color={color} />;
  }
  return tmp9;
};
