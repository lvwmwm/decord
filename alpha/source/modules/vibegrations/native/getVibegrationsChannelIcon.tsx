// Module ID: 5272
// Function ID: 5273
// Name: getVibegrationsChannelIcon
// Dependencies: [5273, 5278, 5279, 5244, 5280, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5272 (getVibegrationsChannelIcon)
import _modDef5244 from "module_5244" /* 5244 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5273 */;
import _modDef5280 from "module_5280" /* 5280 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return tmp(5278).AppsIcon;
  } else if ("apps-lock" === result) {
    return tmp(5279).AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return _modDef5244;
  } else if ("apps-lock" === result) {
    return _modDef5280;
  } else {
    return null;
  }
};
