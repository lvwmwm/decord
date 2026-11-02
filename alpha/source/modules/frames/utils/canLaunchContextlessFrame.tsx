// Module ID: 11727
// Function ID: 11728
// Name: canLaunchContextlessFrame
// Dependencies: [11689, 5675, 2]
// Exports: canLaunchContextlessFrame

// Module 11727 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
