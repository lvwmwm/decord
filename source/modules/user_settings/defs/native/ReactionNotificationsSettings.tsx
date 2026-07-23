// Module ID: 14319
// Function ID: 109642
// Name: onChange
// Dependencies: [7662, 3769, 3803, 1212, 1282, 10095, 2]
// Exports: onChange

// Module 14319 (onChange)
import createToggle from "createToggle";

function onChange(arg0) {
  const obj = require(3769) /* getReactionEmojiName */;
  const ReactionNotifications = require(3803) /* explicitContentFromProto */.ReactionNotifications;
  const result = obj.updateReactionNotificationsSetting(Number(arg0), ReactionNotifications.getSetting());
}
const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Rq0NFs);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t["9x/RtT"]);
    obj.value = require(1282) /* _callSuper */.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl2.string(require(1212) /* getSystemLocale */.t.fJAbQd);
    obj.value = require(1282) /* _callSuper */.ReactionNotificationType.ONLY_DMS;
    items[1] = obj;
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t["xu+UDU"]);
    obj.value = require(1282) /* _callSuper */.ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Rq0NFs);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t["9x/RtT"]);
    obj.value = require(1282) /* _callSuper */.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl2.string(require(1212) /* getSystemLocale */.t.fJAbQd);
    obj.value = require(1282) /* _callSuper */.ReactionNotificationType.ONLY_DMS;
    items[1] = obj;
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t["xu+UDU"]);
    obj.value = require(1282) /* _callSuper */.ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj;
    return items;
  }
};
let result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/ReactionNotificationsSettings.tsx");

export default radio;
export { onChange };
