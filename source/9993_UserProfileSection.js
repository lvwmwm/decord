// Module ID: 9993
// Function ID: 77273
// Name: UserProfileSection
// Dependencies: []
// Exports: default

// Module 9993 (UserProfileSection)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { titleContainer: {}, title: { flexDirection: "row" }, section: {} };
obj = { borderWidth: 1, borderRadius: importDefault(dependencyMap[4]).radii.sm, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.contentContainer = obj;
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_profile/native/UserProfileSection.tsx");

export default function UserProfileSection(title) {
  let children;
  let headerIcon;
  let showContainer;
  let style;
  let trailingIcon;
  title = title.title;
  let obj = { query: null, type: "LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION", guildId: "Missing required option for startPayment.", limit: null, allowEmptyQueries: "LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED", allowSnowflake: "LocalPayment startPayment deferred payment failed." };
  ({ headerIcon, trailingIcon, showContainer, children, style } = title);
  Object.setPrototypeOf(null);
  const merged = Object.assign(title, obj);
  const tmp3 = callback3();
  let obj1 = arg1(dependencyMap[5]);
  const themeContext = obj1.useThemeContext();
  const theme = themeContext.theme;
  let obj2 = arg1(dependencyMap[6]);
  const profileThemeValues = obj2.useProfileThemeValues(theme);
  obj = {};
  const merged1 = Object.assign(tmp3.contentContainer);
  if (null != themeContext.primaryColor) {
    if (null != profileThemeValues) {
      let obj4 = arg1(dependencyMap[7]);
      let borderColor = obj4.hexOpacityToRgba(arg1(dependencyMap[8]).DIVIDER_COLORS[theme], profileThemeValues.dividerOpacity);
    }
    obj["borderColor"] = borderColor;
    obj = {};
    const items = [tmp3.section, style];
    obj.style = items;
    const merged2 = Object.assign(merged);
    let tmp14 = null;
    if (null != title) {
      obj1 = { style: tmp3.titleContainer };
      obj2 = { style: tmp3.title };
      const obj3 = { "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000319664301361861, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000017272340227376844, children: title };
      const items1 = [callback(arg1(dependencyMap[9]).Text, obj3), headerIcon];
      obj2.children = items1;
      const items2 = [callback2(View, obj2), trailingIcon];
      obj1.children = items2;
      tmp14 = callback2(View, obj1);
    }
    const items3 = [tmp14, ];
    obj4 = {};
    let tmp22 = null;
    if (showContainer) {
      tmp22 = obj;
    }
    obj4.style = tmp22;
    obj4.children = children;
    items3[1] = callback(View, obj4);
    obj["children"] = items3;
    return callback2(View, obj);
  }
  borderColor = tmp3.contentContainer.borderColor;
};
