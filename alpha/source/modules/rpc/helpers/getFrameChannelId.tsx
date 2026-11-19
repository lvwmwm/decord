// Module ID: 15622
// Function ID: 15623
// Name: getFrameChannelId
// Dependencies: [4641, 1072, 6505, 2]
// Exports: default

// Module 15622 (getFrameChannelId)
import Constants from "Constants" /* 1072 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6505 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/getFrameChannelId.tsx");

export default function getFrameChannelId(frame) {
  frame = undefined;
  if (frame != null) {
    frame = frame.frame;
  }
  const getChannel = ChannelStore.getChannel;
  let surface;
  const tmp3 = getChannelIdForEmbeddedSurfaceDefault;
  if (frame != null) {
    surface = frame.surface;
  }
  const channel = getChannel(tmp3(surface));
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let id;
  if (type === ChannelTypes.GUILD_APP) {
    let applicationId;
    const application_id = channel.application_id;
    if (frame != null) {
      applicationId = frame.applicationId;
    }
    if (application_id === applicationId) {
      id = channel.id;
    }
  }
  return id;
};
