// Module ID: 11933
// Function ID: 11934
// Name: canLaunchContextlessFrame
// Dependencies: [11893, 5811, 2]
// Exports: canLaunchContextlessFrame

// Module 11933 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5811 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11893 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
