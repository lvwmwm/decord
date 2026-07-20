// Module ID: 13404
// Function ID: 101849
// Name: BurgerIcon
// Dependencies: [1191182357, 2046820373, 33554453, 1979711488, 31, 33]
// Exports: BurgerIcon

// Module 13404 (BurgerIcon)
import module_33 from "module_33";

importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = module_33.fileFinishedImporting("design/components/Icon/native/redesign/generated/BurgerIcon.tsx");

export const BurgerIcon = function BurgerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(dependencyMap[2]).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: arg1(dependencyMap[4]), color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[3]).BaseIconImage, obj);
};
