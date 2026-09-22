// Module ID: 7250
// Function ID: 7251
// Name: FormCheckmark
// Dependencies: [19, 21, 7236, 576, 2]
// Exports: default

// Module 7250 (FormCheckmark)
import nativeDefault from "native" /* 576 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 7236 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
    tmp = jsx(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: nativeDefault.unsafe_rawColors.BRAND_500 });
  }
  return tmp;
};
