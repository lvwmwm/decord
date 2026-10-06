// Module ID: 16274
// Function ID: 16275
// Name: vibegrationsPreviewModes
// Dependencies: [16275, 2]
// Exports: previewModeAvailability, profileSurfaceAvailability, profileWidgetState, requiresPermissionReview, resolvePreviewMode

// Module 16274 (vibegrationsPreviewModes)
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = {
  frame(hasFrame) {
    return hasFrame.hasFrame;
  },
  widget(disableInteraction) {
    return disableInteraction.hasProfileWidget;
  },
  bot(hasBotDm) {
    return true === hasBotDm.hasBotDm;
  }
};
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPreviewModes.tsx");

export const previewModeAvailability = function previewModeAvailability(installScope) {
  let first;
  let str;
  _require = installScope;
  const prop = require("VibegrationsPreviewMode").VIBEGRATIONS_PREVIEW_MODE_ORDER;
  const found = prop.filter((item) => obj[item](installScope));
  obj = { modes: found, defaultMode: first, showModeSwitch: found.length > 1, profileState: str };
  first = found[0];
  if (first == null) {
    first = null;
  }
  str = "available";
  if ("user" === installScope.installScope) {
    str = "available";
    if (true === tmp2) {
      str = "unavailable-authorization-revoked";
    }
  }
  return obj;
};
export const profileWidgetState = function profileWidgetState(installScope) {
  let str = "available";
  if ("user" === installScope.installScope) {
    str = "available";
    if (true === tmp) {
      str = "unavailable-authorization-revoked";
    }
  }
  return str;
};
export const resolvePreviewMode = function resolvePreviewMode(arg0, result1) {
  let defaultMode = arg0;
  if (null == arg0) {
    defaultMode = result1.defaultMode;
  } else {
    const modes = result1.modes;
  }
  return defaultMode;
};
export const profileSurfaceAvailability = function profileSurfaceAvailability(widgetTop) {
  let tmp = widgetTop.widgetTop && widgetTop.widgetBottom;
  const miniProfile = widgetTop.miniProfile;
  obj = { hasMainCard: tmp, hasPopoutCard: miniProfile, hasAny: tmp };
  if (!tmp) {
    tmp = miniProfile;
  }
  return obj;
};
export const requiresPermissionReview = function requiresPermissionReview(arg0) {
  let botPermissionsChanged;
  let installScope;
  let integrationInstalled;
  let previewReady;
  ({ previewReady, integrationInstalled } = arg0);
  let tmp = !previewReady;
  ({ installScope, botPermissionsChanged } = arg0);
  if (previewReady) {
    tmp = null == integrationInstalled;
  }
  let tmp3 = !tmp;
  if (tmp3) {
    let tmp4 = botPermissionsChanged;
    if (!tmp4) {
      tmp4 = "user" !== installScope && !integrationInstalled;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
