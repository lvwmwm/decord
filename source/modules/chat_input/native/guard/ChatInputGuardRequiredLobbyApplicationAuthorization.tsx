// Module ID: 11482
// Function ID: 89395
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 11482
import { Image } from "result";
import { jsx } from "result";
import result from "result";
import importAllResult from "result";
import result from "result";

let obj = {};
obj = { direction: false, style: false, borderWidth: false, borderRadius: require("result").radii.md };
obj.icon = obj;
let closure_5 = result.createStyles(obj);
result = result.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx");

export default require("result").memo(function ChatInputGuardRequiredLobbyApplicationAuthorization(requiredLinkedLobbyApplication) {
  requiredLinkedLobbyApplication = requiredLinkedLobbyApplication.requiredLinkedLobbyApplication;
  let arg1;
  if (!requiredLinkedLobbyApplication.showLinkedLobbyApplicationLoadingIndicator) {
    if (null != requiredLinkedLobbyApplication) {
      const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
      const connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
      arg1 = connectionEntrypointUrl;
      let obj = { type: "simple-action" };
      let tmp5;
      if (null != iconSource) {
        obj = { style: tmp.icon, source: iconSource };
        tmp5 = <Image {...obj} />;
      }
      obj.icon = tmp5;
      const intl = arg1(dependencyMap[6]).intl;
      obj = { name: requiredLinkedLobbyApplication.name };
      obj.message = intl.format(arg1(dependencyMap[6]).t.EvDn1D, obj);
      let stringResult;
      if (null != connectionEntrypointUrl) {
        const intl2 = arg1(dependencyMap[6]).intl;
        stringResult = intl2.string(arg1(dependencyMap[6]).t.S0W8Z5);
      }
      obj.actionLabel = stringResult;
      let fn;
      if (null != connectionEntrypointUrl) {
        fn = () => callback(closure_2[7]).openURLExternally(connectionEntrypointUrl);
      }
      obj.actionOnPress = fn;
      return jsx(importDefault(dependencyMap[5]), obj);
    }
  }
  return jsx(importDefault(dependencyMap[5]), { borderBottomColor: null, borderBottomWidth: null });
});
