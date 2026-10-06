// Module ID: 16288
// Function ID: 16289
// Name: VibegrationsDesignFeedbackOverlay
// Dependencies: [32, 19, 17, 21, 4837, 588, 558, 576, 4801, 16289, 8495, 1127, 3718, 4833, 2]

// Module 16288 (VibegrationsDesignFeedbackOverlay)
import nativeDefault from "native" /* 588 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4801 */;
import VibegrationsDesignRemarkSheet from "VibegrationsDesignRemarkSheet" /* 16289 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const VibegrationsDesignRemarkSheetDefault = VibegrationsDesignRemarkSheet;
let dependencyMap, flag, nextPromise, projectId, tmp10, tmp4, tmp8;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let size;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, Pressable: metroRequire, View: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 24;
let createStyles = createStyles_mod;
let obj = { surface: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, highlight: obj2, marker: size, pending: { position: "absolute", width: 24, height: 24, alignItems: "center", justifyContent: "center" }, hint: rect, hintText: obj3 };
obj2 = { position: "absolute", borderWidth: 2, borderColor: nativeDefault.colors.TEXT_BRAND, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
size = { position: "absolute", width: 24, height: 24, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_BRAND, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
rect = { position: "absolute", left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
obj3 = { textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_2;
  let closure_4;
  let first1;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let obj = projectId(576);
  const cResult = obj.c(44);
  projectId = projectId.projectId;
  const tmp2 = closure_11();
  let obj2 = react;
  const tmp3 = first1(react.useState(null), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  let tmp5 = first1(react.useState(null), 2);
  first1 = tmp5[0];
  react = tmp5[1];
  let tmp7 = first1(react.useState(null), 2);
  const first2 = tmp7[0];
  let closure_6 = tmp7[1];
  const tmp9 = first1(react.useState(false), 2);
  const first3 = tmp9[0];
  let closure_8 = tmp9[1];
  let closure_9 = react.useRef(true);
  let closure_10 = react.useRef(false);
  if (cResult[0] !== first2) {
    const fn = function c() {
      closure_10.current = null != first2;
    };
    const items = [first2];
    cResult[0] = first2;
    cResult[1] = fn;
    cResult[2] = items;
    tmp12 = items;
    tmp11 = fn;
  } else {
    tmp11 = cResult[1];
    tmp12 = cResult[2];
  }
  const effect = obj2.useEffect(tmp11, tmp12);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        closure_9.current = true;
        return () => {
          closure_1_9.current = false;
          if (ref.current) {
            const obj = first(closure_2[8]);
            obj.hideActionSheet(projectId(closure_2[9]).VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY);
          }
        };
      }
    }
    const items1 = [];
    cResult[3] = E;
    cResult[4] = items1;
    tmp15 = items1;
    tmp14 = E;
  } else {
    class E {
      constructor() {
        closure_9.current = true;
        return () => {
          closure_1_9.current = false;
          if (ref.current) {
            const obj = first(closure_2[8]);
            obj.hideActionSheet(projectId(closure_2[9]).VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY);
          }
        };
      }
    }
    tmp15 = cResult[4];
  }
  const effect1 = obj2.useEffect(tmp14, tmp15);
  if (cResult[5] !== first3) {
    class E {
      constructor() {
        closure_9.current = true;
        return () => {
          closure_1_9.current = false;
          if (ref.current) {
            const obj = first(closure_2[8]);
            obj.hideActionSheet(projectId(closure_2[9]).VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY);
          }
        };
      }
    }
    const items2 = [first3];
    cResult[5] = first3;
    cResult[6] = tmp19;
    cResult[7] = items2;
    tmp18 = items2;
    tmp17 = tmp19;
  } else {
    class E {
      constructor() {
        closure_9.current = true;
        return () => {
          closure_1_9.current = false;
          if (ref.current) {
            const obj = first(closure_2[8]);
            obj.hideActionSheet(projectId(closure_2[9]).VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY);
          }
        };
      }
    }
    tmp18 = cResult[7];
  }
  const effect2 = obj2.useEffect(tmp17, tmp18);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        size = { width: layout.width, height: layout.height };
        closure_2(size);
      }
    }
    cResult[8] = R;
  } else {
    class R {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        size = { width: layout.width, height: layout.height };
        closure_2(size);
      }
    }
  }
  if (cResult[9] !== projectId) {
    class R {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        size = { width: layout.width, height: layout.height };
        closure_2(size);
      }
    }
    cResult[9] = projectId;
    cResult[10] = tmp23;
  } else {
    class R {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        size = { width: layout.width, height: layout.height };
        closure_2(size);
      }
    }
  }
  closure_11 = tmp22;
  if (cResult[11] === tmp22) {
    class R {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        size = { width: layout.width, height: layout.height };
        closure_2(size);
      }
    }
  }
  class H {
    constructor(arg0) {
      if (null == closure_3) {
        tmp = closure_5;
        if (null == closure_5) {
          tmp2 = projectId;
          point = { x: null, y: null };
          tmp3 = globalThis;
          _Math = Math;
          point.x = Math.round(projectId.nativeEvent.locationX);
          _Math2 = Math;
          point.y = Math.round(projectId.nativeEvent.locationY);
          closure_0 = point;
          tmp4 = closure_4;
          tmp5 = closure_4(point);
          tmp6 = closure_8;
          flag = false;
          tmp7 = closure_8(false);
          tmp8 = projectId;
          tmp9 = closure_2;
          obj2 = projectId(closure_2[10]);
          tmp10 = closure_0;
          result = obj2.inspectVibegrationsPreviewPoint(closure_0, point);
          nextPromise = result.then((status) => {
            if (ref.current) {
              closure_4(null);
              if ("picked" === status.status) {
                const target = status.target;
                size = first;
                let tmp6 = !(null == first || size.width < 1 || size.height < 1);
                const tmp5 = null == first || size.width < 1 || size.height < 1;
                if (tmp6) {
                  tmp6 = target.rect.width >= 0.98 * size.width && target.rect.height >= 0.98 * size.height;
                }
                if (!tmp6) {
                  const obj = { target: status.target, at: point };
                  closure_6(obj);
                  closure_11(status.target);
                }
              }
              closure_8(true);
            }
          });
        }
      }
      return;
    }
  }
  cResult[11] = tmp22;
  cResult[12] = first1;
  cResult[13] = first2;
  cResult[14] = projectId;
  cResult[15] = first;
  cResult[16] = H;
}) : ((projectId) => {
  let closure_2;
  let closure_4;
  let height;
  let intl2;
  let items4;
  let items5;
  let obj2;
  let obj8;
  let sSnnY4;
  let tmp20;
  let tmp25;
  projectId = projectId.projectId;
  let first;
  react = undefined;
  let callback1;
  let tmp = callback1();
  const tmp2 = first(react.useState(null), 2);
  size = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp3 = first(react.useState(null), 2);
  first = tmp3[0];
  react = tmp3[1];
  let tmp5 = first(react.useState(null), 2);
  const first1 = tmp5[0];
  let closure_6 = tmp5[1];
  let tmp7 = first(react.useState(false), 2);
  const first2 = tmp7[0];
  let closure_8 = tmp7[1];
  let closure_9 = react.useRef(true);
  let closure_10 = react.useRef(false);
  const items = [first1];
  const effect = react.useEffect(() => {
    closure_10.current = null != first1;
  }, items);
  const effect1 = react.useEffect(() => {
    let ref;
    closure_9.current = true;
    return () => {
      closure_1_9.current = false;
      if (ref.current) {
        const obj = size(closure_2[8]);
        obj.hideActionSheet(projectId(closure_2[9]).VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY);
      }
    };
  }, []);
  const items1 = [first2];
  const effect2 = react.useEffect(() => {
    let closure_0;
    if (first2) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_8(false), 2000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [projectId];
  const callback = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    size = { width: layout.width, height: layout.height };
    closure_2(size);
  }, []);
  callback1 = react.useCallback((target) => {
    let obj2;
    let ref;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsDesignRemarkSheet.VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY, content: metroImportAll(VibegrationsDesignRemarkSheetDefault, obj2) };
    obj2 = {
      projectId,
      target,
      onClose() {
        if (ref.current) {
          closure_1_6(null);
        }
      }
    };
    showActionSheet(obj);
  }, items2);
  const items3 = [first, first1, projectId, size, callback1];
  const callback2 = react.useCallback((nativeEvent) => {
    let ref;
    if (null == first) {
      if (null == first1) {
        const point = { x: Math.round(nativeEvent.nativeEvent.locationX), y: Math.round(nativeEvent.nativeEvent.locationY) };
        const _Math = Math;
        const _Math2 = Math;
        let tmp5 = closure_4(point);
        let tmp6 = closure_8;
        const tmp7 = closure_8(false);
        const obj2 = projectId(closure_2[10]);
        const result = obj2.inspectVibegrationsPreviewPoint(point, point);
        result.then((status) => {
          if (ref.current) {
            closure_4(null);
            if ("picked" === status.status) {
              const target = status.target;
              let tmp6 = !(null == size || size.width < 1 || size.height < 1);
              const tmp5 = null == size || size.width < 1 || size.height < 1;
              if (tmp6) {
                tmp6 = target.rect.width >= 0.98 * size.width && target.rect.height >= 0.98 * size.height;
              }
              if (!tmp6) {
                const obj = { target: status.target, at: point };
                closure_6(obj);
                callback1(status.target);
              }
            }
            closure_8(true);
          }
        });
      }
    }
  }, items3);
  const intl = projectId(1127).intl;
  const string = intl.string;
  const tmp18 = size(3718);
  if (first2) {
    sSnnY4 = tmp18.sSnnY4;
    tmp20 = tmp17;
  } else {
    sSnnY4 = tmp18["84RzOi"];
    tmp20 = tmp17;
  }
  let at;
  const stringResult = string(sSnnY4);
  if (first1 != null) {
    at = first1.at;
  }
  if (at == null) {
    at = first;
  }
  let obj = { style: tmp.surface, onLayout: callback, onPress: callback2, accessibilityRole: "button", accessibilityLabel: intl2.string(tmp20(3718)["84RzOi"]), testID: "vibegrations-design-surface", children: tmp25(first2, obj2) };
  intl2 = tmp15(1127).intl;
  obj2 = { style: tmp.surface, pointerEvents: "none", children: items5 };
  let tmp23Result = null;
  const tmp24 = closure_6;
  tmp25 = closure_9;
  if (null != first1) {
    const obj3 = { style: items4 };
    items4 = [tmp.highlight, ];
    const rect = first1.target.rect;
    const size1 = { left: null, top: null, width: Math.max(rect.width, 1), height: Math.max(height, 1) };
    ({ x: obj4.left, y: obj4.top } = rect);
    let _Math = Math;
    height = rect.height;
    let _Math2 = Math;
    items4[1] = size1;
    tmp23Result = tmp23(tmp26, obj3);
  }
  items5 = [tmp23Result, , ];
  let tmp23Result2 = null;
  if (null != at) {
    let obj6;
    if (null != first1) {
      let rect2;
      const items6 = [tmp.marker, ];
      const diff = at.x - 12;
      const diff1 = at.y - 12;
      if (null == size) {
        const rect1 = { left: diff, top: diff1 };
        rect2 = rect1;
      } else {
        rect2 = { left: Math.min(Math.max(diff, 0), size.width - closure_10), top: Math.min(Math.max(diff1, 0), size.height - closure_10) };
        const _Math7 = Math;
        const _Math8 = Math;
        const _Math9 = Math;
        const _Math10 = Math;
      }
      const obj5 = { style: items6 };
      items6[1] = rect2;
      obj6 = obj5;
    } else {
      let rect4;
      const items7 = [tmp.pending, ];
      const diff2 = at.x - 12;
      const diff3 = at.y - 12;
      if (null == size) {
        const rect3 = { left: diff2, top: diff3 };
        rect4 = rect3;
      } else {
        rect4 = { left: Math.min(Math.max(diff2, 0), size.width - closure_10), top: Math.min(Math.max(diff3, 0), size.height - closure_10) };
        const _Math3 = Math;
        const _Math4 = Math;
        const _Math5 = Math;
        const _Math6 = Math;
      }
      obj6 = { style: items7, children: closure_8(first1, { size: "small" }) };
      items7[1] = rect4;
    }
    tmp23Result2 = tmp23(tmp26, obj6);
  }
  items5[1] = tmp23Result2;
  const obj7 = { style: tmp.hint, accessibilityLiveRegion: "polite", children: closure_8(projectId(4833).Text, obj8) };
  obj8 = { variant: "text-sm/medium", color: "text-default", style: tmp.hintText, children: stringResult };
  items5[2] = closure_8(first2, obj7);
  return closure_8(tmp24, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDesignFeedbackOverlay.tsx");

export default tmp5;
