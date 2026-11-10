// Module ID: 11899
// Function ID: 11900
// Name: canLaunchContextlessFrame
// Dependencies: [11859, 5801, 2]
// Exports: canLaunchContextlessFrame

// Module 11899 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5801 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11859 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
