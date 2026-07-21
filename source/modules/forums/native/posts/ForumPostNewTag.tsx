// Module ID: 11128
// Function ID: 86609
// Name: ForumPostNewTag
// Dependencies: []
// Exports: default

// Module 11128 (ForumPostNewTag)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { paddingVertical: 1, backgroundColor: importDefault(dependencyMap[3]).colors.BADGE_BACKGROUND_BRAND };
obj.container = obj;
let closure_3 = obj.createStyles(obj);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  containerStyle = [containerStyle.containerStyle, callback().container];
  return jsx(arg1(dependencyMap[4]).NewTag, { containerStyle });
};
