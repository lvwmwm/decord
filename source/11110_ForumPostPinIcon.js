// Module ID: 11110
// Function ID: 86512
// Name: ForumPostPinIcon
// Dependencies: []
// Exports: default

// Module 11110 (ForumPostPinIcon)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Bool(false)": -10252133546901566000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004667253313593581, "Bool(false)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000334262078070349, "Bool(false)": "isArray", "Bool(false)": "key", "Bool(false)": "Array", "Bool(false)": "LIGHT", "Bool(false)": "limit", borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.pin = obj;
const obj1 = { <string:1140607356>: null, <string:1751293292>: null, tintColor: importDefault(dependencyMap[4]).colors.WHITE };
obj.pinIcon = obj1;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default function ForumPostPinIcon(containerStyle) {
  const tmp = callback();
  let obj = { style: items };
  const items = [tmp.pin, containerStyle.containerStyle];
  obj = { source: importDefault(dependencyMap[6]), style: tmp.pinIcon };
  obj.children = jsx(arg1(dependencyMap[5]).Icon, obj);
  return <View {...obj} />;
};
