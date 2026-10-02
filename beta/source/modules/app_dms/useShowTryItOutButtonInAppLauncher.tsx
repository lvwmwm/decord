// Module ID: 11512
// Function ID: 11513
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [558, 576, 8785, 11513, 8778, 2]

// Module 11512 (useShowTryItOutButtonInAppLauncher)
import react from "react" /* 576 */;
import canLaunchFrame from "canLaunchFrame" /* 8778 */;
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 8785 */;
import useIsAppDMDefault from "useIsAppDM" /* 11513 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let botUserId;
  let context;
  const obj = react;
  const cResult = obj.c(4);
  ({ context, application, botUserId } = arg0);
  if (cResult[0] === application.id) {
    if (cResult[1] === botUserId) {
      let tmp4;
      if (cResult[2] === context) {
        tmp4 = cResult[3];
      }
      const tmpResult = getPrimaryAppCommand;
      let isPrimaryAppCommandUsableInAppDM = tmpResult.useIsPrimaryAppCommandUsableInAppDM(tmp4);
      let channel;
      const tmp7 = useIsAppDMDefault;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      const tmp7Result = tmp7(channel);
      const tmpResult2 = canLaunchFrame;
      let tmp11 = !tmpResult2.canLaunchFrame(application);
      tmpResult2.canLaunchFrame(application);
      if (tmp11) {
        if (isPrimaryAppCommandUsableInAppDM) {
          isPrimaryAppCommandUsableInAppDM = null != botUserId;
        }
        if (isPrimaryAppCommandUsableInAppDM) {
          isPrimaryAppCommandUsableInAppDM = !tmp7Result;
        }
        tmp11 = isPrimaryAppCommandUsableInAppDM;
      }
      return tmp11;
    }
  }
  const obj2 = { context, applicationId: application.id, botUserId };
  cResult[0] = application.id;
  cResult[1] = botUserId;
  cResult[2] = context;
  cResult[3] = obj2;
  tmp4 = obj2;
}) : ((arg0) => {
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
  const tmpResult = canLaunchFrame;
  let tmp8 = !tmpResult.canLaunchFrame(application);
  tmpResult.canLaunchFrame(application);
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
});
const result = size.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default tmp2;
