// Module ID: 17273
// Function ID: 17274
// Name: passthrough
// Dependencies: [2]
// Exports: useEnableMFAHook

// Module 17273 (passthrough)
import set from "set" /* 2 */;

function passthrough(arg0) {
  return arg0;
}
const result = set.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useEnableMFAHook.native.tsx");

export function useEnableMFAHook(arg0) {
  return passthrough;
}
