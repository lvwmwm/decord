// Module ID: 15549
// Function ID: 15550
// Name: activityShareLink
// Dependencies: [5661, 1386, 1128, 2]
// Exports: resolveActivityShareMessageContent

// Module 15549 (activityShareLink)
import URLUtilsDefault from "URLUtils" /* 1386 */;
import findCodedLinks from "findCodedLinks" /* 5661 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0;

const items = [findCodedLinks.parseQuestsEmbedCode];
const result = size.fileFinishedImporting("modules/activities/utils/activityShareLink.tsx");

export const resolveActivityShareMessageContent = function resolveActivityShareMessageContent(c3, name, link) {
  _require = false;
  const replaced = c3.replaceAll(URLUtilsDefault.URL_REGEX, (arg0) => {
    let closure_0 = arg0;
    const someResult = items.some((fn) => null != fn(closure_0));
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
    const intl = require("intl").intl;
    let _HermesInternal = HermesInternal;
    const obj = { applicationName: name.name, link };
    combined = "" + replaced + "\n\n" + intl.formatToMarkdownString(require("intl").t.dZJpdG, obj);
  }
  return combined;
};
