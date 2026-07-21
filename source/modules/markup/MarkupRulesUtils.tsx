// Module ID: 9960
// Function ID: 76933
// Name: smartOutput
// Dependencies: [284214097]
// Exports: isStaticRouteIconType, smartOutput

// Module 9960 (smartOutput)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/markup/MarkupRulesUtils.tsx");

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
