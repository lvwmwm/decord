// Module ID: 13596
// Function ID: 103042
// Name: useSensitiveMediaSettingDisabled
// Dependencies: []
// Exports: useSensitiveMediaSettingDisabled

// Module 13596 (useSensitiveMediaSettingDisabled)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return require(dependencyMap[0]).useIsParentallyControlled();
};
