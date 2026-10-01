// Module ID: 16492
// Function ID: 16493
// Name: PollBadge
// Dependencies: [19, 17, 21, 4836, 576, 1177, 16493, 4832, 1115, 2]
// Exports: default

// Module 16492 (PollBadge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 16493 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, text: { marginLeft: 4, textTransform: "uppercase" } };
obj2 = { borderRadius: nativeDefault.radii.round, paddingHorizontal: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, color: nativeDefault.colors.TEXT_MUTED, flexDirection: "row", alignItems: "center" };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default function PollBadge(style) {
  let intl;
  let items;
  let items1;
  style = style.style;
  const tmp = closure_6();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  const obj2 = { size: native.IconSizes.EXTRA_SMALL_10, source: AssetRegistryDefault };
  const Icon = native.Icon;
  items1 = [React3(Icon, obj2), ];
  const obj3 = { style: tmp.text, variant: "text-xs/semibold", children: intl.string(intl2.t.RgIi2B) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
};
