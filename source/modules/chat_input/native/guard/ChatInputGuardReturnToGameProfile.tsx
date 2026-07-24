// Module ID: 11517
// Function ID: 89686
// Dependencies: [31, 27, 33, 4130, 689, 11511, 1392, 1212, 10028, 2]

// Module 11517
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { height: 40, width: 40, resizeMode: "contain", borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.icon = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
  let obj = { type: "simple-action" };
  let tmp4;
  const tmp = callback();
  const tmp2 = jsx;
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    obj = { style: tmp.icon, source: require(1392) /* getAvatarURL */.makeSource(pendingGameProfileReturn.gameIconUrl) };
    tmp4 = <Image style={tmp.icon} source={require(1392) /* getAvatarURL */.makeSource(pendingGameProfileReturn.gameIconUrl)} />;
    const obj3 = require(1392) /* getAvatarURL */;
  }
  obj.icon = tmp4;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { gameName: pendingGameProfileReturn.gameName };
  obj.message = intl.format(require(1212) /* getSystemLocale */.t.HRHaSF, obj);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.actionLabel = intl2.string(require(1212) /* getSystemLocale */.t.DjifDP);
  const obj1 = { color: importDefault(689).colors.WHITE };
  obj.actionIcon = jsx(require(10028) /* ArrowSmallLeftIcon */.ArrowSmallLeftIcon, { color: importDefault(689).colors.WHITE });
  obj.actionOnPress = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
  return tmp2(importDefault(11511), obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default memoResult;
