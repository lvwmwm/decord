// Module ID: 11890
// Function ID: 11891
// Name: canLaunchContextlessFrame
// Dependencies: [11850, 5799, 2]
// Exports: canLaunchContextlessFrame

// Module 11890 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5799 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11850 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
