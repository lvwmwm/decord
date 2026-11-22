// Module ID: 13114
// Function ID: 13115
// Name: MobileMarkdownFormatMenuExperiment
// Dependencies: [1450, 2]
// Exports: useIsMobileMarkdownFormatMenuEnabled

// Module 13114 (MobileMarkdownFormatMenuExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-mobile-markdown-format-menu", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/chat_input/experiments/MobileMarkdownFormatMenuExperiment.tsx");

export function useIsMobileMarkdownFormatMenuEnabled(ChatInputNativeComponent) {
  const obj = { location: ChatInputNativeComponent };
  return closure_0.useConfig(obj).enabled;
}
