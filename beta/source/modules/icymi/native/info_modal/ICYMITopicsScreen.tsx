// Module ID: 16115
// Function ID: 16116
// Name: ICYMITopicsScreen
// Dependencies: [5, 32, 19, 17, 16109, 16116, 21, 8535, 10342, 5402, 16117, 9366, 5389, 14807, 11403, 8738, 16118, 9813, 16120, 9815, 10813, 4836, 576, 4548, 5281, 1613, 1485, 16122, 1981, 7799, 4528, 1115, 504, 7807, 4832, 2]
// Exports: default

// Module 16115 (ICYMITopicsScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import react_native from "react-native" /* 4548 */;
import BookCheckIcon from "BookCheckIcon" /* 5389 */;
import ForumIcon from "ForumIcon" /* 5402 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 7807 */;
import GameControllerIcon from "GameControllerIcon" /* 8535 */;
import RobotIcon from "RobotIcon" /* 8738 */;
import MusicIcon from "MusicIcon" /* 9366 */;
import FoodIcon from "FoodIcon" /* 9813 */;
import BicycleIcon from "BicycleIcon" /* 9815 */;
import TvIcon from "TvIcon" /* 10342 */;
import PencilSparkleIcon from "PencilSparkleIcon" /* 10813 */;
import PiggyBankIcon from "PiggyBankIcon" /* 11403 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 14807 */;
import GuildSettingsDiscoveryConstants from "GuildSettingsDiscoveryConstants" /* 16116 */;
import ScienceIcon from "ScienceIcon" /* 16117 */;
import MedalIcon from "MedalIcon" /* 16118 */;
import PaintbrushThinIcon from "PaintbrushThinIcon" /* 16120 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import GuildDiscoveryCategoryStore from "GuildDiscoveryCategoryStore" /* 16109 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c2, c3, closure_1, navigation, set;

let StyleSheet;
let c10;
let closure_12;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
let tmp42;
let unpackModuleId;
const components_Button_Button = tmp42(5281);
function WordTopic(categoryid) {
  let closure_129_1;
  let selected;
  let str;
  let tmp2;
  categoryid = categoryid.categoryid;
  ({ selected, handlePress: closure_129_1 } = categoryid);
  const topic = categoryid.topic;
  if (GuildPrimaryCategory.GAMING === categoryid) {
    tmp2 = authStore(GameControllerIcon.GameControllerIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.ENTERTAINMENT === categoryid) {
    tmp2 = authStore(TvIcon.TvIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.GENERAL_CHATTING === categoryid) {
    tmp2 = authStore(ForumIcon.ForumIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.SCIENCE_AND_TECH === categoryid) {
    tmp2 = authStore(ScienceIcon.ScienceIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.MUSIC === categoryid) {
    tmp2 = authStore(MusicIcon.MusicIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.EDUCATION === categoryid) {
    tmp2 = authStore(BookCheckIcon.BookCheckIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.CREATIVE_ARTS === categoryid) {
    tmp2 = authStore(PaintPaletteIcon.PaintPaletteIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FINANCE === categoryid) {
    tmp2 = authStore(PiggyBankIcon.PiggyBankIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.BOTS === categoryid) {
    tmp2 = authStore(RobotIcon.RobotIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.SPORTS === categoryid) {
    tmp2 = authStore(MedalIcon.MedalIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.TRAVEL_AND_FOOD === categoryid) {
    tmp2 = authStore(FoodIcon.FoodIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FASHION_AND_BEAUTY === categoryid) {
    tmp2 = authStore(PaintbrushThinIcon.PaintbrushThinIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FITNESS_AND_HEALTH === categoryid) {
    tmp2 = authStore(BicycleIcon.BicycleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (16 === categoryid) {
    tmp2 = authStore(PencilSparkleIcon.PencilSparkleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  }
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  let tmp48Result = null;
  if (null != tmp2) {
    const obj2 = {
      accessibilityRole: tmp45,
      accessibilityState: tmp46,
      variant: str,
      text: topic,
      onPress() {
          return closure_1_1(categoryid);
        },
      icon: tmp2
    };
    str = "tertiary";
    const Button = components_Button_Button.Button;
    const tmp48 = authStore;
    if (selected) {
      str = "primary";
    }
    tmp48Result = tmp48(Button, obj2);
  }
  return tmp48Result;
}
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native2);
const GuildPrimaryCategory = GuildSettingsDiscoveryConstants.GuildPrimaryCategory;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, footer: rect, title: obj3, subtitle: obj4, separator: size, topicsContainer: obj5, scrollContentContainer: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
obj3 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
obj4 = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
size = { height: StyleSheet.hairlineWidth, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { flex: 1, marginHorizontal: nativeDefault.space.PX_16, flexWrap: "wrap", flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj6 = { paddingTop: nativeDefault.space.PX_24 };
let closure_13 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMITopicsScreen.tsx");

export default function ICYMITopicsScreen() {
  let Button;
  let allCategories;
  let closure_2;
  let first;
  let first1;
  let handlePress;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let obj11;
  let obj7;
  let obj8;
  const tmp = closure_13();
  const tmp2 = dependencyMap;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const useState = react.useState;
  set = new Set();
  [first, importDefault] = useState(set);
  [first1, dependencyMap] = react.useState(false);
  let obj = first(1485);
  navigation = obj.useNavigation();
  const items = [navigation, first];
  const callback = react.useCallback(navigation(function*(arg0, value) {
    let closure_0;
    let intl;
    let v2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp3;
            first = tmp3;
            c2(true);
            c2 = 1;
            c3 = 1;
            const obj5 = { value: first(c2[28])(c2[27], c2.paths), done: false };
            return obj5;
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const _Array = Array;
            const obj3 = closure_1(c2[29]);
            c2 = 2;
            c3 = 1;
            const obj7 = { value: obj3.fetchPopularGuildsFromCategories(Array.from(closure_129_0), 0), done: false };
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
            const obj = { key: "ICYMIInfoModal", content: intl.string(first(c2[31]).t.CG4Hks) };
            const open = closure_1(c2[30]).open;
            const tmp6 = closure_1(c2[30]);
            intl = first(c2[31]).intl;
            open(obj);
          }
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => v2(false), 500);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp28) {
        c3 = 3;
        throw tmp28;
      }
    }
  }), items);
  let obj2 = first(504);
  const items1 = [GuildDiscoveryCategoryStore];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => allCategories.getAllCategories());
  const items2 = [first];
  _slicedToArray = react.useCallback((categoryId) => {
    let closure_0 = categoryId;
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const obj = { categoryId, toggled: !first.has(categoryId) };
    const result = ICYMIAnalytics.trackFeedOnboardingCategoryToggled(obj);
    if (first.has(categoryId)) {
      closure_1((items) => {
        items.delete(closure_0);
        set = new Set(items);
        return set;
      });
    } else {
      closure_1((add) => {
        add.add(closure_0);
        set = new Set(add);
        return set;
      });
    }
  }, items2);
  let obj3 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: intl.string(first(1115).t.Y5d99L) };
  const Text = first(4832).Text;
  intl = first(1115).intl;
  const children = [closure_10(Text, obj3), , , , ];
  let obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: intl2.string(first(1115).t.MGZsfv) };
  const Text2 = first(4832).Text;
  intl2 = first(1115).intl;
  children[1] = closure_10(Text2, obj4);
  let obj5 = { style: tmp.separator };
  children[2] = closure_10(closure_6, obj5);
  let obj6 = { showsVerticalScrollIndicator: false, style: tmp.container, contentContainerStyle: tmp.scrollContentContainer, contentInset: obj7, children: closure_10(closure_6, obj8) };
  obj7 = { bottom: 72 + bottom };
  obj8 = {
    style: tmp.topicsContainer,
    children: stateFromStoresArray.map((categoryId) => {
      const obj = { selected: first.has(categoryId.categoryId), topic: categoryId.name, categoryid: categoryId.categoryId, handlePress };
      return authStore(WordTopic, obj, categoryId.categoryId);
    })
  };
  children[3] = closure_10(closure_7, obj6);
  let tmp13Result = first.size > 0;
  const tmp11 = closure_12;
  const tmp12 = closure_11;
  const tmp14 = closure_6;
  if (tmp13Result) {
    const obj9 = { style: items4, children: closure_10(Button, obj11) };
    items4 = [{ marginBottom: bottom }, tmp.footer];
    const obj10 = { marginBottom: bottom };
    obj11 = { loading: first1, size: "lg", text: intl3.string(first(1115).t.PDTjLN), onPress: callback };
    Button = tmp8(5281).Button;
    intl3 = tmp8(1115).intl;
    tmp13Result = tmp13(tmp14, obj9);
  }
  children[4] = tmp13Result;
  return tmp11(tmp12, { children });
};
