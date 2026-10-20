// Module ID: 4701
// Function ID: 4702
// Name: formatjs
// Dependencies: [4702, 2002, 4703, 4704, 4705, 4706, 4707, 4708, 4709, 4710, 4711, 4712, 4713, 4714, 4715, 4716, 4717, 4718, 4719, 4720, 4721, 4722, 4723, 4724, 4725, 4726, 4727, 4728, 4729, 4730, 4731, 2]

// Module 4701 (formatjs)
import asyncRequire from "asyncRequire" /* 2002 */;
import size from "module_2" /* 2 */;

const obj = {
  bg() {
    return asyncRequire(4702, dependencyMap.paths);
  },
  cs() {
    return asyncRequire(4703, dependencyMap.paths);
  },
  da() {
    return asyncRequire(4704, dependencyMap.paths);
  },
  de() {
    return asyncRequire(4705, dependencyMap.paths);
  },
  el() {
    return asyncRequire(4706, dependencyMap.paths);
  },
  "en-GB": () => asyncRequire(4707, dependencyMap.paths),
  "en-US": () => asyncRequire(4708, dependencyMap.paths),
  "es-ES": () => asyncRequire(4709, dependencyMap.paths),
  "es-419": () => asyncRequire(4709, dependencyMap.paths),
  fi() {
    return asyncRequire(4710, dependencyMap.paths);
  },
  fr() {
    return asyncRequire(4711, dependencyMap.paths);
  },
  hr() {
    return asyncRequire(4712, dependencyMap.paths);
  },
  hu() {
    return asyncRequire(4713, dependencyMap.paths);
  },
  it() {
    return asyncRequire(4714, dependencyMap.paths);
  },
  ja() {
    return asyncRequire(4715, dependencyMap.paths);
  },
  ko() {
    return asyncRequire(4716, dependencyMap.paths);
  },
  lt() {
    return asyncRequire(4717, dependencyMap.paths);
  },
  nl() {
    return asyncRequire(4718, dependencyMap.paths);
  },
  no() {
    return asyncRequire(4719, dependencyMap.paths);
  },
  pl() {
    return asyncRequire(4720, dependencyMap.paths);
  },
  "pt-BR": () => asyncRequire(4721, dependencyMap.paths),
  ro() {
    return asyncRequire(4722, dependencyMap.paths);
  },
  ru() {
    return asyncRequire(4723, dependencyMap.paths);
  },
  "sv-SE": () => asyncRequire(4724, dependencyMap.paths),
  th() {
    return asyncRequire(4725, dependencyMap.paths);
  },
  tr() {
    return asyncRequire(4726, dependencyMap.paths);
  },
  uk() {
    return asyncRequire(4727, dependencyMap.paths);
  },
  vi() {
    return asyncRequire(4728, dependencyMap.paths);
  },
  "zh-CN": () => asyncRequire(4729, dependencyMap.paths),
  "zh-TW": () => asyncRequire(4730, dependencyMap.paths),
  hi() {
    return asyncRequire(4731, dependencyMap.paths);
  }
};
const result = size.fileFinishedImporting("intl/locale-data/formatjs.tsx");

export const formatjsLocales = obj;
