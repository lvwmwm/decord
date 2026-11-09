// Module ID: 16661
// Function ID: 16662
// Name: getFrameProfileContext
// Dependencies: [5799, 6904, 11005, 2]
// Exports: default

// Module 16661 (getFrameProfileContext)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5799 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6904 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(11005);
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
