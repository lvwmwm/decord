// Module ID: 9309
// Function ID: 72796
// Name: items
// Dependencies: []
// Exports: default

// Module 9309 (items)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticsPages = arg1(dependencyMap[3]).AnalyticsPages;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_8 = arg1(dependencyMap[5]).DismissibleContent.SUPER_REACTIONS_COACHMARK_MOBILE;
const items = [arg1(dependencyMap[6]), arg1(dependencyMap[7]), arg1(dependencyMap[8]), arg1(dependencyMap[9]), arg1(dependencyMap[7]), arg1(dependencyMap[10]), arg1(dependencyMap[11]), arg1(dependencyMap[12])];
let obj = arg1(dependencyMap[13]);
obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["flex"] = 1;
obj["alignItems"] = "center";
obj["justifyContent"] = "center";
obj["top"] = -150;
obj.fill = obj;
const obj1 = { onPress: "user", variant: "2026-06-notify-friends-on-profile-update", disabled: "text-sm/bold", isRoleSubscriptionEmoji: "text-feedback-info", isUnusableRoleSubscriptionEmoji: 750, tintColor: importDefault(dependencyMap[14]).colors.WHITE };
obj.nitroIcon = obj1;
obj.description = { paddingHorizontal: 16 };
let closure_10 = obj.createStyles(obj);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx");

export default function SuperReactionCoachmarkActionSheet(onDismiss) {
  const tmp = callback();
  const arg1 = tmp;
  const importDefault = importDefault(dependencyMap[15])().analyticsLocations;
  let obj = { page: AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS };
  const dependencyMap = obj;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[16]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = arg1(dependencyMap[16]);
  [][0] = tmp;
  const obj3 = arg1(dependencyMap[17]);
  let tmp5 = null;
  if (!isPremiumResult) {
    obj = {};
    const intl = arg1(dependencyMap[24]).intl;
    obj.title = intl.string(arg1(dependencyMap[24]).t.Wfl5zp);
    obj = { backdropOpacity: arg1(dependencyMap[25]).BACKDROP_OPACITY, backdropChildren: tmp4 };
    obj.backdropProps = obj;
    const intl2 = arg1(dependencyMap[24]).intl;
    obj.description = intl2.string(arg1(dependencyMap[24]).t.eikz43);
    obj.descriptionStyle = tmp.description;
    obj.dismissibleContent = closure_8;
    const intl3 = arg1(dependencyMap[24]).intl;
    obj.primaryButtonText = intl3.string(arg1(dependencyMap[24]).t.sEAnVH);
    obj.primaryButtonIcon = function primaryButtonIcon() {
      const obj = { style: tmp.nitroIcon };
      return callback(tmp(obj[26]).NitroWheel, obj);
    };
    obj.onPrimaryButtonPress = function onPrimaryButtonPress() {
      let obj = analyticsLocations(obj[27]);
      obj.hideActionSheet();
      obj = { analyticsLocation: obj, analyticsLocations };
      obj.premiumFeatureCardOrder = tmp(obj[19]).PremiumFeatureCardOrder.TIER_2_LEADING;
      analyticsLocations(obj[18])(obj);
    };
    const intl4 = arg1(dependencyMap[24]).intl;
    obj.secondaryButtonText = intl4.string(arg1(dependencyMap[24]).t.TulDPl);
    obj.onDismiss = onDismiss.onDismiss;
    tmp5 = jsx(importDefault(dependencyMap[23]), obj);
    const tmp9 = importDefault(dependencyMap[23]);
  }
  return tmp5;
};
