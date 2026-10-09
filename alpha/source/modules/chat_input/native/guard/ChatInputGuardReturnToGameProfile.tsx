// Module ID: 12128
// Function ID: 12129
// Name: ChatInputGuardReturnToGameProfile
// Dependencies: [19, 21, 5091, 587, 558, 576, 6163, 1415, 1126, 10690, 12122, 2]

// Module 12128 (ChatInputGuardReturnToGameProfile)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import FastImageDefault from "FastImage" /* 6163 */;
import ArrowSmallLeftIcon2 from "ArrowSmallLeftIcon" /* 10690 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12122 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let size;
const jsx = Fragment.jsx;
let obj = { icon: size };
size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
  const obj = react2;
  const cResult = obj.c(11);
  const tmp4 = closure_4();
  if (cResult[0] === pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    let tmp5;
    let tmp10;
    let tmp14;
    let tmp13;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== pendingGameProfileReturn.pendingGameProfileReturn.gameName) {
      const intl = tmp(1126).intl;
      const obj2 = { gameName: pendingGameProfileReturn.pendingGameProfileReturn.gameName };
      const formatResult = intl.format(intl3.t.HRHaSF, obj2);
      cResult[3] = pendingGameProfileReturn.pendingGameProfileReturn.gameName;
      cResult[4] = formatResult;
      tmp10 = formatResult;
    } else {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(intl3.t.DjifDP);
      const ArrowSmallLeftIcon = tmp(10690).ArrowSmallLeftIcon;
      const tmp18 = <ArrowSmallLeftIcon color={nativeDefault.colors.WHITE} />;
      cResult[5] = stringResult;
      cResult[6] = tmp18;
      tmp14 = tmp18;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[5];
      tmp14 = cResult[6];
    }
    if (cResult[7] === pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile) {
      if (cResult[8] === tmp5) {
        let tmp19;
        if (cResult[9] === tmp10) {
          tmp19 = cResult[10];
        }
        return tmp19;
      }
    }
    const tmp22 = jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp5, message: tmp10, actionLabel: tmp13, actionIcon: tmp14, actionOnPress: pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile });
    cResult[7] = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
    cResult[8] = tmp5;
    cResult[9] = tmp10;
    cResult[10] = tmp22;
    tmp19 = tmp22;
  }
  let tmp6;
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    FastImageDefault;
    tmp6 = <tmp9 style={tmp4.icon} source={AvatarUtils.makeSource(arg0.pendingGameProfileReturn.gameIconUrl)} />;
    const tmpResult = AvatarUtils;
  }
  cResult[0] = pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl;
  cResult[1] = tmp4;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
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
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default memoResult;
