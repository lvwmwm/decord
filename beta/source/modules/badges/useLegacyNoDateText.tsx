// Module ID: 10664
// Function ID: 10665
// Name: useLegacyNoDateText
// Dependencies: [32, 19, 1115, 2]
// Exports: default

// Module 10664 (useLegacyNoDateText)
import intl2 from "intl" /* 1115 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function chooseRandomLegacyNoDateText() {
  const rounded = Math.floor(Math.random() * items.length);
  const intl = intl2.intl;
  return intl.string(items[rounded]);
}
const items = [intl2.t["6zFA/T"], intl2.t.wzZHKl, intl2.t["+ED/nf"]];
const result = size.fileFinishedImporting("modules/badges/useLegacyNoDateText.tsx");

export default function useLegacyNoDateText(arg0) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = react.useState(chooseRandomLegacyNoDateText);
  _slicedToArray(react.useState(chooseRandomLegacyNoDateText), 2);
  const tmp4 = _slicedToArray(react.useState(arg0), 2);
  if (arg0 !== tmp4[0]) {
    tmp4[1](arg0);
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.floor(Math.random() * items.length);
    const intl = intl2.intl;
    tmp3(intl.string(items[rounded]));
  }
  return tmp2;
};
