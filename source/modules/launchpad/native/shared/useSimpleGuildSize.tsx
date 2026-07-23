// Module ID: 15656
// Function ID: 120785
// Name: useSimpleGuildSize
// Dependencies: [31, 2]
// Exports: default

// Module 15656 (useSimpleGuildSize)
import result from "result";

const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildSize.tsx");

export default function useSimpleGuildSize(size) {
  size = size.size;
  const style = size.style;
  let num;
  let memo;
  num = 48;
  if (null != size) {
    num = size;
  }
  let items = [num];
  memo = size.useMemo(() => ({ width: num, height: num }), items);
  const items1 = [style, size, memo];
  let obj = {
    containerSize: num,
    containerSizeStyle: memo,
    containerStyles: size.useMemo(() => {
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
