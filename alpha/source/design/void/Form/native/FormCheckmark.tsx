// Module ID: 6764
// Function ID: 6765
// Name: FormCheckmark
// Dependencies: [19, 21, 6750, 576, 2]
// Exports: default

// Module 6764 (FormCheckmark)
import nativeDefault from "native" /* 576 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 6750 */;
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
