// Module ID: 9397
// Function ID: 73213
// Name: GappedList
// Dependencies: []
// Exports: GappedList

// Module 9397 (GappedList)
let closure_2 = importAll(dependencyMap[0]);
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/LayoutUtils.tsx");

export const GappedList = function GappedList(gap) {
  let num = gap.gap;
  if (num === undefined) {
    num = 4;
  }
  const arg1 = num;
  const dependencyMap = gap.renderGap;
  let React;
  let Children = React.Children;
  const found = Children.toArray(gap.children).filter((arg0) => null != arg0);
  React = found;
  const toArrayResult = Children.toArray(gap.children);
  Children = React.Children;
  return callback(closure_4, {
    children: Children.map(found, (arg0, arg1) => {
      let obj = {};
      const items = [arg0, ];
      if (arg1 === found.length - 1) {
        items[1] = tmp3;
        obj.children = items;
        return tmp(tmp2, obj);
      } else if (null != renderGap) {
        let tmp10 = renderGap();
      } else {
        obj = { size: 2 };
        tmp10 = callback(num(renderGap[2]).Spacer, obj);
      }
    })
  });
};
