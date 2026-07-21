// Module ID: 4654
// Function ID: 40313
// Name: VoiceNormalSpoilerIcon
// Dependencies: [305594368, 306053120, 43515904, 36765696, 1441792, 93716480]
// Exports: VoiceNormalSpoilerIcon

// Module 4654 (VoiceNormalSpoilerIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Icon/native/redesign/generated/VoiceNormalSpoilerIcon.tsx");

export const VoiceNormalSpoilerIcon = function VoiceNormalSpoilerIcon(color) {
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
