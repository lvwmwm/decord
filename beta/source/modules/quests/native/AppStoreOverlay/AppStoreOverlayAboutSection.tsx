// Module ID: 10734
// Function ID: 10735
// Name: AppStoreOverlayAboutSection
// Dependencies: [32, 19, 17, 21, 576, 4836, 1115, 4832, 2]
// Exports: default

// Module 10734 (AppStoreOverlayAboutSection)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const rect = { top: nativeDefault.space.PX_12, bottom: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
let obj = { aboutSection: obj2 };
obj2 = { borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default function AppStoreOverlayAboutSection(onSeeMorePress) {
  let c1;
  let closure_3;
  let first;
  let intl2;
  let items2;
  let obj4;
  let obj5;
  let tmp3;
  onSeeMorePress = onSeeMorePress.onSeeMorePress;
  c1 = undefined;
  first = undefined;
  closure_3 = undefined;
  const description = onSeeMorePress.description;
  let tmp = closure_9();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c1] = tmp2;
  [first, closure_3] = react.useState(null);
  const items = [first];
  const items1 = [onSeeMorePress];
  const callback = react.useCallback((nativeEvent) => {
    if (null == first) {
      closure_3(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  const callback1 = react.useCallback(() => {
    let tmp = _undefined((arg0) => {
      const tmp = arg0;
      if (!tmp) {
        if (onSeeMorePress != null) {
          tmp2();
        }
      }
      return !arg0;
    });
  }, items1);
  const intl = intl3.intl;
  const string = intl.string;
  const t = intl3.t;
  const stringResult = string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  const obj = { style: tmp.aboutSection, children: items2 };
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t.CI0vSJ) };
  const Text = tmp8(4832).Text;
  intl2 = tmp8(1115).intl;
  items2 = [metroRequire(Text, obj2), , ];
  const Text2 = tmp8(4832).Text;
  const tmp11 = metroImportDefault;
  const tmp12 = hasOwnProperty;
  items2[1] = metroRequire(Text2, { variant: "text-sm/medium", color: "text-default", lineClamp: num, onTextLayout: callback, children: description });
  let tmp13Result = true === first;
  if (tmp13Result) {
    const obj3 = { hitSlop: rect, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: obj4, onPress: callback1, children: metroRequire(Text_Text.Text, obj5) };
    obj4 = { expanded: tmp3 };
    obj5 = { variant: "text-sm/medium", color: "text-link", children: stringResult };
    tmp13Result = tmp13(React3, obj3);
  }
  items2[2] = tmp13Result;
  return tmp11(tmp12, obj);
};
