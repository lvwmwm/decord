// Module ID: 14103
// Function ID: 107078
// Name: items
// Dependencies: []
// Exports: useVisibleFontOrder

// Module 14103 (items)
let closure_2 = importAll(dependencyMap[0]);
const items = [arg1(dependencyMap[2]).DisplayNameFont.DEFAULT, arg1(dependencyMap[2]).DisplayNameFont.ZILLA_SLAB, arg1(dependencyMap[2]).DisplayNameFont.CHERRY_BOMB, arg1(dependencyMap[2]).DisplayNameFont.CHICLE, arg1(dependencyMap[2]).DisplayNameFont.MUSEO_MODERNO, arg1(dependencyMap[2]).DisplayNameFont.NEO_CASTEL, arg1(dependencyMap[2]).DisplayNameFont.PIXELIFY, arg1(dependencyMap[2]).DisplayNameFont.SINISTRE];
const items1 = [...arg1(dependencyMap[1]).FLYWHEEL_FONTS];
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = function useVisibleFontOrder() {
  const isDisplayNameStylesFlywheelSettersEnabled = arg1(dependencyMap[3]).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  const arg1 = isDisplayNameStylesFlywheelSettersEnabled;
  const items = [isDisplayNameStylesFlywheelSettersEnabled];
  return React.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? closure_4 : closure_3, items);
};
