// Module ID: 5208
// Function ID: 5209
// Name: useBadgeTextVariant
// Dependencies: [5158, 2]
// Exports: useBadgeTextVariant

// Module 5208 (useBadgeTextVariant)
import ThemeContext from "ThemeContext" /* 5158 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useBadgeTextVariant.native.tsx");

export function useBadgeTextVariant() {
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
    str2 = "body-xs/semibold";
  }
  return str2;
}
