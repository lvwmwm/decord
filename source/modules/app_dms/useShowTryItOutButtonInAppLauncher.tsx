// Module ID: 11296
// Function ID: 87873
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [10859, 11297, 10511, 2]
// Exports: default

// Module 11296 (useShowTryItOutButtonInAppLauncher)
const result = require("canLaunchFrame").fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  let application;
  let botUserId;
  let context;
  ({ context, application, botUserId } = arg0);
  let obj = require(10859) /* _getPrimaryAppCommand */;
  obj = { context, applicationId: application.id, botUserId };
  let isPrimaryAppCommandUsableInAppDM = obj.useIsPrimaryAppCommandUsableInAppDM(obj);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp2 = importDefault(11297);
  const tmp2Result = importDefault(11297)(channel);
  let tmp5 = !require(10511) /* canLaunchFrame */.canLaunchFrame(application);
  if (tmp5) {
    if (isPrimaryAppCommandUsableInAppDM) {
      isPrimaryAppCommandUsableInAppDM = null != botUserId;
    }
    if (isPrimaryAppCommandUsableInAppDM) {
      isPrimaryAppCommandUsableInAppDM = !tmp2Result;
    }
    tmp5 = isPrimaryAppCommandUsableInAppDM;
  }
  return tmp5;
};
