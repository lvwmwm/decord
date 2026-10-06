// Module ID: 1242
// Function ID: 1243
// Name: ClientThemesTypes
// Dependencies: [1197, 1243, 1198, 2, 4688]
// Exports: getProtoThemeFromBaseTheme

// Module 1242 (ClientThemesTypes)
import ThemeConstants from "ThemeConstants" /* 1197 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1198 */;
import SentryUtilsDefault from "SentryUtils" /* 1243 */;
import design_shared from "design/shared" /* 4688 */;
import size from "module_2" /* 2 */;

let closure_3 = ThemeConstants.PROTO_THEME_MAP_WEB_REFRESH;
const result = size.fileFinishedImporting("modules/client_themes/ClientThemesTypes.tsx");

export const ClientThemeType = design_shared.ClientThemeType;
export const getProtoThemeFromBaseTheme = function getProtoThemeFromBaseTheme(arg0) {
  let UNSET;
  let closure_0 = arg0;
  const entries = Object.entries(closure_3);
  const found = entries.find((item) => {
    let tmp;
    [, tmp] = item;
    return tmp === closure_0;
  });
  if (undefined === found) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const captureException = SentryUtilsDefault.captureException;
    const self = this;
    const self2 = this;
    SentryUtilsDefault;
    const error = new Error("No ProtoTheme found for base theme: " + arg0);
    captureException(error);
    UNSET = preloaded_user_settings.Theme.UNSET;
  } else {
    const _parseInt = parseInt;
    UNSET = parseInt(found[0]);
  }
  return UNSET;
};
