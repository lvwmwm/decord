// Module ID: 11030
// Function ID: 85896
// Name: AppealIngestionExternalLink
// Dependencies: []
// Exports: default

// Module 11030 (AppealIngestionExternalLink)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginBottom: 8, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.childButton = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.childContainer = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.childButtonText = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.chevron = { color: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
let closure_6 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionExternalLink.tsx");

export default function AppealIngestionExternalLink(children) {
  ({ url: closure_0, onPress: closure_1 } = children);
  const tmp = callback3();
  let obj = {
    style: tmp.childButton,
    accessibilityRole: "button",
    onPress() {
      if (null != callback) {
        callback();
      }
      callback(closure_2[6]).openURL(closure_0);
    }
  };
  obj = { style: tmp.childContainer };
  obj = { style: tmp.childButtonText, children: children.text };
  const items = [callback(arg1(dependencyMap[7]).Text, obj), ];
  const obj1 = { source: arg1(dependencyMap[9]), color: tmp.chevron.color };
  items[1] = callback(arg1(dependencyMap[8]).Icon, obj1);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[5]).PressableHighlight, obj);
};
