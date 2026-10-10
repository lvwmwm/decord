// Module ID: 17079
// Function ID: 17080
// Name: conjurePreviewModes
// Dependencies: [11416, 6946, 17080, 2]
// Exports: permissionReviewBlocksMode, previewCapabilitiesFromSurfaces, previewModeAvailability, profileSurfaceAvailability, profileWidgetState, requiresPermissionReview, resolvePreviewMode, showsFramePreview

// Module 17079 (conjurePreviewModes)
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 11416 */;
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
  overlay(hasOverlay) {
    return true === hasOverlay.hasOverlay;
  },
  bot(hasBotDm) {
    return true === hasBotDm.hasBotDm;
  }
};
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewModes.tsx");

export const previewCapabilitiesFromSurfaces = function previewCapabilitiesFromSurfaces(previewSupportedSurfaces, arg1) {
  let botDmResolvable;
  let legacy;
  let obj2;
  let widgetResolvable;
  ({ legacy, widgetResolvable, botDmResolvable } = arg1);
  let tmp = legacy;
  if (null != previewSupportedSurfaces) {
    tmp = legacy;
    if (0 !== previewSupportedSurfaces.length) {
      obj = { hasFrame: obj2.declaresPreviewFrame(previewSupportedSurfaces), hasProfileWidget: widgetResolvable, hasBotDm: botDmResolvable };
      obj2 = conjurePreviewFrameSurfaces;
      if (widgetResolvable) {
        widgetResolvable = previewSupportedSurfaces.includes(tmp3(6946).ConjureSupportedSurface.PROFILE_WIDGET);
      }
      if (botDmResolvable) {
        const hasItem = previewSupportedSurfaces.includes(tmp3(6946).ConjureSupportedSurface.BOT) || previewSupportedSurfaces.includes(tmp3(6946).ConjureSupportedSurface.APPLICATION_COMMANDS);
        botDmResolvable = hasItem;
      }
      tmp = obj;
    }
  }
  return tmp;
};
export const previewModeAvailability = function previewModeAvailability(installScope) {
  let first;
  let str;
  _require = installScope;
  const prop = require("ConjurePreviewMode").CONJURE_PREVIEW_MODE_ORDER;
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
export const resolvePreviewMode = function resolvePreviewMode(arg0, result2) {
  let defaultMode = arg0;
  if (null == arg0) {
    defaultMode = result2.defaultMode;
  } else {
    const modes = result2.modes;
  }
  return defaultMode;
};
export const showsFramePreview = function showsFramePreview(modes, arg1) {
  let hasItem = "frame" === arg1;
  if (hasItem) {
    modes = modes.modes;
    hasItem = modes.includes("frame");
  }
  if (!hasItem) {
    hasItem = 0 === modes.modes.length;
  }
  return hasItem;
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
export function permissionReviewBlocksMode(activeMode, result) {
  return result && "bot" === activeMode;
}
