// Module ID: 11495
// Function ID: 11496
// Name: ForumPostAppliedTags
// Dependencies: [19, 17, 21, 4836, 576, 10090, 2]
// Exports: ForumPostAppliedTagPills, ForumPostAppliedTags

// Module 11495 (ForumPostAppliedTags)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AppliedForumTag2 from "AppliedForumTag" /* 10090 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { pillTagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, tag: obj2, tagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, dot: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 4, width: 4, borderRadius: 10, marginHorizontal: 8 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostAppliedTags.tsx");

export const ForumPostAppliedTagPills = function ForumPostAppliedTagPills(additionalTagsCount) {
  let appliedTags;
  let hasUnreads;
  let items;
  let items1;
  let obj3;
  let tag;
  ({ appliedTags, hasUnreads } = additionalTagsCount);
  let num = additionalTagsCount.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  const containerStyle = additionalTagsCount.containerStyle;
  const tmp = closure_6();
  dependencyMap = tmp;
  let obj = { style: items, children: items1 };
  items = [containerStyle, tmp.pillTagsContainer];
  items1 = [
    appliedTags.map((tag) => {
      const obj = { tag, containerStyle: tag.tag, hasUnreads };
      return _false(AppliedForumTag2.AppliedForumTagPill, obj, tag.id);
    }),

  ];
  let tmp4 = num > 0;
  const tmp2 = closure_4;
  const tmp3 = View;
  if (tmp4) {
    const obj2 = { tag: obj3, containerStyle: tmp.tag, hasUnreads };
    const _HermesInternal = HermesInternal;
    obj3 = { id: "-1", name: "+" + num };
    const AppliedForumTagPill = hasUnreads(10090).AppliedForumTagPill;
    tmp4 = closure_3(AppliedForumTagPill, obj2);
  }
  items1[1] = tmp4;
  return tmp2(tmp3, obj);
};
export const ForumPostAppliedTags = function ForumPostAppliedTags(appliedTags) {
  let items;
  let items1;
  let items2;
  let obj5;
  appliedTags = appliedTags.appliedTags;
  const hasUnreads = appliedTags.hasUnreads;
  let num = appliedTags.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  const containerStyle = appliedTags.containerStyle;
  let tmp = closure_6();
  const dot = tmp;
  let tmp2 = closure_4;
  let tmp3 = dot;
  let obj = { style: items, children: items1 };
  items = [containerStyle, tmp.tagsContainer];
  items1 = [
    appliedTags.map((tag, index) => {
      const children = [, ];
      const obj = { tag, hasUnreads };
      children[0] = _false(AppliedForumTag2.AppliedForumTag, obj, tag.id);
      let tmp3Result = index !== appliedTags.length - 1;
      const tmp = React3;
      const tmp2 = hasOwnProperty;
      const tmp3 = _false;
      if (tmp3Result) {
        const obj2 = { style: dot.dot };
        tmp3Result = tmp3(View, obj2);
      }
      children[1] = tmp3Result;
      return tmp(tmp2, { children });
    }),

  ];
  let tmp2Result = num > 0;
  if (tmp2Result) {
    let obj2 = { children: items2 };
    const obj3 = { style: tmp.dot };
    items2 = [closure_3(tmp3, obj3), ];
    const obj4 = { tag: obj5, hasUnreads };
    const _HermesInternal = HermesInternal;
    obj5 = { id: "-1", name: "+" + num };
    const AppliedForumTag = appliedTags(hasUnreads[5]).AppliedForumTag;
    items2[1] = closure_3(AppliedForumTag, obj4);
    tmp2Result = tmp2(closure_5, obj2);
  }
  items1[1] = tmp2Result;
  return tmp2(tmp3, obj);
};
