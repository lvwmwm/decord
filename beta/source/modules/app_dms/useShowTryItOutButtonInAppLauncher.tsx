// Module ID: 12320
// Function ID: 12321
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [558, 568, 9629, 12321, 9622, 2]

// Module 12320 (useShowTryItOutButtonInAppLauncher)
import c from "c" /* 568 */;
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 9629 */;
import useIsAppDMDefault from "useIsAppDM" /* 12321 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const canLaunchFrame = tmp(9622);
const result = size.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  ({ context, application, botUserId } = arg0);
  if (cResult[0] === application.id) {
    if (cResult[1] === botUserId) {
      if (cResult[2] === context) {
        let tmp4 = cResult[3];
      }
      let isPrimaryAppCommandUsableInAppDM = tmp(9629).useIsPrimaryAppCommandUsableInAppDM(tmp4);
      let channel;
      const tmpResult = tmp(9629);
      if ("channel" === context.type) {
        channel = context.channel;
      }
      const tmp7Result = useIsAppDMDefault(channel);
      const canLaunchFrameResult = tmp(9622).canLaunchFrame(application);
      let tmp11 = !canLaunchFrameResult;
      if (!canLaunchFrameResult) {
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
});
