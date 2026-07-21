// Module ID: 15080
// Function ID: 113521
// Name: WordTopic
// Dependencies: []
// Exports: default

// Module 15080 (WordTopic)
function WordTopic(categoryid) {
  let selected;
  categoryid = categoryid.categoryid;
  const arg1 = categoryid;
  ({ selected, handlePress: closure_1 } = categoryid);
  if (GuildPrimaryCategory.GAMING === categoryid) {
    let tmp = callback3(arg1(dependencyMap[7]).GameControllerIcon, {});
  } else if (GuildPrimaryCategory.ENTERTAINMENT === categoryid) {
    tmp = callback3(arg1(dependencyMap[8]).TvIcon, {});
  } else if (GuildPrimaryCategory.GENERAL_CHATTING === categoryid) {
    tmp = callback3(arg1(dependencyMap[9]).ForumIcon, {});
  } else if (GuildPrimaryCategory.SCIENCE_AND_TECH === categoryid) {
    tmp = callback3(arg1(dependencyMap[10]).ScienceIcon, {});
  } else if (GuildPrimaryCategory.MUSIC === categoryid) {
    tmp = callback3(arg1(dependencyMap[11]).MusicIcon, {});
  } else if (GuildPrimaryCategory.EDUCATION === categoryid) {
    tmp = callback3(arg1(dependencyMap[12]).BookCheckIcon, {});
  } else if (GuildPrimaryCategory.CREATIVE_ARTS === categoryid) {
    tmp = callback3(arg1(dependencyMap[13]).PaintPaletteIcon, {});
  } else if (GuildPrimaryCategory.FINANCE === categoryid) {
    tmp = callback3(arg1(dependencyMap[14]).PiggyBankIcon, {});
  } else if (GuildPrimaryCategory.BOTS === categoryid) {
    tmp = callback3(arg1(dependencyMap[15]).RobotIcon, {});
  } else if (GuildPrimaryCategory.SPORTS === categoryid) {
    tmp = callback3(arg1(dependencyMap[16]).MedalIcon, {});
  } else if (GuildPrimaryCategory.TRAVEL_AND_FOOD === categoryid) {
    tmp = callback3(arg1(dependencyMap[17]).FoodIcon, {});
  } else if (GuildPrimaryCategory.FASHION_AND_BEAUTY === categoryid) {
    tmp = callback3(arg1(dependencyMap[18]).PaintbrushThinIcon, {});
  } else if (GuildPrimaryCategory.FITNESS_AND_HEALTH === categoryid) {
    tmp = callback3(arg1(dependencyMap[19]).BicycleIcon, {});
  } else if (16 === categoryid) {
    tmp = callback3(arg1(dependencyMap[20]).PencilSparkleIcon, {});
  }
  let obj = arg1(dependencyMap[23]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  let tmp45Result = null;
  if (null != tmp) {
    obj = { accessibilityRole: tmp42, accessibilityState: tmp43 };
    let str = "tertiary";
    if (selected) {
      str = "primary";
    }
    obj.variant = str;
    obj.text = categoryid.topic;
    obj.onPress = function onPress() {
      return callback(categoryid);
    };
    obj.icon = tmp;
    tmp45Result = callback3(arg1(dependencyMap[24]).Button, obj);
    const tmp45 = callback3;
  }
  return tmp45Result;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
({ View: closure_6, ScrollView: closure_7 } = tmp2);
let closure_8 = importDefault(dependencyMap[4]);
const GuildPrimaryCategory = arg1(dependencyMap[5]).GuildPrimaryCategory;
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[21]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[22]).colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.footer = { left: importDefault(dependencyMap[22]).space.PX_24, right: importDefault(dependencyMap[22]).space.PX_24, paddingBottom: importDefault(dependencyMap[22]).space.PX_8 };
const obj1 = { left: importDefault(dependencyMap[22]).space.PX_24, right: importDefault(dependencyMap[22]).space.PX_24, paddingBottom: importDefault(dependencyMap[22]).space.PX_8 };
obj.title = { marginTop: importDefault(dependencyMap[22]).space.PX_24, marginBottom: importDefault(dependencyMap[22]).space.PX_8, marginHorizontal: importDefault(dependencyMap[22]).space.PX_24 };
const obj2 = { marginTop: importDefault(dependencyMap[22]).space.PX_24, marginBottom: importDefault(dependencyMap[22]).space.PX_8, marginHorizontal: importDefault(dependencyMap[22]).space.PX_24 };
obj.subtitle = { marginBottom: importDefault(dependencyMap[22]).space.PX_24, marginHorizontal: importDefault(dependencyMap[22]).space.PX_24 };
const obj3 = { marginBottom: importDefault(dependencyMap[22]).space.PX_24, marginHorizontal: importDefault(dependencyMap[22]).space.PX_24 };
obj.separator = { height: tmp2.StyleSheet.hairlineWidth, width: "100%", backgroundColor: importDefault(dependencyMap[22]).colors.BORDER_SUBTLE };
const obj4 = { height: tmp2.StyleSheet.hairlineWidth, width: "100%", backgroundColor: importDefault(dependencyMap[22]).colors.BORDER_SUBTLE };
obj.topicsContainer = { marginHorizontal: importDefault(dependencyMap[22]).space.PX_16, gap: importDefault(dependencyMap[22]).space.PX_12 };
const obj5 = { marginHorizontal: importDefault(dependencyMap[22]).space.PX_16, gap: importDefault(dependencyMap[22]).space.PX_12 };
obj.scrollContentContainer = { paddingTop: importDefault(dependencyMap[22]).space.PX_24 };
let closure_13 = obj.createStyles(obj);
const obj6 = { paddingTop: importDefault(dependencyMap[22]).space.PX_24 };
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/icymi/native/info_modal/ICYMITopicsScreen.tsx");

export default function ICYMITopicsScreen() {
  const tmp = callback4();
  const bottom = importDefault(closure_2[25])().bottom;
  const tmp3 = callback2(React.useState(new Set()), 2);
  const first = tmp3[0];
  const arg1 = first;
  const importDefault = tmp3[1];
  const tmp5 = callback2(React.useState(false), 2);
  closure_2 = tmp5[1];
  const set = new Set();
  const useNavigation = arg1(closure_2[26]).useNavigation;
  const navigation = useNavigation();
  let callback = navigation;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [navigation, first];
  callback = React.useCallback(callback(useNavigation), items);
  let obj = arg1(closure_2[32]);
  const items1 = [closure_8];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => allCategories.getAllCategories());
  const items2 = [first];
  const callback2 = React.useCallback((categoryId) => {
    const first = categoryId;
    const ICYMIAnalytics = first(closure_2[33]).ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingCategoryToggled({ categoryId, toggled: !first.has(categoryId) });
    if (first.has(categoryId)) {
      tmp2((items) => {
        items.delete(items);
        return new Set(items);
      });
    } else {
      tmp2((add) => {
        add.add(add);
        return new Set(add);
      });
    }
  }, items2);
  obj = {};
  obj = { hasMaxConnections: false, isBoostOnlySubscription: false, style: tmp.title };
  const intl = arg1(closure_2[31]).intl;
  obj.children = intl.string(arg1(closure_2[31]).t.Y5d99L);
  const items3 = [callback3(arg1(closure_2[34]).Text, obj), , , , ];
  const obj1 = { style: tmp.subtitle };
  const intl2 = arg1(closure_2[31]).intl;
  obj1.children = intl2.string(arg1(closure_2[31]).t.MGZsfv);
  items3[1] = callback3(arg1(closure_2[34]).Text, obj1);
  items3[2] = callback3(closure_6, { style: tmp.separator });
  const obj3 = { showsVerticalScrollIndicator: false, style: tmp.container, contentContainerStyle: tmp.scrollContentContainer, contentInset: obj4 };
  const obj2 = { style: tmp.separator };
  const obj4 = { bottom: 72 + bottom };
  const tmp10 = closure_11;
  const tmp6 = arg1(closure_2[26]);
  const tmp9 = closure_12;
  obj3.children = callback3(closure_6, { style: tmp.topicsContainer, children: stateFromStoresArray.map((categoryId) => callback(closure_14, { selected: first.has(categoryId.categoryId), topic: categoryId.name, categoryid: categoryId.categoryId, handlePress: closure_4 }, categoryId.categoryId)) });
  items3[3] = callback3(closure_7, obj3);
  let tmp11 = first.size > 0;
  if (tmp11) {
    const obj6 = {};
    const obj7 = { marginBottom: bottom };
    const items4 = [obj7, tmp.footer];
    obj6.style = items4;
    const obj8 = { loading: tmp5[0], size: "lg" };
    const intl3 = arg1(closure_2[31]).intl;
    obj8.text = intl3.string(arg1(closure_2[31]).t.PDTjLN);
    obj8.onPress = callback;
    obj6.children = callback3(arg1(closure_2[24]).Button, obj8);
    tmp11 = callback3(closure_6, obj6);
  }
  items3[4] = tmp11;
  obj.children = items3;
  return tmp9(tmp10, obj);
};
