// Module ID: 13677
// Function ID: 13678
// Name: WhatYouLoseProfileTier1
// Dependencies: [19, 17, 21, 8534, 13678, 13679, 13680, 4639, 2]
// Exports: WhatYouLoseProfileTier1, getWhatYouLoseProfileTier1Source, useWhatYouLoseProfileTier1Source

// Module 13677 (WhatYouLoseProfileTier1)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_13678");
    },
    darker() {
      return require("module_13679");
    },
    light() {
      return require("module_13680");
    }
  });
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13678");
    },
    darker() {
      return require("module_13679");
    },
    light() {
      return require("module_13680");
    }
  });
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13678");
    },
    darker() {
      return require("module_13679");
    },
    light() {
      return require("module_13680");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
