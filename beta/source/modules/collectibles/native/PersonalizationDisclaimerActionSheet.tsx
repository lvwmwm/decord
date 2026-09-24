// Module ID: 16155
// Function ID: 16156
// Name: PersonalizationDisclaimerActionSheet
// Dependencies: [19, 1078, 21, 4790, 580, 558, 568, 4487, 2112, 1119, 4786, 5220, 8892, 5684, 4757, 7429, 2]

// Module 16155 (PersonalizationDisclaimerActionSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import LinkingDefault from "Linking" /* 4487 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import Text_Text from "Text/Text" /* 4786 */;
import components_Button_Button from "components/Button/Button" /* 5220 */;
import ButtonGroup from "ButtonGroup" /* 5684 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7429 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8892 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1078).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16 }, header: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.header = { paddingVertical: nativeDefault.space.PX_8, alignSelf: "center", textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_8, alignSelf: "center", textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(10);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = LinkingDefault;
      obj.openURL(HelpdeskUtilsDefault.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  ({ container, header } = tmp4);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.euks4U);
    cResult[1] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4.header) {
    const obj2 = { variant: "heading-md/medium", color: "mobile-text-heading-primary", accessibilityRole: "header", style: header, children: tmp6 };
    const tmp10 = hasOwnProperty(tmp(4786).Text, obj2);
    cResult[2] = tmp4.header;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t.hvVgAZ);
    cResult[4] = stringResult1;
    let tmp11 = stringResult1;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { size: "lg", text: tmp11, onPress: first, icon: null, iconPosition: "end" };
    const obj4 = { color: nativeDefault.colors.WHITE };
    obj3.icon = hasOwnProperty(tmp(8892).LinkExternalSmallIcon, obj4);
    const tmp16 = hasOwnProperty(tmp(5220).Button, obj3);
    cResult[5] = tmp16;
    let tmp13 = tmp16;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { children: null };
    const items = [tmp13, ];
    const obj6 = { variant: "tertiary", size: "lg", text: null, onPress: null };
    const intl3 = tmp(1119).intl;
    obj6.text = intl3.string(tmp(1119).t.WAI6xu);
    obj6.onPress = function onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    items[1] = hasOwnProperty(tmp(5220).Button, obj6);
    obj5.children = items;
    const tmp20 = timestampProducer(tmp(5684).ButtonGroup, obj5);
    cResult[6] = tmp20;
    let tmp17 = tmp20;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === tmp4.container) {
    if (cResult[8] === tmp8) {
      let tmp21 = cResult[9];
    }
    return tmp21;
  }
  const obj7 = { contentStyles: container, children: null };
  const items1 = [tmp8, tmp17];
  obj7.children = items1;
  const tmp22 = timestampProducer(Sheet_BottomSheet.BottomSheet, obj7);
  cResult[7] = tmp4.container;
  cResult[8] = tmp8;
  cResult[9] = tmp22;
  tmp21 = tmp22;
}) : (() => {
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    const obj = LinkingDefault;
    obj.openURL(HelpdeskUtilsDefault.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
  }, []);
  let obj = { contentStyles: tmp.container, children: null };
  const obj2 = { variant: "heading-md/medium", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.euks4U);
  const items = [hasOwnProperty(Text_Text.Text, obj2), ];
  const obj3 = { children: null };
  const obj4 = { size: "lg", text: null, onPress: null, icon: null, iconPosition: "end" };
  const intl2 = util.intl;
  obj4.text = intl2.string(util.t.hvVgAZ);
  obj4.onPress = callback;
  obj4.icon = hasOwnProperty(LinkExternalSmallIcon.LinkExternalSmallIcon, { color: nativeDefault.colors.WHITE });
  const items1 = [hasOwnProperty(components_Button_Button.Button, obj4), ];
  const obj6 = { variant: "tertiary", size: "lg", text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.WAI6xu);
  obj6.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items1[1] = hasOwnProperty(components_Button_Button.Button, obj6);
  obj3.children = items1;
  items[1] = timestampProducer(ButtonGroup.ButtonGroup, obj3);
  obj.children = items;
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
});
