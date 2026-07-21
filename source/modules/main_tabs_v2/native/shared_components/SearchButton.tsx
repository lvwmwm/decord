// Module ID: 11404
// Function ID: 88710
// Name: SEARCH_BAR_HEIGHT
// Dependencies: []
// Exports: SearchButtonContent

// Module 11404 (SEARCH_BAR_HEIGHT)
importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, backgroundColor: importDefault(dependencyMap[4]).colors.INPUT_BACKGROUND_DEFAULT };
obj.searchButton = obj;
obj.roundedCorners = { borderRadius: 20 };
const tmp3 = arg1(dependencyMap[2]);
obj.roundedCornersAlt = { borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.text = { marginLeft: 8 };
let closure_5 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[4]).radii.round };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchButton.tsx");

export const SEARCH_BAR_HEIGHT = 40;
export const SearchButtonContent = function SearchButtonContent(panelVariant) {
  let obj = Object.create(null);
  obj.panelVariant = 0;
  const merged = Object.assign(panelVariant, obj);
  const tmp3 = callback2();
  obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp3.searchButton, panelVariant.panelVariant ? tmp3.roundedCornersAlt : tmp3.roundedCorners, merged.style];
  obj["style"] = items;
  const items1 = [callback(arg1(dependencyMap[5]).MagnifyingGlassIcon, { size: "xs" }), ];
  obj = { style: tmp3.text };
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t.5h0QOP);
  items1[1] = callback(arg1(dependencyMap[6]).Text, obj);
  obj["children"] = items1;
  return closure_4(Pressable, obj);
};
