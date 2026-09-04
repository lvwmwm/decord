// Module ID: 14387
// Function ID: 14388
// Name: validateEmbeddedAppFrame
// Dependencies: [9439, 14388, 4383, 673, 9440, 9488, 8786, 9483, 2]
// Exports: tryValidateEmbeddedAppFrame

// Module 14387 (validateEmbeddedAppFrame)
import getApplicationFlags from "getApplicationFlags" /* 8786 */;
import prototypeDefault from "prototype" /* 9483 */;
import recurseReplaceContentTree from "recurseReplaceContentTree" /* 9488 */;
import closure_3 from "map" /* 9439 */;
import closure_4 from "getBuilderPreviewApplicationId" /* 14388 */;
import { TransportTypes } from "RPC_SCOPE_CONFIG" /* 4383 */;
import ME from "ME" /* 673 */;
import FrameLayoutModes from "FrameLayoutModes" /* 9440 */;

require = arg1;
function validateEmbeddedAppFrame(transport) {
  let obj = recurseReplaceContentTree;
  const result = obj.validatePostMessageTransport(transport.transport);
  obj1 = recurseReplaceContentTree;
  let obj2 = getApplicationFlags;
  if (obj2.hasApplicationFlag(transport.application, constants.EMBEDDED)) {
    if (transport.source.type !== TransportTypes.POST_MESSAGE) {
      obj = { errorCode: null };
      obj[0] = constants2.INVALID_COMMAND;
      const tmp31 = new prototypeDefault(obj, "command requires an embedded app frame");
      throw tmp31;
    } else {
      const tmp35 = callback(frameByIframeId.getFrameByIframeId(transport.source.iframeId));
      let tmp13 = null;
      if (null != tmp35) {
        const type = tmp35.surface.type;
        if (constants3.APP_CHANNEL === type) {
          obj = { channelId: null, guildId: null };
          obj[0] = tmp35.surface.channelId;
          obj[1] = tmp35.surface.guildId;
          tmp13 = obj;
        } else {
          tmp13 = null;
          if (tmp12.MAIN === type) {
            if (tmp35.applicationId === builderPreviewApplicationId.getBuilderPreviewApplicationId()) {
              obj1 = { channelId: "left", guildId: "call" };
            } else {
              obj1 = null;
            }
            tmp13 = obj1;
          }
        }
      }
      if (null == tmp13) {
        obj2 = { errorCode: null };
        obj2[0] = constants2.UNAUTHORIZED_FOR_APPLICATION;
        const tmp24 = new prototypeDefault(obj2, "Command not available for this application");
        throw tmp24;
      } else {
        const obj3 = { applicationId: null, iframeId: null };
        obj3[0] = validateApplicationResult;
        obj3[1] = transport.source.iframeId;
        const merged = Object.assign(tmp13);
        return obj3;
      }
    }
  } else {
    const obj4 = { errorCode: null };
    obj4[0] = constants2.UNAUTHORIZED_FOR_APPLICATION;
    const tmp9 = new prototypeDefault(obj4, "This application cannot access this API");
    throw tmp9;
  }
  validateApplicationResult = obj1.validateApplication(transport.application);
}
({ ApplicationFlags: closure_6, RPCErrors: error } = ME);
({ asLaunched: closure_8, EmbeddedSurfaceType: c9 } = FrameLayoutModes);
let result = require("set").fileFinishedImporting("modules/rpc/helpers/validateEmbeddedAppFrame.tsx");

export default validateEmbeddedAppFrame;
export const tryValidateEmbeddedAppFrame = function tryValidateEmbeddedAppFrame(closure_1_0) {
  try {
    return validateEmbeddedAppFrame(closure_1_0);
  } catch (tmp3) {
    if (tmp3 instanceof prototypeDefault) {
      return null;
    } else {
      throw tmp3;
    }
  }
};
