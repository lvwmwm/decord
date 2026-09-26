// Module ID: 5368
// Function ID: 5369
// Name: getVibegrationsChannelIcon
// Dependencies: [5369, 5374, 5375, 5340, 5376, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5368 (getVibegrationsChannelIcon)
import _modDef5340 from "module_5340" /* 5340 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5369 */;
import _modDef5376 from "module_5376" /* 5376 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return tmp(5374).AppsIcon;
  } else if ("apps-lock" === result) {
    return tmp(5375).AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return _modDef5340;
  } else if ("apps-lock" === result) {
    return _modDef5376;
  } else {
    return null;
  }
};
