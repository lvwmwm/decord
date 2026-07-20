// Module ID: 11856
// Function ID: 91826
// Name: styles
// Dependencies: []
// Exports: default

// Module 11856 (styles)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { gameIcon: { aze: "boolean", azj: "string" } };
obj = { <string:1654717284>: null, <string:103043420>: null, <string:4249990753>: null, <string:2856018435>: null, <string:1657287761>: null, borderRadius: importDefault(dependencyMap[4]).radii.xs, borderColor: importDefault(dependencyMap[4]).colors.BORDER_STRONG };
obj.gameIconImage = obj;
const obj1 = { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006457318704133907, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000021352068994062804, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030874519041101098, "Null": -0.000000000000000000000000000000000000000000000000000000010833043259721065, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000201298035569623, "Null": 12184583619263590000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, marginTop: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003077481662, display: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008, flexDirection: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001255343022559478, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.gameIconMask = obj1;
obj.fireIcon = {};
const styles = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_profile/native/components/GameIcon.tsx");

export default function GameIcon(arg0) {
  let activityLevel;
  let game;
  let onPress;
  let style;
  ({ style, game } = arg0);
  const arg1 = game;
  ({ activityLevel, onPress } = arg0);
  const importDefault = onPress;
  let tmp = styles();
  const iconURL = game.getIconURL(24);
  let source = null;
  if (null != iconURL) {
    let obj = importDefault(dependencyMap[5]);
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
  let tmp7 = level === arg1(dependencyMap[6]).ClanGameplayActivity.HIGH;
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
      tmp = importDefault;
      obj2.color = importDefault(dependencyMap[4]).unsafe_rawColors.ORANGE_260;
      obj1.children = callback(arg1(dependencyMap[8]).FireIcon, obj2);
      tmp7 = callback(closure_4, obj1);
    }
    callback[1] = tmp7;
    obj.children = callback;
    let tmp22Result = closure_7(arg1(dependencyMap[7]).PressableHighlight, obj);
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
      const obj6 = { style: tmp.fireIcon, color: importDefault(dependencyMap[4]).unsafe_rawColors.ORANGE_330 };
      obj5.children = callback(arg1(dependencyMap[8]).FireIcon, obj6);
      tmp13 = callback(closure_4, obj5);
    }
    items3[1] = tmp13;
    obj3.children = items3;
    tmp22Result = closure_7(closure_4, obj3);
    const tmp22 = closure_7;
    const tmp23 = closure_4;
  }
};
export const useStyles = styles;
