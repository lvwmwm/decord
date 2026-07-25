// Module ID: 11258
// Function ID: 87529
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [11232, 11259, 10442, 2]
// Exports: default

// Module 11258 (useShowTryItOutButtonInAppLauncher)
const result = require("canLaunchFrame").fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  let application;
  let botUserId;
  let context;
  ({ context, application, botUserId } = arg0);
  let obj = require(11232) /* _getPrimaryAppCommand */;
  obj = { context, applicationId: application.id, botUserId };
  let isPrimaryAppCommandUsableInAppDM = obj.useIsPrimaryAppCommandUsableInAppDM(obj);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp2 = importDefault(11259);
  const tmp2Result = importDefault(11259)(channel);
  let tmp5 = !require(10442) /* canLaunchFrame */.canLaunchFrame(application);
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
