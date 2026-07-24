// Module ID: 3837
// Function ID: 32002
// Name: getNodeText
// Dependencies: [31, 2]

// Module 3837 (getNodeText)
import result from "result";

const result = require("set").fileFinishedImporting("design/utils/shared/getNodeText.tsx");
function getNodeText(children) {
  let mapped = children;
  let tmp2 = children;
  if ("string" !== typeof children) {
    tmp2 = mapped;
    if ("number" !== tmp) {
      const _Array = Array;
      if (mapped instanceof Array) {
        mapped = mapped.map(getNodeText);
        let joined = mapped.join("");
      } else if (validElement.isValidElement(mapped)) {
        joined = getNodeText(mapped.props.children);
      }
    }
  }
  return tmp2;
}

export { getNodeText };
