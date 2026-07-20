// Module ID: 9512
// Function ID: 74041
// Name: showLongPressURLActionSheet
// Dependencies: []
// Exports: default

// Module 9512 (showLongPressURLActionSheet)
const _module = require(dependencyMap[8]);
const result = _module.fileFinishedImporting("modules/links/native/showLongPressURLActionSheet.tsx");

export default function showLongPressURLActionSheet(urlString) {
  let channelId;
  let disableHapticFeedback;
  const require = str;
  ({ guildId: closure_1, channelId } = urlString);
  const dependencyMap = channelId;
  ({ messageId: closure_3, disableHapticFeedback } = urlString);
  if (disableHapticFeedback === undefined) {
    disableHapticFeedback = false;
  }
  let match;
  if (!disableHapticFeedback) {
    let obj = require(dependencyMap[0]);
    const result = obj.triggerHapticFeedback(require(dependencyMap[0]).HapticFeedbackTypes.IMPACT_LIGHT);
  }
  const items = [];
  match = str.match(/^(tel|sms|mailto):([^?;]+)/);
  if (null != match) {
    obj = {};
    const intl7 = require(dependencyMap[1]).intl;
    if ("mailto" === match[1]) {
    } else {
    }
    obj.label = intl7.string(_3zozoR);
    obj.onPress = function onPress() {
      str(channelId[2]).presentLinkCopied();
      const obj = str(channelId[2]);
      str(channelId[3]).copy(match[2]);
    };
    items.push(obj);
    if ("tel" === match[1]) {
      obj = {};
      const intl = require(dependencyMap[1]).intl;
      obj.label = intl.string(require(dependencyMap[1]).t.+wbjMW);
      obj.onPress = function onPress() {
        callback(channelId[4]).openURL(str.replace("tel:", "sms:"));
      };
      items.push(obj);
    }
  }
  const obj1 = {};
  const intl2 = require(dependencyMap[1]).intl;
  obj1.label = intl2.string(require(dependencyMap[1]).t.wuRE8M);
  obj1.onPress = function onPress() {
    callback(channelId[4]).openURL(str);
  };
  const items1 = [obj1, , ];
  const obj2 = {};
  const intl3 = require(dependencyMap[1]).intl;
  obj2.label = intl3.string(require(dependencyMap[1]).t.WqhZss);
  obj2.onPress = function onPress() {
    str(channelId[2]).presentLinkCopied();
    const obj = str(channelId[2]);
    str(channelId[3]).copy(str);
  };
  items1[1] = obj2;
  const obj3 = {};
  const intl4 = require(dependencyMap[1]).intl;
  obj3.label = intl4.string(require(dependencyMap[1]).t.Ej3B3Y);
  obj3.onPress = function onPress() {
    let obj = str(channelId[5]);
    obj = { url: str };
    obj.showShareActionSheet(obj, "Share Link");
  };
  items1[HermesBuiltin.arraySpread(items, 2)] = obj3;
  if (null != channelId) {
    const obj4 = {};
    const intl5 = require(dependencyMap[1]).intl;
    obj4.label = intl5.string(require(dependencyMap[1]).t.aW2YlJ);
    obj4.onPress = function onPress() {
      callback(channelId[6])({ guildId: callback, channelId, messageId: closure_3, navigationSettings: { justifyContent: null, alignItems: null } });
    };
    items1.unshift(obj4);
  }
  let obj6 = require(dependencyMap[7]);
  const obj5 = { key: "LongPressUrl" };
  obj6 = {};
  const intl6 = require(dependencyMap[1]).intl;
  obj6.title = intl6.string(require(dependencyMap[1]).t.5oIOLX);
  obj6.subtitle = urlString.urlString;
  obj5.header = obj6;
  obj5.options = items1;
  obj5.hasIcons = false;
  const result1 = obj6.showSimpleActionSheet(obj5);
};
