// Module ID: 7902
// Function ID: 62901
// Name: formatSharedClientThemeData
// Dependencies: []
// Exports: formatSharedClientThemeData

// Module 7902 (formatSharedClientThemeData)
const Image = require(dependencyMap[0]).Image;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/client_themes/native/chat/formatSharedClientThemeData.tsx");

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
    obj.nitroWheelIconUrl = Image.resolveAssetSource(importDefault(dependencyMap[1])).uri;
    const intl = require(dependencyMap[2]).intl;
    obj.previewLabel = intl.string(require(dependencyMap[2]).t.SKNnqq);
    const intl2 = require(dependencyMap[2]).intl;
    obj.previewHeading = intl2.string(importDefault(dependencyMap[3]).yl1iMm);
    const intl3 = require(dependencyMap[2]).intl;
    obj = { username: "__USERNAME__" };
    const _HermesInternal = HermesInternal;
    obj.createdByLabel = "" + intl3.format(importDefault(dependencyMap[3]).fQPSEf, obj);
    return obj;
  }
};
