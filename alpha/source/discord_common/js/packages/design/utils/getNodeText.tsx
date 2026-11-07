// Module ID: 5202
// Function ID: 5203
// Name: react
// Dependencies: [19, 2]

// Module 5202 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/getNodeText.tsx");
function getNodeText(children) {
  if (typeof children !== "string") {
    let joined;
    if (typeof children !== "number") {
      const _Array = Array;
      if (children instanceof Array) {
        const mapped = children.map(getNodeText);
        joined = mapped.join("");
      } else if (react.isValidElement(children)) {
        joined = getNodeText(children.props.children);
      }
    }
    return joined;
  }
  joined = children.toString();
}

export { getNodeText };
