// Module ID: 9774
// Function ID: 9775
// Name: PremiumExpressionPickerSearchUpsell
// Dependencies: [19, 17, 21, 576, 4836, 5435, 4832, 2]
// Exports: default

// Module 9774 (PremiumExpressionPickerSearchUpsell)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const sum = 56 + nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { container: obj2, upsell: obj3, content: { flex: 0.8, flexDirection: "row" } };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { height: 56, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumExpressionPickerSearchUpsell.tsx");

export default function PremiumExpressionPickerSearchUpsell(arg0) {
  let PressableOpacity;
  let body;
  let ctaText;
  let icon;
  let items;
  let items1;
  let loading;
  let obj2;
  let onPress;
  ({ body, ctaText, icon, loading, onPress } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, collapsable: false, children: React3(PressableOpacity, obj2) };
  const obj3 = { style: tmp.content, children: items };
  items = [icon, ];
  obj2 = { style: tmp.upsell, accessibilityRole: "button", disabled: loading, onPress, children: items1 };
  PressableOpacity = Pressables.PressableOpacity;
  items[1] = _false(Text_Text.Text, { lineClamp: 2, variant: "text-sm/medium", color: "interactive-text-active", children: body });
  items1 = [React3(View, obj3), _false(Text_Text.Text, { variant: "text-sm/medium", color: "text-link", children: ctaText })];
  return _false(View, obj);
};
export const PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT = sum;
