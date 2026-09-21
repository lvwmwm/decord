// Module ID: 16818
// Function ID: 16819
// Name: ICYMITopicsScreen
// Dependencies: [5, 32, 19, 17, 16812, 16819, 21, 9346, 11187, 5308, 16820, 10146, 5295, 15521, 12055, 9545, 16821, 10531, 16823, 10533, 11515, 4758, 580, 558, 568, 4479, 5188, 1616, 1488, 16825, 1984, 8627, 4458, 1119, 504, 8635, 4754, 2]
// Exports: default

// Module 16818 (ICYMITopicsScreen)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4479 */;
import components_Button_Button from "components/Button/Button" /* 5188 */;
import BookCheckIcon from "BookCheckIcon" /* 5295 */;
import ForumIcon from "ForumIcon" /* 5308 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 8635 */;
import GameControllerIcon from "GameControllerIcon" /* 9346 */;
import RobotIcon from "RobotIcon" /* 9545 */;
import MusicIcon from "MusicIcon" /* 10146 */;
import FoodIcon from "FoodIcon" /* 10531 */;
import BicycleIcon from "BicycleIcon" /* 10533 */;
import TvIcon from "TvIcon" /* 11187 */;
import PencilSparkleIcon from "PencilSparkleIcon" /* 11515 */;
import PiggyBankIcon from "PiggyBankIcon" /* 12055 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15521 */;
import ScienceIcon from "ScienceIcon" /* 16820 */;
import MedalIcon from "MedalIcon" /* 16821 */;
import PaintbrushThinIcon from "PaintbrushThinIcon" /* 16823 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildDiscoveryCategoryStore from "GuildDiscoveryCategoryStore" /* 16812 */;

