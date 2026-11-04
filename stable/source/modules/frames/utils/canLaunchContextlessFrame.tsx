// Module ID: 11426
// Function ID: 11427
// Name: canLaunchContextlessFrame
// Dependencies: [11388, 5658, 2]
// Exports: canLaunchContextlessFrame

// Module 11426 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5658 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11388 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
};
