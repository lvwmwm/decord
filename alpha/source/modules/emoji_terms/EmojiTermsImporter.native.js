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

const f90086 = async (arg0, value) => {
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
let obj = { bg: _asyncToGenerator(f90086), cs: _asyncToGenerator(f90086), da: _asyncToGenerator(f90086), de: _asyncToGenerator(f90086), el: _asyncToGenerator(f90086), "en-US": _asyncToGenerator(f90086), "es-ES": _asyncToGenerator(f90086), "es-419": _asyncToGenerator(f90086), fi: _asyncToGenerator(f90086), fr: _asyncToGenerator(f90086), hr: _asyncToGenerator(f90086), hu: _asyncToGenerator(f90086), it: _asyncToGenerator(f90086), ja: _asyncToGenerator(f90086), ko: _asyncToGenerator(f90086), lt: _asyncToGenerator(f90086), nl: _asyncToGenerator(f90086), no: _asyncToGenerator(f90086), pl: _asyncToGenerator(f90086), "pt-BR": _asyncToGenerator(f90086), ro: _asyncToGenerator(f90086), ru: _asyncToGenerator(f90086), "sv-SE": _asyncToGenerator(f90086), th: _asyncToGenerator(f90086), tr: _asyncToGenerator(f90086), uk: _asyncToGenerator(f90086), vi: _asyncToGenerator(f90086), "zh-CN": _asyncToGenerator(f90086), hi: _asyncToGenerator(f90086) };
let AssetRegistry = AssetRegistry_mod;
const result = size.fileFinishedImporting("modules/emoji_terms/EmojiTermsImporter.native.js");

export const emojiTermsImporter = obj;
