// Module ID: 16090
// Function ID: 124540
// Dependencies: [8989, 1212, 1920, 2]
// Exports: default

// Module 16090
import { GameConsoleCommandResultErrorCodes as closure_3 } from "XBOX_URL_BASE";

const result = require("wrapURL").fileFinishedImporting("modules/game_console/getErrorMessageForCommandResult.tsx");

export default function getErrorMessageForCommandResult(arg0, arg1, code) {
  let name;
  let platform;
  if ("failed" === arg1) {
    code = code.code;
    ({ platform, name } = arg0);
    if (constants.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED === code) {
      let obj = {};
      const intl7 = require(1212) /* getSystemLocale */.intl;
      obj.title = intl7.string(require(1212) /* getSystemLocale */.t["GSZ+HI"]);
      const intl8 = require(1212) /* getSystemLocale */.intl;
      obj = { deviceType: platform };
      obj.body = intl8.formatToPlainString(require(1212) /* getSystemLocale */.t["cYX/3E"], obj);
      let obj7 = obj;
    } else if (constants.CONSOLE_DEVICE_INVALID_POWER_MODE === code) {
      const obj1 = {};
      const intl5 = require(1212) /* getSystemLocale */.intl;
      const obj2 = { deviceType: platform };
      obj1.title = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.akd6Sx, obj2);
      const intl6 = require(1212) /* getSystemLocale */.intl;
      const obj3 = { deviceName: name };
      obj1.body = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t.RyOvpJ, obj3);
      obj7 = obj1;
    } else {
      if (constants.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS === code) {
        const obj4 = {};
        const intl3 = require(1212) /* getSystemLocale */.intl;
        const obj5 = { deviceType: platform };
        obj4.title = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.M6Vzat, obj5);
        const intl4 = require(1212) /* getSystemLocale */.intl;
        const obj6 = { deviceName: name };
        obj4.body = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.InKtnC, obj6);
        obj7 = obj4;
      } else if (constants.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR !== code) {
        obj7 = {};
        const intl12 = require(1212) /* getSystemLocale */.intl;
        obj7.title = intl12.string(require(1212) /* getSystemLocale */.t.QL1y93);
        const intl13 = require(1212) /* getSystemLocale */.intl;
        const obj8 = { deviceName: name };
        obj7.body = intl13.formatToPlainString(require(1212) /* getSystemLocale */.t["6ZyNH/"], obj8);
      }
      obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.title = intl.string(require(1212) /* getSystemLocale */.t.QL1y93);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj9 = { deviceType: platform };
      obj.body = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.D18eZu, obj9);
      obj.isAccountLinkError = true;
      obj7 = obj;
    }
  } else {
    let tmp = null;
    if ("n/a" === arg1) {
      let tmp19 = null;
      if (code.code === constants.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) {
        const obj10 = {};
        const intl10 = require(1212) /* getSystemLocale */.intl;
        const obj11 = { deviceType: tmp16 };
        obj10.title = intl10.formatToPlainString(require(1212) /* getSystemLocale */.t.KchfhO, obj11);
        const intl11 = require(1212) /* getSystemLocale */.intl;
        let obj12 = { deviceName: tmp17 };
        obj10.body = intl11.formatToPlainString(require(1212) /* getSystemLocale */.t["21ndz7"], obj12);
        tmp19 = obj10;
      }
      tmp = tmp19;
    }
    if (null != tmp) {
      const intl9 = require(1212) /* getSystemLocale */.intl;
      const obj13 = {};
      obj12 = importDefault(1920);
      obj13.supportURL = obj12.getSubmitRequestURL();
      obj13.errorCode = code.code;
      tmp.errorCodeMessage = intl9.format(require(1212) /* getSystemLocale */.t["1Bi9Cf"], obj13);
    }
    return tmp;
  }
};
