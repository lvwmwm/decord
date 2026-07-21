// Module ID: 11035
// Function ID: 85917
// Name: AppealIngestionExternalLink
// Dependencies: []
// Exports: default

// Module 11035 (AppealIngestionExternalLink)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginBottom: 8, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.childButton = obj;
const obj1 = { "234395307759108106": "<string:3207659522>", "365975655608745985": "<string:3578855426>", "512412940897484800": "<string:1564545463>", reachedLimit: "<string:1912603216>", limit: "toString", hasBailedAst: true, id: true, format_type: true, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.childContainer = obj1;
obj.childButtonText = {};
const tmp3 = arg1(dependencyMap[2]);
obj.chevron = { color: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
let closure_6 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionExternalLink.tsx");

export default function AppealIngestionExternalLink(text) {
  ({ url: closure_0, onPress: closure_1 } = text);
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
  obj = { "Null": null, "Null": null, "Null": null, style: tmp.childButtonText, children: text.text };
  const items = [callback(arg1(dependencyMap[7]).Text, obj), ];
  const obj1 = { source: arg1(dependencyMap[9]), color: tmp.chevron.color };
  items[1] = callback(arg1(dependencyMap[8]).Icon, obj1);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[5]).PressableHighlight, obj);
};
