// Module ID: 6581
// Function ID: 6582
// Name: EmojiTermsImporter
// Dependencies: [5, 1116, 6582, 6583, 6584, 6585, 6586, 6587, 6588, 6589, 6590, 6591, 6592, 6593, 6594, 6595, 6596, 6597, 6598, 6599, 6600, 6601, 6602, 6603, 6604, 6605, 6606, 6607, 6608, 6609, 6610, 2]

// Module 6581 (EmojiTermsImporter)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import "AssetRegistry";
import AssetRegistry_mod from "AssetRegistry" /* 6610 */;
import size from "module_2" /* 2 */;

let c2, c3;

const f89344 = async (arg0, value) => {
  let closure_0;
  let obj3;
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          value = {};
          c2 = 1;
          c3 = 1;
          const obj5 = { value: obj3.loadJsonAsset(AssetRegistry), done: false };
          obj3 = AssetRegistry(value[1]);
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        AssetRegistry = value;
        if (value == null) {
          AssetRegistry = {};
        }
        value.default = AssetRegistry;
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp11) {
      c3 = 3;
      throw tmp11;
    }
  }
};
let obj = { bg: _asyncToGenerator(f89344), cs: _asyncToGenerator(f89344), da: _asyncToGenerator(f89344), de: _asyncToGenerator(f89344), el: _asyncToGenerator(f89344), "en-US": _asyncToGenerator(f89344), "es-ES": _asyncToGenerator(f89344), "es-419": _asyncToGenerator(f89344), fi: _asyncToGenerator(f89344), fr: _asyncToGenerator(f89344), hr: _asyncToGenerator(f89344), hu: _asyncToGenerator(f89344), it: _asyncToGenerator(f89344), ja: _asyncToGenerator(f89344), ko: _asyncToGenerator(f89344), lt: _asyncToGenerator(f89344), nl: _asyncToGenerator(f89344), no: _asyncToGenerator(f89344), pl: _asyncToGenerator(f89344), "pt-BR": _asyncToGenerator(f89344), ro: _asyncToGenerator(f89344), ru: _asyncToGenerator(f89344), "sv-SE": _asyncToGenerator(f89344), th: _asyncToGenerator(f89344), tr: _asyncToGenerator(f89344), uk: _asyncToGenerator(f89344), vi: _asyncToGenerator(f89344), "zh-CN": _asyncToGenerator(f89344), hi: _asyncToGenerator(f89344) };
let AssetRegistry = AssetRegistry_mod;
const result = size.fileFinishedImporting("modules/emoji_terms/EmojiTermsImporter.native.js");

export const emojiTermsImporter = obj;