require = fn;
function primaryCategoryToEmojiIcon(categoryid) {
  if (GuildPrimaryCategory.GAMING === categoryid) {
    return v65535(GameControllerIcon.GameControllerIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.ENTERTAINMENT === categoryid) {
    return v65535(TvIcon.TvIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.GENERAL_CHATTING === categoryid) {
    return v65535(ForumIcon.ForumIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.SCIENCE_AND_TECH === categoryid) {
    return v65535(ScienceIcon.ScienceIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.MUSIC === categoryid) {
    return v65535(MusicIcon.MusicIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.EDUCATION === categoryid) {
    return v65535(BookCheckIcon.BookCheckIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.CREATIVE_ARTS === categoryid) {
    return v65535(PaintPaletteIcon.PaintPaletteIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FINANCE === categoryid) {
    return v65535(PiggyBankIcon.PiggyBankIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.BOTS === categoryid) {
    return v65535(RobotIcon.RobotIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.SPORTS === categoryid) {
    return v65535(MedalIcon.MedalIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.TRAVEL_AND_FOOD === categoryid) {
    return v65535(FoodIcon.FoodIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FASHION_AND_BEAUTY === categoryid) {
    return v65535(PaintbrushThinIcon.PaintbrushThinIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (tmp.FITNESS_AND_HEALTH === categoryid) {
    return v65535(BicycleIcon.BicycleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (16 === categoryid) {
    return v65535(PencilSparkleIcon.PencilSparkleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  }
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const GuildPrimaryCategory = fn(16819).GuildPrimaryCategory;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4758);
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
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ topic, categoryid } = arg0);
  ({ selected, handlePress } = arg0);
  if (cResult[0] !== categoryid) {
    const tmp6 = primaryCategoryToEmojiIcon(categoryid);
    cResult[0] = categoryid;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== selected) {
    const obj2 = { checked: selected };
    cResult[2] = selected;
    cResult[3] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[3];
  }
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative(tmp7);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (null == tmp4) {
    return null;
  } else {
    let str = "tertiary";
    if (selected) {
      str = "primary";
    }
    if (cResult[4] === categoryid) {
      if (cResult[5] === handlePress) {
        let tmp9 = cResult[6];
      }
      if (cResult[7] === accessibilityRole) {
        if (cResult[8] === accessibilityState) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === str) {
              if (cResult[11] === tmp9) {
                if (cResult[12] === topic) {
                  let tmp10 = cResult[13];
                }
                return tmp10;
              }
            }
          }
        }
      }
      const obj3 = { accessibilityRole, accessibilityState, variant: str, text: topic, onPress: tmp9, icon: tmp4 };
      const tmp12 = v65535(tmp(5188).Button, obj3);
      cResult[7] = accessibilityRole;
      cResult[8] = accessibilityState;
      cResult[9] = tmp4;
      cResult[10] = str;
      cResult[11] = tmp9;
      cResult[12] = topic;
      cResult[13] = tmp12;
      tmp10 = tmp12;
    }
    const fn = function x() {
      return handlePress(categoryid);
    };
    cResult[4] = categoryid;
    cResult[5] = handlePress;
    cResult[6] = fn;
    tmp9 = fn;
  }
}) : ((categoryid) => {
  categoryid = categoryid.categoryid;
  ({ selected, handlePress: importDefault } = categoryid);
  const tmp = primaryCategoryToEmojiIcon(categoryid);
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked: selected });
  let tmp8Result = null;
  if (null != tmp) {
    const obj2 = { accessibilityRole: tmp5, accessibilityState: tmp6, variant: null, text: null, onPress: null, icon: null };
    let str = "tertiary";
    if (selected) {
      str = "primary";
    }
    obj2.variant = str;
    obj2.text = categoryid.topic;
    obj2.onPress = function onPress() {
      return importDefault(categoryid);
    };
    obj2.icon = tmp;
    tmp8Result = v65535(components_Button_Button.Button, obj2);
  }
  return tmp8Result;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMITopicsScreen.tsx");

export default function ICYMITopicsScreen() {
  const tmp = closure_14();
  const bottom = useSafeAreaInsetsDefault().bottom;
  [first, importDefault] = noop.useState(new Set());
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp6[1];
  const set = new Set();
  const navigation = first(1488).useNavigation();
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
        return { value: "IconComponent", done: null };
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
            const obj5 = { value: closure_0(v2[30])(v2[29], v2.paths), done: false };
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
            const obj7 = { value: closure_1(v2[31]).fetchPopularGuildsFromCategories(Array.from(closure_129_0), 0), done: false };
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
            const intl = closure_0(v2[33]).intl;
            obj9.content = intl.string(closure_0(v2[33]).t.CG4Hks);
            closure_1(v2[32]).open(obj9);
            const obj = closure_1(v2[32]);
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
  let obj = first(1488);
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
  let intl = first(1119).intl;
  obj3.children = intl.string(first(1119).t.Y5d99L);
  const children = [closure_10(first(4754).Text, obj3), , , , ];
  const obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: null };
  const intl2 = first(1119).intl;
  obj4.children = intl2.string(first(1119).t.MGZsfv);
  children[1] = closure_10(first(4754).Text, obj4);
  children[2] = closure_10(closure_6, { style: tmp.separator });
  let obj6 = { showsVerticalScrollIndicator: false, style: tmp.container, contentContainerStyle: tmp.scrollContentContainer, contentInset: { bottom: 72 + bottom }, children: null };
  let obj2 = first(504);
  let obj5 = { style: tmp.separator };
  let obj7 = { bottom: 72 + bottom };
  const tmp10 = closure_12;
  const tmp11 = closure_11;
  const tmp13 = closure_6;
  obj6.children = closure_10(closure_6, { style: tmp.topicsContainer, children: stateFromStoresArray.map((categoryId) => v65535(closure_15, { selected: first.has(categoryId.categoryId), topic: categoryId.name, categoryid: categoryId.categoryId, handlePress }, categoryId.categoryId)) });
  children[3] = closure_10(closure_7, obj6);
  let tmp12Result = first.size > 0;
  if (tmp12Result) {
    let obj9 = { style: null, children: null };
    const obj10 = { marginBottom: bottom };
    const items4 = [obj10, tmp.footer];
    obj9.style = items4;
    const obj11 = { loading: tmp6[0], size: "lg", text: null, onPress: null };
    const intl3 = tmp7(1119).intl;
    obj11.text = intl3.string(tmp7(1119).t.PDTjLN);
    obj11.onPress = callback;
    obj9.children = tmp12(tmp7(5188).Button, obj11);
    tmp12Result = tmp12(tmp13, obj9);
  }
  children[4] = tmp12Result;
  return tmp10(tmp11, { children });
};
