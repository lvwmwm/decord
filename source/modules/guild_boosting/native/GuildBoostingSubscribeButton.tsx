// Module ID: 6629
// Function ID: 50889
// Name: _handleBoostPress
// Dependencies: []
// Exports: default

// Module 6629 (_handleBoostPress)
async function _handleBoostPress(analyticsLocations, guildId, section, arg3) {
  let obj = callback(closure_2[8]);
  obj = {
    source: obj,
    analyticsLocations,
    guildId,
    onBack() {
      return callback(closure_2[9]).pop();
    }
  };
  obj = { page: constants3.PREMIUM_GUILD_USER_MODAL, section, object: constants.BUTTON_CTA, objectType: constants2.BUY };
  yield obj.launchGuildBoostFlowOrAlert(obj);
  callback(closure_2[10]).closeApplyBoostModal();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ AnalyticsObjects: closure_7, AnalyticsObjectTypes: closure_8, AnalyticsPages: closure_9, NOOP: closure_10 } = arg1(dependencyMap[4]));
let closure_11 = arg1(dependencyMap[5]).PremiumGuildSubscribeModalScenes;
const FractionalPremiumStates = arg1(dependencyMap[6]).FractionalPremiumStates;
const jsx = arg1(dependencyMap[7]).jsx;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx");

export default function GuildBoostingSubscribeButton(guild) {
  let fractionalPremiumState;
  let premiumGroupRole;
  let styles;
  let useShortenedCTA;
  guild = guild.guild;
  const arg1 = guild;
  const previousGuildSubscriptionSlot = guild.previousGuildSubscriptionSlot;
  const importDefault = previousGuildSubscriptionSlot;
  const analyticsSection = guild.analyticsSection;
  const dependencyMap = analyticsSection;
  const onAvailableSlotPress = guild.onAvailableSlotPress;
  let closure_3 = onAvailableSlotPress;
  const intent = guild.intent;
  const React = intent;
  const View = onResult;
  ({ useShortenedCTA, styles, fractionalPremiumState, premiumGroupRole } = guild);
  const tmp = importDefault(dependencyMap[11])();
  let closure_6 = tmp;
  let obj = arg1(dependencyMap[12]);
  const navigation = obj.useNavigation();
  const analyticsLocations = importDefault(dependencyMap[13])().analyticsLocations;
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[14]).useStateFromStores(items, () => {
    const keys = Object.keys(tmp.boostSlots);
    return keys.some((arg0) => null == boostSlots.boostSlots[arg0].premiumGuildSubscription && !boostSlots.boostSlots[arg0].isOnCooldown());
  });
  const items1 = [navigation, analyticsSection, onAvailableSlotPress, intent, guild.onResult];
  const callback = React.useCallback((guildId) => {
    if (null != onAvailableSlotPress) {
      return onAvailableSlotPress(guildId, arg1);
    } else {
      let obj = { guildId };
      let tmp;
      if (null != arg1) {
        const items = [arg1];
        tmp = items;
      }
      obj.guildBoostSlots = tmp;
      obj = { page: stateFromStores.PREMIUM_GUILD_USER_MODAL, section: analyticsSection, object: navigation.BUTTON_CTA, objectType: analyticsLocations.BUY };
      obj.location = obj;
      obj.intent = intent;
      obj.onResult = onResult;
      navigation.push(shouldUseMobileWebRedirectCheckout.CONFIRMATION, obj);
    }
  }, items1);
  let tmp5 = !stateFromStores;
  if (tmp5) {
    let tmp7 = fractionalPremiumState !== FractionalPremiumStates.NONE;
    if (!tmp7) {
      tmp7 = premiumGroupRole === arg1(dependencyMap[15]).PremiumSubscriptionGroupRole.MEMBER;
    }
    tmp5 = tmp7;
  }
  const tmp10 = importDefault(dependencyMap[16])("guild_boost_subscribe_button");
  const shouldUseMobileWebRedirectCheckout = tmp10.shouldUseMobileWebRedirectCheckout;
  let closure_11 = shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp10.handleMobileWebRedirectCheckout;
  const FractionalPremiumStates = handleMobileWebRedirectCheckout;
  const items2 = [tmp, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, guild.id, analyticsSection, stateFromStores, previousGuildSubscriptionSlot, analyticsLocations, callback];
  const jsx = React.useCallback(() => {
    if (tmp) {
      let tmp8 = callback;
    } else {
      if (stateFromStores) {
        tmp8 = callback(guild.id, previousGuildSubscriptionSlot);
      } else {
        if (shouldUseMobileWebRedirectCheckout) {
          if (null != guild.id) {
            tmp8 = handleMobileWebRedirectCheckout(analyticsLocations, guild.id);
          }
        }
        tmp8 = function handleBoostPress(analyticsLocations, id, analyticsSection) {
          return callback(...arguments);
        }(analyticsLocations, guild.id, analyticsSection);
      }
      const tmp = stateFromStores;
    }
    return tmp8;
  }, items2);
  obj = { style: styles };
  obj = {
    loading: tmp,
    variant: "primary",
    onPress() {
      return callback();
    },
    disabled: tmp5
  };
  const intl = arg1(dependencyMap[18]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[18]).t;
  if (useShortenedCTA) {
    let stringResult = string(t.Uj0md3);
  } else {
    stringResult = string(t.gKmQ1G);
  }
  obj.text = stringResult;
  let tmp14;
  if (tmp5) {
    tmp14 = jsx(arg1(dependencyMap[19]).LockIcon, {});
  }
  obj.icon = tmp14;
  obj.children = jsx(arg1(dependencyMap[17]).Button, obj);
  return <View {...obj} />;
};
