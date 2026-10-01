// Module ID: 5552
// Function ID: 5553
// Name: getVibegrationsChannelIcon
// Dependencies: [5553, 5558, 5559, 5524, 5560, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5552 (getVibegrationsChannelIcon)
import _modDef5524 from "module_5524" /* 5524 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5553 */;
import _modDef5560 from "module_5560" /* 5560 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return tmp(5558).AppsIcon;
  } else if ("apps-lock" === result) {
    return tmp(5559).AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return _modDef5524;
  } else if ("apps-lock" === result) {
    return _modDef5560;
  } else {
    return null;
  }
};
