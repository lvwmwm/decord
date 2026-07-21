// Module ID: 10333
// Function ID: 79759
// Name: ThreadNotificationsBottomSheet
// Dependencies: []
// Exports: default

// Module 10333 (ThreadNotificationsBottomSheet)
let closure_3 = require(dependencyMap[0]).getThreadNotificationOptions;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default function ThreadNotificationsBottomSheet(channel) {
  channel = channel.channel;
  const require = channel;
  let obj = require(dependencyMap[2]);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  obj = {};
  obj = {};
  const intl = require(dependencyMap[5]).intl;
  obj.title = intl.string(require(dependencyMap[5]).t.h850Ss);
  obj.header = jsx(require(dependencyMap[4]).BottomSheetTitleHeader, obj);
  const obj1 = {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      let obj = callback(closure_2[7]);
      obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    }
  };
  const intl2 = require(dependencyMap[5]).intl;
  obj1.accessibilityLabel = intl2.string(require(dependencyMap[5]).t.h850Ss);
  obj1.children = callback().map((label) => {
    const setting = label.setting;
    return callback2(channel(closure_2[8]).TableRadioRow, { value: setting, label: label.label }, "" + setting);
  });
  obj.children = jsx(require(dependencyMap[6]).TableRadioGroup, obj1);
  return jsx(require(dependencyMap[3]).ActionSheet, obj);
};
