// Module ID: 6838
// Function ID: 6839
// Name: GuildOnboardingConnectionPrompt
// Dependencies: [19, 17, 6153, 6786, 5757, 2086, 6778, 6779, 6775, 1085, 21, 5090, 6261, 587, 558, 576, 1502, 1630, 504, 6784, 1264, 5105, 6777, 5086, 1126, 6803, 6839, 6865, 5375, 2]

// Module 6838 (GuildOnboardingConnectionPrompt)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import NavigatorConstants from "NavigatorConstants" /* 6261 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 6775 */;
import GuildOnboardingPromptsActionCreators from "GuildOnboardingPromptsActionCreators" /* 6777 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6779 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6784 */;
import ConnectionCardDefault from "ConnectionCard" /* 6839 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 6153 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6786 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5757 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6778 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, num, obj1, ref, tmp11, tmp6, tmp7, tmp8, trackResult;

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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildOnboardingConnectionPrompt(guildId) {
  let first;
  let isLastStep;
  let stateFromStores3;
  let stateFromStores4;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp25;
  let tmp26;
  let tmp27;
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
    class P {
      constructor() {
        return closure_10.getOnboardingConnections(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = P;
    tmp10 = P;
  } else {
    class P {
      constructor() {
        return closure_10.getOnboardingConnections(guildId);
      }
    }
  }
  let tmpResult = tmp(tmp2[18]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return closure_10.getOnboardingConnections(guildId);
      }
    }
    const items1 = [stateFromStores4];
    cResult[3] = items1;
    tmp12 = items1;
  } else {
    class P {
      constructor() {
        return closure_10.getOnboardingConnections(guildId);
      }
    }
  }
  if (cResult[4] !== guildId) {
    class L {
      constructor() {
        return closure_10.getOnboardingPromptsForOnboarding(guildId);
      }
    }
    cResult[4] = guildId;
    cResult[5] = L;
    tmp13 = L;
  } else {
    class L {
      constructor() {
        return closure_10.getOnboardingPromptsForOnboarding(guildId);
      }
    }
  }
  const tmpResult6 = tmp(tmp2[18]);
  const stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_10.getOnboardingPromptsForOnboarding(guildId);
      }
    }
    const items2 = [stateFromStores3];
    cResult[6] = items2;
    tmp15 = items2;
  } else {
    class L {
      constructor() {
        return closure_10.getOnboardingPromptsForOnboarding(guildId);
      }
    }
  }
  if (cResult[7] !== guildId) {
    class L {
      constructor() {
        return closure_10.getOnboardingPromptsForOnboarding(guildId);
      }
    }
    cResult[7] = guildId;
    cResult[8] = tmp17;
    tmp16 = tmp17;
  } else {
    class L {
      constructor() {
        return closure_10.getOnboardingPromptsForOnboarding(guildId);
      }
    }
  }
  const tmpResult7 = tmp(tmp2[18]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp15, tmp16);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_10.getOnboardingPromptsForOnboarding(guildId);
      }
    }
    const items3 = [stateFromStoresArray];
    cResult[9] = items3;
    tmp19 = items3;
  } else {
    class L {
      constructor() {
        return closure_10.getOnboardingPromptsForOnboarding(guildId);
      }
    }
  }
  if (cResult[10] !== guildId) {
    class U {
      constructor() {
        return closure_6.getRulesPrompt(guildId);
      }
    }
    cResult[10] = guildId;
    cResult[11] = U;
    tmp20 = U;
  } else {
    class U {
      constructor() {
        return closure_6.getRulesPrompt(guildId);
      }
    }
  }
  const tmpResult8 = tmp(tmp2[18]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp19, tmp20);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        return closure_6.getRulesPrompt(guildId);
      }
    }
    const items4 = [stateFromStores4];
    class M {
      constructor() {
        return closure_10.isLoading();
      }
    }
    cResult[12] = M;
    cResult[13] = items4;
    tmp23 = items4;
    tmp22 = M;
  } else {
    class U {
      constructor() {
        return closure_6.getRulesPrompt(guildId);
      }
    }
    tmp23 = cResult[13];
  }
  const tmpResult9 = tmp(tmp2[18]);
  stateFromStores3 = tmpResult9.useStateFromStores(tmp23, tmp22);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        return closure_6.getRulesPrompt(guildId);
      }
    }
    const items5 = [stateFromStores1, ];
    class M {
      constructor() {
        return closure_10.isLoading();
      }
    }
    items5[1] = stateFromStores2;
    cResult[14] = items5;
    tmp25 = items5;
  } else {
    class U {
      constructor() {
        return closure_6.getRulesPrompt(guildId);
      }
    }
  }
  if (cResult[15] !== stateFromStores) {
    class H {
      constructor() {
        tmp = closure_5;
        iter = closure_5[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          connection_type = nextResult.connection_type;
          if (OnboardingConnectionType.APPLICATION === connection_type) {
            tmp12 = closure_7;
            tmp13 = nextResult;
            if (null != closure_7.getNewestTokenForApplication(tmp3.application_id)) {
              tmp14 = iter;
              iter.return();
              flag2 = true;
              return true;
            }
          } else if (tmp4.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
            tmp5 = nextResult;
            if (null != tmp3.provider_id) {
              tmp6 = closure_8;
              tmp7 = nextResult;
              account = closure_8.getAccount(null, tmp3.provider_id);
              if (null != account) {
                tmp10 = account;
                if (!tmp9.revoked) {
                  tmp11 = iter;
                  iter.return();
                  flag = true;
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
        return closure_10.isLoading();
      }
    }
    cResult[15] = stateFromStores;
    cResult[16] = H;
    cResult[17] = items6;
    tmp27 = items6;
    tmp26 = H;
  } else {
    class H {
      constructor() {
        tmp = closure_5;
        iter = closure_5[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          connection_type = nextResult.connection_type;
          if (OnboardingConnectionType.APPLICATION === connection_type) {
            tmp12 = closure_7;
            tmp13 = nextResult;
            if (null != closure_7.getNewestTokenForApplication(tmp3.application_id)) {
              tmp14 = iter;
              iter.return();
              flag2 = true;
              return true;
            }
          } else if (tmp4.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
            tmp5 = nextResult;
            if (null != tmp3.provider_id) {
              tmp6 = closure_8;
              tmp7 = nextResult;
              account = closure_8.getAccount(null, tmp3.provider_id);
              if (null != account) {
                tmp10 = account;
                if (!tmp9.revoked) {
                  tmp11 = iter;
                  iter.return();
                  flag = true;
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
    tmp27 = cResult[17];
  }
  const tmpResult10 = tmp(tmp2[18]);
  stateFromStores4 = tmpResult10.useStateFromStores(tmp25, tmp26, tmp27);
  if (cResult[18] === guildId) {
    class H {
      constructor() {
        tmp = closure_5;
        iter = closure_5[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          connection_type = nextResult.connection_type;
          if (OnboardingConnectionType.APPLICATION === connection_type) {
            tmp12 = closure_7;
            tmp13 = nextResult;
            if (null != closure_7.getNewestTokenForApplication(tmp3.application_id)) {
              tmp14 = iter;
              iter.return();
              flag2 = true;
              return true;
            }
          } else if (tmp4.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
            tmp5 = nextResult;
            if (null != tmp3.provider_id) {
              tmp6 = closure_8;
              tmp7 = nextResult;
              account = closure_8.getAccount(null, tmp3.provider_id);
              if (null != account) {
                tmp10 = account;
                if (!tmp9.revoked) {
                  tmp11 = iter;
                  iter.return();
                  flag = true;
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
      tmp = closure_9;
      if (!tmp) {
        tmp2 = closure_5;
        num = 0;
        if (0 !== closure_5.length) {
          if (!closure_4.current) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[19]);
            providerConnectionState = obj.getProviderConnectionState(tmp2);
            obj2 = closure_0(closure_2[19]);
            applicationConnectionState = obj2.getApplicationConnectionState(tmp2);
            tmp7 = closure_1;
            tmp8 = closure_1(closure_2[20]);
            tmp9 = AnalyticEvents;
            obj1 = {};
            track = tmp8.track;
            GUILD_ONBOARDING_STEP_VIEWED = AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED;
            obj4 = closure_0(closure_2[21]);
            tmp10 = guildId;
            tmp11 = obj1;
            merged = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
            obj1.step = closure_0(closure_2[22]).CONNECTIONS_STEP;
            flag = false;
            obj1.required = false;
            ({ connected: obj3.provider_connections_connected, notConnected: obj3.provider_connections_not_connected } = providerConnectionState);
            ({ connected: obj3.application_connections_connected, notConnected: obj3.application_connections_not_connected } = applicationConnectionState);
            trackResult = track(GUILD_ONBOARDING_STEP_VIEWED, obj1);
            flag2 = true;
            tmp14.current = true;
          }
        }
      }
      return;
    }
  }
  const items7 = [guildId, stateFromStores3, stateFromStores];
  cResult[18] = guildId;
  cResult[19] = stateFromStores3;
  cResult[20] = stateFromStores;
  cResult[21] = Z;
  cResult[22] = items7;
}) : (function GuildOnboardingConnectionPrompt(guildId) {
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
