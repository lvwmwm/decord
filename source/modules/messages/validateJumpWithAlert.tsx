// Module ID: 9912
// Function ID: 76679
// Name: validateJumpWithAlert
// Dependencies: []
// Exports: default

// Module 9912 (validateJumpWithAlert)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/messages/validateJumpWithAlert.tsx");

export default function validateJumpWithAlert(author, onConfirm) {
  if (closure_5.isBlockedForMessage(author)) {
    let obj = {};
    const intl11 = onConfirm(dependencyMap[5]).intl;
    obj.title = intl11.string(onConfirm(dependencyMap[5]).t.j7eA/g);
    const intl12 = onConfirm(dependencyMap[5]).intl;
    obj = { name: author.author.username };
    obj.body = intl12.formatToPlainString(onConfirm(dependencyMap[5]).t.dTNNgr, obj);
    const intl13 = onConfirm(dependencyMap[5]).intl;
    obj.confirmText = intl13.string(onConfirm(dependencyMap[5]).t.BddRzS);
    importDefault(dependencyMap[4]).show(obj);
    return false;
  } else if (closure_5.isIgnoredForMessage(author)) {
    const obj1 = {};
    const intl8 = onConfirm(dependencyMap[5]).intl;
    obj1.title = intl8.string(onConfirm(dependencyMap[5]).t.XyWoKV);
    const intl9 = onConfirm(dependencyMap[5]).intl;
    let obj2 = { name: author.author.username };
    obj1.body = intl9.formatToPlainString(onConfirm(dependencyMap[5]).t.8t8doK, obj2);
    const intl10 = onConfirm(dependencyMap[5]).intl;
    obj1.confirmText = intl10.string(onConfirm(dependencyMap[5]).t.BddRzS);
    importDefault(dependencyMap[4]).show(obj1);
    return false;
  } else {
    obj = onConfirm(dependencyMap[6]);
    if (obj.isSpam(author)) {
      const channel = channel.getChannel(author.channel_id);
      let isPrivateResult;
      if (null != channel) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        if (!closure_4.can(Permissions.MODERATE_MEMBERS, channel)) {
          obj2 = importDefault(dependencyMap[4]);
          const obj3 = {};
          const intl = onConfirm(dependencyMap[5]).intl;
          obj3.title = intl.string(onConfirm(dependencyMap[5]).t.6vJKFk);
          const intl2 = onConfirm(dependencyMap[5]).intl;
          const obj4 = { name: author.author.username };
          obj3.body = intl2.formatToPlainString(onConfirm(dependencyMap[5]).t.zKNgPF, obj4);
          const intl3 = onConfirm(dependencyMap[5]).intl;
          obj3.confirmText = intl3.string(onConfirm(dependencyMap[5]).t.BddRzS);
          obj2.show(obj3);
        }
        return false;
      }
      let obj5 = importDefault(dependencyMap[4]);
      obj5 = {};
      const intl4 = onConfirm(dependencyMap[5]).intl;
      obj5.title = intl4.string(onConfirm(dependencyMap[5]).t.cZcG+P);
      const intl5 = onConfirm(dependencyMap[5]).intl;
      const obj6 = { name: author.author.username };
      obj5.body = intl5.formatToPlainString(onConfirm(dependencyMap[5]).t.1YTWty, obj6);
      const intl6 = onConfirm(dependencyMap[5]).intl;
      obj5.confirmText = intl6.string(onConfirm(dependencyMap[5]).t.+TSRGD);
      const intl7 = onConfirm(dependencyMap[5]).intl;
      obj5.cancelText = intl7.string(onConfirm(dependencyMap[5]).t.ETE/oC);
      obj5.onConfirm = onConfirm;
      obj5.show(obj5);
    } else {
      return true;
    }
  }
};
