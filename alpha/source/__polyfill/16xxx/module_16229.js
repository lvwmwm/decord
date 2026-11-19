// Module ID: 16229
// Function ID: 16230
// Dependencies: []

// Module 16229
const f68502 = (acc, item) => {
  acc[obj[item]] = item;
  return acc;
};
const TYPE = { EOF: 0, Ident: 1, Function: 2, AtKeyword: 3, Hash: 4, String: 5, BadString: 6, Url: 7, BadUrl: 8, Delim: 9, Number: 10, Percentage: 11, Dimension: 12, WhiteSpace: 13, CDO: 14, CDC: 15, Colon: 16, Semicolon: 17, Comma: 18, LeftSquareBracket: 19, RightSquareBracket: 20, LeftParenthesis: 21, RightParenthesis: 22, LeftCurlyBracket: 23, RightCurlyBracket: 24, Comment: 25 };
const keys = Object.keys(TYPE);
({ TYPE, NAME: keys.reduce(f68502, {}) });

export default { TYPE, NAME: keys.reduce(f68502, {}) };
