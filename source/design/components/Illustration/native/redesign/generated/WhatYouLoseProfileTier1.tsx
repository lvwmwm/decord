// Module ID: 6480
// Function ID: 57995
// Name: getWhatYouLoseProfileTier1Source
// Dependencies: [31, 27, 33, 6481, 6482, 6483, 6484, 3977, 2]
// Exports: WhatYouLoseProfileTier1

// Module 6480 (getWhatYouLoseProfileTier1Source)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getWhatYouLoseProfileTier1Source(theme) {
  let obj = require(6481) /* getIllustrationSource */;
  obj = {
    dark() {
      return outer1_0(outer1_1[4]);
    },
    darker() {
      return outer1_0(outer1_1[5]);
    },
    light() {
      return outer1_0(outer1_1[6]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useWhatYouLoseProfileTier1Source() {
  return getWhatYouLoseProfileTier1Source(require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export { getWhatYouLoseProfileTier1Source };
export { useWhatYouLoseProfileTier1Source };
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useWhatYouLoseProfileTier1Source();
  return <Image />;
};
