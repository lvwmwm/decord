// Module ID: 11689
// Function ID: 11690
// Name: canLaunchContextlessFrame
// Dependencies: [11652, 5670, 2]
// Exports: canLaunchContextlessFrame

// Module 11689 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11652 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const obj = getFrameSurfaces;
  const frameSurfaces = obj.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}
