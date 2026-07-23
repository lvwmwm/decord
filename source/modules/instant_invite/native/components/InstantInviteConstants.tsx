// Module ID: 12166
// Function ID: 95224
// Name: SHARE_APPS_KEY
// Dependencies: [27, 8487, 653, 10896, 12167, 689, 1212, 8481, 10177, 4075, 12168, 1553, 12169, 4098, 12170, 1934, 7001, 477, 12187, 12188, 4304, 6691, 4471, 12189, 11773, 12190, 12191, 12192, 12193, 12194, 12195, 2]

// Module 12166 (SHARE_APPS_KEY)
import { Linking } from "registerAsset";
import SHARE_APPS_KEY from "SHARE_APPS_KEY";
import ME from "ME";
import isMetaQuest from "isMetaQuest";
import set from "set";
import set from "set";
import sendSMS from "sendSMS";
import set from "set";
import set from "set";
import sendSMS from "sendSMS";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import set from "ME";

let closure_6;
let closure_7;
SHARE_APPS_KEY = SHARE_APPS_KEY.SHARE_APPS_KEY;
const SHARE_URLS = SHARE_APPS_KEY.SHARE_URLS;
({ InviteOptionsType: closure_6, SendTypes: closure_7 } = ME);
let obj = { SHARE: 0, [0]: "SHARE", COPY: 1, [1]: "COPY", QR_CODE: 2, [2]: "QR_CODE", MESSAGES: 3, [3]: "MESSAGES", MAIL: 4, [4]: "MAIL", FB_MESSENGER: 5, [5]: "FB_MESSENGER", GMAIL: 6, [6]: "GMAIL", TELEGRAM: 7, [7]: "TELEGRAM", TWITTER: 8, [8]: "TWITTER", WHATSAPP: 9, [9]: "WHATSAPP", LINE: 10, [10]: "LINE" };
obj = {
  type: obj.SHARE,
  icon: require("module_10896"),
  isAvailable: Promise.resolve(true),
  IconComponent: require("registerAsset"),
  backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.wPadMa);
  },
  onPress(code) {
    let _location;
    let channel;
    let message;
    ({ channel, message, location: _location } = code);
    return require(8481) /* showInstantInviteActionSheet */.handleOpenShareSheet(code.code, channel, message, _location);
  }
};
const items = [obj, , , , , , , , , , ];
obj = {
  type: obj.COPY,
  icon: require("registerAsset"),
  isAvailable: Promise.resolve(true),
  IconComponent: require("registerAsset"),
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.WqhZss);
  },
  onPress(arg0) {
    let _location;
    let channel;
    let code;
    ({ channel, code, location: _location } = arg0);
    return require(8481) /* showInstantInviteActionSheet */.handleCopy(code, channel, _location);
  }
};
items[1] = obj;
let obj1 = { type: obj.QR_CODE, icon: require("registerAsset") };
obj1.isAvailable = Promise.resolve(!isMetaQuest.isMetaQuest());
obj1.IconComponent = require("registerAsset");
obj1.getLabel = function getLabel() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.rriLm1);
};
obj1.onPress = function onPress(code) {
  let _location;
  let channel;
  code = code.code;
  ({ channel, location: _location } = code);
  let obj = importDefault(4098);
  obj = {};
  const combined = "InstantInviteQRCodeActionSheet-" + code;
  obj.link = importDefault(7001)(code);
  obj.location = _location;
  obj.channel = channel;
  obj.openLazy(require(1934) /* maybeLoadBundle */(12170, dependencyMap.paths), combined, obj, "stack");
};
items[2] = obj1;
let obj2 = { type: obj.MESSAGES };
let importDefaultResult;
if (set.isIOS()) {
  importDefaultResult = require("registerAsset");
}
obj2.fullIcon = importDefaultResult;
let importDefaultResult1;
if (set.isAndroid()) {
  importDefaultResult1 = require("registerAsset");
}
obj2.icon = importDefaultResult1;
obj2.isAvailable = sendSMS.canSendSMS();
obj2.getLabel = function getLabel() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.AQKfCj);
};
obj2.onPress = function onPress(channel) {
  let _location;
  let message;
  channel = channel.channel;
  const code = channel.code;
  ({ message, location: _location } = channel);
  channel(8481).trackOptionClicked(code, channel, constants.SMS, _location);
  let obj = channel(8481);
  if (obj2.isIOS()) {
    code(4098).hideActionSheet();
    const obj3 = code(4098);
  }
  obj2 = channel(477);
  channel(4304).sendSMS({ body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      let id;
      let obj = code(outer1_2[21]);
      obj = { inviteKey: code };
      if (null != channel) {
        id = channel.id;
      }
      let tmp8 = null;
      if (null != id) {
        tmp8 = id;
      }
      obj.channelId = tmp8;
      obj.messageId = null;
      obj.location = "SMS Option";
      obj = { send_type: outer1_7.SMS };
      obj.overrideProperties = obj;
      obj.trackInvite(obj);
    }
    if (arg2) {
      const obj1 = {};
      const intl = channel(outer1_2[6]).intl;
      obj1.body = intl.string(channel(outer1_2[6]).t["1ieAR5"]);
      obj1.isDismissable = true;
      code(outer1_2[22]).show(obj1);
      const obj4 = code(outer1_2[22]);
    }
  });
};
items[3] = obj2;
let obj3 = { type: obj.MAIL };
let importDefaultResult2;
if (set.isIOS()) {
  importDefaultResult2 = require("registerAsset");
}
obj3.fullIcon = importDefaultResult2;
let importDefaultResult3;
if (set.isAndroid()) {
  importDefaultResult3 = require("registerAsset");
}
obj3.icon = importDefaultResult3;
obj3.isAvailable = sendSMS.canSendMail();
obj3.getLabel = function getLabel() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.QaAypP);
};
obj3.onPress = function onPress(channel) {
  let _location;
  let message;
  channel = channel.channel;
  const code = channel.code;
  ({ message, location: _location } = channel);
  channel(8481).trackOptionClicked(code, channel, constants.EMAIL, _location);
  let obj = channel(8481);
  if (obj2.isIOS()) {
    code(4098).hideActionSheet();
    const obj3 = code(4098);
  }
  obj2 = channel(477);
  channel(4304).sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      let id;
      let obj = code(outer1_2[21]);
      obj = { inviteKey: code };
      if (null != channel) {
        id = channel.id;
      }
      let tmp8 = null;
      if (null != id) {
        tmp8 = id;
      }
      obj.channelId = tmp8;
      obj.messageId = null;
      obj.location = "Email Option";
      obj = { send_type: outer1_7.EMAIL };
      obj.overrideProperties = obj;
      obj.trackInvite(obj);
    }
    if (arg2) {
      const obj1 = {};
      const intl = channel(outer1_2[6]).intl;
      obj1.body = intl.string(channel(outer1_2[6]).t["1ieAR5"]);
      obj1.isDismissable = true;
      code(outer1_2[22]).show(obj1);
      const obj4 = code(outer1_2[22]);
    }
  });
};
items[4] = obj3;
let obj4 = { type: obj.FB_MESSENGER, fullIcon: require("registerAsset") };
obj4.isAvailable = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.MESSENGER);
obj4.getLabel = function getLabel() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.P0R3ZF);
};
obj4.onPress = function onPress(code) {
  let _location;
  let channel;
  code = code.code;
  ({ channel, location: _location } = code);
  const tmp = importDefault(7001)(code);
  require(8481) /* showInstantInviteActionSheet */.trackOptionClicked(code, channel, constants.MESSENGER, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.MESSENGER](tmp));
};
items[5] = obj4;
const obj5 = { type: obj.GMAIL, fullIcon: require("registerAsset") };
obj5.isAvailable = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.GMAIL);
obj5.getLabel = function getLabel() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["14o9ZT"]);
};
obj5.onPress = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  require(8481) /* showInstantInviteActionSheet */.trackOptionClicked(code.code, channel, constants.GMAIL, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.GMAIL]("", message));
};
items[6] = obj5;
const obj6 = { type: obj.TELEGRAM, fullIcon: require("registerAsset") };
obj6.isAvailable = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.TELEGRAM);
obj6.getLabel = function getLabel() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["148qIV"]);
};
obj6.onPress = function onPress(code) {
  let _location;
  let channel;
  let message;
  code = code.code;
  ({ channel, message, location: _location } = code);
  const tmp = importDefault(7001)(code);
  require(8481) /* showInstantInviteActionSheet */.trackOptionClicked(code, channel, constants.TELEGRAM, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TELEGRAM](message, tmp));
};
items[7] = obj6;
const obj7 = { type: obj.TWITTER, fullIcon: require("registerAsset") };
obj7.isAvailable = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.TWITTER);
obj7.getLabel = function getLabel() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.oAiltV);
};
obj7.onPress = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  require(8481) /* showInstantInviteActionSheet */.trackOptionClicked(code.code, channel, constants.TWITTER, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.TWITTER](message));
};
items[8] = obj7;
const obj8 = { type: obj.WHATSAPP, fullIcon: require("registerAsset") };
obj8.isAvailable = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.WHATSAPP);
obj8.getLabel = function getLabel() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.viazhS);
};
obj8.onPress = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  require(8481) /* showInstantInviteActionSheet */.trackOptionClicked(code.code, channel, constants.WHATSAPP, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.WHATSAPP](message));
};
items[9] = obj8;
const obj9 = { type: obj.LINE, fullIcon: require("registerAsset") };
obj9.isAvailable = showInstantInviteActionSheet.isAppInstalled(SHARE_APPS_KEY.LINE);
obj9.getLabel = function getLabel() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.kqgslH);
};
obj9.onPress = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  require(8481) /* showInstantInviteActionSheet */.trackOptionClicked(code.code, channel, constants.LINE, _location);
  Linking.openURL(SHARE_URLS[SHARE_APPS_KEY.LINE](message));
};
items[10] = obj9;
const items1 = [, ];
[arr2[0], arr2[1]] = items;
const result = set.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteConstants.tsx");

export const ShareItemType = obj;
export const SHARE_ITEMS = items;
export const SHARE_ITEMS_DEFAULT = items1;
