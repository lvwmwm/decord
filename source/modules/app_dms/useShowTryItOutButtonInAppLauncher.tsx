// Module ID: 11259
// Function ID: 87534
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [11233, 11260, 10443, 2]
// Exports: default

// Module 11259 (useShowTryItOutButtonInAppLauncher)
const result = require("canLaunchFrame").fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  let application;
  let botUserId;
  let context;
  ({ context, application, botUserId } = arg0);
  let obj = require(11233) /* _getPrimaryAppCommand */;
  obj = { context, applicationId: application.id, botUserId };
  let isPrimaryAppCommandUsableInAppDM = obj.useIsPrimaryAppCommandUsableInAppDM(obj);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp2 = importDefault(11260);
  const tmp2Result = importDefault(11260)(channel);
  let tmp5 = !require(10443) /* canLaunchFrame */.canLaunchFrame(application);
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
