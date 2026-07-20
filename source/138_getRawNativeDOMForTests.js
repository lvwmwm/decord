// Module ID: 138
// Function ID: 2237
// Name: getRawNativeDOMForTests
// Dependencies: []
// Exports: getRawNativeDOMForTests

// Module 138 (getRawNativeDOMForTests)
let closure_3 = importAll(dependencyMap[0]).get("NativeDOMCxx");

export default {
  compareDocumentPosition(arg0, arg1) {
    return importDefault(dependencyMap[1])(closure_3).compareDocumentPosition(arg0, arg1);
  },
  getChildNodes(arg0) {
    return importDefault(dependencyMap[1])(closure_3).getChildNodes(arg0);
  },
  getParentNode(nativeNodeReference) {
    return importDefault(dependencyMap[1])(closure_3).getParentNode(nativeNodeReference);
  },
  isConnected(application_id) {
    return importDefault(dependencyMap[1])(closure_3).isConnected(application_id);
  },
  getBorderWidth(nativeElementReference) {
    return importDefault(dependencyMap[1])(closure_3).getBorderWidth(nativeElementReference);
  },
  getBoundingClientRect(arg0, arg1) {
    return importDefault(dependencyMap[1])(closure_3).getBoundingClientRect(arg0, arg1);
  },
  getInnerSize(nativeElementReference) {
    return importDefault(dependencyMap[1])(closure_3).getInnerSize(nativeElementReference);
  },
  getScrollPosition(nativeElementReference) {
    return importDefault(dependencyMap[1])(closure_3).getScrollPosition(nativeElementReference);
  },
  getScrollSize(nativeElementReference) {
    return importDefault(dependencyMap[1])(closure_3).getScrollSize(nativeElementReference);
  },
  getTagName(arg0) {
    return importDefault(dependencyMap[1])(closure_3).getTagName(arg0);
  },
  getTextContent(nativeElementReference) {
    return importDefault(dependencyMap[1])(closure_3).getTextContent(nativeElementReference);
  },
  hasPointerCapture(arg0, arg1) {
    return importDefault(dependencyMap[1])(closure_3).hasPointerCapture(arg0, arg1);
  },
  releasePointerCapture(arg0, arg1) {
    return importDefault(dependencyMap[1])(closure_3).releasePointerCapture(arg0, arg1);
  },
  setPointerCapture(arg0, arg1) {
    return importDefault(dependencyMap[1])(closure_3).setPointerCapture(arg0, arg1);
  },
  getOffset(nativeElementReference) {
    return importDefault(dependencyMap[1])(closure_3).getOffset(nativeElementReference);
  },
  linkRootNode(arg0, reactNativeDocumentElementInstanceHandle) {
    let linkRootNode;
    if (null != nativeProps) {
      linkRootNode = nativeProps.linkRootNode;
    }
    return importDefault(dependencyMap[1])(linkRootNode)(arg0, reactNativeDocumentElementInstanceHandle);
  },
  measure(arg0, arg1) {
    return importDefault(dependencyMap[1])(closure_3).measure(arg0, arg1);
  },
  measureInWindow(arg0, arg1) {
    return importDefault(dependencyMap[1])(closure_3).measureInWindow(arg0, arg1);
  },
  measureLayout(arg0, arg1, arg2, arg3) {
    return importDefault(dependencyMap[1])(closure_3).measureLayout(arg0, arg1, arg2, arg3);
  },
  setNativeProps(arg0, arg1) {
    let setNativeProps;
    if (null != nativeProps) {
      setNativeProps = nativeProps.setNativeProps;
    }
    if (null != setNativeProps) {
      return nativeProps.setNativeProps(arg0, arg1);
    } else {
      const tmp5 = importDefault(dependencyMap[1]);
      const obj = arg1(dependencyMap[2]);
      tmp5(arg1(dependencyMap[2]).getFabricUIManager()).setNativeProps(arg0, arg1);
    }
  }
};
export function getRawNativeDOMForTests() {
  return closure_3;
}
