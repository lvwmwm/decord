// Module ID: 12401
// Function ID: 12402
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [9607, 12402, 9600, 2]
// Exports: default

// Module 12401 (useShowTryItOutButtonInAppLauncher)
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 9607 */;
import useIsAppDMDefault from "useIsAppDM" /* 12402 */;
import size from "module_2" /* 2 */;

const canLaunchFrame = tmp(9600);
const result = size.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  ({ context, application, botUserId } = arg0);
  let isPrimaryAppCommandUsableInAppDM = getPrimaryAppCommand.useIsPrimaryAppCommandUsableInAppDM({ context, applicationId: application.id, botUserId });
  let channel;
  const obj2 = { context, applicationId: application.id, botUserId };
  if ("channel" === context.type) {
    channel = context.channel;
  }
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
