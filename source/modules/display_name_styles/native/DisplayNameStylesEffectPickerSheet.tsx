// Module ID: 14281
// Function ID: 109655
// Name: EffectTile
// Dependencies: [57, 31, 27, 1861, 33, 4130, 689, 7186, 14276, 14277, 4099, 4098, 5187, 5186, 1212, 2556, 4543, 4541, 8563, 8558, 8559, 4126, 2]
// Exports: default

// Module 14281 (EffectTile)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { FLYWHEEL_EFFECTS } from "items3";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function EffectTile(arg0) {
  let effectId;
  let onClick;
  let selected;
  let showNewDot;
  let userId;
  ({ effectId, selected, showNewDot } = arg0);
  ({ userId, onClick } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const intl = require(1212) /* getSystemLocale */.intl;
  let OpWJ3f = require(8563) /* DISPLAY_NAME_STYLES_EFFECT_NAMES */.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
  if (null == OpWJ3f) {
    OpWJ3f = importDefault(2556).OpWJ3f;
  }
  const stringResult = intl.string(OpWJ3f);
  let obj = require(8563) /* DISPLAY_NAME_STYLES_EFFECT_NAMES */;
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(effectId);
  let hasItem = FLYWHEEL_EFFECTS.includes(effectId);
  obj = { onPress: onClick, accessibilityRole: "button" };
  let combined = stringResult;
  if (hasItem) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const _HermesInternal = HermesInternal;
    combined = "" + stringResult + ", " + intl2.string(require(1212) /* getSystemLocale */.t.oW0eUd);
  }
  obj.accessibilityLabel = combined;
  obj = { selected };
  obj.accessibilityState = obj;
  const obj1 = {};
  const items = [tmp.effectCard, ];
  if (selected) {
    selected = tmp.effectCardSelected;
  }
  items[1] = selected;
  obj1.style = items;
  const obj2 = { userId, userName: stringResult, effectDisplayType: require(8559) /* DisplayNameStyleColorPreset */.EffectDisplayType.STATIC, pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles, style: tmp.effectName, variant: "text-md/semibold" };
  const items1 = [callback2(importDefault(8558), obj2), , ];
  if (showNewDot) {
    const obj3 = { style: tmp.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    showNewDot = callback2(closure_5, obj3);
  }
  items1[1] = showNewDot;
  if (hasItem) {
    const obj4 = { variant: "text-xs/normal", color: "text-subtle", style: tmp.betaCaption };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj4.children = intl3.string(require(1212) /* getSystemLocale */.t.oW0eUd);
    hasItem = callback2(require(4126) /* Text */.Text, obj4);
  }
  items1[2] = hasItem;
  obj1.children = items1;
  obj.children = closure_9(closure_5, obj1);
  return callback2(closure_6, obj, effectId);
}
({ View: closure_5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { paddingTop: 4 }, headerTrailing: { justifyContent: "center", alignItems: "center" }, container: { flex: 1 } };
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_8, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.gridContainer = { flexWrap: "wrap", width: 350 };
let obj1 = { width: 109, height: 80, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.effectCard = obj1;
_createForOfIteratorHelperLoose.effectCardSelected = { borderColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
_createForOfIteratorHelperLoose.effectName = { textAlign: "center" };
let obj2 = { borderColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
_createForOfIteratorHelperLoose.tileNewDot = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8, width: require("_createForOfIteratorHelperLoose").space.PX_8, height: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").space.PX_8 / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND, shadowColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND, shadowRadius: require("_createForOfIteratorHelperLoose").space.PX_4, shadowOpacity: 1, elevation: 4 };
let obj4 = { position: "absolute", bottom: require("_createForOfIteratorHelperLoose").space.PX_4, left: 0, right: 0, textAlign: "center" };
_createForOfIteratorHelperLoose.betaCaption = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8, width: require("_createForOfIteratorHelperLoose").space.PX_8, height: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").space.PX_8 / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND, shadowColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND, shadowRadius: require("_createForOfIteratorHelperLoose").space.PX_4, shadowOpacity: 1, elevation: 4 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx");

export default function DisplayNameStylesEffectPickerSheet(userId) {
  let _slicedToArray;
  let dependencyMap;
  let onSelectEffect;
  let selectedEffectId;
  userId = userId.userId;
  ({ selectedEffectId, onSelectEffect } = userId);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = userId(7186);
  let obj1 = userId(14276);
  const visibleEffectOrder = obj1.useVisibleEffectOrder();
  let obj2 = userId(14277);
  const displayNameStylesNewEffects = obj2.useDisplayNameStylesNewEffects(visibleEffectOrder);
  ({ dotEffectIds: dependencyMap, dismissEffectDot: _slicedToArray } = displayNameStylesNewEffects);
  const tmp3 = callback(first.useState(selectedEffectId), 2);
  first = tmp3[0];
  let closure_5 = tmp3[1];
  let closure_6 = tmp5;
  let closure_7 = first.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items = [first !== selectedEffectId, first, onSelectEffect];
  let tmp7 = null;
  if (null != userId) {
    obj = {};
    obj.ref = obj.useBottomSheetRef().bottomSheetRef;
    obj = { style: tmp.header };
    obj1 = {};
    const intl = userId(1212).intl;
    obj1.title = intl.string(onSelectEffect(2556).RVtMxT);
    obj2 = { style: tmp.headerTrailing };
    const obj3 = {};
    const intl2 = userId(1212).intl;
    obj3.text = intl2.string(userId(1212).t.XqMe3N);
    obj3.onPress = tmp6;
    obj3.variant = "primary";
    obj3.size = "sm";
    obj2.children = callback2(userId(4543).Button, obj3);
    obj1.trailing = callback2(closure_5, obj2);
    obj.children = callback2(userId(5186).BottomSheetTitleHeader, obj1);
    obj.header = callback2(closure_5, obj);
    const obj4 = { style: tmp.container };
    const obj5 = { style: tmp.contentContainer };
    const obj6 = {
      direction: "horizontal",
      spacing: 8,
      style: tmp.gridContainer,
      children: visibleEffectOrder.map((effectId) => {
          let closure_0 = effectId;
          return outer1_8(outer1_11, {
            userId: closure_0,
            effectId,
            selected: effectId === first,
            showNewDot: set.has(effectId),
            onClick() {
              outer1_7(closure_0);
              if (outer1_2.has(closure_0)) {
                outer1_3(closure_0);
              }
            }
          }, effectId);
        })
    };
    obj5.children = callback2(userId(4541).Stack, obj6);
    obj4.children = callback2(closure_5, obj5);
    obj.children = callback2(closure_5, obj4);
    tmp7 = callback2(userId(5187).BottomSheet, obj);
  }
  return tmp7;
};
