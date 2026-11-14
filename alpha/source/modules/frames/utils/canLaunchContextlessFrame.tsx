// Module ID: 12742
// Function ID: 12743
// Name: canLaunchContextlessFrame
// Dependencies: [12697, 5977, 2]
// Exports: canLaunchContextlessFrame

// Module 12742 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5977 */;
import getFrameSurfaces from "getFrameSurfaces" /* 12697 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
