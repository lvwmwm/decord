// Module ID: 5517
// Function ID: 5518
// Name: reactParserFor
// Dependencies: [19, 21, 5518, 5520, 2]
// Exports: default

// Module 5517 (reactParserFor)
import Fragment from "Fragment" /* 21 */;
import MarkupParserDefault from "MarkupParser" /* 5518 */;
import Spoiler from "Spoiler" /* 5520 */;
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
