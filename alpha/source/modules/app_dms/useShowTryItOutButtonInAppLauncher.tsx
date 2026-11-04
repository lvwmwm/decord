// Module ID: 12692
// Function ID: 12693
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [11932, 12693, 11923, 2]
// Exports: default

// Module 12692 (useShowTryItOutButtonInAppLauncher)
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 11932 */;
import useIsAppDMDefault from "useIsAppDM" /* 12693 */;
import size from "module_2" /* 2 */;

let tmp;
const canLaunchContextlessFrame = tmp(11923);
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
