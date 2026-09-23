// Module ID: 5359
// Function ID: 5360
// Name: vibegrationsChannelIconKind
// Dependencies: [5360, 5363, 2]
// Exports: vibegrationsChannelIconKind

// Module 5359 (vibegrationsChannelIconKind)
import VibegrationsUtils from "VibegrationsUtils" /* 5360 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5363 */;
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
