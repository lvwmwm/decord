// Module ID: 15881
// Function ID: 122579
// Name: VoicePanelHeaderChatButton
// Dependencies: [31, 653, 33, 4131, 689, 1207, 15882, 5515, 15787, 4630, 1212, 2]
// Exports: default

// Module 15881 (VoicePanelHeaderChatButton)
import result from "result";
import { ComponentActions } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { badgeContainer: { position: "absolute", top: -2, right: -2 } };
_createForOfIteratorHelperLoose = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.badge = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.mentionBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
_createForOfIteratorHelperLoose.unreadBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default function VoicePanelHeaderChatButton(channelId) {
  const tmp = _createForOfIteratorHelperLoose();
  const callback = React.useCallback(() => {
    const ComponentDispatch = outer1_0(outer1_2[5]).ComponentDispatch;
    ComponentDispatch.dispatch(outer1_4.VOICE_PANEL_OPEN_CHAT_TAB);
  }, []);
  const tmp3 = importDefault(15882)(channelId.channelId);
  let obj = {};
  obj = {};
  const tmp4 = "mention" === tmp3 ? tmp.mentionBadge : tmp.unreadBadge;
  const tmp5 = closure_6;
  const tmp6 = importDefault(5515);
  obj = { color: importDefault(689).colors.WHITE, size: "sm" };
  obj.icon = callback(require(4630) /* ChatIcon */.ChatIcon, obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["5KxXrK"]);
  obj.onPress = callback;
  const items = [callback(importDefault(15787), obj), ];
  let tmp8 = null != tmp3;
  if (tmp8) {
    const obj1 = { style: tmp.badgeContainer };
    const obj2 = {};
    const items1 = [tmp.badge, tmp4];
    obj2.style = items1;
    obj1.children = callback(importDefault(5515), obj2);
    tmp8 = callback(importDefault(5515), obj1);
    const tmp12 = importDefault(5515);
  }
  items[1] = tmp8;
  obj.children = items;
  return tmp5(tmp6, obj);
};
