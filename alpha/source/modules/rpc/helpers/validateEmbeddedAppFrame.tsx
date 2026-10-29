// Module ID: 16208
// Function ID: 16209
// Name: validateEmbeddedAppFrame
// Dependencies: [16209, 1084, 9293, 5664, 10840, 11574, 2029, 9300, 9294, 2]
// Exports: tryValidateEmbeddedAppFrame, validateEmbeddedAppFrameOnAnySurface

// Module 16208 (validateEmbeddedAppFrame)
import Constants from "Constants" /* 1084 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2029 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import getSocketFrameDefault from "getSocketFrame" /* 9293 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9294 */;
import RPCErrorDefault from "RPCError" /* 9300 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10840 */;
import RPCHelpers from "RPCHelpers" /* 11574 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 16209 */;
import size from "module_2" /* 2 */;

function validateEmbeddedAppFrame(socket) {
  return validateFrame(socket, false);
}
function validateFrame(transport, arg1) {
  const obj = RPCHelpers;
  const result = obj.validatePostMessageTransport(transport.transport);
  const obj2 = RPCHelpers;
  obj2.validateApplication(transport.application);
  const obj3 = EmbeddedSurfaceUtils;
  if (obj3.isEmbeddedApplication(transport.application)) {
    if (isPostMessageSocketDefault(transport)) {
      let tmp17;
      const tmp15 = getSocketFrameDefault(transport);
      if (arg1) {
        let tmp22 = null;
        if (null != tmp15) {
          tmp22 = null;
          if (tmp15.applicationId === transport.application.id) {
            tmp22 = tmp15;
          }
        }
        tmp17 = tmp22;
      } else {
        tmp17 = null;
        if (null != tmp15) {
          tmp17 = null;
          if (tmp15.applicationId === transport.application.id) {
            const tmp18 = tmp15.applicationId === ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() || tmp15.data.runsInBackground;
            const type = tmp15.surface.type;
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
              if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
                tmp17 = tmp15;
                if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY !== type) {
                  if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
                    let tmp19 = null;
                    if (tmp18) {
                      tmp19 = tmp15;
                    }
                    tmp17 = tmp19;
                  } else {
                    tmp17 = null;
                    if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
                      const surface = tmp15.surface;
                      tmp17 = null;
                    }
                  }
                }
              }
            }
            let tmp20 = tmp15;
            if (tmp15.surface.channelId === conjurePreviewSurface.CONJURE_UNKNOWN_CHANNEL) {
              let tmp21 = null;
              if (tmp18) {
                tmp21 = tmp15;
              }
              tmp20 = tmp21;
            }
            tmp17 = tmp20;
          }
        }
      }
      if (null == tmp17) {
        const self5 = this;
        const self6 = this;
        const obj4 = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
        const tmp25 = new RPCErrorDefault(obj4, "Command not available for this application");
        throw tmp25;
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
export function validateEmbeddedAppFrameOnAnySurface(arg0) {
  return validateFrame(arg0, true);
}
export function tryValidateEmbeddedAppFrame(socket) {
  try {
    return validateEmbeddedAppFrame(socket);
  } catch (tmp3) {
    if (tmp3 instanceof RPCErrorDefault) {
      return null;
    } else {
      throw tmp3;
    }
  }
}
