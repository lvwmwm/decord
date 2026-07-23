// Module ID: 13412
// Function ID: 103145
// Name: items
// Dependencies: [4114, 1443, 1212, 2]
// Exports: resolveActivityShareMessageContent

// Module 13412 (items)
const items = [require("_createForOfIteratorHelperLoose").parseQuestsEmbedCode];
const result = require("getSystemLocale").fileFinishedImporting("modules/activities/utils/activityShareLink.tsx");

export const resolveActivityShareMessageContent = function resolveActivityShareMessageContent(outer1_3, outer1_14, outer1_12) {
  const _require = false;
  const replaced = outer1_3.replaceAll(importDefault(1443).URL_REGEX, (arg0) => {
    let c0 = arg0;
    const someResult = outer1_3.some((arg0) => null != arg0(c0));
    if (someResult) {
      c0 = true;
    }
    let combined = arg0;
    if (!someResult) {
      const _HermesInternal = HermesInternal;
      combined = "`" + arg0 + "`";
    }
    return combined;
  });
  let combined = replaced;
  if (!_require) {
    const intl = _require(1212).intl;
    const obj = { applicationName: outer1_14.name, link: outer1_12 };
    let _HermesInternal = HermesInternal;
    combined = "" + replaced + "\n\n" + intl.formatToMarkdownString(_require(1212).t.dZJpdG, obj);
  }
  return combined;
};
