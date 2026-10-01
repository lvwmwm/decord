// Module ID: 4555
// Function ID: 4556
// Name: ThemeContextProvider
// Dependencies: [19, 21, 4547, 2]
// Exports: ThemeContextProvider

// Module 4555 (ThemeContextProvider)
import Fragment from "Fragment" /* 21 */;
import ThemeContext from "ThemeContext" /* 4547 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextProvider.tsx");

export const ThemeContextProvider = function ThemeContextProvider(theme) {
  theme = theme.theme;
  let primaryColor = theme.primaryColor;
  let secondaryColor = theme.secondaryColor;
  let gradient = theme.gradient;
  let flags = theme.flags;
  let contrast = theme.contrast;
  let saturation = theme.saturation;
  let enabledExperiments = theme.enabledExperiments;
  let density = theme.density;
  let disableAdaptiveTheme = theme.disableAdaptiveTheme;
  let reduceAdaptiveTheme = theme.reduceAdaptiveTheme;
  const children = theme.children;
  const context = secondaryColor.useContext(theme(primaryColor[2]).ThemeContext);
  const FALLBACK_THEME_CONTEXT_VALUE = theme(primaryColor[2]).FALLBACK_THEME_CONTEXT_VALUE;
  const items = [theme, , , , , , , , , , , , , , , , , , , , , ];
  ({ theme: arr[1], primaryColor: arr[2], secondaryColor: arr[3], gradient: arr[4], flags: arr[5], contrast: arr[6], saturation: arr[7], enabledExperiments: arr[8], density: arr[9], disableAdaptiveTheme: arr[10], reduceAdaptiveTheme: arr[11] } = context);
  items[12] = primaryColor;
  items[13] = secondaryColor;
  items[14] = gradient;
  items[15] = flags;
  items[16] = contrast;
  items[17] = saturation;
  items[18] = enabledExperiments;
  items[19] = density;
  items[20] = disableAdaptiveTheme;
  items[21] = reduceAdaptiveTheme;
  const value = secondaryColor.useMemo(() => {
    const createThemedContext = ThemeContext.createThemedContext;
    ThemeContext;
    if (theme == null) {
      theme = context.theme;
    }
    const obj = { theme, primaryColor, secondaryColor, gradient, flags, contrast, saturation, enabledExperiments, density, disableAdaptiveTheme, reduceAdaptiveTheme };
    if (primaryColor == null) {
      primaryColor = context.primaryColor;
    }
    if (secondaryColor == null) {
      secondaryColor = context.secondaryColor;
    }
    if (gradient == null) {
      gradient = context.gradient;
    }
    if (flags == null) {
      flags = context.flags;
    }
    if (contrast == null) {
      contrast = context.contrast;
    }
    if (saturation == null) {
      saturation = context.saturation;
    }
    if (enabledExperiments == null) {
      enabledExperiments = context.enabledExperiments;
    }
    if (density == null) {
      density = context.density;
    }
    if (disableAdaptiveTheme == null) {
      disableAdaptiveTheme = context.disableAdaptiveTheme;
    }
    if (reduceAdaptiveTheme == null) {
      reduceAdaptiveTheme = context.reduceAdaptiveTheme;
    }
    return createThemedContext(obj);
  }, items);
  return gradient(theme(primaryColor[2]).ThemeContext.Provider, { value, children });
};
