// Module ID: 10085
// Function ID: 10086
// Name: canLaunchContextlessFrame
// Dependencies: [10086, 5687, 2]
// Exports: canLaunchContextlessFrame

// Module 10085 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5687 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10086 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
