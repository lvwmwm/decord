// Module ID: 12219
// Function ID: 12220
// Name: conjurePreviewModes
// Dependencies: [11014, 6965, 12220, 2]
// Exports: previewBotInstallBlocksMode, previewCapabilitiesFromSurfaces, previewModeAvailability, profileSurfaceAvailability, profileWidgetState, requiresPermissionReview, resolvePreviewMode, showsFramePreview

// Module 12219 (conjurePreviewModes)
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 11014 */;
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

export function previewCapabilitiesFromSurfaces(previewSupportedSurfaces, arg1) {
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
        widgetResolvable = previewSupportedSurfaces.includes(tmp3(6965).ConjureSupportedSurface.PROFILE_WIDGET);
      }
      if (botDmResolvable) {
        const hasItem = previewSupportedSurfaces.includes(tmp3(6965).ConjureSupportedSurface.BOT) || previewSupportedSurfaces.includes(tmp3(6965).ConjureSupportedSurface.APPLICATION_COMMANDS);
        botDmResolvable = hasItem;
      }
      tmp = obj;
    }
  }
  return tmp;
}
export function previewModeAvailability(installScope) {
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
}
export function profileWidgetState(installScope) {
  let str = "available";
  if ("user" === installScope.installScope) {
    str = "available";
    if (true === tmp) {
      str = "unavailable-authorization-revoked";
    }
  }
  return str;
}
export function resolvePreviewMode(arg0, result2) {
  let defaultMode = arg0;
  if (null == arg0) {
    defaultMode = result2.defaultMode;
  } else {
    const modes = result2.modes;
  }
  return defaultMode;
}
export function showsFramePreview(modes, arg1) {
  let hasItem = "frame" === arg1;
  if (hasItem) {
    modes = modes.modes;
    hasItem = modes.includes("frame");
  }
  if (!hasItem) {
    hasItem = 0 === modes.modes.length;
  }
  return hasItem;
}
export function profileSurfaceAvailability(widgetTop) {
  let tmp = widgetTop.widgetTop && widgetTop.widgetBottom;
  const miniProfile = widgetTop.miniProfile;
  obj = { hasMainCard: tmp, hasPopoutCard: miniProfile, hasAny: tmp };
  if (!tmp) {
    tmp = miniProfile;
  }
  return obj;
}
export function requiresPermissionReview(arg0) {
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
}
export function previewBotInstallBlocksMode(activeMode, arg1) {
  let botPermissionsChanged;
  let installScope;
  let integrationInstalled;
  let previewReady;
  let tmp = "bot" === activeMode;
  if (tmp) {
    obj = { botPermissionsChanged: false };
    const merged = Object.assign(arg1);
    ({ previewReady, integrationInstalled } = obj);
    let tmp5 = !previewReady;
    ({ installScope, botPermissionsChanged } = obj);
    if (previewReady) {
      tmp5 = null == integrationInstalled;
    }
    let tmp7 = !tmp5;
    if (tmp7) {
      let tmp8 = botPermissionsChanged;
      if (!tmp8) {
        tmp8 = "user" !== installScope && !integrationInstalled;
      }
      tmp7 = tmp8;
    }
    tmp = tmp7;
  }
  return tmp;
}
