// Module ID: 4925
// Function ID: 4926
// Name: useBadgeTextVariant
// Dependencies: [558, 4926, 2]

// Module 4925 (useBadgeTextVariant)
import ThemeContext from "ThemeContext" /* 4926 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBadgeTextVariant() {
  const obj = ThemeContext;
  const themeContext = obj.useThemeContext();
  let enabledExperiments;
  if (themeContext != null) {
    enabledExperiments = themeContext.enabledExperiments;
  }
  let hasItem;
  if (enabledExperiments != null) {
    hasItem = enabledExperiments.includes("mana-type-consolidation");
  }
  let str2 = "eyebrow";
  if (true === hasItem) {
    str2 = "experimental/body-xs/semibold";
  }
  return str2;
}) : (function useBadgeTextVariant() {
  const obj = ThemeContext;
  const themeContext = obj.useThemeContext();
  let enabledExperiments;
  if (themeContext != null) {
    enabledExperiments = themeContext.enabledExperiments;
  }
  let hasItem;
  if (enabledExperiments != null) {
    hasItem = enabledExperiments.includes("mana-type-consolidation");
  }
  let str2 = "eyebrow";
  if (true === hasItem) {
    str2 = "experimental/body-xs/semibold";
  }
  return str2;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useBadgeTextVariant.native.tsx");

export const useBadgeTextVariant = tmp2;
