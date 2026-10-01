// Module ID: 13308
// Function ID: 13309
// Name: getTinyBroncoWarningDescriptions
// Dependencies: [9231, 1115, 9235, 3071, 2]
// Exports: getTinyBroncoServerDescriptions, getTinyBroncoWarningDescriptions

// Module 13308 (getTinyBroncoWarningDescriptions)
import intl6 from "intl" /* 1115 */;
import _modDef3071 from "module_3071" /* 3071 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9235 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 9231 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ TINY_BRONCO_CHANNEL_LOCATION: c3, TINY_BRONCO_SERVER_LOCATION: closure_4 } = TinyBroncoConstants);
const result = size.fileFinishedImporting("modules/tiny_bronco/getTinyBroncoWarningDescriptions.tsx");

export const getTinyBroncoServerDescriptions = function getTinyBroncoServerDescriptions() {
  let intl;
  let intl2;
  let intl3;
  const obj = { adult: intl.string(intl6.t.fp3xf5), teen: intl2.string(intl6.t.dqC1w2), unverified: intl3.string(intl6.t.qiLic6) };
  intl = intl6.intl;
  intl2 = intl6.intl;
  intl3 = intl6.intl;
  return obj;
};
export const getTinyBroncoWarningDescriptions = function getTinyBroncoWarningDescriptions(tmp4Result, guildName) {
  let tmp4 = null;
  const tmp = tmp4Result ? React3 : _false;
  const obj = TinyBroncoExperiment;
  if (obj.isTinyBroncoEnabled(tmp)) {
    let tmp7;
    const obj2 = { adult: null, teen: null, unverified: null };
    const intl = tmp2(1115).intl;
    if (tmp4Result) {
      obj2.adult = intl.string(intl6.t.fp3xf5);
      const intl4 = tmp2(1115).intl;
      obj2.teen = intl4.string(intl6.t.dqC1w2);
      const intl5 = tmp2(1115).intl;
      obj2.unverified = intl5.string(intl6.t.qiLic6);
      tmp7 = obj2;
    } else {
      const obj3 = { guildName };
      obj2.adult = intl.formatToPlainString(_modDef3071.iK0n30, obj3);
      const intl2 = tmp2(1115).intl;
      const obj4 = { guildName };
      obj2.teen = intl2.formatToPlainString(_modDef3071.ezJA0R, obj4);
      const intl3 = tmp2(1115).intl;
      const obj5 = { guildName };
      obj2.unverified = intl3.formatToPlainString(_modDef3071.h4HbnI, obj5);
      tmp7 = obj2;
    }
    tmp4 = tmp7;
  }
  return tmp4;
};
