// Module ID: 16804
// Function ID: 16805
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 16804 (react)
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildSize.tsx");

export default function useSimpleGuildSize(size) {
  size = size.size;
  const style = size.style;
  let memo;
  let num = 48;
  if (null != size) {
    num = size;
  }
  let items = [num];
  memo = react.useMemo(() => {
    size = { width: num, height: num };
    return size;
  }, items);
  const items1 = [style, size, memo];
  let obj = {
    containerSize: num,
    containerSizeStyle: memo,
    containerStyles: react.useMemo(() => {
      let num2;
      num = 0;
      const tmp = size;
      if (null == size) {
        num = 4;
      }
      const obj = { position: "relative", marginLeft: num, marginRight: num2 };
      num2 = 0;
      if (null == tmp) {
        num2 = 4;
      }
      const items = [obj, memo, style];
      return items;
    }, items1)
  };
  return obj;
};
