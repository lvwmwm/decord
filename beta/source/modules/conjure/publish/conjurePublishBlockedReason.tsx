// Module ID: 10804
// Function ID: 10805
// Name: conjurePublishBlockedReason
// Dependencies: [1128, 3830, 2]
// Exports: getConjurePublishBlockedCopy

// Module 10804 (conjurePublishBlockedReason)
import intl13 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import size from "module_2" /* 2 */;

const ConjurePublishBlockedReason = { PUBLISH_APPROVAL_REQUIRED: "publish-approval-required", NO_PREVIEW: "no-preview", MISSING_MANAGE_SERVER: "missing-manage-server", MISSING_MANAGE_CHANNELS: "missing-manage-channels" };
const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishBlockedReason.tsx");

export { ConjurePublishBlockedReason };
export const getConjurePublishBlockedCopy = function getConjurePublishBlockedCopy(reason, message) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj;
  let str;
  let tmp4;
  if (obj.PUBLISH_APPROVAL_REQUIRED === reason) {
    const obj2 = { title: intl9.string(_modDef3830["5qiUbF"]), body: intl10.string(_modDef3830["8kdvyn"]), action: intl11.string(_modDef3830.z25acw), cancel: intl12.string(intl13.t["ETE/oC"]) };
    intl9 = intl13.intl;
    intl10 = intl13.intl;
    intl11 = intl13.intl;
    intl12 = intl13.intl;
    return obj2;
  } else if (obj.NO_PREVIEW === reason) {
    const obj3 = { title: intl6.string(_modDef3830.ZNGLFE), body: intl7.string(_modDef3830.ffxKGK), action: intl8.string(_modDef3830["/omTNx"]) };
    intl6 = intl13.intl;
    intl7 = intl13.intl;
    intl8 = intl13.intl;
    return obj3;
  } else {
    let str2 = message;
    if (obj.MISSING_MANAGE_SERVER === reason) {
      const obj4 = { title: intl4.string(_modDef3830.qpffbI), body: str2, action: intl5.string(intl13.t.BddRzS) };
      intl4 = intl13.intl;
      if (str2 == null) {
        str2 = "";
      }
      intl5 = tmp6(1128).intl;
      return obj4;
    } else if (obj.MISSING_MANAGE_CHANNELS === reason) {
      obj = { title: intl.string(_modDef3830.qpffbI), body: str, action: intl2.string(tmp4(3830).dVtQRH), cancel: intl3.string(intl13.t["ETE/oC"]) };
      intl = intl13.intl;
      str = str2;
      tmp4 = importDefault;
      if (str2 == null) {
        str = "";
      }
      intl2 = tmp2(1128).intl;
      intl3 = tmp2(1128).intl;
      return obj;
    }
  }
};
