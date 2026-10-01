// Module ID: 9215
// Function ID: 9216
// Name: GameIcon
// Dependencies: [19, 17, 21, 4836, 576, 1397, 9216, 5435, 9217, 2]
// Exports: default

// Module 9215 (GameIcon)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ClanGameplayActivity from "ClanGameplayActivity" /* 9216 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
let size1;
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
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
    let tmp19Result;
    let tmp15Result = level === ClanGameplayActivity.ClanGameplayActivity.HIGH;
    if (null != onPress) {
      const obj2 = { style: items1, onPress: callback, children: items2 };
      items1 = [style, tmp.gameIcon];
      const obj3 = { style: tmp.gameIconImage, source };
      const PressableHighlight = tmp7(5435).PressableHighlight;
      items2 = [metroRequire(hasOwnProperty, obj3), ];
      const tmp14 = metroImportDefault;
      if (tmp15Result) {
        const obj4 = { style: tmp.gameIconMask, children: metroRequire(FireIcon2, obj5) };
        obj5 = { style: tmp.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_260 };
        FireIcon2 = tmp7(9217).FireIcon;
        tmp15Result = tmp15(React3, obj4);
      }
      items2[1] = tmp15Result;
      tmp19Result = tmp14(PressableHighlight, obj2);
    } else {
      const obj6 = { style: items3, children: items4 };
      items3 = [style, tmp.gameIcon];
      const obj7 = { style: tmp.gameIconImage, source };
      items4 = [metroRequire(hasOwnProperty, obj7), ];
      let tmp21Result = tmp15Result;
      const tmp19 = metroImportDefault;
      if (tmp21Result) {
        const obj8 = { style: tmp.gameIconMask, children: metroRequire(FireIcon, obj9) };
        obj9 = { style: tmp.fireIcon, color: nativeDefault.unsafe_rawColors.ORANGE_330 };
        FireIcon = tmp7(9217).FireIcon;
        tmp21Result = tmp21(tmp20, obj8);
      }
      items4[1] = tmp21Result;
      tmp19Result = tmp19(tmp20, obj6);
    }
    tmp9 = tmp19Result;
  }
  return tmp9;
};
export const useStyles = styles;
