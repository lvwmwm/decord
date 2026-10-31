// Module ID: 17214
// Function ID: 17215
// Name: LayoutUtils
// Dependencies: [19, 21, 2]
// Exports: SeparatedList

// Module 17214 (LayoutUtils)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let map;
({ Fragment: map, jsxs: c2, jsx: c3 } = Fragment);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LayoutUtils.tsx");

export function SeparatedList(separator) {
  let Children1;
  separator = separator.separator;
  const Children = separator.Children;
  const toArrayResult = Children.toArray(separator.children);
  const found = toArrayResult.filter((item) => null != item);
  const obj = {
    children: Children1.map(found, (arg0, arg1) => {
      const children = [arg0, ];
      let tmp3 = arg1 !== found.length - 1;
      const tmp = React2;
      const tmp2 = map;
      if (tmp3) {
        tmp3 = separator;
      }
      children[1] = tmp3;
      return tmp(tmp2, { children });
    })
  };
  Children1 = separator.Children;
  return closure_3(found, obj);
}
