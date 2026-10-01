// Module ID: 5368
// Function ID: 5369
// Name: getVibegrationsChannelIcon
// Dependencies: [5369, 5374, 5375, 5340, 5376, 2]
// Exports: getVibegrationsChannelIconComponent, getVibegrationsChannelIconSource

// Module 5368 (getVibegrationsChannelIcon)
import AssetRegistryDefault from "AssetRegistry" /* 5340 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5369 */;
import AppsIcon from "AppsIcon" /* 5374 */;
import AppsLockIcon from "AppsLockIcon" /* 5375 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 5376 */;
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
