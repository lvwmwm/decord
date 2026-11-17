// Module ID: 17002
// Function ID: 17003
// Name: getFrameProfileContext
// Dependencies: [5971, 7030, 7349, 2]
// Exports: default

// Module 17002 (getFrameProfileContext)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5971 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 7030 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(7349);
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
