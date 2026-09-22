// Module ID: 13469
// Function ID: 13470
// Name: WhatYouLoseProfileTier1
// Dependencies: [19, 17, 21, 8349, 13470, 13471, 13472, 4488, 2]
// Exports: WhatYouLoseProfileTier1, getWhatYouLoseProfileTier1Source, useWhatYouLoseProfileTier1Source

// Module 13469 (WhatYouLoseProfileTier1)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_13470");
    },
    darker() {
      return require("module_13471");
    },
    light() {
      return require("module_13472");
    }
  });
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13470");
    },
    darker() {
      return require("module_13471");
    },
    light() {
      return require("module_13472");
    }
  });
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13470");
    },
    darker() {
      return require("module_13471");
    },
    light() {
      return require("module_13472");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
