// Module ID: 14265
// Function ID: 14266
// Name: formatSharedClientThemeData
// Dependencies: [17, 8350, 1128, 2821, 2]
// Exports: formatSharedClientThemeData

// Module 14265 (formatSharedClientThemeData)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1128 */;
import _modDef2821 from "module_2821" /* 2821 */;
import AssetRegistryDefault from "AssetRegistry" /* 8350 */;
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
    const obj = { colors: null, gradientAngle: null, createdBy: nick, createdByAvatarUrl: str2, nitroWheelIconUrl: Image.resolveAssetSource(AssetRegistryDefault).uri, previewLabel: intl.string(intl4.t.SKNnqq), previewHeading: intl2.string(_modDef2821.yl1iMm), createdByLabel: "" + intl3.format(_modDef2821.fQPSEf, { username: "__USERNAME__" }) };
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
