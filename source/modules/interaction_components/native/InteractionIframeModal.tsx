// Module ID: 15956
// Function ID: 122379
// Name: InteractionIframeModal
// Dependencies: []
// Exports: default

// Module 15956 (InteractionIframeModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const BotTagTypes = arg1(dependencyMap[3]).BotTagTypes;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
obj.wrapper = obj;
obj.header = {};
obj.headerCenterContainer = {};
obj.headerTitleContainer = {};
obj.closeButton = { marginEnd: 8 };
obj.spacerView = {};
obj.botTag = { marginStart: 4 };
let closure_9 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default function InteractionIframeModal(children) {
  const tmp = callback3();
  const application = children.application;
  const id = application.id;
  const arg1 = id;
  let obj = arg1(dependencyMap[7]);
  const iframeModalState = obj.useIframeModalState(children);
  const queryParams = iframeModalState.queryParams;
  const tmp3 = callback(React.useState(false), 2);
  const importDefault = tmp3[1];
  const insets = importDefault(dependencyMap[8])({ includeKeyboardHeight: true }).insets;
  const layoutEffect = React.useLayoutEffect(() => {
    id(callback[9]).lockOrientation("PORTRAIT");
    return () => {
      const result = callback(closure_2[9]).restoreDefaultOrientation();
    };
  }, []);
  const items = [id];
  const callback = React.useCallback(() => {
    callback(callback[10])(id, undefined);
  }, items);
  const dependencyMap = callback;
  const items1 = [callback];
  const callback1 = React.useCallback(() => {
    callback();
    return true;
  }, items1);
  importDefault(dependencyMap[11])(callback1);
  let tmp8 = null;
  if (!tmp3[0]) {
    obj = {
      onActivityCrash() {
          callback(true);
          const timerId = setTimeout(() => callback(false), 0);
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
    let obj2 = arg1(dependencyMap[15]);
    obj.allowPopups = obj2.allowPopups(application);
    obj.referrerPolicy = "origin";
    obj.isPipOrGridMode = false;
    obj.webViewKey = undefined;
    obj.ignoreSilentHardwareSwitch = false;
    tmp8 = callback2(importDefault(dependencyMap[14]), obj);
    const tmp12 = importDefault(dependencyMap[14]);
  }
  obj = { style: items2 };
  const items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  const obj1 = { style: tmp.header };
  obj2 = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[13]).intl;
  obj2.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.cpT0Cq);
  obj2.onPress = callback;
  obj2.style = tmp.closeButton;
  obj2.children = callback2(arg1(dependencyMap[17]).XLargeIcon, {});
  const items3 = [callback2(arg1(dependencyMap[16]).PressableOpacity, obj2), , ];
  const obj3 = { style: tmp.headerCenterContainer };
  const obj4 = { style: tmp.headerTitleContainer };
  const items4 = [callback2(arg1(dependencyMap[18]).Text, { children: application.name }), ];
  const obj6 = { type: BotTagTypes.BOT };
  const bot = application.bot;
  let verified;
  if (null != bot) {
    verified = bot.verified;
  }
  obj6.verified = verified;
  obj6.style = tmp.botTag;
  items4[1] = callback2(importDefault(dependencyMap[19]), obj6);
  obj4.children = items4;
  const items5 = [closure_8(View, obj4), callback2(arg1(dependencyMap[18]).Text, { children: children.title })];
  obj3.children = items5;
  items3[1] = closure_8(View, obj3);
  items3[2] = callback2(View, { style: tmp.spacerView });
  obj1.children = items3;
  const items6 = [closure_8(View, obj1), tmp8];
  obj.children = items6;
  return closure_8(View, obj);
};
