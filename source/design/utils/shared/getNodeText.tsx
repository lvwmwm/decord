// Module ID: 4068
// Function ID: 4069
// Name: getNodeText
// Dependencies: [19, 2]

// Module 4068 (getNodeText)
import noop from "noop";

const result = require("set").fileFinishedImporting("design/utils/shared/getNodeText.tsx");
function getNodeText(children) {
  let mapped = children;
  let tmp = children;
  if (typeof children !== "string") {
    tmp = mapped;
    if (typeof mapped !== "number") {
      const _Array = Array;
      if (mapped instanceof Array) {
        mapped = mapped.map(getNodeText);
        let joined = mapped.join("");
      } else if (validElement.isValidElement(mapped)) {
        joined = getNodeText(mapped.props.children);
      }
    }
  }
  return tmp;
}

export { getNodeText };
