// Module ID: 12082
// Function ID: 12083
// Name: conjurePreviewModes
// Dependencies: [1072, 10884, 6845, 12083, 5651, 1084, 6883, 2]
// Exports: permissionReviewBlocksMode, previewCapabilitiesFromSurfaces, previewModeAvailability, previewNeedsAppConsent, profileSurfaceAvailability, profileWidgetState, requiresPermissionReview, resolvePreviewMode, showsFramePreview

// Module 12082 (conjurePreviewModes)
import Constants from "Constants" /* 1072 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6883 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 10884 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = {
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
const items = [, , ];
({ GATEWAY_PRESENCE_LIMITED: arr[0], GATEWAY_GUILD_MEMBERS_LIMITED: arr[1], GATEWAY_MESSAGE_CONTENT_LIMITED: arr[2] } = Constants.ApplicationFlags);
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
      const obj = { hasFrame: obj2.declaresPreviewFrame(previewSupportedSurfaces), hasProfileWidget: widgetResolvable, hasBotDm: botDmResolvable };
      obj2 = conjurePreviewFrameSurfaces;
      if (widgetResolvable) {
        widgetResolvable = previewSupportedSurfaces.includes(tmp3(6845).ConjureSupportedSurface.PROFILE_WIDGET);
      }
      if (botDmResolvable) {
        const hasItem = previewSupportedSurfaces.includes(tmp3(6845).ConjureSupportedSurface.BOT) || previewSupportedSurfaces.includes(tmp3(6845).ConjureSupportedSurface.APPLICATION_COMMANDS);
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
  const found = prop.filter((item) => closure_3[item](installScope));
  const obj = { modes: found, defaultMode: first, showModeSwitch: found.length > 1, profileState: str };
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
  const obj = { hasMainCard: tmp, hasPopoutCard: miniProfile, hasAny: tmp };
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
export function previewNeedsAppConsent(data) {
  _require = data;
  if (null == data) {
    return false;
  } else {
    const integrationTypesConfig = data.integrationTypesConfig;
    let permissions;
    if (integrationTypesConfig != null) {
      const tmp3 = integrationTypesConfig[require("ApplicationIntegrationType").ApplicationIntegrationType.GUILD_INSTALL];
      if (tmp3 != null) {
        const oauth2InstallParams = tmp3.oauth2InstallParams;
        if (oauth2InstallParams != null) {
          permissions = oauth2InstallParams.permissions;
        }
      }
    }
    if (permissions == null) {
      const installParams = data.installParams;
      let permissions1;
      if (installParams != null) {
        permissions1 = installParams.permissions;
      }
      permissions = permissions1;
    }
    let someResult = null != permissions;
    if (someResult) {
      const equals = BigFlagUtilsAll.equals;
      BigFlagUtilsAll;
      const deserializer = BigFlagUtilsAll;
      const deserializeResult = deserializer.deserialize(permissions);
      someResult = !equals(deserializeResult, BigFlagUtilsAll.EMPTY_FLAG);
    }
    if (!someResult) {
      someResult = items.some((item) => {
        const obj = ApplicationFlagUtils;
        return obj.hasApplicationFlag(data, item);
      });
    }
    return someResult;
  }
}
export function permissionReviewBlocksMode(activeMode, result, arg2, tmpResult31) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = tmpResult31;
  if (tmpResult31 === undefined) {
    flag2 = false;
  }
  let tmp = result;
  if (tmp) {
    let tmp2 = flag2;
    if (!tmp2) {
      let tmp4 = "bot" === activeMode;
      if (!tmp4) {
        if (flag) {
          flag = "frame" === activeMode;
        }
        tmp4 = flag;
      }
      tmp2 = tmp4;
    }
    tmp = tmp2;
  }
  return tmp;
}
