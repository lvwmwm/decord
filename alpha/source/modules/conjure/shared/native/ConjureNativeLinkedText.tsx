// Module ID: 11763
// Function ID: 11764
// Name: ConjureNativeLinkedText
// Dependencies: [19, 21, 558, 576, 11764, 11773, 5220, 2]

// Module 11763 (ConjureNativeLinkedText)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 5220 */;
import conjureMarkup from "conjureMarkup" /* 11764 */;
import conjureLinkifyBareDomains from "conjureLinkifyBareDomains" /* 11773 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeLinkedText(arg0) {
  let color;
  let text;
  let tmp4;
  let variant;
  const obj = react2;
  const cResult = obj.c(6);
  ({ text, variant, color } = arg0);
  if (cResult[0] !== text) {
    const parseConjureMarkup = conjureMarkup.parseConjureMarkup;
    conjureMarkup;
    const tmpResult2 = conjureLinkifyBareDomains;
    const parseConjureMarkupResult = parseConjureMarkup(tmpResult2.linkifyBareDomains(text), true, { allowLinks: true });
    cResult[0] = text;
    cResult[1] = parseConjureMarkupResult;
    tmp4 = parseConjureMarkupResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === color) {
    if (cResult[3] === tmp4) {
      let tmp7;
      if (cResult[4] === variant) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(Text_Text.Text, { variant, color, children: tmp4 });
  cResult[2] = color;
  cResult[3] = tmp4;
  cResult[4] = variant;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : (function ConjureNativeLinkedText(arg0) {
  let color;
  let text;
  let variant;
  ({ text, variant, color } = arg0);
  const Text = Text_Text.Text;
  const parseConjureMarkup = conjureMarkup.parseConjureMarkup;
  conjureMarkup;
  const obj2 = conjureLinkifyBareDomains;
  return <Text variant={variant} color={color}>{parseConjureMarkup(obj2.linkifyBareDomains(text), true, { allowLinks: true })}</Text>;
});
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeLinkedText.tsx");

export default tmp3;
