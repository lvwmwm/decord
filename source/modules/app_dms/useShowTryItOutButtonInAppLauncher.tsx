// Module ID: 12076
// Function ID: 12077
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [9500, 12077, 9435, 2]
// Exports: default

// Module 12076 (useShowTryItOutButtonInAppLauncher)
import set from "set" /* 2 */;
import canLaunchFrame from "canLaunchFrame" /* 9435 */;
import _getPrimaryAppCommand from "_getPrimaryAppCommand" /* 9500 */;
import useIsAppDMDefault from "useIsAppDM" /* 12077 */;

const result = set.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  ({ context, application, botUserId } = arg0);
  let obj = _getPrimaryAppCommand;
  obj = { context, applicationId: application.id, botUserId };
  let isPrimaryAppCommandUsableInAppDM = obj.useIsPrimaryAppCommandUsableInAppDM(obj);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp = require;
  const tmp4 = useIsAppDMDefault;
  const tmp4Result = useIsAppDMDefault(channel);
  const canLaunchFrameResult = canLaunchFrame.canLaunchFrame(application);
  let tmp8 = !canLaunchFrameResult;
  if (!canLaunchFrameResult) {
    if (isPrimaryAppCommandUsableInAppDM) {
      isPrimaryAppCommandUsableInAppDM = null != botUserId;
    }
    if (isPrimaryAppCommandUsableInAppDM) {
      isPrimaryAppCommandUsableInAppDM = !tmp4Result;
    }
    tmp8 = isPrimaryAppCommandUsableInAppDM;
  }
  return tmp8;
};
