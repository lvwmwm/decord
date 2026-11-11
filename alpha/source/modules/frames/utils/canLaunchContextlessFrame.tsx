// Module ID: 12652
// Function ID: 12653
// Name: canLaunchContextlessFrame
// Dependencies: [12607, 5914, 2]
// Exports: canLaunchContextlessFrame

// Module 12652 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5914 */;
import getFrameSurfaces from "getFrameSurfaces" /* 12607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
