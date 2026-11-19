// Module ID: 10610
// Function ID: 10611
// Name: canLaunchContextlessFrame
// Dependencies: [10611, 5436, 2]
// Exports: canLaunchContextlessFrame

// Module 10610 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5436 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10611 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
