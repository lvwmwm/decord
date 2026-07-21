// Module ID: 12048
// Function ID: 93035
// Name: SHARE_APPS_KEY
// Dependencies: []

// Module 12048 (SHARE_APPS_KEY)
const Linking = require(dependencyMap[0]).Linking;
const _module = require(dependencyMap[1]);
const SHARE_APPS_KEY = _module.SHARE_APPS_KEY;
const SHARE_URLS = _module.SHARE_URLS;
const _module1 = require(dependencyMap[2]);
({ InviteOptionsType: closure_6, SendTypes: closure_7 } = _module1);
let obj = { SHARE: 0, [0]: "SHARE", COPY: 1, [1]: "COPY", QR_CODE: 2, [2]: "QR_CODE", MESSAGES: 3, [3]: "MESSAGES", MAIL: 4, [4]: "MAIL", FB_MESSENGER: 5, [5]: "FB_MESSENGER", GMAIL: 6, [6]: "GMAIL", TELEGRAM: 7, [7]: "TELEGRAM", TWITTER: 8, [8]: "TWITTER", WHATSAPP: 9, [9]: "WHATSAPP", LINE: 10, [10]: "LINE" };
obj = {
  type: obj.SHARE,
  icon: importDefault(dependencyMap[3]),
  isAvailable: Promise.resolve(true),
  IconComponent: importDefault(dependencyMap[4]),
  backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.BRAND_500,
  getLabel() {
    const intl = require(dependencyMap[6]).intl;
    return intl.string(require(dependencyMap[6]).t.wPadMa);
  },
  onPress(code) {
    let _location;
    let channel;
    let message;
    ({ channel, message, location: _location } = code);
    return require(dependencyMap[7]).handleOpenShareSheet(code.code, channel, message, _location);
  }
};
const items = [obj, , , , , , , , , , ];
obj = {
  type: obj.COPY,
  icon: importDefault(dependencyMap[8]),
  isAvailable: Promise.resolve(true),
  IconComponent: importDefault(dependencyMap[9]),
  getLabel() {
    const intl = require(dependencyMap[6]).intl;
    return intl.string(require(dependencyMap[6]).t.WqhZss);
  },
  onPress(arg0) {
    let _location;
    let channel;
    let code;
    ({ channel, code, location: _location } = arg0);
    return require(dependencyMap[7]).handleCopy(code, channel, _location);
  }
};
items[1] = obj;
const obj1 = { type: obj.QR_CODE, icon: importDefault(dependencyMap[10]) };
const _module2 = require(dependencyMap[11]);
obj1.isAvailable = Promise.resolve(!_module2.isMetaQuest());
obj1.IconComponent = importDefault(dependencyMap[12]);
obj1.getLabel = function getLabel() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.rriLm1);
};
obj1.onPress = function onPress(code) {
  let _location;
  let channel;
  code = code.code;
  ({ channel, location: _location } = code);
  let obj = importDefault(dependencyMap[13]);
  obj = {};
  const combined = "InstantInviteQRCodeActionSheet-" + code;
  obj.link = importDefault(dependencyMap[16])(code);
  obj.location = _location;
  obj.channel = channel;
  obj.openLazy(require(dependencyMap[15])(dependencyMap[14], dependencyMap.paths), combined, obj, "stack");
};
items[2] = obj1;
const obj2 = { type: obj.MESSAGES };
const _module3 = require(dependencyMap[17]);
let importDefaultResult;
if (_module3.isIOS()) {
  importDefaultResult = importDefault(dependencyMap[18]);
}
obj2.fullIcon = importDefaultResult;
const _module4 = require(dependencyMap[17]);
let importDefaultResult1;
if (_module4.isAndroid()) {
  importDefaultResult1 = importDefault(dependencyMap[19]);
}
obj2.icon = importDefaultResult1;
const _module5 = require(dependencyMap[20]);
obj2.isAvailable = _module5.canSendSMS();
obj2.getLabel = function getLabel() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.AQKfCj);
};
obj2.onPress = function onPress(channel) {
  let _location;
  let message;
  channel = channel.channel;
  const require = channel;
  const code = channel.code;
  const importDefault = code;
  ({ message, location: _location } = channel);
  require(dependencyMap[7]).trackOptionClicked(code, channel, constants.SMS, _location);
  const obj = require(dependencyMap[7]);
  if (obj2.isIOS()) {
    importDefault(dependencyMap[13]).hideActionSheet();
    const obj3 = importDefault(dependencyMap[13]);
  }
  const obj2 = require(dependencyMap[17]);
  require(dependencyMap[20]).sendSMS({ body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      let id;
      let obj = code(closure_2[21]);
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
      obj = { send_type: constants.SMS };
      obj.overrideProperties = obj;
      obj.trackInvite(obj);
    }
    if (arg2) {
      const obj1 = {};
      const intl = channel(closure_2[6]).intl;
      obj1.body = intl.string(channel(closure_2[6]).t.1ieAR5);
      obj1.isDismissable = true;
      code(closure_2[22]).show(obj1);
      const obj4 = code(closure_2[22]);
    }
  });
};
items[3] = obj2;
const obj3 = { type: obj.MAIL };
const _module6 = require(dependencyMap[17]);
let importDefaultResult2;
if (_module6.isIOS()) {
  importDefaultResult2 = importDefault(dependencyMap[23]);
}
obj3.fullIcon = importDefaultResult2;
const _module7 = require(dependencyMap[17]);
let importDefaultResult3;
if (_module7.isAndroid()) {
  importDefaultResult3 = importDefault(dependencyMap[24]);
}
obj3.icon = importDefaultResult3;
const _module8 = require(dependencyMap[20]);
obj3.isAvailable = _module8.canSendMail();
obj3.getLabel = function getLabel() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.QaAypP);
};
obj3.onPress = function onPress(channel) {
  let _location;
  let message;
  channel = channel.channel;
  const require = channel;
  const code = channel.code;
  const importDefault = code;
  ({ message, location: _location } = channel);
  require(dependencyMap[7]).trackOptionClicked(code, channel, constants.EMAIL, _location);
  const obj = require(dependencyMap[7]);
  if (obj2.isIOS()) {
    importDefault(dependencyMap[13]).hideActionSheet();
    const obj3 = importDefault(dependencyMap[13]);
  }
  const obj2 = require(dependencyMap[17]);
  require(dependencyMap[20]).sendMail({ subject: "", body: message }, (arg0, arg1, arg2) => {
    if (arg0) {
      let id;
      let obj = code(closure_2[21]);
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
      obj = { send_type: constants.EMAIL };
      obj.overrideProperties = obj;
      obj.trackInvite(obj);
    }
    if (arg2) {
      const obj1 = {};
      const intl = channel(closure_2[6]).intl;
      obj1.body = intl.string(channel(closure_2[6]).t.1ieAR5);
      obj1.isDismissable = true;
      code(closure_2[22]).show(obj1);
      const obj4 = code(closure_2[22]);
    }
  });
};
items[4] = obj3;
const obj4 = { type: obj.FB_MESSENGER, fullIcon: importDefault(dependencyMap[25]) };
const _module9 = require(dependencyMap[7]);
obj4.isAvailable = _module9.isAppInstalled(SHARE_APPS_KEY.MESSENGER);
obj4.getLabel = function getLabel() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.P0R3ZF);
};
obj4.onPress = function onPress(code) {
  let _location;
  let channel;
  code = code.code;
  ({ channel, location: _location } = code);
  const tmp = importDefault(dependencyMap[16])(code);
  require(dependencyMap[7]).trackOptionClicked(code, channel, constants.MESSENGER, _location);
  Linking.openURL(SHARE_URLS[closure_4.MESSENGER](tmp));
};
items[5] = obj4;
const obj5 = { type: obj.GMAIL, fullIcon: importDefault(dependencyMap[26]) };
const _module10 = require(dependencyMap[7]);
obj5.isAvailable = _module10.isAppInstalled(SHARE_APPS_KEY.GMAIL);
obj5.getLabel = function getLabel() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.14o9ZT);
};
obj5.onPress = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  require(dependencyMap[7]).trackOptionClicked(code.code, channel, constants.GMAIL, _location);
  Linking.openURL(SHARE_URLS[closure_4.GMAIL]("", message));
};
items[6] = obj5;
const obj6 = { type: obj.TELEGRAM, fullIcon: importDefault(dependencyMap[27]) };
const _module11 = require(dependencyMap[7]);
obj6.isAvailable = _module11.isAppInstalled(SHARE_APPS_KEY.TELEGRAM);
obj6.getLabel = function getLabel() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.148qIV);
};
obj6.onPress = function onPress(code) {
  let _location;
  let channel;
  let message;
  code = code.code;
  ({ channel, message, location: _location } = code);
  const tmp = importDefault(dependencyMap[16])(code);
  require(dependencyMap[7]).trackOptionClicked(code, channel, constants.TELEGRAM, _location);
  Linking.openURL(SHARE_URLS[closure_4.TELEGRAM](message, tmp));
};
items[7] = obj6;
const obj7 = { type: obj.TWITTER, fullIcon: importDefault(dependencyMap[28]) };
const _module12 = require(dependencyMap[7]);
obj7.isAvailable = _module12.isAppInstalled(SHARE_APPS_KEY.TWITTER);
obj7.getLabel = function getLabel() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.oAiltV);
};
obj7.onPress = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  require(dependencyMap[7]).trackOptionClicked(code.code, channel, constants.TWITTER, _location);
  Linking.openURL(SHARE_URLS[closure_4.TWITTER](message));
};
items[8] = obj7;
const obj8 = { type: obj.WHATSAPP, fullIcon: importDefault(dependencyMap[29]) };
const _module13 = require(dependencyMap[7]);
obj8.isAvailable = _module13.isAppInstalled(SHARE_APPS_KEY.WHATSAPP);
obj8.getLabel = function getLabel() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.viazhS);
};
obj8.onPress = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  require(dependencyMap[7]).trackOptionClicked(code.code, channel, constants.WHATSAPP, _location);
  Linking.openURL(SHARE_URLS[closure_4.WHATSAPP](message));
};
items[9] = obj8;
const obj9 = { type: obj.LINE, fullIcon: importDefault(dependencyMap[30]) };
const _module14 = require(dependencyMap[7]);
obj9.isAvailable = _module14.isAppInstalled(SHARE_APPS_KEY.LINE);
obj9.getLabel = function getLabel() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.kqgslH);
};
obj9.onPress = function onPress(code) {
  let _location;
  let channel;
  let message;
  ({ channel, message, location: _location } = code);
  require(dependencyMap[7]).trackOptionClicked(code.code, channel, constants.LINE, _location);
  Linking.openURL(SHARE_URLS[closure_4.LINE](message));
};
items[10] = obj9;
const items1 = [, ];
[arr2[0], arr2[1]] = items;
const _module15 = require(dependencyMap[31]);
const result = _module15.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteConstants.tsx");

export const ShareItemType = obj;
export const SHARE_ITEMS = items;
export const SHARE_ITEMS_DEFAULT = items1;
