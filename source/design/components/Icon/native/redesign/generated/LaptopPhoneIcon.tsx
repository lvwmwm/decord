// Module ID: 13726
// Function ID: 103843
// Name: LaptopPhoneIcon
// Dependencies: [0, 0, 0, 0, 0]
// Exports: LaptopPhoneIcon

// Module 13726 (LaptopPhoneIcon)
import "__exportStarResult1";
import { jsx } from "__exportStarResult1";

const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Icon/native/redesign/generated/LaptopPhoneIcon.tsx");

export const LaptopPhoneIcon = function LaptopPhoneIcon(color) {
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
