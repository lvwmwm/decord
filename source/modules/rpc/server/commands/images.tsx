// Module ID: 13454
// Function ID: 103389
// Dependencies: [1849, 4033, 653, 10528, 1392, 10525, 1447, 2]

// Module 13454
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

const require = arg1;
const RPCErrors = ME.RPCErrors;
let obj = {
  scope: require("RPC_SCOPE_CONFIG").RPC_LOCAL_SCOPE,
  validation(string) {
    let obj = importDefault(10528)(string);
    obj = {};
    const requiredResult = obj.required();
    const stringResult = string.string();
    obj.type = string.string().required().valid(["user"]);
    const requiredResult1 = string.string().required();
    obj.id = string.string().required();
    const stringResult1 = string.string();
    const stringResult2 = string.string();
    obj.format = string.string().required().valid(["png", "webp", "jpg"]);
    const requiredResult2 = string.string().required();
    const numberResult = string.number();
    obj.size = string.number().required().valid([16, 32, 64, 128, 256, 512, 1024]);
    return requiredResult.keys(obj);
  },
  handler(args) {
    let format;
    let id;
    args = args.args;
    ({ id, format } = args);
    if (format === undefined) {
      format = "png";
    }
    let num = args.size;
    if (num === undefined) {
      num = 128;
    }
    let text;
    if ("user" === args.type) {
      user = user.getUser(id);
      if (null == user) {
        let tmp15 = importDefault(10525);
        let obj = { errorCode: RPCErrors.INVALID_USER };
        const _HermesInternal = HermesInternal;
        const prototype2 = tmp15.prototype;
        tmp15 = new tmp15(obj, "Invalid user id: " + id);
        throw tmp15;
      } else {
        const obj3 = importDefault(1392);
        const userAvatarURL = obj3.getUserAvatarURL(user, false, num, format);
        const _window = window;
        let tmp2 = null != CDN_HOST;
        if (tmp2) {
          tmp2 = -1 !== userAvatarURL.indexOf(CDN_HOST);
        }
        text = userAvatarURL;
        if (tmp2) {
          text = `${arr}&_=`;
        }
      }
    }
    if (null == text) {
      let tmp6 = importDefault(10525);
      obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const prototype = tmp6.prototype;
      tmp6 = new tmp6(obj, "No valid type.");
      throw tmp6;
    } else {
      const _fetch = fetch;
      const response = fetch(text);
      const nextPromise = response.then((blob) => blob.blob());
      return response.then((blob) => blob.blob()).then((arg0) => outer1_0(outer1_2[6]).readFileAsBase64(arg0)).then((data_url) => ({ data_url }));
    }
  }
};
const result = require("ME").fileFinishedImporting("modules/rpc/server/commands/images.tsx");

export default { [ME.RPCCommands.GET_IMAGE]: obj };
