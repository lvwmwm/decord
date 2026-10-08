// Module ID: 15439
// Function ID: 15440
// Name: DisplayNameStylesFontPickerSheet
// Dependencies: [32, 19, 17, 1096, 21, 5090, 587, 558, 576, 8270, 15434, 15436, 1409, 1406, 5055, 5054, 1126, 2955, 15440, 5375, 14686, 8825, 5086, 5373, 5012, 6829, 2]

// Module 15439 (DisplayNameStylesFontPickerSheet)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import _modDef2955 from "module_2955" /* 2955 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import HapticUtils from "HapticUtils" /* 5055 */;
import DisplayNameStylesSheetHeaderDefault from "DisplayNameStylesSheetHeader" /* 15440 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, constants, dependencyMap, hideActionSheetResult, importDefault, tmp6;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, contentContainer: obj2, gridContainer: { flexWrap: "wrap", maxWidth: 350 }, fontCard: size, fontCardSelected: obj3, fontText: { fontSize: 24, lineHeight: 34, textAlign: "center", textAlignVertical: "center" }, tileNewDot: size1, nonLatinDisclaimer: obj4, disclaimerText: { flex: 1 } };
obj2 = { padding: nativeDefault.space.PX_8, alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: 79, height: 79, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj3 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
size1 = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.space.PX_8 / 2, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, shadowColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, shadowRadius: nativeDefault.space.PX_4, shadowOpacity: 1, elevation: 4 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, marginTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesFontPickerSheet(displayName) {
  let closure_1;
  let dotFontIds;
  let first;
  let onSelectFont;
  let selectedFontId;
  let tmp12;
  let tmp = onSelectFont;
  let tmp2 = dotFontIds;
  let obj = onSelectFont(dotFontIds[8]);
  const cResult = obj.c(47);
  ({ selectedFontId, onSelectFont } = displayName);
  displayName = displayName.displayName;
  importDefault = closure_10();
  const tmp4 = closure_10();
  let obj2 = onSelectFont(dotFontIds[9]);
  const bottomSheetRef = obj2.useBottomSheetRef().bottomSheetRef;
  let obj3 = onSelectFont(dotFontIds[10]);
  const visibleFontOrder = obj3.useVisibleFontOrder();
  let obj4 = onSelectFont(dotFontIds[11]);
  const displayNameStylesNewFonts = obj4.useDisplayNameStylesNewFonts(visibleFontOrder);
  dotFontIds = displayNameStylesNewFonts.dotFontIds;
  const dismissFontDot = displayNameStylesNewFonts.dismissFontDot;
  const tmp7 = dismissFontDot(first.useState(selectedFontId), 2);
  first = tmp7[0];
  let closure_5 = tmp7[1];
  const DEFAULT = onSelectFont(dotFontIds[12]).DisplayNameFont.DEFAULT;
  if (cResult[0] !== displayName) {
    const tmpResult = tmp(tmp2[13]);
    const hasNonLatinLettersResult = tmpResult.hasNonLatinLetters(displayName);
    cResult[0] = displayName;
    cResult[1] = hasNonLatinLettersResult;
    let tmp9 = hasNonLatinLettersResult;
  } else {
    tmp9 = cResult[1];
  }
  const tmp11 = first !== selectedFontId;
  let closure_6 = tmp11;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        tmp = closure_5(displayName);
        return;
      }
    }
    cResult[2] = M;
    tmp12 = M;
  } else {
    class M {
      constructor(arg0) {
        tmp = closure_5(displayName);
        return;
      }
    }
  }
  M = tmp12;
  if (cResult[3] === tmp11) {
    class M {
      constructor(arg0) {
        tmp = closure_5(displayName);
        return;
      }
    }
  }
  class E {
    constructor() {
      tmp = closure_2;
      obj = closure_0(closure_2[14]);
      result = obj.triggerHapticFeedback(closure_0(closure_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      tmp3 = closure_6;
      if (tmp3) {
        tmp4 = onSelectFont;
        tmp5 = closure_4;
        tmp6 = onSelectFont(closure_4);
      }
      obj2 = closure_1(tmp[15]);
      hideActionSheetResult = obj2.hideActionSheet();
      return;
    }
  }
  cResult[3] = tmp11;
  cResult[4] = first;
  cResult[5] = onSelectFont;
  cResult[6] = E;
}) : (function DisplayNameStylesFontPickerSheet(displayName) {
  let Button;
  let c2;
  let c3;
  let closure_1;
  let closure_5;
  let first;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let onSelectFont;
  let selectedFontId;
  let tmp13;
  ({ selectedFontId, onSelectFont } = displayName);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  displayName = displayName.displayName;
  let tmp = closure_10();
  importDefault = tmp;
  let tmp2 = onSelectFont;
  let tmp3 = dependencyMap;
  let obj = onSelectFont(8270);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  let obj2 = onSelectFont(15434);
  const visibleFontOrder = obj2.useVisibleFontOrder();
  let obj3 = onSelectFont(15436);
  const displayNameStylesNewFonts = obj3.useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c2, dismissFontDot: c3 } = displayNameStylesNewFonts);
  [first, closure_5] = first.useState(selectedFontId);
  let tmp15Result = first !== onSelectFont(1409).DisplayNameFont.DEFAULT;
  let obj4 = onSelectFont(1406);
  let tmp9 = first !== selectedFontId;
  let closure_6 = tmp9;
  const hasNonLatinLettersResult = obj4.hasNonLatinLetters(displayName);
  constants = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  let items = [tmp9, first, onSelectFont];
  const tmp11 = closure_8;
  const callback = first.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    const tmp3 = closure_6;
    if (tmp3) {
      onSelectFont(first);
    }
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items);
  const obj5 = { ref: bottomSheetRef, header: closure_8(tmp13, obj6), children: tmp11(closure_5, obj8) };
  BottomSheet = onSelectFont(6829).BottomSheet;
  const tmp12 = importDefault;
  obj6 = { title: intl.string(_modDef2955["0JCuGm"]), trailing: closure_8(Button, obj7) };
  tmp13 = DisplayNameStylesSheetHeaderDefault;
  intl = onSelectFont(1126).intl;
  obj7 = { text: intl2.string(onSelectFont(1126).t.XqMe3N), onPress: callback, variant: "primary", size: "sm" };
  Button = onSelectFont(5375).Button;
  intl2 = onSelectFont(1126).intl;
  obj8 = { style: tmp.container, children: closure_9(closure_5, obj9) };
  obj9 = { style: tmp.contentContainer, children: items1 };
  const obj10 = {
    direction: "horizontal",
    align: "center",
    justify: "center",
    spacing: 8,
    style: tmp.gridContainer,
    children: visibleFontOrder.map((item) => {
      let items1;
      let items2;
      let obj2;
      let tmp10;
      let closure_0 = item;
      let tmp = first;
      let tmp3 = set;
      const intl = onSelectFont(set[16]).intl;
      const stringResult = intl.string(closure_1(set[20])(item));
      let PRIMARY_SEMIBOLD = onSelectFont(set[21]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[item];
      const tmp2 = onSelectFont;
      if (PRIMARY_SEMIBOLD == null) {
        PRIMARY_SEMIBOLD = constants.PRIMARY_SEMIBOLD;
      }
      let hasItem = set.has(item);
      const items = [hasItem.fontCard, ];
      let fontCardSelected = tmp6;
      const obj = {
        onPress() {
          constants(item);
          const tmp = item;
          const tmp3 = hasItem;
          if (tmp3) {
            c3(tmp);
          }
        },
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        accessibilityState: { selected: item === tmp },
        children: tmp10(closure_5, obj2)
      };
      tmp10 = closure_1_9;
      const tmp9 = closure_6;
      if (item === tmp) {
        fontCardSelected = tmp12.fontCardSelected;
      }
      obj2 = { style: items, children: items2 };
      items[1] = fontCardSelected;
      let str = "text-default";
      const Text = tmp2(tmp3[22]).Text;
      if (item === tmp) {
        str = "mobile-text-heading-primary";
      }
      const obj3 = { variant: "text-lg/semibold", color: str, style: items1, children: "Gg" };
      items1 = [hasItem.fontText, { fontFamily: PRIMARY_SEMIBOLD }];
      items2 = [closure_1_8(Text, obj3), ];
      if (hasItem) {
        const obj4 = { style: hasItem.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        hasItem = tmp8(tmp11, obj4);
      }
      items2[1] = hasItem;
      return closure_1_8(tmp9, obj, item);
    })
  };
  const Stack = onSelectFont(5373).Stack;
  items1 = [closure_8(Stack, obj10), ];
  if (tmp15Result) {
    tmp15Result = hasNonLatinLettersResult;
  }
  if (tmp15Result) {
    const obj11 = { style: tmp.nonLatinDisclaimer, children: items2 };
    items2 = [tmp11(tmp2(5012).CircleInformationIcon, { size: "sm" }), ];
    const obj12 = { variant: "text-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: intl3.string(_modDef2955["+O1xL2"]) };
    let Text = tmp2(5086).Text;
    intl3 = tmp2(1126).intl;
    items2[1] = tmp11(Text, obj12);
    tmp15Result = tmp15(tmp14, obj11);
  }
  items1[1] = tmp15Result;
  return tmp11(BottomSheet, obj5);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default tmp5;
