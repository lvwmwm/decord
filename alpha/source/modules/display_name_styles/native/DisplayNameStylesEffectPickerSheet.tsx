// Module ID: 17606
// Function ID: 17607
// Name: DisplayNameStylesEffectPickerSheet
// Dependencies: [32, 19, 17, 1403, 21, 5143, 575, 8887, 17602, 5386, 5384, 5398, 17604, 1113, 3059, 5770, 6165, 10959, 10956, 10957, 2]
// Exports: default

// Module 17606 (DisplayNameStylesEffectPickerSheet)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1403 */;
import _modDef3059 from "module_3059" /* 3059 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import HapticUtils from "HapticUtils" /* 5386 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10956 */;
import types from "types" /* 10957 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 10959 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
function EffectTile(arg0) {
  let effectId;
  let items1;
  let obj2;
  let onClick;
  let selected;
  let showNewDot;
  let tmp9;
  let userId;
  ({ effectId, selected, showNewDot } = arg0);
  ({ userId, onClick } = arg0);
  const tmp = closure_10();
  const intl = intl3.intl;
  const string = intl.string;
  let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
  if (OpWJ3f == null) {
    OpWJ3f = _modDef3059.OpWJ3f;
  }
  const stringResult = string(OpWJ3f);
  const items = [tmp.effectCard, ];
  const obj = { onPress: onClick, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: { selected }, children: tmp9(hasOwnProperty, obj2) };
  const tmp2Result = useDisplayNameStylesEffectConfigs;
  const displayNameStylesEffectConfig = tmp2Result.useDisplayNameStylesEffectConfig(effectId);
  const tmp8 = metroRequire;
  tmp9 = React4;
  if (selected) {
    selected = tmp.effectCardSelected;
  }
  obj2 = { style: items, children: items1 };
  items[1] = selected;
  const obj3 = { userId, userName: stringResult, effectDisplayType: types.EffectDisplayType.STATIC, pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles, style: tmp.effectName, variant: "body-md/semibold" };
  const tmp11 = UsernameWithEffectsDefault;
  items1 = [metroImportAll(tmp11, obj3), ];
  if (showNewDot) {
    const obj4 = { style: tmp.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    showNewDot = tmp7(tmp10, obj4);
  }
  items1[1] = showNewDot;
  return metroImportAll(tmp8, obj, effectId);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, contentContainer: obj2, gridContainer: { flexWrap: "wrap", width: 350 }, effectCard: size, effectCardSelected: obj3, effectName: { textAlign: "center" }, tileNewDot: size1 };
obj2 = { padding: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_16, alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: 109, height: 80, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj3 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
size1 = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.space.PX_8 / 2, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, shadowColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, shadowRadius: nativeDefault.space.PX_4, shadowOpacity: 1, elevation: 4 };
let closure_10 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx");

export default function DisplayNameStylesEffectPickerSheet(userId) {
  let Button;
  let Stack;
  let _undefined;
  let c2;
  let c3;
  let closure_5;
  let first;
  let intl;
  let intl2;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let onSelectEffect;
  let selectedEffectId;
  let tmp12;
  userId = userId.userId;
  ({ selectedEffectId, onSelectEffect } = userId);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  let closure_7;
  let tmp = closure_10();
  let tmp3 = dependencyMap;
  let obj = userId(8887);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  let obj2 = userId(17602);
  const displayNameStylesNewEffects = obj2.useDisplayNameStylesNewEffects(closure_7);
  ({ dotEffectIds: c2, dismissEffectDot: c3 } = displayNameStylesNewEffects);
  [first, closure_5] = first.useState(selectedEffectId);
  let closure_6 = tmp7;
  const arr = closure_7;
  closure_7 = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  const items = [first !== selectedEffectId, first, onSelectEffect];
  let tmp9 = null;
  if (null != userId) {
    const obj3 = { ref: bottomSheetRef, header: closure_8(tmp12, obj4), children: closure_8(closure_5, obj6) };
    const BottomSheet = tmp2(5398).BottomSheet;
    obj4 = { title: intl.string(onSelectEffect(3059).RVtMxT), trailing: closure_8(Button, obj5) };
    tmp12 = onSelectEffect(17604);
    intl = tmp2(1113).intl;
    obj5 = { text: intl2.string(userId(1113).t.XqMe3N), onPress: tmp8, variant: "primary", size: "sm" };
    Button = tmp2(5770).Button;
    intl2 = tmp2(1113).intl;
    obj6 = { style: tmp.container, children: closure_8(closure_5, obj7) };
    obj7 = { style: tmp.contentContainer, children: closure_8(Stack, obj8) };
    obj8 = {
      direction: "horizontal",
      spacing: 8,
      style: tmp.gridContainer,
      children: arr.map((effectId) => {
          userId = effectId;
          const obj = {
            userId,
            effectId,
            selected: effectId === first,
            showNewDot: _undefined.has(effectId),
            onClick() {
              closure_7(effectId);
              const tmp = effectId;
              if (set.has(effectId)) {
                c3(tmp);
              }
            }
          };
          return closure_1_8(EffectTile, obj, effectId);
        })
    };
    Stack = tmp2(6165).Stack;
    tmp9 = closure_8(BottomSheet, obj3);
  }
  return tmp9;
};
