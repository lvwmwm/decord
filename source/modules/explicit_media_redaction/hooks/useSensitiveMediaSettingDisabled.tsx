// Module ID: 13605
// Function ID: 103087
// Name: useSensitiveMediaSettingDisabled
// Dependencies: []
// Exports: useSensitiveMediaSettingDisabled

// Module 13605 (useSensitiveMediaSettingDisabled)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(dependencyMap[0]).useIsParentallyControlled();
};
