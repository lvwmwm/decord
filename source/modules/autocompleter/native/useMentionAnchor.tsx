// Module ID: 11463
// Function ID: 89186
// Name: isMentionAnchorValid
// Dependencies: [57, 31, 653, 9593, 2]
// Exports: default

// Module 11463 (isMentionAnchorValid)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { WHITESPACE_RE } from "ME";

const require = arg1;
function isMentionAnchorValid(text, selectionEnd, anchor, prefix) {
  let startsWithResult = null != anchor;
  if (startsWithResult) {
    startsWithResult = anchor >= 0;
  }
  if (startsWithResult) {
    startsWithResult = text.startsWith(prefix, anchor);
  }
  if (startsWithResult) {
    startsWithResult = selectionEnd >= anchor + prefix.length;
  }
  if (startsWithResult) {
    startsWithResult = require(9593) /* getMentionTextWithUser */.isUnbrokenRun(text, anchor + prefix.length, selectionEnd);
    const obj = require(9593) /* getMentionTextWithUser */;
  }
  return startsWithResult;
}
function transition(first, enabled, enabled) {
  let anchor;
  let cleanupAnchor;
  let prefix;
  let search;
  let seenText;
  let selectionEnd;
  let text;
  let tmp = first;
  ({ text, selectionEnd, prefix } = enabled);
  if (enabled.enabled) {
    ({ search, cleanupAnchor } = tmp);
    const kind = search.kind;
    if ("idle" === kind) {
      const lastIndexOfResult = text.lastIndexOf(prefix, selectionEnd);
      let tmp13 = null;
      if (-1 !== lastIndexOfResult) {
        let obj10 = require(9593) /* getMentionTextWithUser */;
        let tmp16 = null;
        if (obj10.isWhitespaceSeparatingBoundary(text, lastIndexOfResult)) {
          tmp16 = null;
          if (isMentionAnchorValid(text, selectionEnd, lastIndexOfResult, prefix)) {
            tmp16 = lastIndexOfResult;
          }
        }
        tmp13 = tmp16;
      }
      if (null != tmp13) {
        let obj = {};
        obj = { kind: "pending", anchor: tmp13, seenText: null };
        obj.search = obj;
        obj.cleanupAnchor = null;
        let obj1 = obj;
      } else {
        obj1 = { search: obj };
        let tmp23 = null;
        if (text.includes(prefix)) {
          tmp23 = cleanupAnchor;
        }
        obj1.cleanupAnchor = tmp23;
      }
      return obj1;
    } else if ("active" === kind) {
      const obj2 = {};
      if (enabled) {
        obj2.search = search;
        obj2.cleanupAnchor = null;
        let tmp9 = obj2;
      } else {
        obj2.search = obj;
        anchor = null;
        if (text.includes(prefix)) {
          anchor = search.anchor;
        }
        obj2.cleanupAnchor = anchor;
        tmp9 = obj2;
      }
      return tmp9;
    } else if ("pending" === kind) {
      ({ anchor, seenText } = search);
      if (enabled) {
        const obj3 = {};
        const obj4 = { kind: "active", anchor };
        obj3.search = obj4;
        obj3.cleanupAnchor = cleanupAnchor;
        tmp = obj3;
      } else if (text.startsWith(prefix, anchor)) {
        const obj5 = {};
        const obj6 = { kind: "pending", anchor, seenText: null };
        obj5.search = obj6;
        obj5.cleanupAnchor = cleanupAnchor;
        tmp = obj5;
      } else if (anchor > text.length) {
        const obj7 = { search: obj, cleanupAnchor };
        tmp = obj7;
      } else if (null == seenText) {
        const obj8 = {};
        const obj9 = { kind: "pending", anchor, seenText: text };
        obj8.search = obj9;
        obj8.cleanupAnchor = cleanupAnchor;
        tmp = obj8;
      } else if (seenText !== text) {
        obj10 = { search: obj, cleanupAnchor };
        tmp = obj10;
      }
      return tmp;
    }
  } else {
    obj = {};
    obj.search = obj;
    obj.cleanupAnchor = null;
    return obj;
  }
}
let obj = { kind: "idle" };
let closure_6 = { search: obj, cleanupAnchor: null };
const result = require("ME").fileFinishedImporting("modules/autocompleter/native/useMentionAnchor.tsx");

export default function useMentionAnchor(text, selectionEnd, arg2, enabled, prefix) {
  let closure_0 = text;
  let closure_1 = arg2;
  const callback = enabled;
  const React = prefix;
  let tmp = callback(React.useState(closure_6), 2);
  const first = tmp[0];
  const WHITESPACE_RE = tmp3;
  const cleanupAnchor = first.cleanupAnchor;
  const search = first.search;
  let anchor = null;
  if ("idle" !== search.kind) {
    anchor = search.anchor;
  }
  let tmp5 = enabled;
  if (enabled) {
    tmp5 = isMentionAnchorValid(text, selectionEnd, anchor, prefix);
  }
  let tmp11 = null;
  if (tmp5) {
    tmp11 = anchor;
  }
  let obj = { enabled, text, selectionEnd, prefix };
  const tmp12 = transition(first, tmp5, obj);
  if (!(function sameState(first, cleanupAnchor2) {
    let tmp = first.cleanupAnchor === cleanupAnchor2.cleanupAnchor;
    if (tmp) {
      let anchor = first.search;
      let anchor2 = cleanupAnchor2.search;
      let tmp2 = anchor.kind === anchor2.kind;
      if (tmp2) {
        if ("idle" === anchor.kind) {
          tmp2 = tmp3;
        } else if ("active" === anchor.kind) {
          let tmp5 = "active" === anchor2.kind;
          if (tmp5) {
            anchor = anchor.anchor;
            anchor2 = anchor2.anchor;
            tmp5 = anchor === anchor2;
          }
          let tmp4 = tmp5;
        } else {
          tmp4 = "pending" === anchor2.kind && anchor.anchor === anchor2.anchor && anchor.seenText === anchor2.seenText;
        }
      }
      tmp = tmp2;
    }
    return tmp;
  })(first, tmp12)) {
    tmp3(tmp12);
  }
  const items = [cleanupAnchor, text, prefix, arg2];
  const effect = React.useEffect(() => {
    if (null != cleanupAnchor) {
      let index = cleanupAnchor;
      if (!text.startsWith(result, cleanupAnchor)) {
        index = arr.indexOf(tmp8);
      }
      if (index >= 0) {
        const substr = arr.slice(index);
        let searchResult = substr.search(closure_4);
        if (-1 === searchResult) {
          searchResult = arr.length - index;
        }
        const current = tmp9.current;
        const obj = { location: index, length: searchResult, text: "" };
        const current2 = tmp9.current;
        const applicationCommandManager = current2.getApplicationCommandManager();
        let editId;
        if (null != applicationCommandManager) {
          editId = applicationCommandManager.props.editId;
        }
        let tmp5;
        if (null != editId) {
          tmp5 = editId;
        }
        obj.editId = tmp5;
        current.replaceRange(obj);
      }
      tmp8 = result;
    }
  }, items);
  obj = { anchor: tmp11 };
  const items1 = [enabled];
  obj.beginSearch = React.useCallback((anchor) => {
    if (_slicedToArray) {
      let obj = {};
      obj = { kind: "pending", anchor, seenText: null };
      obj.search = obj;
      obj.cleanupAnchor = null;
      null(obj);
    }
  }, items1);
  return obj;
};
