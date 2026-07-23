// Module ID: 14230
// Function ID: 109326
// Name: DisplayNameStylesFontPickerSheet
// Dependencies: [57, 31, 27, 1861, 482, 33, 4130, 689, 7186, 14225, 14227, 1863, 1860, 4099, 4098, 5187, 5186, 1212, 2556, 4543, 4541, 13586, 8516, 4126, 4086, 2]
// Exports: default

// Module 14230 (DisplayNameStylesFontPickerSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { FLYWHEEL_FONTS } from "items3";
import { Fonts } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ View: closure_5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { paddingTop: 4 }, headerTrailing: { justifyContent: "center", alignItems: "center" }, container: { flex: 1 } };
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.gridContainer = { flexWrap: "wrap", maxWidth: 350 };
let obj1 = { width: 79, height: 79, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.fontCard = obj1;
_createForOfIteratorHelperLoose.fontCardSelected = { borderColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
_createForOfIteratorHelperLoose.fontText = { fontSize: 24, lineHeight: 34, textAlign: "center", textAlignVertical: "center" };
let obj2 = { borderColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
_createForOfIteratorHelperLoose.tileNewDot = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8, width: require("_createForOfIteratorHelperLoose").space.PX_8, height: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").space.PX_8 / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND, shadowColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND, shadowRadius: require("_createForOfIteratorHelperLoose").space.PX_4, shadowOpacity: 1, elevation: 4 };
let obj4 = { position: "absolute", bottom: require("_createForOfIteratorHelperLoose").space.PX_4, left: 0, right: 0, textAlign: "center" };
_createForOfIteratorHelperLoose.betaCaption = obj4;
let obj5 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.nonLatinDisclaimer = obj5;
_createForOfIteratorHelperLoose.disclaimerText = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8, width: require("_createForOfIteratorHelperLoose").space.PX_8, height: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").space.PX_8 / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND, shadowColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND, shadowRadius: require("_createForOfIteratorHelperLoose").space.PX_4, shadowOpacity: 1, elevation: 4 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default function DisplayNameStylesFontPickerSheet(displayName) {
  let _slicedToArray;
  let dependencyMap;
  let onSelectFont;
  let selectedFontId;
  ({ selectedFontId, onSelectFont } = displayName);
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  let obj = onSelectFont(7186);
  let obj1 = onSelectFont(14225);
  const visibleFontOrder = obj1.useVisibleFontOrder();
  let obj2 = onSelectFont(14227);
  const displayNameStylesNewFonts = obj2.useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: dependencyMap, dismissFontDot: _slicedToArray } = displayNameStylesNewFonts);
  const tmp3 = callback(first.useState(selectedFontId), 2);
  first = tmp3[0];
  let closure_5 = tmp3[1];
  let tmp5 = first !== onSelectFont(1863).DisplayNameFont.DEFAULT;
  let obj3 = onSelectFont(1860);
  let closure_6 = tmp7;
  let closure_7 = first.useCallback((arg0) => {
    callback(arg0);
  }, []);
  let items = [first !== selectedFontId, first, onSelectFont];
  callback = first.useCallback(() => {
    const result = onSelectFont(outer1_2[13]).triggerHapticFeedback(onSelectFont(outer1_2[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
    if (closure_6) {
      onSelectFont(first);
    }
    const obj = onSelectFont(outer1_2[13]);
    tmp(outer1_2[14]).hideActionSheet();
  }, items);
  obj = { ref: obj.useBottomSheetRef().bottomSheetRef };
  obj = { style: tmp.header };
  obj1 = {};
  let intl = onSelectFont(1212).intl;
  obj1.title = intl.string(importDefault(2556)["0JCuGm"]);
  obj2 = { style: tmp.headerTrailing };
  obj3 = {};
  let intl2 = onSelectFont(1212).intl;
  obj3.text = intl2.string(onSelectFont(1212).t.XqMe3N);
  obj3.onPress = callback;
  obj3.variant = "primary";
  obj3.size = "sm";
  obj2.children = callback2(onSelectFont(4543).Button, obj3);
  obj1.trailing = callback2(closure_5, obj2);
  obj.children = callback2(onSelectFont(5186).BottomSheetTitleHeader, obj1);
  obj.header = callback2(closure_5, obj);
  const obj4 = { style: tmp.container };
  const obj5 = { style: tmp.contentContainer };
  const obj6 = {
    direction: "horizontal",
    align: "center",
    justify: "center",
    spacing: 8,
    style: tmp.gridContainer,
    children: visibleFontOrder.map((arg0) => {
      let closure_0 = arg0;
      const intl = onSelectFont(outer1_2[17]).intl;
      const stringResult = intl.string(arg0 === first(outer1_2[21])(arg0));
      let PRIMARY_SEMIBOLD = onSelectFont(outer1_2[22]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[arg0];
      if (null == PRIMARY_SEMIBOLD) {
        PRIMARY_SEMIBOLD = outer1_8.PRIMARY_SEMIBOLD;
      }
      let hasItem = set.has(arg0);
      let hasItem1 = closure_7.includes(arg0);
      let obj = {
        onPress() {
          outer1_7(closure_0);
          if (hasItem) {
            outer1_3(closure_0);
          }
        },
        accessibilityRole: "button"
      };
      let combined = stringResult;
      if (hasItem1) {
        const intl2 = onSelectFont(outer1_2[17]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult + ", " + intl2.string(onSelectFont(outer1_2[17]).t.oW0eUd);
      }
      obj.accessibilityLabel = combined;
      obj.accessibilityState = { selected: arg0 === first };
      obj = {};
      const items = [hasItem.fontCard, ];
      let fontCardSelected = tmp;
      if (arg0 === first) {
        fontCardSelected = hasItem.fontCardSelected;
      }
      items[1] = fontCardSelected;
      obj.style = items;
      obj = { variant: "text-lg/semibold" };
      let str3 = "text-default";
      if (arg0 === first) {
        str3 = "mobile-text-heading-primary";
      }
      obj.color = str3;
      const items1 = [hasItem.fontText, ];
      const obj1 = { fontFamily: PRIMARY_SEMIBOLD };
      items1[1] = obj1;
      obj.style = items1;
      obj.children = "Gg";
      const items2 = [outer1_9(onSelectFont(outer1_2[23]).Text, obj), , ];
      if (hasItem) {
        const obj2 = { style: hasItem.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        hasItem = outer1_9(closure_5, obj2);
      }
      items2[1] = hasItem;
      if (hasItem1) {
        const obj3 = { variant: "text-xs/normal", color: "text-subtle", style: hasItem.betaCaption };
        const intl3 = onSelectFont(outer1_2[17]).intl;
        obj3.children = intl3.string(onSelectFont(outer1_2[17]).t.oW0eUd);
        hasItem1 = outer1_9(onSelectFont(outer1_2[23]).Text, obj3);
      }
      items2[2] = hasItem1;
      obj.children = items2;
      obj.children = outer1_10(closure_5, obj);
      return outer1_9(closure_6, obj, arg0);
    })
  };
  let items1 = [callback2(onSelectFont(4541).Stack, obj6), ];
  if (tmp5) {
    tmp5 = hasNonLatinLettersResult;
  }
  if (tmp5) {
    const obj7 = { style: tmp.nonLatinDisclaimer };
    const obj8 = { size: "sm" };
    let items2 = [callback2(onSelectFont(4086).CircleInformationIcon, obj8), ];
    const obj9 = { variant: "text-xs/normal", color: "text-subtle", style: tmp.disclaimerText };
    let intl3 = onSelectFont(1212).intl;
    obj9.children = intl3.string(importDefault(2556)["+O1xL2"]);
    items2[1] = callback2(onSelectFont(4126).Text, obj9);
    obj7.children = items2;
    tmp5 = callback3(closure_5, obj7);
  }
  items1[1] = tmp5;
  obj5.children = items1;
  obj4.children = callback3(closure_5, obj5);
  obj.children = callback2(closure_5, obj4);
  return callback2(onSelectFont(5187).BottomSheet, obj);
};
