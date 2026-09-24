// Module ID: 14072
// Function ID: 14073
// Name: getTinyBroncoWarningDescriptions
// Dependencies: [10038, 1119, 10042, 3070, 2]
// Exports: getTinyBroncoServerDescriptions, getTinyBroncoWarningDescriptions

// Module 14072 (getTinyBroncoWarningDescriptions)
import util from "util" /* 1119 */;
import _modDef3070 from "module_3070" /* 3070 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 10038 */;
import size from "module_2" /* 2 */;

({ TINY_BRONCO_CHANNEL_LOCATION: c3, TINY_BRONCO_SERVER_LOCATION: closure_4 } = TinyBroncoConstants);
const result = size.fileFinishedImporting("modules/tiny_bronco/getTinyBroncoWarningDescriptions.tsx");

export const getTinyBroncoServerDescriptions = function getTinyBroncoServerDescriptions() {
  const obj = { adult: null, teen: null, unverified: null };
  const intl = util.intl;
  obj.adult = intl.string(util.t.fp3xf5);
  const intl2 = util.intl;
  obj.teen = intl2.string(util.t.dqC1w2);
  const intl3 = util.intl;
  obj.unverified = intl3.string(util.t.qiLic6);
  return obj;
};
export const getTinyBroncoWarningDescriptions = function getTinyBroncoWarningDescriptions(tinyBroncoWarningDescriptions1, guildName) {
  let stringResult = dependencyMap;
  if (!obj.isTinyBroncoEnabled(tmp)) {
    return null;
  } else {
    const obj2 = { adult: null, teen: null, unverified: null };
    let intl = tmp2(1119).intl;
    if (tinyBroncoWarningDescriptions1) {
      obj2.adult = intl.string(tmp2(1119).t.fp3xf5);
      intl = tmp2(1119).intl;
      obj2.teen = intl.string(tmp2(1119).t.dqC1w2);
      const intl4 = tmp2(1119).intl;
      stringResult = intl4.string(tmp2(1119).t.qiLic6);
      obj2.unverified = stringResult;
    } else {
      const obj3 = { guildName };
      obj2.adult = intl.formatToPlainString(_modDef3070.iK0n30, obj3);
      const intl2 = tmp2(1119).intl;
      const obj4 = { guildName };
      obj2.teen = intl2.formatToPlainString(_modDef3070.ezJA0R, obj4);
      const intl3 = tmp2(1119).intl;
      const obj5 = { guildName };
      obj2.unverified = intl3.formatToPlainString(_modDef3070.h4HbnI, obj5);
    }
  }
};
