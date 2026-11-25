// Module ID: 17893
// Function ID: 17894
// Name: getChannelAppLaunchTarget
// Dependencies: [4861, 4944, 6906, 1071, 6802, 6818, 5653, 2]
// Exports: default

// Module 17893 (getChannelAppLaunchTarget)
import getURLForApplicationDefault from "getURLForApplication" /* 5653 */;
import AgeGateUtils from "AgeGateUtils" /* 6802 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import PermissionStore from "PermissionStore" /* 4944 */;
import FramesConstants from "FramesConstants" /* 6906 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ getFrameSurfaceForChannel: hasOwnProperty, makeFrameId: metroRequire } = FramesConstants);
({ ChannelTypes: metroImportDefault, Permissions: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/frames/getChannelAppLaunchTarget.tsx");

export default function getChannelAppLaunchTarget(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  if (null == channel) {
    return null;
  } else if (channel.type !== metroImportDefault.GUILD_APP) {
    return null;
  } else {
    const application_id = channel.application_id;
    const tmp13 = hasOwnProperty(channel);
    let tmp2 = null;
    if (null != application_id) {
      tmp2 = null;
      if (null != tmp13) {
        let tmp5 = null;
        if (PermissionStore.can(metroImportAll.VIEW_CHANNEL, channel)) {
          let tmp8 = null;
          const obj = AgeGateUtils;
          const tmp6 = require;
          if (!obj.isChannelContentGated(channel)) {
            tmp8 = null;
            const tmp6Result = tmp6(6818);
            if (!tmp6Result.isChannelSpoilerGated(channel)) {
              tmp8 = null;
              if (null != getURLForApplicationDefault(application_id)) {
                tmp8 = { frameId: metroRequire(application_id, tmp13), applicationId: application_id, surface: tmp13 };
                const obj2 = { frameId: metroRequire(application_id, tmp13), applicationId: application_id, surface: tmp13 };
              }
            }
          }
          tmp5 = tmp8;
        }
        tmp2 = tmp5;
      }
    }
    return tmp2;
  }
};
