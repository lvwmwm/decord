// Module ID: 16819
// Function ID: 16820
// Name: ICYMITopicsScreen
// Dependencies: [5, 32, 19, 17, 16813, 16820, 21, 9380, 11174, 5338, 16821, 10206, 5325, 15535, 12208, 9581, 16822, 10647, 16824, 10649, 11538, 4788, 576, 4506, 5218, 1612, 1484, 16826, 1980, 8654, 4486, 1115, 504, 8662, 4784, 2]
// Exports: default

// Module 16819 (ICYMITopicsScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4506 */;
import components_Button_Button from "components/Button/Button" /* 5218 */;
import BookCheckIcon from "BookCheckIcon" /* 5325 */;
import ForumIcon from "ForumIcon" /* 5338 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 8662 */;
import GameControllerIcon from "GameControllerIcon" /* 9380 */;
import RobotIcon from "RobotIcon" /* 9581 */;
import MusicIcon from "MusicIcon" /* 10206 */;
import FoodIcon from "FoodIcon" /* 10647 */;
import BicycleIcon from "BicycleIcon" /* 10649 */;
import TvIcon from "TvIcon" /* 11174 */;
import PencilSparkleIcon from "PencilSparkleIcon" /* 11538 */;
import PiggyBankIcon from "PiggyBankIcon" /* 12208 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15535 */;
import ScienceIcon from "ScienceIcon" /* 16821 */;
import MedalIcon from "MedalIcon" /* 16822 */;
import PaintbrushThinIcon from "PaintbrushThinIcon" /* 16824 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildDiscoveryCategoryStore from "GuildDiscoveryCategoryStore" /* 16813 */;

