// Module ID: 15639
// Function ID: 15640
// Name: getFrameProfileContext
// Dependencies: [5436, 6505, 6824, 2]
// Exports: default

// Module 15639 (getFrameProfileContext)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5436 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6505 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(6824);
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
