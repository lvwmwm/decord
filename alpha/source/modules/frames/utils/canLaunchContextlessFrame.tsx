// Module ID: 11489
// Function ID: 11490
// Name: canLaunchContextlessFrame
// Dependencies: [11451, 5664, 2]
// Exports: canLaunchContextlessFrame

// Module 11489 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11451 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
