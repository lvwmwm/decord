// Module ID: 14106
// Function ID: 107101
// Name: EffectTile
// Dependencies: []
// Exports: default

// Module 14106 (EffectTile)
function EffectTile(arg0) {
  let effectId;
  let onClick;
  let selected;
  let showNewDot;
  let userId;
  ({ effectId, selected, showNewDot } = arg0);
  ({ userId, onClick } = arg0);
  const tmp = callback3();
  const intl = arg1(dependencyMap[14]).intl;
  let OpWJ3f = arg1(dependencyMap[18]).DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
  if (null == OpWJ3f) {
    OpWJ3f = importDefault(dependencyMap[15]).OpWJ3f;
  }
  const stringResult = intl.string(OpWJ3f);
  let obj = arg1(dependencyMap[18]);
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(effectId);
  let hasItem = FLYWHEEL_EFFECTS.includes(effectId);
  obj = { onPress: onClick, accessibilityRole: "button" };
  let combined = stringResult;
  if (hasItem) {
    const intl2 = arg1(dependencyMap[14]).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + stringResult + ", " + intl2.string(arg1(dependencyMap[14]).t.oW0eUd);
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
  const obj2 = { userId, userName: stringResult, effectDisplayType: arg1(dependencyMap[20]).EffectDisplayType.STATIC, pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles, style: tmp.effectName, variant: "text-md/semibold" };
  const items1 = [callback2(importDefault(dependencyMap[19]), obj2), , ];
  if (showNewDot) {
    const obj3 = { Text: 5375, string: 1896939776, y: 8000, style: tmp.tileNewDot };
    showNewDot = callback2(closure_5, obj3);
  }
  items1[1] = showNewDot;
  if (hasItem) {
    const obj4 = { style: tmp.betaCaption };
    const intl3 = arg1(dependencyMap[14]).intl;
    obj4.children = intl3.string(arg1(dependencyMap[14]).t.oW0eUd);
    hasItem = callback2(arg1(dependencyMap[21]).Text, obj4);
  }
  items1[2] = hasItem;
  obj1.children = items1;
  obj.children = closure_9(closure_5, obj1);
  return callback2(closure_6, obj, effectId);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Pressable: closure_6 } = arg1(dependencyMap[2]));
