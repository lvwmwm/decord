// Module ID: 6580
// Function ID: 6581
// Name: GuildOnboardingConnectionPrompt
// Dependencies: [19, 17, 5884, 6528, 5593, 2067, 6521, 6522, 6518, 1074, 21, 4836, 5994, 576, 1485, 1613, 504, 6527, 1241, 5016, 6520, 6544, 4832, 1115, 6581, 6603, 5281, 2]
// Exports: default

// Module 6580 (GuildOnboardingConnectionPrompt)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 6518 */;
import GuildOnboardingPromptsActionCreators from "GuildOnboardingPromptsActionCreators" /* 6520 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6522 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6527 */;
import ConnectionCardDefault from "ConnectionCard" /* 6581 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5884 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6528 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6521 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

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
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx");

export default function GuildOnboardingConnectionPrompt(guildId) {
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
  let obj = guildId(isLastStep[14]);
  navigation = obj.useNavigation();
  const bottom = onComplete(isLastStep[15])().bottom;
  const sum = 64 + bottom;
  const sum1 = sum + onComplete(isLastStep[13]).space.PX_8;
  const ref = navigation.useRef(false);
  let obj2 = guildId(isLastStep[16]);
  const items = [stateFromStores4];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId));
  const obj3 = guildId(isLastStep[16]);
  const items1 = [stateFromStores4];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId));
  let obj4 = guildId(isLastStep[16]);
  const items2 = [stateFromStores3];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let obj5 = guildId(isLastStep[16]);
  const items3 = [stateFromStoresArray];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  const items4 = [stateFromStores4];
  const obj6 = guildId(isLastStep[16]);
  stateFromStores3 = obj6.useStateFromStores(items4, () => stateFromStores4.isLoading());
  const items5 = [stateFromStores1, stateFromStores2];
  const items6 = [stateFromStores];
  const obj7 = guildId(isLastStep[16]);
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
  const SafeAreaPaddingView = guildId(isLastStep[21]).SafeAreaPaddingView;
  if (stateFromStores3) {
    const obj9 = { style: items10, children: tmp13(Text3, obj10) };
    items10 = [tmp.flex, { justifyContent: "center", alignItems: "center" }];
    obj10 = { variant: "text-md/normal", color: "text-muted", children: intl4.string(tmp2(tmp3[23]).t.ZTNur7) };
    Text3 = tmp2(tmp3[22]).Text;
    intl4 = tmp2(tmp3[23]).intl;
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
    const obj15 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl.string(tmp2(tmp3[23]).t.eDVMrA) };
    const Text = tmp2(tmp3[22]).Text;
    intl = tmp2(tmp3[23]).intl;
    items12 = [tmp13(Text, obj15), ];
    const obj16 = { style: tmp.description, variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp2(tmp3[23]).t.BozOXu) };
    const Text2 = tmp2(tmp3[22]).Text;
    intl2 = tmp2(tmp3[23]).intl;
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
    Button = tmp2(tmp3[26]).Button;
    if (stateFromStores4) {
      str = "primary";
    } else {
      str = "secondary";
    }
    obj20 = { variant: str, size: "md", text: combined, onPress: callback, grow: true };
    const intl3 = tmp2(tmp3[23]).intl;
    const string = intl3.string;
    const t = tmp2(tmp3[23]).t;
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
};
