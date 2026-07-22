// Module ID: 15539
// Function ID: 118612
// Name: useSimpleGuildSize
// Dependencies: []
// Exports: default

// Module 15539 (useSimpleGuildSize)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildSize.tsx");

export default function useSimpleGuildSize(size) {
  size = size.size;
  const React = size;
  const style = size.style;
  let num;
  let memo;
  num = 48;
  if (null != size) {
    num = size;
  }
  const items = [num];
  memo = React.useMemo(() => ({ width: num, height: num }), items);
  const items1 = [style, size, memo];
  const obj = {
    containerSize: num,
    containerSizeStyle: memo,
    containerStyles: React.useMemo(() => {
      const obj = { position: "relative" };
      let num = 0;
      if (null == size) {
        num = 4;
      }
      obj.marginLeft = num;
      let num2 = 0;
      if (null == size) {
        num2 = 4;
      }
      obj.marginRight = num2;
      const items = [obj, memo, style];
      return items;
    }, items1)
  };
  return obj;
};
