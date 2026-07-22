// Module ID: 13287
// Function ID: 100906
// Dependencies: [5, 57, 31, 27, 1348, 1849, 1347, 8811]

// Module 13287
import asyncGeneratorStep from "asyncGeneratorStep";
import module_31 from "module_31";
import UserRowModes from "UserRowModes";

const RPCErrors = module_31.RPCErrors;
const result = UserRowModes.fileFinishedImporting("modules/rpc/server/commands/images.tsx");

export default {
  [module_31.RPCCommands.GET_IMAGE]: {
    scope: require("_slicedToArray").RPC_LOCAL_SCOPE,
    validation(string) {
      let obj = importDefault(dependencyMap[3])(string);
      obj = {};
      const requiredResult = obj.required();
      const stringResult = string.string();
      obj.type = string.string().required().valid([]);
      const requiredResult1 = string.string().required();
      obj.id = string.string().required();
      const stringResult1 = string.string();
      const stringResult2 = string.string();
      obj.format = string.string().required().valid([null, null, null]);
      const requiredResult2 = string.string().required();
      const numberResult = string.number();
      obj.size = string.number().required().valid(["disableStaticBackground", "favoritesCategory", "blurEffectNameOverride", "refreshSearchTokens", "rating", "preferredMimeType", "_method"]);
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
        const user = user.getUser(id);
        if (null == user) {
          let tmp15 = importDefault(dependencyMap[5]);
          let obj = { errorCode: RPCErrors.INVALID_USER };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp15.prototype;
          tmp15 = new tmp15(obj, "Invalid user id: " + id);
          throw tmp15;
        } else {
          const obj3 = importDefault(dependencyMap[4]);
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
        let tmp6 = importDefault(dependencyMap[5]);
        obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const prototype = tmp6.prototype;
        tmp6 = new tmp6(obj, "No valid type.");
        throw tmp6;
      } else {
        const _fetch = fetch;
        const response = fetch(text);
        const nextPromise = response.then((blob) => blob.blob());
        return response.then((blob) => blob.blob()).then((arg0) => callback(closure_2[6]).readFileAsBase64(arg0)).then((data_url) => ({ data_url }));
      }
    }
  }
};
