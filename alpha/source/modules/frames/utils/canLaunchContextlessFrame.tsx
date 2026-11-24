// Module ID: 9944
// Function ID: 9945
// Name: canLaunchContextlessFrame
// Dependencies: [9945, 5561, 2]
// Exports: canLaunchContextlessFrame

// Module 9944 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5561 */;
import getFrameSurfaces from "getFrameSurfaces" /* 9945 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
