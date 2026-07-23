// Module ID: 11876
// Function ID: 91928
// Name: styles
// Dependencies: [31, 27, 33, 4130, 689, 1392, 11877, 4660, 11878, 2]
// Exports: default

// Module 11876 (styles)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { gameIcon: { width: 32, height: 32 } };
_createForOfIteratorHelperLoose = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderWidth: 1, borderStyle: "solid", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.gameIconImage = _createForOfIteratorHelperLoose;
let obj1 = { position: "absolute", top: -4, right: -4, display: "flex", justifyContent: "center", alignItems: "center", padding: 2, width: 18, height: 18, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.gameIconMask = obj1;
_createForOfIteratorHelperLoose.fireIcon = { marginTop: -1, width: 14, height: 14 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_profile/native/components/GameIcon.tsx");

export default function GameIcon(arg0) {
  let activityLevel;
  let game;
  let onPress;
  let style;
  ({ style, game } = arg0);
  ({ activityLevel, onPress } = arg0);
  let tmp = _createForOfIteratorHelperLoose();
  const iconURL = game.getIconURL(24);
  let source = null;
  if (null != iconURL) {
    let obj = onPress(1392);
    source = obj.makeSource(iconURL);
  }
  const items = [game, onPress];
  let callback = React.useCallback(() => {
    if (null != onPress) {
      onPress(game);
    }
  }, items);
  let level;
  if (null != activityLevel) {
    level = activityLevel.level;
  }
  let tmp7 = level === game(11877).ClanGameplayActivity.HIGH;
  if (null == source) {
    return null;
  } else if (null != onPress) {
    obj = {};
    const items1 = [style, tmp.gameIcon];
    obj.style = items1;
    obj.onPress = callback;
    style = callback;
    obj = { style: tmp.gameIconImage, source };
    callback = [, ];
    callback[0] = callback(closure_5, obj);
    if (tmp7) {
      source = callback;
      style = closure_4;
      const obj1 = { style: tmp.gameIconMask };
      const obj2 = { style: tmp.fireIcon };
      tmp = onPress;
      obj2.color = onPress(689).unsafe_rawColors.ORANGE_260;
      obj1.children = callback(game(11878).FireIcon, obj2);
      tmp7 = callback(closure_4, obj1);
    }
    callback[1] = tmp7;
    obj.children = callback;
    let tmp22Result = closure_7(game(4660).PressableHighlight, obj);
    const tmp15 = closure_7;
  } else {
    const obj3 = {};
    const items2 = [style, tmp.gameIcon];
    obj3.style = items2;
    const obj4 = { style: tmp.gameIconImage, source };
    const items3 = [callback(closure_5, obj4), ];
    let tmp13 = tmp7;
    if (tmp7) {
      const obj5 = { style: tmp.gameIconMask };
      const obj6 = { style: tmp.fireIcon, color: onPress(689).unsafe_rawColors.ORANGE_330 };
      obj5.children = callback(game(11878).FireIcon, obj6);
      tmp13 = callback(closure_4, obj5);
    }
    items3[1] = tmp13;
    obj3.children = items3;
    tmp22Result = closure_7(closure_4, obj3);
    const tmp22 = closure_7;
    const tmp23 = closure_4;
  }
};
export const useStyles = _createForOfIteratorHelperLoose;
