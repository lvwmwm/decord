// Module ID: 14018
// Function ID: 14019
// Name: ChatInputGuardRequiredLobbyApplicationAuthorization
// Dependencies: [19, 21, 5014, 575, 14006, 5717, 1113, 5709, 2]

// Module 14018 (ChatInputGuardRequiredLobbyApplicationAuthorization)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5709 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 14006 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let size;
const jsx = Fragment.jsx;
let obj = { icon: size };
size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(function ChatInputGuardRequiredLobbyApplicationAuthorization(requiredLinkedLobbyApplication) {
  let fn;
  let intl;
  let obj5;
  let shouldRelaunchLinkedLobbyApplication;
  let showLinkedLobbyApplicationLoadingIndicator;
  let stringResult;
  requiredLinkedLobbyApplication = requiredLinkedLobbyApplication.requiredLinkedLobbyApplication;
  let connectionEntrypointUrl;
  ({ showLinkedLobbyApplicationLoadingIndicator, shouldRelaunchLinkedLobbyApplication } = requiredLinkedLobbyApplication);
  if (!showLinkedLobbyApplicationLoadingIndicator) {
    if (null != requiredLinkedLobbyApplication) {
      let tmp6;
      const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
      if (null != iconSource) {
        tmp6 = jsx(FastImageDefault, { style: tmp.icon, source: iconSource });
      }
      if (shouldRelaunchLinkedLobbyApplication) {
        ChatInputGuardDefault;
        const intl3 = connectionEntrypointUrl(1113).intl;
        const obj3 = { name: requiredLinkedLobbyApplication.name };
        return <tmp16 type="simple-action" icon={tmp6} message={intl3.format(connectionEntrypointUrl(1113).t["SU2mY/"], obj3)} />;
      } else {
        connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
        const obj4 = { type: "simple-action", icon: tmp6, message: intl.format(connectionEntrypointUrl(1113).t.EvDn1D, obj5), actionLabel: stringResult, actionOnPress: fn };
        const tmp10 = ChatInputGuardDefault;
        intl = connectionEntrypointUrl(1113).intl;
        stringResult = undefined;
        obj5 = { name: requiredLinkedLobbyApplication.name };
        const tmp7 = jsx;
        if (null != connectionEntrypointUrl) {
          const intl2 = tmp11(1113).intl;
          stringResult = intl2.string(tmp11(1113).t.S0W8Z5);
        }
        fn = undefined;
        if (null != connectionEntrypointUrl) {
          fn = () => {
            const obj = LinkingDefault;
            return obj.openURLExternally(connectionEntrypointUrl);
          };
        }
        return tmp7(tmp10, obj4);
      }
    }
  }
  return jsx(ChatInputGuardDefault, { type: "simple-action", message: "" });
});
size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx");

export default memoResult;
