// Module ID: 19501
// Function ID: 19502
// Name: InteractionIframeModal
// Dependencies: [32, 19, 17, 1360, 21, 5014, 575, 19489, 11798, 5607, 8903, 19502, 6022, 6980, 1113, 10768, 5624, 9202, 19094, 6848, 5712, 11839, 2]
// Exports: default

// Module 19501 (InteractionIframeModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import makeIframeIdDefault from "makeIframeId" /* 11798 */;
import closeIFrameModalDefault from "closeIFrameModal" /* 19502 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const BotTagTypes = ApplicationConstants.BotTagTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { wrapper: obj2, header: { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" }, headerCenterContainer: { flexDirection: "column", alignItems: "center" }, headerTitleContainer: { flexDirection: "row", marginBottom: 2 }, closeButton: { marginEnd: 8 }, spacerView: { marginStart: 8, width: 32 }, botTag: { marginStart: 4 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
let closure_9 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default function InteractionIframeModal(application) {
  let callback;
  let id;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let onDisallowedNavigation;
  let title;
  let tmp2Result;
  let tmp7;
  let verified;
  const tmp = closure_9();
  application = application.application;
  const id2 = application.id;
  ({ title, id } = application);
  let obj = id2(onDisallowedNavigation[7]);
  const iframeModalState = obj.useIframeModalState(application);
  const queryParams = iframeModalState.queryParams;
  const iframeUrl = iframeModalState.iframeUrl;
  const tmp5 = importDefault;
  const tmp6 = _slicedToArray(react.useState(require("makeIframeId")), 2);
  [tmp7, importDefault] = tmp6;
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = id2(callback[10]);
    obj.lockOrientation("PORTRAIT");
    return () => {
      const obj = id2(callback[10]);
      const result = obj.restoreDefaultOrientation();
    };
  }, []);
  const items = [id2];
  onDisallowedNavigation = react.useCallback(() => {
    closeIFrameModalDefault(id2, undefined);
  }, items);
  const items1 = [onDisallowedNavigation];
  const callback1 = react.useCallback(() => {
    callback();
    return true;
  }, items1);
  require("useBackPressHandler")(callback1);
  const obj2 = { style: items2, children: items6 };
  items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  const obj3 = { style: tmp.header, children: items3 };
  const obj4 = { accessibilityRole: "button", accessibilityLabel: intl.string(id2(onDisallowedNavigation[14]).t.cpT0Cq), onPress: onDisallowedNavigation, style: tmp.closeButton, children: closure_7(id2(onDisallowedNavigation[15]).XLargeIcon, {}) };
  const PressableOpacity = id2(onDisallowedNavigation[13]).PressableOpacity;
  intl = id2(onDisallowedNavigation[14]).intl;
  items3 = [closure_7(PressableOpacity, obj4), , ];
  const obj6 = { style: tmp.headerTitleContainer, children: items4 };
  items4 = [, ];
  const obj5 = { style: tmp.headerCenterContainer, children: items5 };
  const obj7 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  items4[0] = closure_7(id2(onDisallowedNavigation[16]).Text, obj7);
  const bot = application.bot;
  const obj8 = { type: BotTagTypes.BOT, verified, style: tmp.botTag };
  verified = undefined;
  const tmp15 = require("BotTag");
  if (bot != null) {
    verified = bot.verified;
  }
  items4[1] = closure_7(tmp15, obj8);
  items5 = [closure_8(View, obj6), closure_7(id2(tmp3[16]).Text, { variant: "text-xs/medium", color: "interactive-text-default", children: title })];
  items3[1] = closure_8(View, obj5);
  const obj9 = { style: tmp.spacerView };
  items3[2] = closure_7(View, obj9);
  items6 = [closure_8(View, obj3), ];
  const obj10 = {
    iframeId: tmp7,
    onDisallowedNavigation,
    onActivityCrash() {
      importDefault(makeIframeIdDefault());
    },
    applicationId: application.id,
    channelId: queryParams.channel_id,
    guildId: queryParams.guild_id,
    contextSource: obj11,
    activityUrl: iframeUrl,
    activitySessionId: queryParams.instance_id,
    queryParams,
    onLoadError() {
      let intl;
      const obj = { text: intl.string(intl2.t.HehpFW) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      open("interaction_iframe_modal", obj);
      callback();
    },
    allowPopups: tmp2Result.allowPopups(application),
    referrerPolicy: "origin",
    isPipOrGridMode: false,
    ignoreSilentHardwareSwitch: false
  };
  obj11 = { type: id2(onDisallowedNavigation[19]).EmbeddedContextSourceType.INTERACTION, interactionId: id };
  const tmp5Result = tmp5(onDisallowedNavigation[18]);
  tmp2Result = id2(onDisallowedNavigation[21]);
  items6[1] = closure_7(tmp5Result, obj10, tmp7);
  return closure_8(View, obj2);
};
