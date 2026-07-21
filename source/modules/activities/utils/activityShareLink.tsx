// Module ID: 13289
// Function ID: 100934
// Name: items
// Dependencies: [871497728, 687144960, 482541568, 482410496]
// Exports: resolveActivityShareMessageContent

// Module 13289 (items)
const items = [require(dependencyMap[0]).parseQuestsEmbedCode];
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/activities/utils/activityShareLink.tsx");

export const resolveActivityShareMessageContent = function resolveActivityShareMessageContent(closure_3, closure_14, closure_12) {
  const callback = false;
  const replaced = closure_3.replaceAll(importDefault(dependencyMap[1]).URL_REGEX, (arg0) => {
    let closure_0 = arg0;
    const someResult = closure_3.some((arg0) => null != arg0(closure_0));
    if (someResult) {
      closure_0 = true;
    }
    let combined = arg0;
    if (!someResult) {
      const _HermesInternal = HermesInternal;
      combined = "`" + arg0 + "`";
    }
    return combined;
  });
  let combined = replaced;
  if (!callback) {
    const intl = callback(dependencyMap[2]).intl;
    const obj = { applicationName: closure_14.name, link: closure_12 };
    const _HermesInternal = HermesInternal;
    combined = "" + replaced + "\n\n" + intl.formatToMarkdownString(callback(dependencyMap[2]).t.dZJpdG, obj);
  }
  return combined;
};
