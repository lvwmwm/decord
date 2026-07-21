// Module ID: 11116
// Function ID: 86547
// Name: ForumPostPinIcon
// Dependencies: []
// Exports: default

// Module 11116 (ForumPostPinIcon)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { ao: -167970956032435260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, ks: 0.00000000000000000000000000000000000000000000000000000000000004667253313593581, ef: 805676040621410600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, shapes: "isArray", ind: "key", parent: "Array", ty: "LIGHT", bm: "limit", borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.pin = obj;
const obj1 = { y: false, isArray: false, tintColor: importDefault(dependencyMap[4]).colors.WHITE };
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
