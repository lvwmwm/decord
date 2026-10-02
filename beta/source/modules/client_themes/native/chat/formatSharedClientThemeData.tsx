// Module ID: 12756
// Function ID: 12757
// Name: formatSharedClientThemeData
// Dependencies: [17, 7499, 1127, 2720, 2]
// Exports: formatSharedClientThemeData

// Module 12756 (formatSharedClientThemeData)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1127 */;
import _modDef2720 from "module_2720" /* 2720 */;
import AssetRegistryDefault from "AssetRegistry" /* 7499 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const result = size.fileFinishedImporting("modules/client_themes/native/chat/formatSharedClientThemeData.tsx");

export const formatSharedClientThemeData = function formatSharedClientThemeData(message, ensureAvatarSourceResult, nick) {
  let intl;
  let intl2;
  let intl3;
  let str2;
  const sharedClientTheme = message.sharedClientTheme;
  if (undefined !== sharedClientTheme) {
    const obj = { colors: null, gradientAngle: null, createdBy: nick, createdByAvatarUrl: str2, nitroWheelIconUrl: Image.resolveAssetSource(AssetRegistryDefault).uri, previewLabel: intl.string(intl4.t.SKNnqq), previewHeading: intl2.string(_modDef2720.yl1iMm), createdByLabel: "" + intl3.format(_modDef2720.fQPSEf, { username: "__USERNAME__" }) };
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
};
