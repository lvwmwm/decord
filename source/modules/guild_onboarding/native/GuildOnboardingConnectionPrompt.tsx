// Module ID: 5459
// Function ID: 46626
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 5459 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const OnboardingConnectionType = arg1(dependencyMap[7]).OnboardingConnectionType;
let closure_12 = arg1(dependencyMap[8]).GuildOnboardingModalStates;
const AnalyticEvents = arg1(dependencyMap[9]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = { flex: { flex: 1 } };
obj = { marginTop: arg1(dependencyMap[12]).NAV_BAR_HEIGHT, marginBottom: importDefault(dependencyMap[13]).space.PX_16, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
const tmp3 = arg1(dependencyMap[10]);
obj.scrollContainer = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16, paddingTop: importDefault(dependencyMap[13]).space.PX_16, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWER };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16, paddingTop: importDefault(dependencyMap[13]).space.PX_16, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWER };
obj.header = { marginBottom: importDefault(dependencyMap[13]).space.PX_24 };
const obj2 = { marginBottom: importDefault(dependencyMap[13]).space.PX_24 };
obj.title = { marginBottom: importDefault(dependencyMap[13]).space.PX_8 };
const obj3 = { marginBottom: importDefault(dependencyMap[13]).space.PX_8 };
obj.description = { marginTop: importDefault(dependencyMap[13]).space.PX_8 };
const obj4 = { marginTop: importDefault(dependencyMap[13]).space.PX_8 };
obj.connectionsList = { marginTop: importDefault(dependencyMap[13]).space.PX_8 };
const obj5 = { marginTop: importDefault(dependencyMap[13]).space.PX_8 };
obj.footer = { paddingBottom: importDefault(dependencyMap[13]).space.PX_8, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWER };
const obj6 = { paddingBottom: importDefault(dependencyMap[13]).space.PX_8, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWER };
obj.footerContent = { width: "100%", paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16 };
let closure_16 = obj.createStyles(obj);
const obj7 = { width: "100%", paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16 };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx");

