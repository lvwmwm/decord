// Module ID: 11088
// Function ID: 11089
// Name: PremiumGiftCountdownBadge
// Dependencies: [19, 17, 21, 4790, 580, 558, 568, 4786, 2]

// Module 11088 (PremiumGiftCountdownBadge)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import Text_Text from "Text/Text" /* 4786 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4790);
let closure_6 = createStyles.createStyles(() => {
  const obj = { badge: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumGiftCountdownBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ text, icon, style } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.badge) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== text) {
      const formatted = text.toUpperCase();
      cResult[3] = text;
      cResult[4] = formatted;
      let tmp6 = formatted;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== tmp6) {
      const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", children: tmp6 };
      const tmp10 = React4(Text_Text.Text, obj2);
      cResult[5] = tmp6;
      cResult[6] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[6];
    }
    if (cResult[7] === icon) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp8) {
          let tmp11 = cResult[10];
        }
        return tmp11;
      }
    }
    const obj3 = { style: tmp5, children: null };
    const items = [icon, tmp8];
    obj3.children = items;
    const tmp14 = hasOwnProperty(View, obj3);
    cResult[7] = icon;
    cResult[8] = tmp5;
    cResult[9] = tmp8;
    cResult[10] = tmp14;
    tmp11 = tmp14;
  }
  const items1 = [tmp4.badge, style];
  cResult[0] = style;
  cResult[1] = tmp4.badge;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((text) => {
  ({ icon, style } = text);
  const obj = { style: null, children: null };
  const items = [closure_6().badge, style];
  obj.style = items;
  const items1 = [icon, React4(Text_Text.Text, { variant: "text-xs/bold", color: "text-overlay-light", children: text.text.toUpperCase() })];
  obj.children = items1;
  return hasOwnProperty(View, obj);
});
