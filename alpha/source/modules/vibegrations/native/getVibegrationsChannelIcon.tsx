// Module ID: 5358
// Function ID: 5359
// Name: getVibegrationsChannelIcon
// Dependencies: [5359, 5364, 5365, 5330, 5366, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5358 (getVibegrationsChannelIcon)
import _modDef5330 from "module_5330" /* 5330 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5359 */;
import _modDef5366 from "module_5366" /* 5366 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return tmp(5364).AppsIcon;
  } else if ("apps-lock" === result) {
    return tmp(5365).AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return _modDef5330;
  } else if ("apps-lock" === result) {
    return _modDef5366;
  } else {
    return null;
  }
};
