// Module ID: 10086
// Function ID: 10087
// Name: canLaunchContextlessFrame
// Dependencies: [10087, 5687, 2]
// Exports: canLaunchContextlessFrame

// Module 10086 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5687 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10087 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
