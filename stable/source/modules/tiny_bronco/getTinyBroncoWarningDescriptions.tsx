// Module ID: 13310
// Function ID: 13311
// Name: getTinyBroncoWarningDescriptions
// Dependencies: [9197, 1127, 9201, 3074, 2]
// Exports: getTinyBroncoServerDescriptions, getTinyBroncoWarningDescriptions

// Module 13310 (getTinyBroncoWarningDescriptions)
import intl6 from "intl" /* 1127 */;
import _modDef3074 from "module_3074" /* 3074 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9201 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 9197 */;
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
export const getTinyBroncoWarningDescriptions = function getTinyBroncoWarningDescriptions(arg0, guildName) {
  let tmp4 = null;
  const tmp = arg0 ? React3 : _false;
  const obj = TinyBroncoExperiment;
  if (obj.isTinyBroncoEnabled(tmp)) {
    let tmp7;
    const obj2 = { adult: null, teen: null, unverified: null };
    const intl = tmp2(1127).intl;
    if (arg0) {
      obj2.adult = intl.string(intl6.t.fp3xf5);
      const intl4 = tmp2(1127).intl;
      obj2.teen = intl4.string(intl6.t.dqC1w2);
      const intl5 = tmp2(1127).intl;
      obj2.unverified = intl5.string(intl6.t.qiLic6);
      tmp7 = obj2;
    } else {
      const obj3 = { guildName };
      obj2.adult = intl.formatToPlainString(_modDef3074.iK0n30, obj3);
      const intl2 = tmp2(1127).intl;
      const obj4 = { guildName };
      obj2.teen = intl2.formatToPlainString(_modDef3074.ezJA0R, obj4);
      const intl3 = tmp2(1127).intl;
      const obj5 = { guildName };
      obj2.unverified = intl3.formatToPlainString(_modDef3074.h4HbnI, obj5);
      tmp7 = obj2;
    }
    tmp4 = tmp7;
  }
  return tmp4;
};
