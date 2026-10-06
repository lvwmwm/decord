// Module ID: 11841
// Function ID: 11842
// Name: ChatInputGuardReturnToGameProfile
// Dependencies: [19, 17, 21, 4837, 588, 558, 576, 1403, 1127, 8738, 11835, 2]

// Module 11841 (ChatInputGuardReturnToGameProfile)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl3 from "intl" /* 1127 */;
import AvatarUtils from "AvatarUtils" /* 1403 */;
import ArrowSmallLeftIcon2 from "ArrowSmallLeftIcon" /* 8738 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 11835 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let size;
const Image = react_native.Image;
const jsx = Fragment.jsx;
let obj = { icon: size };
size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((pendingGameProfileReturn) => {
  const obj = react2;
  const cResult = obj.c(11);
  const tmp4 = closure_5();
  if (cResult[0] === pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    let tmp5;
    let tmp9;
    let tmp13;
    let tmp12;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== pendingGameProfileReturn.pendingGameProfileReturn.gameName) {
      const intl = tmp(1127).intl;
      const obj2 = { gameName: pendingGameProfileReturn.pendingGameProfileReturn.gameName };
      const formatResult = intl.format(intl3.t.HRHaSF, obj2);
      cResult[3] = pendingGameProfileReturn.pendingGameProfileReturn.gameName;
      cResult[4] = formatResult;
      tmp9 = formatResult;
    } else {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1127).intl;
      const stringResult = intl2.string(intl3.t.DjifDP);
      const ArrowSmallLeftIcon = tmp(8738).ArrowSmallLeftIcon;
      const tmp17 = <ArrowSmallLeftIcon color={nativeDefault.colors.WHITE} />;
      cResult[5] = stringResult;
      cResult[6] = tmp17;
      tmp13 = tmp17;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[5];
      tmp13 = cResult[6];
    }
    if (cResult[7] === pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile) {
      if (cResult[8] === tmp5) {
        let tmp18;
        if (cResult[9] === tmp9) {
          tmp18 = cResult[10];
        }
        return tmp18;
      }
    }
    const tmp21 = jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp5, message: tmp9, actionLabel: tmp12, actionIcon: tmp13, actionOnPress: pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile });
    cResult[7] = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
    cResult[8] = tmp5;
    cResult[9] = tmp9;
    cResult[10] = tmp21;
    tmp18 = tmp21;
  }
  let tmp6;
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    tmp6 = <Image style={tmp4.icon} source={AvatarUtils.makeSource(arg0.pendingGameProfileReturn.gameIconUrl)} />;
    const tmpResult = AvatarUtils;
  }
  cResult[0] = pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl;
  cResult[1] = tmp4;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((pendingGameProfileReturn) => {
  let obj2;
  let tmp2Result;
  const tmp = closure_5();
  ChatInputGuardDefault;
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    const obj = { style: tmp.icon, source: obj2.makeSource(pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) };
    obj2 = AvatarUtils;
    tmp2Result = tmp2(Image, obj);
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
