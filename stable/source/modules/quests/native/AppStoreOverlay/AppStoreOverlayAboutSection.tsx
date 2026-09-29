// Module ID: 11795
// Function ID: 11796
// Name: AppStoreOverlayAboutSection
// Dependencies: [32, 19, 17, 21, 576, 4788, 1115, 4784, 2]
// Exports: default

// Module 11795 (AppStoreOverlayAboutSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4784 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { top: nativeDefault.space.PX_12, bottom: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
const createStyles = fn(4788);
let obj = { aboutSection: { borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 } };
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default function AppStoreOverlayAboutSection(children) {
  c0 = undefined;
  first = undefined;
  closure_2 = undefined;
  const tmp = closure_9();
  [tmp3, c0] = noop.useState(false);
  [first, closure_2] = noop.useState(null);
  const items = [first];
  const callback = noop.useCallback((nativeEvent) => {
    if (null == first) {
      closure_2(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  const intl = util.intl;
  const t = util.t;
  const stringResult = intl.string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  const obj = { style: tmp.aboutSection, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp8(1115).intl;
  obj2.children = intl2.string(util.t.CI0vSJ);
  const items1 = [timestampProducer(Text_Text.Text, obj2), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: num, onTextLayout: callback, children: children.description }), ];
  let tmp13Result = true === first;
  if (tmp13Result) {
    const obj3 = { hitSlop: rect, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: null, onPress: null, children: null };
    const obj4 = { expanded: tmp3 };
    obj3.accessibilityState = obj4;
    obj3.onPress = callback1;
    const obj5 = { variant: "text-sm/medium", color: "text-link", children: stringResult };
    obj3.children = tmp13(tmp8(4784).Text, obj5);
    tmp13Result = tmp13(React4, obj3);
  }
  items1[2] = tmp13Result;
  obj.children = items1;
  return React5(hasOwnProperty, obj);
};
