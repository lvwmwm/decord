// Module ID: 9853
// Function ID: 76223
// Name: ForumPostTagsActionSheet
// Dependencies: [57, 31, 27, 6050, 33, 4165, 1212, 6033, 5533, 5220, 9854, 4578, 9111, 4133, 2]
// Exports: default

// Module 9853 (ForumPostTagsActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { MAX_FORUM_POST_TAGS } from "FORUM_GUIDELINES_ACTION_SHEET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ tagsContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap" }, saveButton: { marginTop: 8, marginHorizontal: 16, marginBottom: 16 }, subtitle: { marginTop: 4 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/ForumPostTagsActionSheet.tsx");

export default function ForumPostTagsActionSheet(thread) {
  let _slicedToArray;
  let dependencyMap;
  let tags;
  let title;
  thread = thread.thread;
  let flag = thread.canManageThread;
  if (flag === undefined) {
    flag = true;
  }
  ({ onSave: dependencyMap, title } = thread);
  if (title === undefined) {
    const intl = thread(1212).intl;
    title = intl.string(thread(1212).t["436ZFw"]);
  }
  ({ tags, onClose: _slicedToArray } = thread);
  let first;
  let closure_5;
  let closure_6;
  function toggleTag(closure_5, arg1) {
    if (null != closure_5) {
      const _Set = Set;
      const set = new Set(first);
      if (set.has(closure_5)) {
        set.delete(closure_5);
        callback3(set);
      } else if (!closure_6) {
        set.add(closure_5);
      }
    }
  }
  const tmp3 = callback3();
  let obj = thread(6033);
  let appliedTags = obj.useAppliedTags(thread);
  if (null != tags) {
    appliedTags = tags;
  }
  const tmp7 = callback(first.useState(new Set(appliedTags)), 2);
  first = tmp7[0];
  closure_5 = tmp7[1];
  closure_6 = first.size >= closure_6;
  let obj1 = thread(6033);
  const visibleForumTags = obj1.useVisibleForumTags(thread.parentChannel);
  obj = {
    onDismiss() {
      let tmp;
      if (null != callback2) {
        tmp = callback2();
      }
      return tmp;
    }
  };
  obj = { title };
  const intl2 = thread(1212).intl;
  obj.subtitle = intl2.string(thread(1212).t["+HS9+m"]);
  obj.subtitleStyle = tmp3.subtitle;
  obj.header = toggleTag(thread(5220).BottomSheetTitleHeader, obj);
  obj1 = {
    style: tmp3.tagsContainer,
    children: visibleForumTags.map((id) => {
      const hasItem = first.has(id);
      const obj = { tag: id };
      let tmp4 = !flag;
      if (!tmp4) {
        let tmp5 = closure_6;
        if (closure_6) {
          tmp5 = !hasItem;
        }
        tmp4 = tmp5;
      }
      obj.disabled = tmp4;
      obj.onPress = toggleTag;
      obj.selected = hasItem;
      return toggleTag(flag(outer1_2[10]), obj, id.id);
    })
  };
  let items = [toggleTag(closure_5, obj1), ];
  const obj2 = { style: tmp3.saveButton };
  const obj3 = {};
  const intl3 = thread(1212).intl;
  obj3.text = intl3.string(thread(1212).t["R3BPH+"]);
  obj3.onPress = function onPress() {
    Array.from(first);
    if (null != callback) {
      const items = [];
      HermesBuiltin.arraySpread(first, 0);
      callback(items);
    } else if (null != thread) {
      flag(outer1_2[12]).updateForumPostTags(thread.id, tmp2);
      const obj = flag(outer1_2[12]);
    }
    flag(outer1_2[13]).hideActionSheet();
  };
  obj2.children = toggleTag(thread(4578).Button, obj3);
  items[1] = toggleTag(closure_5, obj2);
  obj.children = items;
  return callback2(thread(5533).ActionSheet, obj);
};
