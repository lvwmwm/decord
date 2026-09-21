// Module ID: 15614
// Function ID: 15615
// Name: DisplayNameStylesColorPickerSheet
// Dependencies: [32, 19, 17, 1394, 1078, 21, 4758, 580, 558, 568, 8444, 11206, 4726, 4725, 14860, 1245, 1119, 2876, 15604, 5188, 1096, 12, 1395, 15612, 7397, 2]

// Module 15614 (DisplayNameStylesColorPickerSheet)
import nativeDefault from "native" /* 580 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1096 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import HapticUtils from "HapticUtils" /* 4726 */;
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors" /* 11206 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14860 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const getColorPresetsForEffect = fn(1394).getColorPresetsForEffect;
const AnalyticEvents = fn(1078).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { flex: 1 }, contentContainer: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, presetGrid: null, presetRow: null, presetColor: null, presetColorSelected: null, buttonsContainer: null, button: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.presetGrid = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let obj4 = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.presetRow = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
obj2.presetColor = size;
let obj5 = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
obj2.presetColorSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
let obj6 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.buttonsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.button = { flex: 1 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onSelectColor(568).c(59);
  ({ selectedColor, selectedEffectId, onSelectColor } = arg0);
  let obj = onSelectColor(568);
  importDefault = closure_11();
  let tmp2 = closure_11();
  const bottomSheetRef = onSelectColor(8444).useBottomSheetRef().bottomSheetRef;
  let tmp3 = useDisplayNameStylesEffectDefaultColorsDefault()[selectedEffectId];
  dependencyMap = tmp3;
  if (cResult[0] !== selectedEffectId) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return arg0[0];
        }
      }
      cResult[2] = C;
      const tmp5 = C;
    } else {
      class C {
        constructor(arg0) {
          return arg0[0];
        }
      }
    }
    const mapped = getColorPresetsForEffect(selectedEffectId).map(tmp5);
    cResult[0] = selectedEffectId;
    cResult[1] = mapped;
    const arr = getColorPresetsForEffect(selectedEffectId);
  } else {
    class C {
      constructor(arg0) {
        return arg0[0];
      }
    }
    const tmp11 = color(noop.useState(selectedColor), 2);
    color = tmp11[0];
    noop = tmp11[1];
    closure_5 = tmp13;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(arg0) {
          tmp = closure_4(arg0);
          return;
        }
      }
      cResult[3] = M;
      const tmp15 = M;
    } else {
      class M {
        constructor(arg0) {
          tmp = closure_4(arg0);
          return;
        }
      }
    }
    closure_6 = tmp15;
    if (cResult[4] === tmp3[0]) {
      class M {
        constructor(arg0) {
          tmp = closure_4(arg0);
          return;
        }
      }
      if (cResult[7] === color) {
        class M {
          constructor(arg0) {
            tmp = closure_4(arg0);
            return;
          }
        }
        if (cResult[10] === tmp3[0]) {
          class M {
            constructor(arg0) {
              tmp = closure_4(arg0);
              return;
            }
          }
        }
        class L {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[12]);
            result = obj.triggerHapticFeedback(closure_0(closure_2[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
            if (closure_5) {
              tmp3 = onSelectColor;
              tmp4 = closure_3;
              tmp5 = onSelectColor(closure_3);
              tmp6 = closure_1;
              obj2 = closure_1(tmp[15]);
              tmp7 = AnalyticEvents;
              obj1 = { default: null, colors: null };
              tmp8 = closure_2;
              obj1.default = closure_3 === closure_2[0];
              items = [];
              items[0] = closure_3;
              obj1.colors = items;
              trackResult = obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj1);
            }
            obj4 = closure_1(tmp[13]);
            hideActionSheetResult = obj4.hideActionSheet();
            return;
          }
        }
        cResult[10] = tmp3[0];
        cResult[11] = tmp13;
        cResult[12] = color;
        cResult[13] = onSelectColor;
        cResult[14] = L;
      }
      class H {
        constructor() {
          obj = { color: closure_3, onSelect() { ... }, actionButtonVariant: "primary" };
          tmp = closure_1(closure_2[14])(obj);
          return;
        }
      }
      cResult[7] = color;
      cResult[8] = onSelectColor;
      cResult[9] = H;
    }
    class B {
      constructor() {
        obj = closure_0(closure_2[12]);
        result = obj.triggerHapticFeedback(closure_0(closure_2[12]).HapticFeedbackTypes.IMPACT_LIGHT);
        tmp2 = onSelectColor(closure_2[0]);
        obj2 = closure_1(closure_2[13]);
        hideActionSheetResult = obj2.hideActionSheet();
        return;
      }
    }
    cResult[4] = tmp3[0];
    cResult[5] = onSelectColor;
    cResult[6] = B;
  }
}) : ((selectedColor) => {
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  const onSelectColor = selectedColor.onSelectColor;
  let tmp = closure_11();
  color = tmp;
  const tmp5 = selectedEffectId(onSelectColor[11])()[selectedEffectId];
  noop = tmp5;
  let items = [selectedEffectId];
  const memo = noop.useMemo(() => getColorPresetsForEffect(selectedEffectId).map((item) => item[0]), items);
  let tmp6 = color(noop.useState(selectedColor), 2);
  color = tmp6[0];
  closure_6 = tmp6[1];
  const items1 = [color, selectedColor];
  const memo1 = noop.useMemo(() => first !== selectedColor, items1);
  closure_8 = noop.useCallback((arg0) => {
    closure_6(arg0);
  }, []);
  const items2 = [tmp5, onSelectColor];
  const items3 = [color, onSelectColor];
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    onSelectColor(32);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items2);
  const items4 = [memo1, color, onSelectColor, tmp5];
  const callback1 = noop.useCallback(() => {
    showCustomColorPickerActionSheetDefault({
      color,
      onSelect(arg0) {
        const result = selectedColor(onSelectColor[12]).triggerHapticFeedback(selectedColor(onSelectColor[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_2(arg0);
        const obj = selectedColor(onSelectColor[12]);
        selectedEffectId(onSelectColor[13]).hideActionSheet();
      },
      actionButtonVariant: "primary"
    });
  }, items3);
  const callback2 = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    if (memo1) {
      onSelectColor(first);
      const obj3 = { default: first === 32, colors: null };
      const items = [first];
      obj3.colors = items;
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items4);
  let obj2 = { ref: selectedColor(onSelectColor[10]).useBottomSheetRef().bottomSheetRef, header: null, children: null };
  let obj3 = { title: null, trailing: null };
  let obj = selectedColor(onSelectColor[10]);
  let tmp4 = selectedEffectId;
  const intl = selectedColor(onSelectColor[16]).intl;
  obj3.title = intl.string(selectedEffectId(onSelectColor[17])["6OxgN7"]);
  const obj4 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = selectedColor(onSelectColor[16]).intl;
  obj4.text = intl2.string(selectedColor(onSelectColor[16]).t.XqMe3N);
  obj4.onPress = callback2;
  obj3.trailing = closure_9(selectedColor(onSelectColor[19]).Button, obj4);
  obj2.header = closure_9(selectedEffectId(onSelectColor[18]), obj3);
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.contentContainer, children: null };
  const obj7 = { style: tmp.presetGrid, children: null };
  const tmp13 = selectedEffectId(onSelectColor[18]);
  const obj8 = selectedEffectId(onSelectColor[21]);
  obj7.children = selectedEffectId(onSelectColor[21]).chunk(memo.slice(0, 12), 6).map((arr, index) => {
    closure_0 = index;
    return closure_1_9(first, {
      style: presetRow.presetRow,
      children: arr.map((item, index) => {
        closure_0 = item;
        const obj = {
          onPress() {
            return closure_2_8(closure_0);
          },
          style: null,
          accessibilityRole: "button",
          accessibilityLabel: null
        };
        const items = [presetColor.presetColor, , ];
        const obj2 = { backgroundColor: utils_ColorUtils.int2hex(item) };
        items[1] = obj2;
        items[2] = item === first && presetColor.presetColorSelected;
        obj.style = items;
        const tmp = options;
        const tmp2 = timestampProducer;
        const tmp6 = item === first && presetColor.presetColorSelected;
        obj.accessibilityLabel = utils_ColorUtils.int2hex(item);
        return tmp(tmp2, obj, 6 * closure_0 + index);
      })
    }, index);
  });
  const items5 = [closure_9(color, obj7), ];
  const obj9 = { style: tmp.buttonsContainer, children: null };
  let tmp12Result = selectedEffectId === selectedColor(onSelectColor[22]).DisplayNameEffect.SOLID;
  if (tmp12Result) {
    const obj10 = { style: tmp.button, children: null };
    const obj11 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
    const intl3 = tmp2(tmp3[16]).intl;
    obj11.text = intl3.string(tmp4(tmp3[17]).gIeJTK);
    obj11.onPress = callback;
    obj10.children = tmp12(tmp2(tmp3[19]).Button, obj11);
    tmp12Result = tmp12(tmp14, obj10);
  }
  const items6 = [tmp12Result, ];
  const obj12 = { style: tmp.button, children: null };
  const obj13 = { text: null, onPress: null, variant: "secondary", size: "md", icon: null, grow: true };
  const intl4 = tmp2(tmp3[16]).intl;
  obj13.text = intl4.string(selectedColor(onSelectColor[16]).t["FHBa/1"]);
  obj13.onPress = callback1;
  obj13.icon = closure_9(selectedColor(onSelectColor[23]).EyeDropperIcon, { size: "sm" });
  obj12.children = closure_9(selectedColor(onSelectColor[19]).Button, obj13);
  items6[1] = closure_9(color, obj12);
  obj9.children = items6;
  items5[1] = closure_10(color, obj9);
  obj6.children = items5;
  obj5.children = closure_10(color, obj6);
  obj2.children = closure_9(color, obj5);
  return closure_9(selectedColor(onSelectColor[24]).BottomSheet, obj2);
});
