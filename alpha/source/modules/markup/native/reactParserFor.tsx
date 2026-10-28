// Module ID: 15349
// Function ID: 15350
// Name: reactParserFor
// Dependencies: [19, 21, 8378, 11999, 2]
// Exports: default

// Module 15349 (reactParserFor)
import Fragment from "Fragment" /* 21 */;
import markup_MarkupParserDefault from "markup/MarkupParser" /* 8378 */;
import Spoiler from "Spoiler" /* 11999 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/markup/native/reactParserFor.tsx");

export default function reactParserFor() {
  let items = [...arguments];
  let tmp = markup_MarkupParserDefault;
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
