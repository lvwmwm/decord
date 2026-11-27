// Module ID: 18533
// Function ID: 18534
// Name: ConjureNativeLinkedText
// Dependencies: [19, 21, 18534, 18543, 18544, 5634, 2]
// Exports: conjureLinkedNodes, default

// Module 18533 (ConjureNativeLinkedText)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5634 */;
import conjureMarkup from "conjureMarkup" /* 18534 */;
import conjureLinkifyBareDomains from "conjureLinkifyBareDomains" /* 18543 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const conjureShortLinks = tmp(18544);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeLinkedText.tsx");

export default function ConjureNativeLinkedText(color) {
  let linkifyBareDomains;
  let parseConjureMarkup;
  let shortLinks;
  let shortenConjureLinksResult;
  let text;
  let variant;
  ({ text, variant, shortLinks } = color);
  color = color.color;
  if (shortLinks === undefined) {
    shortLinks = false;
  }
  const obj = { variant, color, children: parseConjureMarkup(linkifyBareDomains(shortenConjureLinksResult), true, { allowLinks: true, linkVariant: variant }) };
  const Text = Text_Text.Text;
  const tmp = jsx;
  if (shortLinks === undefined) {
    shortLinks = false;
  }
  parseConjureMarkup = conjureMarkup.parseConjureMarkup;
  conjureMarkup;
  shortenConjureLinksResult = text;
  linkifyBareDomains = conjureLinkifyBareDomains.linkifyBareDomains;
  conjureLinkifyBareDomains;
  if (shortLinks) {
    const tmp2Result4 = conjureShortLinks;
    shortenConjureLinksResult = tmp2Result4.shortenConjureLinks(text);
  }
  return tmp(Text, obj);
};
export function conjureLinkedNodes(hint, linkVariant, shortLinks) {
  let flag = shortLinks;
  if (shortLinks === undefined) {
    flag = false;
  }
  const parseConjureMarkup = conjureMarkup.parseConjureMarkup;
  conjureMarkup;
  let shortenConjureLinksResult = hint;
  const linkifyBareDomains = conjureLinkifyBareDomains.linkifyBareDomains;
  conjureLinkifyBareDomains;
  if (flag) {
    const tmpResult = conjureShortLinks;
    shortenConjureLinksResult = tmpResult.shortenConjureLinks(hint);
  }
  const obj = { allowLinks: true, linkVariant };
  return parseConjureMarkup(linkifyBareDomains(shortenConjureLinksResult), true, obj);
}
