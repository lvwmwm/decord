// Module ID: 3835
// Function ID: 31994
// Name: getNodeText
// Dependencies: []

// Module 3835 (getNodeText)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("design/utils/shared/getNodeText.tsx");
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
