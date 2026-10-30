// Module ID: 12753
// Function ID: 12754
// Name: ConjureQueuedSheet
// Dependencies: [32, 19, 17, 10831, 21, 5009, 575, 504, 12542, 5253, 7360, 7315, 1114, 3865, 5619, 5629, 2]
// Exports: default

// Module 12753 (ConjureQueuedSheet)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12542 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
function ConjureQueuedRow(content) {
  let Text;
  let c0;
  let c1;
  let intl2;
  let items1;
  let items2;
  let obj3;
  let tmp17Result;
  let tmp3;
  let tmp5;
  let tmp7;
  content = content.content;
  c0 = undefined;
  c1 = undefined;
  const divided = content.divided;
  const tmp = closure_11();
  [tmp3, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp5, c1] = react.useState(false);
  const item = tmp.item;
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback((nativeEvent) => _undefined2(nativeEvent.nativeEvent.lines.length > 3), []);
  if (divided) {
    const items = [item, tmp.divider];
    tmp7 = items;
  } else {
    tmp7 = item;
  }
  if ("" === content) {
    const obj2 = { style: tmp7, children: metroImportAll(Text, obj3) };
    obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef3865["07XimM"]) };
    Text = Text_Text.Text;
    intl2 = intl3.intl;
    tmp17Result = metroImportAll(metroRequire, obj2);
  } else {
    const obj4 = { style: tmp7, children: items2 };
    const obj5 = { style: tmp.content, children: items1 };
    const obj6 = { variant: "text-sm/normal", color: "text-default", style: tmp.measure, onTextLayout: callback, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: content };
    items1 = [metroImportAll(Text_Text.Text, obj6), ];
    const Text2 = Text_Text.Text;
    const obj = { variant: "text-sm/normal", color: "text-default", lineClamp: 3, children: content };
    items1[1] = metroImportAll(Text2, obj);
    items2 = [React4(metroRequire, obj5), ];
    let tmp19Result = null;
    if (tmp5) {
      const Button = tmp20(5629).Button;
      const intl = tmp20(1114).intl;
      const string = intl.string;
      const tmp10 = _modDef3865;
      const obj7 = {
        variant: "tertiary",
        size: "sm",
        text: string(tmp3 ? tmp10.nEMoeN : tmp10["W+la29"]),
        onPress() {
              return _undefined((arg0) => !arg0);
            }
      };
      tmp19Result = tmp19(Button, obj7);
    }
    items2[1] = tmp19Result;
    tmp17Result = tmp17(tmp18, obj4);
  }
  return tmp17Result;
}
({ ScrollView: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const ConjureQueuedSheet_str = "ConjureQueuedSheet";
let createStyles = createStyles_mod;
let obj = { scroller: { maxHeight: 360 }, item: obj2, divider: obj3, content: { alignSelf: "stretch" }, measure: { position: "absolute", left: 0, right: 0, opacity: 0 } };
obj2 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureQueuedSheet.tsx");

export default function ConjureQueuedSheet(projectId) {
  let BottomSheetTitleHeader;
  let closure_2;
  let intl;
  let obj3;
  let obj4;
  projectId = projectId.projectId;
  let tmp = closure_11();
  let obj = projectId(504);
  const items = [ConjureChatStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureChatStore.getMessages(projectId), items1);
  const items2 = [stateFromStores];
  const memo = react.useMemo(() => {
    const obj = conjureQueuedMessage;
    return obj.queuedUserMessages(stateFromStores);
  }, items2);
  dependencyMap = tmp5;
  const items3 = [0 === memo.length];
  const effect = react.useEffect(() => {
    const tmp = closure_2;
    if (tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjureQueuedSheet_str);
    }
  }, items3);
  let tmp7 = null;
  if (0 !== memo.length) {
    const obj2 = { header: closure_8(BottomSheetTitleHeader, obj3), children: closure_8(closure_5, obj4) };
    const ActionSheet = tmp2(7360).ActionSheet;
    obj3 = { title: intl.string(stateFromStores(3865).hzgPbZ) };
    BottomSheetTitleHeader = tmp2(7315).BottomSheetTitleHeader;
    intl = tmp2(1114).intl;
    obj4 = {
      style: tmp.scroller,
      nestedScrollEnabled: true,
      children: memo.map((content, index) => {
          const obj = { content: content.content, divided: index > 0 };
          return closure_1_8(ConjureQueuedRow, obj, content.render_id);
        })
    };
    tmp7 = closure_8(ActionSheet, obj2);
  }
  return tmp7;
};
export const CONJURE_QUEUED_SHEET_KEY = "ConjureQueuedSheet";
