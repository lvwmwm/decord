// Module ID: 14455
// Function ID: 14456
// Name: ConjureNativeLinkedText
// Dependencies: [19, 21, 14456, 14465, 5923, 2]
// Exports: conjureLinkedNodes, default

// Module 14455 (ConjureNativeLinkedText)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5923 */;
import conjureMarkup from "conjureMarkup" /* 14456 */;
import conjureLinkifyBareDomains from "conjureLinkifyBareDomains" /* 14465 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeLinkedText.tsx");

export default function ConjureNativeLinkedText(variant) {
  let color;
  let text;
  variant = variant.variant;
  ({ text, color } = variant);
  const Text = Text_Text.Text;
  const parseConjureMarkup = conjureMarkup.parseConjureMarkup;
  conjureMarkup;
  const obj2 = conjureLinkifyBareDomains;
  return <Text variant={variant} color={color}>{parseConjureMarkup(obj2.linkifyBareDomains(text), true, { allowLinks: true, linkVariant: variant })}</Text>;
};
export function conjureLinkedNodes(hint, linkVariant) {
  const parseConjureMarkup = conjureMarkup.parseConjureMarkup;
  conjureMarkup;
  const obj = conjureLinkifyBareDomains;
  const obj2 = { allowLinks: true, linkVariant };
  return parseConjureMarkup(obj.linkifyBareDomains(hint), true, obj2);
}
