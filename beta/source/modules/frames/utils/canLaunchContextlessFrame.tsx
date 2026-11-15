// Module ID: 11921
// Function ID: 11922
// Name: canLaunchContextlessFrame
// Dependencies: [11881, 5831, 2]
// Exports: canLaunchContextlessFrame

// Module 11921 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5831 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11881 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
