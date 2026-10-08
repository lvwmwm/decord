// Module ID: 10438
// Function ID: 10439
// Name: ForumPostTagsActionSheet
// Dependencies: [32, 19, 17, 6961, 21, 5090, 558, 576, 1126, 6963, 9263, 5054, 6828, 10439, 5375, 6885, 2]

// Module 10438 (ForumPostTagsActionSheet)
import react_native from "react-native" /* 17 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ForumConstants from "ForumConstants" /* 6961 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9263 */;
import AvailableForumTagDefault from "AvailableForumTag" /* 10439 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onPress, set;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const MAX_FORUM_POST_TAGS = ForumConstants.MAX_FORUM_POST_TAGS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ tagsContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap" }, saveButton: { marginTop: 8, marginHorizontal: 16, marginBottom: 16 }, subtitle: { marginTop: 4 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostTagsActionSheet(thread) {
  let canManageThread;
  let first;
  let onClose;
  let onSave;
  let tags;
  let title;
  let tmp5;
  let tmp9;
  let tmp = thread;
  let tmp2 = onClose;
  let obj = thread(onClose[7]);
  const cResult = obj.c(42);
  thread = thread.thread;
  ({ canManageThread, onSave } = thread);
  ({ title, tags, onClose } = thread);
  let tmp4 = undefined === canManageThread;
  const parentChannel = thread.parentChannel;
  if (!tmp4) {
    tmp4 = canManageThread;
  }
  canManageThread = tmp4;
  if (cResult[0] !== title) {
    let stringResult = title;
    if (undefined === title) {
      const intl = tmp(tmp2[8]).intl;
      stringResult = intl.string(tmp(tmp2[8]).t["436ZFw"]);
    }
    cResult[0] = title;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_9();
  const tmpResult = tmp(tmp2[9]);
  let appliedTags = tmpResult.useAppliedTags(thread);
  if (null != tags) {
    appliedTags = tags;
  }
  if (cResult[2] !== appliedTags) {
    let _Set = Set;
    let self = this;
    let self2 = this;
    set = new Set(appliedTags);
    cResult[2] = appliedTags;
    cResult[3] = set;
    tmp9 = set;
  } else {
    tmp9 = cResult[3];
  }
  const tmp14 = canManageThread(first.useState(tmp9), 2);
  first = tmp14[0];
  let closure_5 = tmp14[1];
  let closure_6 = tmp16;
  const tmpResult2 = tmp(tmp2[9]);
  const visibleForumTags = tmpResult2.useVisibleForumTags(parentChannel);
  if (cResult[4] === first.size >= closure_6) {
    let tmp18;
    if (cResult[5] === first) {
      tmp18 = cResult[6];
    }
    onPress = tmp18;
    if (cResult[7] === onSave) {
      if (cResult[8] === first) {
        let tmp23;
        if (cResult[11] !== onClose) {
          class E {
            constructor() {
              let tmp;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            }
          }
          cResult[11] = onClose;
          cResult[12] = E;
        } else {
          class E {
            constructor() {
              let tmp;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              let tmp;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            }
          }
          const stringResult1 = obj4.string(tmp(tmp2[8]).t["+HS9+m"]);
          cResult[13] = stringResult1;
          tmp23 = stringResult1;
        } else {
          class E {
            constructor() {
              let tmp;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            }
          }
        }
        if (cResult[14] === tmp7.subtitle) {
          class E {
            constructor() {
              let tmp;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            }
          }
          if (cResult[17] === first.size >= closure_6) {
            class E {
              constructor() {
                let tmp;
                if (onClose != null) {
                  tmp = onClose();
                }
                return tmp;
              }
            }
          }
          if (cResult[23] === first.size >= closure_6) {
            class E {
              constructor() {
                let tmp;
                if (onClose != null) {
                  tmp = onClose();
                }
                return tmp;
              }
            }
          }
          class X {
            constructor(tag) {
              let tmp4;
              const hasItem = first.has(tag);
              const obj = { tag, disabled: tmp4, onPress, selected: hasItem };
              tmp4 = !canManageThread;
              const tmp2 = metroImportDefault;
              const tmp3 = AvailableForumTagDefault;
              if (canManageThread) {
                tmp4 = closure_6 && !hasItem;
              }
              return tmp2(tmp3, obj, tag.id);
            }
          }
          cResult[23] = first.size >= closure_6;
          cResult[24] = tmp4;
          cResult[25] = first;
          cResult[26] = tmp18;
          cResult[27] = X;
        }
        let obj2 = { title: tmp5, subtitle: tmp23, subtitleStyle: tmp7.subtitle };
        cResult[14] = tmp7.subtitle;
        cResult[15] = tmp5;
        cResult[16] = onPress(tmp(tmp2[12]).BottomSheetTitleHeader, obj2);
        const tmp27 = onPress(tmp(tmp2[12]).BottomSheetTitleHeader, obj2);
      }
    }
    cResult[7] = onSave;
    cResult[8] = first;
    cResult[9] = thread;
    cResult[10] = tmp20;
  }
  function toggleTag(arg0) {
    if (null != arg0) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(first);
      if (set.has(arg0)) {
        set.delete(arg0);
      } else {
        const tmp4 = closure_6;
        if (!tmp4) {
          set.add(arg0);
        }
      }
      closure_5(set);
    }
  }
  cResult[4] = first.size >= closure_6;
  cResult[5] = first;
  cResult[6] = toggleTag;
  tmp18 = toggleTag;
}) : (function ForumPostTagsActionSheet(thread) {
  let BottomSheetTitleHeader;
  let Button;
  let closure_5;
  let first;
  let intl2;
  let intl3;
  let items;
  let obj3;
  let obj6;
  let tags;
  let title;
  thread = thread.thread;
  let flag = thread.canManageThread;
  const parentChannel = thread.parentChannel;
  if (flag === undefined) {
    flag = true;
  }
  ({ onSave: dependencyMap, title } = thread);
  if (title === undefined) {
    let tmp = thread;
    let tmp2 = dependencyMap;
    const intl = thread(1126).intl;
    title = intl.string(thread(1126).t["436ZFw"]);
  }
  ({ tags, onClose: _slicedToArray } = thread);
  first = undefined;
  closure_5 = undefined;
  let closure_6;
  function toggleTag(BottomSheetTitleHeader) {
    if (null != BottomSheetTitleHeader) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(first);
      if (set.has(BottomSheetTitleHeader)) {
        set.delete(BottomSheetTitleHeader);
      } else {
        const tmp4 = closure_6;
        if (!tmp4) {
          set.add(BottomSheetTitleHeader);
        }
      }
      closure_5(set);
    }
  }
  let tmp3 = closure_9();
  let tmp4 = thread;
  const tmp5 = dependencyMap;
  let obj = thread(6963);
  let appliedTags = obj.useAppliedTags(thread);
  const useState = first.useState;
  let _Set = Set;
  if (null != tags) {
    appliedTags = tags;
  }
  const _Set1 = new _Set(appliedTags);
  [first, closure_5] = useState(_Set1);
  closure_6 = first.size >= closure_6;
  const tmp4Result = tmp4(6963);
  const visibleForumTags = tmp4Result.useVisibleForumTags(parentChannel);
  let obj2 = {
    onDismiss() {
      let tmp;
      if (_slicedToArray != null) {
        tmp = _slicedToArray();
      }
      return tmp;
    },
    header: toggleTag(BottomSheetTitleHeader, obj3),
    children: items
  };
  const ActionSheet = tmp4(6885).ActionSheet;
  obj3 = { title, subtitle: intl2.string(tmp4(1126).t["+HS9+m"]), subtitleStyle: tmp3.subtitle };
  BottomSheetTitleHeader = tmp4(6828).BottomSheetTitleHeader;
  intl2 = tmp4(1126).intl;
  items = [, ];
  const obj4 = {
    style: tmp3.tagsContainer,
    children: visibleForumTags.map((tag) => {
      let tmp4;
      const hasItem = first.has(tag);
      const obj = { tag, disabled: tmp4, onPress: toggleTag, selected: hasItem };
      tmp4 = !flag;
      const tmp2 = metroImportDefault;
      const tmp3 = AvailableForumTagDefault;
      if (flag) {
        tmp4 = closure_6 && !hasItem;
      }
      return tmp2(tmp3, obj, tag.id);
    })
  };
  items[0] = toggleTag(closure_5, obj4);
  const obj5 = { style: tmp3.saveButton, children: toggleTag(Button, obj6) };
  obj6 = {
    text: intl3.string(tmp4(1126).t["R3BPH+"]),
    onPress: function handleSave() {
      Array.from(first);
      if (null != dependencyMap) {
        const items = [];
        HermesBuiltin.arraySpread(items, first, 0);
        tmp5(items);
      } else if (null != thread) {
        const obj = ForumActionCreatorsDefault;
        obj.updateForumPostTags(tmp6.id, tmp4);
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  };
  Button = tmp4(5375).Button;
  intl3 = tmp4(1126).intl;
  items[1] = toggleTag(closure_5, obj5);
  return closure_8(ActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/forums/native/ForumPostTagsActionSheet.tsx");

export default tmp3;
