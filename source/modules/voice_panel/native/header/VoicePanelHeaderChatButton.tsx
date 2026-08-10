// Module ID: 16204
// Function ID: 16205
// Name: VoicePanelHeaderChatButton
// Dependencies: [19, 676, 21, 4303, 712, 1231, 16205, 5781, 16110, 4800, 1236, 2]
// Exports: default

// Module 16204 (VoicePanelHeaderChatButton)
import noop from "noop";
import { ComponentActions } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { badgeContainer: { position: "absolute", top: -2, right: -2 }, badge: null, notificationBadge: null };
createCacheKey = { width: 8, height: 8, borderRadius: require("Themes").radii.round };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx");

export default function VoicePanelHeaderChatButton(channelId) {
  const tmp = createCacheKey();
  const callback = React.useCallback(() => {
    const ComponentDispatch = callback(table[5]).ComponentDispatch;
    ComponentDispatch.dispatch(constants.VOICE_PANEL_OPEN_CHAT_TAB);
  }, []);
  const tmp5 = importDefault(16205)(channelId.channelId);
  const tmp6 = closure_6;
  let obj = { icon: null, accessibilityLabel: null, onPress: null };
  const tmp7 = importDefault(5781);
  obj = { color: null, size: "sm" };
  obj[0] = importDefault(712).colors.WHITE;
  obj[0] = callback(require(4800) /* ChatIcon */.ChatIcon, obj);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["5KxXrK"]);
  obj[2] = callback;
  const children = [callback(importDefault(16110), obj), ];
  let tmp8Result = null != tmp5;
  if (tmp8Result) {
    obj = { style: null, children: null };
    obj[0] = tmp.badgeContainer;
    const obj1 = { style: null };
    const items1 = [, ];
    ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp);
    obj1[0] = items1;
    obj[1] = tmp8(tmp3(5781), obj1);
    tmp8Result = tmp8(tmp3(5781), obj);
    const tmp3Result = tmp3(5781);
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
};
