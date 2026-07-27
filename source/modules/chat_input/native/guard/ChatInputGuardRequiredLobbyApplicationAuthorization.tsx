// Module ID: 11490
// Function ID: 89425
// Dependencies: [31, 27, 33, 4131, 689, 11478, 1212, 3828, 2]

// Module 11490
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { height: 40, width: 40, resizeMode: "contain", borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.icon = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function ChatInputGuardRequiredLobbyApplicationAuthorization(requiredLinkedLobbyApplication) {
  requiredLinkedLobbyApplication = requiredLinkedLobbyApplication.requiredLinkedLobbyApplication;
  let connectionEntrypointUrl;
  if (!requiredLinkedLobbyApplication.showLinkedLobbyApplicationLoadingIndicator) {
    if (null != requiredLinkedLobbyApplication) {
      const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
      connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
      let obj = { type: "simple-action" };
      let tmp5;
      if (null != iconSource) {
        obj = { style: tmp.icon, source: iconSource };
        tmp5 = <Image style={tmp.icon} source={iconSource} />;
      }
      obj.icon = tmp5;
      const intl = connectionEntrypointUrl(1212).intl;
      obj = { name: requiredLinkedLobbyApplication.name };
      obj.message = intl.format(connectionEntrypointUrl(1212).t.EvDn1D, obj);
      let stringResult;
      if (null != connectionEntrypointUrl) {
        const intl2 = connectionEntrypointUrl(1212).intl;
        stringResult = intl2.string(connectionEntrypointUrl(1212).t.S0W8Z5);
      }
      obj.actionLabel = stringResult;
      let fn;
      if (null != connectionEntrypointUrl) {
        fn = () => outer1_1(outer1_2[7]).openURLExternally(connectionEntrypointUrl);
      }
      obj.actionOnPress = fn;
      return jsx(importDefault(11478), { name: requiredLinkedLobbyApplication.name });
    }
  }
  return jsx(importDefault(11478), { type: "simple-action", message: "" });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx");

export default memoResult;
