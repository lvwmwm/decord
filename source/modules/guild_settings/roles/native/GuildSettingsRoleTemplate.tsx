// Module ID: 16191
// Function ID: 125026
// Name: width
// Dependencies: []
// Exports: default

// Module 16191 (width)
let Dimensions;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Dimensions, AccessibilityInfo: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ PermissionTemplateTypes: closure_10, PermissionTemplates: closure_11, DEFAULT_TEMPLATE_TYPE: closure_12 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ AnalyticEvents: closure_13, GuildFeatures: closure_14 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[7]));
const width = Dimensions.get("window").width;
let closure_18 = width - 300;
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj.container = obj;
obj.carousel = { flex: 1 };
obj.cardWrapper = { lastDismissedObjectId: "y", isNewWebImplementationEnabled: "MessagesDataHeader" };
const tmp5 = arg1(dependencyMap[7]);
obj.card = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, borderColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.templateTitle = { -262995365: null, 1183819946: null, 651842187: null };
obj.templateSubtitle = { paddingBottom: 16 };
obj.templateContentWrapper = {};
obj.templateContent = {};
obj.templateContentText = { flexGrow: null, zIndex: null };
obj.templateButton = { height: null, width: null, borderRadius: null };
obj.sliderContainer = { alignItems: "center" };
obj.slider = { name: 54, opacity: 32, matrix: 553730 };
obj.sliderLabels = {};
obj.sliderLabel = {};
let closure_19 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, borderColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[9]).radii.sm };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx");

export default function GuildSettingsRoleTemplate(arg0) {
  let tmp10;
  ({ onSelect: closure_0, location: closure_1, guildId: closure_2 } = arg0);
  let React;
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
  const tmp = callback4();
  const callback = tmp;
  const ref = React.useRef(null);
  React = ref;
  const tmp4 = callback(React.useState(closure_12), 2);
  const first = tmp4[0];
  closure_6 = tmp4[1];
  const tmp6 = callback(React.useState(width), 2);
  const first1 = tmp6[0];
  let closure_8 = tmp6[1];
  const tmp8 = callback(React.useState(closure_18), 2);
  let closure_9 = tmp8[1];
  const tmp2 = importDefault(dependencyMap[10])();
  [tmp10, closure_10] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const result = screenReaderEnabled.isScreenReaderEnabled();
    result.then((arg0) => {
      callback(arg0);
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
  obj = { -1420412060: "title", 39539027: "__closure", -229548959: "constructor", children: callback2(importDefault(dependencyMap[13]), { maximumValue: values.length - 1, minimumTrackTintColor: values[first].color, minimumValue: constants.COSMETIC, onSlidingComplete: updateLevel, style: tmp.slider, thumbTintColor: values[first].color, value: first, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" }) };
  const items = [callback2(first, obj), ];
  const obj1 = { maximumValue: values.length - 1, minimumTrackTintColor: values[first].color, minimumValue: constants.COSMETIC, onSlidingComplete: updateLevel, style: tmp.slider, thumbTintColor: values[first].color, value: first, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" };
  const tmp12 = callback3;
  const tmp13 = first;
  const tmp14 = callback2;
  const tmp9 = callback(React.useState(false), 2);
  items[1] = callback2(first, {
    style: tmp.sliderLabels,
    children: values.map((title) => {
      title = title.title;
      let obj = { style: tmp.sliderLabel };
      obj = {
        accessibilityRole: "button",
        accessibilityState: obj,
        onPress() {
          callback(arg1);
        }
      };
      obj = { selected: first === arg1 };
      const obj1 = { variant: "text-sm/medium", children: title() };
      obj.children = callback2(arg1(closure_2[15]).Text, obj1);
      obj.children = callback2(arg1(closure_2[14]).PressableOpacity, obj);
      return callback2(first, obj, title());
    })
  });
  obj.children = items;
  const items1 = [callback3(first, obj), ];
  const obj3 = { data: values };
  let num = 0.7;
  const obj2 = {
    style: tmp.sliderLabels,
    children: values.map((title) => {
      title = title.title;
      let obj = { style: tmp.sliderLabel };
      obj = {
        accessibilityRole: "button",
        accessibilityState: obj,
        onPress() {
          callback(arg1);
        }
      };
      obj = { selected: first === arg1 };
      const obj1 = { variant: "text-sm/medium", children: title() };
      obj.children = callback2(arg1(closure_2[15]).Text, obj1);
      obj.children = callback2(arg1(closure_2[14]).PressableOpacity, obj);
      return callback2(first, obj, title());
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
    const items = [callback2(item(closure_2[15]).Text, obj1), , ];
    const obj2 = { style: item.index === first.templateSubtitle, variant: "text-sm/medium", children: item.description() };
    items[1] = callback2(item(closure_2[15]).Text, obj2);
    const obj3 = { style: item.index === first.templateContentWrapper };
    let tmp10 = null;
    if (null != contentPrefaceResult) {
      tmp10 = null;
      if ("" !== contentPrefaceResult) {
        const obj4 = { style: tmp.templateSubtitle, variant: "text-sm/medium", children: item.contentPreface() };
        tmp10 = callback2(item(closure_2[15]).Text, obj4);
      }
    }
    const items1 = [tmp10, ];
    const obj5 = {
      accessibilityRole: "list",
      children: item.contents().map((children) => {
        let obj = { style: closure_3.templateContent };
        obj = { source: callback(closure_2[18]), size: item(closure_2[17]).IconSizes.MEDIUM, color: callback(closure_2[9]).unsafe_rawColors.GREEN_360 };
        const items = [callback2(item(closure_2[17]).Icon, obj), ];
        obj = { style: closure_3.templateContentText, variant: "text-sm/medium", children };
        items[1] = callback2(item(closure_2[15]).Text, obj);
        obj.children = items;
        return callback3(closure_5, obj, "" + item.key + "_content_" + arg1);
      })
    };
    items1[1] = callback2(first, obj5);
    obj3.children = items1;
    items[2] = closure_16(first, obj3);
    obj.children = items;
    const items2 = [closure_16(first1, obj), ];
    const obj6 = { style: item.index === first.templateButton };
    const obj7 = {};
    const intl = item(closure_2[20]).intl;
    obj7.text = intl.string(item(closure_2[20]).t.mQS8Is);
    obj7.onPress = function onPress() {
      let key;
      let permissions;
      const communityPermissions = item.communityPermissions;
      ({ permissions, key } = item);
      let obj = callback(closure_2[11]);
      obj = { location_page: callback, template_name: key };
      const merged = Object.assign(item(closure_2[12]).collectGuildAnalyticsMetadata(closure_2));
      obj.track(constants.ROLE_TEMPLATE_SELECTED, obj);
      const guild = guild.getGuild(closure_2);
      if (null != guild) {
        const features = guild.features;
        if (features.has(constants2.COMMUNITY)) {
          if (null != communityPermissions) {
            item(communityPermissions);
          }
        }
        item(permissions);
      }
    };
    obj6.children = callback2(item(closure_2[19]).Button, obj7);
    items2[1] = callback2(first, obj6);
    obj.children = items2;
    obj.children = closure_16(first, obj);
    return callback2(first, obj);
  };
  obj3.sliderWidth = first1;
  obj3.style = tmp.carousel;
  obj3.scrollEnabled = !tmp10;
  items1[1] = tmp14(importDefault(dependencyMap[16]), obj3);
  obj.children = items1;
  return tmp12(tmp13, obj);
};
