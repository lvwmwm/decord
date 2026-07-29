// Module ID: 11489
// Function ID: 11490
// Name: useMentionAnchor
// Dependencies: [32, 19, 676, 9578, 2]
// Exports: default

// Module 11489 (useMentionAnchor)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { WHITESPACE_RE } from "ME";

const require = arg1;
let obj = { kind: "idle" };
let closure_6 = { search: obj, cleanupAnchor: null };
const result = require("ME").fileFinishedImporting("modules/autocompleter/native/useMentionAnchor.tsx");

export default function useMentionAnchor(c23) {
  let anchor3;
  let cleanupAnchor2;
  let search2;
  let seenText;
  let tmp2;
  let tmp3;
  const _require = c23;
  const dependencyMap = arg2;
  const callback = arg3;
  const React = arg4;
  let obj = React;
  [tmp2, tmp3] = callback(React.useState(closure_6), 2);
  const WHITESPACE_RE = tmp3;
  const cleanupAnchor = tmp2.cleanupAnchor;
  const search = tmp2.search;
  let anchor = null;
  if ("idle" !== search.kind) {
    anchor = search.anchor;
  }
  let tmp5 = arg3;
  if (arg3) {
    let startsWithResult = null != anchor;
    if (startsWithResult) {
      startsWithResult = anchor >= 0;
    }
    if (startsWithResult) {
      startsWithResult = c23.startsWith(arg4, anchor);
    }
    if (startsWithResult) {
      startsWithResult = arg1 >= anchor + arg4.length;
    }
    if (startsWithResult) {
      let obj1 = _require(9578);
      startsWithResult = obj1.isUnbrokenRun(c23, anchor + arg4.length, arg1);
    }
    tmp5 = startsWithResult;
  }
  let tmp9 = null;
  if (tmp5) {
    tmp9 = anchor;
  }
  if (arg3) {
    ({ search: search2, cleanupAnchor: cleanupAnchor2 } = tmp2);
    const kind = search2.kind;
    if ("idle" === kind) {
      const lastIndexOfResult = c23.lastIndexOf(arg4, arg1);
      let tmp18 = null;
      if (-1 !== lastIndexOfResult) {
        let tmp20 = null;
        if (obj18.isWhitespaceSeparatingBoundary(c23, lastIndexOfResult)) {
          let startsWithResult1 = null != lastIndexOfResult;
          if (startsWithResult1) {
            startsWithResult1 = lastIndexOfResult >= 0;
          }
          if (startsWithResult1) {
            startsWithResult1 = c23.startsWith(arg4, lastIndexOfResult);
          }
          if (startsWithResult1) {
            startsWithResult1 = arg1 >= lastIndexOfResult + arg4.length;
          }
          if (startsWithResult1) {
            startsWithResult1 = tmp32(9578).isUnbrokenRun(c23, lastIndexOfResult + arg4.length, arg1);
            const tmp32Result = tmp32(9578);
          }
          tmp20 = null;
          if (startsWithResult1) {
            tmp20 = lastIndexOfResult;
          }
        }
        tmp18 = tmp20;
        obj18 = _require(9578);
        tmp32 = _require;
      }
      if (null != tmp18) {
        obj = { search: null, cleanupAnchor: null };
        obj = { kind: "pending", anchor: null, seenText: null };
        obj[1] = tmp18;
        obj[0] = obj;
        obj1 = obj;
      } else {
        obj1 = { search: null, cleanupAnchor: null };
        obj1[0] = cleanupAnchor;
        let tmp22 = null;
        if (c23.includes(arg4)) {
          tmp22 = cleanupAnchor2;
        }
        obj1[1] = tmp22;
      }
    } else if ("active" === kind) {
      const obj2 = { search: null, cleanupAnchor: null };
      if (tmp5) {
        obj2[0] = search2;
        let tmp16 = obj2;
      } else {
        obj2[0] = cleanupAnchor;
        let anchor1 = null;
        if (c23.includes(arg4)) {
          anchor1 = search2.anchor;
        }
        obj2[1] = anchor1;
        tmp16 = obj2;
      }
      let obj11 = tmp16;
    } else if ("pending" === kind) {
      ({ anchor: anchor3, seenText } = search2);
      if (tmp5) {
        const obj3 = { search: null, cleanupAnchor: null };
        const obj4 = { kind: "active", anchor: null };
        obj4[1] = anchor3;
        obj3[0] = obj4;
        obj3[1] = cleanupAnchor2;
        let tmp11 = obj3;
      } else if (c23.startsWith(arg4, anchor3)) {
        const obj5 = { search: null, cleanupAnchor: null };
        const obj6 = { kind: "pending", anchor: null, seenText: null };
        obj6[1] = anchor3;
        obj5[0] = obj6;
        obj5[1] = cleanupAnchor2;
        tmp11 = obj5;
      } else if (anchor3 > c23.length) {
        const obj7 = { search: null, cleanupAnchor: null };
        obj7[0] = cleanupAnchor;
        obj7[1] = cleanupAnchor2;
        tmp11 = obj7;
      } else if (null == seenText) {
        const obj8 = { search: null, cleanupAnchor: null };
        const obj9 = { kind: "pending", anchor: null, seenText: null };
        obj9[1] = anchor3;
        obj9[2] = c23;
        obj8[0] = obj9;
        obj8[1] = cleanupAnchor2;
        tmp11 = obj8;
      } else {
        tmp11 = tmp2;
        if (seenText !== c23) {
          const obj10 = { search: null, cleanupAnchor: null };
          obj10[0] = cleanupAnchor;
          obj10[1] = cleanupAnchor2;
          tmp11 = obj10;
        }
      }
      obj11 = tmp11;
    }
  } else {
    obj11 = { search: null, cleanupAnchor: null };
    obj11[0] = cleanupAnchor;
  }
  let tmp24 = tmp2.cleanupAnchor === obj11.cleanupAnchor;
  if (tmp24) {
    anchor = tmp2.search;
    let anchor2 = obj11.search;
    let tmp25 = anchor.kind === anchor2.kind;
    if (tmp25) {
      if ("idle" === anchor.kind) {
        tmp25 = tmp26;
      } else if ("active" === anchor.kind) {
        let tmp28 = "active" === anchor2.kind;
        if (tmp28) {
          anchor = anchor.anchor;
          anchor2 = anchor2.anchor;
          tmp28 = anchor === anchor2;
        }
        let tmp27 = tmp28;
      } else {
        tmp27 = "pending" === anchor2.kind && anchor.anchor === anchor2.anchor && anchor.seenText === anchor2.seenText;
      }
    }
    tmp24 = tmp25;
  }
  if (!tmp24) {
    tmp3(obj11);
  }
  const items = [cleanupAnchor, c23, arg4, arg2];
  const effect = obj.useEffect(() => {
    if (null != cleanupAnchor) {
      let index = tmp;
      if (!closure_0.startsWith(noop, tmp)) {
        index = arr.indexOf(tmp7);
      }
      if (index >= 0) {
        const substr = arr.slice(index);
        let searchResult = substr.search(closure_4);
        if (-1 === searchResult) {
          searchResult = arr.length - index;
        }
        const current = tmp8.current;
        const obj = { location: null, length: null, text: "", editId: null };
        obj[0] = index;
        obj[1] = searchResult;
        const current2 = tmp8.current;
        const applicationCommandManager = current2.getApplicationCommandManager();
        let editId;
        if (applicationCommandManager != null) {
          editId = applicationCommandManager.props.editId;
        }
        obj[3] = editId;
        current.replaceRange(obj);
      }
      tmp7 = noop;
    }
  }, items);
  const tmp = callback(React.useState(closure_6), 2);
  const items1 = [arg3];
  return {
    anchor: tmp9,
    beginSearch: obj.useCallback((arg0) => {
      if (_slicedToArray) {
        let obj = { search: null, cleanupAnchor: null };
        obj = { kind: "pending", anchor: null, seenText: null };
        obj[1] = arg0;
        obj[0] = obj;
        tmp3 = tmp3(obj);
      }
    }, items1)
  };
};
