// Module ID: 6816
// Function ID: 6817
// Name: getAgeNoticeWarningDescriptions
// Dependencies: [6817, 1113, 6818, 3284, 2]
// Exports: getAgeNoticeServerDescriptions, getAgeNoticeWarningDescriptions

// Module 6816 (getAgeNoticeWarningDescriptions)
import intl6 from "intl" /* 1113 */;
import _modDef3284 from "module_3284" /* 3284 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6818 */;
import AgeNoticeConstants from "AgeNoticeConstants" /* 6817 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ AGE_NOTICE_CHANNEL_LOCATION: c3, AGE_NOTICE_SERVER_LOCATION: closure_4 } = AgeNoticeConstants);
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/getAgeNoticeWarningDescriptions.tsx");

export function getAgeNoticeServerDescriptions() {
  let intl;
  let intl2;
  let intl3;
  const obj = { adult: intl.string(intl6.t.fp3xf5), teen: intl2.string(intl6.t.dqC1w2), unverified: intl3.string(intl6.t.qiLic6) };
  intl = intl6.intl;
  intl2 = intl6.intl;
  intl3 = intl6.intl;
  return obj;
}
export function getAgeNoticeWarningDescriptions(tmp4Result, guildName) {
  let tmp4 = null;
  const tmp = tmp4Result ? React3 : _false;
  const obj = AgeNoticeExperiment;
  if (obj.isAgeNoticeEnabled(tmp)) {
    let tmp7;
    const obj2 = { adult: null, teen: null, unverified: null };
    const intl = tmp2(1113).intl;
    if (tmp4Result) {
      obj2.adult = intl.string(intl6.t.fp3xf5);
      const intl4 = tmp2(1113).intl;
      obj2.teen = intl4.string(intl6.t.dqC1w2);
      const intl5 = tmp2(1113).intl;
      obj2.unverified = intl5.string(intl6.t.qiLic6);
      tmp7 = obj2;
    } else {
      const obj3 = { guildName };
      obj2.adult = intl.formatToPlainString(_modDef3284.iK0n30, obj3);
      const intl2 = tmp2(1113).intl;
      const obj4 = { guildName };
      obj2.teen = intl2.formatToPlainString(_modDef3284.ezJA0R, obj4);
      const intl3 = tmp2(1113).intl;
      const obj5 = { guildName };
      obj2.unverified = intl3.formatToPlainString(_modDef3284.h4HbnI, obj5);
      tmp7 = obj2;
    }
    tmp4 = tmp7;
  }
  return tmp4;
}
