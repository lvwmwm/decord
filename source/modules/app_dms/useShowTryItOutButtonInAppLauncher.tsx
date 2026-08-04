// Module ID: 11444
// Function ID: 11445
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [10885, 11445, 10509, 2]
// Exports: default

// Module 11444 (useShowTryItOutButtonInAppLauncher)
const result = require("canLaunchFrame").fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  let application;
  let botUserId;
  let context;
  ({ context, application, botUserId } = arg0);
  let obj = require(10885) /* _getPrimaryAppCommand */;
  obj = { context, applicationId: application.id, botUserId };
  let isPrimaryAppCommandUsableInAppDM = obj.useIsPrimaryAppCommandUsableInAppDM(obj);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp = require;
  const tmp4 = importDefault(11445);
  const tmp4Result = importDefault(11445)(channel);
  const canLaunchFrameResult = tmp(10509).canLaunchFrame(application);
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