export default function GuildOnboardingConnectionPrompt(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onComplete = guildId.onComplete;
  const importDefault = onComplete;
  const isLastStep = guildId.isLastStep;
  const dependencyMap = isLastStep;
  const tmp = callback3();
  let obj = arg1(dependencyMap[14]);
  const navigation = obj.useNavigation();
  const React = navigation;
  const bottom = importDefault(dependencyMap[15])().bottom;
  const sum = 64 + bottom;
  const sum1 = sum + importDefault(dependencyMap[13]).space.PX_8;
  let closure_4 = React.useRef(false);
  let obj1 = arg1(dependencyMap[16]);
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => stateFromStores4.getOnboardingConnections(guildId));
  let obj2 = arg1(dependencyMap[16]);
  const items1 = [closure_10];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => stateFromStores4.getOnboardingPromptsForOnboarding(guildId));
  let closure_6 = stateFromStoresArray;
  let obj3 = arg1(dependencyMap[16]);
  const items2 = [closure_9];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => stateFromStores3.getGuild(guildId));
  let closure_7 = stateFromStores1;
  let obj4 = arg1(dependencyMap[16]);
  const items3 = [closure_6];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => stateFromStoresArray.getRulesPrompt(guildId));
  let closure_8 = stateFromStores2;
  let obj5 = arg1(dependencyMap[16]);
  const items4 = [closure_10];
  const stateFromStores3 = obj5.useStateFromStores(items4, () => stateFromStores4.isLoading());
  closure_9 = stateFromStores3;
  let obj6 = arg1(dependencyMap[16]);
  const items5 = [closure_7, closure_8];
  const items6 = [stateFromStores];
  const stateFromStores4 = obj6.useStateFromStores(items5, () => {
    const tmp = callback2(stateFromStores);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      while (true) {
        let value = iter2.value;
        let connection_type = value.connection_type;
        let tmp3 = constants;
        if (constants.APPLICATION === connection_type) {
          let tmp8 = stateFromStores1;
          let tmp5 = tmp2;
          if (null != stateFromStores1.getNewestTokenForApplication(value.application_id)) {
            let flag2 = true;
            return true;
          }
        } else {
          let tmp4 = constants;
          if (constants.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
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
        let tmp2 = tmp5;
        iter2 = iter3;
      }
      return true;
    }
    return false;
  }, items6);
  closure_10 = stateFromStores4;
  const items7 = [guildId, stateFromStores3, stateFromStores];
  const effect = React.useEffect(() => {
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
          obj3.track(constants3.GUILD_ONBOARDING_STEP_VIEWED, obj);
          ref.current = true;
          const obj5 = guildId(isLastStep[19]);
        }
      }
    }
  }, items7);
  const items8 = [stateFromStoresArray.length, stateFromStores1, stateFromStores2, navigation, onComplete, stateFromStores, stateFromStores4, isLastStep, guildId];
  const callback = React.useCallback(() => {
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
    obj3.track(constants3.GUILD_ONBOARDING_STEP_COMPLETED, obj);
    if (stateFromStoresArray.length > 0) {
      obj = { currentPrompt: 0 };
      navigation.push(constants2.PROMPT, obj);
    } else {
      if (obj6.showRulesInOnboarding(stateFromStores1, stateFromStores2)) {
        navigation.push(constants2.RULES);
      } else {
        onComplete();
      }
      const obj6 = guildId(isLastStep[17]);
    }
  }, items8);
  obj = { top: true, style: items9 };
  const items9 = [, ];
  ({ flex: arr12[0], container: arr12[1] } = tmp);
  if (stateFromStores3) {
    obj = {};
    const items10 = [tmp.flex, { margin: null, backgroundColor: null }];
    obj.style = items10;
    obj1 = {};
    const intl4 = arg1(dependencyMap[23]).intl;
    obj1.children = intl4.string(arg1(dependencyMap[23]).t.ZTNur7);
    obj.children = callback(arg1(dependencyMap[22]).Text, obj1);
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
    obj6 = { style: tmp.title };
    const intl = arg1(dependencyMap[23]).intl;
    obj6.children = intl.string(arg1(dependencyMap[23]).t.eDVMrA);
    const items12 = [callback(arg1(dependencyMap[22]).Text, obj6), ];
    const obj7 = { style: tmp.description };
    const intl2 = arg1(dependencyMap[23]).intl;
    obj7.children = intl2.string(arg1(dependencyMap[23]).t.BozOXu);
    items12[1] = callback(arg1(dependencyMap[22]).Text, obj7);
    obj5.children = items12;
    const items13 = [callback2(closure_4, obj5), ];
    const obj8 = {
      style: tmp.connectionsList,
      children: stateFromStores.map((connection) => {
          const obj = { connection, guildId, location: onComplete(isLastStep[25]).GUILD_ONBOARDING };
          return callback(onComplete(isLastStep[24]), obj, arg1);
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
    const intl3 = arg1(dependencyMap[23]).intl;
    const string = intl3.string;
    const t = arg1(dependencyMap[23]).t;
    if (isLastStep) {
      const _HermesInternal = HermesInternal;
      let combined = "" + string(t.8SuVoE) + " \u{1F389}";
    } else if (stateFromStores4) {
      combined = string(t.PDTjLN);
    } else {
      combined = string(t.5Wxrcd);
    }
    obj11.text = combined;
    obj11.onPress = callback;
    obj11.grow = true;
    obj9.children = callback(arg1(dependencyMap[26]).Button, obj11);
    items14[1] = callback(closure_4, obj9);
    obj2.children = items14;
    obj.children = callback2(closure_4, obj2);
    tmp22 = obj;
    const tmp12 = callback2;
  }
  return callback(arg1(dependencyMap[21]).SafeAreaPaddingView, tmp22);
};
