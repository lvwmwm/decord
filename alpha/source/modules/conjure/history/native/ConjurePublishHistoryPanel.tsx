// Module ID: 12500
// Function ID: 12501
// Name: ConjurePublishHistoryPanel
// Dependencies: [32, 19, 17, 21, 12501, 6022, 5619, 1114, 3865, 5629, 12503, 2]
// Exports: default

// Module 12500 (ConjurePublishHistoryPanel)
import react_native from "react-native" /* 17 */;
import intl9 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import useConjurePublishHistory from "useConjurePublishHistory" /* 12501 */;
import ConjureNativeMarkdownDefault from "ConjureNativeMarkdown" /* 12503 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function ReleaseNotes(arg0) {
  let id;
  let intl4;
  let intl5;
  let items;
  let notesCache;
  let obj7;
  let projectId;
  ({ projectId, id, notesCache } = arg0);
  const obj = useConjurePublishHistory;
  const conjurePublishHistoryNotes = obj.useConjurePublishHistoryNotes(projectId, id, notesCache);
  const state = conjurePublishHistoryNotes.state;
  if ("failed" === state.status) {
    const obj2 = { spacing: 8, children: items };
    const Stack = tmp(6022).Stack;
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef3865.cBIaeW) };
    const Text2 = tmp(5619).Text;
    intl4 = tmp(1114).intl;
    items = [metroRequire(Text2, obj3), ];
    const obj4 = { variant: "secondary", size: "sm", text: intl5.string(_modDef3865.HOuQ9H), onPress: tmp4 };
    const Button = tmp(5629).Button;
    intl5 = tmp(1114).intl;
    items[1] = metroRequire(Button, obj4);
    return metroImportDefault(Stack, obj2);
  } else {
    let stringResult;
    let data = null;
    if ("loaded" === state.status) {
      data = state.data;
    }
    if (null != data) {
      let tmp6Result;
      if ("" !== data) {
        const obj5 = { source: data };
        tmp6Result = metroRequire(ConjureNativeMarkdownDefault, obj5);
      }
      return tmp6Result;
    }
    const Text = tmp(5619).Text;
    const tmp7 = View;
    if ("loading" === state.status) {
      const intl3 = tmp(1114).intl;
      stringResult = intl3.string(_modDef3865["LmWLc+"]);
    } else if (null == data) {
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(_modDef3865.hcrQOo);
    } else {
      const intl = tmp(1114).intl;
      stringResult = intl.string(_modDef3865["0bDcBs"]);
    }
    const obj6 = { accessibilityLiveRegion: "polite", children: metroRequire(Text, obj7) };
    obj7 = { variant: "text-sm/normal", children: stringResult };
    tmp6Result = tmp6(tmp7, obj6);
  }
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_9 = react.memo(function PublishRow(entry) {
  let c0;
  let intl2;
  let notesCache;
  let projectId;
  let tmp10;
  let tmp2;
  let ufHcsq;
  entry = entry.entry;
  c0 = undefined;
  ({ projectId, notesCache } = entry);
  [tmp2, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj = useConjurePublishHistory;
  const publishHistoryTitleResult = obj.publishHistoryTitle(entry.publishedAt);
  const Stack = Stack_Stack.Stack;
  const children = [metroRequire(Text_Text.Text, { variant: "text-md/medium", children: publishHistoryTitleResult }), , ];
  const Button = components_Button_Button.Button;
  const intl = intl9.intl;
  const string = intl.string;
  const tmp9 = _modDef3865;
  const tmp6 = metroImportDefault;
  if (tmp2) {
    ufHcsq = tmp9["Qro2x/"];
    tmp10 = tmp8;
  } else {
    ufHcsq = tmp9.ufHcsq;
    tmp10 = tmp8;
  }
  const obj2 = {
    variant: "secondary",
    size: "sm",
    text: string(ufHcsq),
    accessibilityLabel: intl2.formatToPlainString(tmp10(3865)["M9L+3I"], { title: publishHistoryTitleResult }),
    accessibilityState: { expanded: tmp2 },
    onPress() {
      return _undefined((arg0) => !arg0);
    }
  };
  intl2 = intl9.intl;
  children[1] = metroRequire(Button, obj2);
  let tmp7Result = null;
  if (tmp2) {
    const obj3 = { projectId, id: entry.id, notesCache };
    tmp7Result = tmp7(ReleaseNotes, obj3);
  }
  children[2] = tmp7Result;
  return tmp6(Stack, { spacing: 12, children });
});
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjurePublishHistoryPanel.tsx");

export default function ConjurePublishHistoryPanel(projectId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items;
  let items1;
  let items2;
  let obj12;
  let tmp5;
  projectId = projectId.projectId;
  let obj = projectId(12501);
  const iter = obj.useConjurePublishHistory(projectId);
  const state = iter.state;
  if ("loading" === state.status) {
    const obj2 = { variant: "text-sm/normal", children: intl4.string(iter(3865)["d/Wf8N"]) };
    const Text3 = tmp(5619).Text;
    intl4 = tmp(1114).intl;
    tmp5 = closure_6(Text3, obj2);
  } else if ("failed" === state.status) {
    const obj3 = { spacing: 12, children: items };
    const Stack = tmp(6022).Stack;
    const obj4 = { variant: "text-sm/normal", children: intl2.string(iter(3865).TzCJWI) };
    const Text2 = tmp(5619).Text;
    intl2 = tmp(1114).intl;
    items = [closure_6(Text2, obj4), ];
    const obj5 = { variant: "secondary", text: intl3.string(iter(3865).HOuQ9H), onPress: iter.retry };
    const Button = tmp(5629).Button;
    intl3 = tmp(1114).intl;
    items[1] = closure_6(Button, obj5);
    tmp5 = closure_7(Stack, obj3);
  } else if (0 === state.data.entries.length) {
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(iter(3865)["19L92G"]) };
    const Text = tmp(5619).Text;
    intl = tmp(1114).intl;
    tmp5 = closure_6(Text, obj6);
  } else {
    const obj7 = { spacing: 24, children: items1 };
    const Stack2 = tmp(6022).Stack;
    const obj8 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(iter(3865).Kzt1rI) };
    const Text4 = tmp(5619).Text;
    intl5 = tmp(1114).intl;
    items1 = [closure_6(Text4, obj8), , ];
    const entries = state.data.entries;
    items1[1] = entries.map((entry) => {
      const obj = { projectId, entry, notesCache: iter.notesCache };
      return metroRequire(closure_9, obj, entry.id);
    });
    const obj9 = { direction: "horizontal", spacing: 8, align: "center", justify: "space-between", children: items2 };
    const Stack3 = tmp(6022).Stack;
    const obj10 = { variant: "secondary", size: "sm", shrink: true, text: intl6.string(iter(3865)["4un98A"]), disabled: !iter.hasPrevious, onPress: iter.previous };
    const Button2 = tmp(5629).Button;
    intl6 = tmp(1114).intl;
    items2 = [closure_6(Button2, obj10), , ];
    const obj11 = { variant: "text-sm/normal", children: intl7.formatToPlainString(iter(3865)["54samz"], obj12) };
    const Text5 = tmp(5619).Text;
    intl7 = tmp(1114).intl;
    obj12 = { page: iter.page };
    items2[1] = closure_6(Text5, obj11);
    const obj13 = { variant: "secondary", size: "sm", shrink: true, text: intl8.string(iter(3865).HqheLL), disabled: !iter.hasNext, onPress: iter.next };
    const Button3 = tmp(5629).Button;
    intl8 = tmp(1114).intl;
    items2[2] = closure_6(Button3, obj13);
    items1[2] = closure_7(Stack3, obj9);
    tmp5 = closure_7(Stack2, obj7);
  }
  return tmp5;
};
