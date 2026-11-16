// Module ID: 15537
// Function ID: 15538
// Name: formatSharedClientThemeData
// Dependencies: [17, 9291, 1113, 2933, 2]
// Exports: formatSharedClientThemeData

// Module 15537 (formatSharedClientThemeData)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1113 */;
import _modDef2933 from "module_2933" /* 2933 */;
import AssetRegistryDefault from "AssetRegistry" /* 9291 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const result = size.fileFinishedImporting("modules/client_themes/native/chat/formatSharedClientThemeData.tsx");

export function formatSharedClientThemeData(message, ensureAvatarSourceResult, nick) {
  let intl;
  let intl2;
  let intl3;
  let str2;
  const sharedClientTheme = message.sharedClientTheme;
  if (undefined !== sharedClientTheme) {
    const obj = { colors: null, gradientAngle: null, createdBy: nick, createdByAvatarUrl: str2, nitroWheelIconUrl: Image.resolveAssetSource(AssetRegistryDefault).uri, previewLabel: intl.string(intl4.t.SKNnqq), previewHeading: intl2.string(_modDef2933.yl1iMm), createdByLabel: "" + intl3.format(_modDef2933.fQPSEf, { username: "__USERNAME__" }) };
    ({ colors: obj.colors, gradient_angle: obj.gradientAngle } = sharedClientTheme);
    str2 = "";
    if (undefined !== ensureAvatarSourceResult.uri) {
      str2 = ensureAvatarSourceResult.uri;
    }
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    const _HermesInternal = HermesInternal;
    return obj;
  }
}
