// Module ID: 18568
// Function ID: 18569
// Name: preloadChannelAppFrame
// Dependencies: [4992, 5075, 6984, 6985, 1072, 6872, 6891, 5808, 11070, 6987, 11071, 7019, 2]
// Exports: preloadChannelAppFrame

// Module 18568 (preloadChannelAppFrame)
import getURLForApplicationDefault from "getURLForApplication" /* 5808 */;
import AgeGateUtils from "AgeGateUtils" /* 6872 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6891 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6987 */;
import createProxyTicket from "createProxyTicket" /* 11070 */;
import loadEmbeddedAppCSPForLaunchDefault from "loadEmbeddedAppCSPForLaunch" /* 11071 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import PermissionStore from "PermissionStore" /* 5075 */;
import FramesStore from "FramesStore" /* 6984 */;
import FramesConstants from "FramesConstants" /* 6985 */;
import Constants from "Constants" /* 1072 */;
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
        const useApplication = tmp11(7019).useApplication;
        const items = [application_id];
        const many = useApplication.fetchMany(items);
        many.catch(React4);
      }
    }
  }
}
