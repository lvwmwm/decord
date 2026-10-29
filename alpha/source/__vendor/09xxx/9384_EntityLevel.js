// Module ID: 9384
// Function ID: 9385
// Name: EntityLevel
// Dependencies: [9374, 9385, 9386]
// Exports: decode, decodeStrict, encode

// Module 9384 (EntityLevel)
const require = globalThis.__r;

let EntityLevel = exports.EntityLevel;
if (!EntityLevel) {
  let obj = {};
  exports.EntityLevel = obj;
  EntityLevel = obj;
}
EntityLevel.XML = 0;
EntityLevel[0] = "XML";
EntityLevel.HTML = 1;
EntityLevel[1] = "HTML";
let EncodingMode = exports.EncodingMode;
if (!EncodingMode) {
  const obj2 = {};
  exports.EncodingMode = obj2;
  EncodingMode = obj2;
}
EncodingMode.UTF8 = 0;
EncodingMode[0] = "UTF8";
EncodingMode.ASCII = 1;
EncodingMode[1] = "ASCII";
EncodingMode.Extensive = 2;
EncodingMode[2] = "Extensive";
EncodingMode.Attribute = 3;
EncodingMode[3] = "Attribute";
EncodingMode.Text = 4;
EncodingMode[4] = "Text";

export function decode(arr, arg1) {
  let XML = arg1;
  if (undefined === arg1) {
    XML = EntityLevel.XML;
  }
  let level = XML;
  if (typeof XML !== "number") {
    level = XML.level;
  }
  if (level === EntityLevel.HTML) {
    let mode;
    if (typeof XML === "object") {
      mode = XML.mode;
    }
    return require("htmlDecodeTree").decodeHTML(arr, mode);
  } else {
    return require("htmlDecodeTree").decodeXML(arr);
  }
}
export function decodeStrict(arr, arg1) {
  let decodeHTMLResult;
  let XML = arg1;
  if (undefined === arg1) {
    XML = EntityLevel.XML;
  }
  let XML2 = XML;
  if (typeof XML === "number") {
    XML2 = { level: XML };
    const obj = { level: XML };
  }
  const mode = XML2.mode;
  const tmp2 = null !== mode && undefined !== mode;
  if (!tmp2) {
    XML2.mode = require("htmlDecodeTree").DecodingMode.Strict;
  }
  if (undefined === XML2) {
    XML2 = EntityLevel.XML;
  }
  let level = XML2;
  if (typeof XML2 !== "number") {
    level = XML2.level;
  }
  if (level === EntityLevel.HTML) {
    let mode1;
    if (typeof XML2 === "object") {
      mode1 = XML2.mode;
    }
    decodeHTMLResult = require("htmlDecodeTree").decodeHTML(arr, mode1);
  } else {
    decodeHTMLResult = require("htmlDecodeTree").decodeXML(arr);
  }
  return decodeHTMLResult;
}
export function encode(attribs, arg1) {
  let escapeUTF8Result;
  let XML = arg1;
  if (undefined === arg1) {
    XML = EntityLevel.XML;
  }
  let tmp2 = XML;
  if (typeof XML === "number") {
    tmp2 = { level: XML };
    const obj = { level: XML };
  }
  if (tmp2.mode === EncodingMode.UTF8) {
    escapeUTF8Result = require("xmlReplacer").escapeUTF8(attribs);
  } else if (tmp2.mode === EncodingMode.Attribute) {
    escapeUTF8Result = require("xmlReplacer").escapeAttribute(attribs);
  } else if (tmp2.mode === EncodingMode.Text) {
    escapeUTF8Result = require("xmlReplacer").escapeText(attribs);
  } else if (tmp2.level === EntityLevel.HTML) {
    let encodeNonAsciiHTMLResult;
    if (tmp2.mode === EncodingMode.ASCII) {
      encodeNonAsciiHTMLResult = require("encodeHTML").encodeNonAsciiHTML(attribs);
    } else {
      encodeNonAsciiHTMLResult = require("encodeHTML").encodeHTML(attribs);
    }
    escapeUTF8Result = encodeNonAsciiHTMLResult;
  } else {
    escapeUTF8Result = require("xmlReplacer").encodeXML(attribs);
  }
  return escapeUTF8Result;
}
export const encodeXML = require("xmlReplacer").encodeXML;
export const escape = require("xmlReplacer").escape;
export const escapeUTF8 = require("xmlReplacer").escapeUTF8;
export const escapeAttribute = require("xmlReplacer").escapeAttribute;
export const escapeText = require("xmlReplacer").escapeText;
export const encodeHTML = require("encodeHTML").encodeHTML;
export const encodeNonAsciiHTML = require("encodeHTML").encodeNonAsciiHTML;
export const encodeHTML4 = require("encodeHTML").encodeHTML;
export const encodeHTML5 = require("encodeHTML").encodeHTML;
export const EntityDecoder = require("htmlDecodeTree").EntityDecoder;
export const DecodingMode = require("htmlDecodeTree").DecodingMode;
export const decodeXML = require("htmlDecodeTree").decodeXML;
export const decodeHTML = require("htmlDecodeTree").decodeHTML;
export const decodeHTMLStrict = require("htmlDecodeTree").decodeHTMLStrict;
export const decodeHTMLAttribute = require("htmlDecodeTree").decodeHTMLAttribute;
export const decodeHTML4 = require("htmlDecodeTree").decodeHTML;
export const decodeHTML5 = require("htmlDecodeTree").decodeHTML;
export const decodeHTML4Strict = require("htmlDecodeTree").decodeHTMLStrict;
export const decodeHTML5Strict = require("htmlDecodeTree").decodeHTMLStrict;
export const decodeXMLStrict = require("htmlDecodeTree").decodeXML;
