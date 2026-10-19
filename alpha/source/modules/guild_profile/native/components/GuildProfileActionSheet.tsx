// Module ID: 9131
// Function ID: 9132
// Name: GuildProfileActionSheet
// Dependencies: [19, 17, 8890, 9132, 1087, 21, 5191, 587, 558, 576, 5127, 8891, 504, 4913, 8568, 7130, 7155, 8892, 9133, 1128, 5479, 13947, 13953, 9134, 13954, 683, 5491, 6584, 7122, 7118, 2]

// Module 9131 (GuildProfileActionSheet)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import Constants from "Constants" /* 1087 */;
import GuildProfileStore2 from "GuildProfileStore" /* 8890 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 8892 */;
import GuildProfileConstants from "GuildProfileConstants" /* 9132 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileActionSheet(guildId) {
  let analyticsLocations;
  let bottomSheetClose;
  let bottomSheetRef;
  let context;
  let fetchGuildProfile;
  let first;
  let guildProfile;
  let inviteKey;
  let tmp10;
  let obj = guildId(analyticsLocations[9]);
  const cResult = obj.c(66);
  guildId = guildId.guildId;
  ({ context, inviteKey } = guildId);
  const tmp4 = closure_12();
  const tmp6 = fetchGuildProfile(analyticsLocations[10])();
  const obj2 = guildId(analyticsLocations[11]);
  const guildProfile1 = obj2.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile1);
  const fetchStatus = guildProfile1.fetchStatus;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildProfileStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function y() {
      return GuildProfileStore.getErrorCode(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = guildId(analyticsLocations[12]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
  const tmpResult4 = guildId(analyticsLocations[13]);
  const token = tmpResult4.useToken(tmp5(tmp2[7]).colors.INTERACTIVE_TEXT_HOVER, tmp6);
  const tmpResult5 = guildId(analyticsLocations[14]);
  const bottomSheetRef1 = tmpResult5.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const tmp5Result = fetchGuildProfile(analyticsLocations[15]);
  analyticsLocations = tmp5Result(tmp5(tmp2[16]).GUILD_PROFILE).analyticsLocations;
  const tmpResult6 = guildId(analyticsLocations[13]);
  const token1 = tmpResult6.useToken(tmp5(tmp2[7]).colors.BACKGROUND_BASE_LOW);
  if (cResult[3] === analyticsLocations) {
    let tmp16;
    let tmp17;
    let tmp21;
    let tmp20;
    let tmp25;
    if (cResult[4] === guildId) {
      tmp16 = cResult[5];
      tmp17 = cResult[6];
    }
    const effect = react.useEffect(tmp16, tmp17);
    const obj7 = react;
    if (cResult[7] !== fetchGuildProfile) {
      class V {
        constructor() {
          fetchGuildProfile(true);
        }
      }
      cResult[7] = fetchGuildProfile;
      cResult[8] = V;
    } else {
      class V {
        constructor() {
          fetchGuildProfile(true);
        }
      }
    }
    if (cResult[9] !== fetchGuildProfile) {
      class H {
        constructor() {
          fetchGuildProfile();
        }
      }
      const items1 = [fetchGuildProfile];
      cResult[9] = fetchGuildProfile;
      cResult[10] = H;
      cResult[11] = items1;
      tmp21 = items1;
      tmp20 = H;
    } else {
      class H {
        constructor() {
          fetchGuildProfile();
        }
      }
      tmp21 = cResult[11];
    }
    const effect1 = obj7.useEffect(tmp20, tmp21);
    if (fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
      class H {
        constructor() {
          fetchGuildProfile();
        }
      }
      if (cResult[43] !== token1) {
        class H {
          constructor() {
            fetchGuildProfile();
          }
        }
        const alphaResult = obj9.alpha(0);
        cResult[43] = token1;
        cResult[44] = alphaResult.hex();
        const hexResult = alphaResult.hex();
      } else {
        class H {
          constructor() {
            fetchGuildProfile();
          }
        }
      }
      if (cResult[45] === token1) {
        let tmp34;
        class H {
          constructor() {
            fetchGuildProfile();
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              fetchGuildProfile();
            }
          }
          cResult[48] = tmp35;
          tmp34 = tmp35;
        } else {
          class H {
            constructor() {
              fetchGuildProfile();
            }
          }
        }
        if (cResult[49] === tmp33) {
          class H {
            constructor() {
              fetchGuildProfile();
            }
          }
        }
        const obj3 = { start: VerticalGradient.START, end: tmp34, style: tmp4.footerContainer, colors: tmp33, children: tmp24 };
        cResult[49] = tmp33;
        cResult[50] = tmp24;
        cResult[51] = tmp4.footerContainer;
        cResult[52] = closure_10(fetchGuildProfile(analyticsLocations[26]), obj3);
        const tmp39 = closure_10(fetchGuildProfile(analyticsLocations[26]), obj3);
      }
      const items2 = [tmp31, token1];
      cResult[45] = token1;
      cResult[46] = tmp31;
      cResult[47] = items2;
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          fetchGuildProfile();
        }
      }
      const tmp27 = closure_10(closure_5, { animating: true, size: "large" });
      cResult[12] = tmp27;
      tmp25 = tmp27;
    } else {
      class H {
        constructor() {
          fetchGuildProfile();
        }
      }
    }
    if (cResult[13] !== tmp4.loadingContainer) {
      class H {
        constructor() {
          fetchGuildProfile();
        }
      }
      const obj4 = { style: tmp4.loadingContainer, children: tmp25 };
      const tmp30 = closure_10(closure_4, obj4);
      cResult[13] = tmp4.loadingContainer;
      cResult[14] = tmp30;
    } else {
      class H {
        constructor() {
          fetchGuildProfile();
        }
      }
    }
  }
  class B {
    constructor() {
      const obj = GuildProfileActionCreators;
      const result = obj.trackGuildProfileViewed(guildId, analyticsLocations);
    }
  }
  const items3 = [guildId, analyticsLocations];
  cResult[3] = analyticsLocations;
  cResult[4] = guildId;
  cResult[5] = B;
  cResult[6] = items3;
  tmp17 = items3;
  tmp16 = B;
}) : (function GuildProfileActionSheet(guildId) {
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
  const tmp4 = fetchGuildProfile(analyticsLocations[10])();
  let obj = guildId(analyticsLocations[11]);
  const guildProfile1 = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile1);
  const fetchStatus = guildProfile1.fetchStatus;
  let items = [GuildProfileStore];
  const obj2 = guildId(analyticsLocations[12]);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildProfileStore.getErrorCode(guildId));
  const obj3 = guildId(analyticsLocations[13]);
  const token = obj3.useToken(fetchGuildProfile(analyticsLocations[7]).colors.INTERACTIVE_TEXT_HOVER, tmp4);
  const obj4 = guildId(analyticsLocations[14]);
  const bottomSheetRef1 = obj4.useBottomSheetRef();
  ({ bottomSheetClose, bottomSheetRef } = bottomSheetRef1);
  const tmp10 = fetchGuildProfile(analyticsLocations[15]);
  analyticsLocations = tmp10(fetchGuildProfile(analyticsLocations[16]).GUILD_PROFILE).analyticsLocations;
  const obj5 = guildId(analyticsLocations[13]);
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
          tmp18 = closure_10(tmp2(tmp3[18]), {});
          const obj7 = { style: tmp.footerStack, children: items4 };
          const obj8 = { size: "lg", text: intl2.string(guildId(analyticsLocations[19]).t.cpT0Cq), onPress: bottomSheetClose };
          const Button2 = tmp5(tmp3[20]).Button;
          intl2 = tmp5(tmp3[19]).intl;
          items4 = [closure_10(Button2, obj8), ];
          const obj9 = { guildId };
          items4[1] = closure_10(fetchGuildProfile(analyticsLocations[21]), obj9);
          tmp30Result = closure_11(closure_4, obj7);
          tmp19 = closure_10;
        }
      }
      if (null == guildProfile) {
        const obj10 = { onRetry: callback };
        tmp18 = closure_10(tmp2(tmp3[22]), obj10);
        const obj11 = { size: "lg", text: intl.string(guildId(analyticsLocations[19]).t.cpT0Cq), onPress: bottomSheetClose };
        const Button = tmp5(tmp3[20]).Button;
        intl = tmp5(tmp3[19]).intl;
        tmp30Result = closure_10(Button, obj11);
        tmp19 = closure_10;
      } else {
        const obj13 = { style: tmp.footerStack, children: items5 };
        items5 = [, ];
        const obj12 = { guildProfile };
        const obj14 = { profile: guildProfile, context, inviteKey };
        const tmp29 = closure_10(fetchGuildProfile(analyticsLocations[23]), obj12);
        items5[0] = closure_10(fetchGuildProfile(analyticsLocations[24]), obj14);
        let tmp28Result = null != guildProfile.tag;
        const tmp30 = closure_11;
        const tmp31 = closure_4;
        if (tmp28Result) {
          const obj15 = { guildId };
          tmp28Result = tmp28(tmp2(tmp3[21]), obj15);
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
      const obj = _modDef683(token1);
      const alphaResult = obj.alpha(0);
      items[0] = alphaResult.hex();
      items[1] = token1;
      return items;
    }, items6);
    const obj16 = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, footer: tmp19(fetchGuildProfile(analyticsLocations[26]), obj17), children: items7 };
    BottomSheet = tmp5(tmp3[29]).BottomSheet;
    obj17 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: tmp.footerContainer, colors: memo, children: tmp30Result };
    const obj18 = { enableFooterMarginAdjustment: true, style: tmp.scrollView, children: tmp18 };
    items7 = [tmp19(guildId(analyticsLocations[27]).BottomSheetScrollView, obj18), ];
    const obj19 = { variant: "floating", tabStyle: obj20, onPress: bottomSheetClose };
    obj20 = { backgroundColor: token };
    items7[1] = tmp19(guildId(analyticsLocations[28]).ActionSheetHeaderBar, obj19);
    return closure_11(BottomSheet, obj16);
  }
  const obj21 = { style: tmp.loadingContainer, children: closure_10(closure_5, { animating: true, size: "large" }) };
  tmp18 = closure_10(closure_4, obj21);
  tmp30Result = null;
  tmp19 = closure_10;
});
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default tmp4;
