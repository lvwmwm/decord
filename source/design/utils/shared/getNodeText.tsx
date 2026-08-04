// Module ID: 3992
// Function ID: 3993
// Name: getNodeText
// Dependencies: [19, 2]

// Module 3992 (getNodeText)
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
