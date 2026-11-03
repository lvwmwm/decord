// Module ID: 11864
// Function ID: 11865
// Name: canLaunchContextlessFrame
// Dependencies: [11826, 5795, 2]
// Exports: canLaunchContextlessFrame

// Module 11864 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5795 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11826 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
