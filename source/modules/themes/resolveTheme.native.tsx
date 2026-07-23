// Module ID: 1321
// Function ID: 15514
// Name: resolveTheme
// Dependencies: [1322, 1279, 1280, 1316, 1281, 1328, 1282, 1324, 2]
// Exports: default

// Module 1321 (resolveTheme)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import SystemThemeState from "SystemThemeState";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ PROTO_THEME_MAP_MOBILE: closure_6, PROTO_THEME_MAP_MOBILE_REFRESH: closure_7, SystemTheme: closure_8, SystemThemeState: closure_9 } = SystemThemeState);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

export default function resolveTheme(arg0, arg1) {
  previewTheme = previewTheme.getPreviewTheme();
  if (undefined !== previewTheme) {
    return previewTheme.baseTheme;
  } else {
    if (!obj2.isAuthenticated()) {
      if (arg0 !== constants.NO_PREFERENCE) {
        return arg1[arg0];
      }
    }
    appearanceSettings = appearanceSettings.getAppearanceSettings();
    let theme;
    if (null != appearanceSettings) {
      theme = appearanceSettings.theme;
    }
    if (null != theme) {
      return theme;
    } else {
      const appearance = settings.settings.appearance;
      let theme1;
      if (null != appearance) {
        theme1 = appearance.theme;
      }
      if (null == theme1) {
        theme1 = require(1282) /* _callSuper */.Theme.UNSET;
      }
      if (theme1 === require(1282) /* _callSuper */.Theme.UNSET) {
        if (arg0 !== constants.NO_PREFERENCE) {
          let tmp16 = arg1[arg0];
        }
        return tmp16;
      }
      tmp16 = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */.isMobileVisualRefreshEnabled("resolveTheme") ? closure_7 : closure_6[theme1];
      const obj = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
    }
    obj2 = require(1328) /* getToken */;
  }
};
