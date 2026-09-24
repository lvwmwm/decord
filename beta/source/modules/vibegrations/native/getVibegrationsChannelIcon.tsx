// Module ID: 5306
// Function ID: 5307
// Name: getVibegrationsChannelIcon
// Dependencies: [5307, 5312, 5313, 5278, 5314, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5306 (getVibegrationsChannelIcon)
import _modDef5278 from "module_5278" /* 5278 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5307 */;
import _modDef5314 from "module_5314" /* 5314 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return tmp(5312).AppsIcon;
  } else if ("apps-lock" === result) {
    return tmp(5313).AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return _modDef5278;
  } else if ("apps-lock" === result) {
    return _modDef5314;
  } else {
    return null;
  }
};
