// Module ID: 5926
// Function ID: 5927
// Name: getTinyBroncoWarningDescriptions
// Dependencies: [5927, 1126, 5928, 3152, 2]
// Exports: getTinyBroncoServerDescriptions, getTinyBroncoWarningDescriptions

// Module 5926 (getTinyBroncoWarningDescriptions)
import intl6 from "intl" /* 1126 */;
import _modDef3152 from "module_3152" /* 3152 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 5928 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 5927 */;
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
    const intl = tmp2(1126).intl;
    if (arg0) {
      obj2.adult = intl.string(intl6.t.fp3xf5);
      const intl4 = tmp2(1126).intl;
      obj2.teen = intl4.string(intl6.t.dqC1w2);
      const intl5 = tmp2(1126).intl;
      obj2.unverified = intl5.string(intl6.t.qiLic6);
      tmp7 = obj2;
    } else {
      const obj3 = { guildName };
      obj2.adult = intl.formatToPlainString(_modDef3152.iK0n30, obj3);
      const intl2 = tmp2(1126).intl;
      const obj4 = { guildName };
      obj2.teen = intl2.formatToPlainString(_modDef3152.ezJA0R, obj4);
      const intl3 = tmp2(1126).intl;
      const obj5 = { guildName };
      obj2.unverified = intl3.formatToPlainString(_modDef3152.h4HbnI, obj5);
      tmp7 = obj2;
    }
    tmp4 = tmp7;
  }
  return tmp4;
};
