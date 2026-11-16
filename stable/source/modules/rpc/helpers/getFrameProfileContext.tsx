// Module ID: 16690
// Function ID: 16691
// Name: getFrameProfileContext
// Dependencies: [5831, 6937, 11037, 2]
// Exports: default

// Module 16690 (getFrameProfileContext)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5831 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6937 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(11037);
const result = size.fileFinishedImporting("modules/rpc/helpers/getFrameProfileContext.tsx");

export default function getFrameProfileContext(surface) {
  let tmp5;
  surface = surface.surface;
  let guildId;
  if (surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY) {
    guildId = surface.guildId;
  }
  const tmp4 = getChannelIdForEmbeddedSurfaceDefault(surface);
  const obj = { guildId, channelId: tmp5 };
  tmp5 = undefined;
  if (tmp4 !== conjurePreviewSurface.CONJURE_UNKNOWN_CHANNEL) {
    tmp5 = tmp4;
  }
  return obj;
};
