// Module ID: 12665
// Function ID: 12666
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [11908, 12666, 11899, 2]
// Exports: default

// Module 12665 (useShowTryItOutButtonInAppLauncher)
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 11908 */;
import useIsAppDMDefault from "useIsAppDM" /* 12666 */;
import size from "module_2" /* 2 */;

let tmp;
const canLaunchContextlessFrame = tmp(11899);
let result = size.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  let application;
  let botUserId;
  let context;
  ({ context, application, botUserId } = arg0);
  const obj = getPrimaryAppCommand;
  const obj2 = { context, applicationId: application.id, botUserId };
  let isPrimaryAppCommandUsableInAppDM = obj.useIsPrimaryAppCommandUsableInAppDM(obj2);
  let channel;
  const tmp4 = useIsAppDMDefault;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp4Result = tmp4(channel);
  const tmpResult = canLaunchContextlessFrame;
  const result = tmpResult.canLaunchContextlessFrame(application);
  let tmp8 = !result;
  if (tmp8) {
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
