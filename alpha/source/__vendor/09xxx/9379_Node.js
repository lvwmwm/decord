// Module ID: 9379
// Function ID: 9380
// Name: Node
// Dependencies: [9380]
// Exports: hasChildren, isCDATA, isComment, isDirective, isDocument, isTag, isText

// Module 9379 (Node)
import ElementType from "ElementType" /* 9380 */;

let _require, hasOwnProperty;

let self = this;
function cloneNode(type, arg1) {
  let length;
  let length2;
  let length3;
  let tmp14;
  const f105201 = (item) => cloneNode(item, true);
  let flag = arg1;
  if (undefined === arg1) {
    flag = false;
  }
  if (type.type === ElementType.ElementType.Text) {
    const self8 = this;
    tmp14 = Text(type.data);
  } else if (type.type === ElementType.ElementType.Comment) {
    const self7 = this;
    tmp14 = Comment(type.data);
  } else if (ElementType.isTag(type)) {
    let items;
    if (flag) {
      const children = type.children;
      const mapped = children.map(f105201);
      let num6 = 1;
      items = mapped;
      if (1 < mapped.length) {
        do {
          let diff = num6 - 1;
          mapped[num6].prev = mapped[diff];
          mapped[diff].next = mapped[num6];
          num6 = num6 + 1;
          items = mapped;
          length3 = mapped.length;
        } while (num6 < length3);
      }
    } else {
      items = [];
    }
    const self6 = this;
    const tmp28 = Element(type.name, obj({}, type.attribs), items);
    let closure_0 = tmp28;
    const item = items.forEach((item) => {
      item.parent = parent;
      return parent;
    });
    if (null != type.namespace) {
      tmp28.namespace = type.namespace;
    }
    if (type["x-attribsNamespace"]) {
      tmp28["x-attribsNamespace"] = obj({}, type["x-attribsNamespace"]);
    }
    tmp14 = tmp28;
    if (type["x-attribsPrefix"]) {
      tmp28["x-attribsPrefix"] = obj({}, type["x-attribsPrefix"]);
      tmp14 = tmp28;
    }
  } else if (type.type === ElementType.ElementType.CDATA) {
    let items1;
    if (flag) {
      const children1 = type.children;
      const mapped1 = children1.map(f105201);
      let num4 = 1;
      items1 = mapped1;
      if (1 < mapped1.length) {
        do {
          let diff1 = num4 - 1;
          mapped1[num4].prev = mapped1[diff1];
          mapped1[diff1].next = mapped1[num4];
          num4 = num4 + 1;
          items1 = mapped1;
          length2 = mapped1.length;
        } while (num4 < length2);
      }
    } else {
      items1 = [];
    }
    const self5 = this;
    const tmp22 = CDATA(items1);
    let closure_1 = tmp22;
    const item1 = items1.forEach((item) => {
      item.parent = parent2;
      return parent2;
    });
    tmp14 = tmp22;
  } else if (type.type === ElementType.ElementType.Root) {
    let items2;
    if (flag) {
      const children2 = type.children;
      const mapped2 = children2.map(f105201);
      let num2 = 1;
      items2 = mapped2;
      if (1 < mapped2.length) {
        do {
          let diff2 = num2 - 1;
          mapped2[num2].prev = mapped2[diff2];
          mapped2[diff2].next = mapped2[num2];
          num2 = num2 + 1;
          items2 = mapped2;
          length = mapped2.length;
        } while (num2 < length);
      }
    } else {
      items2 = [];
    }
    const self4 = this;
    const tmp17 = Document(items2);
    let closure_2 = tmp17;
    const item2 = items2.forEach((item) => {
      item.parent = parent3;
      return parent3;
    });
    tmp14 = tmp17;
    if (type["x-mode"]) {
      tmp17["x-mode"] = type["x-mode"];
      tmp14 = tmp17;
    }
  } else if (type.type === ElementType.ElementType.Directive) {
    const self3 = this;
    if (typeof ProcessingInstruction === "function") {
      const tmp9 = closure_128_0.call(self3, tmp8) || self3;
      tmp9.name = tmp7;
      tmp9.type = ElementType.ElementType.Directive;
      tmp14 = tmp9;
      if (null != type["x-name"]) {
        ({ "x-name": tmp9["x-name"], "x-publicId": tmp9["x-publicId"], "x-systemId": tmp9["x-systemId"] } = type);
        tmp14 = tmp9;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const _Error = Error;
    const concat = "Not implemented yet: ".concat;
    const self = this;
    const self2 = this;
    const error = new Error("Not implemented yet: ".concat(type.type));
    throw error;
  }
  ({ startIndex: tmp14.startIndex, endIndex: tmp14.endIndex } = type);
  if (null != type.sourceCodeLocation) {
    tmp14.sourceCodeLocation = type.sourceCodeLocation;
  }
  return tmp14;
}
let fn = this && self.__extends;
if (!fn) {
  fn = function t(arg0, arg1) {
    const f105202 = (arg0, arg1) => {
      arg0.__proto__ = arg1;
    };
    fn = Object.setPrototypeOf;
    if (!fn) {
      const _Array = Array;
      fn = Object.create([]) instanceof Array && f105202;
      const fn2 = Object.create([]) instanceof Array && f105202;
    }
    if (!fn) {
      fn = (arg0, obj) => {
        for (const key10005 in obj) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (!hasOwnProperty.call(obj, key10005)) {
            continue;
          } else {
            arg0[key10005] = obj[key10005];
            continue;
          }
          continue;
        }
      };
    }
    return fn(arg0, arg1);
  };
  fn = function(CDATA, DataNode) {
    _require = CDATA;
    if (typeof DataNode !== "function") {
      if (null !== DataNode) {
        const _TypeError = TypeError;
        const _String = String;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("Class extends value " + String(DataNode) + " is not a constructor or null");
        throw typeError;
      }
    }
    fn(CDATA, DataNode);
    if (null === DataNode) {
      const _Object = Object;
      obj = Object.create(DataNode);
    } else {
      class __ {
        constructor() {
          this.constructor = closure_0;
          return;
        }
      }
      __.prototype = DataNode.prototype;
      obj = Object.create(__.prototype);
      obj.constructor = CDATA;
    }
    CDATA.prototype = obj;
  };
}
let tmp = self && self.__assign || (function() {
  obj = Object.assign || (function(arg0) {
    let num;
    const length = arguments.length;
    for (let num = 1; num < length; num = num + 1) {
      let tmp = arguments[num];
      for (const key10012 in tmp) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (!hasOwnProperty.call(tmp, key10012)) {
          continue;
        } else {
          arg0[key10012] = tmp[key10012];
          continue;
        }
        continue;
      }
    }
    return arg0;
  });
  return obj(...arguments);
});
let obj = tmp;
function isTag(arg0) {
  return ElementType.isTag(arg0);
}
function isCDATA(type) {
  return type.type === ElementType.ElementType.CDATA;
}
function isText(type) {
  return type.type === ElementType.ElementType.Text;
}
function isComment(type) {
  return type.type === ElementType.ElementType.Comment;
}
function isDirective(type) {
  return type.type === ElementType.ElementType.Directive;
}
function isDocument(type) {
  return type.type === ElementType.ElementType.Root;
}
class Node {
  constructor() {

  }
  cloneNode(arg0) {
    let flag = arg0;
    if (undefined === arg0) {
      flag = false;
    }
    return cloneNode(this, flag);
  }
}
obj = {
  get() {
    return this.parent;
  },
  set(parent) {
    this.parent = parent;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(Node.prototype, "parentNode", obj);
const obj2 = {
  get() {
    return this.prev;
  },
  set(prev) {
    this.prev = prev;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(Node.prototype, "previousSibling", obj2);
const obj3 = {
  get() {
    return this.next;
  },
  set(next) {
    this.next = next;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(Node.prototype, "nextSibling", obj3);
class DataNode {
  constructor(data) {
    const self = this;
    const tmp = Node.call(self) || self;
    tmp.data = data;
    return tmp;
  }
}
fn(DataNode, Node);
const obj4 = {
  get() {
    return this.data;
  },
  set(data) {
    this.data = data;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(DataNode.prototype, "nodeValue", obj4);
class Text {
  constructor() {
    const self = this;
    const tmp = DataNode(...arguments) || self;
    tmp.type = ElementType.ElementType.Text;
    return tmp;
  }
}
fn(Text, DataNode);
const obj5 = {
  get() {
    return 3;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(Text.prototype, "nodeType", obj5);
class Comment {
  constructor() {
    const self = this;
    const tmp = DataNode(...arguments) || self;
    tmp.type = ElementType.ElementType.Comment;
    return tmp;
  }
}
fn(Comment, DataNode);
const obj6 = {
  get() {
    return 8;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(Comment.prototype, "nodeType", obj6);
class ProcessingInstruction {
  constructor(name, arg1) {
    const self = this;
    const tmp = DataNode.call(self, arg1) || self;
    tmp.name = name;
    tmp.type = ElementType.ElementType.Directive;
    return tmp;
  }
}
fn(ProcessingInstruction, DataNode);
const obj7 = {
  get() {
    return 1;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(ProcessingInstruction.prototype, "nodeType", obj7);
class NodeWithChildren {
  constructor(children) {
    const self = this;
    const tmp = Node.call(self) || self;
    tmp.children = children;
    return tmp;
  }
}
fn(NodeWithChildren, Node);
const obj8 = {
  get() {
    const first = this.children[0];
    let tmp2 = null;
    if (null !== first) {
      tmp2 = null;
      if (undefined !== first) {
        tmp2 = first;
      }
    }
    return tmp2;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(NodeWithChildren.prototype, "firstChild", obj8);
const obj9 = {
  get() {
    const self = this;
    let tmp = null;
    if (this.children.length > 0) {
      tmp = self.children[self.children.length - 1];
    }
    return tmp;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(NodeWithChildren.prototype, "lastChild", obj9);
const obj10 = {
  get() {
    return this.children;
  },
  set(children) {
    this.children = children;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(NodeWithChildren.prototype, "childNodes", obj10);
class CDATA {
  constructor() {
    const self = this;
    const tmp = NodeWithChildren(...arguments) || self;
    tmp.type = ElementType.ElementType.CDATA;
    return tmp;
  }
}
fn(CDATA, NodeWithChildren);
const obj11 = {
  get() {
    return 4;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(CDATA.prototype, "nodeType", obj11);
class Document {
  constructor() {
    const self = this;
    const tmp = NodeWithChildren(...arguments) || self;
    tmp.type = ElementType.ElementType.Root;
    return tmp;
  }
}
fn(Document, NodeWithChildren);
const obj12 = {
  get() {
    return 9;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(Document.prototype, "nodeType", obj12);
class Element {
  constructor(name, attribs, items, Tag) {
    if (undefined === items) {
      items = [];
    }
    let tmp = Tag;
    if (undefined === Tag) {
      if ("script" === name) {
        Tag = ElementType.ElementType.Script;
      } else if ("style" === name) {
        Tag = ElementType.ElementType.Style;
      } else {
        Tag = ElementType.ElementType.Tag;
      }
      tmp = Tag;
    }
    const self = this;
    const tmp8 = NodeWithChildren.call(self, items) || self;
    tmp8.name = name;
    tmp8.attribs = attribs;
    tmp8.type = tmp;
    return tmp8;
  }
}
fn(Element, NodeWithChildren);
const obj13 = {
  get() {
    return 1;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(Element.prototype, "nodeType", obj13);
const obj14 = {
  get() {
    return this.name;
  },
  set(name) {
    this.name = name;
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(Element.prototype, "tagName", obj14);
const obj15 = {
  get() {
    const self = this;
    const keys = Object.keys(this.attribs);
    return keys.map((name) => {
      let tmp3;
      let tmp5;
      const prop = self["x-attribsNamespace"];
      obj = { name, value: self.attribs[name], namespace: tmp3, prefix: tmp5 };
      tmp3 = undefined;
      const tmp = self;
      if (null !== prop) {
        if (undefined !== prop) {
          tmp3 = prop[name];
        }
      }
      const prop1 = tmp["x-attribsPrefix"];
      tmp5 = undefined;
      if (null !== prop1) {
        if (undefined !== prop1) {
          tmp5 = prop1[name];
        }
      }
      return obj;
    });
  },
  enumerable: false,
  configurable: true
};
Object.defineProperty(Element.prototype, "attributes", obj15);

export { Node };
export { DataNode };
export { Text };
export { Comment };
export { ProcessingInstruction };
export { NodeWithChildren };
export { CDATA };
export { Document };
export { Element };
export { isTag };
export { isCDATA };
export { isText };
export { isComment };
export { isDirective };
export { isDocument };
export function hasChildren(children) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  return hasOwnProperty.call(children, "children");
}
export { cloneNode };
