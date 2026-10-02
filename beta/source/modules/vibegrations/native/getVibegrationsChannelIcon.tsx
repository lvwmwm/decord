// Module ID: 5369
// Function ID: 5370
// Name: getVibegrationsChannelIcon
// Dependencies: [5370, 5375, 5376, 5341, 5377, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5369 (getVibegrationsChannelIcon)
import AssetRegistryDefault from "AssetRegistry" /* 5341 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5370 */;
import AppsIcon from "AppsIcon" /* 5375 */;
import AppsLockIcon from "AppsLockIcon" /* 5376 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 5377 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const obj = vibegrationsChannelIconKind;
  const result = obj.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return AppsIcon.AppsIcon;
  } else if ("apps-lock" === result) {
    return AppsLockIcon.AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const obj = vibegrationsChannelIconKind;
  const result = obj.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return AssetRegistryDefault;
  } else if ("apps-lock" === result) {
    return AssetRegistryDefault2;
  } else {
    return null;
  }
};
