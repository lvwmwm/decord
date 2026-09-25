// Module ID: 5361
// Function ID: 5362
// Name: getVibegrationsChannelIcon
// Dependencies: [5362, 5367, 5368, 5333, 5369, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5361 (getVibegrationsChannelIcon)
import _modDef5333 from "module_5333" /* 5333 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5362 */;
import _modDef5369 from "module_5369" /* 5369 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return tmp(5367).AppsIcon;
  } else if ("apps-lock" === result) {
    return tmp(5368).AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return _modDef5333;
  } else if ("apps-lock" === result) {
    return _modDef5369;
  } else {
    return null;
  }
};
