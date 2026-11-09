// Module ID: 20186
// Function ID: 20187
// Name: GuildSettingsRoleTemplate
// Dependencies: [32, 19, 17, 5141, 5011, 20182, 1072, 21, 5140, 575, 7183, 1493, 5390, 1652, 1252, 5889, 8926, 7043, 5751, 10748, 1187, 11750, 5758, 1113, 2]
// Exports: default

// Module 20186 (GuildSettingsRoleTemplate)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5390 */;
import Text_Text from "Text/Text" /* 5751 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5889 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7183 */;
import AssetRegistryDefault from "AssetRegistry" /* 11750 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import GuildStore from "GuildStore" /* 5011 */;
import GuildSettingsRoleConstants from "GuildSettingsRoleConstants" /* 20182 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let title;

let Dimensions;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let tmp11;
let tmp2;
let unpackModuleId;
const _mod1652 = tmp11(1652);
const _modDef8926 = tmp2(8926);
const PaginationDefault = tmp2(10748);
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Dimensions, ScrollView: metroRequire } = react_native);
({ PermissionTemplateTypes: c9, PermissionTemplates: c10, DEFAULT_TEMPLATE_TYPE: unpackModuleId } = GuildSettingsRoleConstants);
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let width = Dimensions.get("window").width;
let createStyles = createStyles_mod;
let obj = { container: obj2, carousel: { flex: 1 }, cardWrapper: { width: 300, alignSelf: "center", paddingHorizontal: 10, flex: 1 }, card: obj3, templateTitle: { alignItems: "center", textAlign: "center", paddingBottom: 16 }, templateSubtitle: { paddingBottom: 16 }, templateContentWrapper: { flex: 1, justifyContent: "flex-start" }, templateContent: { alignItems: "center", flexDirection: "row", paddingBottom: 8 }, templateContentText: { flex: 1, marginLeft: 12 }, templateButton: { justifyContent: "flex-end", flexGrow: 0, paddingTop: 16 }, sliderContainer: { alignItems: "center" }, slider: { marginTop: 8, width: 300, maxWidth: "72%" }, sliderLabels: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 16, textAlign: "center", width: 380, maxWidth: "85%" }, sliderLabel: { marginHorizontal: 0, width: "25%", textAlign: "center", alignItems: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, borderStyle: "solid", borderWidth: 1, flex: 1, flexDirection: "column", marginVertical: 16, padding: 16, paddingTop: 20 };
let closure_17 = createStyles(obj);
let closure_18 = { code: "(function GuildSettingsRoleTemplateTsx1(value){let[interpolate,sheetWidth,parallaxScrollingOffset,Extrapolation,inactiveOpacity]=this.__closure;const translate=interpolate(value,[-1,0,1],[-sheetWidth+parallaxScrollingOffset,0,sheetWidth-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,sheetWidth,0],Extrapolation.CLAMP));return{transform:[{translateX:translate}],opacity:interpolate(value,[-1,0,1],[inactiveOpacity,1,inactiveOpacity],Extrapolation.CLAMP),zIndex:zIndex};})" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx");

export default function GuildSettingsRoleTemplate(arg0) {
  let _undefined;
  let c8;
  let closure_3;
  let closure_7;
  let items4;
  let items5;
  let items6;
  let location_page;
  let obj6;
  let obj9;
  let require;
  let tmp10;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let value;
  ({ onSelect: require, location: importDefault, guildId: dependencyMap } = arg0);
  let ref;
  value = undefined;
  closure_7 = undefined;
  c8 = undefined;
  let tmp = closure_17();
  const _slicedToArray = tmp;
  let tmp2 = importDefault;
  const tmp3 = dependencyMap;
  const tmp4 = useIsWindowLargeDefault();
  size = useWindowDimensionsDefault();
  const height = size.height;
  let obj = ref;
  width = size.width;
  ref = ref.useRef(null);
  const ref1 = ref.useRef(null);
  [value, closure_7] = ref.useState(closure_11);
  let tmp9 = _slicedToArray(ref.useState(width), 2);
  [tmp10, c8] = tmp9;
  const tmp11 = require;
  let obj2 = useIsScreenReaderEnabled;
  let num = 0.7;
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  if (tmp4) {
    num = 0.3;
  }
  const bound = Math.max(tmp10 - 300, 0);
  let items = [width, height];
  let rounded = Math.round(0.45 * height);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    width = undefined;
    if (current != null) {
      width = current.getBoundingClientRect().width;
    }
    const tmp2 = null != width && width > 0;
    if (tmp2) {
      _undefined((arg0) => {
        let tmp = arg0;
        if (arg0 !== width) {
          tmp = width;
        }
        return tmp;
      });
    }
  }, items);
  let items1 = [closure_18, , , , , ];
  const useCallback = obj.useCallback;
  items1[1] = _mod1652.interpolate;
  items1[2] = tmp10;
  items1[3] = bound;
  items1[4] = _mod1652.Extrapolation;
  items1[5] = num;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items1;
  class GuildSettingsRoleTemplateTsx1 {
    constructor(arg0) {
      let items2;
      let items3;
      let rounded;
      const items = [-c1 + c2, 0, c1 - c2];
      const items1 = [0, c1, 0];
      const obj = { transform: items2, opacity: _undefined(arg0, [-1, 0, 1], items3, _undefined2.CLAMP), zIndex: rounded };
      items2 = [{ translateX: _undefined(arg0, [-1, 0, 1], items) }];
      items3 = [c4, 1, c4];
      _undefined(arg0, [-1, 0, 1], items);
      rounded = Math.round(_undefined(arg0, [-1, 0, 1], items1, _undefined2.CLAMP));
      return obj;
    }
  }
  let items2 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  GuildSettingsRoleTemplateTsx1.__closure = items2;
  GuildSettingsRoleTemplateTsx1.__workletHash = 3460011847829;
  GuildSettingsRoleTemplateTsx1.__initData = tmp16;
  let items3 = [tmp10, bound, num];
  function updateLevel(arg0) {
    const rounded = Math.round(arg0);
    closure_7(rounded);
    const current = ref1.current;
    if (current != null) {
      const obj = { index: rounded, animated: !AccessibilityStore.useReducedMotion };
      current.scrollTo(obj);
    }
  }
  const callback = useCallback(GuildSettingsRoleTemplateTsx1, items3);
  const values = Object.values(closure_10);
  let obj3 = { ref, style: tmp.container, children: items5 };
  let obj4 = { style: tmp.sliderContainer, children: items4 };
  let obj5 = { accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_14(_modDef8926, obj6) };
  obj6 = { maximumValue: values.length - 1, minimumTrackTintColor: values[value].color, minimumValue: constants.COSMETIC, onSlidingComplete: updateLevel, style: tmp.slider, thumbTintColor: values[value].color, value, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" };
  items4 = [closure_14(ref1, obj5), ];
  let obj7 = {
    style: tmp.sliderLabels,
    children: values.map((title, index) => {
      let PressableOpacity;
      let Text;
      let obj2;
      let obj3;
      let obj4;
      title = title.title;
      const require = index;
      let obj = { style: closure_3.sliderLabel, children: closure_1_14(PressableOpacity, obj2) };
      obj2 = {
        accessibilityRole: "button",
        accessibilityState: obj3,
        onPress() {
          const rounded = Math.round(index);
          closure_7(rounded);
          const current = ref1.current;
          if (current != null) {
            const obj = { index: rounded, animated: !closure_1_7.useReducedMotion };
            current.scrollTo(obj);
          }
        },
        children: closure_1_14(Text, obj4)
      };
      obj3 = { selected: first === index };
      PressableOpacity = require("Pressables").PressableOpacity;
      obj4 = { variant: "body-sm/medium", children: title() };
      Text = require("Text/Text").Text;
      return closure_1_14(ref1, obj, title());
    })
  };
  items4[1] = closure_14(ref1, obj7);
  items5 = [closure_15(ref1, obj4), ];
  let obj8 = { style: items6, children: closure_14(PaginationDefault, obj9) };
  items6 = [tmp.carousel, { minHeight: rounded }];
  obj9 = {
    ref: ref1,
    data: values,
    renderItem: function renderCarouselItem(item) {
      let Button;
      let contentsResult;
      let intl;
      let items1;
      let items2;
      let obj10;
      let obj2;
      let str;
      item = item.item;
      const tmp = item.index === first;
      const contentPrefaceResult = item.contentPreface();
      const tmp6 = !(!tmp) && undefined;
      let obj = { accessible: tmp6, accessibilityElementsHidden: tmp5, importantForAccessibility: str, style: closure_3.cardWrapper, children: tmp8(ref1, obj2) };
      str = "no-hide-descendants";
      if (tmp) {
        str = "yes";
      }
      obj2 = { style: closure_3.card, children: items2 };
      let obj3 = { style: closure_3.templateTitle, variant: "heading-lg/semibold", children: item.title() };
      const Text = require("Text/Text").Text;
      let items = [closure_1_14(Text, obj3), , ];
      const obj4 = { style: closure_3.templateSubtitle, variant: "body-sm/medium", children: item.description() };
      const Text2 = require("Text/Text").Text;
      items[1] = closure_1_14(Text2, obj4);
      let tmp3Result = null;
      const obj5 = { style: closure_3.templateContentWrapper, children: items1 };
      const tmp9 = first;
      if (null != contentPrefaceResult) {
        tmp3Result = null;
        if ("" !== contentPrefaceResult) {
          const obj6 = { style: closure_3.templateSubtitle, variant: "body-sm/medium", children: item.contentPreface() };
          const Text3 = tmp10(tmp11[18]).Text;
          tmp3Result = tmp3(Text3, obj6);
        }
      }
      items1 = [tmp3Result, ];
      const obj7 = { children: items };
      const obj8 = {
        accessibilityRole: "list",
        children: contentsResult.map((children, index) => {
          let items;
          const obj = { style: closure_3.templateContent, children: items };
          const obj2 = { source: AssetRegistryDefault, size: native.IconSizes.MEDIUM, color: nativeDefault.unsafe_rawColors.GREEN_360 };
          const Icon = native.Icon;
          items = [authStore3(Icon, obj2), ];
          const obj3 = { style: closure_3.templateContentText, variant: "body-sm/medium", children };
          items[1] = authStore3(Text_Text.Text, obj3);
          return closure_15(hasOwnProperty, obj, "" + item.key + "_content_" + index);
        })
      };
      contentsResult = item.contents();
      items1[1] = closure_1_14(ref1, obj8);
      items[2] = closure_1_15(ref1, obj5);
      items2 = [tmp8(tmp9, obj7), ];
      const obj9 = { style: closure_3.templateButton, children: closure_1_14(Button, obj10) };
      obj10 = {
        text: intl.string(require("intl").t.mQS8Is),
        onPress() {
          let key;
          let permissions;
          const communityPermissions = item.communityPermissions;
          ({ permissions, key } = item);
          const track = AnalyticsUtilsDefault.track;
          const ROLE_TEMPLATE_SELECTED = constants.ROLE_TEMPLATE_SELECTED;
          const obj = { location_page: importDefault, template_name: key };
          AnalyticsUtilsDefault;
          const obj2 = AppAnalyticsUtils;
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(dependencyMap));
          track(ROLE_TEMPLATE_SELECTED, obj);
          const guild = GuildStore.getGuild(dependencyMap);
          if (null != guild) {
            const features = guild.features;
            if (features.has(map1.COMMUNITY)) {
              if (null != communityPermissions) {
                _require(communityPermissions);
              }
            }
            _require(permissions);
          }
        }
      };
      Button = tmp10(tmp11[22]).Button;
      intl = tmp10(tmp11[23]).intl;
      items2[1] = closure_1_14(ref1, obj9);
      return closure_1_14(ref1, obj);
    },
    width: tmp10,
    loop: false,
    enabled: !isScreenReaderEnabled,
    scrollAnimationDuration: 200,
    customAnimation: callback,
    onSnapToItem: function handleCarouselSnap(arg0) {
      closure_7(arg0);
    },
    onConfigurePanGesture(activeOffsetX) {
      activeOffsetX.activeOffsetX([-10, 10]);
    }
  };
  items5[1] = closure_14(ref1, obj8);
  return closure_15(ref1, obj3);
};
