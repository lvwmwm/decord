// Module ID: 11851
// Function ID: 91793
// Name: BlueskyNeutralIcon
// Dependencies: [131072, 528220160, 452984832, 553648128, 503316480, 2969567248]
// Exports: BlueskyNeutralIcon

// Module 11851 (BlueskyNeutralIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Icon/native/redesign/generated/BlueskyNeutralIcon.tsx");

export const BlueskyNeutralIcon = function BlueskyNeutralIcon(color) {
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
