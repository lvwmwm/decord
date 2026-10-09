// Module ID: 6004
// Function ID: 6005
// Name: EmojiTermsImporter
// Dependencies: [6005, 2000, 6006, 6007, 6008, 6009, 6010, 6011, 6012, 6013, 6014, 6015, 6016, 6017, 6018, 6019, 6020, 6021, 6022, 6023, 6024, 6025, 6026, 6027, 6028, 6029, 6030, 6031, 6032, 6033, 2]

// Module 6004 (EmojiTermsImporter)
import asyncRequire from "asyncRequire" /* 2000 */;
import size from "module_2" /* 2 */;

const obj = {
  bg() {
    return asyncRequire(6005, dependencyMap.paths);
  },
  cs() {
    return asyncRequire(6006, dependencyMap.paths);
  },
  da() {
    return asyncRequire(6007, dependencyMap.paths);
  },
  de() {
    return asyncRequire(6008, dependencyMap.paths);
  },
  el() {
    return asyncRequire(6009, dependencyMap.paths);
  },
  "en-US": () => asyncRequire(6010, dependencyMap.paths),
  "es-ES": () => asyncRequire(6011, dependencyMap.paths),
  "es-419": () => asyncRequire(6012, dependencyMap.paths),
  fi() {
    return asyncRequire(6013, dependencyMap.paths);
  },
  fr() {
    return asyncRequire(6014, dependencyMap.paths);
  },
  hr() {
    return asyncRequire(6015, dependencyMap.paths);
  },
  hu() {
    return asyncRequire(6016, dependencyMap.paths);
  },
  it() {
    return asyncRequire(6017, dependencyMap.paths);
  },
  ja() {
    return asyncRequire(6018, dependencyMap.paths);
  },
  ko() {
    return asyncRequire(6019, dependencyMap.paths);
  },
  lt() {
    return asyncRequire(6020, dependencyMap.paths);
  },
  nl() {
    return asyncRequire(6021, dependencyMap.paths);
  },
  no() {
    return asyncRequire(6022, dependencyMap.paths);
  },
  pl() {
    return asyncRequire(6023, dependencyMap.paths);
  },
  "pt-BR": () => asyncRequire(6024, dependencyMap.paths),
  ro() {
    return asyncRequire(6025, dependencyMap.paths);
  },
  ru() {
    return asyncRequire(6026, dependencyMap.paths);
  },
  "sv-SE": () => asyncRequire(6027, dependencyMap.paths),
  th() {
    return asyncRequire(6028, dependencyMap.paths);
  },
  tr() {
    return asyncRequire(6029, dependencyMap.paths);
  },
  uk() {
    return asyncRequire(6030, dependencyMap.paths);
  },
  vi() {
    return asyncRequire(6031, dependencyMap.paths);
  },
  "zh-CN": () => asyncRequire(6032, dependencyMap.paths),
  hi() {
    return asyncRequire(6033, dependencyMap.paths);
  }
};
const result = size.fileFinishedImporting("modules/emoji_terms/EmojiTermsImporter.js");

export const emojiTermsImporter = obj;
