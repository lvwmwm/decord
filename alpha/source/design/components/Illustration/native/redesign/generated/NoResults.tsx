// Module ID: 8066
// Function ID: 8067
// Name: NoResults
// Dependencies: [19, 21, 7666, 8067, 8068, 8069, 4801, 5481, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8066 (NoResults)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4801 */;
import FastImageDefault from "FastImage" /* 5481 */;
import _mod7666 from "module_7666" /* 7666 */;
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
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export function getNoResultsSource(theme) {
  const obj = _mod7666;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useNoResultsSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7666;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function NoResults(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7666;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
