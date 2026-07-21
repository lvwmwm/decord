// Module ID: 14057
// Function ID: 106792
// Name: ChannelListPreview
// Dependencies: []
// Exports: default

// Module 14057 (ChannelListPreview)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["borderRadius"] = importDefault(dependencyMap[4]).radii.xl;
obj["overflow"] = "hidden";
obj.channelPreviewGradient = obj;
const obj1 = { marginTop: importDefault(dependencyMap[4]).space.PX_8, borderRadius: importDefault(dependencyMap[4]).radii.xl };
const merged1 = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_HIGH);
obj1["shadowColor"] = "#000000";
obj.channelPreviewCardContainer = obj1;
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelList.tsx");

export default function ChannelListPreview(useGradientBackground) {
  let animatedStyles;
  let data;
  let isNitroLocked;
  let themeIndex;
  let themes;
  ({ themes, themeIndex, animatedStyles } = useGradientBackground);
  const arg1 = animatedStyles;
  useGradientBackground = useGradientBackground.useGradientBackground;
  ({ data, isNitroLocked } = useGradientBackground);
  const tmp = callback2();
  const items = [animatedStyles];
  const callback = React.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("channel-row" === kind) {
      let obj = {};
      const merged = Object.assign(item);
      obj["animatedStyles"] = animatedStyles;
      return callback2(callback(closure_2[5]), obj);
    } else if ("messages-header" === kind) {
      obj = {};
      const merged1 = Object.assign(item);
      obj["animatedStyles"] = animatedStyles;
      return callback2(callback(closure_2[6]), obj);
    } else if ("activity-cards" === kind) {
      obj = {};
      const merged2 = Object.assign(item);
      obj["animatedStyles"] = animatedStyles;
      return callback2(callback(closure_2[7]), obj);
    } else {
      return null;
    }
  }, items);
  let obj = {};
  const items1 = [tmp.channelPreviewCardContainer, animatedStyles.borderNormal, ];
  let bgSurfaceHigh = !useGradientBackground;
  if (bgSurfaceHigh) {
    bgSurfaceHigh = animatedStyles.bgSurfaceHigh;
  }
  items1[2] = bgSurfaceHigh;
  obj.style = items1;
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.iGxm3x);
  let tmp4 = null;
  if (useGradientBackground) {
    obj = { style: tmp.channelPreviewGradient };
    obj = { themes, themeIndex, isDimmed: false, backgroundToken: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
    obj.children = callback(importDefault(dependencyMap[10]), obj);
    tmp4 = callback(View, obj);
    const tmp9 = importDefault(dependencyMap[10]);
  }
  const items2 = [tmp4, , ];
  const obj1 = {};
  const obj2 = { paddingVertical: importDefault(dependencyMap[4]).space.PX_16 };
  obj1.contentContainerStyle = obj2;
  obj1.data = data;
  obj1.renderItem = callback;
  obj1.keyExtractor = function keyExtractor(id) {
    return id.id;
  };
  obj1.showsVerticalScrollIndicator = false;
  obj1.importantForAccessibility = "no-hide-descendants";
  items2[1] = callback(arg1(dependencyMap[11]).FlashList, obj1);
  items2[2] = callback(importDefault(dependencyMap[12]), { visible: isNitroLocked, theme: themes[themeIndex] });
  obj.children = items2;
  return closure_6(importDefault(dependencyMap[8]).View, obj);
};
