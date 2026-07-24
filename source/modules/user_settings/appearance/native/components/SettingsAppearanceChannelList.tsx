// Module ID: 14228
// Function ID: 109311
// Name: ChannelListPreview
// Dependencies: [31, 27, 33, 4130, 689, 14229, 14230, 14231, 3991, 1212, 14237, 7527, 14240, 2]
// Exports: default

// Module 14228 (ChannelListPreview)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["borderRadius"] = require("_createForOfIteratorHelperLoose").radii.xl;
_createForOfIteratorHelperLoose["overflow"] = "hidden";
_createForOfIteratorHelperLoose.channelPreviewGradient = _createForOfIteratorHelperLoose;
let obj1 = { flex: 1, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, width: "100%", borderWidth: 1 };
let merged1 = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_HIGH);
obj1["shadowColor"] = "#000000";
_createForOfIteratorHelperLoose.channelPreviewCardContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelList.tsx");

export default function ChannelListPreview(useGradientBackground) {
  let animatedStyles;
  let data;
  let isNitroLocked;
  let themeIndex;
  let themes;
  ({ themes, themeIndex, animatedStyles } = useGradientBackground);
  useGradientBackground = useGradientBackground.useGradientBackground;
  ({ data, isNitroLocked } = useGradientBackground);
  const tmp = _createForOfIteratorHelperLoose();
  const items = [animatedStyles];
  const callback = React.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("channel-row" === kind) {
      let obj = {};
      const merged = Object.assign(item);
      obj["animatedStyles"] = animatedStyles;
      return outer1_5(outer1_1(outer1_2[5]), obj);
    } else if ("messages-header" === kind) {
      obj = {};
      const merged1 = Object.assign(item);
      obj["animatedStyles"] = animatedStyles;
      return outer1_5(outer1_1(outer1_2[6]), obj);
    } else if ("activity-cards" === kind) {
      obj = {};
      const merged2 = Object.assign(item);
      obj["animatedStyles"] = animatedStyles;
      return outer1_5(outer1_1(outer1_2[7]), obj);
    } else {
      return null;
    }
  }, items);
  let obj = { style: null, accessible: true, accessibilityRole: "image" };
  const items1 = [tmp.channelPreviewCardContainer, animatedStyles.borderNormal, ];
  let bgSurfaceHigh = !useGradientBackground;
  if (bgSurfaceHigh) {
    bgSurfaceHigh = animatedStyles.bgSurfaceHigh;
  }
  items1[2] = bgSurfaceHigh;
  obj.style = items1;
  const intl = animatedStyles(1212).intl;
  obj.accessibilityLabel = intl.string(animatedStyles(1212).t.iGxm3x);
  let tmp4 = null;
  if (useGradientBackground) {
    obj = { style: tmp.channelPreviewGradient };
    obj = { themes, themeIndex, isDimmed: false, backgroundToken: importDefault(689).colors.BACKGROUND_BASE_LOW };
    obj.children = callback(importDefault(14237), obj);
    tmp4 = callback(View, obj);
    const tmp9 = importDefault(14237);
  }
  const items2 = [tmp4, , ];
  const obj1 = {};
  const obj2 = { paddingVertical: importDefault(689).space.PX_16 };
  obj1.contentContainerStyle = obj2;
  obj1.data = data;
  obj1.renderItem = callback;
  obj1.keyExtractor = function keyExtractor(id) {
    return id.id;
  };
  obj1.showsVerticalScrollIndicator = false;
  obj1.importantForAccessibility = "no-hide-descendants";
  items2[1] = callback(animatedStyles(7527).FlashList, obj1);
  items2[2] = callback(importDefault(14240), { visible: isNitroLocked, theme: themes[themeIndex] });
  obj.children = items2;
  return closure_6(importDefault(3991).View, obj);
};
