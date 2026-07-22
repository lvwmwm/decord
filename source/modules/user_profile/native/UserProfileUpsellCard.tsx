// Module ID: 13497
// Function ID: 102412
// Name: UserProfileUpsellCard
// Dependencies: []
// Exports: default

// Module 13497 (UserProfileUpsellCard)
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
const Gradients = arg1(dependencyMap[3]).Gradients;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { style: "\u{1F9D1}\u200D\u{1F3A8}", accessibilityRole: true, space: 12.1, TypeError: 124, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.upsellButton = obj;
obj.titleContainer = { -110959999: null, -1227664409: null, -1649041997: null, 1860687715: null };
obj.linearGradient = { flex: "HT", backgroundColor: "prefixTag", padding: "values", 242550644: "isArray" };
obj.outer = { marginHorizontal: arg1(dependencyMap[2]).PROFILE_SIDE_PADDING - 1 };
const tmp4 = arg1(dependencyMap[4]);
obj.scroll = { borderRadius: importDefault(dependencyMap[6]).radii.lg, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.inner = { "Bool(false)": "<string:336527361>", "Bool(false)": "<string:1120403457>" };
let closure_8 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.lg, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCard.tsx");

export default function UserProfileUpsellCard(headerText) {
  let children;
  let ctaText;
  let onPress;
  let showLinearGradient;
  let style;
  headerText = headerText.headerText;
  ({ style, children, ctaText, showLinearGradient, onPress } = headerText);
  const tmp = callback3();
  const arg1 = tmp;
  let obj = { borderWidth: 1, style: items };
  const items = [tmp.outer, style];
  obj.direction = arg1(dependencyMap[7]).GradientBorder.Direction.HORIZONTAL;
  obj.colors = Gradients.PREMIUM_TIER_2;
  obj.borderRadius = importDefault(dependencyMap[6]).radii.lg;
  obj = { bounces: false, style: tmp.scroll, contentContainerStyle: tmp.inner };
  let tmp5 = null;
  if (null != headerText) {
    obj = { style: tmp.titleContainer };
    const obj1 = { color: importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY, size: "xs" };
    const items1 = [callback(arg1(dependencyMap[8]).NitroWheelIcon, obj1), ];
    const obj2 = { variant: "heading-sm/bold", children: headerText };
    items1[1] = callback(arg1(dependencyMap[9]).Text, obj2);
    obj.children = items1;
    tmp5 = callback2(closure_3, obj);
  }
  const items2 = [tmp5, children, ];
  const obj3 = {
    style: tmp.upsellButton,
    onPress,
    text: ctaText,
    color: arg1(dependencyMap[7]).ButtonColors.GREEN,
    renderIcon() {
      return callback2(tmp(closure_2[8]).NitroWheelIcon, { GuildBadgeSnail: "<string:2168586244>", EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED: "<string:3405775420>" });
    }
  };
  let fn;
  if (showLinearGradient) {
    fn = () => {
      const obj = { style: items };
      const items = [tmp.linearGradient];
      const tmp = callback(closure_2[10]);
      obj.start = tmp(closure_2[11]).HorizontalGradient.START;
      obj.end = tmp(closure_2[11]).HorizontalGradient.END;
      obj.colors = obj.PREMIUM_TIER_2_TRI_COLOR;
      return callback2(tmp, obj);
    };
  }
  obj3.renderLinearGradient = fn;
  items2[2] = callback(arg1(dependencyMap[7]).ShinyButton, obj3);
  obj.children = items2;
  obj.children = callback2(closure_4, obj);
  return callback(arg1(dependencyMap[7]).GradientBorder, obj);
};
