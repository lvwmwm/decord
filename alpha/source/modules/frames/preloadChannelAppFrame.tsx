// Module ID: 17620
// Function ID: 17621
// Name: preloadChannelAppFrame
// Dependencies: [4821, 4901, 6773, 6774, 1087, 6660, 6680, 5621, 10729, 6776, 10770, 6807, 2]
// Exports: preloadChannelAppFrame

// Module 17620 (preloadChannelAppFrame)
import getURLForApplicationDefault from "getURLForApplication" /* 5621 */;
import AgeGateUtils from "AgeGateUtils" /* 6660 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6680 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6776 */;
import createProxyTicket from "createProxyTicket" /* 10729 */;
import loadEmbeddedAppCSPForLaunchDefault from "loadEmbeddedAppCSPForLaunch" /* 10770 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import FramesStore from "FramesStore" /* 6773 */;
import FramesConstants from "FramesConstants" /* 6774 */;
import Constants from "Constants" /* 1087 */;
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
        const useApplication = tmp11(6807).useApplication;
        const items = [application_id];
        const many = useApplication.fetchMany(items);
        many.catch(React4);
      }
    }
  }
};
