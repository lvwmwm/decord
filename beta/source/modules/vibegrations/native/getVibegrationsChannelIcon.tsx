// Module ID: 5274
// Function ID: 5275
// Name: getVibegrationsChannelIcon
// Dependencies: [5275, 5280, 5281, 5246, 5282, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5274 (getVibegrationsChannelIcon)
import _modDef5246 from "module_5246" /* 5246 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5275 */;
import _modDef5282 from "module_5282" /* 5282 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return tmp(5280).AppsIcon;
  } else if ("apps-lock" === result) {
    return tmp(5281).AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return _modDef5246;
  } else if ("apps-lock" === result) {
    return _modDef5282;
  } else {
    return null;
  }
};
