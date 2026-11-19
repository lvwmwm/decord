// Module ID: 8067
// Function ID: 8068
// Name: NoResults
// Dependencies: [19, 21, 7667, 8068, 8069, 8070, 4799, 5479, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8067 (NoResults)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4799 */;
import FastImageDefault from "FastImage" /* 5479 */;
import _mod7667 from "module_7667" /* 7667 */;
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
  const obj = _mod7667;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useNoResultsSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7667;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function NoResults(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod7667;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
