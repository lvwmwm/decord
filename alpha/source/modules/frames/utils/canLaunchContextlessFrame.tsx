// Module ID: 11435
// Function ID: 11436
// Name: canLaunchContextlessFrame
// Dependencies: [11397, 5662, 2]
// Exports: canLaunchContextlessFrame

// Module 11435 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5662 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11397 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
};
