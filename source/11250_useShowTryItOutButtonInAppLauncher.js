// Module ID: 11250
// Function ID: 87535
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: []
// Exports: default

// Module 11250 (useShowTryItOutButtonInAppLauncher)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  let application;
  let botUserId;
  let context;
  ({ context, application, botUserId } = arg0);
  let obj = require(dependencyMap[0]);
  obj = { context, applicationId: application.id, botUserId };
  let isPrimaryAppCommandUsableInAppDM = obj.useIsPrimaryAppCommandUsableInAppDM(obj);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp2 = importDefault(dependencyMap[1]);
  const tmp2Result = importDefault(dependencyMap[1])(channel);
  let tmp5 = !require(dependencyMap[2]).canLaunchFrame(application);
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
