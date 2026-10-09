// Module ID: 14640
// Function ID: 14641
// Name: validateEmbeddedAppFrame
// Dependencies: [14641, 10772, 1085, 8594, 11373, 10905, 2029, 10896, 14642, 2]
// Exports: tryValidateEmbeddedAppFrame

// Module 14640 (validateEmbeddedAppFrame)
import Constants from "Constants" /* 1085 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2029 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8594 */;
import RPCErrorDefault from "RPCError" /* 10896 */;
import RPCHelpers from "RPCHelpers" /* 10905 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11373 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 14642 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14641 */;
import FramesStore from "FramesStore" /* 10772 */;
import size from "module_2" /* 2 */;

function validateEmbeddedAppFrame(transport) {
  const obj = RPCHelpers;
  const result = obj.validatePostMessageTransport(transport.transport);
  const obj2 = RPCHelpers;
  obj2.validateApplication(transport.application);
  const obj3 = EmbeddedSurfaceUtils;
  if (obj3.isEmbeddedApplication(transport.application)) {
    if (isPostMessageSocketDefault(transport)) {
      const frameByEmbeddedContext = FramesStore.getFrameByEmbeddedContext(transport.context, transport.source.iframeId);
      let tmp17 = null;
      if (null != frameByEmbeddedContext) {
        tmp17 = null;
        if (frameByEmbeddedContext.applicationId === transport.application.id) {
          const tmp18 = frameByEmbeddedContext.applicationId === ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() || frameByEmbeddedContext.data.prefersPictureInPictureOnNavigateAway;
          const type = frameByEmbeddedContext.surface.type;
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
              tmp17 = frameByEmbeddedContext;
              if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY !== type) {
                if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
                  let tmp19 = null;
                  if (tmp18) {
                    tmp19 = frameByEmbeddedContext;
                  }
                  tmp17 = tmp19;
                } else {
                  tmp17 = null;
                  if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
                    const surface = frameByEmbeddedContext.surface;
                    tmp17 = null;
                  }
                }
              }
            }
          }
          let tmp20 = frameByEmbeddedContext;
          if (frameByEmbeddedContext.surface.channelId === conjurePreviewSurface.CONJURE_UNKNOWN_CHANNEL) {
            let tmp21 = null;
            if (tmp18) {
              tmp21 = frameByEmbeddedContext;
            }
            tmp20 = tmp21;
          }
          tmp17 = tmp20;
        }
      }
      if (null == tmp17) {
        const self5 = this;
        const self6 = this;
        const obj4 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
        const tmp24 = new RPCErrorDefault(obj4, "Command not available for this application");
        throw tmp24;
      } else {
        return { frame: tmp17, iframeId: transport.source.iframeId };
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
