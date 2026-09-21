// Module ID: 14745
// Function ID: 14746
// Name: validateEmbeddedAppFrame
// Dependencies: [9311, 14746, 4663, 1078, 9312, 9582, 9133, 9577, 2]
// Exports: tryValidateEmbeddedAppFrame

// Module 14745 (validateEmbeddedAppFrame)
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9133 */;
import RPCErrorDefault from "RPCError" /* 9577 */;
import RPCHelpers from "RPCHelpers" /* 9582 */;
import FramesStore from "FramesStore" /* 9311 */;
import VibegrationsBuilderPreviewStore from "VibegrationsBuilderPreviewStore" /* 14746 */;

require = fn;
function validateEmbeddedAppFrame(transport) {
  const result = RPCHelpers.validatePostMessageTransport(transport.transport);
  const validateApplicationResult = RPCHelpers.validateApplication(transport.application);
  if (obj3.hasApplicationFlag(transport.application, constants.EMBEDDED)) {
    if (transport.source.type !== TransportTypes.POST_MESSAGE) {
      const obj4 = { errorCode: constants2.INVALID_COMMAND };
      const tmp31 = new RPCErrorDefault(obj4, "command requires an embedded app frame");
      throw tmp31;
    } else {
      const tmp35 = closure_1_8(FramesStore.getFrameByIframeId(transport.source.iframeId));
      let tmp13 = null;
      if (null != tmp35) {
        const type = tmp35.surface.type;
        if (constants3.APP_CHANNEL !== type) {
          if (tmp12.VOICE_CHANNEL !== type) {
            if (tmp12.MAIN === type) {
              if (tmp35.applicationId === VibegrationsBuilderPreviewStore.getBuilderPreviewApplicationId()) {
                let obj5 = { channelId: "Array", guildId: "Set" };
              } else {
                obj5 = null;
              }
              tmp13 = obj5;
            } else {
              const surface = tmp35.surface;
              tmp13 = null;
            }
          }
        }
        const obj6 = { channelId: tmp35.surface.channelId, guildId: tmp35.surface.guildId };
        tmp13 = obj6;
      }
      if (null == tmp13) {
        const obj7 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
        const tmp24 = new RPCErrorDefault(obj7, "Command not available for this application");
        throw tmp24;
      } else {
        const obj8 = { applicationId: validateApplicationResult, iframeId: transport.source.iframeId };
        const merged = Object.assign(tmp13);
        return obj8;
      }
    }
  } else {
    const obj14 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
    const tmp9 = new RPCErrorDefault(obj14, "This application cannot access this API");
    throw tmp9;
  }
  obj3 = ApplicationFlagUtils;
}
const TransportTypes = fn(4663).TransportTypes;
const Constants = fn(1078);
({ ApplicationFlags: metroRequire, RPCErrors: closure_7 } = Constants);
const FramesConstants = fn(9312);
({ asLaunched: closure_8, EmbeddedSurfaceType: closure_9 } = FramesConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/helpers/validateEmbeddedAppFrame.tsx");

export default validateEmbeddedAppFrame;
export const tryValidateEmbeddedAppFrame = function tryValidateEmbeddedAppFrame(transport) {
  try {
    return validateEmbeddedAppFrame(transport);
  } catch (tmp3) {
    if (tmp3 instanceof RPCErrorDefault) {
      return null;
    } else {
      throw tmp3;
    }
  }
};
