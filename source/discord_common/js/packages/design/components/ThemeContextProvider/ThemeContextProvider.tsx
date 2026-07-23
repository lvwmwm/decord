// Module ID: 3854
// Function ID: 32063
// Name: ThemeContextProvider
// Dependencies: [31, 33, 3853, 2]
// Exports: ThemeContextProvider

// Module 3854 (ThemeContextProvider)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("createThemedContext").fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextProvider.tsx");

export const ThemeContextProvider = function ThemeContextProvider(children) {
  let theme = children.theme;
  let primaryColor = children.primaryColor;
  let secondaryColor = children.secondaryColor;
  let gradient = children.gradient;
  let flags = children.flags;
  let contrast = children.contrast;
  let saturation = children.saturation;
  let enabledExperiments = children.enabledExperiments;
  let density = children.density;
  let disableAdaptiveTheme = children.disableAdaptiveTheme;
  let reduceAdaptiveTheme = children.reduceAdaptiveTheme;
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
    let obj = theme(primaryColor[2]);
    obj = {};
    if (null == theme) {
      theme = context.theme;
    }
    obj.theme = theme;
    if (null == primaryColor) {
      primaryColor = context.primaryColor;
    }
    obj.primaryColor = primaryColor;
    if (null == secondaryColor) {
      secondaryColor = context.secondaryColor;
    }
    obj.secondaryColor = secondaryColor;
    if (null == gradient) {
      gradient = context.gradient;
    }
    obj.gradient = gradient;
    if (null == flags) {
      flags = context.flags;
    }
    obj.flags = flags;
    if (null == contrast) {
      contrast = context.contrast;
    }
    obj.contrast = contrast;
    if (null == saturation) {
      saturation = context.saturation;
    }
    obj.saturation = saturation;
    if (null == enabledExperiments) {
      enabledExperiments = context.enabledExperiments;
    }
    obj.enabledExperiments = enabledExperiments;
    if (null == density) {
      density = context.density;
    }
    obj.density = density;
    if (null == disableAdaptiveTheme) {
      disableAdaptiveTheme = context.disableAdaptiveTheme;
    }
    obj.disableAdaptiveTheme = disableAdaptiveTheme;
    if (null == reduceAdaptiveTheme) {
      reduceAdaptiveTheme = context.reduceAdaptiveTheme;
    }
    obj.reduceAdaptiveTheme = reduceAdaptiveTheme;
    return obj.createThemedContext(obj);
  }, items);
  return gradient(theme(primaryColor[2]).ThemeContext.Provider, { value, children: children.children });
};
