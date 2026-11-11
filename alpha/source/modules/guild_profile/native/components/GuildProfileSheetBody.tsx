// Module ID: 10589
// Function ID: 10590
// Name: GuildProfileSheetBody
// Dependencies: [19, 17, 8091, 10482, 21, 5243, 575, 8092, 504, 7852, 7871, 8093, 10590, 10605, 5873, 1113, 10606, 10591, 2]
// Exports: default

// Module 10589 (GuildProfileSheetBody)
import nativeDefault from "native" /* 575 */;
import GuildProfileStore2 from "GuildProfileStore" /* 8091 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 8093 */;
import GuildProfileConstants from "GuildProfileConstants" /* 10482 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const GuildProfileStore = GuildProfileStore2;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const GuildProfileFetchStatus = GuildProfileStore2.GuildProfileFetchStatus;
const INVALID_ACCESS_ERROR_CODE = GuildProfileConstants.INVALID_ACCESS_ERROR_CODE;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { loadingContainer: obj2, footerStack: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_40 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileSheetBody.tsx");

export default function GuildProfileSheetBody(guildId) {
  let banner;
  let bannerResult;
  let children;
  let disableNameNavigation;
  let fetchGuildProfile;
  let footer;
  let guildProfile;
  let intl;
  let intl2;
  let items4;
  let onClose;
  guildId = guildId.guildId;
  ({ onClose, banner } = guildId);
  fetchGuildProfile = undefined;
  let analyticsLocations;
  ({ disableNameNavigation, footer, children } = guildId);
  const tmp = closure_11();
  let obj = guildId(analyticsLocations[7]);
  const guildProfile1 = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile1);
  const fetchStatus = guildProfile1.fetchStatus;
  const items = [GuildProfileStore];
  const obj2 = guildId(analyticsLocations[8]);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildProfileStore.getErrorCode(guildId));
  const tmp7 = fetchGuildProfile(analyticsLocations[9]);
  analyticsLocations = tmp7(fetchGuildProfile(analyticsLocations[10]).GUILD_PROFILE).analyticsLocations;
  const items1 = [guildId, analyticsLocations];
  const effect = react.useEffect(() => {
    const obj = GuildProfileActionCreators;
    const result = obj.trackGuildProfileViewed(guildId, analyticsLocations);
  }, items1);
  const items2 = [fetchGuildProfile];
  const items3 = [fetchGuildProfile];
  const callback = react.useCallback(() => {
    fetchGuildProfile(true);
  }, items2);
  const effect1 = react.useEffect(() => {
    fetchGuildProfile();
  }, items3);
  if (fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
    let footerResult;
    let tmp11Result;
    if (fetchStatus !== GuildProfileFetchStatus.FETCHING) {
      if (null == guildProfile) {
        let tmp18Result;
        let tmp20;
        let tmp20Result;
        if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
          tmp18Result = tmp18(tmp6(tmp3[12]), {});
          tmp20 = tmp18;
        } else {
          const obj3 = { onRetry: callback };
          tmp18Result = tmp18(tmp6(tmp3[13]), obj3);
          tmp20 = tmp18;
        }
        if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
          const obj4 = { style: tmp.footerStack, children: items4 };
          const obj5 = { size: "lg", text: intl2.string(guildId(analyticsLocations[15]).t.cpT0Cq), onPress: onClose };
          const Button2 = tmp2(tmp3[14]).Button;
          intl2 = tmp2(tmp3[15]).intl;
          items4 = [tmp20(Button2, obj5), ];
          const obj6 = { guildId };
          items4[1] = tmp20(fetchGuildProfile(analyticsLocations[16]), obj6);
          tmp20Result = closure_10(closure_5, obj4);
        } else {
          const obj7 = { size: "lg", text: intl.string(guildId(analyticsLocations[15]).t.cpT0Cq), onPress: onClose };
          const Button = tmp2(tmp3[14]).Button;
          intl = tmp2(tmp3[15]).intl;
          tmp20Result = tmp20(Button, obj7);
        }
        footerResult = tmp20Result;
        tmp11Result = tmp18Result;
      } else {
        const obj8 = { guildProfile, banner: bannerResult, disableNameNavigation };
        bannerResult = undefined;
        const tmp11 = closure_9;
        const tmp6Result = fetchGuildProfile(analyticsLocations[17]);
        if (banner != null) {
          bannerResult = banner(guildProfile);
        }
        tmp11Result = tmp11(tmp6Result, obj8);
        footerResult = footer(guildProfile);
      }
    }
    return children(tmp11Result, footerResult);
  }
  const obj9 = { style: tmp.loadingContainer, children: closure_9(closure_4, { animating: true, size: "large" }) };
  tmp11Result = closure_9(closure_5, obj9);
};
