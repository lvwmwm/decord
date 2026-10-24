// Module ID: 11820
// Function ID: 11821
// Name: ConjureNativeLinkedText
// Dependencies: [19, 21, 11821, 11830, 558, 576, 5234, 2]
// Exports: conjureLinkedNodes

// Module 11820 (ConjureNativeLinkedText)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 5234 */;
import conjureMarkup from "conjureMarkup" /* 11821 */;
import conjureLinkifyBareDomains from "conjureLinkifyBareDomains" /* 11830 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
function conjureLinkedNodes(hint, linkVariant) {
  const parseConjureMarkup = conjureMarkup.parseConjureMarkup;
  conjureMarkup;
  const obj = conjureLinkifyBareDomains;
  const obj2 = { allowLinks: true, linkVariant };
  return parseConjureMarkup(obj.linkifyBareDomains(hint), true, obj2);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeLinkedText(arg0) {
  let color;
  let text;
  let variant;
  const obj = react2;
  const cResult = obj.c(7);
  ({ text, variant, color } = arg0);
  if (cResult[0] === text) {
    let tmp4;
    if (cResult[1] === variant) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === color) {
      if (cResult[4] === tmp4) {
        let tmp7;
        if (cResult[5] === variant) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const tmp9 = jsx(Text_Text.Text, { variant, color, children: tmp4 });
    cResult[3] = color;
    cResult[4] = tmp4;
    cResult[5] = variant;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const parseConjureMarkup = conjureMarkup.parseConjureMarkup;
  conjureMarkup;
  const tmpResult2 = conjureLinkifyBareDomains;
  const parseConjureMarkupResult = parseConjureMarkup(tmpResult2.linkifyBareDomains(text), true, { allowLinks: true, linkVariant: variant });
  cResult[0] = text;
  cResult[1] = variant;
  cResult[2] = parseConjureMarkupResult;
  tmp4 = parseConjureMarkupResult;
}) : (function ConjureNativeLinkedText(variant) {
  let color;
  let text;
  variant = variant.variant;
  ({ text, color } = variant);
  const Text = Text_Text.Text;
  const parseConjureMarkup = conjureMarkup.parseConjureMarkup;
  conjureMarkup;
  const obj2 = conjureLinkifyBareDomains;
  return <Text variant={variant} color={color}>{parseConjureMarkup(obj2.linkifyBareDomains(text), true, { allowLinks: true, linkVariant: variant })}</Text>;
});
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeLinkedText.tsx");

export default tmp3;
export { conjureLinkedNodes };
