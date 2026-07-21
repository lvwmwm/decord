// Module ID: 8603
// Function ID: 68283
// Name: EpicGamesNeutralIcon
// Dependencies: [31, 27, 33, 4126, 689, 5462]
// Exports: EpicGamesNeutralIcon

// Module 8603 (EpicGamesNeutralIcon)
import "module_31";
import { jsx } from "get ActivityIndicator";
import mergeLocations from "mergeLocations";

const result = mergeLocations.fileFinishedImporting("design/components/Icon/native/redesign/generated/EpicGamesNeutralIcon.tsx");

export const EpicGamesNeutralIcon = function EpicGamesNeutralIcon(color) {
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
