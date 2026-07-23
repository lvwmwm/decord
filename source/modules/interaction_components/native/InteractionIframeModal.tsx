// Module ID: 16085
// Function ID: 124638
// Name: InteractionIframeModal
// Dependencies: [57, 31, 27, 4156, 33, 4130, 689, 16073, 5160, 8303, 16086, 4540, 3831, 1212, 10606, 10612, 4660, 4084, 4126, 8523, 2]
// Exports: default

// Module 16085 (InteractionIframeModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { BotTagTypes } from "ApplicationTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
_createForOfIteratorHelperLoose.wrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" };
_createForOfIteratorHelperLoose.headerCenterContainer = { flexDirection: "column", alignItems: "center" };
_createForOfIteratorHelperLoose.headerTitleContainer = { flexDirection: "row", marginBottom: 2 };
_createForOfIteratorHelperLoose.closeButton = { marginEnd: 8 };
_createForOfIteratorHelperLoose.spacerView = { marginStart: 8, width: 32 };
_createForOfIteratorHelperLoose.botTag = { marginStart: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default function InteractionIframeModal(application) {
  const tmp = _createForOfIteratorHelperLoose();
  application = application.application;
  const id = application.id;
  let obj = id(callback[7]);
  const iframeModalState = obj.useIframeModalState(application);
  const queryParams = iframeModalState.queryParams;
  const tmp3 = callback(React.useState(false), 2);
  const importDefault = tmp3[1];
  const insets = importDefault(callback[8])({ includeKeyboardHeight: true }).insets;
  const layoutEffect = React.useLayoutEffect(() => {
    id(callback[9]).lockOrientation("PORTRAIT");
    return () => {
      const result = id(callback[9]).restoreDefaultOrientation();
    };
  }, []);
  const items = [id];
  callback = React.useCallback(() => {
    callback(callback[10])(id, undefined);
  }, items);
  const items1 = [callback];
  const callback1 = React.useCallback(() => {
    callback();
    return true;
  }, items1);
  importDefault(callback[11])(callback1);
  let tmp8 = null;
  if (!tmp3[0]) {
    obj = {
      onActivityCrash() {
          callback(true);
          const timerId = setTimeout(() => outer1_1(false), 0);
        },
      applicationId: application.id
    };
    ({ channel_id: obj2.channelId, guild_id: obj2.guildId } = queryParams);
    obj.activityUrl = iframeModalState.iframeUrl;
    obj.activitySessionId = queryParams.instance_id;
    obj.queryParams = queryParams;
    obj.onLoadError = function onLoadError() {
      let obj = callback(callback[12]);
      obj = { key: "interaction_iframe_modal" };
      const intl = id(callback[13]).intl;
      obj.content = intl.string(id(callback[13]).t.HehpFW);
      obj.open(obj);
      callback();
    };
    let obj2 = id(callback[15]);
    obj.allowPopups = obj2.allowPopups(application);
    obj.referrerPolicy = "origin";
    obj.isPipOrGridMode = false;
    obj.webViewKey = undefined;
    obj.ignoreSilentHardwareSwitch = false;
    tmp8 = callback2(importDefault(callback[14]), obj);
    const tmp12 = importDefault(callback[14]);
  }
  obj = { style: items2 };
  items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  const obj1 = { style: tmp.header };
  obj2 = { accessibilityRole: "button" };
  let intl = id(callback[13]).intl;
  obj2.accessibilityLabel = intl.string(id(callback[13]).t.cpT0Cq);
  obj2.onPress = callback;
  obj2.style = tmp.closeButton;
  obj2.children = callback2(id(callback[17]).XLargeIcon, {});
  const items3 = [callback2(id(callback[16]).PressableOpacity, obj2), , ];
  const obj3 = { style: tmp.headerCenterContainer };
  const obj4 = { style: tmp.headerTitleContainer };
  const obj5 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  const items4 = [callback2(id(callback[18]).Text, obj5), ];
  const obj6 = { type: BotTagTypes.BOT };
  const bot = application.bot;
  let verified;
  if (null != bot) {
    verified = bot.verified;
  }
  obj6.verified = verified;
  obj6.style = tmp.botTag;
  items4[1] = callback2(importDefault(callback[19]), obj6);
  obj4.children = items4;
  const items5 = [closure_8(View, obj4), ];
  const obj7 = { variant: "text-xs/medium", color: "interactive-text-default", children: application.title };
  items5[1] = callback2(id(callback[18]).Text, obj7);
  obj3.children = items5;
  items3[1] = closure_8(View, obj3);
  items3[2] = callback2(View, { style: tmp.spacerView });
  obj1.children = items3;
  const items6 = [closure_8(View, obj1), tmp8];
  obj.children = items6;
  return closure_8(View, obj);
};
