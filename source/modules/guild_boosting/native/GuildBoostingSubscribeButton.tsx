// Module ID: 11617
// Function ID: 90217
// Name: _handleBoostPress
// Dependencies: [5, 31, 27, 4024, 653, 4969, 1852, 33, 11566, 4338, 4967, 11618, 1456, 5462, 624, 1868, 11565, 4544, 1212, 4653, 2]
// Exports: default

// Module 11617 (_handleBoostPress)
import PremiumGuildSubscribeModalScenes from "PremiumGuildSubscribeModalScenes";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { PremiumGuildSubscribeModalScenes as closure_11 } from "PremiumGuildSubscribeModalScenes";
import { FractionalPremiumStates } from "GuildFeatures";
import { jsx } from "jsxProd";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function _handleBoostPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticsObjects: closure_7, AnalyticsObjectTypes: closure_8, AnalyticsPages: closure_9, NOOP: closure_10 } = ME);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx");

export default function GuildBoostingSubscribeButton(guild) {
  let fractionalPremiumState;
  let premiumGroupRole;
  let styles;
  let useShortenedCTA;
  guild = guild.guild;
  const previousGuildSubscriptionSlot = guild.previousGuildSubscriptionSlot;
  const analyticsSection = guild.analyticsSection;
  const onAvailableSlotPress = guild.onAvailableSlotPress;
  const intent = guild.intent;
  const View = onResult;
  ({ useShortenedCTA, styles, fractionalPremiumState, premiumGroupRole } = guild);
  let tmp = previousGuildSubscriptionSlot(analyticsSection[11])();
  let _isNativeReflectConstruct = tmp;
  let obj = guild(analyticsSection[12]);
  const navigation = obj.useNavigation();
  const analyticsLocations = previousGuildSubscriptionSlot(analyticsSection[13])().analyticsLocations;
  let items = [_isNativeReflectConstruct];
  const stateFromStores = guild(analyticsSection[14]).useStateFromStores(items, () => {
    const keys = Object.keys(tmp.boostSlots);
    return keys.some((arg0) => null == boostSlots.boostSlots[arg0].premiumGuildSubscription && !boostSlots.boostSlots[arg0].isOnCooldown());
  });
  const items1 = [navigation, analyticsSection, onAvailableSlotPress, intent, guild.onResult];
  const callback = intent.useCallback((guildId) => {
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
      obj.onResult = closure_5;
      navigation.push(shouldUseMobileWebRedirectCheckout.CONFIRMATION, obj);
    }
  }, items1);
  let tmp5 = !stateFromStores;
  if (tmp5) {
    let tmp7 = fractionalPremiumState !== handleMobileWebRedirectCheckout.NONE;
    if (!tmp7) {
      tmp7 = premiumGroupRole === guild(analyticsSection[15]).PremiumSubscriptionGroupRole.MEMBER;
    }
    tmp5 = tmp7;
  }
  const tmp10 = previousGuildSubscriptionSlot(analyticsSection[16])("guild_boost_subscribe_button");
  const shouldUseMobileWebRedirectCheckout = tmp10.shouldUseMobileWebRedirectCheckout;
  handleMobileWebRedirectCheckout = tmp10.handleMobileWebRedirectCheckout;
  const items2 = [tmp, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, guild.id, analyticsSection, stateFromStores, previousGuildSubscriptionSlot, analyticsLocations, callback];
  const jsx = intent.useCallback(() => {
    if (_isNativeReflectConstruct) {
      let tmp8 = callback;
    } else if (stateFromStores) {
      tmp8 = callback(guild.id, previousGuildSubscriptionSlot);
    } else {
      if (shouldUseMobileWebRedirectCheckout) {
        if (null != guild.id) {
          tmp8 = handleMobileWebRedirectCheckout(analyticsLocations, guild.id);
        }
      }
      tmp8 = (function handleBoostPress(analyticsLocations, id, analyticsSection) {
        return outer2_14(...arguments);
      })(analyticsLocations, guild.id, analyticsSection);
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
  const intl = guild(analyticsSection[18]).intl;
  const string = intl.string;
  const t = guild(analyticsSection[18]).t;
  if (useShortenedCTA) {
    let stringResult = string(t.Uj0md3);
  } else {
    stringResult = string(t.gKmQ1G);
  }
  obj.text = stringResult;
  let tmp14;
  if (tmp5) {
    tmp14 = jsx(guild(analyticsSection[19]).LockIcon, { size: "xs", color: "white" });
  }
  obj.icon = tmp14;
  obj.children = jsx(guild(analyticsSection[17]).Button, {
    loading: tmp,
    variant: "primary",
    onPress() {
      return callback();
    },
    disabled: tmp5
  });
  return <View loading={tmp} variant="primary" onPress={function onPress() {
    return callback();
  }} disabled={tmp5} />;
};
