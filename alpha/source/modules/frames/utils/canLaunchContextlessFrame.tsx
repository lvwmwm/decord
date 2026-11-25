// Module ID: 10043
// Function ID: 10044
// Name: canLaunchContextlessFrame
// Dependencies: [10044, 5656, 2]
// Exports: canLaunchContextlessFrame

// Module 10043 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5656 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10044 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
