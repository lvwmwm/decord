// Module ID: 9953
// Function ID: 76942
// Name: validateJumpWithAlert
// Dependencies: [1348, 3758, 3767, 653, 4470, 1212, 6739, 2]
// Exports: default

// Module 9953 (validateJumpWithAlert)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/validateJumpWithAlert.tsx");

export default function validateJumpWithAlert(author, onConfirm) {
  if (closure_5.isBlockedForMessage(author)) {
    let obj = {};
    const intl11 = require(1212) /* getSystemLocale */.intl;
    obj.title = intl11.string(require(1212) /* getSystemLocale */.t["j7eA/g"]);
    const intl12 = require(1212) /* getSystemLocale */.intl;
    obj = { name: author.author.username };
    obj.body = intl12.formatToPlainString(require(1212) /* getSystemLocale */.t.dTNNgr, obj);
    const intl13 = require(1212) /* getSystemLocale */.intl;
    obj.confirmText = intl13.string(require(1212) /* getSystemLocale */.t.BddRzS);
    importDefault(4470).show(obj);
    return false;
  } else if (closure_5.isIgnoredForMessage(author)) {
    const obj1 = {};
    const intl8 = require(1212) /* getSystemLocale */.intl;
    obj1.title = intl8.string(require(1212) /* getSystemLocale */.t.XyWoKV);
    const intl9 = require(1212) /* getSystemLocale */.intl;
    let obj2 = { name: author.author.username };
    obj1.body = intl9.formatToPlainString(require(1212) /* getSystemLocale */.t["8t8doK"], obj2);
    const intl10 = require(1212) /* getSystemLocale */.intl;
    obj1.confirmText = intl10.string(require(1212) /* getSystemLocale */.t.BddRzS);
    importDefault(4470).show(obj1);
    return false;
  } else {
    obj = require(6739) /* isSpammer */;
    if (obj.isSpam(author)) {
      channel = channel.getChannel(author.channel_id);
      let isPrivateResult;
      if (null != channel) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        if (!closure_4.can(Permissions.MODERATE_MEMBERS, channel)) {
          obj2 = importDefault(4470);
          const obj3 = {};
          const intl = require(1212) /* getSystemLocale */.intl;
          obj3.title = intl.string(require(1212) /* getSystemLocale */.t["6vJKFk"]);
          const intl2 = require(1212) /* getSystemLocale */.intl;
          const obj4 = { name: author.author.username };
          obj3.body = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.zKNgPF, obj4);
          const intl3 = require(1212) /* getSystemLocale */.intl;
          obj3.confirmText = intl3.string(require(1212) /* getSystemLocale */.t.BddRzS);
          obj2.show(obj3);
        }
        return false;
      }
      let obj5 = importDefault(4470);
      obj5 = {};
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj5.title = intl4.string(require(1212) /* getSystemLocale */.t["cZcG+P"]);
      const intl5 = require(1212) /* getSystemLocale */.intl;
      const obj6 = { name: author.author.username };
      obj5.body = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t["1YTWty"], obj6);
      const intl6 = require(1212) /* getSystemLocale */.intl;
      obj5.confirmText = intl6.string(require(1212) /* getSystemLocale */.t["+TSRGD"]);
      const intl7 = require(1212) /* getSystemLocale */.intl;
      obj5.cancelText = intl7.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
      obj5.onConfirm = onConfirm;
      obj5.show(obj5);
    } else {
      return true;
    }
  }
};
