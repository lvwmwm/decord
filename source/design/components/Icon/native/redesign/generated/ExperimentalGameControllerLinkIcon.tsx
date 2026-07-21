// Module ID: 8640
// Function ID: 68401
// Name: ExperimentalGameControllerLinkIcon
// Dependencies: [0, 4294967295, 0, 0, 0, 0]
// Exports: ExperimentalGameControllerLinkIcon

// Module 8640 (ExperimentalGameControllerLinkIcon)
import "result";
import result from "result";

const jsx = arg1(dependencyMap[1]).jsx;
result = result.fileFinishedImporting("design/components/Icon/native/redesign/generated/ExperimentalGameControllerLinkIcon.tsx");

export const ExperimentalGameControllerLinkIcon = function ExperimentalGameControllerLinkIcon(color) {
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
