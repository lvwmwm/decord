// Module ID: 14889
// Function ID: 14890
// Name: DisplayNameStylesFontPickerSheet
// Dependencies: [32, 19, 17, 1085, 21, 4836, 576, 7615, 14884, 14886, 1392, 1389, 4801, 4800, 6571, 14890, 1115, 2877, 5281, 5279, 14172, 9188, 4832, 4787, 2]
// Exports: default

// Module 14889 (DisplayNameStylesFontPickerSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import _modDef2877 from "module_2877" /* 2877 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import DisplayNameStylesSheetHeaderDefault from "DisplayNameStylesSheetHeader" /* 14890 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, constants, dependencyMap, importDefault;

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
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default function DisplayNameStylesFontPickerSheet(displayName) {
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
  let obj = onSelectFont(7615);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  let obj2 = onSelectFont(14884);
  const visibleFontOrder = obj2.useVisibleFontOrder();
  let obj3 = onSelectFont(14886);
  const displayNameStylesNewFonts = obj3.useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: c2, dismissFontDot: c3 } = displayNameStylesNewFonts);
  [first, closure_5] = first.useState(selectedFontId);
  let tmp15Result = first !== onSelectFont(1392).DisplayNameFont.DEFAULT;
  let obj4 = onSelectFont(1389);
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
  BottomSheet = onSelectFont(6571).BottomSheet;
  const tmp12 = importDefault;
  obj6 = { title: intl.string(_modDef2877["0JCuGm"]), trailing: closure_8(Button, obj7) };
  tmp13 = DisplayNameStylesSheetHeaderDefault;
  intl = onSelectFont(1115).intl;
  obj7 = { text: intl2.string(onSelectFont(1115).t.XqMe3N), onPress: callback, variant: "primary", size: "sm" };
  Button = onSelectFont(5281).Button;
  intl2 = onSelectFont(1115).intl;
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
  const Stack = onSelectFont(5279).Stack;
  items1 = [closure_8(Stack, obj10), ];
  if (tmp15Result) {
    tmp15Result = hasNonLatinLettersResult;
  }
  if (tmp15Result) {
    const obj11 = { style: tmp.nonLatinDisclaimer, children: items2 };
    items2 = [tmp11(tmp2(4787).CircleInformationIcon, { size: "sm" }), ];
    const obj12 = { variant: "text-xs/normal", color: "text-subtle", style: tmp.disclaimerText, children: intl3.string(_modDef2877["+O1xL2"]) };
    let Text = tmp2(4832).Text;
    intl3 = tmp2(1115).intl;
    items2[1] = tmp11(Text, obj12);
    tmp15Result = tmp15(tmp14, obj11);
  }
  items1[1] = tmp15Result;
  return tmp11(BottomSheet, obj5);
};
