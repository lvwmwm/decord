// Module ID: 15663
// Function ID: 15664
// Name: validateEmbeddedAppFrame
// Dependencies: [15664, 1087, 9233, 5612, 10705, 11435, 2031, 9240, 9234, 2]
// Exports: tryValidateEmbeddedAppFrame

// Module 15663 (validateEmbeddedAppFrame)
import Constants from "Constants" /* 1087 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2031 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import getSocketFrameDefault from "getSocketFrame" /* 9233 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9234 */;
import RPCErrorDefault from "RPCError" /* 9240 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10705 */;
import RPCHelpers from "RPCHelpers" /* 11435 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15664 */;
import size from "module_2" /* 2 */;

function validateEmbeddedAppFrame(transport) {
  const obj = RPCHelpers;
  const result = obj.validatePostMessageTransport(transport.transport);
  const obj2 = RPCHelpers;
  obj2.validateApplication(transport.application);
  const obj3 = EmbeddedSurfaceUtils;
  if (obj3.isEmbeddedApplication(transport.application)) {
    if (isPostMessageSocketDefault(transport)) {
      const tmp14 = getSocketFrameDefault(transport);
      let tmp16 = null;
      if (null != tmp14) {
        tmp16 = null;
        if (tmp14.applicationId === transport.application.id) {
          const tmp17 = tmp14.applicationId === ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() || tmp14.data.runsInBackground;
          const type = tmp14.surface.type;
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
              tmp16 = tmp14;
              if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY !== type) {
                if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
                  let tmp18 = null;
                  if (tmp17) {
                    tmp18 = tmp14;
                  }
                  tmp16 = tmp18;
                } else {
                  tmp16 = null;
                  if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
                    const surface = tmp14.surface;
                    tmp16 = null;
                  }
                }
              }
            }
          }
          let tmp19 = tmp14;
          if (tmp14.surface.channelId === conjurePreviewSurface.CONJURE_UNKNOWN_CHANNEL) {
            let tmp20 = null;
            if (tmp17) {
              tmp20 = tmp14;
            }
            tmp19 = tmp20;
          }
          tmp16 = tmp19;
        }
      }
      if (null == tmp16) {
        const self5 = this;
        const self6 = this;
        const obj4 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
        const tmp23 = new RPCErrorDefault(obj4, "Command not available for this application");
        throw tmp23;
      } else {
        return { frame: tmp16, iframeId: transport.source.iframeId };
      }
    } else {
      const self3 = this;
      const self4 = this;
      const obj6 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp12 = new RPCErrorDefault(obj6, "command requires an embedded app frame");
      throw tmp12;
    }
  } else {
    const self = this;
    const self2 = this;
    const obj7 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp8 = new RPCErrorDefault(obj7, "This application cannot access this API");
    throw tmp8;
  }
}
const RPCErrors = Constants.RPCErrors;
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
