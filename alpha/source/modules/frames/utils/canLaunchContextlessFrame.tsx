// Module ID: 11726
// Function ID: 11727
// Name: canLaunchContextlessFrame
// Dependencies: [11688, 5675, 2]
// Exports: canLaunchContextlessFrame

// Module 11726 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11688 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
