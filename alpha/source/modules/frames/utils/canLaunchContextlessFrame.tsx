// Module ID: 11398
// Function ID: 11399
// Name: canLaunchContextlessFrame
// Dependencies: [11360, 5627, 2]
// Exports: canLaunchContextlessFrame

// Module 11398 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5627 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11360 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
};
