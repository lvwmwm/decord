// Module ID: 15261
// Function ID: 15262
// Name: WhatYouLoseProfileTier1
// Dependencies: [19, 21, 8806, 15262, 15263, 15264, 5021, 5717, 2]
// Exports: WhatYouLoseProfileTier1, getWhatYouLoseProfileTier1Source, useWhatYouLoseProfileTier1Source

// Module 15261 (WhatYouLoseProfileTier1)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5021 */;
import FastImageDefault from "FastImage" /* 5717 */;
import _mod8806 from "module_8806" /* 8806 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function dark() {
  return require("AssetRegistry");
}
function darker() {
  return require("AssetRegistry");
}
function light() {
  return require("AssetRegistry");
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export function getWhatYouLoseProfileTier1Source(theme) {
  const obj = _mod8806;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8806;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function WhatYouLoseProfileTier1(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8806;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
