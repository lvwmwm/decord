// Module ID: 9235
// Function ID: 72238
// Name: ViewEmptyState
// Dependencies: [0, 0, 4294967295, 0, 4294967295, 0, 0, 0, 0]
// Exports: default

// Module 9235 (ViewEmptyState)
import "result";
import result from "result";
import result from "result";
import result from "result";

({ View: closure_2, Image: closure_3 } = result);
const Fonts = arg1(dependencyMap[2]).Fonts;
({ jsx: closure_4, jsxs: closure_5 } = result);
let obj = arg1(dependencyMap[4]);
obj = { emptyContainer: { 9223372036854775807: null, height: null, backgroundColor: null, borderWidth: null }, emptyImage: {}, fixOpticalIllusion: {} };
obj = {};
const merged = Object.assign(require("result")(Fonts.DISPLAY_SEMIBOLD, require("result").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj["textAlign"] = "center";
obj["marginTop"] = 32;
obj["opacity"] = 0.8;
obj.emptyLabel = obj;
obj.emptyText = { fontFamily: Fonts.PRIMARY_MEDIUM };
let closure_6 = obj.createStyles(obj);
result = result.fileFinishedImporting("components_native/common/ViewEmptyState.tsx");

export default function ViewEmptyState(arg0) {
  let label;
  let source;
  let style;
  let text;
  ({ label, text } = arg0);
  ({ source, style } = arg0);
  const tmp = callback2();
  let obj = { style: items };
  const items = [tmp.emptyContainer, style];
  obj = { style: tmp.fixOpticalIllusion };
  obj = { resizeMode: "contain", source, style: tmp.emptyImage };
  const items1 = [callback(closure_3, obj), , ];
  let tmp5 = null;
  if (null != label) {
    const obj1 = { style: tmp.emptyLabel, children: label.toUpperCase() };
    tmp5 = callback(arg1(dependencyMap[7]).LegacyText, obj1);
  }
  items1[1] = tmp5;
  let tmp9 = null;
  if (null != text) {
    const obj2 = {};
    const items2 = [, ];
    ({ emptyLabel: arr3[0], emptyText: arr3[1] } = tmp);
    obj2.style = items2;
    obj2.children = text;
    tmp9 = callback(arg1(dependencyMap[7]).LegacyText, obj2);
  }
  items1[2] = tmp9;
  obj.children = items1;
  obj.children = closure_5(closure_2, obj);
  return callback(closure_2, obj);
};
