// Module ID: 16308
// Function ID: 127199
// Name: width
// Dependencies: [57, 31, 27, 4122, 1838, 16304, 653, 33, 4130, 689, 8133, 675, 4324, 7523, 4660, 4126, 13093, 1273, 9985, 4543, 1212, 2]
// Exports: default

// Module 16308 (width)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import title from "title";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Dimensions;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_5, Dimensions, AccessibilityInfo: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ PermissionTemplateTypes: closure_10, PermissionTemplates: closure_11, DEFAULT_TEMPLATE_TYPE: closure_12 } = title);
({ AnalyticEvents: closure_13, GuildFeatures: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let width = Dimensions.get("window").width;
let closure_18 = width - 300;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.carousel = { flex: 1 };
_createForOfIteratorHelperLoose.cardWrapper = { paddingHorizontal: 10, flex: 1 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderStyle: "solid", borderWidth: 1, flex: 1, flexDirection: "column", marginVertical: 16, padding: 16, paddingTop: 20 };
_createForOfIteratorHelperLoose.card = obj1;
_createForOfIteratorHelperLoose.templateTitle = { alignItems: "center", textAlign: "center", paddingBottom: 16 };
_createForOfIteratorHelperLoose.templateSubtitle = { paddingBottom: 16 };
_createForOfIteratorHelperLoose.templateContentWrapper = { flex: 1, justifyContent: "flex-start" };
_createForOfIteratorHelperLoose.templateContent = { alignItems: "center", flexDirection: "row", paddingBottom: 8 };
_createForOfIteratorHelperLoose.templateContentText = { flex: 1, marginLeft: 12 };
_createForOfIteratorHelperLoose.templateButton = { justifyContent: "flex-end", flexGrow: 0, paddingTop: 16 };
_createForOfIteratorHelperLoose.sliderContainer = { alignItems: "center" };
_createForOfIteratorHelperLoose.slider = { marginTop: 8, width: 300, maxWidth: "72%" };
_createForOfIteratorHelperLoose.sliderLabels = { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 16, textAlign: "center", width: 380, maxWidth: "85%" };
_createForOfIteratorHelperLoose.sliderLabel = { marginHorizontal: 0, width: "25%", textAlign: "center", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx");

export default function GuildSettingsRoleTemplate(arg0) {
  let closure_10;
  let dependencyMap;
  let importDefault;
  let require;
  let tmp10;
  ({ onSelect: require, location: importDefault, guildId: dependencyMap } = arg0);
  let ref;
  let closure_6;
  function updateLevel(arg0) {
    const rounded = Math.round(arg0);
    screenReaderEnabled(rounded);
    let tmp3 = null != ref;
    if (tmp3) {
      tmp3 = null != ref.current;
    }
    if (tmp3) {
      const current = ref.current;
      current.snapToItem(rounded, !lib.useReducedMotion);
    }
  }
  const tmp = _createForOfIteratorHelperLoose();
  const callback = tmp;
  ref = ref.useRef(null);
  const tmp4 = callback(ref.useState(closure_12), 2);
  const first = tmp4[0];
  closure_6 = tmp4[1];
  const tmp6 = callback(ref.useState(width), 2);
  const first1 = tmp6[0];
  let _isNativeReflectConstruct = tmp6[1];
  const tmp8 = callback(ref.useState(closure_18), 2);
  let closure_9 = tmp8[1];
  const tmp2 = importDefault(8133)();
  [tmp10, closure_10] = callback(ref.useState(false), 2);
  const effect = ref.useEffect(() => {
    const result = screenReaderEnabled.isScreenReaderEnabled();
    result.then((arg0) => {
      outer1_10(arg0);
    });
  }, []);
  const values = Object.values(updateLevel);
  let obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const width = nativeEvent.nativeEvent.layout.width;
      if (width !== first1) {
        lib(width);
        callback(width - 300);
      }
    }
  };
  obj = { style: tmp.sliderContainer };
  obj = { accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: callback2(importDefault(7523), { maximumValue: values.length - 1, minimumTrackTintColor: values[first].color, minimumValue: constants.COSMETIC, onSlidingComplete: updateLevel, style: tmp.slider, thumbTintColor: values[first].color, value: first, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" }) };
  let items = [callback2(first, obj), ];
  let obj1 = { maximumValue: values.length - 1, minimumTrackTintColor: values[first].color, minimumValue: constants.COSMETIC, onSlidingComplete: updateLevel, style: tmp.slider, thumbTintColor: values[first].color, value: first, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" };
  const tmp12 = callback3;
  const tmp13 = first;
  const tmp14 = callback2;
  const tmp9 = callback(ref.useState(false), 2);
  items[1] = callback2(first, {
    style: tmp.sliderLabels,
    children: values.map((title) => {
      title = title.title;
      let closure_0 = arg1;
      let obj = { style: tmp.sliderLabel };
      obj = {
        accessibilityRole: "button",
        accessibilityState: obj,
        onPress() {
          outer1_11(closure_0);
        }
      };
      obj = { selected: first === arg1 };
      const obj1 = { variant: "text-sm/medium", children: title() };
      obj.children = outer1_15(outer1_0(outer1_2[15]).Text, obj1);
      obj.children = outer1_15(outer1_0(outer1_2[14]).PressableOpacity, obj);
      return outer1_15(first, obj, title());
    })
  });
  obj.children = items;
  let items1 = [callback3(first, obj), ];
  let obj3 = { data: values, firstItem: 0, inactiveSlideScale: 1 };
  let num = 0.7;
  let obj2 = {
    style: tmp.sliderLabels,
    children: values.map((title) => {
      title = title.title;
      let closure_0 = arg1;
      let obj = { style: tmp.sliderLabel };
      obj = {
        accessibilityRole: "button",
        accessibilityState: obj,
        onPress() {
          outer1_11(closure_0);
        }
      };
      obj = { selected: first === arg1 };
      const obj1 = { variant: "text-sm/medium", children: title() };
      obj.children = outer1_15(outer1_0(outer1_2[15]).Text, obj1);
      obj.children = outer1_15(outer1_0(outer1_2[14]).PressableOpacity, obj);
      return outer1_15(first, obj, title());
    })
  };
  if (tmp2) {
    num = 0.3;
  }
  obj3.inactiveSlideOpacity = num;
  obj3.itemWidth = first1 - tmp8[0];
  obj3.onBeforeSnapToItem = function onBeforeSnapToItem(self) {
    screenReaderEnabled(self);
  };
  obj3.enableMomentum = true;
  obj3.decelerationRate = 0.9;
  obj3.ref = ref;
  obj3.renderItem = function renderItem(item) {
    item = item.item;
    const contentPrefaceResult = item.contentPreface();
    let obj = { accessible: !item.index !== first, accessibilityElementsHidden: item.index !== first };
    let str = "no-hide-descendants";
    if (item.index === first) {
      str = "yes";
    }
    obj.importantForAccessibility = str;
    obj.style = item.index === first.cardWrapper;
    obj = { style: tmp.card };
    obj = {};
    const obj1 = { style: item.index === first.templateTitle, variant: "heading-lg/extrabold", children: item.title() };
    let items = [outer1_15(outer1_0(outer1_2[15]).Text, obj1), , ];
    const obj2 = { style: item.index === first.templateSubtitle, variant: "text-sm/medium", children: item.description() };
    items[1] = outer1_15(outer1_0(outer1_2[15]).Text, obj2);
    const obj3 = { style: item.index === first.templateContentWrapper };
    let tmp10 = null;
    if (null != contentPrefaceResult) {
      tmp10 = null;
      if ("" !== contentPrefaceResult) {
        const obj4 = { style: tmp.templateSubtitle, variant: "text-sm/medium", children: item.contentPreface() };
        tmp10 = outer1_15(outer1_0(outer1_2[15]).Text, obj4);
      }
    }
    const items1 = [tmp10, ];
    const obj5 = {
      accessibilityRole: "list",
      children: item.contents().map((children) => {
        let obj = { style: outer1_3.templateContent };
        obj = { source: outer2_1(outer2_2[18]), size: outer2_0(outer2_2[17]).IconSizes.MEDIUM, color: outer2_1(outer2_2[9]).unsafe_rawColors.GREEN_360 };
        const items = [outer2_15(outer2_0(outer2_2[17]).Icon, obj), ];
        obj = { style: outer1_3.templateContentText, variant: "text-sm/medium", children };
        items[1] = outer2_15(outer2_0(outer2_2[15]).Text, obj);
        obj.children = items;
        return outer2_16(first, obj, "" + item.key + "_content_" + arg1);
      })
    };
    items1[1] = outer1_15(first, obj5);
    obj3.children = items1;
    items[2] = outer1_16(first, obj3);
    obj.children = items;
    const items2 = [outer1_16(first1, obj), ];
    const obj6 = { style: item.index === first.templateButton };
    const obj7 = {};
    const intl = outer1_0(outer1_2[20]).intl;
    obj7.text = intl.string(outer1_0(outer1_2[20]).t.mQS8Is);
    obj7.onPress = function onPress() {
      let key;
      let permissions;
      const communityPermissions = item.communityPermissions;
      ({ permissions, key } = item);
      let obj = outer2_1(outer2_2[11]);
      obj = { location_page: outer1_1, template_name: key };
      const merged = Object.assign(outer2_0(outer2_2[12]).collectGuildAnalyticsMetadata(outer1_2));
      obj.track(outer2_13.ROLE_TEMPLATE_SELECTED, obj);
      guild = guild.getGuild(outer1_2);
      if (null != guild) {
        const features = guild.features;
        if (features.has(outer2_14.COMMUNITY)) {
          if (null != communityPermissions) {
            item(communityPermissions);
          }
        }
        item(permissions);
      }
    };
    obj6.children = outer1_15(outer1_0(outer1_2[19]).Button, obj7);
    items2[1] = outer1_15(first, obj6);
    obj.children = items2;
    obj.children = outer1_16(first, obj);
    return outer1_15(first, obj);
  };
  obj3.sliderWidth = first1;
  obj3.style = tmp.carousel;
  obj3.scrollEnabled = !tmp10;
  items1[1] = tmp14(importDefault(13093), obj3);
  obj.children = items1;
  return tmp12(tmp13, obj);
};
