// Module ID: 11864
// Function ID: 91875
// Name: styles
// Dependencies: []
// Exports: default

// Module 11864 (styles)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { gameIcon: { "Null": true, "Null": true } };
obj = { "Null": true, "Null": true, "Null": true, "Null": true, "Null": true, borderRadius: importDefault(dependencyMap[4]).radii.xs, borderColor: importDefault(dependencyMap[4]).colors.BORDER_STRONG };
obj.gameIconImage = obj;
const obj1 = { "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028246427612100375, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000001079656013216987, "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009251425761450625, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027511313459560857, "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000222507385855407, "Bool(true)": 18283014360199604000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033951932656, "Bool(true)": 0.00000000000000000000000000002233771790404307, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004124948605103009, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.gameIconMask = obj1;
obj.fireIcon = { padding: true, spriteIndex: true, Date: true };
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
