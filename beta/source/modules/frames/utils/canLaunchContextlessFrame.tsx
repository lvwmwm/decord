// Module ID: 10677
// Function ID: 10678
// Name: canLaunchContextlessFrame
// Dependencies: [10678, 5557, 2]
// Exports: canLaunchContextlessFrame

// Module 10677 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5557 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10678 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
