// Module ID: 10552
// Function ID: 10553
// Name: canLaunchContextlessFrame
// Dependencies: [10553, 5438, 2]
// Exports: canLaunchContextlessFrame

// Module 10552 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5438 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10553 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
