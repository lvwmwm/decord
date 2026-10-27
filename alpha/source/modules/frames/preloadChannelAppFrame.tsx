// Module ID: 17698
// Function ID: 17699
// Name: preloadChannelAppFrame
// Dependencies: [4824, 4904, 6776, 6777, 1084, 6663, 6683, 5624, 10733, 6779, 10775, 6811, 2]
// Exports: preloadChannelAppFrame

// Module 17698 (preloadChannelAppFrame)
import getURLForApplicationDefault from "getURLForApplication" /* 5624 */;
import AgeGateUtils from "AgeGateUtils" /* 6663 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6683 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6779 */;
import createProxyTicket from "createProxyTicket" /* 10733 */;
import loadEmbeddedAppCSPForLaunchDefault from "loadEmbeddedAppCSPForLaunch" /* 10775 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import PermissionStore from "PermissionStore" /* 4904 */;
import FramesStore from "FramesStore" /* 6776 */;
import FramesConstants from "FramesConstants" /* 6777 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ getFrameSurfaceForChannel: metroRequire, makeFrameId: metroImportDefault } = FramesConstants);
({ ChannelTypes: metroImportAll, NOOP: c9, Permissions: c10 } = Constants);
let result = size.fileFinishedImporting("modules/frames/preloadChannelAppFrame.tsx");

export const preloadChannelAppFrame = function preloadChannelAppFrame(id) {
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
        const useApplication = tmp11(6811).useApplication;
        const items = [application_id];
        const many = useApplication.fetchMany(items);
        many.catch(React4);
      }
    }
  }
};
