// Module ID: 12376
// Function ID: 12377
// Name: getInlineFramePresentation
// Dependencies: [6967, 2]
// Exports: default

// Module 12376 (getInlineFramePresentation)
import FramesConstants from "FramesConstants" /* 6967 */;
import size from "module_2" /* 2 */;

const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const result = size.fileFinishedImporting("modules/frames/native/getInlineFramePresentation.tsx");

export default function getInlineFramePresentation(top, arg1) {
  let bottom;
  let left;
  let right;
  let num = 0;
  ({ bottom, left, right } = top);
  if (!arg1) {
    num = top.top;
  }
  const rect = { top: { disable: false, override: num }, bottom: { disable: false, override: bottom }, left: { disable: false, override: left }, right: { disable: false, override: right } };
  return { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: rect, landscapeSafeAreasConfig: rect };
};
