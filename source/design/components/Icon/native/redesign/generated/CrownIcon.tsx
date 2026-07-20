// Module ID: 9079
// Function ID: 71159
// Name: CrownIcon
// Dependencies: [2046820366, 838860835, 33554453, 1946157056, 4096, 9088]
// Exports: CrownIcon

// Module 9079 (CrownIcon)
import handleVoiceOrStageChannelConnectPress from "handleVoiceOrStageChannelConnectPress";

importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = handleVoiceOrStageChannelConnectPress.fileFinishedImporting("design/components/Icon/native/redesign/generated/CrownIcon.tsx");

export const CrownIcon = function CrownIcon(color) {
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
