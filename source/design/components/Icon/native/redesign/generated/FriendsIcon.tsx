// Module ID: 3830
// Function ID: 31979
// Name: FriendsIcon
// Dependencies: [31, 3844, 31, 33, 2, 31]
// Exports: FriendsIcon

// Module 3830 (FriendsIcon)
import "module_31";
import { jsx } from "createStoreImpl";
import module_31 from "module_31";

const result = module_31.fileFinishedImporting("design/components/Icon/native/redesign/generated/FriendsIcon.tsx");

export const FriendsIcon = function FriendsIcon(color) {
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
