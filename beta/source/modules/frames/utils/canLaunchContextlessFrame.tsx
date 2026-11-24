// Module ID: 10672
// Function ID: 10673
// Name: canLaunchContextlessFrame
// Dependencies: [10673, 5557, 2]
// Exports: canLaunchContextlessFrame

// Module 10672 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5557 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
