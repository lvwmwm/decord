// Module ID: 14023
// Function ID: 14024
// Name: validateEmbeddedAppFrame
// Dependencies: [8499, 14024, 4739, 1074, 8500, 8501, 8775, 8321, 8770, 2]
// Exports: tryValidateEmbeddedAppFrame

// Module 14023 (validateEmbeddedAppFrame)
import Constants2 from "Constants" /* 4739 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8321 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8501 */;
import RPCErrorDefault from "RPCError" /* 8770 */;
import RPCHelpers from "RPCHelpers" /* 8775 */;
import FramesStore from "FramesStore" /* 8499 */;
import VibegrationsBuilderPreviewStore from "VibegrationsBuilderPreviewStore" /* 14024 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function validateEmbeddedAppFrame(transport) {
  const obj = RPCHelpers;
  const result = obj.validatePostMessageTransport(transport.transport);
  const obj2 = RPCHelpers;
  const validateApplicationResult = obj2.validateApplication(transport.application);
  const obj3 = ApplicationFlagUtils;
  if (obj3.hasApplicationFlag(transport.application, metroRequire.EMBEDDED)) {
    if (transport.source.type !== TransportTypes.POST_MESSAGE) {
      const self5 = this;
      const self6 = this;
      const obj4 = { errorCode: metroImportDefault.INVALID_COMMAND };
      const tmp25 = new RPCErrorDefault(obj4, "command requires an embedded app frame");
      throw tmp25;
    } else {
      const tmp29 = asLaunched(FramesStore.getFrameByIframeId(transport.source.iframeId));
      let tmp11 = null;
      if (null != tmp29) {
        const type = tmp29.surface.type;
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
              let obj5;
              if (tmp29.applicationId === VibegrationsBuilderPreviewStore.getBuilderPreviewApplicationId()) {
                obj5 = { channelId: "Array", guildId: "channel" };
              } else {
                obj5 = null;
              }
              tmp11 = obj5;
            } else {
              const surface = tmp29.surface;
              tmp11 = null;
            }
          }
        }
        tmp11 = { channelId: tmp29.surface.channelId, guildId: tmp29.surface.guildId };
        const obj6 = { channelId: tmp29.surface.channelId, guildId: tmp29.surface.guildId };
      }
      if (null == tmp11) {
        const self3 = this;
        const self4 = this;
        const obj7 = { errorCode: metroImportDefault.UNAUTHORIZED_FOR_APPLICATION };
        const tmp20 = new RPCErrorDefault(obj7, "Command not available for this application");
        throw tmp20;
      } else {
        const obj8 = { applicationId: validateApplicationResult, iframeId: transport.source.iframeId };
        const merged = Object.assign(tmp11);
        return obj8;
      }
    }
  } else {
    const self = this;
    const self2 = this;
    const obj14 = { errorCode: metroImportDefault.UNAUTHORIZED_FOR_APPLICATION };
    const tmp8 = new RPCErrorDefault(obj14, "This application cannot access this API");
    throw tmp8;
  }
}
const TransportTypes = Constants2.TransportTypes;
({ ApplicationFlags: metroRequire, RPCErrors: metroImportDefault } = Constants);
const asLaunched = FramesConstants.asLaunched;
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
