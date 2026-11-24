// Module ID: 5638
// Function ID: 5639
// Name: reactParserFor
// Dependencies: [19, 21, 5639, 5641, 2]
// Exports: default

// Module 5638 (reactParserFor)
import Fragment from "Fragment" /* 21 */;
import MarkupParserDefault from "MarkupParser" /* 5639 */;
import Spoiler from "Spoiler" /* 5641 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/markup/native/reactParserFor.tsx");

export default function reactParserFor() {
  let items = [...arguments];
  let tmp = MarkupParserDefault;
  const items1 = [...items];
  let closure_0 = tmp.reactParserFor.apply(items1);
  return function parseWithSpoilers() {
    const items = [...arguments];
    const tmp = closure_0(...items);
    let tmp2 = tmp;
    if (null != tmp) {
      tmp2 = jsx(Spoiler.SpoilerRevealProvider, { children: tmp }, items[0]);
    }
    return tmp2;
  };
};
