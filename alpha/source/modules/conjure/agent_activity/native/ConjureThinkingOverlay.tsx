// Module ID: 12777
// Function ID: 12778
// Name: ConjureThinkingOverlay
// Dependencies: [19, 17, 10851, 21, 5014, 575, 504, 12540, 6977, 10074, 5624, 1113, 3868, 12538, 2]
// Exports: default

// Module 12777 (ConjureThinkingOverlay)
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureChatStore from "ConjureChatStore" /* 10851 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
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
  let obj11;
  let obj3;
  let obj9;
  let tmp8Result;
  projectId = projectId.projectId;
  const tmp = closure_9();
  const ref = react.useRef(null);
  const items = [ConjureChatStore];
  const items1 = [projectId];
  const obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ConjureChatStore.getThinkingActivity(projectId), items1);
  let str;
  const useConjureRevealedText = projectId(12540).useConjureRevealedText;
  projectId(12540);
  if (stateFromStores != null) {
    str = stateFromStores.text;
  }
  if (str == null) {
    str = "";
  }
  const tmp7 = null != stateFromStores && "end" !== stateFromStores.phase;
  const text = useConjureRevealedText(str, { streaming: tmp7 }).text;
  const obj2 = { style: tmp.root, children: closure_7(closure_5, obj3) };
  obj3 = { style: tmp.opaque, children: closure_7(Card, obj11) };
  const obj4 = { style: tmp.body, children: items3 };
  const obj5 = { style: tmp.header, children: items2 };
  Card = tmp3(6977).Card;
  const obj6 = { size: "xs", color: ref(575).colors.TEXT_BRAND };
  const LightbulbIcon = tmp3(10074).LightbulbIcon;
  items2 = [closure_7(LightbulbIcon, obj6), ];
  const obj7 = { variant: "text-sm/semibold", color: "text-strong", children: intl.string(ref(3868).XXYIeI) };
  const Text = tmp3(5624).Text;
  intl = tmp3(1113).intl;
  items2[1] = closure_7(Text, obj7);
  items3 = [closure_8(closure_5, obj5), ];
  const tmp10 = closure_8;
  if ("" !== text) {
    const obj8 = {
      ref,
      style: tmp.panel,
      nestedScrollEnabled: true,
      onContentSizeChange() {
          const current = ref.current;
          let scrollToEndResult;
          if (current != null) {
            scrollToEndResult = current.scrollToEnd({ animated: false });
          }
          return scrollToEndResult;
        },
      children: closure_7(ref(12538), obj9)
    };
    obj9 = { source: text };
    tmp8Result = tmp8(closure_4, obj8);
  } else {
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(ref(3868).LfoD6c) };
    const Text2 = tmp3(5624).Text;
    intl2 = tmp3(1113).intl;
    tmp8Result = tmp8(Text2, obj10);
  }
  items3[1] = tmp8Result;
  obj11 = { variant: "primary", shadow: "high", children: tmp10(closure_5, obj4) };
  return closure_7(closure_5, obj2);
};
