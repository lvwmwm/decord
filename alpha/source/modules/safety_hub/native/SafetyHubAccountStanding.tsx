// Module ID: 16591
// Function ID: 16592
// Name: SafetyHubAccountStanding
// Dependencies: [32, 19, 17, 1384, 7986, 7962, 21, 7963, 16592, 5009, 575, 1114, 16584, 7334, 7080, 11742, 7086, 7100, 504, 1410, 9485, 1188, 5619, 2]
// Exports: default

// Module 16591 (SafetyHubAccountStanding)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7080 */;
import CircleXIcon from "CircleXIcon" /* 7086 */;
import AssetRegistryDefault from "AssetRegistry" /* 7100 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7334 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7962 */;
import SafetyHubModels from "SafetyHubModels" /* 7963 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11742 */;
import SafetyHubAccountStandingLabels from "SafetyHubAccountStandingLabels" /* 16584 */;
import SafetyHubAccountStandingSubwayMarker from "SafetyHubAccountStandingSubwayMarker" /* 16592 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import SafetyHubStore from "SafetyHubStore" /* 7986 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
    let obj2 = height(1410);
    userAvatarSource = obj2.getUserAvatarSource(stateFromStores);
  } else {
    userAvatarSource = height(9485);
  }
  const style = tmp13.style;
  let obj3 = { style: tmp4.container, children: items3 };
  let obj4 = { style: tmp4.avatarBackground, children: closure_9(Avatar, obj5) };
  ({ title, description } = memo[accountStanding.state]);
  obj5 = { source: userAvatarSource, size: accountStanding(1188).AvatarSizes.XXLARGE, "aria-label": str };
  Avatar = tmp7(1188).Avatar;
  str = undefined;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  items3 = [closure_9(style, obj4), ];
  let obj6 = { style: tmp4.body, children: items5 };
  let obj7 = { style: tmp4.bodyText, children: items4 };
  const obj8 = { variant: "heading-lg/medium", color: "text-default", style: { textAlign: "center" }, children: intl.format(title, obj9) };
  const Text = tmp7(5619).Text;
  intl = tmp7(1114).intl;
  obj9 = {
    hook(children, arg1) {
      obj = { style, variant: "heading-lg/bold", children };
      return React4(Text_Text.Text, obj, arg1);
    }
  };
  items4 = [closure_9(Text, obj8), closure_9(accountStanding(5619).Text, { variant: "text-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: description })];
  items5 = [closure_10(style, obj7), ];
  const obj10 = { style: items6, children: items7 };
  items6 = [tmp4.health, { height }];
  items7 = [, ];
  const obj11 = { style: tmp4.line };
  items7[0] = closure_9(style, obj11);
  items7[1] = memo1;
  items5[1] = closure_10(style, obj10);
  items3[1] = closure_10(style, obj6);
  return closure_10(style, obj3);
};
