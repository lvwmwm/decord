// Module ID: 11443
// Function ID: 89024
// Name: SEARCH_BAR_HEIGHT
// Dependencies: [31, 27, 33, 4130, 689, 5786, 4126, 1212, 2]
// Exports: SearchButtonContent

// Module 11443 (SEARCH_BAR_HEIGHT)
import "result";
import { Pressable } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, height: 40, alignItems: "center", flexDirection: "row", paddingHorizontal: 12 };
_createForOfIteratorHelperLoose.searchButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.roundedCorners = { borderRadius: 20 };
_createForOfIteratorHelperLoose.roundedCornersAlt = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.text = { marginLeft: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchButton.tsx");

export const SEARCH_BAR_HEIGHT = 40;
export const SearchButtonContent = function SearchButtonContent(panelVariant) {
  let obj = Object.create(null);
  obj.panelVariant = 0;
  const merged = Object.assign(panelVariant, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp3.searchButton, panelVariant.panelVariant ? tmp3.roundedCornersAlt : tmp3.roundedCorners, merged.style];
  obj["style"] = items;
  const items1 = [callback(require(5786) /* MagnifyingGlassIcon */.MagnifyingGlassIcon, { size: "xs" }), ];
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp3.text, maxFontSizeMultiplier: 2 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["5h0QOP"]);
  items1[1] = callback(require(4126) /* Text */.Text, obj);
  obj["children"] = items1;
  return closure_4(Pressable, obj);
};
