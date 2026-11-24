// Module ID: 13401
// Function ID: 13402
// Name: getBoostRowMessageText
// Dependencies: [1112, 2856, 13396, 2]
// Exports: default

// Module 13401 (getBoostRowMessageText)
import intl4 from "intl" /* 1112 */;
import _modDef2856 from "module_2856" /* 2856 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/getBoostRowMessageText.tsx");

export default function getBoostRowMessageText(phase) {
  phase = phase.phase;
  if ("gave" === phase) {
    const intl3 = intl4.intl;
    return intl3.string(_modDef2856.plwH8d);
  } else if ("expiring" === phase) {
    const intl2 = intl4.intl;
    const formatToPlainString = intl2.formatToPlainString;
    let endsAt = phase.boost.endsAt;
    const vct4l8 = _modDef2856.vct4l8;
    const tmp4 = require;
    if (endsAt == null) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      endsAt = new Date(phase.sortKey + tmp4(13396).BOOST_EXPIRING_DISPLAY_WINDOW_MS);
    }
    const obj = { date: endsAt };
    return formatToPlainString(vct4l8, obj);
  } else if ("expired" === phase) {
    const intl = intl4.intl;
    return intl.string(_modDef2856.hSXjlI);
  }
};
