// Module ID: 16514
// Function ID: 128630
// Name: _createGroupFromStore
// Dependencies: [57, 5, 31, 16471, 14144, 653, 33, 14151, 14166, 3830, 1212, 480, 4324, 16483, 16466, 16484, 2]

// Module 16514 (_createGroupFromStore)
import _slicedToArray from "_slicedToArray";
import ME from "ME";
import result from "result";
import { useRoleTierEditStore } from "_createForOfIteratorHelperLoose";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

let closure_8;
let closure_9;
const require = arg1;
function _createGroupFromStore() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
class GuildRoleSubscriptionGroupSetupModal {
  constructor(arg0) {
    obj = Object.create(null);
    obj.editStateId = 0;
    merged = Object.assign(global, obj);
    closure_0 = merged;
    guildId = undefined;
    c2 = undefined;
    useState = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    useState = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    _handleCreateGroupAndTier = function _handleCreateGroupAndTier(EditStateContextProvider, arg1) {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = _undefined(tmp);
      return obj(...arguments);
    };
    guildId = merged.guildId;
    tmp3 = c4(c6.useState(), 2);
    c2 = tmp3[0];
    useState = tmp3[1];
    obj = require("_createForOfIteratorHelperLoose");
    c4 = obj.useCreateSubscriptionGroupListing().createSubscriptionGroupListing;
    obj2 = require("_createForOfIteratorHelperLoose");
    updateSubscriptionsSettings = obj2.useUpdateSubscriptionsSettings();
    ({ updateSubscriptionsSettings: c5, error } = updateSubscriptionsSettings);
    tmp5 = c4(c6.useState(global.editStateId), 2);
    first = tmp5[0];
    c6 = first;
    useState = tmp5[1];
    obj3 = require("_createForOfIteratorHelperLoose");
    createOrUpdateListingFromEditState = obj3.useCreateOrUpdateListingFromEditState();
    ({ handleCreateOrUpdateFromEditState: c8, error: error2 } = createOrUpdateListingFromEditState);
    if (null != error) {
      error2 = error;
    }
    tmp8 = undefined;
    if (null != error2) {
      tmp8 = error2;
    }
    c9 = tmp8;
    items = [];
    items[0] = tmp8;
    effect = c6.useEffect(() => {
      if (null != _undefined3) {
        let anyErrorMessage = _undefined3.getAnyErrorMessage();
        if (null == anyErrorMessage) {
          const intl = merged(1212).intl;
          anyErrorMessage = intl.string(merged(1212).t.R0RpRX);
        }
        merged(3830).presentError(anyErrorMessage);
        const obj = merged(3830);
      }
    }, items);
    memo = c6.useMemo(() => {
      const items = [_undefined2.GATING, _undefined2.GROUP, _undefined2.DETAILS, _undefined2.CHANNEL_BENEFITS, _undefined2.INTANGIBLE_BENEFITS, _undefined2.DESIGN, { scene: _undefined2.CONFIRMATION, extraProps: { isForGroupSetupModal: true } }];
      return items;
    }, []);
    c10 = memo;
    items1 = [];
    items1[0] = memo;
    memo1 = c6.useMemo(() => {
      let obj = {};
      obj = { impressionName: merged(480).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING };
      obj[_undefined2.GATING] = obj;
      obj = { impressionName: merged(480).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP };
      obj[_undefined2.DETAILS] = obj;
      return obj;
    }, []);
    callback = c6.useCallback((arg0) => {
      let closure_0 = arg0;
      let obj = guildId(4324);
      obj = { setup_modal_step: memo.findIndex((arg0) => arg0 === closure_0) + 1 };
      obj.trackWithMetadata(memo.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj);
    }, items1);
    obj1 = { guildId, editStateId: first, groupListingId: null };
    obj2 = { guildId };
    obj3 = {};
    tmp13 = require("getComponentPropsForScreen");
    merged1 = Object.assign(merged);
    obj3["modalKey"] = c9;
    obj3["onDone"] = function handleCreateGroupAndTier() {
      return _handleCreateGroupAndTier(...arguments);
    };
    obj3["steps"] = memo;
    obj3["onClose"] = callback;
    obj3["stepScreenPropsMap"] = memo1;
    obj2.children = _handleCreateGroupAndTier(tmp13, obj3);
    obj1.children = _handleCreateGroupAndTier(require("useRoleSubscriptionSettingsDisabled").RoleSubscriptionSettingsDisabledContextProvider, obj2);
    return _handleCreateGroupAndTier(require("useEditStateContext").EditStateContextProvider, obj1);
  }
}
({ GuildRoleSubscriptionsTierScenes: closure_8, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_9 } = MAX_SUBSCRIPTION_TIERS);
GuildRoleSubscriptionGroupSetupModal.modalConfig = { closable: false };
const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx");

export default GuildRoleSubscriptionGroupSetupModal;
