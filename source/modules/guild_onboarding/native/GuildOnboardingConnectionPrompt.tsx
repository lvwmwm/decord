// Module ID: 5461
// Function ID: 46653
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 5082, 5066, 4812, 1838, 5058, 5059, 5055, 653, 33, 4130, 5084, 689, 1456, 1557, 566, 5065, 675, 4324, 5057, 5121, 4126, 1212, 5462, 5484, 4543, 2]
// Exports: default

// Module 5461 (_createForOfIteratorHelperLoose)
import result from "result";
import get_ActivityIndicator from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import { OnboardingConnectionType } from "_createForOfIteratorHelperLoose";
import { GuildOnboardingModalStates as closure_12 } from "GUILD_ONBOARDING_MODAL_KEY";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
let closure_4;
let closure_5;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { display: "flex", flex: 1, flexGrow: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", flexGrow: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.scrollContainer = obj1;
_createForOfIteratorHelperLoose.header = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.title = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.description = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.connectionsList = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj6 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, position: "absolute", width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.footer = obj6;
let obj5 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.footerContent = { width: "100%", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj7 = { width: "100%", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx");

export default function GuildOnboardingConnectionPrompt(guildId) {
  guildId = guildId.guildId;
  const onComplete = guildId.onComplete;
  const isLastStep = guildId.isLastStep;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(isLastStep[14]);
  const navigation = obj.useNavigation();
  const bottom = onComplete(isLastStep[15])().bottom;
  const sum = 64 + bottom;
  const sum1 = sum + onComplete(isLastStep[13]).space.PX_8;
  let closure_4 = navigation.useRef(false);
  let obj1 = guildId(isLastStep[16]);
  const items = [stateFromStores4];
  const stateFromStores = obj1.useStateFromStores(items, () => stateFromStores4.getOnboardingConnections(guildId));
  let obj2 = guildId(isLastStep[16]);
  const items1 = [stateFromStores4];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => stateFromStores4.getOnboardingPromptsForOnboarding(guildId));
  let obj3 = guildId(isLastStep[16]);
  const items2 = [stateFromStores3];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => stateFromStores3.getGuild(guildId));
  let obj4 = guildId(isLastStep[16]);
  const items3 = [stateFromStoresArray];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => stateFromStoresArray.getRulesPrompt(guildId));
  let obj5 = guildId(isLastStep[16]);
  const items4 = [stateFromStores4];
  stateFromStores3 = obj5.useStateFromStores(items4, () => stateFromStores4.isLoading());
  let obj6 = guildId(isLastStep[16]);
  const items5 = [stateFromStores1, stateFromStores2];
  const items6 = [stateFromStores];
  stateFromStores4 = obj6.useStateFromStores(items5, () => {
    const tmp = outer1_17(stateFromStores);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      while (true) {
        let value = iter2.value;
        let connection_type = value.connection_type;
        let tmp3 = outer1_11;
        if (outer1_11.APPLICATION === connection_type) {
          let tmp8 = stateFromStores1;
          let tmp5 = tmp2;
          if (null != stateFromStores1.getNewestTokenForApplication(value.application_id)) {
            let flag2 = true;
            return true;
          }
        } else {
          let tmp4 = outer1_11;
          if (outer1_11.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
            tmp5 = tmp2;
            if (null != value.provider_id) {
              let tmp6 = stateFromStores2;
              let account = stateFromStores2.getAccount(null, value.provider_id);
              tmp5 = account;
              if (null != account) {
                tmp5 = account;
                if (!account.revoked) {
                  break;
                }
              }
            }
          } else {
            let connection_type2 = value.connection_type;
            tmp5 = tmp2;
          }
        }
        let iter3 = tmp();
        tmp2 = tmp5;
        iter2 = iter3;
      }
      return true;
    }
    return false;
  }, items6);
  const items7 = [guildId, stateFromStores3, stateFromStores];
  const effect = navigation.useEffect(() => {
    if (!stateFromStores3) {
      if (0 !== stateFromStores.length) {
        if (!ref.current) {
          let obj = guildId(isLastStep[17]);
          const providerConnectionState = obj.getProviderConnectionState(stateFromStores);
          const applicationConnectionState = guildId(isLastStep[17]).getApplicationConnectionState(stateFromStores);
          const obj2 = guildId(isLastStep[17]);
          obj = {};
          const obj3 = onComplete(isLastStep[18]);
          const merged = Object.assign(guildId(isLastStep[19]).collectGuildAnalyticsMetadata(guildId));
          obj["step"] = guildId(isLastStep[20]).CONNECTIONS_STEP;
          obj["required"] = false;
          obj["provider_connections_connected"] = providerConnectionState.connected;
          obj["provider_connections_not_connected"] = providerConnectionState.notConnected;
          obj["application_connections_connected"] = applicationConnectionState.connected;
          obj["application_connections_not_connected"] = applicationConnectionState.notConnected;
          obj3.track(outer1_13.GUILD_ONBOARDING_STEP_VIEWED, obj);
          ref.current = true;
          const obj5 = guildId(isLastStep[19]);
        }
      }
    }
  }, items7);
  const items8 = [stateFromStoresArray.length, stateFromStores1, stateFromStores2, navigation, onComplete, stateFromStores, stateFromStores4, isLastStep, guildId];
  const callback = navigation.useCallback(() => {
    let obj = guildId(isLastStep[17]);
    const providerConnectionState = obj.getProviderConnectionState(stateFromStores);
    const applicationConnectionState = guildId(isLastStep[17]).getApplicationConnectionState(stateFromStores);
    const obj2 = guildId(isLastStep[17]);
    obj = {};
    const obj3 = onComplete(isLastStep[18]);
    const merged = Object.assign(guildId(isLastStep[19]).collectGuildAnalyticsMetadata(guildId));
    obj["step"] = guildId(isLastStep[20]).CONNECTIONS_STEP;
    obj["skipped"] = !stateFromStores4;
    obj["back"] = false;
    obj["options_selected"] = 0;
    obj["in_onboarding"] = true;
    obj["is_final_step"] = isLastStep;
    obj["provider_connections_connected"] = providerConnectionState.connected;
    obj["provider_connections_not_connected"] = providerConnectionState.notConnected;
    obj["application_connections_connected"] = applicationConnectionState.connected;
    obj["application_connections_not_connected"] = applicationConnectionState.notConnected;
    obj3.track(outer1_13.GUILD_ONBOARDING_STEP_COMPLETED, obj);
    if (stateFromStoresArray.length > 0) {
      obj = { currentPrompt: 0 };
      navigation.push(outer1_12.PROMPT, obj);
    } else {
      if (obj6.showRulesInOnboarding(stateFromStores1, stateFromStores2)) {
        navigation.push(outer1_12.RULES);
      } else {
        onComplete();
      }
      obj6 = guildId(isLastStep[17]);
    }
  }, items8);
  obj = { top: true, style: items9 };
  items9 = [, ];
  ({ flex: arr12[0], container: arr12[1] } = tmp);
  if (stateFromStores3) {
    obj = {};
    const items10 = [tmp.flex, { justifyContent: "center", alignItems: "center" }];
    obj.style = items10;
    obj1 = { variant: "text-md/normal", color: "text-muted" };
    const intl4 = guildId(isLastStep[23]).intl;
    obj1.children = intl4.string(guildId(isLastStep[23]).t.ZTNur7);
    obj.children = callback(guildId(isLastStep[22]).Text, obj1);
    obj.children = callback(closure_4, obj);
    let tmp22 = obj;
  } else {
    obj2 = { style: tmp.flex };
    obj3 = {};
    const items11 = [tmp.scrollContainer, ];
    obj4 = { paddingBottom: sum1 };
    items11[1] = obj4;
    obj3.contentContainerStyle = items11;
    obj5 = { style: tmp.header };
    obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary" };
    const intl = guildId(isLastStep[23]).intl;
    obj6.children = intl.string(guildId(isLastStep[23]).t.eDVMrA);
    const items12 = [callback(guildId(isLastStep[22]).Text, obj6), ];
    const obj7 = { style: tmp.description, variant: "text-md/normal", color: "text-muted" };
    const intl2 = guildId(isLastStep[23]).intl;
    obj7.children = intl2.string(guildId(isLastStep[23]).t.BozOXu);
    items12[1] = callback(guildId(isLastStep[22]).Text, obj7);
    obj5.children = items12;
    const items13 = [callback2(closure_4, obj5), ];
    const obj8 = {
      style: tmp.connectionsList,
      children: stateFromStores.map((connection) => {
          const obj = { connection, guildId, location: onComplete(isLastStep[25]).GUILD_ONBOARDING };
          return outer1_14(onComplete(isLastStep[24]), obj, arg1);
        })
    };
    items13[1] = callback(closure_4, obj8);
    obj3.children = items13;
    const items14 = [callback2(stateFromStores, obj3), ];
    const obj9 = {};
    const items15 = [, , ];
    ({ footer: arr17[0], footerContent: arr17[1] } = tmp);
    const obj10 = { paddingBottom: bottom };
    items15[2] = obj10;
    obj9.style = items15;
    const obj11 = {};
    if (stateFromStores4) {
      let str = "primary";
    } else {
      str = "secondary";
    }
    obj11.variant = str;
    obj11.size = "md";
    const intl3 = guildId(isLastStep[23]).intl;
    const string = intl3.string;
    const t = guildId(isLastStep[23]).t;
    if (isLastStep) {
      const _HermesInternal = HermesInternal;
      let combined = "" + string(t["8SuVoE"]) + " \u{1F389}";
    } else if (stateFromStores4) {
      combined = string(t.PDTjLN);
    } else {
      combined = string(t["5Wxrcd"]);
    }
    obj11.text = combined;
    obj11.onPress = callback;
    obj11.grow = true;
    obj9.children = callback(guildId(isLastStep[26]).Button, obj11);
    items14[1] = callback(closure_4, obj9);
    obj2.children = items14;
    obj.children = callback2(closure_4, obj2);
    tmp22 = obj;
    const tmp12 = callback2;
  }
  return callback(guildId(isLastStep[21]).SafeAreaPaddingView, tmp22);
};
