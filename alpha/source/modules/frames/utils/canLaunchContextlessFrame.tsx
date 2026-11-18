// Module ID: 10632
// Function ID: 10633
// Name: canLaunchContextlessFrame
// Dependencies: [10633, 5467, 2]
// Exports: canLaunchContextlessFrame

// Module 10632 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5467 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10633 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
