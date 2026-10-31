// Module ID: 12112
// Function ID: 12113
// Name: ConjureDesignFeedbackOverlay
// Dependencies: [32, 19, 17, 21, 5014, 575, 5258, 12113, 10902, 10922, 1113, 3868, 5624, 2]
// Exports: default

// Module 12112 (ConjureDesignFeedbackOverlay)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import ConjureDesignRemarkSheet from "ConjureDesignRemarkSheet" /* 12113 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const ConjureDesignRemarkSheetDefault = ConjureDesignRemarkSheet;
let dependencyMap;

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
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/design_feedback/native/ConjureDesignFeedbackOverlay.tsx");

export default function ConjureDesignFeedbackOverlay(projectId) {
  let closure_2;
  let closure_4;
  let height;
  let intl2;
  let items5;
  let items6;
  let obj2;
  let obj8;
  let prop;
  let tmp21;
  let tmp26;
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
  const tmp7 = first(react.useState(false), 2);
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
        const obj = size(closure_2[6]);
        obj.hideActionSheet(projectId(closure_2[7]).CONJURE_DESIGN_REMARK_SHEET_KEY);
      }
    };
  }, []);
  const items1 = [projectId];
  const effect2 = react.useEffect(() => () => {
    const obj = projectId(closure_2[8]);
    const result = obj.inspectConjurePreviewPoint(closure_1_0, projectId(closure_2[9]).CONJURE_INSPECT_CLEAR_POINT);
  }, items1);
  const items2 = [first2];
  const effect3 = react.useEffect(() => {
    let closure_0;
    if (first2) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_8(false), 2000);
      return () => clearTimeout(closure_0);
    }
  }, items2);
  const items3 = [projectId];
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
    const obj = { key: ConjureDesignRemarkSheet.CONJURE_DESIGN_REMARK_SHEET_KEY, content: metroImportAll(ConjureDesignRemarkSheetDefault, obj2) };
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
  }, items3);
  const items4 = [first, first1, projectId, size, callback1];
  const callback2 = react.useCallback((nativeEvent) => {
    let ref;
    if (null == first) {
      if (null == first1) {
        const point = { x: Math.round(nativeEvent.nativeEvent.locationX), y: Math.round(nativeEvent.nativeEvent.locationY) };
        const _Math = Math;
        const _Math2 = Math;
        const tmp5 = closure_4(point);
        let tmp6 = closure_8;
        closure_8(false);
        const obj2 = projectId(closure_2[8]);
        const result = obj2.inspectConjurePreviewPoint(point, point);
        result.then((status) => {
          if (ref.current) {
            closure_4(null);
            if ("picked" === status.status) {
              const target = status.target;
              const tmp6 = !(null == size || size.width < 1 || size.height < 1) && target.rect.width >= 0.98 * size.width && target.rect.height >= 0.98 * size.height;
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
  }, items4);
  const intl = projectId(1113).intl;
  const string = intl.string;
  const tmp19 = size(3868);
  if (first2) {
    prop = tmp19["URbF/7"];
    tmp21 = tmp18;
  } else {
    prop = tmp19["DesV7/"];
    tmp21 = tmp18;
  }
  let at;
  const stringResult = string(prop);
  if (first1 != null) {
    at = first1.at;
  }
  if (at == null) {
    at = first;
  }
  let obj = { style: tmp.surface, onLayout: callback, onPress: callback2, accessibilityRole: "button", accessibilityLabel: intl2.string(tmp21(3868)["DesV7/"]), testID: "conjure-design-surface", children: tmp26(first2, obj2) };
  intl2 = tmp16(1113).intl;
  obj2 = { style: tmp.surface, pointerEvents: "none", children: items6 };
  let tmp24Result = null;
  const tmp25 = closure_6;
  tmp26 = closure_9;
  if (null != first1) {
    tmp24Result = null;
    if (null == first1.target.marker) {
      const obj3 = { style: items5 };
      items5 = [tmp.highlight, ];
      const rect = first1.target.rect;
      const size1 = { left: null, top: null, width: Math.max(rect.width, 1), height: Math.max(height, 1) };
      ({ x: obj4.left, y: obj4.top } = rect);
      let _Math = Math;
      height = rect.height;
      let _Math2 = Math;
      items5[1] = size1;
      tmp24Result = tmp24(tmp27, obj3);
    }
  }
  items6 = [tmp24Result, , ];
  let tmp24Result2 = null;
  if (null != at) {
    let obj6;
    if (null != first1) {
      let rect2;
      const items7 = [tmp.marker, ];
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
      const obj5 = { style: items7 };
      items7[1] = rect2;
      obj6 = obj5;
    } else {
      let rect4;
      const items8 = [tmp.pending, ];
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
      obj6 = { style: items8, children: closure_8(first1, { size: "small" }) };
      items8[1] = rect4;
    }
    tmp24Result2 = tmp24(tmp27, obj6);
  }
  items6[1] = tmp24Result2;
  const obj7 = { style: tmp.hint, accessibilityLiveRegion: "polite", children: closure_8(projectId(5624).Text, obj8) };
  obj8 = { variant: "text-sm/medium", color: "text-default", style: tmp.hintText, children: stringResult };
  items6[2] = closure_8(first2, obj7);
  return closure_8(tmp25, obj);
};
