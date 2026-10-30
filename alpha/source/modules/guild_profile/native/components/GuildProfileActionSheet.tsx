// Module ID: 9277
// Function ID: 9278
// Name: GuildProfileActionSheet
// Dependencies: [19, 17, 9035, 9278, 1072, 21, 5009, 575, 5248, 9036, 504, 5591, 8733, 7320, 7345, 9037, 9279, 5629, 1114, 14688, 14694, 9280, 14695, 671, 5267, 5582, 5270, 5590, 2]
// Exports: default

// Module 9277 (GuildProfileActionSheet)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1072 */;
import GuildProfileStore2 from "GuildProfileStore" /* 9035 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9037 */;
import GuildProfileConstants from "GuildProfileConstants" /* 9278 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const GuildProfileStore = GuildProfileStore2;
let BottomSheet;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let unpackModuleId;
({ View: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
const GuildProfileFetchStatus = GuildProfileStore2.GuildProfileFetchStatus;
const INVALID_ACCESS_ERROR_CODE = GuildProfileConstants.INVALID_ACCESS_ERROR_CODE;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { loadingContainer: { paddingTop: 40 }, footerContainer: { paddingHorizontal: 16, paddingVertical: 40 }, footerStack: { gap: 8 }, scrollView: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default function GuildProfileActionSheet(guildId) {
  let bottomSheetClose;
  let bottomSheetRef;
  let context;
  let fetchGuildProfile;
  let guildProfile;
  let intl;
  let intl2;
  let inviteKey;
  let items4;
  let items5;
  let items7;
  let obj17;
  let obj20;
  guildId = guildId.guildId;
  fetchGuildProfile = undefined;
  let analyticsLocations;
  ({ context, inviteKey } = guildId);
  const tmp = closure_12();
  const tmp4 = fetchGuildProfile(analyticsLocations[8])();
  let obj = guildId(analyticsLocations[9]);
  const guildProfile1 = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile1);
  const fetchStatus = guildProfile1.fetchStatus;
  let items = [GuildProfileStore];
  const obj2 = guildId(analyticsLocations[10]);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildProfileStore.getErrorCode(guildId));
  const obj3 = guildId(analyticsLocations[11]);
  const token = obj3.useToken(fetchGuildProfile(analyticsLocations[7]).colors.INTERACTIVE_TEXT_HOVER, tmp4);
  const obj4 = guildId(analyticsLocations[12]);
  const bottomSheetRef1 = obj4.useBottomSheetRef();
  ({ bottomSheetClose, bottomSheetRef } = bottomSheetRef1);
  const tmp10 = fetchGuildProfile(analyticsLocations[13]);
  analyticsLocations = tmp10(fetchGuildProfile(analyticsLocations[14]).GUILD_PROFILE).analyticsLocations;
  const obj5 = guildId(analyticsLocations[11]);
  const token1 = obj5.useToken(fetchGuildProfile(analyticsLocations[7]).colors.BACKGROUND_BASE_LOW);
  const items1 = [guildId, analyticsLocations];
  const effect = token1.useEffect(() => {
    const obj = GuildProfileActionCreators;
    const result = obj.trackGuildProfileViewed(guildId, analyticsLocations);
  }, items1);
  const items2 = [fetchGuildProfile];
  const items3 = [fetchGuildProfile];
  const callback = token1.useCallback(() => {
    fetchGuildProfile(true);
  }, items2);
  const effect1 = token1.useEffect(() => {
    fetchGuildProfile();
  }, items3);
  const obj6 = token1;
  if (fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
    let tmp18;
    let tmp30Result;
    let tmp19;
    if (fetchStatus !== GuildProfileFetchStatus.FETCHING) {
      if (null == guildProfile) {
        if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
          tmp18 = closure_10(tmp2(tmp3[16]), {});
          const obj7 = { style: tmp.footerStack, children: items4 };
          const obj8 = { size: "lg", text: intl2.string(guildId(analyticsLocations[18]).t.cpT0Cq), onPress: bottomSheetClose };
          const Button2 = tmp5(tmp3[17]).Button;
          intl2 = tmp5(tmp3[18]).intl;
          items4 = [closure_10(Button2, obj8), ];
          const obj9 = { guildId };
          items4[1] = closure_10(fetchGuildProfile(analyticsLocations[19]), obj9);
          tmp30Result = closure_11(closure_4, obj7);
          tmp19 = closure_10;
        }
      }
      if (null == guildProfile) {
        const obj10 = { onRetry: callback };
        tmp18 = closure_10(tmp2(tmp3[20]), obj10);
        const obj11 = { size: "lg", text: intl.string(guildId(analyticsLocations[18]).t.cpT0Cq), onPress: bottomSheetClose };
        const Button = tmp5(tmp3[17]).Button;
        intl = tmp5(tmp3[18]).intl;
        tmp30Result = closure_10(Button, obj11);
        tmp19 = closure_10;
      } else {
        const obj13 = { style: tmp.footerStack, children: items5 };
        items5 = [, ];
        const obj12 = { guildProfile };
        const obj14 = { profile: guildProfile, context, inviteKey };
        const tmp29 = closure_10(fetchGuildProfile(analyticsLocations[21]), obj12);
        items5[0] = closure_10(fetchGuildProfile(analyticsLocations[22]), obj14);
        let tmp28Result = null != guildProfile.tag;
        const tmp30 = closure_11;
        const tmp31 = closure_4;
        if (tmp28Result) {
          const obj15 = { guildId };
          tmp28Result = tmp28(tmp2(tmp3[19]), obj15);
        }
        items5[1] = tmp28Result;
        tmp30Result = tmp30(tmp31, obj13);
        tmp18 = tmp29;
        tmp19 = tmp28;
      }
    }
    const items6 = [token1];
    const memo = obj6.useMemo(() => {
      const items = [, ];
      const obj = _modDef671(token1);
      const alphaResult = obj.alpha(0);
      items[0] = alphaResult.hex();
      items[1] = token1;
      return items;
    }, items6);
    const obj16 = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, footer: tmp19(fetchGuildProfile(analyticsLocations[25]), obj17), children: items7 };
    BottomSheet = tmp5(tmp3[24]).BottomSheet;
    obj17 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: tmp.footerContainer, colors: memo, children: tmp30Result };
    const obj18 = { enableFooterMarginAdjustment: true, style: tmp.scrollView, children: tmp18 };
    items7 = [tmp19(guildId(analyticsLocations[26]).BottomSheetScrollView, obj18), ];
    const obj19 = { variant: "floating", tabStyle: obj20, onPress: bottomSheetClose };
    obj20 = { backgroundColor: token };
    items7[1] = tmp19(guildId(analyticsLocations[27]).ActionSheetHeaderBar, obj19);
    return closure_11(BottomSheet, obj16);
  }
  const obj21 = { style: tmp.loadingContainer, children: closure_10(closure_5, { animating: true, size: "large" }) };
  tmp18 = closure_10(closure_4, obj21);
  tmp30Result = null;
  tmp19 = closure_10;
};
