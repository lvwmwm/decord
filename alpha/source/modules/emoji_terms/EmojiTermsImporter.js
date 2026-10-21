// Module ID: 6712
// Function ID: 6713
// Name: EmojiTermsImporter
// Dependencies: [6713, 2002, 6714, 6715, 6716, 6717, 6718, 6719, 6720, 6721, 6722, 6723, 6724, 6725, 6726, 6727, 6728, 6729, 6730, 6731, 6732, 6733, 6734, 6735, 6736, 6737, 6738, 6739, 6740, 6741, 2]

// Module 6712 (EmojiTermsImporter)
import asyncRequire from "asyncRequire" /* 2002 */;
import size from "module_2" /* 2 */;

const obj = {
  bg() {
    return asyncRequire(6713, dependencyMap.paths);
  },
  cs() {
    return asyncRequire(6714, dependencyMap.paths);
  },
  da() {
    return asyncRequire(6715, dependencyMap.paths);
  },
  de() {
    return asyncRequire(6716, dependencyMap.paths);
  },
  el() {
    return asyncRequire(6717, dependencyMap.paths);
  },
  "en-US": () => asyncRequire(6718, dependencyMap.paths),
  "es-ES": () => asyncRequire(6719, dependencyMap.paths),
  "es-419": () => asyncRequire(6720, dependencyMap.paths),
  fi() {
    return asyncRequire(6721, dependencyMap.paths);
  },
  fr() {
    return asyncRequire(6722, dependencyMap.paths);
  },
  hr() {
    return asyncRequire(6723, dependencyMap.paths);
  },
  hu() {
    return asyncRequire(6724, dependencyMap.paths);
  },
  it() {
    return asyncRequire(6725, dependencyMap.paths);
  },
  ja() {
    return asyncRequire(6726, dependencyMap.paths);
  },
  ko() {
    return asyncRequire(6727, dependencyMap.paths);
  },
  lt() {
    return asyncRequire(6728, dependencyMap.paths);
  },
  nl() {
    return asyncRequire(6729, dependencyMap.paths);
  },
  no() {
    return asyncRequire(6730, dependencyMap.paths);
  },
  pl() {
    return asyncRequire(6731, dependencyMap.paths);
  },
  "pt-BR": () => asyncRequire(6732, dependencyMap.paths),
  ro() {
    return asyncRequire(6733, dependencyMap.paths);
  },
  ru() {
    return asyncRequire(6734, dependencyMap.paths);
  },
  "sv-SE": () => asyncRequire(6735, dependencyMap.paths),
  th() {
    return asyncRequire(6736, dependencyMap.paths);
  },
  tr() {
    return asyncRequire(6737, dependencyMap.paths);
  },
  uk() {
    return asyncRequire(6738, dependencyMap.paths);
  },
  vi() {
    return asyncRequire(6739, dependencyMap.paths);
  },
  "zh-CN": () => asyncRequire(6740, dependencyMap.paths),
  hi() {
    return asyncRequire(6741, dependencyMap.paths);
  }
};
const result = size.fileFinishedImporting("modules/emoji_terms/EmojiTermsImporter.js");

export const emojiTermsImporter = obj;
