// Module ID: 11350
// Function ID: 11351
// Name: canLaunchContextlessFrame
// Dependencies: [11351, 5971, 2]
// Exports: canLaunchContextlessFrame

// Module 11350 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5971 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11351 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
