// Module ID: 11120
// Function ID: 86567
// Name: ForumPostAppliedTagPills
// Dependencies: []
// Exports: ForumPostAppliedTagPills, ForumPostAppliedTags

// Module 11120 (ForumPostAppliedTagPills)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4, Fragment: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { pillTagsContainer: { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}" } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.tag = obj;
obj.tagsContainer = { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}" };
const tmp3 = arg1(dependencyMap[2]);
obj.dot = { backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
let closure_6 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/forums/native/posts/ForumPostAppliedTags.tsx");

export const ForumPostAppliedTagPills = function ForumPostAppliedTagPills(additionalTagsCount) {
  let appliedTags;
  let hasUnreads;
  ({ appliedTags, hasUnreads } = additionalTagsCount);
  const arg1 = hasUnreads;
  let num = additionalTagsCount.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  let dependencyMap;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = { style: items };
  const items = [additionalTagsCount.containerStyle, tmp.pillTagsContainer];
  const items1 = [appliedTags.map((id) => callback(hasUnreads(tmp[5]).AppliedForumTagPill, { tag: id, containerStyle: tmp.tag, hasUnreads }, id.id)), ];
  let tmp4 = num > 0;
  if (tmp4) {
    obj = {};
    obj = { id: "-1" };
    const _HermesInternal = HermesInternal;
    obj.name = "+" + num;
    obj.tag = obj;
    obj.containerStyle = tmp.tag;
    obj.hasUnreads = hasUnreads;
    tmp4 = callback(arg1(dependencyMap[5]).AppliedForumTagPill, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return closure_4(View, obj);
};
export const ForumPostAppliedTags = function ForumPostAppliedTags(appliedTags) {
  appliedTags = appliedTags.appliedTags;
  const arg1 = appliedTags;
  const hasUnreads = appliedTags.hasUnreads;
  const dependencyMap = hasUnreads;
  let num = appliedTags.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  let View;
  const tmp = callback3();
  View = tmp;
  let obj = { style: items };
  const items = [appliedTags.containerStyle, tmp.tagsContainer];
  const items1 = [
    appliedTags.map((id) => {
      let obj = {};
      obj = { tag: id, hasUnreads };
      const items = [callback(appliedTags(hasUnreads[5]).AppliedForumTag, obj, id.id), ];
      let tmp3 = arg1 !== appliedTags.length - 1;
      if (tmp3) {
        obj = { style: tmp.dot };
        tmp3 = callback(tmp, obj);
      }
      items[1] = tmp3;
      obj.children = items;
      return closure_4(closure_5, obj);
    }),

  ];
  let tmp4 = num > 0;
  if (tmp4) {
    obj = {};
    obj = { style: tmp.dot };
    const items2 = [callback(View, obj), ];
    const obj1 = {};
    const obj2 = { id: "-1" };
    const _HermesInternal = HermesInternal;
    obj2.name = "+" + num;
    obj1.tag = obj2;
    obj1.hasUnreads = hasUnreads;
    items2[1] = callback(arg1(dependencyMap[5]).AppliedForumTag, obj1);
    obj.children = items2;
    tmp4 = callback2(closure_5, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return callback2(View, obj);
};
