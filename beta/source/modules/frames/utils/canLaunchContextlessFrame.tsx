// Module ID: 12744
// Function ID: 12745
// Name: canLaunchContextlessFrame
// Dependencies: [12699, 5967, 2]
// Exports: canLaunchContextlessFrame

// Module 12744 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5967 */;
import getFrameSurfaces from "getFrameSurfaces" /* 12699 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
