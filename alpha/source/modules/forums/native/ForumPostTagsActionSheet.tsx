// Module ID: 11120
// Function ID: 11121
// Name: ForumPostTagsActionSheet
// Dependencies: [32, 19, 17, 7448, 21, 5009, 1114, 7450, 7360, 7315, 11121, 5629, 9819, 5253, 2]
// Exports: default

// Module 11120 (ForumPostTagsActionSheet)
import react_native from "react-native" /* 17 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ForumConstants from "ForumConstants" /* 7448 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9819 */;
import AvailableForumTagDefault from "AvailableForumTag" /* 11121 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let set;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const MAX_FORUM_POST_TAGS = ForumConstants.MAX_FORUM_POST_TAGS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ tagsContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap" }, saveButton: { marginTop: 8, marginHorizontal: 16, marginBottom: 16 }, subtitle: { marginTop: 4 } });
const result = size.fileFinishedImporting("modules/forums/native/ForumPostTagsActionSheet.tsx");

export default function ForumPostTagsActionSheet(thread) {
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
    const intl = thread(1114).intl;
    title = intl.string(thread(1114).t["436ZFw"]);
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
  let obj = thread(7450);
  let appliedTags = obj.useAppliedTags(thread);
  const useState = first.useState;
  let _Set = Set;
  if (null != tags) {
    appliedTags = tags;
  }
  const _Set1 = new _Set(appliedTags);
  [first, closure_5] = useState(_Set1);
  closure_6 = first.size >= closure_6;
  const tmp4Result = tmp4(7450);
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
  const ActionSheet = tmp4(7360).ActionSheet;
  obj3 = { title, subtitle: intl2.string(tmp4(1114).t["+HS9+m"]), subtitleStyle: tmp3.subtitle };
  BottomSheetTitleHeader = tmp4(7315).BottomSheetTitleHeader;
  intl2 = tmp4(1114).intl;
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
    text: intl3.string(tmp4(1114).t["R3BPH+"]),
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
  Button = tmp4(5629).Button;
  intl3 = tmp4(1114).intl;
  items[1] = toggleTag(closure_5, obj5);
  return closure_8(ActionSheet, obj2);
};
