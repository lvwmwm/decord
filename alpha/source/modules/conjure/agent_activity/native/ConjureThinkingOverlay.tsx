// Module ID: 12995
// Function ID: 12996
// Name: ConjureThinkingOverlay
// Dependencies: [19, 17, 10979, 21, 5142, 575, 12996, 12378, 504, 12380, 7043, 10201, 5753, 1113, 4028, 2]
// Exports: default

// Module 12995 (ConjureThinkingOverlay)
import nativeDefault from "native" /* 575 */;
import _modDef4028 from "module_4028" /* 4028 */;
import ConjureNativeMarkdownDefault from "ConjureNativeMarkdown" /* 12378 */;
import conjureThinkingTail from "conjureThinkingTail" /* 12996 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureChatStore from "ConjureChatStore" /* 10979 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, nativeEvent;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
function ThinkingScroll(arg0) {
  let ref2;
  let ref3;
  let style;
  let text;
  react = undefined;
  ({ style, text } = arg0);
  const ref = react.useRef(null);
  importDefault = react.useRef(true);
  dependencyMap = react.useRef(0);
  react = react.useRef(false);
  const callback = react.useCallback((nativeEvent) => {
    ref3.current = true;
    ref2.current = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const callback1 = react.useCallback(() => {
    ref3.current = false;
  }, []);
  const callback2 = react.useCallback((nativeEvent) => {
    let contentSize;
    let layoutMeasurement;
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    ({ contentSize, layoutMeasurement } = nativeEvent);
    const obj = conjureThinkingTail;
    ref.current = obj.followsTail(ref.current, contentSize.height - layoutMeasurement.height - contentOffset.y, contentOffset.y < ref2.current);
    ref2.current = contentOffset.y;
  }, []);
  let obj = {
    ref,
    style,
    nestedScrollEnabled: true,
    scrollEventThrottle: 16,
    onScrollBeginDrag: callback,
    onScrollEndDrag: callback1,
    onScroll: callback2,
    onContentSizeChange: react.useCallback(() => {
      const current = ref.current && !ref3.current;
      if (current) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.scrollToEnd({ animated: false });
        }
      }
    }, []),
    children: closure_7(ConjureNativeMarkdownDefault, { source: text })
  };
  return closure_7(closure_4, obj);
}
let react = react_mod;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: rect, opaque: obj2, body: obj3, header: obj4, panel: { maxHeight: 240 } };
rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureThinkingOverlay.tsx");

export default function ConjureThinkingOverlay(projectId) {
  let Card;
  let intl;
  let intl2;
  let items2;
  let items3;
  let obj10;
  let obj3;
  let tmp7Result;
  projectId = projectId.projectId;
  const tmp = closure_9();
  const items = [ConjureChatStore];
  const items1 = [projectId];
  const obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ConjureChatStore.getThinkingActivity(projectId), items1);
  let str;
  const useConjureRevealedText = projectId(12380).useConjureRevealedText;
  projectId(12380);
  if (stateFromStores != null) {
    str = stateFromStores.text;
  }
  if (str == null) {
    str = "";
  }
  const tmp6 = null != stateFromStores && "end" !== stateFromStores.phase;
  const text = useConjureRevealedText(str, { streaming: tmp6 }).text;
  const obj2 = { style: tmp.root, children: closure_7(closure_5, obj3) };
  obj3 = { style: tmp.opaque, children: closure_7(Card, obj10) };
  const obj4 = { style: tmp.body, children: items3 };
  const obj5 = { style: tmp.header, children: items2 };
  Card = tmp2(7043).Card;
  const obj6 = { size: "xs", color: nativeDefault.colors.TEXT_BRAND };
  const LightbulbIcon = tmp2(10201).LightbulbIcon;
  items2 = [closure_7(LightbulbIcon, obj6), ];
  const obj7 = { variant: "body-sm/semibold", color: "text-strong", children: intl.string(_modDef4028.XXYIeI) };
  const Text = tmp2(5753).Text;
  intl = tmp2(1113).intl;
  items2[1] = closure_7(Text, obj7);
  items3 = [closure_8(closure_5, obj5), ];
  const tmp9 = closure_8;
  if ("" !== text) {
    const obj8 = { style: tmp.panel, text };
    tmp7Result = tmp7(ThinkingScroll, obj8);
  } else {
    const obj9 = { variant: "body-sm/normal", color: "text-muted", children: intl2.string(_modDef4028.LfoD6c) };
    const Text2 = tmp2(5753).Text;
    intl2 = tmp2(1113).intl;
    tmp7Result = tmp7(Text2, obj9);
  }
  items3[1] = tmp7Result;
  obj10 = { variant: "primary", shadow: "high", children: tmp9(closure_5, obj4) };
  return closure_7(closure_5, obj2);
};
