// Module ID: 9407
// Function ID: 9408
// Dependencies: [9408, 9409]

// Module 9407
import QuoteType2 from "QuoteType" /* 9408 */;
import htmlDecodeTree from "htmlDecodeTree" /* 9409 */;

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
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_3 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_2(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_3(obj, __esModule);
  return obj;
});
const QuoteType = tmp5(QuoteType2);
const set = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]);
const set1 = new Set(["p"]);
const set2 = new Set(["thead", "tbody"]);
const set3 = new Set(["dd", "dt"]);
const set4 = new Set(["rt", "rp"]);
const items = ["tr", new Set(["tr", "th", "td"])];
const items1 = [items, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
new Set(["tr", "th", "td"]);
const items2 = ["th", new Set(["th"])];
items1[1] = items2;
new Set(["th"]);
const items3 = ["td", new Set(["thead", "th", "td"])];
items1[2] = items3;
new Set(["thead", "th", "td"]);
const items4 = ["body", new Set(["head", "link", "script"])];
items1[3] = items4;
new Set(["head", "link", "script"]);
const items5 = ["li", new Set(["li"])];
items1[4] = items5;
const items6 = ["p", set1];
items1[5] = items6;
const items7 = ["h1", set1];
items1[6] = items7;
const items8 = ["h2", set1];
items1[7] = items8;
const items9 = ["h3", set1];
items1[8] = items9;
const items10 = ["h4", set1];
items1[9] = items10;
const items11 = ["h5", set1];
items1[10] = items11;
const items12 = ["h6", set1];
items1[11] = items12;
const items13 = ["select", set];
items1[12] = items13;
const items14 = ["input", set];
items1[13] = items14;
const items15 = ["output", set];
items1[14] = items15;
const items16 = ["button", set];
items1[15] = items16;
const items17 = ["datalist", set];
items1[16] = items17;
const items18 = ["textarea", set];
items1[17] = items18;
new Set(["li"]);
const items19 = ["option", new Set(["option"])];
items1[18] = items19;
new Set(["option"]);
const items20 = ["optgroup", new Set(["optgroup", "option"])];
items1[19] = items20;
const items21 = ["dd", set3];
items1[20] = items21;
const items22 = ["dt", set3];
items1[21] = items22;
const items23 = ["address", set1];
items1[22] = items23;
const items24 = ["article", set1];
items1[23] = items24;
const items25 = ["aside", set1];
items1[24] = items25;
const items26 = ["blockquote", set1];
items1[25] = items26;
const items27 = ["details", set1];
items1[26] = items27;
const items28 = ["div", set1];
items1[27] = items28;
const items29 = ["dl", set1];
items1[28] = items29;
const items30 = ["fieldset", set1];
items1[29] = items30;
const items31 = ["figcaption", set1];
items1[30] = items31;
const items32 = ["figure", set1];
items1[31] = items32;
const items33 = ["footer", set1];
items1[32] = items33;
const items34 = ["form", set1];
items1[33] = items34;
const items35 = ["header", set1];
items1[34] = items35;
const items36 = ["hr", set1];
items1[35] = items36;
const items37 = ["main", set1];
items1[36] = items37;
const items38 = ["nav", set1];
items1[37] = items38;
const items39 = ["ol", set1];
items1[38] = items39;
const items40 = ["pre", set1];
items1[39] = items40;
const items41 = ["section", set1];
items1[40] = items41;
const items42 = ["table", set1];
items1[41] = items42;
const items43 = ["ul", set1];
items1[42] = items43;
const items44 = ["rt", set4];
items1[43] = items44;
const items45 = ["rp", set4];
items1[44] = items45;
const items46 = ["tbody", set2];
items1[45] = items46;
const items47 = ["tfoot", set2];
items1[46] = items47;
new Set(["optgroup", "option"]);
const map = new Map(items1);
const set12 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
const set13 = new Set(["math", "svg"]);
const set14 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]);
const re9 = /\s|\//;
class Parser {
  constructor(arg0, arg1) {
    let lowerCaseAttributeNames;
    let lowerCaseTags;
    let obj;
    let obj2;
    let obj3;
    obj = { options: obj2, startIndex: 0, endIndex: 0, openTagStart: 0, tagname: "", attribname: "", attribvalue: "", attribs: null, stack: [], foreignContext: [], buffers: [], bufferOffset: 0, writeIndex: 0, ended: false, cbs: obj3, lowerCaseTagNames: lowerCaseTags, lowerCaseAttributeNames, tokenizer: new _default(obj.options, obj) };
    obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    obj3 = arg0;
    if (null == arg0) {
      obj3 = {};
    }
    lowerCaseTags = obj2.lowerCaseTags ?? !obj2.xmlMode;
    lowerCaseAttributeNames = obj2.lowerCaseAttributeNames ?? !obj2.xmlMode;
    const cbs = obj.cbs;
    const onparserinit = cbs.onparserinit;
    new obj2.Tokenizer ?? QuoteType.default(obj.options, obj);
    const tmp3 = null === onparserinit || undefined === onparserinit;
    if (!tmp3) {
      onparserinit.call(cbs, obj);
    }
  }
  ontext(arg0, startIndex) {
    this.endIndex = startIndex - 1;
    const cbs = this.cbs;
    const ontext = cbs.ontext;
    let tmp2 = null === ontext;
    const slice = this.getSlice(arg0, startIndex);
    if (!tmp2) {
      tmp2 = undefined === ontext;
    }
    if (!tmp2) {
      ontext.call(cbs, slice);
    }
    this.startIndex = startIndex;
  }
  ontextentity(arg0) {
    const tokenizer = this.tokenizer;
    const sectionStart = tokenizer.getSectionStart();
    this.endIndex = sectionStart - 1;
    const cbs = this.cbs;
    const ontext = cbs.ontext;
    const tmp2 = null === ontext || undefined === ontext;
    if (!tmp2) {
      ontext.call(cbs, htmlDecodeTree.fromCodePoint(arg0));
    }
    this.startIndex = sectionStart;
  }
  isVoidElement(arg0) {
    const hasItem = !this.options.xmlMode && set12.has(arg0);
    return hasItem;
  }
  onopentagname(arg0, endIndex) {
    const self = this;
    this.endIndex = endIndex;
    const str = this.getSlice(arg0, endIndex);
    let formatted = str;
    if (this.lowerCaseTagNames) {
      formatted = str.toLowerCase();
    }
    self.emitOpenTag(formatted);
  }
  emitOpenTag(tagname) {
    let cbs;
    let stack;
    const self = this;
    this.openTagStart = this.startIndex;
    this.tagname = tagname;
    const value = !this.options.xmlMode && map.get(tagname);
    if (value) {
      if (self.stack.length > 0) {
        if (value.has(self.stack[self.stack.length - 1])) {
          while (true) {
            ({ stack, cbs } = self);
            let onclosetag = cbs.onclosetag;
            let tmp3 = null === onclosetag;
            let arr = stack.pop();
            if (!tmp3) {
              tmp3 = undefined === onclosetag;
            }
            if (!tmp3) {
              let callResult = onclosetag.call(cbs, arr, true);
            }
            if (self.stack.length <= 0) {
              break;
            } else if (!value.has(self.stack[self.stack.length - 1])) {
              break;
            }
          }
        }
      }
    }
    if (!self.isVoidElement(tagname)) {
      const stack1 = self.stack;
      stack1.push(tagname);
      if (set13.has(tagname)) {
        const foreignContext = self.foreignContext;
        foreignContext.push(true);
      } else if (set14.has(tagname)) {
        const foreignContext1 = self.foreignContext;
        foreignContext1.push(false);
      }
    }
    const cbs2 = self.cbs;
    const onopentagname = cbs2.onopentagname;
    const tmp9 = null === onopentagname || undefined === onopentagname;
    if (!tmp9) {
      onopentagname.call(cbs2, tagname);
    }
    if (self.cbs.onopentag) {
      self.attribs = {};
    }
  }
  endOpenTag(arg0) {
    let attribs;
    let tagname;
    const self = this;
    this.startIndex = this.openTagStart;
    if (this.attribs) {
      const cbs = self.cbs;
      const onopentag = cbs.onopentag;
      const tmp2 = null === onopentag || undefined === onopentag;
      if (!tmp2) {
        ({ tagname, attribs } = self);
        onopentag.call(cbs, tagname, attribs, arg0);
      }
      self.attribs = null;
    }
    const tmp4 = self.cbs.onclosetag && self.isVoidElement(self.tagname);
    if (tmp4) {
      const cbs2 = self.cbs;
      cbs2.onclosetag(self.tagname, true);
    }
    self.tagname = "";
  }
  onopentagend(endIndex) {
    this.endIndex = endIndex;
    this.endOpenTag(false);
    this.startIndex = endIndex + 1;
  }
  onclosetag(arg0, endIndex) {
    let tmp11;
    const self = this;
    this.endIndex = endIndex;
    const str = this.getSlice(arg0, endIndex);
    let formatted = str;
    if (this.lowerCaseTagNames) {
      formatted = str.toLowerCase();
    }
    const hasItem = set13.has(formatted) || set14.has(formatted);
    if (hasItem) {
      const foreignContext = self.foreignContext;
      foreignContext.pop();
    }
    if (self.isVoidElement(formatted)) {
      const xmlMode2 = self.options.xmlMode || "br" !== formatted;
      if (!xmlMode2) {
        const cbs2 = self.cbs;
        const onopentagname = cbs2.onopentagname;
        const tmp13 = null === onopentagname || undefined === onopentagname;
        if (!tmp13) {
          onopentagname.call(cbs2, "br");
        }
        const cbs3 = self.cbs;
        const onopentag = cbs3.onopentag;
        const tmp14 = null === onopentag || undefined === onopentag;
        if (!tmp14) {
          const obj = {};
          onopentag.call(cbs3, "br", obj, true);
        }
        const cbs4 = self.cbs;
        const onclosetag = cbs4.onclosetag;
        const tmp15 = null === onclosetag || undefined === onclosetag;
        if (!tmp15) {
          onclosetag.call(cbs4, "br", false);
        }
      }
    } else {
      const stack = self.stack;
      const lastIndexOfResult = stack.lastIndexOf(formatted);
      if (-1 !== lastIndexOfResult) {
        const stack1 = self.stack;
        if (self.cbs.onclosetag) {
          let diff = tmp8 - 1;
          if (+stack1.length - lastIndexOfResult) {
            do {
              let cbs = self.cbs;
              let stack2 = self.stack;
              let onclosetagResult = cbs.onclosetag(stack2.pop(), 0 !== diff);
              tmp11 = +diff;
              diff = tmp11 - 1;
            } while (tmp11);
          }
        } else {
          stack1.length = lastIndexOfResult;
        }
      } else {
        const xmlMode = self.options.xmlMode || "p" !== formatted;
        if (!xmlMode) {
          self.emitOpenTag("p");
          self.closeCurrentTag(true);
        }
      }
    }
    self.startIndex = endIndex + 1;
  }
  onselfclosingtag(endIndex) {
    const self = this;
    this.endIndex = endIndex;
    if (!this.options.xmlMode) {
      if (!self.options.recognizeSelfClosing) {
        if (!self.foreignContext[self.foreignContext.length - 1]) {
          self.onopentagend(endIndex);
        }
      }
    }
    self.closeCurrentTag(false);
    self.startIndex = endIndex + 1;
  }
  closeCurrentTag(arg0) {
    const self = this;
    const tagname = this.tagname;
    this.endOpenTag(arg0);
    if (this.stack[this.stack.length - 1] === tagname) {
      const cbs = self.cbs;
      const onclosetag = cbs.onclosetag;
      const tmp3 = null === onclosetag || undefined === onclosetag;
      if (!tmp3) {
        onclosetag.call(cbs, tagname, !arg0);
      }
      const stack = self.stack;
      stack.pop();
    }
  }
  onattribname(startIndex, arg1) {
    this.startIndex = startIndex;
    const str = this.getSlice(startIndex, arg1);
    let formatted = str;
    if (this.lowerCaseAttributeNames) {
      formatted = str.toLowerCase();
    }
    this.attribname = formatted;
  }
  onattribdata(arg0, arg1) {
    this.attribvalue = this.attribvalue + this.getSlice(arg0, arg1);
  }
  onattribentity(arg0) {
    this.attribvalue = this.attribvalue + htmlDecodeTree.fromCodePoint(arg0);
  }
  onattribend(arg0, endIndex) {
    let attribname;
    let attribvalue;
    const self = this;
    this.endIndex = endIndex;
    const cbs = this.cbs;
    const onattribute = cbs.onattribute;
    const tmp = null === onattribute || undefined === onattribute;
    if (!tmp) {
      ({ attribname, attribvalue } = self);
      let str = "\"";
      const call = onattribute.call;
      if (arg0 !== QuoteType.QuoteType.Double) {
        let str2 = "'";
        if (arg0 !== QuoteType.QuoteType.Single) {
          str2 = tmp4;
        }
        str = str2;
      }
      call(cbs, attribname, attribvalue, str);
    }
    let attribs = self.attribs;
    if (attribs) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      attribs = !hasOwnProperty.call(self.attribs, self.attribname);
    }
    if (attribs) {
      self.attribs[self.attribname] = self.attribvalue;
    }
    self.attribvalue = "";
  }
  getInstructionName(str) {
    const searchResult = str.search(re9);
    if (searchResult >= 0) {
      str = str.substr(0, searchResult);
    }
    let formatted = str;
    if (this.lowerCaseTagNames) {
      formatted = str.toLowerCase();
    }
    return formatted;
  }
  ondeclaration(arg0, endIndex) {
    const self = this;
    this.endIndex = endIndex;
    const slice = this.getSlice(arg0, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const cbs = self.cbs;
      const concat = "!".concat;
      const onprocessinginstruction = cbs.onprocessinginstruction;
      const concat2 = "!".concat;
      const combined = "!".concat(self.getInstructionName(slice));
      const result = onprocessinginstruction(combined, "!".concat(slice));
    }
    self.startIndex = endIndex + 1;
  }
  onprocessinginstruction(arg0, endIndex) {
    const self = this;
    this.endIndex = endIndex;
    const slice = this.getSlice(arg0, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const cbs = self.cbs;
      const concat = "?".concat;
      const onprocessinginstruction = cbs.onprocessinginstruction;
      const concat2 = "?".concat;
      const combined = "?".concat(self.getInstructionName(slice));
      const result = onprocessinginstruction(combined, "?".concat(slice));
    }
    self.startIndex = endIndex + 1;
  }
  oncomment(arg0, endIndex, arg2) {
    const self = this;
    this.endIndex = endIndex;
    const cbs = this.cbs;
    const oncomment = cbs.oncomment;
    const tmp = null === oncomment || undefined === oncomment;
    if (!tmp) {
      oncomment.call(cbs, self.getSlice(arg0, endIndex - arg2));
    }
    const cbs2 = self.cbs;
    const oncommentend = cbs2.oncommentend;
    const tmp4 = null === oncommentend || undefined === oncommentend;
    if (!tmp4) {
      oncommentend.call(cbs2);
    }
    self.startIndex = endIndex + 1;
  }
  oncdata(arg0, endIndex, arg2) {
    const self = this;
    this.endIndex = endIndex;
    const slice = this.getSlice(arg0, endIndex - arg2);
    if (!this.options.xmlMode) {
      if (!self.options.recognizeCDATA) {
        const cbs = self.cbs;
        const oncomment = cbs.oncomment;
        const tmp3 = null === oncomment || undefined === oncomment;
        if (!tmp3) {
          const concat = "[CDATA[".concat;
          oncomment.call(cbs, "[CDATA[".concat(slice, "]]"));
        }
        const cbs2 = self.cbs;
        const oncommentend = cbs2.oncommentend;
        const tmp4 = null === oncommentend || undefined === oncommentend;
        if (!tmp4) {
          oncommentend.call(cbs2);
        }
      }
      self.startIndex = endIndex + 1;
    }
    const cbs3 = self.cbs;
    const oncdatastart = cbs3.oncdatastart;
    const tmp5 = null === oncdatastart || undefined === oncdatastart;
    if (!tmp5) {
      oncdatastart.call(cbs3);
    }
    const cbs4 = self.cbs;
    const ontext = cbs4.ontext;
    const tmp6 = null === ontext || undefined === ontext;
    if (!tmp6) {
      ontext.call(cbs4, slice);
    }
    const cbs5 = self.cbs;
    const oncdataend = cbs5.oncdataend;
    const tmp7 = null === oncdataend || undefined === oncdataend;
    if (!tmp7) {
      oncdataend.call(cbs5);
    }
  }
  onend() {
    let diff;
    const self = this;
    if (this.cbs.onclosetag) {
      self.endIndex = self.startIndex;
      let length = self.stack.length;
      if (length > 0) {
        do {
          let cbs = self.cbs;
          diff = length - 1;
          let onclosetagResult = cbs.onclosetag(self.stack[diff], true);
          length = diff;
        } while (diff > 0);
      }
    }
    const cbs2 = self.cbs;
    const onend = cbs2.onend;
    const tmp3 = null === onend || undefined === onend;
    if (!tmp3) {
      onend.call(cbs2);
    }
  }
  reset() {
    const self = this;
    const cbs = this.cbs;
    const onreset = cbs.onreset;
    const tmp = null === onreset || undefined === onreset;
    if (!tmp) {
      onreset.call(cbs);
    }
    const tokenizer = self.tokenizer;
    tokenizer.reset();
    self.tagname = "";
    self.attribname = "";
    self.attribs = null;
    self.stack.length = 0;
    self.startIndex = 0;
    self.endIndex = 0;
    const cbs2 = self.cbs;
    const onparserinit = cbs2.onparserinit;
    const tmp3 = null === onparserinit || undefined === onparserinit;
    if (!tmp3) {
      onparserinit.call(cbs2, self);
    }
    self.buffers.length = 0;
    self.bufferOffset = 0;
    self.writeIndex = 0;
    self.ended = false;
  }
  parseComplete(arg0) {
    this.reset();
    this.end(arg0);
  }
  getSlice(arg0, arg1) {
    let diff;
    let diff1;
    let length;
    let length2;
    const self = this;
    if (arg0 - this.bufferOffset >= this.buffers[0].length) {
      do {
        let shiftBufferResult = self.shiftBuffer();
        diff = arg0 - self.bufferOffset;
        length = self.buffers[0].length;
      } while (diff >= length);
    }
    const first = self.buffers[0];
    let substr = first.slice(arg0 - self.bufferOffset, arg1 - self.bufferOffset);
    let tmp4 = substr;
    if (arg1 - self.bufferOffset > self.buffers[0].length) {
      do {
        let shiftBufferResult1 = self.shiftBuffer();
        let first1 = self.buffers[0];
        substr = substr + first1.slice(0, arg1 - self.bufferOffset);
        tmp4 = substr;
        diff1 = arg1 - self.bufferOffset;
        length2 = self.buffers[0].length;
      } while (diff1 > length2);
    }
    return tmp4;
  }
  shiftBuffer() {
    this.bufferOffset = this.bufferOffset + this.buffers[0].length;
    this.writeIndex = this.writeIndex - 1;
    const buffers = this.buffers;
    buffers.shift();
  }
  write(arg0) {
    const self = this;
    if (this.ended) {
      const cbs = self.cbs;
      const onerror = cbs.onerror;
      const tmp5 = null === onerror || undefined === onerror;
      if (!tmp5) {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const call = onerror.call;
        const error = new Error(".write() after done!");
        call(cbs, error);
      }
    } else {
      const buffers = self.buffers;
      buffers.push(arg0);
      if (self.tokenizer.running) {
        const tokenizer = self.tokenizer;
        tokenizer.write(arg0);
        self.writeIndex = self.writeIndex + 1;
      }
    }
  }
  end(arg0) {
    const self = this;
    if (this.ended) {
      const cbs = self.cbs;
      const onerror = cbs.onerror;
      const tmp5 = null === onerror || undefined === onerror;
      if (!tmp5) {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const call = onerror.call;
        const error = new Error(".end() after done!");
        call(cbs, error);
      }
    } else {
      const tmp = arg0;
      if (tmp) {
        self.write(arg0);
      }
      self.ended = true;
      const tokenizer = self.tokenizer;
      tokenizer.end();
    }
  }
  pause() {
    const tokenizer = this.tokenizer;
    tokenizer.pause();
  }
  resume() {
    const self = this;
    const tokenizer = this.tokenizer;
    tokenizer.resume();
    if (this.tokenizer.running) {
      if (self.writeIndex < self.buffers.length) {
        const tokenizer2 = self.tokenizer;
        self.writeIndex = +self.writeIndex + 1;
        tokenizer2.write(self.buffers[+self.writeIndex]);
        while (self.tokenizer.running) {
          if (self.writeIndex >= self.buffers.length) {
            break;
          }
        }
      }
    }
    if (self.ended) {
      const tokenizer3 = self.tokenizer;
      tokenizer3.end();
    }
  }
  parseChunk(arg0) {
    this.write(arg0);
  }
  done(arg0) {
    this.end(arg0);
  }
}

export { Parser };
