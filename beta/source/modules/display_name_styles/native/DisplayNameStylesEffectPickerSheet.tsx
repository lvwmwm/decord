// Module ID: 14891
// Function ID: 14892
// Name: DisplayNameStylesEffectPickerSheet
// Dependencies: [32, 19, 17, 21, 4836, 576, 7615, 14885, 14886, 4801, 4800, 6571, 14890, 1115, 2877, 5281, 5279, 10360, 10357, 10358, 2]
// Exports: default

// Module 14891 (DisplayNameStylesEffectPickerSheet)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import _modDef2877 from "module_2877" /* 2877 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10357 */;
import types from "types" /* 10358 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 10360 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
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
  const tmp = closure_9();
  const intl = intl3.intl;
  const string = intl.string;
  let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
  if (OpWJ3f == null) {
    OpWJ3f = _modDef2877.OpWJ3f;
  }
  const stringResult = string(OpWJ3f);
  const items = [tmp.effectCard, ];
  const obj = { onPress: onClick, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: { selected }, children: tmp9(hasOwnProperty, obj2) };
  const tmp2Result = useDisplayNameStylesEffectConfigs;
  const displayNameStylesEffectConfig = tmp2Result.useDisplayNameStylesEffectConfig(effectId);
  const tmp8 = metroRequire;
  tmp9 = metroImportAll;
  if (selected) {
    selected = tmp.effectCardSelected;
  }
  obj2 = { style: items, children: items1 };
  items[1] = selected;
  const obj3 = { userId, userName: stringResult, effectDisplayType: types.EffectDisplayType.STATIC, pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles, style: tmp.effectName, variant: "text-md/semibold" };
  const tmp11 = UsernameWithEffectsDefault;
  items1 = [metroImportDefault(tmp11, obj3), ];
  if (showNewDot) {
    const obj4 = { style: tmp.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    showNewDot = tmp7(tmp10, obj4);
  }
  items1[1] = showNewDot;
  return metroImportDefault(tmp8, obj, effectId);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, contentContainer: obj2, gridContainer: { flexWrap: "wrap", width: 350 }, effectCard: size, effectCardSelected: obj3, effectName: { textAlign: "center" }, tileNewDot: size1 };
obj2 = { padding: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_16, alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: 109, height: 80, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj3 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
size1 = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.space.PX_8 / 2, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, shadowColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, shadowRadius: nativeDefault.space.PX_4, shadowOpacity: 1, elevation: 4 };
let closure_9 = createStyles(obj);
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
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let onSelectEffect;
  let selectedEffectId;
  let tmp12;
  userId = userId.userId;
  ({ selectedEffectId, onSelectEffect } = userId);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  let tmp = closure_9();
  let tmp3 = dependencyMap;
  let obj = userId(7615);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  let obj2 = userId(14885);
  const visibleEffectOrder = obj2.useVisibleEffectOrder();
  const obj3 = userId(14886);
  const displayNameStylesNewEffects = obj3.useDisplayNameStylesNewEffects(visibleEffectOrder);
  ({ dotEffectIds: c2, dismissEffectDot: c3 } = displayNameStylesNewEffects);
  [first, closure_5] = first.useState(selectedEffectId);
  let closure_6 = tmp7;
  let closure_7 = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  const items = [first !== selectedEffectId, first, onSelectEffect];
  let tmp9 = null;
  if (null != userId) {
    const obj4 = { ref: bottomSheetRef, header: closure_7(tmp12, obj5), children: closure_7(closure_5, obj7) };
    BottomSheet = tmp2(6571).BottomSheet;
    obj5 = { title: intl.string(onSelectEffect(2877).RVtMxT), trailing: closure_7(Button, obj6) };
    tmp12 = onSelectEffect(14890);
    intl = tmp2(1115).intl;
    obj6 = { text: intl2.string(userId(1115).t.XqMe3N), onPress: tmp8, variant: "primary", size: "sm" };
    Button = tmp2(5281).Button;
    intl2 = tmp2(1115).intl;
    obj7 = { style: tmp.container, children: closure_7(closure_5, obj8) };
    obj8 = { style: tmp.contentContainer, children: closure_7(Stack, obj9) };
    obj9 = {
      direction: "horizontal",
      spacing: 8,
      style: tmp.gridContainer,
      children: visibleEffectOrder.map((effectId) => {
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
          return closure_7(EffectTile, obj, effectId);
        })
    };
    Stack = tmp2(5279).Stack;
    tmp9 = closure_7(BottomSheet, obj4);
  }
  return tmp9;
};
