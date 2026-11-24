// Module ID: 6765
// Function ID: 6766
// Name: EmojiTermsImporter
// Dependencies: [5, 1116, 6766, 6767, 6768, 6769, 6770, 6771, 6772, 6773, 6774, 6775, 6776, 6777, 6778, 6779, 6780, 6781, 6782, 6783, 6784, 6785, 6786, 6787, 6788, 6789, 6790, 6791, 6792, 6793, 6794, 2]

// Module 6765 (EmojiTermsImporter)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import "AssetRegistry";
import AssetRegistry_mod from "AssetRegistry" /* 6794 */;
import size from "module_2" /* 2 */;

let c2, c3;

const f89747 = async (arg0, value) => {
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
let obj = { bg: _asyncToGenerator(f89747), cs: _asyncToGenerator(f89747), da: _asyncToGenerator(f89747), de: _asyncToGenerator(f89747), el: _asyncToGenerator(f89747), "en-US": _asyncToGenerator(f89747), "es-ES": _asyncToGenerator(f89747), "es-419": _asyncToGenerator(f89747), fi: _asyncToGenerator(f89747), fr: _asyncToGenerator(f89747), hr: _asyncToGenerator(f89747), hu: _asyncToGenerator(f89747), it: _asyncToGenerator(f89747), ja: _asyncToGenerator(f89747), ko: _asyncToGenerator(f89747), lt: _asyncToGenerator(f89747), nl: _asyncToGenerator(f89747), no: _asyncToGenerator(f89747), pl: _asyncToGenerator(f89747), "pt-BR": _asyncToGenerator(f89747), ro: _asyncToGenerator(f89747), ru: _asyncToGenerator(f89747), "sv-SE": _asyncToGenerator(f89747), th: _asyncToGenerator(f89747), tr: _asyncToGenerator(f89747), uk: _asyncToGenerator(f89747), vi: _asyncToGenerator(f89747), "zh-CN": _asyncToGenerator(f89747), hi: _asyncToGenerator(f89747) };
let AssetRegistry = AssetRegistry_mod;
const result = size.fileFinishedImporting("modules/emoji_terms/EmojiTermsImporter.native.js");

export const emojiTermsImporter = obj;
