// Module ID: 7943
// Function ID: 63230
// Name: formatSharedClientThemeData
// Dependencies: [27, 6571, 1212, 2397, 2]
// Exports: formatSharedClientThemeData

// Module 7943 (formatSharedClientThemeData)
import { Image } from "get ActivityIndicator";

const result = require("getSystemLocale").fileFinishedImporting("modules/client_themes/native/chat/formatSharedClientThemeData.tsx");

export const formatSharedClientThemeData = function formatSharedClientThemeData(message, ensureAvatarSourceResult, nick) {
  const sharedClientTheme = message.sharedClientTheme;
  if (undefined !== sharedClientTheme) {
    let obj = {};
    ({ colors: obj.colors, gradient_angle: obj.gradientAngle } = sharedClientTheme);
    obj.createdBy = nick;
    let str2 = "";
    if (undefined !== ensureAvatarSourceResult.uri) {
      str2 = ensureAvatarSourceResult.uri;
    }
    obj.createdByAvatarUrl = str2;
    obj.nitroWheelIconUrl = Image.resolveAssetSource(importDefault(6571)).uri;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.previewLabel = intl.string(require(1212) /* getSystemLocale */.t.SKNnqq);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.previewHeading = intl2.string(importDefault(2397).yl1iMm);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = { username: "__USERNAME__" };
    const _HermesInternal = HermesInternal;
    obj.createdByLabel = "" + intl3.format(importDefault(2397).fQPSEf, obj);
    return obj;
  }
};
