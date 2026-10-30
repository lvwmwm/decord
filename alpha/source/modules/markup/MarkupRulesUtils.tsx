// Module ID: 8563
// Function ID: 8564
// Name: MarkupRulesUtils
// Dependencies: [2]
// Exports: isStaticRouteIconType, smartOutput

// Module 8563 (MarkupRulesUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/MarkupRulesUtils.tsx");

export function smartOutput(node, output, state) {
  if (typeof node.content !== "string") {
    let content;
    if (undefined !== node.content) {
      content = output(node.content, state);
    }
    return content;
  }
  content = node.content;
}
export function isStaticRouteIconType(channelId) {
  return "home" === channelId || "browse" === channelId || "customize" === channelId || "guide" === channelId || "linked-roles" === channelId;
}
export const ANSI_CONTROL_SEQUENCE_RE_GLOBAL = /\x1B\[(\d+(?:[:;]\d+)*)m/g;
