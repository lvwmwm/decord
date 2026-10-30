// Module ID: 9388
// Function ID: 9389
// Name: QuoteType
// Dependencies: [9389]

// Module 9388 (QuoteType)
import htmlDecodeTree from "htmlDecodeTree" /* 9389 */;

let uint8Array;
let uint8Array1;
let uint8Array2;
let uint8Array3;
let uint8Array4;
let uint8Array5;
let obj = { Tab: 9, NewLine: 10, FormFeed: 12, CarriageReturn: 13, Space: 32, ExclamationMark: 33, Number: 35, Amp: 38, SingleQuote: 39, DoubleQuote: 34, Dash: 45, Slash: 47, Zero: 48, Nine: 57, Semi: 59, Lt: 60, Eq: 61, Gt: 62, Questionmark: 63, UpperA: 65, LowerA: 97, UpperF: 70, LowerF: 102, UpperZ: 90, LowerZ: 122, LowerX: 120, OpeningSquareBracket: 91 };
obj[9] = "Tab";
obj[10] = "NewLine";
obj[12] = "FormFeed";
obj[13] = "CarriageReturn";
obj[32] = "Space";
obj[33] = "ExclamationMark";
obj[35] = "Number";
obj[38] = "Amp";
obj[39] = "SingleQuote";
obj[34] = "DoubleQuote";
obj[45] = "Dash";
obj[47] = "Slash";
obj[48] = "Zero";
obj[57] = "Nine";
obj[59] = "Semi";
obj[60] = "Lt";
obj[61] = "Eq";
obj[62] = "Gt";
obj[63] = "Questionmark";
obj[65] = "UpperA";
obj[97] = "LowerA";
obj[70] = "UpperF";
obj[102] = "LowerF";
obj[90] = "UpperZ";
obj[122] = "LowerZ";
obj[120] = "LowerX";
obj[91] = "OpeningSquareBracket";
const obj2 = { Text: 1, BeforeTagName: 2, InTagName: 3, InSelfClosingTag: 4, BeforeClosingTagName: 5, InClosingTagName: 6, AfterClosingTagName: 7, BeforeAttributeName: 8, InAttributeName: 9, AfterAttributeName: 10, BeforeAttributeValue: 11, InAttributeValueDq: 12, InAttributeValueSq: 13, InAttributeValueNq: 14, BeforeDeclaration: 15, InDeclaration: 16, InProcessingInstruction: 17, BeforeComment: 18, CDATASequence: 19, InSpecialComment: 20, InCommentLike: 21, BeforeSpecialS: 22, SpecialStartSequence: 23, InSpecialTag: 24, BeforeEntity: 25, BeforeNumericEntity: 26, InNamedEntity: 27, InNumericEntity: 28, InHexEntity: 29 };
obj2[1] = "Text";
obj2[2] = "BeforeTagName";
obj2[3] = "InTagName";
obj2[4] = "InSelfClosingTag";
obj2[5] = "BeforeClosingTagName";
obj2[6] = "InClosingTagName";
obj2[7] = "AfterClosingTagName";
obj2[8] = "BeforeAttributeName";
obj2[9] = "InAttributeName";
obj2[10] = "AfterAttributeName";
obj2[11] = "BeforeAttributeValue";
obj2[12] = "InAttributeValueDq";
obj2[13] = "InAttributeValueSq";
obj2[14] = "InAttributeValueNq";
obj2[15] = "BeforeDeclaration";
obj2[16] = "InDeclaration";
obj2[17] = "InProcessingInstruction";
obj2[18] = "BeforeComment";
obj2[19] = "CDATASequence";
obj2[20] = "InSpecialComment";
obj2[21] = "InCommentLike";
obj2[22] = "BeforeSpecialS";
obj2[23] = "SpecialStartSequence";
obj2[24] = "InSpecialTag";
obj2[25] = "BeforeEntity";
obj2[26] = "BeforeNumericEntity";
obj2[27] = "InNamedEntity";
obj2[28] = "InNumericEntity";
obj2[29] = "InHexEntity";
let QuoteType = exports.QuoteType;
if (!QuoteType) {
  const obj3 = {};
  exports.QuoteType = obj3;
  QuoteType = obj3;
}
QuoteType.NoValue = 0;
QuoteType[0] = "NoValue";
QuoteType.Unquoted = 1;
QuoteType[1] = "Unquoted";
QuoteType.Single = 2;
QuoteType[2] = "Single";
QuoteType.Double = 3;
QuoteType[3] = "Double";
const obj4 = { Cdata: uint8Array, CdataEnd: uint8Array1, CommentEnd: uint8Array2, ScriptEnd: uint8Array3, StyleEnd: uint8Array4, TitleEnd: uint8Array5 };
uint8Array = new Uint8Array([67, 68, 65, 84, 65, 91]);
uint8Array1 = new Uint8Array([93, 93, 62]);
uint8Array2 = new Uint8Array([45, 45, 62]);
uint8Array3 = new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]);
uint8Array4 = new Uint8Array([60, 47, 115, 116, 121, 108, 101]);
uint8Array5 = new Uint8Array([60, 47, 116, 105, 116, 108, 101]);
class Tokenizer {
  constructor(xmlMode, cbs) {
    xmlMode = xmlMode.xmlMode;
    const decodeEntities = xmlMode.decodeEntities;
    const tmp2 = undefined === decodeEntities || decodeEntities;
  }
  reset() {

  }
  write(buffer) {
    this.offset = this.offset + this.buffer.length;
    this.buffer = buffer;
    const parsed = this.parse();
  }
  end() {
    const self = this;
    if (this.running) {
      self.finish();
    }
  }
  pause() {
    this.running = false;
  }
  resume() {
    const self = this;
    this.running = true;
    if (this.index < this.buffer.length + this.offset) {
      const parsed = self.parse();
    }
  }
  getIndex() {
    return this.index;
  }
  getSectionStart() {
    return this.sectionStart;
  }
  stateText(arg0) {
    const self = this;
    if (arg0 !== obj.Lt) {
      const tmp2 = self.decodeEntities && arg0 === obj.Amp;
      if (tmp2) {
        self.state = obj2.BeforeEntity;
      }
    }
    if (self.index > self.sectionStart) {
      const cbs = self.cbs;
      cbs.ontext(self.sectionStart, self.index);
    }
    self.state = obj2.BeforeTagName;
    self.sectionStart = self.index;
  }
  stateSpecialStartSequence(arg0) {
    let tmp2;
    const self = this;
    if (this.sequenceIndex === this.currentSequence.length) {
      let tmp4 = arg0 === obj.Slash || arg0 === tmp3.Gt;
      if (!tmp4) {
        tmp4 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
      }
      tmp2 = tmp4;
    } else {
      tmp2 = (32 | arg0) === self.currentSequence[self.sequenceIndex];
    }
    if (tmp2) {
      if (this.sequenceIndex !== this.currentSequence.length) {
        self.sequenceIndex = +self.sequenceIndex + 1;
      }
    } else {
      self.isSpecial = false;
    }
    self.sequenceIndex = 0;
    self.state = obj2.InTagName;
    self.stateInTagName(arg0);
  }
  stateInSpecialTag(arg0) {
    let cbs;
    let index;
    const self = this;
    if (this.sequenceIndex === this.currentSequence.length) {
      if (arg0 !== obj.Gt) {
        const tmp2 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
        if (!tmp2) {
          self.sequenceIndex = 0;
        }
      }
      const diff = self.index - self.currentSequence.length;
      if (self.sectionStart < diff) {
        self.index = diff;
        ({ cbs, index } = self);
        cbs.ontext(self.sectionStart, diff);
        self.index = index;
      }
      self.isSpecial = false;
      self.sectionStart = diff + 2;
      const result = self.stateInClosingTagName(arg0);
    }
    if ((32 | arg0) === self.currentSequence[self.sequenceIndex]) {
      self.sequenceIndex = self.sequenceIndex + 1;
    } else if (0 === self.sequenceIndex) {
      if (self.currentSequence === obj4.TitleEnd) {
        const decodeEntities = self.decodeEntities && arg0 === obj.Amp;
        if (decodeEntities) {
          self.state = obj2.BeforeEntity;
        }
      } else if (self.fastForwardTo(obj.Lt)) {
        self.sequenceIndex = 1;
      }
    } else {
      const _Number = Number;
      self.sequenceIndex = Number(arg0 === obj.Lt);
    }
  }
  stateCDATASequence(arg0) {
    const self = this;
    if (arg0 === obj4.Cdata[this.sequenceIndex]) {
      const sum = self.sequenceIndex + 1;
      self.sequenceIndex = sum;
      if (sum === obj4.Cdata.length) {
        self.state = obj2.InCommentLike;
        self.currentSequence = obj4.CdataEnd;
        self.sequenceIndex = 0;
        self.sectionStart = self.index + 1;
      }
    } else {
      self.sequenceIndex = 0;
      self.state = obj2.InDeclaration;
      self.stateInDeclaration(arg0);
    }
  }
  fastForwardTo(arg0) {
    const self = this;
    const sum = this.index + 1;
    this.index = sum;
    if (sum < this.buffer.length + this.offset) {
      const buffer = self.buffer;
      while (buffer.charCodeAt(self.index - self.offset) !== arg0) {
        let sum1 = self.index + 1;
        self.index = sum1;
      }
      return true;
    }
    self.index = self.buffer.length + self.offset - 1;
    return false;
  }
  stateInCommentLike(arg0) {
    const self = this;
    if (arg0 === this.currentSequence[this.sequenceIndex]) {
      const sum = self.sequenceIndex + 1;
      self.sequenceIndex = sum;
      if (sum === self.currentSequence.length) {
        if (self.currentSequence === obj4.CdataEnd) {
          const cbs2 = self.cbs;
          cbs2.oncdata(self.sectionStart, self.index, 2);
        } else {
          const cbs = self.cbs;
          cbs.oncomment(self.sectionStart, self.index, 2);
        }
        self.sequenceIndex = 0;
        self.sectionStart = self.index + 1;
        self.state = obj2.Text;
      }
    } else if (0 === self.sequenceIndex) {
      if (self.fastForwardTo(self.currentSequence[0])) {
        self.sequenceIndex = 1;
      }
    } else if (arg0 !== self.currentSequence[self.sequenceIndex - 1]) {
      self.sequenceIndex = 0;
    }
  }
  isTagStartChar(arg0) {
    let tmp2;
    if (this.xmlMode) {
      let tmp4 = arg0 === tmp.Slash || arg0 === tmp.Gt;
      if (!tmp4) {
        tmp4 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
      }
      tmp2 = !tmp4;
    } else {
      tmp2 = arg0 >= tmp.LowerA && arg0 <= tmp.LowerZ;
      if (!tmp2) {
        tmp2 = arg0 >= obj.UpperA && arg0 <= obj.UpperZ;
      }
    }
    return tmp2;
  }
  startSpecial(arg0, arg1) {

  }
  stateBeforeTagName(arg0) {
    const self = this;
    if (arg0 === obj.ExclamationMark) {
      self.state = obj2.BeforeDeclaration;
      self.sectionStart = self.index + 1;
    } else if (arg0 === obj.Questionmark) {
      self.state = obj2.InProcessingInstruction;
      self.sectionStart = self.index + 1;
    } else if (self.isTagStartChar(arg0)) {
      self.sectionStart = self.index;
      if (!self.xmlMode) {
        if ((32 | arg0) === obj4.TitleEnd[2]) {
          self.startSpecial(tmp6.TitleEnd, 3);
        }
      }
      if (!self.xmlMode) {
        let InTagName;
        if ((32 | arg0) === obj4.ScriptEnd[2]) {
          InTagName = obj2.BeforeSpecialS;
        }
        self.state = InTagName;
      }
      InTagName = obj2.InTagName;
    } else if (arg0 === obj.Slash) {
      self.state = obj2.BeforeClosingTagName;
    } else {
      self.state = obj2.Text;
      self.stateText(arg0);
    }
  }
  stateInTagName(arg0) {
    let tmp2 = arg0 === obj.Slash || arg0 === tmp.Gt;
    if (!tmp2) {
      tmp2 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
    }
    if (tmp2) {
      const self = this;
      const cbs = this.cbs;
      cbs.onopentagname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = obj2.BeforeAttributeName;
      const result = this.stateBeforeAttributeName(arg0);
    }
  }
  stateBeforeClosingTagName(arg0) {
    const tmp2 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
    if (!tmp2) {
      const self = this;
      if (arg0 === obj.Gt) {
        self.state = obj2.Text;
      } else {
        self.state = self.isTagStartChar(arg0) ? obj2.InClosingTagName : obj2.InSpecialComment;
        self.sectionStart = self.index;
      }
    }
  }
  stateInClosingTagName(arg0) {
    let tmp2 = arg0 === obj.Gt;
    if (!tmp2) {
      tmp2 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
    }
    if (tmp2) {
      const self = this;
      const cbs = this.cbs;
      cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = obj2.AfterClosingTagName;
      const result = this.stateAfterClosingTagName(arg0);
    }
  }
  stateAfterClosingTagName(arg0) {
    const self = this;
    const tmp2 = arg0 === obj.Gt || self.fastForwardTo(tmp.Gt);
    if (tmp2) {
      ({ Text: self.state, Text: self.baseState } = obj2);
      self.sectionStart = self.index + 1;
    }
  }
  stateBeforeAttributeName(arg0) {
    const self = this;
    if (arg0 === obj.Gt) {
      const cbs = self.cbs;
      cbs.onopentagend(self.index);
      if (self.isSpecial) {
        self.state = obj2.InSpecialTag;
        self.sequenceIndex = 0;
      } else {
        self.state = obj2.Text;
      }
      self.baseState = self.state;
      self.sectionStart = self.index + 1;
    } else if (arg0 === obj.Slash) {
      self.state = obj2.InSelfClosingTag;
    } else {
      const tmp2 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
      if (!tmp2) {
        self.state = obj2.InAttributeName;
        self.sectionStart = self.index;
      }
    }
  }
  stateInSelfClosingTag(arg0) {
    const self = this;
    if (arg0 === obj.Gt) {
      const cbs = self.cbs;
      cbs.onselfclosingtag(self.index);
      ({ Text: self.state, Text: self.baseState } = obj2);
      self.sectionStart = self.index + 1;
      self.isSpecial = false;
    } else {
      const tmp2 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
      if (!tmp2) {
        self.state = obj2.BeforeAttributeName;
        const result = self.stateBeforeAttributeName(arg0);
      }
    }
  }
  stateInAttributeName(arg0) {
    let tmp2 = arg0 === obj.Eq;
    if (!tmp2) {
      let tmp3 = arg0 === tmp.Slash || arg0 === tmp.Gt;
      if (!tmp3) {
        tmp3 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
      }
      tmp2 = tmp3;
    }
    if (tmp2) {
      const self = this;
      const cbs = this.cbs;
      cbs.onattribname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = obj2.AfterAttributeName;
      const result = this.stateAfterAttributeName(arg0);
    }
  }
  stateAfterAttributeName(arg0) {
    const self = this;
    if (arg0 === obj.Eq) {
      self.state = obj2.BeforeAttributeValue;
    } else {
      if (arg0 !== obj.Slash) {
        if (arg0 !== obj.Gt) {
          const tmp2 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
          if (!tmp2) {
            const cbs = self.cbs;
            cbs.onattribend(QuoteType.NoValue, self.index);
            self.state = obj2.InAttributeName;
            self.sectionStart = self.index;
          }
        }
      }
      const cbs2 = self.cbs;
      cbs2.onattribend(QuoteType.NoValue, self.index);
      self.state = obj2.BeforeAttributeName;
      const result = self.stateBeforeAttributeName(arg0);
    }
  }
  stateBeforeAttributeValue(arg0) {
    const self = this;
    if (arg0 === obj.DoubleQuote) {
      self.state = obj2.InAttributeValueDq;
      self.sectionStart = self.index + 1;
    } else if (arg0 === obj.SingleQuote) {
      self.state = obj2.InAttributeValueSq;
      self.sectionStart = self.index + 1;
    } else {
      const tmp2 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
      if (!tmp2) {
        self.sectionStart = self.index;
        self.state = obj2.InAttributeValueNq;
        const result = self.stateInAttributeValueNoQuotes(arg0);
      }
    }
  }
  handleInAttributeValue(arg0, arg1) {
    let Single;
    const self = this;
    if (arg0 !== arg1) {
      const decodeEntities = self.decodeEntities && arg0 === obj.Amp;
      if (decodeEntities) {
        self.baseState = self.state;
        self.state = obj2.BeforeEntity;
      }
    }
    const cbs = self.cbs;
    cbs.onattribdata(self.sectionStart, self.index);
    self.sectionStart = -1;
    const cbs2 = self.cbs;
    const onattribend = cbs2.onattribend;
    if (arg1 === obj.DoubleQuote) {
      Single = QuoteType.Double;
    } else {
      Single = QuoteType.Single;
    }
    onattribend(Single, self.index);
    self.state = obj2.BeforeAttributeName;
  }
  stateInAttributeValueDoubleQuotes(arg0) {
    const result = this.handleInAttributeValue(arg0, obj.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(arg0) {
    const result = this.handleInAttributeValue(arg0, obj.SingleQuote);
  }
  stateInAttributeValueNoQuotes(arg0) {
    const self = this;
    const tmp2 = arg0 === obj.Space || arg0 === obj.NewLine || arg0 === obj.Tab || arg0 === obj.FormFeed || arg0 === obj.CarriageReturn;
    if (!tmp2) {
      if (arg0 !== obj.Gt) {
        const tmp3 = self.decodeEntities && arg0 === obj.Amp;
        if (tmp3) {
          self.baseState = self.state;
          self.state = obj2.BeforeEntity;
        }
      }
    }
    const cbs = self.cbs;
    cbs.onattribdata(self.sectionStart, self.index);
    self.sectionStart = -1;
    const cbs2 = self.cbs;
    cbs2.onattribend(QuoteType.Unquoted, self.index);
    self.state = obj2.BeforeAttributeName;
    const result = self.stateBeforeAttributeName(arg0);
  }
  stateBeforeDeclaration(arg0) {
    const self = this;
    if (arg0 === obj.OpeningSquareBracket) {
      self.state = obj2.CDATASequence;
      self.sequenceIndex = 0;
    } else {
      let InDeclaration;
      if (arg0 === tmp.Dash) {
        InDeclaration = obj2.BeforeComment;
      } else {
        InDeclaration = obj2.InDeclaration;
      }
      self.state = InDeclaration;
    }
  }
  stateInDeclaration(arg0) {
    const self = this;
    const tmp2 = arg0 === obj.Gt || self.fastForwardTo(tmp.Gt);
    if (tmp2) {
      const cbs = self.cbs;
      cbs.ondeclaration(self.sectionStart, self.index);
      self.state = obj2.Text;
      self.sectionStart = self.index + 1;
    }
  }
  stateInProcessingInstruction(arg0) {
    const self = this;
    const tmp2 = arg0 === obj.Gt || self.fastForwardTo(tmp.Gt);
    if (tmp2) {
      const cbs = self.cbs;
      const result = cbs.onprocessinginstruction(self.sectionStart, self.index);
      self.state = obj2.Text;
      self.sectionStart = self.index + 1;
    }
  }
  stateBeforeComment(arg0) {
    const self = this;
    if (arg0 === obj.Dash) {
      self.state = obj2.InCommentLike;
      self.currentSequence = obj4.CommentEnd;
      self.sequenceIndex = 2;
      self.sectionStart = self.index + 1;
    } else {
      self.state = obj2.InDeclaration;
    }
  }
  stateInSpecialComment(arg0) {
    const self = this;
    const tmp2 = arg0 === obj.Gt || self.fastForwardTo(tmp.Gt);
    if (tmp2) {
      const cbs = self.cbs;
      cbs.oncomment(self.sectionStart, self.index, 0);
      self.state = obj2.Text;
      self.sectionStart = self.index + 1;
    }
  }
  stateBeforeSpecialS(arg0) {
    const self = this;
    if ((32 | arg0) === obj4.ScriptEnd[3]) {
      self.startSpecial(obj4.ScriptEnd, 4);
    } else if ((32 | arg0) === obj4.StyleEnd[3]) {
      self.startSpecial(obj4.StyleEnd, 4);
    } else {
      self.state = obj2.InTagName;
      self.stateInTagName(arg0);
    }
  }
  stateBeforeEntity(arg0) {
    obj = { entityExcess: 1, entityResult: 0 };
    if (arg0 === obj.Number) {
      obj.state = obj2.BeforeNumericEntity;
    } else if (arg0 !== tmp.Amp) {
      obj.trieIndex = 0;
      obj.trieCurrent = obj.entityTrie[0];
      obj.state = obj2.InNamedEntity;
      obj.stateInNamedEntity(arg0);
    }
  }
  stateInNamedEntity(arg0) {
    const self = this;
    this.entityExcess = this.entityExcess + 1;
    this.trieIndex = htmlDecodeTree.determineBranch(this.entityTrie, this.trieCurrent, this.trieIndex + 1, arg0);
    if (this.trieIndex < 0) {
      self.emitNamedEntity();
      self.index = +self.index - 1;
    } else {
      self.trieCurrent = self.entityTrie[self.trieIndex];
      const tmp9 = self.trieCurrent & htmlDecodeTree.BinTrieFlags.VALUE_LENGTH;
      if (tmp9) {
        const diff = (tmp9 >> 14) - 1;
        if (!self.allowLegacyEntity()) {
          if (arg0 !== obj.Semi) {
            self.trieIndex = self.trieIndex + diff;
          }
        }
        const sum = self.index - self.entityExcess + 1;
        if (sum > self.sectionStart) {
          self.emitPartial(self.sectionStart, sum);
        }
        self.entityResult = self.trieIndex;
        self.trieIndex = self.trieIndex + diff;
        self.entityExcess = 0;
        self.sectionStart = self.index + 1;
        if (0 === diff) {
          self.emitNamedEntity();
        }
      }
    }
  }
  emitNamedEntity() {
    const self = this;
    this.state = this.baseState;
    if (0 !== this.entityResult) {
      const tmp5 = (self.entityTrie[self.entityResult] & htmlDecodeTree.BinTrieFlags.VALUE_LENGTH) >> 14;
      const tmp3 = require;
      if (1 === tmp5) {
        self.emitCodePoint(self.entityTrie[self.entityResult] & ~tmp3(9389).BinTrieFlags.VALUE_LENGTH);
      } else if (2 === tmp5) {
        self.emitCodePoint(self.entityTrie[self.entityResult + 1]);
      } else if (3 === tmp5) {
        self.emitCodePoint(self.entityTrie[self.entityResult + 1]);
        self.emitCodePoint(self.entityTrie[self.entityResult + 2]);
      }
    }
  }
  stateBeforeNumericEntity(arg0) {
    const self = this;
    if ((32 | arg0) === obj.LowerX) {
      self.entityExcess = self.entityExcess + 1;
      self.state = obj2.InHexEntity;
    } else {
      self.state = obj2.InNumericEntity;
      self.stateInNumericEntity(arg0);
    }
  }
  emitNumericEntity(arg0) {
    const self = this;
    const diff = this.index - this.entityExcess - 1;
    if (diff + 2 + Number(this.state === obj2.InHexEntity) !== this.index) {
      if (diff > self.sectionStart) {
        self.emitPartial(self.sectionStart, diff);
      }
      const _Number = Number;
      self.sectionStart = self.index + Number(arg0);
      self.emitCodePoint(htmlDecodeTree.replaceCodePoint(self.entityResult));
    }
    self.state = self.baseState;
  }
  stateInNumericEntity(arg0) {
    const self = this;
    if (arg0 === obj.Semi) {
      self.emitNumericEntity(true);
    } else {
      const tmp2 = arg0 >= obj.Zero && arg0 <= obj.Nine;
      if (tmp2) {
        self.entityResult = 10 * self.entityResult + (arg0 - obj.Zero);
        self.entityExcess = self.entityExcess + 1;
      } else {
        if (self.allowLegacyEntity()) {
          self.emitNumericEntity(false);
        } else {
          self.state = self.baseState;
        }
        self.index = self.index - 1;
      }
    }
  }
  stateInHexEntity(arg0) {
    const self = this;
    if (arg0 === obj.Semi) {
      self.emitNumericEntity(true);
    } else {
      const tmp2 = arg0 >= obj.Zero && arg0 <= obj.Nine;
      if (tmp2) {
        self.entityResult = 16 * self.entityResult + (arg0 - obj.Zero);
        self.entityExcess = self.entityExcess + 1;
      } else {
        let tmp3 = arg0 >= tmp.UpperA && arg0 <= tmp.UpperF;
        if (!tmp3) {
          tmp3 = arg0 >= obj.LowerA && arg0 <= obj.LowerF;
        }
        if (tmp3) {
          self.entityResult = 16 * self.entityResult + ((32 | arg0) - obj.LowerA + 10);
          self.entityExcess = self.entityExcess + 1;
        } else {
          if (self.allowLegacyEntity()) {
            self.emitNumericEntity(false);
          } else {
            self.state = self.baseState;
          }
          self.index = self.index - 1;
        }
      }
    }
  }
  allowLegacyEntity() {
    const self = this;
    let tmp = !this.xmlMode;
    if (tmp) {
      tmp = self.baseState === obj2.Text || self.baseState === tmp2.InSpecialTag;
    }
    return tmp;
  }
  cleanup() {
    const self = this;
    const tmp = this.running && self.sectionStart !== self.index;
    if (tmp) {
      if (self.state !== obj2.Text) {
        const tmp3 = self.state !== obj2.InAttributeValueDq && self.state !== obj2.InAttributeValueSq && self.state !== obj2.InAttributeValueNq;
        if (!tmp3) {
          const cbs = self.cbs;
          cbs.onattribdata(self.sectionStart, self.index);
          self.sectionStart = self.index;
        }
      }
      const cbs2 = self.cbs;
      cbs2.ontext(self.sectionStart, self.index);
      self.sectionStart = self.index;
    }
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  parse() {
    const self = this;
    if (this.shouldContinue()) {
      do {
        let buffer = self.buffer;
        let charCodeAtResult = buffer.charCodeAt(self.index - self.offset);
        let state = self.state;
        let tmp2 = obj2;
        if (obj2.Text === state) {
          let stateTextResult = self.stateText(charCodeAtResult);
        } else if (tmp2.SpecialStartSequence === state) {
          let result = self.stateSpecialStartSequence(charCodeAtResult);
        } else if (tmp2.InSpecialTag === state) {
          let stateInSpecialTagResult = self.stateInSpecialTag(charCodeAtResult);
        } else if (tmp2.CDATASequence === state) {
          let stateCDATASequenceResult = self.stateCDATASequence(charCodeAtResult);
        } else if (tmp2.InAttributeValueDq === state) {
          let result1 = self.stateInAttributeValueDoubleQuotes(charCodeAtResult);
        } else if (tmp2.InAttributeName === state) {
          let stateInAttributeNameResult = self.stateInAttributeName(charCodeAtResult);
        } else if (tmp2.InCommentLike === state) {
          let stateInCommentLikeResult = self.stateInCommentLike(charCodeAtResult);
        } else if (tmp2.InSpecialComment === state) {
          let result2 = self.stateInSpecialComment(charCodeAtResult);
        } else if (tmp2.BeforeAttributeName === state) {
          let result3 = self.stateBeforeAttributeName(charCodeAtResult);
        } else if (tmp2.InTagName === state) {
          let stateInTagNameResult = self.stateInTagName(charCodeAtResult);
        } else if (tmp2.InClosingTagName === state) {
          let result4 = self.stateInClosingTagName(charCodeAtResult);
        } else if (tmp2.BeforeTagName === state) {
          let stateBeforeTagNameResult = self.stateBeforeTagName(charCodeAtResult);
        } else if (tmp2.AfterAttributeName === state) {
          let result5 = self.stateAfterAttributeName(charCodeAtResult);
        } else if (tmp2.InAttributeValueSq === state) {
          let result6 = self.stateInAttributeValueSingleQuotes(charCodeAtResult);
        } else if (tmp2.BeforeAttributeValue === state) {
          let result7 = self.stateBeforeAttributeValue(charCodeAtResult);
        } else if (tmp2.BeforeClosingTagName === state) {
          let result8 = self.stateBeforeClosingTagName(charCodeAtResult);
        } else if (tmp2.AfterClosingTagName === state) {
          let result9 = self.stateAfterClosingTagName(charCodeAtResult);
        } else if (tmp2.BeforeSpecialS === state) {
          let stateBeforeSpecialSResult = self.stateBeforeSpecialS(charCodeAtResult);
        } else if (tmp2.InAttributeValueNq === state) {
          let result10 = self.stateInAttributeValueNoQuotes(charCodeAtResult);
        } else if (tmp2.InSelfClosingTag === state) {
          let result11 = self.stateInSelfClosingTag(charCodeAtResult);
        } else if (tmp2.InDeclaration === state) {
          let stateInDeclarationResult = self.stateInDeclaration(charCodeAtResult);
        } else if (tmp2.BeforeDeclaration === state) {
          let result12 = self.stateBeforeDeclaration(charCodeAtResult);
        } else if (tmp2.BeforeComment === state) {
          let stateBeforeCommentResult = self.stateBeforeComment(charCodeAtResult);
        } else if (tmp2.InProcessingInstruction === state) {
          let result13 = self.stateInProcessingInstruction(charCodeAtResult);
        } else if (tmp2.InNamedEntity === state) {
          let stateInNamedEntityResult = self.stateInNamedEntity(charCodeAtResult);
        } else if (tmp2.BeforeEntity === state) {
          let stateBeforeEntityResult = self.stateBeforeEntity(charCodeAtResult);
        } else if (tmp2.InHexEntity === state) {
          let stateInHexEntityResult = self.stateInHexEntity(charCodeAtResult);
        } else if (tmp2.InNumericEntity === state) {
          let stateInNumericEntityResult = self.stateInNumericEntity(charCodeAtResult);
        } else {
          let result14 = self.stateBeforeNumericEntity(charCodeAtResult);
        }
        self.index = self.index + 1;
      } while (self.shouldContinue());
    }
    self.cleanup();
  }
  finish() {
    const self = this;
    if (this.state === obj2.InNamedEntity) {
      self.emitNamedEntity();
    }
    if (self.sectionStart < self.index) {
      self.handleTrailingData();
    }
    const cbs = self.cbs;
    cbs.onend();
  }
  handleTrailingData() {
    const self = this;
    const sum = this.buffer.length + this.offset;
    if (this.state === obj2.InCommentLike) {
      if (self.currentSequence === obj4.CdataEnd) {
        const cbs3 = self.cbs;
        cbs3.oncdata(self.sectionStart, sum, 0);
      } else {
        const cbs2 = self.cbs;
        cbs2.oncomment(self.sectionStart, sum, 0);
      }
    } else {
      if (self.state !== obj2.InNumericEntity) {
        const tmp3 = self.state === obj2.InTagName || self.state === obj2.BeforeAttributeName || self.state === obj2.BeforeAttributeValue || self.state === obj2.AfterAttributeName || self.state === obj2.InAttributeName || self.state === obj2.InAttributeValueSq || self.state === obj2.InAttributeValueDq || self.state === obj2.InAttributeValueNq || self.state === obj2.InClosingTagName;
        if (!tmp3) {
          const cbs = self.cbs;
          cbs.ontext(self.sectionStart, sum);
        }
      }
      self.emitNumericEntity(false);
    }
  }
  emitPartial(arg0, arg1) {
    const self = this;
    if (this.baseState !== obj2.Text) {
      if (self.baseState !== tmp.InSpecialTag) {
        const cbs2 = self.cbs;
        cbs2.onattribdata(arg0, arg1);
      }
    }
    const cbs = self.cbs;
    cbs.ontext(arg0, arg1);
  }
  emitCodePoint(arg0) {
    const self = this;
    if (this.baseState !== obj2.Text) {
      if (self.baseState !== tmp.InSpecialTag) {
        const cbs2 = self.cbs;
        cbs2.onattribentity(arg0);
      }
    }
    const cbs = self.cbs;
    cbs.ontextentity(arg0);
  }
}

export default Tokenizer;
