// Module ID: 5360
// Function ID: 5361
// Name: getVibegrationsChannelIcon
// Dependencies: [5361, 5366, 5367, 5332, 5368, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5360 (getVibegrationsChannelIcon)
import _modDef5332 from "module_5332" /* 5332 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5361 */;
import _modDef5368 from "module_5368" /* 5368 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return tmp(5366).AppsIcon;
  } else if ("apps-lock" === result) {
    return tmp(5367).AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return _modDef5332;
  } else if ("apps-lock" === result) {
    return _modDef5368;
  } else {
    return null;
  }
};
