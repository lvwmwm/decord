// Module ID: 14719
// Function ID: 14720
// Name: GameIcon
// Dependencies: [19, 17, 21, 5014, 575, 1409, 14720, 6980, 5717, 14721, 2]
// Exports: default

// Module 14719 (GameIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ClanGameplayActivity from "ClanGameplayActivity" /* 14720 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let size;
let size1;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { gameIcon: { width: 32, height: 32 }, gameIconImage: size, gameIconMask: size1, fireIcon: { marginTop: -1, width: 14, height: 14 } };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles = createStyles.createStyles;
size1 = { position: "absolute", top: -4, right: -4, display: "flex", justifyContent: "center", alignItems: "center", padding: 2, width: 18, height: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.sm };
const styles = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GameIcon.tsx");

export default function GameIcon(arg0) {
  let FireIcon;
  let FireIcon2;
  let activityLevel;
  let game;
  let items1;
  let items2;
  let items3;
  let items4;
  let level;
  let obj5;
  let obj9;
  let onPress;
  let style;
  ({ style, game } = arg0);
  ({ activityLevel, onPress } = arg0);
  const tmp = styles();
  const iconURL = game.getIconURL(24);
  let source = null;
  if (null != iconURL) {
    const obj = AvatarUtilsDefault;
    source = obj.makeSource(iconURL);
  }
  const items = [game, onPress];
  const callback = react.useCallback(() => {
    if (onPress != null) {
      tmp(game);
    }
  }, items);
  if (activityLevel != null) {
    level = activityLevel.level;
  }
  let tmp9 = null;
  if (null != source) {
    let tmp17Result;
    let tmp14Result = level === ClanGameplayActivity.ClanGameplayActivity.HIGH;
    if (null != onPress) {
      const obj2 = { style: items1, onPress: callback, children: items2 };
      items1 = [style, tmp.gameIcon];
      const PressableHighlight = tmp7(6980).PressableHighlight;
      const obj3 = { style: tmp.gameIconImage, source };
      items2 = [hasOwnProperty(FastImageDefault, obj3), ];
      const tmp13 = metroRequire;
      const tmp15 = importDefault;
      if (tmp14Result) {
        const obj4 = { style: tmp.gameIconMask, children: hasOwnProperty(FireIcon2, obj5) };
        obj5 = { style: tmp.fireIcon, color: tmp15(575).unsafe_rawColors.ORANGE_260 };
        FireIcon2 = tmp7(14721).FireIcon;
        tmp14Result = tmp14(View, obj4);
      }
      items2[1] = tmp14Result;
      tmp17Result = tmp13(PressableHighlight, obj2);
    } else {
      const obj6 = { style: items3, children: items4 };
      items3 = [style, tmp.gameIcon];
      const obj7 = { style: tmp.gameIconImage, source };
      items4 = [hasOwnProperty(FastImageDefault, obj7), ];
      let tmp19Result = tmp14Result;
      const tmp17 = metroRequire;
      const tmp20 = importDefault;
      if (tmp19Result) {
        const obj8 = { style: tmp.gameIconMask, children: hasOwnProperty(FireIcon, obj9) };
        obj9 = { style: tmp.fireIcon, color: tmp20(575).unsafe_rawColors.ORANGE_330 };
        FireIcon = tmp7(14721).FireIcon;
        tmp19Result = tmp19(tmp18, obj8);
      }
      items4[1] = tmp19Result;
      tmp17Result = tmp17(tmp18, obj6);
    }
    tmp9 = tmp17Result;
  }
  return tmp9;
};
export const useStyles = styles;
