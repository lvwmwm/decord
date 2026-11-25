// Module ID: 17751
// Function ID: 17752
// Name: preloadChannelAppFrame
// Dependencies: [4762, 4845, 6623, 6624, 1071, 6419, 6439, 5554, 6945, 6626, 6946, 6659, 2]
// Exports: preloadChannelAppFrame

// Module 17751 (preloadChannelAppFrame)
import getURLForApplicationDefault from "getURLForApplication" /* 5554 */;
import AgeGateUtils from "AgeGateUtils" /* 6419 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6439 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6626 */;
import createProxyTicket from "createProxyTicket" /* 6945 */;
import loadEmbeddedAppCSPForLaunchDefault from "loadEmbeddedAppCSPForLaunch" /* 6946 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import FramesStore from "FramesStore" /* 6623 */;
import FramesConstants from "FramesConstants" /* 6624 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ getFrameSurfaceForChannel: metroRequire, makeFrameId: metroImportDefault } = FramesConstants);
({ ChannelTypes: metroImportAll, NOOP: c9, Permissions: c10 } = Constants);
let result = size.fileFinishedImporting("modules/frames/preloadChannelAppFrame.tsx");

export function preloadChannelAppFrame(id) {
  const channel = ChannelStore.getChannel(id);
  let application_id;
  if (channel != null) {
    application_id = channel.application_id;
  }
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp4 = null;
  if (type === metroImportAll.GUILD_APP) {
    tmp4 = metroRequire(channel);
  }
  const canResult = null != channel && null != application_id && null != tmp4 && null == FramesStore.getFrame(metroImportDefault(application_id, tmp4)) && PermissionStore.can(constants2.VIEW_CHANNEL, channel);
  if (canResult) {
    const obj = AgeGateUtils;
    let result = obj.isChannelContentGated(channel);
    if (!result) {
      const tmp11Result = SpoilerChannelUtils;
      result = tmp11Result.isChannelSpoilerGated(channel);
    }
    if (!result) {
      if (null != getURLForApplicationDefault(application_id)) {
        const tmp11Result2 = createProxyTicket;
        tmp11Result2.prefetchProxyTicket(application_id, getChannelIdForEmbeddedSurfaceDefault(tmp4), tmp4.type);
        const promise = loadEmbeddedAppCSPForLaunchDefault(application_id);
        promise.catch(React4);
        const useApplication = tmp11(6659).useApplication;
        const items = [application_id];
        const many = useApplication.fetchMany(items);
        many.catch(React4);
      }
    }
  }
}
