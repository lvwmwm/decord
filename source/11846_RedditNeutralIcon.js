// Module ID: 11846
// Function ID: 91773
// Name: RedditNeutralIcon
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: RedditNeutralIcon

// Module 11846 (RedditNeutralIcon)
import "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("design/components/Icon/native/redesign/generated/RedditNeutralIcon.tsx");

export const RedditNeutralIcon = function RedditNeutralIcon(color) {
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
