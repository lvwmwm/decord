// Module ID: 11575
// Function ID: 11576
// Name: validateJumpWithAlert
// Dependencies: [4643, 4726, 4736, 1071, 5741, 1112, 8180, 2]
// Exports: default

// Module 11575 (validateJumpWithAlert)
import Constants from "Constants" /* 1071 */;
import intl14 from "intl" /* 1112 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5741 */;
import isSpam from "isSpam" /* 8180 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import RelationshipStore from "RelationshipStore" /* 4736 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/messages/validateJumpWithAlert.tsx");

export default function validateJumpWithAlert(author, onConfirm) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj10;
  let obj4;
  let obj6;
  let obj8;
  const obj = RelationshipStore;
  if (RelationshipStore.isBlockedForMessage(author)) {
    const obj3 = { title: intl11.string(intl14.t["j7eA/g"]), body: intl12.formatToPlainString(intl14.t.dTNNgr, obj4), confirmText: intl13.string(intl14.t.BddRzS) };
    const show4 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl11 = intl14.intl;
    intl12 = intl14.intl;
    obj4 = { name: author.author.username };
    intl13 = intl14.intl;
    show4(obj3);
    return false;
  } else if (obj.isIgnoredForMessage(author)) {
    const obj5 = { title: intl8.string(intl14.t.XyWoKV), body: intl9.formatToPlainString(intl14.t["8t8doK"], obj6), confirmText: intl10.string(intl14.t.BddRzS) };
    const show3 = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl8 = intl14.intl;
    intl9 = intl14.intl;
    obj6 = { name: author.author.username };
    intl10 = intl14.intl;
    show3(obj5);
    return false;
  } else {
    const obj2 = isSpam;
    if (obj2.isSpam(author)) {
      const channel = ChannelStore.getChannel(author.channel_id);
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        if (!PermissionStore.can(Permissions.MODERATE_MEMBERS, channel)) {
          const obj7 = { title: intl.string(intl14.t["6vJKFk"]), body: intl2.formatToPlainString(intl14.t.zKNgPF, obj8), confirmText: intl3.string(intl14.t.BddRzS) };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = tmp(1112).intl;
          intl2 = tmp(1112).intl;
          obj8 = { name: author.author.username };
          intl3 = tmp(1112).intl;
          show(obj7);
        }
        return false;
      }
      const obj9 = { title: intl4.string(intl14.t["cZcG+P"]), body: intl5.formatToPlainString(intl14.t["1YTWty"], obj10), confirmText: intl6.string(intl14.t["+TSRGD"]), cancelText: intl7.string(intl14.t["ETE/oC"]), onConfirm };
      const show2 = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl4 = tmp(1112).intl;
      intl5 = tmp(1112).intl;
      obj10 = { name: author.author.username };
      intl6 = tmp(1112).intl;
      intl7 = tmp(1112).intl;
      show2(obj9);
    } else {
      return true;
    }
  }
};
