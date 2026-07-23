// Module ID: 134
// Function ID: 2191
// Name: getChildNodes
// Dependencies: [57, 6, 7, 135, 133, 138, 129, 139]

// Module 134 (getChildNodes)
import _slicedToArray from "_slicedToArray";
import closure_5 from "setPlatformObject";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import setPlatformObject from "setPlatformObject";

const require = arg1;
function getChildNodes(arg0) {
  const nativeNodeReference = require(135) /* getRendererProxy */.getNativeNodeReference(arg0);
  if (null == nativeNodeReference) {
    let items = [];
  } else {
    const childNodes = importDefault(138).getChildNodes(nativeNodeReference);
    const mapped = childNodes.map((parentNode) => outer1_0(outer1_2[3]).getPublicInstanceFromInstanceHandle(parentNode));
    const _Boolean = Boolean;
    items = mapped.filter(Boolean);
    const obj2 = importDefault(138);
  }
  return items;
}
function getNodeSiblingsAndPosition(parentNode) {
  parentNode = parentNode.parentNode;
  if (null == parentNode) {
    const items = [parentNode];
    const items1 = [items, 0];
    return items1;
  } else {
    const arr = getChildNodes(parentNode);
    const index = arr.indexOf(parentNode);
    if (-1 === index) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Missing node in parent's child node list");
      throw typeError;
    } else {
      const items2 = [arr, index];
      return items2;
    }
  }
}
const tmp2 = (() => {
  class ReadOnlyNode {
    constructor(arg0, arg1) {
      tmp = outer1_5(this, ReadOnlyNode);
      obj = ReadOnlyNode(outer1_2[3]);
      setOwnerDocumentResult = obj.setOwnerDocument(this, arg1);
      obj2 = ReadOnlyNode(outer1_2[3]);
      setInstanceHandleResult = obj2.setInstanceHandle(this, arg0);
      return;
    }
  }
  let obj = {
    key: "childNodes",
    get() {
      const tmp = outer1_7(this);
      return ReadOnlyNode(outer1_2[4]).createNodeList(tmp);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "firstChild",
    get() {
      const arr = outer1_7(this);
      let first = null;
      if (0 !== arr.length) {
        first = arr[0];
      }
      return first;
    }
  };
  items[1] = obj;
  obj = {
    key: "isConnected",
    get() {
      const nativeNodeReference = ReadOnlyNode(outer1_2[3]).getNativeNodeReference(this);
      let isConnectedResult = null != nativeNodeReference;
      if (isConnectedResult) {
        isConnectedResult = outer1_1(outer1_2[5]).isConnected(nativeNodeReference);
        const obj2 = outer1_1(outer1_2[5]);
      }
      return isConnectedResult;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lastChild",
    get() {
      const arr = outer1_7(this);
      let tmp = null;
      if (0 !== arr.length) {
        tmp = arr[arr.length - 1];
      }
      return tmp;
    }
  };
  items[4] = {
    key: "nextSibling",
    get() {
      const tmp = outer1_4(outer1_8(this), 2);
      const first = tmp[0];
      let tmp3 = null;
      if (tmp[1] !== first.length - 1) {
        tmp3 = first[tmp2 + 1];
      }
      return tmp3;
    }
  };
  items[5] = {
    key: "nodeName",
    get() {
      const typeError = new TypeError("`nodeName` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  };
  items[6] = {
    key: "nodeType",
    get() {
      const typeError = new TypeError("`nodeType` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  };
  items[7] = {
    key: "nodeValue",
    get() {
      const typeError = new TypeError("`nodeValue` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  };
  items[8] = {
    key: "ownerDocument",
    get() {
      return ReadOnlyNode(outer1_2[3]).getOwnerDocument(this);
    }
  };
  items[9] = {
    key: "parentElement",
    get() {
      const parentNode = this.parentNode;
      if (null == outer1_3) {
        outer1_3 = ReadOnlyNode(outer1_2[7]).default;
      }
      let tmp3 = null;
      if (parentNode instanceof outer1_3) {
        tmp3 = parentNode;
      }
      return tmp3;
    }
  };
  items[10] = {
    key: "parentNode",
    get() {
      const nativeNodeReference = ReadOnlyNode(outer1_2[3]).getNativeNodeReference(this);
      if (null == nativeNodeReference) {
        return null;
      } else {
        const parentNode = outer1_1(outer1_2[5]).getParentNode(nativeNodeReference);
        let tmp5 = null;
        if (null != parentNode) {
          const publicInstanceFromInstanceHandle = ReadOnlyNode(outer1_2[3]).getPublicInstanceFromInstanceHandle(parentNode);
          let tmp9 = null;
          if (null != publicInstanceFromInstanceHandle) {
            tmp9 = publicInstanceFromInstanceHandle;
          }
          tmp5 = tmp9;
          const obj3 = ReadOnlyNode(outer1_2[3]);
        }
        return tmp5;
      }
      const obj = ReadOnlyNode(outer1_2[3]);
    }
  };
  items[11] = {
    key: "previousSibling",
    get() {
      const tmp3 = outer1_4(outer1_8(this), 2)[1];
      let tmp4 = null;
      if (0 !== tmp3) {
        tmp4 = tmp2[tmp3 - 1];
      }
      return tmp4;
    }
  };
  items[12] = {
    key: "textContent",
    get() {
      const typeError = new TypeError("`textContent` is abstract and must be implemented in a subclass of `ReadOnlyNode`");
      throw typeError;
    }
  };
  items[13] = {
    key: "compareDocumentPosition",
    value: function compareDocumentPosition(arg0) {
      if (arg0 === this) {
        return 0;
      } else {
        const nativeNodeReference = ReadOnlyNode(outer1_2[3]).getNativeNodeReference(tmp);
        const obj = ReadOnlyNode(outer1_2[3]);
        const nativeNodeReference1 = ReadOnlyNode(outer1_2[3]).getNativeNodeReference(arg0);
        if (null != nativeNodeReference) {
          if (null != nativeNodeReference1) {
            let DOCUMENT_POSITION_DISCONNECTED = outer1_1(outer1_2[5]).compareDocumentPosition(nativeNodeReference, nativeNodeReference1);
            const obj3 = outer1_1(outer1_2[5]);
          }
          return DOCUMENT_POSITION_DISCONNECTED;
        }
        DOCUMENT_POSITION_DISCONNECTED = ReadOnlyNode.DOCUMENT_POSITION_DISCONNECTED;
        const obj2 = ReadOnlyNode(outer1_2[3]);
      }
    }
  };
  items[14] = {
    key: "contains",
    value: function contains(arg0) {
      const self = this;
      let tmp = arg0 === this;
      if (!tmp) {
        tmp = self.compareDocumentPosition(arg0) & ReadOnlyNode.DOCUMENT_POSITION_CONTAINED_BY;
      }
      return tmp;
    }
  };
  items[15] = {
    key: "getRootNode",
    value: function getRootNode() {
      const self = this;
      let self2 = this;
      if (this.isConnected) {
        const ownerDocument = self.ownerDocument;
        self2 = self;
        if (null != ownerDocument) {
          self2 = ownerDocument;
        }
      }
      return self2;
    }
  };
  items[16] = {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return outer1_7(this).length > 0;
    }
  };
  return callback(ReadOnlyNode, items);
})();
tmp2.ELEMENT_NODE = 1;
tmp2.ATTRIBUTE_NODE = 2;
tmp2.TEXT_NODE = 3;
tmp2.CDATA_SECTION_NODE = 4;
tmp2.ENTITY_REFERENCE_NODE = 5;
tmp2.ENTITY_NODE = 6;
tmp2.PROCESSING_INSTRUCTION_NODE = 7;
tmp2.COMMENT_NODE = 8;
tmp2.DOCUMENT_NODE = 9;
tmp2.DOCUMENT_TYPE_NODE = 10;
tmp2.DOCUMENT_FRAGMENT_NODE = 11;
tmp2.NOTATION_NODE = 12;
tmp2.DOCUMENT_POSITION_DISCONNECTED = 1;
tmp2.DOCUMENT_POSITION_PRECEDING = 2;
tmp2.DOCUMENT_POSITION_FOLLOWING = 4;
tmp2.DOCUMENT_POSITION_CONTAINS = 8;
tmp2.DOCUMENT_POSITION_CONTAINED_BY = 16;
tmp2.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;
export { getChildNodes };
