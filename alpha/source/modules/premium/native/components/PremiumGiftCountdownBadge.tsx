// Module ID: 10627
// Function ID: 10628
// Name: PremiumGiftCountdownBadge
// Dependencies: [19, 17, 21, 5014, 575, 1375, 5624, 2]
// Exports: default

// Module 10627 (PremiumGiftCountdownBadge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles(() => {
  let PX_4;
  let obj4;
  const obj = { badge: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, text: obj4 };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
  const obj3 = PlatformUtils;
  const isAndroidResult = obj3.isAndroid();
  const space = nativeDefault.space;
  obj4 = { lineHeight: isAndroidResult ? space.PX_12 : space.PX_16, paddingVertical: PX_4 };
  PX_4 = undefined;
  const tmp3Result = PlatformUtils;
  if (tmp3Result.isAndroid()) {
    PX_4 = nativeDefault.space.PX_4;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftCountdownBadge.tsx");

export default function PremiumGiftCountdownBadge(text) {
  let icon;
  let items;
  let items1;
  let style;
  const str = text.text;
  ({ icon, style } = text);
  const tmp = closure_6();
  const obj = { style: items, children: items1 };
  items = [tmp.badge, style];
  items1 = [icon, ];
  const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.text, children: str.toUpperCase() };
  const Text = Text_Text.Text;
  items1[1] = React3(Text, obj2);
  return hasOwnProperty(View, obj);
};
