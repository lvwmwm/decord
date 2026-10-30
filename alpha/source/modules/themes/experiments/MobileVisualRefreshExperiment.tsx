// Module ID: 12344
// Function ID: 12345
// Name: MobileVisualRefreshExperiment
// Dependencies: [1449, 2]
// Exports: default, isMobileVisualRefreshEnabled, resolveRefreshToken, useMobileVisualRefreshConfig

// Module 12344 (MobileVisualRefreshExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1449 */;
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
export function useMobileVisualRefreshConfig(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj);
}
export function isMobileVisualRefreshEnabled(location) {
  const obj = { location };
  return closure_0.getConfig(obj).enabled;
}
export function resolveRefreshToken(MESSAGES_HEADER_PADDING_BOTTOM) {
  return MESSAGES_HEADER_PADDING_BOTTOM.resolve({ enabledExperiments: ["mobile-visual-refresh"] });
}
