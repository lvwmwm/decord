// Module ID: 11688
// Function ID: 11689
// Name: ForumPostAppliedTags
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 10014, 2]

// Module 11688 (ForumPostAppliedTags)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AppliedForumTag2 from "AppliedForumTag" /* 10014 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, obj1;

let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let size;
let View = react_native.View;
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { pillTagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, tag: obj2, tagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, dot: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 4, width: 4, borderRadius: 10, marginHorizontal: 8 };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostAppliedTagPills(arg0) {
  let additionalTagsCount;
  let appliedTags;
  let containerStyle;
  let hasUnreads;
  let items;
  let obj4;
  let tag;
  let obj = hasUnreads(576);
  const cResult = obj.c(18);
  const tmp = hasUnreads;
  ({ appliedTags, hasUnreads } = arg0);
  ({ additionalTagsCount, containerStyle } = arg0);
  let num = 0;
  if (undefined !== additionalTagsCount) {
    num = additionalTagsCount;
  }
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  if (cResult[0] === containerStyle) {
    let tmp5;
    let tmp6;
    if (cResult[1] === tmp4.pillTagsContainer) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === appliedTags) {
      if (cResult[4] === hasUnreads) {
        if (cResult[5] === tmp4.tag) {
          tmp6 = cResult[6];
        }
        if (cResult[10] === num) {
          if (cResult[11] === hasUnreads) {
            let tmp9;
            if (cResult[12] === tmp4.tag) {
              tmp9 = cResult[13];
            }
            if (cResult[14] === tmp5) {
              if (cResult[15] === tmp6) {
                let tmp13;
                if (cResult[16] === tmp9) {
                  tmp13 = cResult[17];
                }
                return tmp13;
              }
            }
            const obj2 = { style: tmp5, children: items };
            items = [tmp6, tmp9];
            const tmp16 = closure_4(View, obj2);
            cResult[14] = tmp5;
            cResult[15] = tmp6;
            cResult[16] = tmp9;
            cResult[17] = tmp16;
            tmp13 = tmp16;
          }
        }
        let tmp10 = num > 0;
        if (tmp10) {
          const obj3 = { tag: obj4, containerStyle: tmp4.tag, hasUnreads };
          const _HermesInternal = HermesInternal;
          obj4 = { id: "-1", name: "+" + num };
          const AppliedForumTagPill = tmp(10014).AppliedForumTagPill;
          tmp10 = closure_3(AppliedForumTagPill, obj3);
        }
        cResult[10] = num;
        cResult[11] = hasUnreads;
        cResult[12] = tmp4.tag;
        cResult[13] = tmp10;
        tmp9 = tmp10;
      }
    }
    if (cResult[7] === hasUnreads) {
      let tmp7;
      if (cResult[8] === tmp4.tag) {
        tmp7 = cResult[9];
      }
      const mapped = appliedTags.map(tmp7);
      cResult[3] = appliedTags;
      cResult[4] = hasUnreads;
      cResult[5] = tmp4.tag;
      cResult[6] = mapped;
      tmp6 = mapped;
    }
    const fn = function u(tag) {
      const obj = { tag, containerStyle: tag.tag, hasUnreads };
      return _false(AppliedForumTag2.AppliedForumTagPill, obj, tag.id);
    };
    cResult[7] = hasUnreads;
    cResult[8] = tmp4.tag;
    cResult[9] = fn;
    tmp7 = fn;
  }
  const items1 = [containerStyle, tmp4.pillTagsContainer];
  cResult[0] = containerStyle;
  cResult[1] = tmp4.pillTagsContainer;
  cResult[2] = items1;
  tmp5 = items1;
}) : (function ForumPostAppliedTagPills(additionalTagsCount) {
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
    const AppliedForumTagPill = hasUnreads(10014).AppliedForumTagPill;
    tmp4 = closure_3(AppliedForumTagPill, obj2);
  }
  items1[1] = tmp4;
  return tmp2(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostAppliedTags(appliedTags) {
  let additionalTagsCount;
  let containerStyle;
  let dot;
  let hasUnreads;
  let items;
  let obj = appliedTags(hasUnreads[6]);
  const cResult = obj.c(19);
  appliedTags = appliedTags.appliedTags;
  hasUnreads = appliedTags.hasUnreads;
  ({ additionalTagsCount, containerStyle } = appliedTags);
  let num = 0;
  if (undefined !== additionalTagsCount) {
    num = additionalTagsCount;
  }
  let tmp2 = closure_6();
  View = tmp2;
  if (cResult[0] === containerStyle) {
    let tmp3;
    let tmp4;
    if (cResult[1] === tmp2.tagsContainer) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === appliedTags) {
      if (cResult[4] === hasUnreads) {
        if (cResult[5] === tmp2.dot) {
          tmp4 = cResult[6];
        }
        if (cResult[11] === num) {
          if (cResult[12] === hasUnreads) {
            let tmp7;
            if (cResult[13] === tmp2.dot) {
              tmp7 = cResult[14];
            }
            if (cResult[15] === tmp3) {
              if (cResult[16] === tmp4) {
                let tmp9;
                if (cResult[17] === tmp7) {
                  tmp9 = cResult[18];
                }
                return tmp9;
              }
            }
            class T {
              constructor(arg0, arg1) {
                tmp = jsxs;
                tmp2 = Fragment;
                tmp3 = jsx;
                obj = { tag: appliedTags, hasUnreads };
                items = [, ];
                items[0] = jsx(closure_0(closure_1[7]).AppliedForumTag, obj, appliedTags.id);
                tmp3Result = arg1 !== appliedTags.length - 1;
                if (tmp3Result) {
                  tmp5 = View;
                  obj1 = { style: null };
                  tmp6 = closure_2;
                  obj1.style = closure_2.dot;
                  tmp3Result = tmp3(View, obj1);
                }
                items[1] = tmp3Result;
                return tmp(tmp2, { children: items });
              }
            }
            let obj2 = { style: tmp3, children: items };
            items = [tmp4, tmp7];
            const tmp11 = closure_4(View, obj2);
            cResult[15] = tmp3;
            cResult[16] = tmp4;
            cResult[17] = tmp7;
            cResult[18] = tmp11;
            tmp9 = tmp11;
          }
        }
        class T {
          constructor(arg0, arg1) {
            tmp = jsxs;
            tmp2 = Fragment;
            tmp3 = jsx;
            obj = { tag: appliedTags, hasUnreads };
            items = [, ];
            items[0] = jsx(closure_0(closure_1[7]).AppliedForumTag, obj, appliedTags.id);
            tmp3Result = arg1 !== appliedTags.length - 1;
            if (tmp3Result) {
              tmp5 = View;
              obj1 = { style: null };
              tmp6 = closure_2;
              obj1.style = closure_2.dot;
              tmp3Result = tmp3(View, obj1);
            }
            items[1] = tmp3Result;
            return tmp(tmp2, { children: items });
          }
        }
        cResult[11] = num;
        cResult[12] = hasUnreads;
        cResult[13] = tmp2.dot;
        cResult[14] = num > 0;
        tmp7 = tmp8;
      }
    }
    if (cResult[7] === appliedTags.length) {
      if (cResult[8] === hasUnreads) {
        let tmp5;
        if (cResult[9] === tmp2.dot) {
          tmp5 = cResult[10];
        }
        const mapped = appliedTags.map(tmp5);
        class T {
          constructor(arg0, arg1) {
            tmp = jsxs;
            tmp2 = Fragment;
            tmp3 = jsx;
            obj = { tag: appliedTags, hasUnreads };
            items = [, ];
            items[0] = jsx(closure_0(closure_1[7]).AppliedForumTag, obj, appliedTags.id);
            tmp3Result = arg1 !== appliedTags.length - 1;
            if (tmp3Result) {
              tmp5 = View;
              obj1 = { style: null };
              tmp6 = closure_2;
              obj1.style = closure_2.dot;
              tmp3Result = tmp3(View, obj1);
            }
            items[1] = tmp3Result;
            return tmp(tmp2, { children: items });
          }
        }
        cResult[4] = hasUnreads;
        cResult[5] = tmp2.dot;
        cResult[6] = mapped;
        tmp4 = mapped;
      }
    }
    class T {
      constructor(arg0, arg1) {
        tmp = jsxs;
        tmp2 = Fragment;
        tmp3 = jsx;
        obj = { tag: appliedTags, hasUnreads };
        items = [, ];
        items[0] = jsx(closure_0(closure_1[7]).AppliedForumTag, obj, appliedTags.id);
        tmp3Result = arg1 !== appliedTags.length - 1;
        if (tmp3Result) {
          tmp5 = View;
          obj1 = { style: null };
          tmp6 = closure_2;
          obj1.style = closure_2.dot;
          tmp3Result = tmp3(View, obj1);
        }
        items[1] = tmp3Result;
        return tmp(tmp2, { children: items });
      }
    }
    cResult[7] = appliedTags.length;
    cResult[8] = hasUnreads;
    cResult[9] = tmp2.dot;
    cResult[10] = T;
    tmp5 = T;
  }
  const items1 = [containerStyle, tmp2.tagsContainer];
  cResult[0] = containerStyle;
  cResult[1] = tmp2.tagsContainer;
  cResult[2] = items1;
  tmp3 = items1;
}) : (function ForumPostAppliedTags(appliedTags) {
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
    const AppliedForumTag = appliedTags(hasUnreads[7]).AppliedForumTag;
    items2[1] = closure_3(AppliedForumTag, obj4);
    tmp2Result = tmp2(closure_5, obj2);
  }
  items1[1] = tmp2Result;
  return tmp2(tmp3, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostAppliedTags.tsx");

export const ForumPostAppliedTagPills = tmp5;
export const ForumPostAppliedTags = tmp6;
