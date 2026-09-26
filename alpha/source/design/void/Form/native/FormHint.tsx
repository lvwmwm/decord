// Module ID: 8060
// Function ID: 8061
// Name: FormHint
// Dependencies: [19, 17, 21, 4836, 576, 5998, 4832, 1177, 2]
// Exports: default

// Module 8060 (FormHint)
import nativeDefault from "native" /* 576 */;
import RedesignCompat from "RedesignCompat" /* 5998 */;
import noop from "module_19" /* 19 */;

require = fn;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { formHintText: { fontSize: 14, marginBottom: 0, color: nativeDefault.colors.TEXT_MUTED }, redesignHorizontalPadding: { paddingHorizontal: 12 }, horizonatalPadding: { paddingHorizontal: 16 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default function FormHint(inset) {
  let flag = inset.inset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, children } = inset);
  const tmp = closure_4();
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    let redesignHorizontalPadding = !flag;
    if (!flag) {
      redesignHorizontalPadding = tmp.redesignHorizontalPadding;
    }
    const obj2 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
    const items = [redesignHorizontalPadding, style];
    obj2.style = items;
    obj2.children = children;
    let tmp4Result = tmp4(tmp2(4832).Text, obj2);
  } else {
    const items1 = [tmp.formHintText, , ];
    let horizonatalPadding = !flag;
    if (!flag) {
      horizonatalPadding = tmp.horizonatalPadding;
    }
    const obj = { style: null, children: null };
    items1[1] = horizonatalPadding;
    items1[2] = style;
    obj.style = items1;
    obj.children = children;
    tmp4Result = tmp4(tmp2(1177).LegacyText, obj);
  }
  return tmp4Result;
};
