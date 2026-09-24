// Module ID: 5361
// Function ID: 5362
// Name: vibegrationsChannelIconKind
// Dependencies: [5362, 5365, 2]
// Exports: vibegrationsChannelIconKind

// Module 5361 (vibegrationsChannelIconKind)
import VibegrationsUtils from "VibegrationsUtils" /* 5362 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5365 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsChannelIconKind.tsx");

export const vibegrationsChannelIconKind = function vibegrationsChannelIconKind(channel, getChannelIconComponent) {
  let tmp = null;
  if (null != channel) {
    tmp = null;
    if (obj.isVibegrationsChannelCandidate(channel, getChannelIconComponent)) {
      let str = "apps";
      if (isRoleRequiredDefault(channel)) {
        str = "apps-lock";
      }
      tmp = str;
    }
    obj = VibegrationsUtils;
  }
  return tmp;
};
