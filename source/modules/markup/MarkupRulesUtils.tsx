// Module ID: 10001
// Function ID: 77191
// Name: smartOutput
// Dependencies: [2]
// Exports: isStaticRouteIconType, smartOutput

// Module 10001 (smartOutput)
const result = require("set").fileFinishedImporting("modules/markup/MarkupRulesUtils.tsx");

export const smartOutput = function smartOutput(node, output, state) {
  if ("string" !== typeof node.content) {
    if (undefined !== node.content) {
      let content = output(node.content, state);
    }
    return content;
  }
  content = node.content;
};
export function isStaticRouteIconType(channelId) {
  let tmp = "home" === channelId;
  if (!tmp) {
    tmp = "browse" === channelId;
  }
  if (!tmp) {
    tmp = "customize" === channelId;
  }
  if (!tmp) {
    tmp = "guide" === channelId;
  }
  if (!tmp) {
    tmp = "linked-roles" === channelId;
  }
  return tmp;
}
