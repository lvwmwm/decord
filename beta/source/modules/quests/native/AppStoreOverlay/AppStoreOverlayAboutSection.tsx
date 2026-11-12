// Module ID: 14944
// Function ID: 14945
// Name: AppStoreOverlayAboutSection
// Dependencies: [32, 19, 17, 21, 575, 5170, 9518, 1113, 5783, 9546, 2]
// Exports: default

// Module 14944 (AppStoreOverlayAboutSection)
import nativeDefault from "native" /* 575 */;
import DEFAULT_MAX_HTML_LENGTH from "DEFAULT_MAX_HTML_LENGTH" /* 9518 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const rect = { top: nativeDefault.space.PX_12, bottom: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
let obj = { aboutSection: obj2 };
obj2 = { borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default function AppStoreOverlayAboutSection(description) {
  let _undefined;
  let c2;
  let closure_4;
  let first;
  let intl2;
  let items3;
  let obj4;
  let obj6;
  let obj7;
  let tmp3;
  description = description.description;
  const onSeeMorePress = description.onSeeMorePress;
  _slicedToArray = undefined;
  first = undefined;
  closure_4 = undefined;
  let tmp = closure_9();
  const tmp2 = _slicedToArray(first.useState(false), 2);
  [tmp3, c2] = tmp2;
  [first, closure_4] = first.useState(null);
  const items = [description];
  const memo = first.useMemo(() => {
    const obj = DEFAULT_MAX_HTML_LENGTH;
    return obj.parseHTMLFromText(description, { parseTextLinks: true });
  }, items);
  const items1 = [first];
  const items2 = [onSeeMorePress];
  const callback = first.useCallback((nativeEvent) => {
    if (null == first) {
      closure_4(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items1);
  const callback1 = first.useCallback(() => {
    let tmp = _undefined((arg0) => {
      const tmp = arg0;
      if (!tmp) {
        if (onSeeMorePress != null) {
          tmp2();
        }
      }
      return !arg0;
    });
  }, items2);
  const intl = description(onSeeMorePress[7]).intl;
  const string = intl.string;
  const t = description(onSeeMorePress[7]).t;
  const stringResult = string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  let tmp15Result = null;
  if (0 !== memo.length) {
    const obj2 = { style: tmp.aboutSection, children: items3 };
    const obj3 = { variant: "body-sm/semibold", color: "mobile-text-heading-primary", children: intl2.string(description(onSeeMorePress[7]).t.CI0vSJ) };
    const Text = tmp8(tmp9[8]).Text;
    intl2 = tmp8(tmp9[7]).intl;
    items3 = [closure_6(Text, obj3), , ];
    const Text2 = tmp8(tmp9[8]).Text;
    const tmp15 = closure_7;
    const tmp16 = closure_5;
    let obj = { variant: "body-sm/medium", color: "text-default", lineClamp: num, onTextLayout: callback, children: closure_6(description(onSeeMorePress[9]).HTMLText, obj4) };
    obj4 = { runs: memo, textVariant: "body-sm/medium", boldTextVariant: "body-sm/semibold" };
    items3[1] = closure_6(Text2, obj);
    let tmp17Result = true === first;
    if (tmp17Result) {
      const obj5 = { hitSlop: rect, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: obj6, onPress: callback1, children: closure_6(description(onSeeMorePress[8]).Text, obj7) };
      obj6 = { expanded: tmp3 };
      obj7 = { variant: "body-sm/medium", color: "text-link", children: stringResult };
      tmp17Result = tmp17(closure_4, obj5);
    }
    items3[2] = tmp17Result;
    tmp15Result = tmp15(tmp16, obj2);
  }
  return tmp15Result;
};
