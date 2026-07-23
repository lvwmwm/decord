// Module ID: 11137
// Function ID: 86665
// Name: ForumPostAppliedTagPills
// Dependencies: [31, 27, 33, 4130, 689, 9644, 2]
// Exports: ForumPostAppliedTagPills, ForumPostAppliedTags

// Module 11137 (ForumPostAppliedTagPills)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4, Fragment: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { pillTagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.tag = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.tagsContainer = { display: "flex", flexDirection: "row", alignItems: "center" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, height: 4, width: 4, borderRadius: 10, marginHorizontal: 8 };
_createForOfIteratorHelperLoose.dot = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/posts/ForumPostAppliedTags.tsx");

export const ForumPostAppliedTagPills = function ForumPostAppliedTagPills(additionalTagsCount) {
  let appliedTags;
  let hasUnreads;
  ({ appliedTags, hasUnreads } = additionalTagsCount);
  let num = additionalTagsCount.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  let dependencyMap;
  const tmp = _createForOfIteratorHelperLoose();
  dependencyMap = tmp;
  let obj = { style: items };
  items = [additionalTagsCount.containerStyle, tmp.pillTagsContainer];
  const items1 = [appliedTags.map((id) => outer1_3(hasUnreads(_undefined[5]).AppliedForumTagPill, { tag: id, containerStyle: _undefined.tag, hasUnreads }, id.id)), ];
  let tmp4 = num > 0;
  if (tmp4) {
    obj = {};
    obj = { id: "-1" };
    const _HermesInternal = HermesInternal;
    obj.name = "+" + num;
    obj.tag = obj;
    obj.containerStyle = tmp.tag;
    obj.hasUnreads = hasUnreads;
    tmp4 = callback(hasUnreads(9644).AppliedForumTagPill, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return closure_4(View, obj);
};
export const ForumPostAppliedTags = function ForumPostAppliedTags(appliedTags) {
  appliedTags = appliedTags.appliedTags;
  const hasUnreads = appliedTags.hasUnreads;
  let num = appliedTags.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  let c2;
  const tmp = _createForOfIteratorHelperLoose();
  c2 = tmp;
  let obj = { style: items };
  items = [appliedTags.containerStyle, tmp.tagsContainer];
  const items1 = [
    appliedTags.map((id) => {
      let obj = {};
      obj = { tag: id, hasUnreads };
      const items = [outer1_3(appliedTags(hasUnreads[5]).AppliedForumTag, obj, id.id), ];
      let tmp3 = arg1 !== appliedTags.length - 1;
      if (tmp3) {
        obj = { style: _undefined.dot };
        tmp3 = outer1_3(_undefined, obj);
      }
      items[1] = tmp3;
      obj.children = items;
      return outer1_4(outer1_5, obj);
    }),

  ];
  let tmp4 = num > 0;
  if (tmp4) {
    obj = {};
    obj = { style: tmp.dot };
    const items2 = [callback(c2, obj), ];
    const obj1 = {};
    const obj2 = { id: "-1" };
    const _HermesInternal = HermesInternal;
    obj2.name = "+" + num;
    obj1.tag = obj2;
    obj1.hasUnreads = hasUnreads;
    items2[1] = callback(appliedTags(hasUnreads[5]).AppliedForumTag, obj1);
    obj.children = items2;
    tmp4 = callback2(closure_5, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return callback2(c2, obj);
};
