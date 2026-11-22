// Module ID: 15707
// Function ID: 15708
// Name: getFrameChannelId
// Dependencies: [4762, 1071, 6626, 2]
// Exports: default

// Module 15707 (getFrameChannelId)
import Constants from "Constants" /* 1071 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6626 */;
import ChannelStore from "ChannelStore" /* 4762 */;
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
