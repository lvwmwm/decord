// Module ID: 11129
// Function ID: 86622
// Name: ForumPostNewTag
// Dependencies: []
// Exports: default

// Module 11129 (ForumPostNewTag)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { paddingVertical: 1, backgroundColor: importDefault(dependencyMap[3]).colors.BADGE_BACKGROUND_BRAND };
obj.container = obj;
let closure_3 = obj.createStyles(obj);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  const obj = { 9223372036854775807: 0.502, 9223372036854775807: 1, 0: "gr" };
  const items = [containerStyle.containerStyle, callback().container];
  obj.containerStyle = items;
  return jsx(arg1(dependencyMap[4]).NewTag, obj);
};
