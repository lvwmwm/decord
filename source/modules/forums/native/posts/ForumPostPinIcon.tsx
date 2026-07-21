// Module ID: 11116
// Function ID: 86535
// Name: ForumPostPinIcon
// Dependencies: []
// Exports: default

// Module 11116 (ForumPostPinIcon)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Bool(false)": -171405157111404630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004667253313593581, "Bool(false)": -3938062453911571000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": "isArray", "Bool(false)": "key", "Bool(false)": "Array", "Bool(false)": "LIGHT", "Bool(false)": "limit", borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.pin = obj;
const obj1 = { <string:1632221346>: "Array", <string:2722977214>: "isPrivate", tintColor: importDefault(dependencyMap[4]).colors.WHITE };
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
