// Module ID: 11680
// Function ID: 11681
// Name: ForumPostGridBody
// Dependencies: [32, 19, 17, 21, 5092, 587, 558, 576, 1200, 11681, 11682, 11683, 5088, 1497, 1388, 11684, 6976, 8478, 11688, 2]

// Module 11680 (ForumPostGridBody)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import Text_Text from "Text/Text" /* 5088 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 8478 */;
import AssetRegistryDefault from "AssetRegistry" /* 11681 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11682 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11683 */;
import ForumPostMedia from "ForumPostMedia" /* 11684 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, obj1;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 225;
let c9 = 192;
let createStyles = createStyles_mod;
let obj = { gifIcon: size, container: obj2, wideAspectRatioContainer: { height: 192 }, mediaIconContainer: { paddingLeft: 6 }, headerLeftContainer: { flexDirection: "row", position: "absolute", top: 4, left: 4 }, footerLeftContainer: { flexDirection: "row", position: "absolute", bottom: 4, left: 4, alignItems: "center", justifyContent: "flex-start" }, footerRightContainer: { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "flex-start" }, extraMediaCountContainer: obj3, extraMediaCount: { marginLeft: 2 }, grid: obj4, wideAspectRatioGrid: { height: 192 }, column: { flex: 1, flexDirection: "column" }, columnSpacer: { flex: 0, width: 2, height: "100%" }, rowSpacer: { flex: 0, height: 2, width: "100%" }, icon: obj5 };
size = { height: 20, width: 33, backgroundColor: "black", borderRadius: nativeDefault.radii.xs, resizeMode: "cover" };
createStyles = createStyles.createStyles;
obj2 = { position: "relative", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: 225 };
obj3 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, height: 24, paddingHorizontal: 8, borderRadius: 20 };
obj4 = { height: 225, flexDirection: "row", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj5 = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function GIFIcon() {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = closure_10();
  if (cResult[0] !== tmp4.gifIcon) {
    const obj2 = { size: native.Icon.Sizes.CUSTOM, source: AssetRegistryDefault, disableColor: true, style: tmp4.gifIcon };
    const Icon = tmp(1200).Icon;
    const tmp8 = metroRequire(Icon, obj2);
    cResult[0] = tmp4.gifIcon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function GIFIcon() {
  let tmp;
  const obj = { size: native.Icon.Sizes.CUSTOM, source: AssetRegistryDefault, disableColor: true, style: tmp.gifIcon };
  tmp = closure_10();
  const Icon = native.Icon;
  return metroRequire(Icon, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlayIcon() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: native.Icon.Sizes.SMALL_20, source: AssetRegistryDefault2, disableColor: true };
    const Icon = tmp(1200).Icon;
    const tmp7 = metroRequire(Icon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function PlayIcon() {
  const obj = { size: native.Icon.Sizes.SMALL_20, source: AssetRegistryDefault2, disableColor: true };
  const Icon = native.Icon;
  return metroRequire(Icon, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExtraMediaIcon(extraMediaCount) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  extraMediaCount = extraMediaCount.extraMediaCount;
  const tmp4 = closure_10();
  if (cResult[0] !== tmp4.icon.color) {
    const obj2 = { source: AssetRegistryDefault3, color: tmp4.icon.color, size: native.Icon.Sizes.REFRESH_SMALL_16 };
    const Icon = tmp(1200).Icon;
    const tmp8 = metroRequire(Icon, obj2);
    cResult[0] = tmp4.icon.color;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  const combined = "+" + extraMediaCount;
  if (cResult[2] === tmp4.extraMediaCount) {
    let tmp10;
    if (cResult[3] === combined) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === tmp4.extraMediaCountContainer) {
      if (cResult[6] === tmp5) {
        let tmp12;
        if (cResult[7] === tmp10) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
    const obj3 = { style: tmp4.extraMediaCountContainer, children: items };
    items = [tmp5, tmp10];
    const tmp15 = metroImportDefault(View, obj3);
    cResult[5] = tmp4.extraMediaCountContainer;
    cResult[6] = tmp5;
    cResult[7] = tmp10;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const obj4 = { style: tmp4.extraMediaCount, lineClamp: 1, variant: "text-xs/normal", color: "text-default", children: combined };
  const tmp11 = metroRequire(Text_Text.Text, obj4);
  cResult[2] = tmp4.extraMediaCount;
  cResult[3] = combined;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : (function ExtraMediaIcon(extraMediaCount) {
  extraMediaCount = extraMediaCount.extraMediaCount;
  const tmp = closure_10();
  const obj = { style: tmp.extraMediaCountContainer, children: items };
  const obj2 = { source: AssetRegistryDefault3, color: tmp.icon.color, size: native.Icon.Sizes.REFRESH_SMALL_16 };
  const Icon = native.Icon;
  items = [metroRequire(Icon, obj2), ];
  const obj3 = { style: tmp.extraMediaCount, lineClamp: 1, variant: "text-xs/normal", color: "text-default", children: "+" + extraMediaCount };
  const Text = Text_Text.Text;
  items[1] = metroRequire(Text, obj3);
  return metroImportDefault(View, obj);
});
let items = [[0, 3], [1, 2]];
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMediaGridLayout(arg0, arg1) {
  let closure_0;
  let closure_1;
  let tmp3;
  let tmp4;
  let width;
  _require = arg0;
  importDefault = arg1;
  let obj = require("react");
  const cResult = obj.c(16);
  width = require("useWindowDimensions")().width;
  const bound = Math.min(arg0.length, 2);
  if (cResult[0] === arg0) {
    let arr;
    let tmp7;
    if (cResult[1] === bound) {
      arr = cResult[2];
    }
    const tmp6 = arg1 ? c9 : c8;
    let closure_4 = tmp6;
    if (cResult[6] === width) {
      if (cResult[7] === tmp6) {
        if (cResult[8] === arr) {
          if (cResult[9] === arg1) {
            tmp7 = cResult[10];
          }
          return tmp7;
        }
      }
    }
    if (cResult[11] === width) {
      if (cResult[12] === tmp6) {
        if (cResult[13] === arr.length) {
          let tmp8;
          if (cResult[14] === arg1) {
            tmp8 = cResult[15];
          }
          let mapped = arr.map(tmp8);
          cResult[6] = width;
          cResult[7] = tmp6;
          cResult[8] = arr;
          cResult[9] = arg1;
          cResult[10] = mapped;
          tmp7 = mapped;
        }
      }
    }
    const fn3 = function x(arr) {
      arr.filter(closure_0(width[14]).isNotNullish).length;
      const length = arr.length;
      return arr.map((media) => {
        const diff = (width - 48) / length - 2 * (length - 1) / length;
        const obj = { media, targetWidth: diff, targetHeight: null };
        const tmp2 = closure_1;
        if (tmp2) {
          let result;
          if (length < 2) {
            result = diff / 1.7777777777777777;
          }
          obj.targetHeight = result;
          return obj;
        }
        result = closure_4 / length - 2 * (length - 1) / length;
      });
    };
    cResult[11] = width;
    cResult[12] = tmp6;
    cResult[13] = arr.length;
    cResult[14] = arg1;
    cResult[15] = fn3;
    tmp8 = fn3;
  }
  if (cResult[3] !== arg0) {
    const fn = function l(arr) {
      const mapped = arr.map((item) => closure_1_0[item]);
      return mapped.filter(GlobalUtils.isNotNullish);
    };
    cResult[3] = arg0;
    cResult[4] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(arg0) {
      return arg0.length > 0;
    };
    cResult[5] = fn2;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[5];
  }
  const substr = items.slice(0, bound);
  const mapped1 = substr.map(tmp3);
  const found = mapped1.filter(tmp4);
  cResult[0] = arg0;
  cResult[1] = bound;
  cResult[2] = found;
  arr = found;
}) : (function useMediaGridLayout(arg0, arg1) {
  let closure_1;
  let width;
  let length = arg0;
  importDefault = arg1;
  width = require("useWindowDimensions")().width;
  items = [arg0];
  const memo = react.useMemo(() => {
    const substr = items.slice(0, Math.min(length.length, 2));
    let mapped = substr.map((arr) => {
      const mapped = arr.map((item) => closure_1_0[item]);
      return mapped.filter(length(width[14]).isNotNullish);
    });
    return mapped.filter((item) => item.length > 0);
  }, items);
  const items1 = [width, memo, arg1];
  return react.useMemo(() => {
    let closure_0 = closure_1 ? closure_1_9 : closure_1_8;
    return memo.map((arr) => {
      length = arr.filter(closure_0(width[14]).isNotNullish).length;
      length = length.length;
      return arr.map((media) => {
        const diff = (width - 48) / length - 2 * (length - 1) / length;
        const obj = { media, targetWidth: diff, targetHeight: null };
        const tmp2 = closure_1;
        if (tmp2) {
          let result;
          if (length < 2) {
            result = diff / 1.7777777777777777;
          }
          obj.targetHeight = result;
          return obj;
        }
        result = closure_0 / length - 2 * (length - 1) / length;
      });
    });
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaGridColumn(arg0) {
  let column;
  let thread;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp = thread;
  let tmp2 = dependencyMap;
  let obj = thread(576);
  const cResult = obj.c(14);
  ({ column, thread } = arg0);
  const tmp4 = closure_10();
  const rowSpacer = tmp4;
  if (cResult[0] === column) {
    if (cResult[1] === tmp4.column) {
      if (cResult[2] === tmp4.rowSpacer) {
        if (cResult[3] === thread) {
          tmp5 = cResult[4];
          tmp6 = cResult[5];
          tmp7 = cResult[6];
        }
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp6) {
            let tmp11;
            if (cResult[12] === tmp7) {
              tmp11 = cResult[13];
            }
            return tmp11;
          }
        }
        let obj2 = { style: tmp6, children: tmp7 };
        const tmp13 = closure_6(tmp5, obj2);
        cResult[10] = tmp5;
        cResult[11] = tmp6;
        cResult[12] = tmp7;
        cResult[13] = tmp13;
        tmp11 = tmp13;
      }
    }
  }
  const found = column.filter(tmp(1388).isNotNullish);
  const column2 = tmp4.column;
  if (cResult[7] === tmp4.rowSpacer) {
    let tmp9;
    if (cResult[8] === thread) {
      tmp9 = cResult[9];
    }
    const mapped = found.map(tmp9);
    cResult[0] = column;
    cResult[1] = tmp4.column;
    cResult[2] = tmp4.rowSpacer;
    cResult[3] = thread;
    cResult[4] = View;
    cResult[5] = column2;
    cResult[6] = mapped;
    tmp7 = mapped;
    tmp6 = column2;
    tmp5 = tmp8;
  }
  const fn = function y(media, arg1) {
    let tmp2 = arg1 > 0;
    const Fragment = react.Fragment;
    const tmp = metroImportDefault;
    if (tmp2) {
      const obj = { style: rowSpacer.rowSpacer };
      tmp2 = metroRequire(View, obj);
    }
    const obj2 = { children: items };
    items = [tmp2, ];
    const obj3 = { channel: thread, media: media.media, targetWidth: media.targetWidth, targetHeight: media.targetHeight };
    items[1] = metroRequire(ForumPostMedia.ForumPostGridMedia, obj3);
    return tmp(Fragment, obj2, "" + thread.id + "-" + arg1);
  };
  cResult[7] = tmp4.rowSpacer;
  cResult[8] = thread;
  cResult[9] = fn;
  tmp9 = fn;
}) : (function MediaGridColumn(arg0) {
  let channel;
  let column;
  let require;
  ({ column, thread: require } = arg0);
  let tmp = closure_10();
  const rowSpacer = tmp;
  const found = column.filter(GlobalUtils.isNotNullish);
  let obj = {
    style: tmp.column,
    children: found.map((media, index) => {
      let tmp2 = index > 0;
      const Fragment = react.Fragment;
      const tmp = metroImportDefault;
      if (tmp2) {
        const obj = { style: rowSpacer.rowSpacer };
        tmp2 = metroRequire(View, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, ];
      const obj3 = { channel: require, media: media.media, targetWidth: media.targetWidth, targetHeight: media.targetHeight };
      items[1] = metroRequire(ForumPostMedia.ForumPostGridMedia, obj3);
      return tmp(Fragment, obj2, "" + require.id + "-" + index);
    })
  };
  return closure_6(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostGridBody(thread) {
  let arr;
  let columnSpacer;
  let containsGif;
  let containsVideo;
  let hasUnreads;
  let media;
  let tmp11;
  let tmp13;
  let tmp6;
  let tmp8;
  let tmp = thread;
  let tmp2 = dependencyMap;
  let obj = thread(576);
  const cResult = obj.c(42);
  thread = thread.thread;
  ({ hasUnreads, media } = thread);
  const tmp4 = closure_10();
  importDefault = tmp4;
  let obj2 = thread(6976);
  [arr, tmp6] = _slicedToArray(obj2.useSomeAppliedTags(thread, 2), 2);
  const tmp5 = _slicedToArray(obj2.useSomeAppliedTags(thread, 2), 2);
  if (cResult[0] !== media) {
    const substr = media.slice(0, 4);
    cResult[0] = media;
    cResult[1] = substr;
    tmp8 = substr;
  } else {
    tmp8 = cResult[1];
  }
  const bound = Math.max(0, media.length - 4);
  if (cResult[2] !== thread) {
    const isMediaPostResult = thread.isMediaPost();
    cResult[2] = thread;
    cResult[3] = isMediaPostResult;
    tmp11 = isMediaPostResult;
  } else {
    tmp11 = cResult[3];
  }
  const arr2 = closure_15(tmp8, tmp11);
  let wideAspectRatioGrid = tmp11;
  if (cResult[4] !== media) {
    const tmpResult = tmp(8478);
    const result = tmpResult.messageContainsGifOrVideo(media);
    cResult[4] = media;
    cResult[5] = result;
    tmp13 = result;
  } else {
    tmp13 = cResult[5];
  }
  ({ containsVideo, containsGif } = tmp13);
  if (cResult[6] === tmp4.container) {
    let tmp16;
    if (cResult[7] === (wideAspectRatioGrid && tmp4.wideAspectRatioContainer)) {
      tmp16 = cResult[8];
    }
    if (wideAspectRatioGrid) {
      wideAspectRatioGrid = tmp4.wideAspectRatioGrid;
    }
    if (cResult[9] === tmp4.grid) {
      let tmp17;
      let tmp19;
      if (cResult[10] === wideAspectRatioGrid) {
        tmp17 = cResult[11];
      }
      if (cResult[12] === arr2) {
        if (cResult[13] === tmp4.columnSpacer) {
          if (cResult[14] === thread) {
            tmp19 = cResult[15];
          }
          if (cResult[19] === tmp17) {
            let tmp22;
            if (cResult[20] === tmp19) {
              tmp22 = cResult[21];
            }
            if (cResult[22] === tmp6) {
              if (cResult[23] === arr) {
                if (cResult[24] === arr.length > 0) {
                  if (cResult[25] === hasUnreads) {
                    let tmp25;
                    if (cResult[26] === tmp4.footerLeftContainer) {
                      tmp25 = cResult[27];
                    }
                    if (cResult[28] === containsGif) {
                      if (cResult[29] === containsVideo) {
                        if (cResult[30] === tmp4.headerLeftContainer) {
                          let tmp27;
                          if (cResult[31] === tmp4.mediaIconContainer) {
                            tmp27 = cResult[32];
                          }
                          if (cResult[33] === bound) {
                            let tmp29;
                            if (cResult[34] === tmp4.footerRightContainer) {
                              tmp29 = cResult[35];
                            }
                            if (cResult[36] === tmp25) {
                              if (cResult[37] === tmp27) {
                                if (cResult[38] === tmp29) {
                                  if (cResult[39] === tmp16) {
                                    let tmp31;
                                    if (cResult[40] === tmp22) {
                                      tmp31 = cResult[41];
                                    }
                                    return tmp31;
                                  }
                                }
                              }
                            }
                            class W {
                              constructor(arg0, arg1) {
                                tmp2 = arg1 > 0;
                                tmp = jsxs;
                                Fragment = closure_4.Fragment;
                                if (tmp2) {
                                  tmp3 = jsx;
                                  tmp4 = View;
                                  obj = { style: null };
                                  tmp5 = closure_1;
                                  obj.style = closure_1.columnSpacer;
                                  tmp2 = jsx(View, obj);
                                }
                                obj1 = { children: null };
                                items = [, ];
                                items[0] = tmp2;
                                obj4 = { column: thread, thread };
                                items[1] = jsx(MediaGridColumn, obj4);
                                obj1.children = items;
                                return tmp(Fragment, obj1, "" + thread + "-" + arg1);
                              }
                            }
                            let obj3 = { style: tmp16, children: items };
                            items = [tmp22, tmp25, tmp27, tmp29];
                            const tmp33 = closure_7(View, obj3);
                            cResult[36] = tmp25;
                            cResult[37] = tmp27;
                            cResult[38] = tmp29;
                            cResult[39] = tmp16;
                            cResult[40] = tmp22;
                            cResult[41] = tmp33;
                            tmp31 = tmp33;
                          }
                          class W {
                            constructor(arg0, arg1) {
                              tmp2 = arg1 > 0;
                              tmp = jsxs;
                              Fragment = closure_4.Fragment;
                              if (tmp2) {
                                tmp3 = jsx;
                                tmp4 = View;
                                obj = { style: null };
                                tmp5 = closure_1;
                                obj.style = closure_1.columnSpacer;
                                tmp2 = jsx(View, obj);
                              }
                              obj1 = { children: null };
                              items = [, ];
                              items[0] = tmp2;
                              obj4 = { column: thread, thread };
                              items[1] = jsx(MediaGridColumn, obj4);
                              obj1.children = items;
                              return tmp(Fragment, obj1, "" + thread + "-" + arg1);
                            }
                          }
                          cResult[33] = bound;
                          cResult[34] = tmp4.footerRightContainer;
                          cResult[35] = 0 !== bound;
                          tmp29 = tmp30;
                        }
                      }
                    }
                    class W {
                      constructor(arg0, arg1) {
                        tmp2 = arg1 > 0;
                        tmp = jsxs;
                        Fragment = closure_4.Fragment;
                        if (tmp2) {
                          tmp3 = jsx;
                          tmp4 = View;
                          obj = { style: null };
                          tmp5 = closure_1;
                          obj.style = closure_1.columnSpacer;
                          tmp2 = jsx(View, obj);
                        }
                        obj1 = { children: null };
                        items = [, ];
                        items[0] = tmp2;
                        obj4 = { column: thread, thread };
                        items[1] = jsx(MediaGridColumn, obj4);
                        obj1.children = items;
                        return tmp(Fragment, obj1, "" + thread + "-" + arg1);
                      }
                    }
                    cResult[28] = containsGif;
                    cResult[29] = containsVideo;
                    cResult[30] = tmp4.headerLeftContainer;
                    cResult[31] = tmp4.mediaIconContainer;
                    cResult[32] = containsGif || containsVideo;
                    tmp27 = tmp28;
                  }
                }
              }
            }
            class W {
              constructor(arg0, arg1) {
                tmp2 = arg1 > 0;
                tmp = jsxs;
                Fragment = closure_4.Fragment;
                if (tmp2) {
                  tmp3 = jsx;
                  tmp4 = View;
                  obj = { style: null };
                  tmp5 = closure_1;
                  obj.style = closure_1.columnSpacer;
                  tmp2 = jsx(View, obj);
                }
                obj1 = { children: null };
                items = [, ];
                items[0] = tmp2;
                obj4 = { column: thread, thread };
                items[1] = jsx(MediaGridColumn, obj4);
                obj1.children = items;
                return tmp(Fragment, obj1, "" + thread + "-" + arg1);
              }
            }
            cResult[22] = tmp6;
            cResult[23] = arr;
            cResult[24] = arr.length > 0;
            cResult[25] = hasUnreads;
            cResult[26] = tmp4.footerLeftContainer;
            cResult[27] = arr.length > 0;
            tmp25 = tmp26;
          }
          class W {
            constructor(arg0, arg1) {
              tmp2 = arg1 > 0;
              tmp = jsxs;
              Fragment = closure_4.Fragment;
              if (tmp2) {
                tmp3 = jsx;
                tmp4 = View;
                obj = { style: null };
                tmp5 = closure_1;
                obj.style = closure_1.columnSpacer;
                tmp2 = jsx(View, obj);
              }
              obj1 = { children: null };
              items = [, ];
              items[0] = tmp2;
              obj4 = { column: thread, thread };
              items[1] = jsx(MediaGridColumn, obj4);
              obj1.children = items;
              return tmp(Fragment, obj1, "" + thread + "-" + arg1);
            }
          }
          const obj4 = { style: tmp17, children: tmp19 };
          const tmp24 = closure_6(View, obj4);
          cResult[19] = tmp17;
          cResult[20] = tmp19;
          cResult[21] = tmp24;
          tmp22 = tmp24;
        }
      }
      if (cResult[16] === tmp4.columnSpacer) {
        let tmp20;
        if (cResult[17] === thread) {
          tmp20 = cResult[18];
        }
        const mapped = arr2.map(tmp20);
        class W {
          constructor(arg0, arg1) {
            tmp2 = arg1 > 0;
            tmp = jsxs;
            Fragment = closure_4.Fragment;
            if (tmp2) {
              tmp3 = jsx;
              tmp4 = View;
              obj = { style: null };
              tmp5 = closure_1;
              obj.style = closure_1.columnSpacer;
              tmp2 = jsx(View, obj);
            }
            obj1 = { children: null };
            items = [, ];
            items[0] = tmp2;
            obj4 = { column: thread, thread };
            items[1] = jsx(MediaGridColumn, obj4);
            obj1.children = items;
            return tmp(Fragment, obj1, "" + thread + "-" + arg1);
          }
        }
        cResult[13] = tmp4.columnSpacer;
        cResult[14] = thread;
        cResult[15] = mapped;
        tmp19 = mapped;
      }
      class W {
        constructor(arg0, arg1) {
          tmp2 = arg1 > 0;
          tmp = jsxs;
          Fragment = closure_4.Fragment;
          if (tmp2) {
            tmp3 = jsx;
            tmp4 = View;
            obj = { style: null };
            tmp5 = closure_1;
            obj.style = closure_1.columnSpacer;
            tmp2 = jsx(View, obj);
          }
          obj1 = { children: null };
          items = [, ];
          items[0] = tmp2;
          obj4 = { column: thread, thread };
          items[1] = jsx(MediaGridColumn, obj4);
          obj1.children = items;
          return tmp(Fragment, obj1, "" + thread + "-" + arg1);
        }
      }
      cResult[16] = tmp4.columnSpacer;
      cResult[17] = thread;
      cResult[18] = W;
      tmp20 = W;
    }
    tmp18[0] = tmp4.grid;
    tmp18[1] = wideAspectRatioGrid;
    cResult[9] = tmp4.grid;
    cResult[10] = wideAspectRatioGrid;
    cResult[11] = tmp18;
    tmp17 = tmp18;
  }
  const items1 = [tmp4.container, wideAspectRatioGrid && tmp4.wideAspectRatioContainer];
  cResult[6] = tmp4.container;
  cResult[7] = wideAspectRatioGrid && tmp4.wideAspectRatioContainer;
  cResult[8] = items1;
  tmp16 = items1;
}) : (function ForumPostGridBody(thread) {
  let columnSpacer;
  let containsGif;
  let containsVideo;
  let first;
  let items4;
  let items5;
  let obj10;
  let obj5;
  let tmp5;
  thread = thread.thread;
  const media = thread.media;
  const hasUnreads = thread.hasUnreads;
  let tmp = closure_10();
  dependencyMap = tmp;
  let tmp2 = thread;
  let obj = thread(6976);
  [first, tmp5] = obj.useSomeAppliedTags(thread, 2);
  let tmp14Result = first.length > 0;
  items = [media];
  const memo = react.useMemo(() => media.slice(0, 4), items);
  const bound = Math.max(0, media.length - 4);
  const isMediaPostResult = thread.isMediaPost();
  const items1 = [media];
  const arr4 = closure_15(memo, isMediaPostResult);
  const memo1 = react.useMemo(() => {
    const obj = ForumPostMediaUtils;
    return obj.messageContainsGifOrVideo(media);
  }, items1);
  ({ containsVideo, containsGif } = memo1);
  const items2 = [tmp.container, ];
  let obj2 = { style: items2, children: items4 };
  const tmp13 = isMediaPostResult && tmp.wideAspectRatioContainer;
  items2[1] = tmp13;
  const items3 = [tmp.grid, ];
  const tmp15 = isMediaPostResult && tmp.wideAspectRatioGrid;
  let obj3 = {
    style: items3,
    children: arr4.map((column, index) => {
      let tmp2 = index > 0;
      const Fragment = react.Fragment;
      const tmp = metroImportDefault;
      if (tmp2) {
        const obj = { style: columnSpacer.columnSpacer };
        tmp2 = metroRequire(View, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, ];
      const obj3 = { column, thread };
      items[1] = metroRequire(closure_16, obj3);
      return tmp(Fragment, obj2, "" + column + "-" + index);
    })
  };
  items3[1] = tmp15;
  items4 = [closure_6(View, obj3), , , ];
  if (tmp14Result) {
    const obj4 = { style: tmp.footerLeftContainer, children: closure_6(tmp2(11688).ForumPostAppliedTagPills, obj5) };
    obj5 = { appliedTags: first, additionalTagsCount: tmp5, hasUnreads };
    tmp14Result = tmp14(tmp12, obj4);
  }
  items4[1] = tmp14Result;
  let tmp11Result = containsGif || containsVideo;
  if (tmp11Result) {
    const obj6 = { style: tmp.headerLeftContainer, children: items5 };
    if (containsGif) {
      const obj7 = { style: tmp.mediaIconContainer, children: closure_6(closure_11, {}) };
      containsGif = tmp14(tmp12, obj7);
    }
    items5 = [containsGif, ];
    if (containsVideo) {
      const obj8 = { style: tmp.mediaIconContainer, children: closure_6(closure_12, {}) };
      containsVideo = tmp14(tmp12, obj8);
    }
    items5[1] = containsVideo;
    tmp11Result = tmp11(tmp12, obj6);
  }
  items4[2] = tmp11Result;
  let tmp14Result2 = 0 !== bound;
  if (tmp14Result2) {
    const obj9 = { style: tmp.footerRightContainer, children: closure_6(closure_13, obj10) };
    obj10 = { extraMediaCount: bound };
    tmp14Result2 = tmp14(tmp12, obj9);
  }
  items4[3] = tmp14Result2;
  return closure_7(View, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridBody.tsx");

export default tmp4;
export const GRID_HORIZONTAL_PADDING = 48;