require = fn;
function WordTopic(categoryid) {
  categoryid = categoryid.categoryid;
  ({ selected, handlePress: importDefault } = categoryid);
  if (GuildPrimaryCategory.GAMING === categoryid) {
    let tmp2 = closure_1_10(GameControllerIcon.GameControllerIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.ENTERTAINMENT === categoryid) {
    tmp2 = closure_1_10(TvIcon.TvIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.GENERAL_CHATTING === categoryid) {
    tmp2 = closure_1_10(ForumIcon.ForumIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.SCIENCE_AND_TECH === categoryid) {
    tmp2 = closure_1_10(ScienceIcon.ScienceIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.MUSIC === categoryid) {
    tmp2 = closure_1_10(MusicIcon.MusicIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.EDUCATION === categoryid) {
    tmp2 = closure_1_10(BookCheckIcon.BookCheckIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.CREATIVE_ARTS === categoryid) {
    tmp2 = closure_1_10(PaintPaletteIcon.PaintPaletteIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FINANCE === categoryid) {
    tmp2 = closure_1_10(PiggyBankIcon.PiggyBankIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.BOTS === categoryid) {
    tmp2 = closure_1_10(RobotIcon.RobotIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.SPORTS === categoryid) {
    tmp2 = closure_1_10(MedalIcon.MedalIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.TRAVEL_AND_FOOD === categoryid) {
    tmp2 = closure_1_10(FoodIcon.FoodIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FASHION_AND_BEAUTY === categoryid) {
    tmp2 = closure_1_10(PaintbrushThinIcon.PaintbrushThinIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FITNESS_AND_HEALTH === categoryid) {
    tmp2 = closure_1_10(BicycleIcon.BicycleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (16 === categoryid) {
    tmp2 = closure_1_10(PencilSparkleIcon.PencilSparkleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  }
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked: selected });
  let tmp48Result = null;
  if (null != tmp2) {
    const obj2 = { accessibilityRole: tmp45, accessibilityState: tmp46, variant: null, text: null, onPress: null, icon: null };
    let str = "tertiary";
    if (selected) {
      str = "primary";
    }
    obj2.variant = str;
    obj2.text = categoryid.topic;
    obj2.onPress = function onPress() {
      return importDefault(categoryid);
    };
    obj2.icon = tmp2;
    tmp48Result = closure_1_10(components_Button_Button.Button, obj2);
  }
  return tmp48Result;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const GuildPrimaryCategory = fn(16820).GuildPrimaryCategory;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4788);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 }, footer: null, title: null, subtitle: null, separator: null, topicsContainer: null, scrollContentContainer: null };
const rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
obj2.footer = rect;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj2.title = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
let obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
obj2.subtitle = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
let size = { height: StyleSheet.hairlineWidth, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.separator = size;
let obj5 = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
obj2.topicsContainer = { flex: 1, marginHorizontal: nativeDefault.space.PX_16, flexWrap: "wrap", flexDirection: "row", gap: nativeDefault.space.PX_12 };
let obj6 = { flex: 1, marginHorizontal: nativeDefault.space.PX_16, flexWrap: "wrap", flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj2.scrollContentContainer = { paddingTop: nativeDefault.space.PX_24 };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMITopicsScreen.tsx");

export default function ICYMITopicsScreen() {
  const tmp = closure_13();
  const bottom = useSafeAreaInsetsDefault().bottom;
  [first, importDefault] = noop.useState(new Set());
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp6[1];
  const set = new Set();
  const navigation = first(1484).useNavigation();
  const items = [navigation, first];
  const callback = noop.useCallback(navigation(function*(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp4;
            closure_0 = tmp4;
            v2(true);
            v2 = 1;
            c3 = 1;
            const obj5 = { value: closure_0(v2[28])(v2[27], v2.paths), done: false };
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const _Array = Array;
            v2 = 2;
            c3 = 1;
            const obj7 = { value: closure_1(v2[29]).fetchPopularGuildsFromCategories(Array.from(closure_129_0), 0), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          if (value) {
            closure_129_3.push("join_guilds");
          } else {
            const obj9 = { key: "ICYMIInfoModal", content: null };
            const intl = closure_0(v2[31]).intl;
            obj9.content = intl.string(closure_0(v2[31]).t.CG4Hks);
            closure_1(v2[30]).open(obj9);
            const obj = closure_1(v2[30]);
          }
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => v2(false), 500);
          c3 = 3;
        }
      } catch (tmp28) {
        c3 = tmp;
        throw tmp28;
      }
    }
  }), items);
  let obj = first(1484);
  const items1 = [GuildDiscoveryCategoryStore];
  const stateFromStoresArray = first(504).useStateFromStoresArray(items1, () => allCategories.getAllCategories());
  const items2 = [first];
  _slicedToArray = noop.useCallback((categoryId) => {
    closure_0 = categoryId;
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingCategoryToggled({ categoryId, toggled: !first.has(categoryId) });
    if (first.has(categoryId)) {
      tmp2((items) => {
        items.delete(closure_0);
        return new Set(items);
      });
    } else {
      tmp2((add) => {
        add.add(closure_0);
        return new Set(add);
      });
    }
  }, items2);
  let obj3 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  let intl = first(1115).intl;
  obj3.children = intl.string(first(1115).t.Y5d99L);
  const children = [closure_10(first(4784).Text, obj3), , , , ];
  const obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: null };
  const intl2 = first(1115).intl;
  obj4.children = intl2.string(first(1115).t.MGZsfv);
  children[1] = closure_10(first(4784).Text, obj4);
  children[2] = closure_10(closure_6, { style: tmp.separator });
  let obj6 = { showsVerticalScrollIndicator: false, style: tmp.container, contentContainerStyle: tmp.scrollContentContainer, contentInset: { bottom: 72 + bottom }, children: null };
  let obj2 = first(504);
  let obj5 = { style: tmp.separator };
  let obj7 = { bottom: 72 + bottom };
  const tmp10 = closure_12;
  const tmp11 = closure_11;
  const tmp13 = closure_6;
  obj6.children = closure_10(closure_6, { style: tmp.topicsContainer, children: stateFromStoresArray.map((categoryId) => closure_2_10(WordTopic, { selected: first.has(categoryId.categoryId), topic: categoryId.name, categoryid: categoryId.categoryId, handlePress }, categoryId.categoryId)) });
  children[3] = closure_10(closure_7, obj6);
  let tmp12Result = first.size > 0;
  if (tmp12Result) {
    let obj9 = { style: null, children: null };
    const obj10 = { marginBottom: bottom };
    const items4 = [obj10, tmp.footer];
    obj9.style = items4;
    const obj11 = { loading: tmp6[0], size: "lg", text: null, onPress: null };
    const intl3 = tmp7(1115).intl;
    obj11.text = intl3.string(tmp7(1115).t.PDTjLN);
    obj11.onPress = callback;
    obj9.children = tmp12(tmp7(5218).Button, obj11);
    tmp12Result = tmp12(tmp13, obj9);
  }
  children[4] = tmp12Result;
  return tmp10(tmp11, { children });
};
