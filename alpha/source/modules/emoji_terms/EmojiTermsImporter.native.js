// Module ID: 6860
// Function ID: 6861
// Name: EmojiTermsImporter
// Dependencies: [5, 1116, 6861, 6862, 6863, 6864, 6865, 6866, 6867, 6868, 6869, 6870, 6871, 6872, 6873, 6874, 6875, 6876, 6877, 6878, 6879, 6880, 6881, 6882, 6883, 6884, 6885, 6886, 6887, 6888, 6889, 2]

// Module 6860 (EmojiTermsImporter)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import "AssetRegistry";
import AssetRegistry_mod from "AssetRegistry" /* 6889 */;
import size from "module_2" /* 2 */;

let c2, c3;

const f90107 = async (arg0, value) => {
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
let obj = { bg: _asyncToGenerator(f90107), cs: _asyncToGenerator(f90107), da: _asyncToGenerator(f90107), de: _asyncToGenerator(f90107), el: _asyncToGenerator(f90107), "en-US": _asyncToGenerator(f90107), "es-ES": _asyncToGenerator(f90107), "es-419": _asyncToGenerator(f90107), fi: _asyncToGenerator(f90107), fr: _asyncToGenerator(f90107), hr: _asyncToGenerator(f90107), hu: _asyncToGenerator(f90107), it: _asyncToGenerator(f90107), ja: _asyncToGenerator(f90107), ko: _asyncToGenerator(f90107), lt: _asyncToGenerator(f90107), nl: _asyncToGenerator(f90107), no: _asyncToGenerator(f90107), pl: _asyncToGenerator(f90107), "pt-BR": _asyncToGenerator(f90107), ro: _asyncToGenerator(f90107), ru: _asyncToGenerator(f90107), "sv-SE": _asyncToGenerator(f90107), th: _asyncToGenerator(f90107), tr: _asyncToGenerator(f90107), uk: _asyncToGenerator(f90107), vi: _asyncToGenerator(f90107), "zh-CN": _asyncToGenerator(f90107), hi: _asyncToGenerator(f90107) };
let AssetRegistry = AssetRegistry_mod;
const result = size.fileFinishedImporting("modules/emoji_terms/EmojiTermsImporter.native.js");

export const emojiTermsImporter = obj;
