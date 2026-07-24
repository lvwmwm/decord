// Module ID: 7404
// Function ID: 59576
// Name: getWhatYouLoseProfileTier1Source
// Dependencies: [31, 27, 33, 7405, 7406, 7407, 7408, 3976, 2]
// Exports: WhatYouLoseProfileTier1

// Module 7404 (getWhatYouLoseProfileTier1Source)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getWhatYouLoseProfileTier1Source(theme) {
  let obj = require(7405) /* getIllustrationSource */;
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
  return getWhatYouLoseProfileTier1Source(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
