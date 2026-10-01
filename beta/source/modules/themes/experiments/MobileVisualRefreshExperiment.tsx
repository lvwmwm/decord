// Module ID: 11669
// Function ID: 11670
// Name: MobileVisualRefreshExperiment
// Dependencies: [1436, 2]
// Exports: default, isMobileVisualRefreshEnabled, resolveRefreshToken, useMobileVisualRefreshConfig

// Module 11669 (MobileVisualRefreshExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-02-mobile-visual-refresh", defaultConfig: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false }, variations: { 0: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false }, 1: { enabled: true, chatInputFloating: false, chatInputLegacySendButton: false }, 2: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false }, 3: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false }, 4: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
let closure_0 = tmp2;
const result = size.fileFinishedImporting("modules/themes/experiments/MobileVisualRefreshExperiment.tsx");

export default function useIsMobileVisualRefreshExperimentEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
};
export const MobileVisualRefreshExperiment = tmp2;
export const useMobileVisualRefreshConfig = function useMobileVisualRefreshConfig(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj);
};
export const isMobileVisualRefreshEnabled = function isMobileVisualRefreshEnabled(location) {
  const obj = { location };
  return closure_0.getConfig(obj).enabled;
};
export const resolveRefreshToken = function resolveRefreshToken(MESSAGES_HEADER_PADDING_BOTTOM) {
  return MESSAGES_HEADER_PADDING_BOTTOM.resolve({ enabledExperiments: ["mobile-visual-refresh"] });
};
