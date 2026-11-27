// Module ID: 6891
// Function ID: 6892
// Name: EmojiTermsImporter
// Dependencies: [5, 1116, 6892, 6893, 6894, 6895, 6896, 6897, 6898, 6899, 6900, 6901, 6902, 6903, 6904, 6905, 6906, 6907, 6908, 6909, 6910, 6911, 6912, 6913, 6914, 6915, 6916, 6917, 6918, 6919, 6920, 2]

// Module 6891 (EmojiTermsImporter)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import "AssetRegistry";
import AssetRegistry_mod from "AssetRegistry" /* 6920 */;
import size from "module_2" /* 2 */;

let c2, c3;

const f90577 = async (arg0, value) => {
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
let obj = { bg: _asyncToGenerator(f90577), cs: _asyncToGenerator(f90577), da: _asyncToGenerator(f90577), de: _asyncToGenerator(f90577), el: _asyncToGenerator(f90577), "en-US": _asyncToGenerator(f90577), "es-ES": _asyncToGenerator(f90577), "es-419": _asyncToGenerator(f90577), fi: _asyncToGenerator(f90577), fr: _asyncToGenerator(f90577), hr: _asyncToGenerator(f90577), hu: _asyncToGenerator(f90577), it: _asyncToGenerator(f90577), ja: _asyncToGenerator(f90577), ko: _asyncToGenerator(f90577), lt: _asyncToGenerator(f90577), nl: _asyncToGenerator(f90577), no: _asyncToGenerator(f90577), pl: _asyncToGenerator(f90577), "pt-BR": _asyncToGenerator(f90577), ro: _asyncToGenerator(f90577), ru: _asyncToGenerator(f90577), "sv-SE": _asyncToGenerator(f90577), th: _asyncToGenerator(f90577), tr: _asyncToGenerator(f90577), uk: _asyncToGenerator(f90577), vi: _asyncToGenerator(f90577), "zh-CN": _asyncToGenerator(f90577), hi: _asyncToGenerator(f90577) };
let AssetRegistry = AssetRegistry_mod;
const result = size.fileFinishedImporting("modules/emoji_terms/EmojiTermsImporter.native.js");

export const emojiTermsImporter = obj;
