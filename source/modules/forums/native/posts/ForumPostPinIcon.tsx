// Module ID: 11117
// Function ID: 86560
// Name: ForumPostPinIcon
// Dependencies: []
// Exports: default

// Module 11117 (ForumPostPinIcon)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.pin = obj;
const obj1 = { hideWhenScrolling: "<string:1912602975>", autoCapitalize: "height", tintColor: importDefault(dependencyMap[4]).colors.WHITE };
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
