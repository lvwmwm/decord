// Module ID: 9308
// Function ID: 72783
// Name: items
// Dependencies: []
// Exports: default

// Module 9308 (items)
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
const obj1 = { 9223372036854775807: "user", 0: "2026-06-dont-badge-muted-vcs", 9223372036854775807: "text-sm/bold", 0: "text-feedback-info", 9223372036854775807: 750, tintColor: importDefault(dependencyMap[14]).colors.WHITE };
obj.nitroIcon = obj1;
obj.description = { paddingHorizontal: 16 };
let closure_10 = obj.createStyles(obj);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx");

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
    const intl = arg1(dependencyMap[26]).intl;
    obj.title = intl.string(arg1(dependencyMap[26]).t.Wfl5zp);
    obj = { backdropOpacity: arg1(dependencyMap[27]).BACKDROP_OPACITY, backdropChildren: tmp4 };
    obj.backdropProps = obj;
    const intl2 = arg1(dependencyMap[26]).intl;
    obj.description = intl2.string(arg1(dependencyMap[26]).t.eikz43);
    obj.descriptionStyle = tmp.description;
    obj.dismissibleContent = closure_8;
    const intl3 = arg1(dependencyMap[26]).intl;
    obj.primaryButtonText = intl3.string(arg1(dependencyMap[26]).t.sEAnVH);
    obj.primaryButtonIcon = function primaryButtonIcon() {
      const obj = { style: tmp.nitroIcon };
      return callback(tmp(obj[28]).NitroWheel, obj);
    };
    obj.onPrimaryButtonPress = function onPrimaryButtonPress() {
      let obj = analyticsLocations(obj[29]);
      obj.hideActionSheet();
      obj = { analyticsLocation: obj, analyticsLocations };
      const obj2 = analyticsLocations(obj[18]);
      obj.premiumFeatureCardOrder = tmp(obj[21]).PremiumFeatureCardOrder.TIER_2_LEADING;
      obj2.pushLazy(tmp(obj[20])(obj[19], obj.paths), obj);
    };
    const intl4 = arg1(dependencyMap[26]).intl;
    obj.secondaryButtonText = intl4.string(arg1(dependencyMap[26]).t.TulDPl);
    obj.onDismiss = onDismiss.onDismiss;
    tmp5 = jsx(importDefault(dependencyMap[25]), obj);
    const tmp9 = importDefault(dependencyMap[25]);
  }
  return tmp5;
};
