// Module ID: 15907
// Function ID: 121934
// Dependencies: []
// Exports: default

// Module 15907
let closure_3 = require(dependencyMap[0]).GameConsoleCommandResultErrorCodes;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/game_console/getErrorMessageForCommandResult.tsx");

export default function getErrorMessageForCommandResult(arg0, arg1, code) {
  let name;
  let platform;
  if ("failed" === arg1) {
    code = code.code;
    ({ platform, name } = arg0);
    if (constants.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED === code) {
      let obj = {};
      const intl7 = require(dependencyMap[1]).intl;
      obj.title = intl7.string(require(dependencyMap[1]).t.GSZ+HI);
      const intl8 = require(dependencyMap[1]).intl;
      obj = { deviceType: platform };
      obj.body = intl8.formatToPlainString(require(dependencyMap[1]).t.cYX/3E, obj);
      let obj7 = obj;
    } else if (constants.CONSOLE_DEVICE_INVALID_POWER_MODE === code) {
      const obj1 = {};
      const intl5 = require(dependencyMap[1]).intl;
      const obj2 = { deviceType: platform };
      obj1.title = intl5.formatToPlainString(require(dependencyMap[1]).t.akd6Sx, obj2);
      const intl6 = require(dependencyMap[1]).intl;
      const obj3 = { deviceName: name };
      obj1.body = intl6.formatToPlainString(require(dependencyMap[1]).t.RyOvpJ, obj3);
      obj7 = obj1;
    } else {
      if (constants.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS === code) {
        const obj4 = {};
        const intl3 = require(dependencyMap[1]).intl;
        const obj5 = { deviceType: platform };
        obj4.title = intl3.formatToPlainString(require(dependencyMap[1]).t.M6Vzat, obj5);
        const intl4 = require(dependencyMap[1]).intl;
        const obj6 = { deviceName: name };
        obj4.body = intl4.formatToPlainString(require(dependencyMap[1]).t.InKtnC, obj6);
        obj7 = obj4;
      } else if (constants.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR !== code) {
        obj7 = {};
        const intl12 = require(dependencyMap[1]).intl;
        obj7.title = intl12.string(require(dependencyMap[1]).t.QL1y93);
        const intl13 = require(dependencyMap[1]).intl;
        const obj8 = { deviceName: name };
        obj7.body = intl13.formatToPlainString(require(dependencyMap[1]).t.6ZyNH/, obj8);
      }
      obj = {};
      const intl = require(dependencyMap[1]).intl;
      obj.title = intl.string(require(dependencyMap[1]).t.QL1y93);
      const intl2 = require(dependencyMap[1]).intl;
      const obj9 = { deviceType: platform };
      obj.body = intl2.formatToPlainString(require(dependencyMap[1]).t.D18eZu, obj9);
      obj.isAccountLinkError = true;
      obj7 = obj;
    }
  } else {
    let tmp = null;
    if ("n/a" === arg1) {
      let tmp19 = null;
      if (code.code === constants.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) {
        const obj10 = {};
        const intl10 = require(dependencyMap[1]).intl;
        const obj11 = { deviceType: tmp16 };
        obj10.title = intl10.formatToPlainString(require(dependencyMap[1]).t.KchfhO, obj11);
        const intl11 = require(dependencyMap[1]).intl;
        let obj12 = { deviceName: tmp17 };
        obj10.body = intl11.formatToPlainString(require(dependencyMap[1]).t.21ndz7, obj12);
        tmp19 = obj10;
      }
      tmp = tmp19;
    }
    if (null != tmp) {
      const intl9 = require(dependencyMap[1]).intl;
      const obj13 = {};
      obj12 = importDefault(dependencyMap[2]);
      obj13.supportURL = obj12.getSubmitRequestURL();
      obj13.errorCode = code.code;
      tmp.errorCodeMessage = intl9.format(require(dependencyMap[1]).t.1Bi9Cf, obj13);
    }
    return tmp;
  }
};
