// Module ID: 14245
// Function ID: 14246
// Name: ChatInputGuardReturnToGameProfile
// Dependencies: [19, 21, 5141, 575, 14239, 5851, 1411, 1113, 11085, 2]

// Module 14245 (ChatInputGuardReturnToGameProfile)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import AvatarUtils from "AvatarUtils" /* 1411 */;
import FastImageDefault from "FastImage" /* 5851 */;
import ArrowSmallLeftIcon2 from "ArrowSmallLeftIcon" /* 11085 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 14239 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
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
