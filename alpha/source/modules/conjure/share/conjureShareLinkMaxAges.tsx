// Module ID: 13231
// Function ID: 13232
// Name: conjureShareLinkMaxAges
// Dependencies: [1113, 2]
// Exports: conjureShareLinkMaxAgeLabel

// Module 13231 (conjureShareLinkMaxAges)
import intl4 from "intl" /* 1113 */;
import size from "module_2" /* 2 */;

let c2 = 3600;
let c3 = 86400;
const items = [1800, 3600, 21600, 43200, 86400, 604800];
const result = size.fileFinishedImporting("modules/conjure/share/conjureShareLinkMaxAges.tsx");

export const CONJURE_SHARE_LINK_MAX_AGES = items;
export const CONJURE_SHARE_LINK_DEFAULT_MAX_AGE = 604800;
export function conjureShareLinkMaxAgeLabel(value) {
  let formatToPlainStringResult;
  if (value < c2) {
    const intl3 = intl4.intl;
    const obj2 = { minutes: value / 60 };
    formatToPlainStringResult = intl3.formatToPlainString(intl4.t.iXLF9W, obj2);
  } else if (value < c3) {
    const intl2 = intl4.intl;
    const obj3 = { hours: value / tmp };
    formatToPlainStringResult = intl2.formatToPlainString(intl4.t.xCjYxK, obj3);
  } else {
    const intl = intl4.intl;
    const obj = { days: value / tmp9 };
    formatToPlainStringResult = intl.formatToPlainString(intl4.t["k2UNz+"], obj);
  }
  return formatToPlainStringResult;
}
