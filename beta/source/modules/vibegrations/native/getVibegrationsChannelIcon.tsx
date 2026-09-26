// Module ID: 5304
// Function ID: 5305
// Name: getVibegrationsChannelIcon
// Dependencies: [5305, 5310, 5311, 5276, 5312, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5304 (getVibegrationsChannelIcon)
import _modDef5276 from "module_5276" /* 5276 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5305 */;
import _modDef5312 from "module_5312" /* 5312 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return tmp(5310).AppsIcon;
  } else if ("apps-lock" === result) {
    return tmp(5311).AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return _modDef5276;
  } else if ("apps-lock" === result) {
    return _modDef5312;
  } else {
    return null;
  }
};
