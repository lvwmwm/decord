// Module ID: 13977
// Function ID: 13978
// Name: ChatInputGuardReturnToGameProfile
// Dependencies: [19, 21, 5009, 575, 13971, 5712, 1410, 1114, 10881, 2]

// Module 13977 (ChatInputGuardReturnToGameProfile)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import FastImageDefault from "FastImage" /* 5712 */;
import ArrowSmallLeftIcon2 from "ArrowSmallLeftIcon" /* 10881 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 13971 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let size;
const jsx = Fragment.jsx;
let obj = { icon: size };
size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
  let obj2;
  let tmp2Result;
  const tmp = closure_4();
  ChatInputGuardDefault;
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    const obj = { style: tmp.icon, source: obj2.makeSource(pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) };
    const tmp3Result = FastImageDefault;
    obj2 = AvatarUtils;
    tmp2Result = tmp2(tmp3Result, obj);
  }
  const intl = intl3.intl;
  const obj4 = { gameName: pendingGameProfileReturn.pendingGameProfileReturn.gameName };
  const intl2 = intl3.intl;
  ({ color: nativeDefault.colors.WHITE });
  const ArrowSmallLeftIcon = ArrowSmallLeftIcon2.ArrowSmallLeftIcon;
  return <tmp5 type="simple-action" icon={tmp2Result} message={intl.format(intl3.t.HRHaSF, obj4)} actionLabel={intl2.string(intl3.t.DjifDP)} actionIcon={null} actionOnPress={arg0.pendingGameProfileReturn.onReturnToGameProfile} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default memoResult;
