// Module ID: 16967
// Function ID: 16968
// Name: conjurePublishBlockedReason
// Dependencies: [1126, 3827, 2]
// Exports: getConjurePublishBlockedCopy

// Module 16967 (conjurePublishBlockedReason)
import intl9 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import size from "module_2" /* 2 */;

const ConjurePublishBlockedReason = { NO_PREVIEW: "no-preview", MISSING_MANAGE_SERVER: "missing-manage-server", MISSING_MANAGE_CHANNELS: "missing-manage-channels" };
const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishBlockedReason.tsx");

export { ConjurePublishBlockedReason };
export const getConjurePublishBlockedCopy = function getConjurePublishBlockedCopy(reason, message) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let obj;
  let str;
  let tmp4;
  if (obj.NO_PREVIEW === reason) {
    const obj2 = { title: intl6.string(_modDef3827.ZNGLFE), body: intl7.string(_modDef3827.ffxKGK), action: intl8.string(_modDef3827["/omTNx"]) };
    intl6 = intl9.intl;
    intl7 = intl9.intl;
    intl8 = intl9.intl;
    return obj2;
  } else {
    let str2 = message;
    if (obj.MISSING_MANAGE_SERVER === reason) {
      const obj3 = { title: intl4.string(_modDef3827.qpffbI), body: str2, action: intl5.string(intl9.t.BddRzS) };
      intl4 = intl9.intl;
      if (str2 == null) {
        str2 = "";
      }
      intl5 = tmp6(1126).intl;
      return obj3;
    } else if (obj.MISSING_MANAGE_CHANNELS === reason) {
      obj = { title: intl.string(_modDef3827.qpffbI), body: str, action: intl2.string(tmp4(3827).dVtQRH), cancel: intl3.string(intl9.t["ETE/oC"]) };
      intl = intl9.intl;
      str = str2;
      tmp4 = importDefault;
      if (str2 == null) {
        str = "";
      }
      intl2 = tmp2(1126).intl;
      intl3 = tmp2(1126).intl;
      return obj;
    }
  }
};
