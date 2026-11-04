// Module ID: 11924
// Function ID: 11925
// Name: canLaunchContextlessFrame
// Dependencies: [11884, 5809, 2]
// Exports: canLaunchContextlessFrame

// Module 11924 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5809 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11884 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
