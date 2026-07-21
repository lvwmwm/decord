// Module ID: 16342
// Function ID: 126090
// Name: _createGroupFromStore
// Dependencies: []

// Module 16342 (_createGroupFromStore)
function _createGroupFromStore() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _createGroupFromStore = obj;
  return obj(...arguments);
}
class GuildRoleSubscriptionGroupSetupModal {
  constructor(arg0) {
    obj = Object.create(null);
    obj.editStateId = 0;
    merged = Object.assign(global, obj);
    arg1 = merged;
    importDefault = undefined;
    closure_2 = undefined;
    dependencyMap = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    useRoleTierEditStore = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    _handleCreateGroupAndTier = function _handleCreateGroupAndTier(EditStateContextProvider, arg1) {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = _undefined(tmp);
      const _handleCreateGroupAndTier = obj;
      return obj(...arguments);
    };
    guildId = merged.guildId;
    importDefault = guildId;
    tmp3 = closure_4(closure_6.useState(), 2);
    closure_2 = tmp3[0];
    dependencyMap = tmp3[1];
    obj = arg1(dependencyMap[7]);
    closure_4 = obj.useCreateSubscriptionGroupListing().createSubscriptionGroupListing;
    obj2 = arg1(dependencyMap[7]);
    updateSubscriptionsSettings = obj2.useUpdateSubscriptionsSettings();
    ({ updateSubscriptionsSettings: closure_5, error } = updateSubscriptionsSettings);
    tmp5 = closure_4(closure_6.useState(global.editStateId), 2);
    first = tmp5[0];
    closure_6 = first;
    useRoleTierEditStore = tmp5[1];
    obj3 = closure_2(dependencyMap[8]);
    createOrUpdateListingFromEditState = obj3.useCreateOrUpdateListingFromEditState();
    ({ handleCreateOrUpdateFromEditState: closure_8, error: error2 } = createOrUpdateListingFromEditState);
    if (null != error) {
      error2 = error;
    }
    tmp8 = undefined;
    if (null != error2) {
      tmp8 = error2;
    }
    closure_9 = tmp8;
    items = [];
    items[0] = tmp8;
    effect = closure_6.useEffect(() => {
      if (null != tmp8) {
        let anyErrorMessage = tmp8.getAnyErrorMessage();
        if (null == anyErrorMessage) {
          const intl = merged(closure_3[10]).intl;
          anyErrorMessage = intl.string(merged(closure_3[10]).t.R0RpRX);
        }
        merged(closure_3[9]).presentError(anyErrorMessage);
        const obj = merged(closure_3[9]);
      }
    }, items);
    memo = closure_6.useMemo(() => {
      const items = [constants.GATING, constants.GROUP, constants.DETAILS, constants.CHANNEL_BENEFITS, constants.INTANGIBLE_BENEFITS, constants.DESIGN, { scene: constants.CONFIRMATION, extraProps: { isForGroupSetupModal: true } }];
      return items;
    }, []);
    closure_10 = memo;
    items1 = [];
    items1[0] = memo;
    memo1 = closure_6.useMemo(() => {
      let obj = {};
      obj = { impressionName: merged(closure_3[11]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING };
      obj[constants.GATING] = obj;
      obj = { impressionName: merged(closure_3[11]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP };
      obj[constants.DETAILS] = obj;
      return obj;
    }, []);
    callback = closure_6.useCallback((arg0) => {
      const merged = arg0;
      let obj = guildId(closure_3[12]);
      obj = { setup_modal_step: memo.findIndex((arg0) => arg0 === arg0) + 1 };
      obj.trackWithMetadata(memo.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj);
    }, items1);
    obj1 = { guildId, editStateId: first, groupListingId: null };
    obj2 = { guildId };
    obj3 = {};
    tmp13 = importDefault(dependencyMap[15]);
    merged1 = Object.assign(merged);
    obj3["modalKey"] = closure_9;
    obj3["onDone"] = function handleCreateGroupAndTier() {
      return _handleCreateGroupAndTier(...arguments);
    };
    obj3["steps"] = memo;
    obj3["onClose"] = callback;
    obj3["stepScreenPropsMap"] = memo1;
    obj2.children = _handleCreateGroupAndTier(tmp13, obj3);
    obj1.children = _handleCreateGroupAndTier(arg1(dependencyMap[14]).RoleSubscriptionSettingsDisabledContextProvider, obj2);
    return _handleCreateGroupAndTier(arg1(dependencyMap[13]).EditStateContextProvider, obj1);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const useRoleTierEditStore = arg1(dependencyMap[3]).useRoleTierEditStore;
({ GuildRoleSubscriptionsTierScenes: closure_8, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_9 } = arg1(dependencyMap[4]));
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const jsx = arg1(dependencyMap[6]).jsx;
GuildRoleSubscriptionGroupSetupModal.modalConfig = { closable: false };
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx");

export default GuildRoleSubscriptionGroupSetupModal;
