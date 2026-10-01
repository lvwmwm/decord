// Module ID: 14305
// Function ID: 14306
// Name: SafetyHubAccountStanding
// Dependencies: [32, 19, 17, 1372, 7881, 7868, 21, 7869, 14306, 4836, 576, 1115, 14298, 4792, 6028, 8905, 6034, 6359, 504, 1397, 8274, 1177, 4832, 2]
// Exports: default

// Module 14305 (SafetyHubAccountStanding)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4792 */;
import Text_Text from "Text/Text" /* 4832 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6028 */;
import CircleXIcon from "CircleXIcon" /* 6034 */;
import AssetRegistryDefault from "AssetRegistry" /* 6359 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import SafetyHubModels from "SafetyHubModels" /* 7869 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8905 */;
import SafetyHubAccountStandingLabels from "SafetyHubAccountStandingLabels" /* 14298 */;
import SafetyHubAccountStandingSubwayMarker from "SafetyHubAccountStandingSubwayMarker" /* 14306 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let items;
let items1;
let items2;
let items3;
let obj11;
let size;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const SafetyHubLinks = SafetyHubConstants.SafetyHubLinks;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { [SafetyHubModels.AccountStandingState.ALL_GOOD]: { left: "0%" } };
let obj2 = { left: "25%", transform: items };
let obj3 = { translateX: -0.5 * SafetyHubAccountStandingSubwayMarker.SUBWAY_MARKER_WIDTH };
let LIMITED = SafetyHubModels.AccountStandingState.LIMITED;
items = [obj3];
obj[LIMITED] = obj2;
let obj4 = { left: "50%", transform: items1 };
let obj5 = { translateX: -0.5 * SafetyHubAccountStandingSubwayMarker.SUBWAY_MARKER_WIDTH };
let VERY_LIMITED = SafetyHubModels.AccountStandingState.VERY_LIMITED;
items1 = [obj5];
obj[VERY_LIMITED] = obj4;
let obj6 = { left: "75%", transform: items2 };
let obj7 = { translateX: -0.5 * SafetyHubAccountStandingSubwayMarker.SUBWAY_MARKER_WIDTH };
let AT_RISK = SafetyHubModels.AccountStandingState.AT_RISK;
items2 = [obj7];
obj[AT_RISK] = obj6;
let obj8 = { left: "100%", transform: items3 };
let obj9 = { translateX: -SafetyHubAccountStandingSubwayMarker.SUBWAY_MARKER_WIDTH };
let SUSPENDED = SafetyHubModels.AccountStandingState.SUSPENDED;
items3 = [obj9];
obj[SUSPENDED] = obj8;
let createStyles = createStyles_mod;
let obj10 = { container: obj11, avatarBackground: { position: "relative", justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round }, good: { color: nativeDefault.colors.STATUS_POSITIVE }, limited: { color: nativeDefault.colors.STATUS_WARNING }, veryLimited: { color: "#FF7A00" }, atRisk: { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }, suspended: { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }, body: { display: "flex", rowGap: 40, width: "100%" }, bodyText: { rowGap: nativeDefault.space.PX_8 }, health: { position: "relative", left: 0, right: 0, marginBottom: 18 }, line: size, subwayMarker: { position: "absolute" }, icon: { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
obj11 = { display: "flex", flexDirection: "column", rowGap: 12, padding: 24, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
({ position: "relative", justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round });
({ color: nativeDefault.colors.STATUS_POSITIVE });
({ color: nativeDefault.colors.STATUS_WARNING });
({ color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL });
({ color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL });
({ rowGap: nativeDefault.space.PX_8 });
size = { height: 3, width: "100%", position: "absolute", top: 8.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
({ borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
let closure_12 = createStyles(obj10);
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStanding.tsx");

export default function SafetyHubAccountStanding() {
  let Avatar;
  let closure_2;
  let closure_3;
  let currentUser;
  let description;
  let height;
  let intl;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let memo;
  let obj5;
  let obj9;
  let str;
  let title;
  let userAvatarSource;
  const accountStanding = SafetyHubStore.getAccountStanding();
  [height, dependencyMap] = memo.useState(0);
  let tmp4 = closure_12();
  _slicedToArray = tmp4;
  let items = [tmp4];
  memo = memo.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let obj3;
    obj = {};
    const obj2 = { title: intl6.t.uaKrRi, description: intl.format(intl6.t.pEdBD4, obj3), status: SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.ALL_GOOD], style: closure_3.good, CustomIcon: CircleCheckIcon.CircleCheckIcon };
    const ALL_GOOD = SafetyHubModels.AccountStandingState.ALL_GOOD;
    intl = intl6.intl;
    obj3 = { termsOfService: SafetyHubLinks.TOS_LINK, communityGuidelines: SafetyHubLinks.COMMUNITY_GUIDELINES };
    obj[ALL_GOOD] = obj2;
    const obj4 = { title: intl6.t.epkcmS, description: intl2.string(intl6.t["774juc"]), status: SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.LIMITED], style: closure_3.limited, CustomIcon: CircleErrorIcon.CircleErrorIcon, iconSource: AssetRegistryDefault2 };
    const LIMITED = SafetyHubModels.AccountStandingState.LIMITED;
    intl2 = intl6.intl;
    obj[LIMITED] = obj4;
    const obj5 = { title: intl6.t.crzE2X, description: intl3.string(intl6.t["T/Ufh9"]), status: SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.VERY_LIMITED], style: closure_3.veryLimited, CustomIcon: CircleErrorIcon.CircleErrorIcon, iconSource: AssetRegistryDefault2 };
    const VERY_LIMITED = SafetyHubModels.AccountStandingState.VERY_LIMITED;
    intl3 = intl6.intl;
    obj[VERY_LIMITED] = obj5;
    const obj6 = { title: intl6.t.XRNVzO, description: intl4.string(intl6.t["hbH+9S"]), status: SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.AT_RISK], style: closure_3.atRisk, CustomIcon: CircleErrorIcon.CircleErrorIcon, iconSource: AssetRegistryDefault2 };
    const AT_RISK = SafetyHubModels.AccountStandingState.AT_RISK;
    intl4 = intl6.intl;
    obj[AT_RISK] = obj6;
    const obj7 = { title: intl6.t.MExFkz, description: intl5.string(intl6.t["2liUvt"]), status: SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.SUSPENDED], style: closure_3.suspended, CustomIcon: CircleXIcon.CircleXIcon, iconSource: AssetRegistryDefault };
    const SUSPENDED = SafetyHubModels.AccountStandingState.SUSPENDED;
    intl5 = intl6.intl;
    obj[SUSPENDED] = obj7;
    return obj;
  }, items);
  const items1 = [accountStanding, memo, height, tmp4];
  const memo1 = memo.useMemo(() => {
    let state;
    const entries = Object.entries(memo);
    return entries.map((item, index) => {
      let items;
      let length;
      let obj3;
      let obj4;
      let obj7;
      let tmp;
      let tmp2;
      let tmp4;
      [tmp, tmp2] = item;
      const parsed = parseInt(tmp);
      obj = { style: items, children: closure_2_9(tmp4, obj3, index) };
      items = [closure_1_3.subwayMarker, closure_2_11[parsed]];
      const CustomIcon = tmp2.CustomIcon;
      obj3 = {
        selectedIcon: closure_2_9(CustomIcon, obj4),
        style: null,
        status: null,
        isSelected: parsed === state.state,
        index,
        onLayout(nativeEvent) {
          if (nativeEvent.nativeEvent.layout.height > closure_1_1) {
            closure_1_2(nativeEvent.nativeEvent.layout.height);
          }
        },
        size: 20,
        numOptions: length
      };
      obj4 = { style: obj7, color: tmp2.style.color };
      obj7 = { width: 20, height: 20 };
      length = Object.keys(memo).length;
      tmp4 = first(closure_2[8]);
      const merged = Object.assign(closure_1_3.icon);
      ({ style: obj2.style, status: obj2.status } = tmp2);
      return closure_2_9(style, obj, index);
    });
  }, items1);
  obj = accountStanding(504);
  const items2 = [UserStore];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores) {
    let obj2 = height(1397);
    userAvatarSource = obj2.getUserAvatarSource(stateFromStores);
  } else {
    userAvatarSource = height(8274);
  }
  const style = tmp13.style;
  let obj3 = { style: items3, children: items4 };
  items3 = [tmp4.container];
  let obj4 = { style: tmp4.avatarBackground, children: closure_9(Avatar, obj5) };
  ({ title, description } = memo[accountStanding.state]);
  obj5 = { source: userAvatarSource, size: accountStanding(1177).AvatarSizes.XXLARGE, "aria-label": str };
  Avatar = tmp7(1177).Avatar;
  str = undefined;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  items4 = [closure_9(style, obj4), ];
  let obj6 = { style: tmp4.body, children: items6 };
  let obj7 = { style: tmp4.bodyText, children: items5 };
  const obj8 = { variant: "heading-lg/medium", color: "text-default", style: { textAlign: "center" }, children: intl.format(title, obj9) };
  const Text = tmp7(4832).Text;
  intl = tmp7(1115).intl;
  obj9 = {
    hook(children, arg1) {
      obj = { style, variant: "heading-lg/bold", children };
      return React4(Text_Text.Text, obj, arg1);
    }
  };
  items5 = [closure_9(Text, obj8), closure_9(accountStanding(4832).Text, { variant: "text-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: description })];
  items6 = [closure_10(style, obj7), ];
  const obj10 = { style: items7, children: items8 };
  items7 = [tmp4.health, { height }];
  items8 = [, ];
  const obj11 = { style: tmp4.line };
  items8[0] = closure_9(style, obj11);
  items8[1] = memo1;
  items6[1] = closure_10(style, obj10);
  items4[1] = closure_10(style, obj6);
  return closure_10(style, obj3);
};
