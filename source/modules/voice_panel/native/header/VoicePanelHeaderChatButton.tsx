// Module ID: 15694
// Function ID: 119868
// Name: VoicePanelHeaderChatButton
// Dependencies: []
// Exports: default

// Module 15694 (VoicePanelHeaderChatButton)
let closure_3 = importAll(dependencyMap[0]);
const ComponentActions = arg1(dependencyMap[1]).ComponentActions;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { badgeContainer: { convertShortcutToName: 6, hasUnreadMessages: 85, CreatorMonetizationRestrictions: null } };
obj = { "Null": 800, "Null": 16, borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.badge = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.redBG = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.RED_400 };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.RED_400 };
obj.whiteBG = { backgroundColor: importDefault(dependencyMap[4]).colors.WHITE };
let closure_7 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.WHITE };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default function VoicePanelHeaderChatButton(channelId) {
  const tmp = callback2();
  const callback = React.useCallback(() => {
    const ComponentDispatch = callback(closure_2[5]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
  }, []);
  const tmp3 = importDefault(dependencyMap[6])(channelId.channelId);
  let obj = {};
  obj = {};
  const tmp4 = "mention" === tmp3 ? tmp.redBG : tmp.whiteBG;
  const tmp5 = closure_6;
  const tmp6 = importDefault(dependencyMap[7]);
  obj = { color: importDefault(dependencyMap[4]).colors.WHITE, size: "sm" };
  obj.icon = callback(arg1(dependencyMap[9]).ChatIcon, obj);
  const intl = arg1(dependencyMap[10]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.5KxXrK);
  obj.onPress = callback;
  const items = [callback(importDefault(dependencyMap[8]), obj), ];
  let tmp8 = null != tmp3;
  if (tmp8) {
    const obj1 = { style: tmp.badgeContainer };
    const obj2 = {};
    const items1 = [tmp.badge, tmp4];
    obj2.style = items1;
    obj1.children = callback(importDefault(dependencyMap[7]), obj2);
    tmp8 = callback(importDefault(dependencyMap[7]), obj1);
    const tmp12 = importDefault(dependencyMap[7]);
  }
  items[1] = tmp8;
  obj.children = items;
  return tmp5(tmp6, obj);
};
