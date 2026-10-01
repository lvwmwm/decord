// Module ID: 13007
// Function ID: 13008
// Name: Header
// Dependencies: [19, 17, 21, 4836, 4767, 5899, 1115, 4685, 13008, 13009, 4832, 2]
// Exports: default

// Module 13007 (Header)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import FastImageDefault from "FastImage" /* 5899 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { flexDirection: "column", alignItems: "center" }, headerText: { marginTop: 16, marginBottom: 24 } });
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  let intl;
  let intl2;
  let items;
  let items1;
  let tmp2Result;
  style = style.style;
  const tmp = closure_6();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  const obj2 = { accessible: true, accessibilityLabel: intl.string(intl3.t.lpNrPu), accessibilityRole: "header", source: tmp2Result };
  const tmp4 = useThemeDefault();
  const tmp8 = FastImageDefault;
  intl = intl3.intl;
  const obj3 = shared;
  const tmp5 = hasOwnProperty;
  const tmp6 = View;
  if (obj3.isThemeDark(tmp4)) {
    tmp2Result = tmp2(13008);
  } else {
    tmp2Result = tmp2(13009);
  }
  items1 = [React3(tmp8, obj2), ];
  const obj4 = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl2.string(intl3.t.SD5MJW) };
  const Text = tmp9(4832).Text;
  intl2 = tmp9(1115).intl;
  items1[1] = React3(Text, obj4);
  return tmp5(tmp6, obj);
};
