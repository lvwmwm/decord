// Module ID: 5307
// Function ID: 5308
// Name: vibegrationsChannelIconKind
// Dependencies: [5308, 5311, 2]
// Exports: vibegrationsChannelIconKind

// Module 5307 (vibegrationsChannelIconKind)
import VibegrationsUtils from "VibegrationsUtils" /* 5308 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5311 */;
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