const FLYWHEEL_EFFECTS = arg1(dependencyMap[3]).FLYWHEEL_EFFECTS;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { header: { paddingTop: 4 }, headerTrailing: { "Null": null, "Null": null }, container: { flex: 1 } };
obj = { padding: importDefault(dependencyMap[6]).space.PX_8, paddingLeft: importDefault(dependencyMap[6]).space.PX_16, alignItems: "center" };
obj.contentContainer = obj;
obj.gridContainer = {};
const tmp3 = arg1(dependencyMap[4]);
obj.effectCard = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[6]).radii.sm, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE };
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[6]).radii.sm, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE };
obj.effectCardSelected = { borderColor: importDefault(dependencyMap[6]).colors.CONTROL_BRAND_FOREGROUND };
obj.effectName = { textAlign: "center" };
const obj2 = { borderColor: importDefault(dependencyMap[6]).colors.CONTROL_BRAND_FOREGROUND };
obj.tileNewDot = { position: "absolute", top: importDefault(dependencyMap[6]).space.PX_8, right: importDefault(dependencyMap[6]).space.PX_8, width: importDefault(dependencyMap[6]).space.PX_8, height: importDefault(dependencyMap[6]).space.PX_8, borderRadius: importDefault(dependencyMap[6]).space.PX_8 / 2, backgroundColor: importDefault(dependencyMap[6]).colors.BADGE_BACKGROUND_BRAND, shadowColor: importDefault(dependencyMap[6]).colors.BADGE_BACKGROUND_BRAND, shadowRadius: importDefault(dependencyMap[6]).space.PX_4, shadowOpacity: 1, elevation: 4 };
const obj4 = { <string:1196532342>: null, <string:1649435100>: null, <string:4082282146>: null, <string:1657055817>: null, <string:4082216610>: null, bottom: importDefault(dependencyMap[6]).space.PX_4 };
obj.betaCaption = obj4;
let closure_10 = obj.createStyles(obj);
const obj3 = { position: "absolute", top: importDefault(dependencyMap[6]).space.PX_8, right: importDefault(dependencyMap[6]).space.PX_8, width: importDefault(dependencyMap[6]).space.PX_8, height: importDefault(dependencyMap[6]).space.PX_8, borderRadius: importDefault(dependencyMap[6]).space.PX_8 / 2, backgroundColor: importDefault(dependencyMap[6]).colors.BADGE_BACKGROUND_BRAND, shadowColor: importDefault(dependencyMap[6]).colors.BADGE_BACKGROUND_BRAND, shadowRadius: importDefault(dependencyMap[6]).space.PX_4, shadowOpacity: 1, elevation: 4 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx");

export default function DisplayNameStylesEffectPickerSheet(userId) {
  let onSelectEffect;
  let selectedEffectId;
  userId = userId.userId;
  const arg1 = userId;
  ({ selectedEffectId, onSelectEffect } = userId);
  const importDefault = onSelectEffect;
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  let obj1 = arg1(dependencyMap[8]);
  const visibleEffectOrder = obj1.useVisibleEffectOrder();
  let obj2 = arg1(dependencyMap[9]);
  const displayNameStylesNewEffects = obj2.useDisplayNameStylesNewEffects(visibleEffectOrder);
  ({ dotEffectIds: closure_2, dismissEffectDot: closure_3 } = displayNameStylesNewEffects);
  const tmp3 = callback(React.useState(selectedEffectId), 2);
  const first = tmp3[0];
  const React = first;
  let closure_5 = tmp3[1];
  const tmp5 = first !== selectedEffectId;
  let closure_7 = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items = [tmp5, first, onSelectEffect];
  let tmp7 = null;
  if (null != userId) {
    obj = {};
    obj.ref = obj.useBottomSheetRef().bottomSheetRef;
    obj = { style: tmp.header };
    obj1 = {};
    const intl = arg1(dependencyMap[14]).intl;
    obj1.title = intl.string(importDefault(dependencyMap[15]).RVtMxT);
    obj2 = { style: tmp.headerTrailing };
    const obj3 = {};
    const intl2 = arg1(dependencyMap[14]).intl;
    obj3.text = intl2.string(arg1(dependencyMap[14]).t.XqMe3N);
    obj3.onPress = tmp6;
    obj3.variant = "primary";
    obj3.size = "sm";
    obj2.children = callback2(arg1(dependencyMap[16]).Button, obj3);
    obj1.trailing = callback2(closure_5, obj2);
    obj.children = callback2(arg1(dependencyMap[13]).BottomSheetTitleHeader, obj1);
    obj.header = callback2(closure_5, obj);
    const obj4 = { style: tmp.container };
    const obj5 = { style: tmp.contentContainer };
    const obj6 = {
      pink: -144637951,
      plum: 17545793,
      style: tmp.gridContainer,
      children: visibleEffectOrder.map((effectId) => {
          const userId = effectId;
          return callback2(closure_11, {
            userId,
            effectId,
            selected: effectId === first,
            showNewDot: set.has(effectId),
            onClick() {
              callback2(arg0);
              if (set.has(arg0)) {
                callback(arg0);
              }
            }
          }, effectId);
        })
    };
    obj5.children = callback2(arg1(dependencyMap[17]).Stack, obj6);
    obj4.children = callback2(closure_5, obj5);
    obj.children = callback2(closure_5, obj4);
    tmp7 = callback2(arg1(dependencyMap[12]).BottomSheet, obj);
  }
  return tmp7;
};
