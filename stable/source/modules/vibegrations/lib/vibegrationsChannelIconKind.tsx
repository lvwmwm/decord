// Module ID: 5370
// Function ID: 5371
// Name: vibegrationsChannelIconKind
// Dependencies: [5371, 5374, 2]
// Exports: vibegrationsChannelIconKind

// Module 5370 (vibegrationsChannelIconKind)
import VibegrationsUtils from "VibegrationsUtils" /* 5371 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsChannelIconKind.tsx");

export const vibegrationsChannelIconKind = function vibegrationsChannelIconKind(channel, getChannelIconComponent) {
  let tmp = null;
  if (null != channel) {
    tmp = null;
    const obj = VibegrationsUtils;
    if (obj.isVibegrationsChannelCandidate(channel, getChannelIconComponent)) {
      let str = "apps";
      if (isRoleRequiredDefault(channel)) {
        str = "apps-lock";
      }
      tmp = str;
    }
  }
  return tmp;
};
