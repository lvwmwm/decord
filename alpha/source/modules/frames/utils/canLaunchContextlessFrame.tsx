// Module ID: 11391
// Function ID: 11392
// Name: canLaunchContextlessFrame
// Dependencies: [11353, 5626, 2]
// Exports: canLaunchContextlessFrame

// Module 11391 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11353 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
};
