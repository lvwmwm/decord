// Module ID: 12918
// Function ID: 12919
// Name: defaultRecognizer
// Dependencies: [12833]

// Module 12918 (defaultRecognizer)
import tokenize from "tokenize" /* 12833 */;

const Ident = tokenize.TYPE.Ident;
const String = tokenize.TYPE.String;
const Number = tokenize.TYPE.Number;
const Function = tokenize.TYPE.Function;
const Url = tokenize.TYPE.Url;
const Hash = tokenize.TYPE.Hash;
const Dimension = tokenize.TYPE.Dimension;
const Percentage = tokenize.TYPE.Percentage;
const LeftParenthesis = tokenize.TYPE.LeftParenthesis;
const LeftSquareBracket = tokenize.TYPE.LeftSquareBracket;
const Comma = tokenize.TYPE.Comma;
const Delim = tokenize.TYPE.Delim;

export default function defaultRecognizer(recognizer) {
  const self = this;
  const tokenType = this.scanner.tokenType;
  if (Hash === tokenType) {
    return self.Hash();
  } else if (Comma === tokenType) {
    recognizer.space = null;
    recognizer.ignoreWSAfter = true;
    return self.Operator();
  } else if (LeftParenthesis === tokenType) {
    return self.Parentheses(self.readSequence, recognizer.recognizer);
  } else if (LeftSquareBracket === tokenType) {
    return self.Brackets(self.readSequence, recognizer.recognizer);
  } else if (String === tokenType) {
    return self.String();
  } else if (Dimension === tokenType) {
    return self.Dimension();
  } else if (Percentage === tokenType) {
    return self.Percentage();
  } else if (Number === tokenType) {
    return self.Number();
  } else if (Function === tokenType) {
    let UrlResult;
    const obj3 = tokenize;
    if (obj3.cmpStr(self.scanner.source, self.scanner.tokenStart, self.scanner.tokenEnd, "url(")) {
      UrlResult = self.Url();
    } else {
      UrlResult = self.Function(self.readSequence, recognizer.recognizer);
    }
    return UrlResult;
  } else if (Url === tokenType) {
    return self.Url();
  } else if (Ident === tokenType) {
    const obj = tokenize;
    const tmp3 = require;
    if (obj.cmpChar(self.scanner.source, self.scanner.tokenStart, 117)) {
      let UnicodeRangeResult;
      const tmp3Result = tmp3(12833);
      if (tmp3Result.cmpChar(self.scanner.source, self.scanner.tokenStart + 1, 43)) {
        UnicodeRangeResult = self.UnicodeRange();
      }
      return UnicodeRangeResult;
    }
    UnicodeRangeResult = self.Identifier();
  } else if (Delim === tokenType) {
    const source = self.scanner.source;
    const charCodeAtResult = source.charCodeAt(self.scanner.tokenStart);
    if (47 !== charCodeAtResult) {
      if (42 !== charCodeAtResult) {
        if (43 !== charCodeAtResult) {
          if (45 !== charCodeAtResult) {
            if (35 === charCodeAtResult) {
              self.error("Hex or identifier is expected", self.scanner.tokenStart + 1);
            }
          }
        }
      }
    }
    return self.Operator();
  }
};
