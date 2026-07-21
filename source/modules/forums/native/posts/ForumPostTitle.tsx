// Module ID: 11129
// Function ID: 86611
// Name: ForumPostTitle
// Dependencies: []
// Exports: default

// Module 11129 (ForumPostTitle)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = arg1(dependencyMap[2]).createStyles({ title: { marginBottom: 6 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/forums/native/posts/ForumPostTitle.tsx");

export default function ForumPostTitle(arg0) {
  let ellipsizeMode;
  let hasUnreads;
  let lineClamp;
  let onTextLayout;
  let title;
  ({ title, lineClamp, ellipsizeMode, hasUnreads, onTextLayout } = arg0);
  let str = "text-muted";
  if (hasUnreads) {
    str = "mobile-text-heading-primary";
  }
  const obj = { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: callback().title, onTextLayout, children: title };
  return jsx(arg1(dependencyMap[3]).Text, obj);
};
