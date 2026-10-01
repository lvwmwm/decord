// Module ID: 17170
// Function ID: 17171
// Name: InteractionIframeModal
// Dependencies: [32, 19, 17, 1349, 21, 4836, 576, 17158, 6402, 7780, 17171, 5276, 4528, 1115, 8922, 8931, 5435, 4785, 4832, 8741, 2]
// Exports: default

// Module 17170 (InteractionIframeModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import ApplicationConstants from "ApplicationConstants" /* 1349 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import closeIFrameModalDefault from "closeIFrameModal" /* 17171 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  let closure_1;
  let first;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let onPress;
  let tmp2Result;
  let verified;
  const tmp = closure_9();
  application = application.application;
  const id = application.id;
  const title = application.title;
  let obj = id(onPress[7]);
  const iframeModalState = obj.useIframeModalState(application);
  const queryParams = iframeModalState.queryParams;
  const iframeUrl = iframeModalState.iframeUrl;
  [first, importDefault] = react.useState(false);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = id(callback[9]);
    obj.lockOrientation("PORTRAIT");
    return () => {
      const obj = id(onPress[9]);
      const result = obj.restoreDefaultOrientation();
    };
  }, []);
  const items = [id];
  onPress = react.useCallback(() => {
    closeIFrameModalDefault(id, undefined);
  }, items);
  const items1 = [onPress];
  const callback1 = react.useCallback(() => {
    callback();
    return true;
  }, items1);
  require("useBackPressHandler")(callback1);
  let tmp12 = null;
  if (!first) {
    ({ channel_id: obj2.channelId, guild_id: obj2.guildId } = queryParams);
    const obj3 = {
      onActivityCrash() {
          closure_1(true);
          const timerId = setTimeout(() => closure_1_1(false), 0);
        },
      applicationId: application.id,
      channelId: null,
      guildId: null,
      activityUrl: iframeUrl,
      activitySessionId: queryParams.instance_id,
      queryParams,
      onLoadError() {
          let intl;
          const obj = { key: "interaction_iframe_modal", content: intl.string(intl2.t.HehpFW) };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl2.intl;
          open(obj);
          callback();
        },
      allowPopups: tmp2Result.allowPopups(application),
      referrerPolicy: "origin",
      isPipOrGridMode: false,
      webViewKey: "flex",
      ignoreSilentHardwareSwitch: "geste"
    };
    const tmp7Result = require("EmbeddedActivityWebView");
    tmp2Result = id(onPress[15]);
    tmp12 = closure_7(tmp7Result, obj3);
  }
  const obj4 = { style: items2, children: items6 };
  items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  const obj5 = { style: tmp.header, children: items3 };
  const obj6 = { accessibilityRole: "button", accessibilityLabel: intl.string(id(onPress[13]).t.cpT0Cq), onPress, style: tmp.closeButton, children: closure_7(id(onPress[17]).XLargeIcon, {}) };
  const PressableOpacity = tmp2(tmp3[16]).PressableOpacity;
  intl = tmp2(tmp3[13]).intl;
  items3 = [closure_7(PressableOpacity, obj6), , ];
  const obj8 = { style: tmp.headerTitleContainer, children: items4 };
  items4 = [, ];
  const obj7 = { style: tmp.headerCenterContainer, children: items5 };
  const obj9 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  items4[0] = closure_7(id(onPress[18]).Text, obj9);
  const bot = application.bot;
  const obj10 = { type: BotTagTypes.BOT, verified, style: tmp.botTag };
  verified = undefined;
  const tmp7Result2 = require("BotTag");
  if (bot != null) {
    verified = bot.verified;
  }
  items4[1] = closure_7(tmp7Result2, obj10);
  items5 = [closure_8(View, obj8), closure_7(id(tmp3[18]).Text, { variant: "text-xs/medium", color: "interactive-text-default", children: title })];
  items3[1] = closure_8(View, obj7);
  const obj11 = { style: tmp.spacerView };
  items3[2] = closure_7(View, obj11);
  items6 = [closure_8(View, obj5), tmp12];
  return closure_8(View, obj4);
};
