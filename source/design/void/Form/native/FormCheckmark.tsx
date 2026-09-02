// Module ID: 5627
// Function ID: 5628
// Name: RowCheckmark
// Dependencies: [19, 21, 5596, 709, 2]
// Exports: default

// Module 5627 (RowCheckmark)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 5596 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: null };
    obj[0] = ThemesDefault.unsafe_rawColors.BRAND_500;
    tmp = jsx(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: null });
  }
  return tmp;
};
