// Module ID: 11394
// Function ID: 11395
// Name: canLaunchContextlessFrame
// Dependencies: [11356, 5626, 2]
// Exports: canLaunchContextlessFrame

// Module 11394 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11356 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
};
