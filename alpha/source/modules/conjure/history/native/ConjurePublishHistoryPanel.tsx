// Module ID: 12274
// Function ID: 12275
// Name: ConjurePublishHistoryPanel
// Dependencies: [32, 19, 17, 21, 558, 576, 12275, 5234, 1128, 3830, 5977, 5244, 12277, 2]

// Module 12274 (ConjurePublishHistoryPanel)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl9 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5234 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import Stack_Stack from "Stack/Stack" /* 5977 */;
import useConjurePublishHistory from "useConjurePublishHistory" /* 12275 */;
import ConjureNativeMarkdownDefault from "ConjureNativeMarkdown" /* 12277 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReleaseNotes(arg0) {
  let id;
  let intl4;
  let items;
  let notesCache;
  let obj8;
  let projectId;
  let retry;
  let state;
  const obj = react2;
  const cResult = obj.c(11);
  ({ projectId, id, notesCache } = arg0);
  const obj2 = useConjurePublishHistory;
  const conjurePublishHistoryNotes = obj2.useConjurePublishHistoryNotes(projectId, id, notesCache);
  ({ state, retry } = conjurePublishHistoryNotes);
  if ("failed" === state.status) {
    let first;
    let tmp24;
    let tmp27;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef3830.cBIaeW) };
      const Text = tmp(5234).Text;
      intl4 = tmp(1128).intl;
      const tmp23 = metroRequire(Text, obj3);
      cResult[0] = tmp23;
      first = tmp23;
    } else {
      first = cResult[0];
    }
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = tmp(1128).intl;
      const stringResult = intl5.string(_modDef3830.HOuQ9H);
      cResult[1] = stringResult;
      tmp24 = stringResult;
    } else {
      tmp24 = cResult[1];
    }
    if (cResult[2] !== retry) {
      const obj4 = { spacing: 8, children: items };
      items = [first, ];
      const Stack = tmp(5977).Stack;
      const obj5 = { variant: "secondary", size: "sm", text: tmp24, onPress: retry };
      items[1] = metroRequire(components_Button_Button.Button, obj5);
      const tmp30 = metroImportDefault(Stack, obj4);
      cResult[2] = retry;
      cResult[3] = tmp30;
      tmp27 = tmp30;
    } else {
      tmp27 = cResult[3];
    }
    return tmp27;
  } else {
    let tmp11;
    let stringResult1;
    let data = null;
    if ("loaded" === state.status) {
      data = state.data;
    }
    if (null != data) {
      if ("" !== data) {
        let tmp15;
        if (cResult[4] !== data) {
          const obj6 = { source: data };
          const tmp18 = metroRequire(ConjureNativeMarkdownDefault, obj6);
          cResult[4] = data;
          cResult[5] = tmp18;
          tmp15 = tmp18;
        } else {
          tmp15 = cResult[5];
        }
        tmp11 = tmp15;
      }
      return tmp11;
    }
    if (cResult[6] === data) {
      let tmp6;
      if (cResult[7] === state.status) {
        tmp6 = cResult[8];
      }
      if (cResult[9] !== tmp6) {
        const obj7 = { accessibilityLiveRegion: "polite", children: metroRequire(Text_Text.Text, obj8) };
        obj8 = { variant: "text-sm/normal", children: tmp6 };
        const tmp14 = metroRequire(View, obj7);
        cResult[9] = tmp6;
        cResult[10] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[10];
      }
    }
    if ("loading" === state.status) {
      const intl3 = tmp(1128).intl;
      stringResult1 = intl3.string(_modDef3830["LmWLc+"]);
    } else if (null == data) {
      const intl2 = tmp(1128).intl;
      stringResult1 = intl2.string(_modDef3830.hcrQOo);
    } else {
      const intl = tmp(1128).intl;
      stringResult1 = intl.string(_modDef3830["0bDcBs"]);
    }
    cResult[6] = data;
    cResult[7] = state.status;
    cResult[8] = stringResult1;
    tmp6 = stringResult1;
  }
}) : (function ReleaseNotes(arg0) {
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
    const Stack = tmp(5977).Stack;
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef3830.cBIaeW) };
    const Text2 = tmp(5234).Text;
    intl4 = tmp(1128).intl;
    items = [metroRequire(Text2, obj3), ];
    const obj4 = { variant: "secondary", size: "sm", text: intl5.string(_modDef3830.HOuQ9H), onPress: tmp4 };
    const Button = tmp(5244).Button;
    intl5 = tmp(1128).intl;
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
    const Text = tmp(5234).Text;
    const tmp7 = View;
    if ("loading" === state.status) {
      const intl3 = tmp(1128).intl;
      stringResult = intl3.string(_modDef3830["LmWLc+"]);
    } else if (null == data) {
      const intl2 = tmp(1128).intl;
      stringResult = intl2.string(_modDef3830.hcrQOo);
    } else {
      const intl = tmp(1128).intl;
      stringResult = intl.string(_modDef3830["0bDcBs"]);
    }
    const obj6 = { accessibilityLiveRegion: "polite", children: metroRequire(Text, obj7) };
    obj7 = { variant: "text-sm/normal", children: stringResult };
    tmp6Result = tmp6(tmp7, obj6);
  }
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function PublishRow(arg0) {
  let closure_129_0;
  let entry;
  let items;
  let notesCache;
  let projectId;
  let tmp11;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(24);
  ({ projectId, entry, notesCache } = arg0);
  [tmp5, closure_129_0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== entry.publishedAt) {
    const tmpResult = useConjurePublishHistory;
    const publishHistoryTitleResult = tmpResult.publishHistoryTitle(entry.publishedAt);
    cResult[0] = entry.publishedAt;
    cResult[1] = publishHistoryTitleResult;
    tmp6 = publishHistoryTitleResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const obj2 = { variant: "text-md/medium", children: tmp6 };
    const tmp10 = metroRequire(Text_Text.Text, obj2);
    cResult[2] = tmp6;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp5) {
    const intl = tmp(1128).intl;
    const string = intl.string;
    const tmp13 = _modDef3830;
    const stringResult = string(tmp5 ? tmp13["Qro2x/"] : tmp13.ufHcsq);
    cResult[4] = tmp5;
    cResult[5] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== tmp6) {
    const intl2 = tmp(1128).intl;
    const obj3 = { title: tmp6 };
    const formatToPlainStringResult = intl2.formatToPlainString(_modDef3830["M9L+3I"], obj3);
    cResult[6] = tmp6;
    cResult[7] = formatToPlainStringResult;
    tmp15 = formatToPlainStringResult;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== tmp5) {
    const obj4 = { expanded: tmp5 };
    cResult[8] = tmp5;
    cResult[9] = obj4;
    tmp18 = obj4;
  } else {
    tmp18 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function j() {
      return closure_1_0((arg0) => !arg0);
    };
    cResult[10] = fn;
    tmp19 = fn;
  } else {
    tmp19 = cResult[10];
  }
  if (cResult[11] === tmp11) {
    if (cResult[12] === tmp15) {
      let tmp20;
      if (cResult[13] === tmp18) {
        tmp20 = cResult[14];
      }
      if (cResult[15] === entry.id) {
        if (cResult[16] === tmp5) {
          if (cResult[17] === notesCache) {
            let tmp22;
            if (cResult[18] === projectId) {
              tmp22 = cResult[19];
            }
            if (cResult[20] === tmp8) {
              if (cResult[21] === tmp20) {
                let tmp26;
                if (cResult[22] === tmp22) {
                  tmp26 = cResult[23];
                }
                return tmp26;
              }
            }
            const obj5 = { spacing: 12, children: items };
            items = [tmp8, tmp20, tmp22];
            const tmp28 = metroImportDefault(Stack_Stack.Stack, obj5);
            cResult[20] = tmp8;
            cResult[21] = tmp20;
            cResult[22] = tmp22;
            cResult[23] = tmp28;
            tmp26 = tmp28;
          }
        }
      }
      let tmp23 = null;
      if (tmp5) {
        const obj6 = { projectId, id: entry.id, notesCache };
        tmp23 = metroRequire(closure_8, obj6);
      }
      cResult[15] = entry.id;
      cResult[16] = tmp5;
      cResult[17] = notesCache;
      cResult[18] = projectId;
      cResult[19] = tmp23;
      tmp22 = tmp23;
    }
  }
  const tmp21 = metroRequire(components_Button_Button.Button, { variant: "secondary", size: "sm", text: tmp11, accessibilityLabel: tmp15, accessibilityState: tmp18, onPress: tmp19 });
  cResult[11] = tmp11;
  cResult[12] = tmp15;
  cResult[13] = tmp18;
  cResult[14] = tmp21;
  tmp20 = tmp21;
}) : (function PublishRow(entry) {
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
  const tmp9 = _modDef3830;
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
    accessibilityLabel: intl2.formatToPlainString(tmp10(3830)["M9L+3I"], { title: publishHistoryTitleResult }),
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
    tmp7Result = tmp7(closure_8, obj3);
  }
  children[2] = tmp7Result;
  return tmp6(Stack, { spacing: 12, children });
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishHistoryPanel(projectId) {
  let intl;
  let intl5;
  let intl6;
  let intl8;
  let items;
  let items1;
  let items2;
  let obj = projectId(576);
  const cResult = obj.c(33);
  projectId = projectId.projectId;
  const obj2 = projectId(12275);
  const iter = obj2.useConjurePublishHistory(projectId);
  const state = iter.state;
  if ("loading" === state.status) {
    let first;
    const _Symbol6 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/normal", children: intl8.string(iter(3830)["d/Wf8N"]) };
      const Text4 = tmp(5234).Text;
      intl8 = tmp(1128).intl;
      const tmp58 = closure_6(Text4, obj3);
      cResult[0] = tmp58;
      first = tmp58;
    } else {
      first = cResult[0];
    }
    return first;
  } else if ("failed" === state.status) {
    let tmp43;
    let tmp47;
    let tmp50;
    const _Symbol4 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "text-sm/normal", children: intl6.string(iter(3830).TzCJWI) };
      const Text3 = tmp(5234).Text;
      intl6 = tmp(1128).intl;
      const tmp46 = closure_6(Text3, obj4);
      cResult[1] = tmp46;
      tmp43 = tmp46;
    } else {
      tmp43 = cResult[1];
    }
    const _Symbol5 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl7 = tmp(1128).intl;
      const stringResult = intl7.string(iter(3830).HOuQ9H);
      cResult[2] = stringResult;
      tmp47 = stringResult;
    } else {
      tmp47 = cResult[2];
    }
    if (cResult[3] !== iter.retry) {
      const obj5 = { spacing: 12, children: items };
      items = [tmp43, ];
      const Stack = tmp(5977).Stack;
      const obj6 = { variant: "secondary", text: tmp47, onPress: iter.retry };
      items[1] = closure_6(projectId(5244).Button, obj6);
      const tmp53 = closure_7(Stack, obj5);
      cResult[3] = iter.retry;
      cResult[4] = tmp53;
      tmp50 = tmp53;
    } else {
      tmp50 = cResult[4];
    }
    return tmp50;
  } else if (0 === state.data.entries.length) {
    let tmp38;
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(iter(3830)["19L92G"]) };
      const Text2 = tmp(5234).Text;
      intl5 = tmp(1128).intl;
      const tmp41 = closure_6(Text2, obj7);
      cResult[5] = tmp41;
      tmp38 = tmp41;
    } else {
      tmp38 = cResult[5];
    }
    return tmp38;
  } else {
    let tmp4;
    let tmp8;
    const _Symbol7 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(iter(3830).Kzt1rI) };
      const Text = tmp(5234).Text;
      intl = tmp(1128).intl;
      const tmp7 = closure_6(Text, obj8);
      cResult[6] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[6];
    }
    if (cResult[7] === iter.notesCache) {
      if (cResult[8] === projectId) {
        let tmp11;
        if (cResult[9] === state.data.entries) {
          tmp8 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1128).intl;
          const stringResult1 = intl2.string(iter(3830)["4un98A"]);
          cResult[14] = stringResult1;
          tmp11 = stringResult1;
        } else {
          tmp11 = cResult[14];
        }
        if (cResult[15] === iter.previous) {
          let tmp15;
          let tmp18;
          let tmp21;
          let tmp24;
          if (cResult[16] === !iter.hasPrevious) {
            tmp15 = cResult[17];
          }
          if (cResult[18] !== iter.page) {
            const intl3 = tmp(1128).intl;
            const obj9 = { page: iter.page };
            const formatToPlainStringResult = intl3.formatToPlainString(iter(3830)["54samz"], obj9);
            cResult[18] = iter.page;
            cResult[19] = formatToPlainStringResult;
            tmp18 = formatToPlainStringResult;
          } else {
            tmp18 = cResult[19];
          }
          if (cResult[20] !== tmp18) {
            const obj10 = { variant: "text-sm/normal", children: tmp18 };
            const tmp23 = closure_6(projectId(5234).Text, obj10);
            cResult[20] = tmp18;
            cResult[21] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[21];
          }
          const _Symbol2 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1128).intl;
            const stringResult2 = intl4.string(iter(3830).HqheLL);
            cResult[22] = stringResult2;
            tmp24 = stringResult2;
          } else {
            tmp24 = cResult[22];
          }
          if (cResult[23] === iter.next) {
            let tmp28;
            if (cResult[24] === !iter.hasNext) {
              tmp28 = cResult[25];
            }
            if (cResult[26] === tmp28) {
              if (cResult[27] === tmp15) {
                let tmp31;
                if (cResult[28] === tmp21) {
                  tmp31 = cResult[29];
                }
                if (cResult[30] === tmp31) {
                  let tmp34;
                  if (cResult[31] === tmp8) {
                    tmp34 = cResult[32];
                  }
                  return tmp34;
                }
                const obj11 = { spacing: 24, children: items1 };
                items1 = [tmp4, tmp8, tmp31];
                const tmp36 = closure_7(projectId(5977).Stack, obj11);
                cResult[30] = tmp31;
                cResult[31] = tmp8;
                cResult[32] = tmp36;
                tmp34 = tmp36;
              }
            }
            const obj12 = { direction: "horizontal", spacing: 8, align: "center", justify: "space-between", children: items2 };
            items2 = [tmp15, tmp21, tmp28];
            const tmp33 = closure_7(projectId(5977).Stack, obj12);
            cResult[26] = tmp28;
            cResult[27] = tmp15;
            cResult[28] = tmp21;
            cResult[29] = tmp33;
            tmp31 = tmp33;
          }
          const obj13 = { variant: "secondary", size: "sm", shrink: true, text: tmp24, disabled: !iter.hasNext, onPress: iter.next };
          const tmp30 = closure_6(projectId(5244).Button, obj13);
          cResult[23] = iter.next;
          cResult[24] = !iter.hasNext;
          cResult[25] = tmp30;
          tmp28 = tmp30;
        }
        const obj14 = { variant: "secondary", size: "sm", shrink: true, text: tmp11, disabled: !iter.hasPrevious, onPress: iter.previous };
        const tmp17 = closure_6(projectId(5244).Button, obj14);
        cResult[15] = iter.previous;
        cResult[16] = !iter.hasPrevious;
        cResult[17] = tmp17;
        tmp15 = tmp17;
      }
    }
    if (cResult[11] === iter.notesCache) {
      let tmp9;
      if (cResult[12] === projectId) {
        tmp9 = cResult[13];
      }
      const entries = state.data.entries;
      const mapped = entries.map(tmp9);
      cResult[7] = iter.notesCache;
      cResult[8] = projectId;
      cResult[9] = state.data.entries;
      cResult[10] = mapped;
      tmp8 = mapped;
    }
    const fn = function v(entry) {
      const obj = { projectId, entry, notesCache: iter.notesCache };
      return metroRequire(closure_9, obj, entry.id);
    };
    cResult[11] = iter.notesCache;
    cResult[12] = projectId;
    cResult[13] = fn;
    tmp9 = fn;
  }
}) : (function ConjurePublishHistoryPanel(projectId) {
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
  let obj = projectId(12275);
  const iter = obj.useConjurePublishHistory(projectId);
  const state = iter.state;
  if ("loading" === state.status) {
    const obj2 = { variant: "text-sm/normal", children: intl4.string(iter(3830)["d/Wf8N"]) };
    const Text3 = tmp(5234).Text;
    intl4 = tmp(1128).intl;
    tmp5 = closure_6(Text3, obj2);
  } else if ("failed" === state.status) {
    const obj3 = { spacing: 12, children: items };
    const Stack = tmp(5977).Stack;
    const obj4 = { variant: "text-sm/normal", children: intl2.string(iter(3830).TzCJWI) };
    const Text2 = tmp(5234).Text;
    intl2 = tmp(1128).intl;
    items = [closure_6(Text2, obj4), ];
    const obj5 = { variant: "secondary", text: intl3.string(iter(3830).HOuQ9H), onPress: iter.retry };
    const Button = tmp(5244).Button;
    intl3 = tmp(1128).intl;
    items[1] = closure_6(Button, obj5);
    tmp5 = closure_7(Stack, obj3);
  } else if (0 === state.data.entries.length) {
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(iter(3830)["19L92G"]) };
    const Text = tmp(5234).Text;
    intl = tmp(1128).intl;
    tmp5 = closure_6(Text, obj6);
  } else {
    const obj7 = { spacing: 24, children: items1 };
    const Stack2 = tmp(5977).Stack;
    const obj8 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(iter(3830).Kzt1rI) };
    const Text4 = tmp(5234).Text;
    intl5 = tmp(1128).intl;
    items1 = [closure_6(Text4, obj8), , ];
    const entries = state.data.entries;
    items1[1] = entries.map((entry) => {
      const obj = { projectId, entry, notesCache: iter.notesCache };
      return metroRequire(closure_9, obj, entry.id);
    });
    const obj9 = { direction: "horizontal", spacing: 8, align: "center", justify: "space-between", children: items2 };
    const Stack3 = tmp(5977).Stack;
    const obj10 = { variant: "secondary", size: "sm", shrink: true, text: intl6.string(iter(3830)["4un98A"]), disabled: !iter.hasPrevious, onPress: iter.previous };
    const Button2 = tmp(5244).Button;
    intl6 = tmp(1128).intl;
    items2 = [closure_6(Button2, obj10), , ];
    const obj11 = { variant: "text-sm/normal", children: intl7.formatToPlainString(iter(3830)["54samz"], obj12) };
    const Text5 = tmp(5234).Text;
    intl7 = tmp(1128).intl;
    obj12 = { page: iter.page };
    items2[1] = closure_6(Text5, obj11);
    const obj13 = { variant: "secondary", size: "sm", shrink: true, text: intl8.string(iter(3830).HqheLL), disabled: !iter.hasNext, onPress: iter.next };
    const Button3 = tmp(5244).Button;
    intl8 = tmp(1128).intl;
    items2[2] = closure_6(Button3, obj13);
    items1[2] = closure_7(Stack3, obj9);
    tmp5 = closure_7(Stack2, obj7);
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjurePublishHistoryPanel.tsx");

export default tmp4;
