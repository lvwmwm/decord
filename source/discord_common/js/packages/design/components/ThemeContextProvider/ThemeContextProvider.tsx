// Module ID: 3852
// Function ID: 32058
// Name: ThemeContextProvider
// Dependencies: []
// Exports: ThemeContextProvider

// Module 3852 (ThemeContextProvider)
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextProvider.tsx");

export const ThemeContextProvider = function ThemeContextProvider(children) {
  const theme = children.theme;
  const arg1 = theme;
  const primaryColor = children.primaryColor;
  const dependencyMap = primaryColor;
  const secondaryColor = children.secondaryColor;
  const React = secondaryColor;
  const gradient = children.gradient;
  const jsx = gradient;
  const flags = children.flags;
  const contrast = children.contrast;
  const saturation = children.saturation;
  const enabledExperiments = children.enabledExperiments;
  const density = children.density;
  const disableAdaptiveTheme = children.disableAdaptiveTheme;
  const reduceAdaptiveTheme = children.reduceAdaptiveTheme;
  const context = React.useContext(arg1(dependencyMap[2]).ThemeContext);
  const FALLBACK_THEME_CONTEXT_VALUE = arg1(dependencyMap[2]).FALLBACK_THEME_CONTEXT_VALUE;
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
  const value = React.useMemo(() => {
    let obj = theme(primaryColor[2]);
    obj = {};
    if (null == theme) {
      const theme = context.theme;
    }
    obj.theme = theme;
    if (null == primaryColor) {
      const primaryColor = context.primaryColor;
    }
    obj.primaryColor = primaryColor;
    if (null == secondaryColor) {
      const secondaryColor = context.secondaryColor;
    }
    obj.secondaryColor = secondaryColor;
    if (null == gradient) {
      const gradient = context.gradient;
    }
    obj.gradient = gradient;
    if (null == flags) {
      const flags = context.flags;
    }
    obj.flags = flags;
    if (null == contrast) {
      const contrast = context.contrast;
    }
    obj.contrast = contrast;
    if (null == saturation) {
      const saturation = context.saturation;
    }
    obj.saturation = saturation;
    if (null == enabledExperiments) {
      const enabledExperiments = context.enabledExperiments;
    }
    obj.enabledExperiments = enabledExperiments;
    if (null == density) {
      const density = context.density;
    }
    obj.density = density;
    if (null == disableAdaptiveTheme) {
      const disableAdaptiveTheme = context.disableAdaptiveTheme;
    }
    obj.disableAdaptiveTheme = disableAdaptiveTheme;
    if (null == reduceAdaptiveTheme) {
      const reduceAdaptiveTheme = context.reduceAdaptiveTheme;
    }
    obj.reduceAdaptiveTheme = reduceAdaptiveTheme;
    return obj.createThemedContext(obj);
  }, items);
  return jsx(arg1(dependencyMap[2]).ThemeContext.Provider, { value, children: children.children });
};
