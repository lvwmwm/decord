// Module ID: 11953
// Function ID: 11954
// Name: ChatInputGuardRequiredLobbyApplicationAuthorization
// Dependencies: [19, 17, 21, 4836, 576, 11941, 1115, 4525, 2]

// Module 11953 (ChatInputGuardRequiredLobbyApplicationAuthorization)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4525 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 11941 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let size;
const Image = react_native.Image;
const jsx = Fragment.jsx;
let obj = { icon: size };
size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
let closure_5 = createStyles.createStyles(obj);
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
      let tmp5;
      const iconSource = requiredLinkedLobbyApplication.getIconSource(80);
      if (null != iconSource) {
        tmp5 = <Image style={tmp.icon} source={iconSource} />;
      }
      if (shouldRelaunchLinkedLobbyApplication) {
        ChatInputGuardDefault;
        const intl3 = connectionEntrypointUrl(1115).intl;
        const obj3 = { name: requiredLinkedLobbyApplication.name };
        return <tmp15 type="simple-action" icon={tmp5} message={intl3.format(connectionEntrypointUrl(1115).t["SU2mY/"], obj3)} />;
      } else {
        connectionEntrypointUrl = requiredLinkedLobbyApplication.connectionEntrypointUrl;
        const obj4 = { type: "simple-action", icon: tmp5, message: intl.format(connectionEntrypointUrl(1115).t.EvDn1D, obj5), actionLabel: stringResult, actionOnPress: fn };
        const tmp9 = ChatInputGuardDefault;
        intl = connectionEntrypointUrl(1115).intl;
        stringResult = undefined;
        obj5 = { name: requiredLinkedLobbyApplication.name };
        const tmp6 = jsx;
        if (null != connectionEntrypointUrl) {
          const intl2 = tmp10(1115).intl;
          stringResult = intl2.string(tmp10(1115).t.S0W8Z5);
        }
        fn = undefined;
        if (null != connectionEntrypointUrl) {
          fn = () => {
            const obj = LinkingDefault;
            return obj.openURLExternally(connectionEntrypointUrl);
          };
        }
        return tmp6(tmp9, obj4);
      }
    }
  }
  return jsx(ChatInputGuardDefault, { type: "simple-action", message: "" });
});
size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx");

export default memoResult;
