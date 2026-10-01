// Module ID: 9206
// Function ID: 9207
// Name: GuildProfileActionSheet
// Dependencies: [19, 17, 9028, 9207, 1074, 21, 4836, 576, 4767, 9029, 504, 4531, 7615, 6583, 6603, 9030, 9208, 5281, 1115, 9222, 9209, 9223, 672, 6571, 5293, 6045, 6575, 2]
// Exports: default

// Module 9206 (GuildProfileActionSheet)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import Constants from "Constants" /* 1074 */;
import GuildProfileStore2 from "GuildProfileStore" /* 9028 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9030 */;
import GuildProfileConstants from "GuildProfileConstants" /* 9207 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
let obj = { loadingContainer: { paddingTop: 40 }, footerContainer: { paddingHorizontal: 16, paddingVertical: 40 }, scrollView: obj2 };
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
  let items5;
  let obj13;
  let obj16;
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
    let tmp19;
    let tmp18;
    let tmp20;
    if (fetchStatus !== GuildProfileFetchStatus.FETCHING) {
      if (null == guildProfile) {
        if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
          tmp19 = closure_10(tmp2(tmp3[16]), {});
          const obj7 = { size: "lg", text: intl2.string(guildId(analyticsLocations[18]).t.cpT0Cq), onPress: bottomSheetClose };
          const Button2 = tmp5(tmp3[17]).Button;
          intl2 = tmp5(tmp3[18]).intl;
          tmp18 = closure_10(Button2, obj7);
          tmp20 = closure_10;
        }
      }
      if (null == guildProfile) {
        const obj8 = { onRetry: callback };
        tmp19 = closure_10(tmp2(tmp3[19]), obj8);
        const obj9 = { size: "lg", text: intl.string(guildId(analyticsLocations[18]).t.cpT0Cq), onPress: bottomSheetClose };
        const Button = tmp5(tmp3[17]).Button;
        intl = tmp5(tmp3[18]).intl;
        tmp18 = closure_10(Button, obj9);
        tmp20 = closure_10;
      } else {
        const obj10 = { guildProfile };
        const obj11 = { profile: guildProfile, context, inviteKey };
        const tmp17 = closure_10(fetchGuildProfile(analyticsLocations[20]), obj10);
        tmp18 = closure_10(tmp2(tmp3[21]), obj11);
        tmp19 = tmp17;
        tmp20 = closure_10;
      }
    }
    const items4 = [token1];
    const memo = obj6.useMemo(() => {
      const items = [, ];
      const obj = _modDef672(token1);
      const alphaResult = obj.alpha(0);
      items[0] = alphaResult.hex();
      items[1] = token1;
      return items;
    }, items4);
    const obj12 = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, footer: tmp20(fetchGuildProfile(analyticsLocations[24]), obj13), children: items5 };
    BottomSheet = tmp5(tmp3[23]).BottomSheet;
    obj13 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: tmp.footerContainer, colors: memo, children: tmp18 };
    const obj14 = { enableFooterMarginAdjustment: true, style: tmp.scrollView, children: tmp19 };
    items5 = [tmp20(guildId(analyticsLocations[25]).BottomSheetScrollView, obj14), ];
    const obj15 = { variant: "floating", tabStyle: obj16, onPress: bottomSheetClose };
    obj16 = { backgroundColor: token };
    items5[1] = tmp20(guildId(analyticsLocations[26]).ActionSheetHeaderBar, obj15);
    return closure_11(BottomSheet, obj12);
  }
  const obj17 = { style: tmp.loadingContainer, children: closure_10(closure_5, { animating: true, size: "large" }) };
  tmp19 = closure_10(closure_4, obj17);
  tmp18 = null;
  tmp20 = closure_10;
};
