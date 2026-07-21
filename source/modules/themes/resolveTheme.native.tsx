// Module ID: 1321
// Function ID: 15513
// Name: resolveTheme
// Dependencies: []
// Exports: default

// Module 1321 (resolveTheme)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ PROTO_THEME_MAP_MOBILE: closure_6, PROTO_THEME_MAP_MOBILE_REFRESH: closure_7, SystemTheme: closure_8, SystemThemeState: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

export default function resolveTheme(arg0, arg1) {
  const previewTheme = previewTheme.getPreviewTheme();
  if (undefined !== previewTheme) {
    return previewTheme.baseTheme;
  } else {
    if (!obj2.isAuthenticated()) {
      if (arg0 !== constants.NO_PREFERENCE) {
        return arg1[arg0];
      }
    }
    const appearanceSettings = appearanceSettings.getAppearanceSettings();
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
        theme1 = arg1(dependencyMap[6]).Theme.UNSET;
      }
      if (theme1 === arg1(dependencyMap[6]).Theme.UNSET) {
        if (arg0 !== constants.NO_PREFERENCE) {
          let tmp16 = arg1[arg0];
        }
        return tmp16;
      }
      tmp16 = arg1(dependencyMap[7]).isMobileVisualRefreshEnabled("resolveTheme") ? closure_7 : closure_6[theme1];
      const obj = arg1(dependencyMap[7]);
    }
    const obj2 = arg1(dependencyMap[5]);
  }
};
