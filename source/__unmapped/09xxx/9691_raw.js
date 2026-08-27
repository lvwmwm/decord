// Module ID: 9691
// Function ID: 9692
// Name: raw
// Dependencies: []

// Module 9691 (raw)
let closure_1 = raw(HermesBuiltin.getTemplateObject(false, "\\p{Emoji}(?:\\p{EMod}|[\\u{E0020}-\\u{E007E}]+\\u{E007F}|\\uFE0F?\\u20E3?)", "p{Emoji}(?:p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)"));

export default () => {
  const regExp = new RegExp(raw(HermesBuiltin.getTemplateObject(false, "\\p{RI}{2}|(?![#*\\d](?!\\uFE0F?\\u20E3))", "(?:\\u200D", ")*", "p{RI}{2}|(?![#*d](?!\uFE0F?\u20E3))", "(?:\u200D", ")*"), closure_1, closure_1), "gu");
  return regExp;
};
