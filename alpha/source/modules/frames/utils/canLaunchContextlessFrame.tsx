// Module ID: 11923
// Function ID: 11924
// Name: canLaunchContextlessFrame
// Dependencies: [11883, 5809, 2]
// Exports: canLaunchContextlessFrame

// Module 11923 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5809 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11883 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
