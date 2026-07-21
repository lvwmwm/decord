// Module ID: 3942
// Function ID: 32538
// Name: ClientThemeType
// Dependencies: []
// Exports: getProtoThemeFromBaseTheme

// Module 3942 (ClientThemeType)
let closure_3 = require(dependencyMap[0]).PROTO_THEME_MAP_WEB_REFRESH;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/client_themes/ClientThemesTypes.tsx");

export const ClientThemeType = require(dependencyMap[4]).ClientThemeType;
export const getProtoThemeFromBaseTheme = function getProtoThemeFromBaseTheme(arg0) {
  const require = arg0;
  const entries = Object.entries(closure_3);
  const found = entries.find((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return tmp === arg0;
  });
  if (undefined === found) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("No ProtoTheme found for base theme: " + arg0);
    importDefault(dependencyMap[1]).captureException(error);
    let UNSET = require(dependencyMap[2]).Theme.UNSET;
    const obj = importDefault(dependencyMap[1]);
  } else {
    const _parseInt = parseInt;
    UNSET = parseInt(found[0]);
  }
  return UNSET;
};
