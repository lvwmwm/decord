// Module ID: 14105
// Function ID: 107095
// Name: DisplayNameStylesFontPickerSheet
// Dependencies: []
// Exports: default

// Module 14105 (DisplayNameStylesFontPickerSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Pressable: closure_6 } = arg1(dependencyMap[2]));
const FLYWHEEL_FONTS = arg1(dependencyMap[3]).FLYWHEEL_FONTS;
const Fonts = arg1(dependencyMap[4]).Fonts;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { header: { paddingTop: 4 }, headerTrailing: { "Null": null, "Null": null }, container: { flex: 1 } };
obj = { padding: importDefault(dependencyMap[7]).space.PX_8, alignItems: "center" };
obj.contentContainer = obj;
obj.gridContainer = {};
const tmp3 = arg1(dependencyMap[5]);
obj.fontCard = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[7]).radii.sm, borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE };
const obj1 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[7]).radii.sm, borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE };
obj.fontCardSelected = { borderColor: importDefault(dependencyMap[7]).colors.CONTROL_BRAND_FOREGROUND };
obj.fontText = {};
const obj2 = { borderColor: importDefault(dependencyMap[7]).colors.CONTROL_BRAND_FOREGROUND };
obj.tileNewDot = { position: "absolute", top: importDefault(dependencyMap[7]).space.PX_8, right: importDefault(dependencyMap[7]).space.PX_8, width: importDefault(dependencyMap[7]).space.PX_8, height: importDefault(dependencyMap[7]).space.PX_8, borderRadius: importDefault(dependencyMap[7]).space.PX_8 / 2, backgroundColor: importDefault(dependencyMap[7]).colors.BADGE_BACKGROUND_BRAND, shadowColor: importDefault(dependencyMap[7]).colors.BADGE_BACKGROUND_BRAND, shadowRadius: importDefault(dependencyMap[7]).space.PX_4, shadowOpacity: 1, elevation: 4 };
const obj4 = { <string:1196532342>: null, <string:1649435100>: null, <string:4082282146>: null, <string:1657055817>: null, <string:4082216610>: null, bottom: importDefault(dependencyMap[7]).space.PX_4 };
obj.betaCaption = obj4;
const obj3 = { position: "absolute", top: importDefault(dependencyMap[7]).space.PX_8, right: importDefault(dependencyMap[7]).space.PX_8, width: importDefault(dependencyMap[7]).space.PX_8, height: importDefault(dependencyMap[7]).space.PX_8, borderRadius: importDefault(dependencyMap[7]).space.PX_8 / 2, backgroundColor: importDefault(dependencyMap[7]).colors.BADGE_BACKGROUND_BRAND, shadowColor: importDefault(dependencyMap[7]).colors.BADGE_BACKGROUND_BRAND, shadowRadius: importDefault(dependencyMap[7]).space.PX_4, shadowOpacity: 1, elevation: 4 };
obj.nonLatinDisclaimer = { gap: importDefault(dependencyMap[7]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12, paddingVertical: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[7]).radii.sm, marginTop: importDefault(dependencyMap[7]).space.PX_16 };
obj.disclaimerText = { flex: 1 };
let closure_11 = obj.createStyles(obj);
const obj5 = { gap: importDefault(dependencyMap[7]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12, paddingVertical: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[7]).radii.sm, marginTop: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFontPickerSheet.tsx");

export default function DisplayNameStylesFontPickerSheet(displayName) {
  let onSelectFont;
  let selectedFontId;
  ({ selectedFontId, onSelectFont } = displayName);
  const arg1 = onSelectFont;
  const tmp = callback4();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[8]);
  let obj1 = arg1(dependencyMap[9]);
  const visibleFontOrder = obj1.useVisibleFontOrder();
  let obj2 = arg1(dependencyMap[10]);
  const displayNameStylesNewFonts = obj2.useDisplayNameStylesNewFonts(visibleFontOrder);
  ({ dotFontIds: closure_2, dismissFontDot: closure_3 } = displayNameStylesNewFonts);
  const tmp3 = callback(React.useState(selectedFontId), 2);
  const first = tmp3[0];
  const React = first;
  let closure_5 = tmp3[1];
  let tmp5 = first !== arg1(dependencyMap[11]).DisplayNameFont.DEFAULT;
  let obj3 = arg1(dependencyMap[12]);
  const tmp7 = first !== selectedFontId;
  let closure_7 = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items = [tmp7, first, onSelectFont];
  const callback = React.useCallback(() => {
    const result = onSelectFont(closure_2[13]).triggerHapticFeedback(onSelectFont(closure_2[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
    if (tmp7) {
      onSelectFont(first);
    }
    const obj = onSelectFont(closure_2[13]);
    tmp(closure_2[14]).hideActionSheet();
  }, items);
  obj = { ref: obj.useBottomSheetRef().bottomSheetRef };
  obj = { style: tmp.header };
  obj1 = {};
  const intl = arg1(dependencyMap[17]).intl;
  obj1.title = intl.string(importDefault(dependencyMap[18]).0JCuGm);
  obj2 = { style: tmp.headerTrailing };
  obj3 = {};
  const intl2 = arg1(dependencyMap[17]).intl;
  obj3.text = intl2.string(arg1(dependencyMap[17]).t.XqMe3N);
  obj3.onPress = callback;
  obj3.variant = "primary";
  obj3.size = "sm";
  obj2.children = callback2(arg1(dependencyMap[19]).Button, obj3);
  obj1.trailing = callback2(closure_5, obj2);
  obj.children = callback2(arg1(dependencyMap[16]).BottomSheetTitleHeader, obj1);
  obj.header = callback2(closure_5, obj);
  const obj4 = { style: tmp.container };
  const obj5 = { style: tmp.contentContainer };
  const obj6 = {
    GhostInputProps: "replace",
    relieved: "marginBottom",
    savedVoiceMessageUploadData: "key",
    disableStickySections: "Text",
    style: tmp.gridContainer,
    children: visibleFontOrder.map((arg0) => {
      const onSelectFont = arg0;
      let tmp = arg0 === first;
      const intl = onSelectFont(set[17]).intl;
      const stringResult = intl.string(tmp(set[21])(arg0));
      let PRIMARY_SEMIBOLD = onSelectFont(set[22]).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[arg0];
      if (null == PRIMARY_SEMIBOLD) {
        PRIMARY_SEMIBOLD = constants.PRIMARY_SEMIBOLD;
      }
      let hasItem = set.has(arg0);
      tmp = hasItem;
      let hasItem1 = closure_7.includes(arg0);
      let obj = {
        onPress() {
          callback2(arg0);
          if (hasItem) {
            callback(arg0);
          }
        },
        accessibilityRole: "button"
      };
      let combined = stringResult;
      if (hasItem1) {
        const intl2 = onSelectFont(set[17]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult + ", " + intl2.string(onSelectFont(set[17]).t.oW0eUd);
      }
      obj.accessibilityLabel = combined;
      obj.accessibilityState = { selected: tmp };
      obj = {};
      const items = [tmp.fontCard, ];
      let fontCardSelected = tmp;
      if (tmp) {
        fontCardSelected = tmp.fontCardSelected;
      }
      items[1] = fontCardSelected;
      obj.style = items;
      obj = { variant: "text-lg/semibold" };
      let str3 = "text-default";
      if (tmp) {
        str3 = "mobile-text-heading-primary";
      }
      obj.color = str3;
      const items1 = [tmp.fontText, ];
      const obj1 = { fontFamily: PRIMARY_SEMIBOLD };
      items1[1] = obj1;
      obj.style = items1;
      obj.children = "Gg";
      const items2 = [callback2(onSelectFont(set[23]).Text, obj), , ];
      if (hasItem) {
        const obj2 = { Text: 5375, string: 1896939776, y: 8000, style: tmp.tileNewDot };
        hasItem = callback2(closure_5, obj2);
      }
      items2[1] = hasItem;
      if (hasItem1) {
        const obj3 = { style: tmp.betaCaption };
        const intl3 = onSelectFont(set[17]).intl;
        obj3.children = intl3.string(onSelectFont(set[17]).t.oW0eUd);
        hasItem1 = callback2(onSelectFont(set[23]).Text, obj3);
      }
      items2[2] = hasItem1;
      obj.children = items2;
      obj.children = closure_10(closure_5, obj);
      return callback2(tmp7, obj, arg0);
    })
  };
  const items1 = [callback2(arg1(dependencyMap[20]).Stack, obj6), ];
  if (tmp5) {
    tmp5 = hasNonLatinLettersResult;
  }
  if (tmp5) {
    const obj7 = { style: tmp.nonLatinDisclaimer };
    const obj8 = { size: "sm" };
    const items2 = [callback2(arg1(dependencyMap[24]).CircleInformationIcon, obj8), ];
    const obj9 = { style: tmp.disclaimerText };
    const intl3 = arg1(dependencyMap[17]).intl;
    obj9.children = intl3.string(importDefault(dependencyMap[18]).+O1xL2);
    items2[1] = callback2(arg1(dependencyMap[23]).Text, obj9);
    obj7.children = items2;
    tmp5 = callback3(closure_5, obj7);
  }
  items1[1] = tmp5;
  obj5.children = items1;
  obj4.children = callback3(closure_5, obj5);
  obj.children = callback2(closure_5, obj4);
  return callback2(arg1(dependencyMap[15]).BottomSheet, obj);
};
