// Module ID: 14136
// Function ID: 14137
// Name: SearchButton
// Dependencies: [19, 17, 21, 5170, 575, 7306, 5781, 1113, 2]
// Exports: SearchButtonContent

// Module 14136 (SearchButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5781 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7306 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const Pressable = react_native.Pressable;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchButton: obj2, roundedCorners: { borderRadius: 20 }, roundedCornersAlt: { borderRadius: nativeDefault.radii.round }, text: { marginLeft: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, height: 40, alignItems: "center", flexDirection: "row", paddingHorizontal: 12 };
createStyles = createStyles.createStyles;
({ borderRadius: nativeDefault.radii.round });
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchButton.tsx");

export const SEARCH_BAR_HEIGHT = 40;
export function SearchButtonContent(panelVariant) {
  let intl;
  let items;
  let items1;
  panelVariant = panelVariant.panelVariant;
  const merged = Object.assign(panelVariant, Object.assign({ panelVariant: 0 }));
  const tmp2 = closure_5();
  const obj = { style: items, children: items1 };
  const merged1 = Object.assign(merged);
  items = [tmp2.searchButton, panelVariant ? tmp2.roundedCornersAlt : tmp2.roundedCorners, merged.style];
  items1 = [_false(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "xs" }), ];
  const obj2 = { variant: "body-sm/medium", color: "text-muted", style: tmp2.text, maxFontSizeMultiplier: 2, children: intl.string(intl2.t["5h0QOP"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = _false(Text, obj2);
  return React3(Pressable, obj);
}
