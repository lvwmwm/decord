// Module ID: 9378
// Function ID: 9379
// Name: DomHandler
// Dependencies: [9379, 9380]

// Module 9378 (DomHandler)
import Node from "Node" /* 9379 */;
import ElementType from "ElementType" /* 9380 */;

let hasOwnProperty;

let self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_2 = tmp;
let tmp3 = self && self.__exportStar || ((obj, arg1) => {
  for (const key10007 in obj) {
    let callResult = "default" === key10007;
    if (!callResult) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(arg1, key10007);
    }
    if (callResult) {
      continue;
    } else {
      let tmp3 = closure_2(arg1, obj, key10007);
      continue;
    }
    continue;
  }
});
tmp3(Node, exports);
let closure_3 = { withStartIndices: false, withEndIndices: false, xmlMode: false };
class DomHandler {
  constructor(obj, fn, arg2) {
    const self = this;
    let tmp = arg2;
    this.dom = [];
    const _document = new Node.Document(this.dom);
    this.root = _document;
    this.done = false;
    const items = [this.root];
    this.tagStack = items;
    this.lastNode = null;
    this.parser = null;
    let tmp3 = fn;
    if (typeof fn === "function") {
      tmp3 = closure_3;
      tmp = fn;
    }
    if (typeof obj === "object") {
      tmp3 = obj;
    }
    let tmp5 = null;
    if (null != obj) {
      tmp5 = tmp4;
    }
    self.callback = tmp5;
    if (null == tmp3) {
      tmp3 = closure_3;
    }
    self.options = tmp3;
    let tmp6 = null;
    if (null != tmp) {
      tmp6 = tmp;
    }
    self.elementCB = tmp6;
  }
  onparserinit(parser) {
    this.parser = parser;
  }
  onreset() {
    this.dom = [];
    const _document = new Node.Document(this.dom);
    this.root = _document;
    this.done = false;
    const items = [this.root];
    this.tagStack = items;
    this.lastNode = null;
    this.parser = null;
  }
  onend() {
    const self = this;
    if (!this.done) {
      self.done = true;
      self.parser = null;
      self.handleCallback(null);
    }
  }
  onerror(arg0) {
    this.handleCallback(arg0);
  }
  onclosetag() {
    const self = this;
    this.lastNode = null;
    const tagStack = this.tagStack;
    const arr = tagStack.pop();
    if (this.options.withEndIndices) {
      arr.endIndex = self.parser.endIndex;
    }
    if (self.elementCB) {
      self.elementCB(arr);
    }
  }
  onopentag(name, attribs) {
    const self = this;
    let Tag;
    if (this.options.xmlMode) {
      Tag = ElementType.ElementType.Tag;
    }
    const element = new Node.Element(name, attribs, undefined, Tag);
    self.addNode(element);
    const tagStack = self.tagStack;
    tagStack.push(element);
  }
  ontext(arg0) {
    const self = this;
    const lastNode = this.lastNode;
    if (lastNode) {
      if (lastNode.type === ElementType.ElementType.Text) {
        lastNode.data = lastNode.data + arg0;
        if (self.options.withEndIndices) {
          lastNode.endIndex = self.parser.endIndex;
        }
      }
    }
    const text = new Node.Text(arg0);
    self.addNode(text);
    self.lastNode = text;
  }
  oncomment(data) {
    const self = this;
    if (this.lastNode) {
      if (self.lastNode.type === ElementType.ElementType.Comment) {
        const lastNode = self.lastNode;
        lastNode.data = lastNode.data + data;
      }
    }
    const comment = new Node.Comment(data);
    self.addNode(comment);
    self.lastNode = comment;
  }
  oncommentend() {
    this.lastNode = null;
  }
  oncdatastart() {
    const text = new Node.Text("");
    const items = [text];
    const cDATA = new Node.CDATA(items);
    this.addNode(cDATA);
    text.parent = cDATA;
    this.lastNode = text;
  }
  oncdataend() {
    this.lastNode = null;
  }
  onprocessinginstruction(name, arg1) {
    const processingInstruction = new Node.ProcessingInstruction(name, arg1);
    this.addNode(processingInstruction);
  }
  handleCallback(arg0) {
    const self = this;
    if (typeof this.callback === "function") {
      self.callback(arg0, self.dom);
    } else if (arg0) {
      throw arg0;
    }
  }
  addNode(next) {
    const self = this;
    const tmp2 = this.tagStack[this.tagStack.length - 1].children[this.tagStack[this.tagStack.length - 1].children.length - 1];
    if (this.options.withStartIndices) {
      next.startIndex = self.parser.startIndex;
    }
    if (self.options.withEndIndices) {
      next.endIndex = self.parser.endIndex;
    }
    const children = tmp.children;
    children.push(next);
    if (tmp2) {
      next.prev = tmp2;
      tmp2.next = next;
    }
    next.parent = this.tagStack[this.tagStack.length - 1];
    self.lastNode = null;
  }
}

export { DomHandler };
export default DomHandler;
