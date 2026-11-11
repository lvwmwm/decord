// Module ID: 7845
// Function ID: 7846
// Name: FormCheckmark
// Dependencies: [19, 21, 7831, 575, 2]
// Exports: default

// Module 7845 (FormCheckmark)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckmarkSmallIcon2 from "CheckmarkSmallIcon" /* 7831 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
    tmp = <CheckmarkSmallIcon color={nativeDefault.unsafe_rawColors.BRAND_500} />;
  }
  return tmp;
};
