// Module ID: 6581
// Function ID: 6582
// Name: GuildOnboardingConnectionPrompt
// Dependencies: [19, 17, 5885, 6529, 5594, 2073, 6522, 6523, 6519, 1086, 21, 4837, 5991, 588, 558, 576, 1491, 1619, 504, 6528, 1253, 5017, 6521, 4833, 1127, 6546, 6582, 6604, 5282, 2]

// Module 6581 (GuildOnboardingConnectionPrompt)
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5017 */;
import NavigatorConstants from "NavigatorConstants" /* 5991 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 6519 */;
import GuildOnboardingPromptsActionCreators from "GuildOnboardingPromptsActionCreators" /* 6521 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6523 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6528 */;
import ConnectionCardDefault from "ConnectionCard" /* 6582 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6604 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5885 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6529 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5594 */;
import GuildStore from "GuildStore" /* 2073 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6522 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId, navigation, ref;

let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const OnboardingConnectionType = GuildOnboardingPromptsConstants.OnboardingConnectionType;
let closure_12 = GuildOnboardingConstants.GuildOnboardingModalStates;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1 }, container: obj2, scrollContainer: obj3, header: obj4, title: obj5, description: obj6, connectionsList: obj7, footer: obj8, footerContent: obj9 };
obj2 = { display: "flex", flex: 1, flexGrow: 1, marginTop: NavigatorConstants.NAV_BAR_HEIGHT, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj4 = { marginBottom: nativeDefault.space.PX_24 };
obj5 = { marginBottom: nativeDefault.space.PX_8 };
obj6 = { marginTop: nativeDefault.space.PX_8 };
obj7 = { marginTop: nativeDefault.space.PX_8 };
obj8 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: nativeDefault.space.PX_8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj9 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_16 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let isLastStep;
  let stateFromStores3;
  let stateFromStores4;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp = guildId;
  const tmp2 = isLastStep;
  let obj = guildId(isLastStep[15]);
  const cResult = obj.c(98);
  guildId = guildId.guildId;
  const onComplete = guildId.onComplete;
  isLastStep = guildId.isLastStep;
  const tmp4 = closure_16();
  let obj2 = guildId(isLastStep[16]);
  navigation = obj2.useNavigation();
  const sum = 64 + onComplete(isLastStep[17])().bottom;
  const sum1 = sum + onComplete(isLastStep[13]).space.PX_8;
  ref = navigation.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = stateFromStores4;
    const items = [stateFromStores4];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function x() {
      return GuildOnboardingPromptsStore.getOnboardingConnections(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  let tmpResult = tmp(tmp2[18]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp13 = stateFromStores4;
    const items1 = [stateFromStores4];
    cResult[3] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    class L {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
      }
    }
    cResult[4] = guildId;
    cResult[5] = L;
    tmp14 = L;
  } else {
    class L {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
      }
    }
  }
  const tmpResult6 = tmp(tmp2[18]);
  const stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp12, tmp14);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
      }
    }
    const items2 = [stateFromStores3];
    cResult[6] = items2;
    tmp16 = items2;
  } else {
    class L {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
      }
    }
  }
  if (cResult[7] !== guildId) {
    class L {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
      }
    }
    cResult[7] = guildId;
    cResult[8] = tmp18;
    tmp17 = tmp18;
  } else {
    class L {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
      }
    }
  }
  const tmpResult7 = tmp(tmp2[18]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp16, tmp17);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
      }
    }
    const items3 = [stateFromStoresArray];
    cResult[9] = items3;
    tmp20 = items3;
  } else {
    class L {
      constructor() {
        return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
      }
    }
  }
  if (cResult[10] !== guildId) {
    class U {
      constructor() {
        return MemberVerificationFormStore.getRulesPrompt(guildId);
      }
    }
    cResult[10] = guildId;
    cResult[11] = U;
    tmp21 = U;
  } else {
    class U {
      constructor() {
        return MemberVerificationFormStore.getRulesPrompt(guildId);
      }
    }
  }
  const tmpResult8 = tmp(tmp2[18]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp20, tmp21);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        return MemberVerificationFormStore.getRulesPrompt(guildId);
      }
    }
    const items4 = [stateFromStores4];
    class M {
      constructor() {
        return stateFromStores4.isLoading();
      }
    }
    cResult[12] = M;
    cResult[13] = items4;
    tmp24 = items4;
    tmp23 = M;
  } else {
    class U {
      constructor() {
        return MemberVerificationFormStore.getRulesPrompt(guildId);
      }
    }
    tmp24 = cResult[13];
  }
  const tmpResult9 = tmp(tmp2[18]);
  stateFromStores3 = tmpResult9.useStateFromStores(tmp24, tmp23);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        return MemberVerificationFormStore.getRulesPrompt(guildId);
      }
    }
    const items5 = [stateFromStores1, ];
    class M {
      constructor() {
        return stateFromStores4.isLoading();
      }
    }
    items5[1] = stateFromStores2;
    cResult[14] = items5;
    tmp26 = items5;
  } else {
    class U {
      constructor() {
        return MemberVerificationFormStore.getRulesPrompt(guildId);
      }
    }
  }
  if (cResult[15] !== stateFromStores) {
    class H {
      constructor() {
        const iter = stateFromStores[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let connection_type = nextResult.connection_type;
          if (OnboardingConnectionType.APPLICATION === connection_type) {
            if (null != AuthorizedAppsStore.getNewestTokenForApplication(tmp3.application_id)) {
              iter.return();
              let flag2 = true;
              return true;
            }
          } else if (tmp4.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
            if (null != tmp3.provider_id) {
              let account = ConnectedAccountsStore.getAccount(null, tmp3.provider_id);
              if (null != account) {
                if (!tmp9.revoked) {
                  iter.return();
                  let flag = true;
                  return true;
                }
              }
            }
          }
          continue;
        }
        return false;
      }
    }
    const items6 = [stateFromStores];
    class M {
      constructor() {
        return stateFromStores4.isLoading();
      }
    }
    cResult[15] = stateFromStores;
    cResult[16] = H;
    cResult[17] = items6;
    tmp28 = items6;
    tmp27 = H;
  } else {
    class H {
      constructor() {
        const iter = stateFromStores[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let connection_type = nextResult.connection_type;
          if (OnboardingConnectionType.APPLICATION === connection_type) {
            if (null != AuthorizedAppsStore.getNewestTokenForApplication(tmp3.application_id)) {
              iter.return();
              let flag2 = true;
              return true;
            }
          } else if (tmp4.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
            if (null != tmp3.provider_id) {
              let account = ConnectedAccountsStore.getAccount(null, tmp3.provider_id);
              if (null != account) {
                if (!tmp9.revoked) {
                  iter.return();
                  let flag = true;
                  return true;
                }
              }
            }
          }
          continue;
        }
        return false;
      }
    }
    tmp28 = cResult[17];
  }
  const tmpResult10 = tmp(tmp2[18]);
  stateFromStores4 = tmpResult10.useStateFromStores(tmp26, tmp27, tmp28);
  if (cResult[18] === guildId) {
    class H {
      constructor() {
        const iter = stateFromStores[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let connection_type = nextResult.connection_type;
          if (OnboardingConnectionType.APPLICATION === connection_type) {
            if (null != AuthorizedAppsStore.getNewestTokenForApplication(tmp3.application_id)) {
              iter.return();
              let flag2 = true;
              return true;
            }
          } else if (tmp4.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
            if (null != tmp3.provider_id) {
              let account = ConnectedAccountsStore.getAccount(null, tmp3.provider_id);
              if (null != account) {
                if (!tmp9.revoked) {
                  iter.return();
                  let flag = true;
                  return true;
                }
              }
            }
          }
          continue;
        }
        return false;
      }
    }
  }
  class Z {
    constructor() {
      const tmp = stateFromStores3;
      if (!tmp) {
        if (0 !== stateFromStores.length) {
          if (!ref.current) {
            const obj = GuildOnboardingUtils;
            const providerConnectionState = obj.getProviderConnectionState(tmp2);
            const obj2 = GuildOnboardingUtils;
            const applicationConnectionState = obj2.getApplicationConnectionState(tmp2);
            const obj5 = { step: GuildOnboardingPromptsActionCreators.CONNECTIONS_STEP, required: false };
            const track = AnalyticsUtilsDefault.track;
            const GUILD_ONBOARDING_STEP_VIEWED = AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED;
            AnalyticsUtilsDefault;
            const obj4 = AppAnalyticsUtils;
            const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
            ({ connected: obj3.provider_connections_connected, notConnected: obj3.provider_connections_not_connected } = providerConnectionState);
            ({ connected: obj3.application_connections_connected, notConnected: obj3.application_connections_not_connected } = applicationConnectionState);
            track(GUILD_ONBOARDING_STEP_VIEWED, obj5);
            tmp14.current = true;
          }
        }
      }
    }
  }
  const items7 = [guildId, stateFromStores3, stateFromStores];
  cResult[18] = guildId;
  cResult[19] = stateFromStores3;
  cResult[20] = stateFromStores;
  cResult[21] = Z;
  cResult[22] = items7;
}) : ((guildId) => {
  let Button;
  let Text3;
  let combined;
  let intl;
  let intl2;
  let intl4;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items9;
  let obj10;
  let obj20;
  let tmp19;
  guildId = guildId.guildId;
  const onComplete = guildId.onComplete;
  const isLastStep = guildId.isLastStep;
  let stateFromStores3;
  let stateFromStores4;
  let tmp = closure_16();
  const tmp2 = guildId;
  let tmp3 = isLastStep;
  let obj = guildId(isLastStep[16]);
  navigation = obj.useNavigation();
  const bottom = onComplete(isLastStep[17])().bottom;
  const sum = 64 + bottom;
  const sum1 = sum + onComplete(isLastStep[13]).space.PX_8;
  ref = navigation.useRef(false);
  let obj2 = guildId(isLastStep[18]);
  const items = [stateFromStores4];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId));
  const obj3 = guildId(isLastStep[18]);
  const items1 = [stateFromStores4];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId));
  let obj4 = guildId(isLastStep[18]);
  const items2 = [stateFromStores3];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let obj5 = guildId(isLastStep[18]);
  const items3 = [stateFromStoresArray];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  const items4 = [stateFromStores4];
  const obj6 = guildId(isLastStep[18]);
  stateFromStores3 = obj6.useStateFromStores(items4, () => stateFromStores4.isLoading());
  const items5 = [stateFromStores1, stateFromStores2];
  const items6 = [stateFromStores];
  const obj7 = guildId(isLastStep[18]);
  stateFromStores4 = obj7.useStateFromStores(items5, () => {
    const iter = stateFromStores[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let connection_type = nextResult.connection_type;
      if (OnboardingConnectionType.APPLICATION === connection_type) {
        if (null != AuthorizedAppsStore.getNewestTokenForApplication(tmp3.application_id)) {
          iter.return();
          let flag2 = true;
          return true;
        }
      } else if (tmp4.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
        if (null != tmp3.provider_id) {
          let account = ConnectedAccountsStore.getAccount(null, tmp3.provider_id);
          if (null != account) {
            if (!tmp10.revoked) {
              iter.return();
              let flag = true;
              return true;
            }
          }
        }
      } else {
        let connection_type2 = tmp3.connection_type;
      }
      continue;
    }
    return false;
  }, items6);
  const items7 = [guildId, stateFromStores3, stateFromStores];
  const effect = navigation.useEffect(() => {
    const tmp = stateFromStores3;
    if (!tmp) {
      if (0 !== stateFromStores.length) {
        if (!ref.current) {
          const obj = GuildOnboardingUtils;
          const providerConnectionState = obj.getProviderConnectionState(tmp2);
          const obj2 = GuildOnboardingUtils;
          const applicationConnectionState = obj2.getApplicationConnectionState(tmp2);
          const obj5 = { step: GuildOnboardingPromptsActionCreators.CONNECTIONS_STEP, required: false };
          const track = AnalyticsUtilsDefault.track;
          const GUILD_ONBOARDING_STEP_VIEWED = AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED;
          AnalyticsUtilsDefault;
          const obj4 = AppAnalyticsUtils;
          const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
          ({ connected: obj3.provider_connections_connected, notConnected: obj3.provider_connections_not_connected } = providerConnectionState);
          ({ connected: obj3.application_connections_connected, notConnected: obj3.application_connections_not_connected } = applicationConnectionState);
          track(GUILD_ONBOARDING_STEP_VIEWED, obj5);
          tmp14.current = true;
        }
      }
    }
  }, items7);
  const items8 = [stateFromStoresArray.length, stateFromStores1, stateFromStores2, navigation, onComplete, stateFromStores, stateFromStores4, isLastStep, guildId];
  let tmp13 = closure_14;
  const callback = navigation.useCallback(() => {
    const obj = GuildOnboardingUtils;
    const providerConnectionState = obj.getProviderConnectionState(stateFromStores);
    const obj2 = GuildOnboardingUtils;
    const applicationConnectionState = obj2.getApplicationConnectionState(stateFromStores);
    const obj5 = { step: GuildOnboardingPromptsActionCreators.CONNECTIONS_STEP, skipped: !stateFromStores4, back: false, options_selected: 0, in_onboarding: true, is_final_step: isLastStep };
    const track = AnalyticsUtilsDefault.track;
    const GUILD_ONBOARDING_STEP_COMPLETED = AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED;
    AnalyticsUtilsDefault;
    const obj4 = AppAnalyticsUtils;
    const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
    ({ connected: obj3.provider_connections_connected, notConnected: obj3.provider_connections_not_connected } = providerConnectionState);
    ({ connected: obj3.application_connections_connected, notConnected: obj3.application_connections_not_connected } = applicationConnectionState);
    track(GUILD_ONBOARDING_STEP_COMPLETED, obj5);
    if (stateFromStoresArray.length > 0) {
      navigation.push(constants.PROMPT, { currentPrompt: 0 });
    } else {
      const tmpResult = GuildOnboardingUtils;
      if (tmpResult.showRulesInOnboarding(stateFromStores1, stateFromStores2)) {
        navigation.push(constants.RULES);
      } else {
        onComplete();
      }
    }
  }, items8);
  const obj8 = { top: true, style: items9, children: null };
  items9 = [, ];
  ({ flex: arr12[0], container: arr12[1] } = tmp);
  const SafeAreaPaddingView = guildId(isLastStep[25]).SafeAreaPaddingView;
  if (stateFromStores3) {
    const obj9 = { style: items10, children: tmp13(Text3, obj10) };
    items10 = [tmp.flex, { justifyContent: "center", alignItems: "center" }];
    obj10 = { variant: "text-md/normal", color: "text-muted", children: intl4.string(tmp2(tmp3[24]).t.ZTNur7) };
    Text3 = tmp2(tmp3[23]).Text;
    intl4 = tmp2(tmp3[24]).intl;
    obj8.children = tmp13(ref, obj9);
    tmp19 = obj8;
  } else {
    let str;
    let tmp15 = ref;
    const obj12 = { contentContainerStyle: items11, children: items13 };
    items11 = [tmp.scrollContainer, ];
    const obj11 = { style: tmp.flex, children: items14 };
    const obj13 = { paddingBottom: sum1 };
    items11[1] = obj13;
    let tmp14 = closure_15;
    const obj14 = { style: tmp.header, children: items12 };
    const obj15 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl.string(tmp2(tmp3[24]).t.eDVMrA) };
    const Text = tmp2(tmp3[23]).Text;
    intl = tmp2(tmp3[24]).intl;
    items12 = [tmp13(Text, obj15), ];
    const obj16 = { style: tmp.description, variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp2(tmp3[24]).t.BozOXu) };
    const Text2 = tmp2(tmp3[23]).Text;
    intl2 = tmp2(tmp3[24]).intl;
    items12[1] = tmp13(Text2, obj16);
    items13 = [closure_15(ref, obj14), ];
    const obj17 = {
      style: tmp.connectionsList,
      children: stateFromStores.map((connection, index) => {
          const obj = { connection, guildId, location: AnalyticsLocationDefault.GUILD_ONBOARDING };
          const tmp = ConnectionCardDefault;
          return authStore2(tmp, obj, index);
        })
    };
    items13[1] = tmp13(ref, obj17);
    items14 = [closure_15(stateFromStores, obj12), ];
    const obj18 = { style: items15, children: tmp13(Button, obj20) };
    items15 = [, , ];
    ({ footer: arr17[0], footerContent: arr17[1] } = tmp);
    const obj19 = { paddingBottom: bottom };
    items15[2] = obj19;
    Button = tmp2(tmp3[28]).Button;
    if (stateFromStores4) {
      str = "primary";
    } else {
      str = "secondary";
    }
    obj20 = { variant: str, size: "md", text: combined, onPress: callback, grow: true };
    const intl3 = tmp2(tmp3[24]).intl;
    const string = intl3.string;
    const t = tmp2(tmp3[24]).t;
    if (isLastStep) {
      const _HermesInternal = HermesInternal;
      combined = "" + string(t["8SuVoE"]) + " \u{1F389}";
    } else if (stateFromStores4) {
      combined = string(t.PDTjLN);
    } else {
      combined = string(t["5Wxrcd"]);
    }
    items14[1] = tmp13(tmp15, obj18);
    obj8.children = tmp14(tmp15, obj11);
    tmp19 = obj8;
  }
  return tmp13(SafeAreaPaddingView, tmp19);
});
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx");

export default tmp5;
