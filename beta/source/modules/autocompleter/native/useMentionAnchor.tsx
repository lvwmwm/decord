// Module ID: 11883
// Function ID: 11884
// Name: useMentionAnchor
// Dependencies: [32, 19, 9725, 2]
// Exports: default

// Module 11883 (useMentionAnchor)
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 9725 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function isMentionAnchorValid(seenText, arg1, anchor1, arg3, allowSpaces) {
  let startsWithResult = null != anchor1 && anchor1 >= 0 && seenText.startsWith(arg3, anchor1) && arg1 >= anchor1 + arg3.length;
  if (startsWithResult) {
    let isUnbrokenRunResult;
    const sum = anchor1 + arg3.length;
    allowSpaces = undefined;
    if (allowSpaces != null) {
      allowSpaces = allowSpaces.allowSpaces;
    }
    if (true === allowSpaces) {
      let num2 = allowSpaces.maxQueryLength;
      const diff = arg1 - sum;
      if (num2 == null) {
        num2 = 64;
      }
      let isSingleLineRunResult = diff <= num2;
      if (isSingleLineRunResult) {
        const obj2 = autocompleter_AutocompleteUtils;
        isSingleLineRunResult = obj2.isSingleLineRun(seenText, sum, arg1);
      }
      if (isSingleLineRunResult) {
        isSingleLineRunResult = !re4.test(seenText.slice(sum, arg1));
      }
      isUnbrokenRunResult = isSingleLineRunResult;
    } else {
      const obj = autocompleter_AutocompleteUtils;
      isUnbrokenRunResult = obj.isUnbrokenRun(seenText, sum, arg1);
    }
    startsWithResult = isUnbrokenRunResult;
  }
  return startsWithResult;
}
const re4 = /\s\s/;
let closure_6 = { kind: "idle" };
const result = size.fileFinishedImporting("modules/autocompleter/native/useMentionAnchor.tsx");

export default function useMentionAnchor(seenText, arg1, arg2, arg3, allowSpaces) {
  let anchor;
  let items;
  let tmp3;
  let tmp4;
  let closure_0 = arg2;
  let obj = react;
  let tmp = closure_6;
  [tmp3, tmp4] = _slicedToArray(react.useState(closure_6), 2);
  let closure_1 = tmp4;
  let anchor1 = null;
  const tmp2 = _slicedToArray(react.useState(closure_6), 2);
  if ("idle" !== tmp3.kind) {
    anchor1 = tmp3.anchor;
  }
  const tmp6 = arg2 && isMentionAnchorValid(seenText, arg1, anchor1, arg3, allowSpaces);
  let tmp13 = null;
  if (tmp6) {
    tmp13 = anchor1;
  }
  let tmp14 = tmp;
  if (arg2) {
    const kind = tmp3.kind;
    if ("idle" === kind) {
      const lastIndexOfResult = seenText.lastIndexOf(arg3, arg1);
      let tmp19 = null;
      if (-1 !== lastIndexOfResult) {
        let tmp22 = null;
        const obj5 = autocompleter_AutocompleteUtils;
        if (obj5.isWhitespaceSeparatingBoundary(seenText, lastIndexOfResult)) {
          tmp22 = null;
          if (isMentionAnchorValid(seenText, arg1, lastIndexOfResult, arg3, allowSpaces)) {
            tmp22 = lastIndexOfResult;
          }
        }
        tmp19 = tmp22;
      }
      if (null != tmp19) {
        tmp = { kind: "pending", anchor: tmp19, seenText: null };
        const obj2 = { kind: "pending", anchor: tmp19, seenText: null };
      }
      tmp14 = tmp;
    } else if ("active" === kind) {
      let tmp17 = tmp;
      if (tmp6) {
        tmp17 = tmp3;
      }
      tmp14 = tmp17;
    } else if ("pending" === kind) {
      let tmp15;
      ({ anchor, seenText } = tmp3);
      if (tmp6) {
        tmp15 = { kind: "active", anchor };
        const obj3 = { kind: "active", anchor };
      } else if (seenText.startsWith(arg3, anchor)) {
        tmp15 = { kind: "pending", anchor, seenText: null };
        const obj4 = { kind: "pending", anchor, seenText: null };
      } else {
        tmp15 = tmp;
        if (anchor <= seenText.length) {
          let tmp16;
          if (null == seenText) {
            tmp16 = { kind: "pending", anchor, seenText };
            const obj6 = { kind: "pending", anchor, seenText };
          } else {
            tmp16 = tmp3;
            if (seenText !== seenText) {
              tmp16 = tmp;
            }
          }
          tmp15 = tmp16;
        }
      }
      tmp14 = tmp15;
    }
  }
  let tmp29 = tmp3.kind === tmp14.kind;
  if (tmp29) {
    let tmp30 = "idle" === tmp3.kind;
    if (!tmp30) {
      let tmp31;
      if ("active" === tmp3.kind) {
        tmp31 = "active" === tmp14.kind && tmp3.anchor === tmp14.anchor;
      } else {
        tmp31 = "pending" === tmp14.kind && tmp3.anchor === tmp14.anchor && tmp3.seenText === tmp14.seenText;
      }
      tmp30 = tmp31;
    }
    tmp29 = tmp30;
  }
  if (!tmp29) {
    tmp4(tmp14);
  }
  const obj7 = {
    anchor: tmp13,
    beginSearch: obj.useCallback((anchor) => {
      let tmp4;
      const tmp = closure_0;
      if (tmp) {
        const obj = { kind: "pending", anchor, seenText: null };
        tmp4 = tmp4(obj);
      }
    }, items)
  };
  items = [arg2];
  return obj7;
};
