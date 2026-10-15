// Module ID: 4878
// Function ID: 4879
// Name: react
// Dependencies: [19, 2]

// Module 4878 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/getNodeText.tsx");
function getNodeText(label) {
  if (typeof label !== "string") {
    let joined;
    if (typeof label !== "number") {
      const _Array = Array;
      if (label instanceof Array) {
        const mapped = label.map(getNodeText);
        joined = mapped.join("");
      } else if (react.isValidElement(label)) {
        joined = getNodeText(label.props.children);
      }
    }
    return joined;
  }
  joined = label.toString();
}

export { getNodeText };
