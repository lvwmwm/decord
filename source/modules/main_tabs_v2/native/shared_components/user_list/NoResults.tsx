// Module ID: 9924
// Function ID: 76783
// Name: NoResults
// Dependencies: [31, 27, 33, 4130, 4126, 2]
// Exports: default

// Module 9924 (NoResults)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ View: closure_2, ScrollView: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ headerContainer: { paddingHorizontal: 16 }, container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 32 }, image: { marginBottom: 12 }, textContainer: { justifyContent: "center", alignItems: "center" }, text: { textAlign: "center", marginTop: 4 }, fullHeightContentContainer: { paddingBottom: 0, paddingTop: 0 }, fullHeightScrollContent: { flexGrow: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx");

export default function NoResults(illustration) {
  let children;
  let containerStyle;
  let fullHeight;
  let subtitle;
  let title;
  ({ subtitle, fullHeight } = illustration);
  ({ title, children, containerStyle } = illustration);
  if (fullHeight === undefined) {
    fullHeight = false;
  }
  illustration = illustration.illustration;
  const tmp = callback2();
  let obj = { style: items, alwaysBounceVertical: false };
  items = [tmp.headerContainer];
  let fullHeightScrollContent = fullHeight;
  if (fullHeight) {
    fullHeightScrollContent = tmp.fullHeightScrollContent;
  }
  obj.contentContainerStyle = fullHeightScrollContent;
  obj = {};
  const items1 = [tmp.container, , ];
  if (fullHeight) {
    fullHeight = tmp.fullHeightContentContainer;
  }
  items1[1] = fullHeight;
  items1[2] = containerStyle;
  obj.style = items1;
  let tmp6 = null != illustration;
  if (tmp6) {
    obj = { style: tmp.image, children: callback(illustration, {}) };
    tmp6 = callback(closure_2, obj);
  }
  const items2 = [tmp6, ];
  const obj1 = { style: tmp.textContainer };
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: title };
  const items3 = [callback(require(4126) /* Text */.Text, obj2), ];
  let tmp11 = null;
  if (null != subtitle) {
    const obj3 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.text, children: subtitle };
    tmp11 = callback(require(4126) /* Text */.Text, obj3);
  }
  items3[1] = tmp11;
  obj1.children = items3;
  items2[1] = closure_5(closure_2, obj1);
  obj.children = items2;
  const items4 = [closure_5(closure_2, obj), children];
  obj.children = items4;
  return closure_5(closure_3, obj);
};
