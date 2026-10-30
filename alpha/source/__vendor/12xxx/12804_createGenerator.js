// Module ID: 12804
// Function ID: 12805
// Name: createGenerator
// Dependencies: [12805]

// Module 12804 (createGenerator)
import generateSourceMap from "generateSourceMap" /* 12805 */;

function processChildren(children, fn) {
  let self = this;
  let closure_0 = fn;
  children = children.children;
  let c1 = null;
  if (typeof fn !== "function") {
    const item = children.forEach(self.node, self);
  } else {
    const item1 = children.forEach(function(item) {
      const self = this;
      if (null !== c1) {
        fn.call(self, c1);
      }
      self.node(item);
      c1 = item;
    }, self);
  }
}

export default function createGenerator(node) {
  function processNode(type) {
    if (hasOwnProperty.call(obj, type.type)) {
      obj[type.type].call(this, type);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Unknown node type: " + type.type);
      throw error;
    }
  }
  let obj = {};
  if (node.node) {
    for (const key10006 in node.node) {
      obj[key10006] = node.node[key10006].generate;
      continue;
    }
  }
  return (arg0, decorator) => {
    let closure_0 = "";
    obj = {
      children: processChildren,
      node: processNode,
      chunk(arg0) {
        closure_0 = closure_0 + arg0;
      },
      result() {
        return closure_0;
      }
    };
    let obj2 = obj;
    if (decorator) {
      let decoratorResult = obj;
      if (typeof decorator.decorator === "function") {
        decoratorResult = decorator.decorator(obj);
      }
      let tmp2 = decoratorResult;
      if (decorator.sourceMap) {
        tmp2 = generateSourceMap(decoratorResult);
      }
      obj2 = tmp2;
    }
    obj2.node(arg0);
    return obj2.result();
  };
};
