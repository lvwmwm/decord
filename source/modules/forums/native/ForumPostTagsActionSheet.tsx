// Module ID: 9849
// Function ID: 76239
// Name: ForumPostTagsActionSheet
// Dependencies: []
// Exports: default

// Module 9849 (ForumPostTagsActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const MAX_FORUM_POST_TAGS = arg1(dependencyMap[3]).MAX_FORUM_POST_TAGS;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ tagsContainer: { Symbol: 285213929, justifyContent: 815361, Icon: -1974403072 }, saveButton: {}, subtitle: { marginTop: 4 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/forums/native/ForumPostTagsActionSheet.tsx");

export default function ForumPostTagsActionSheet(thread) {
  let tags;
  let title;
  thread = thread.thread;
  const arg1 = thread;
  let flag = thread.canManageThread;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  ({ onSave: closure_2, title } = thread);
  if (title === undefined) {
    const intl = arg1(dependencyMap[6]).intl;
    title = intl.string(arg1(dependencyMap[6]).t.436ZFw);
  }
  ({ tags, onClose: closure_3 } = thread);
  let React;
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
  let obj = arg1(dependencyMap[7]);
  let appliedTags = obj.useAppliedTags(thread);
  if (null != tags) {
    appliedTags = tags;
  }
  const tmp7 = callback(React.useState(new Set(appliedTags)), 2);
  const first = tmp7[0];
  React = first;
  closure_5 = tmp7[1];
  closure_6 = first.size >= closure_6;
  let obj1 = arg1(dependencyMap[7]);
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
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.subtitle = intl2.string(arg1(dependencyMap[6]).t.+HS9+m);
  obj.subtitleStyle = tmp3.subtitle;
  obj.header = toggleTag(arg1(dependencyMap[9]).BottomSheetTitleHeader, obj);
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
      return toggleTag(flag(closure_2[10]), obj, id.id);
    })
  };
  const items = [toggleTag(closure_5, obj1), ];
  const obj2 = { style: tmp3.saveButton };
  const obj3 = {};
  const intl3 = arg1(dependencyMap[6]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[6]).t.R3BPH+);
  obj3.onPress = function onPress() {
    Array.from(first);
    if (null != callback) {
      const items = [];
      HermesBuiltin.arraySpread(first, 0);
      callback(items);
    } else if (null != thread) {
      flag(callback[12]).updateForumPostTags(thread.id, tmp2);
      const obj = flag(callback[12]);
    }
    flag(callback[13]).hideActionSheet();
  };
  obj2.children = toggleTag(arg1(dependencyMap[11]).Button, obj3);
  items[1] = toggleTag(closure_5, obj2);
  obj.children = items;
  return callback2(arg1(dependencyMap[8]).ActionSheet, obj);
};
