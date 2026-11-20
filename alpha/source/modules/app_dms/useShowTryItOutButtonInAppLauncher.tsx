// Module ID: 12893
// Function ID: 12894
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [10573, 12894, 10552, 2]
// Exports: default

// Module 12893 (useShowTryItOutButtonInAppLauncher)
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 10573 */;
import useIsAppDMDefault from "useIsAppDM" /* 12894 */;
import size from "module_2" /* 2 */;

let tmp;
const canLaunchContextlessFrame = tmp(10552);
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
