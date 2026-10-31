// Module ID: 13913
// Function ID: 13914
// Name: SearchButton
// Dependencies: [19, 17, 21, 5014, 575, 7219, 5624, 1113, 2]
// Exports: SearchButtonContent

// Module 13913 (SearchButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7219 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  const obj2 = { variant: "text-sm/medium", color: "text-muted", style: tmp2.text, maxFontSizeMultiplier: 2, children: intl.string(intl2.t["5h0QOP"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = _false(Text, obj2);
  return React3(Pressable, obj);
}
