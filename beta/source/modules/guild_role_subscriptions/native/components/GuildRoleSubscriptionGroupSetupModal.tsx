// Module ID: 17600
// Function ID: 17601
// Name: GuildRoleSubscriptionGroupSetupModal
// Dependencies: [32, 5, 19, 17557, 14750, 1074, 21, 14757, 14772, 4527, 1115, 1249, 5016, 17569, 17552, 17570, 2]

// Module 17600 (GuildRoleSubscriptionGroupSetupModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14772 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17557 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import size from "module_2" /* 2 */;

let c4, c6, constants, dependencyMap, importAll, state;

let c9;
let metroImportAll;
let obj = function _createGroupFromStore() {
  obj = _asyncToGenerator(async (arg0, value, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let id;
        let groupCover;
        let groupDescription;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp3;
            closure_1 = closure_2;
            closure_2 = closure_3;
            id = undefined;
            state = state.getState();
            groupCover = state.groupCover;
            groupDescription = state.groupDescription;
            const tmp21 = closure_0;
            const tmp22 = closure_1;
            if (null != groupCover) {
              const obj4 = { description: groupDescription };
              c5 = 1;
              c6 = 1;
              const obj5 = { value: tmp22(tmp21, obj4), done: false };
              return obj5;
            }
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            id = value;
            if (null != id) {
              const obj7 = { cover_image: groupCover.uri, description: groupDescription };
              c5 = 2;
              c6 = 1;
              const obj8 = { value: closure_1(closure_0, obj7), done: false };
              return obj8;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_2(id);
          c6 = 3;
          obj = { value: id.id, done: true };
          return obj;
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp12) {
        c6 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
class GuildRoleSubscriptionGroupSetupModal {
  constructor(editStateId) {
    let RoleSubscriptionSettingsDisabledContextProvider;
    let _undefined;
    let c2;
    let c3;
    let c5;
    let closure_4;
    let closure_7;
    let error;
    let obj6;
    let obj7;
    let tmp13;
    editStateId = editStateId.editStateId;
    const merged = Object.assign(editStateId, Object.assign({ editStateId: 0 }));
    importAll = undefined;
    dependencyMap = undefined;
    _slicedToArray = undefined;
    c5 = undefined;
    editStateId = undefined;
    closure_7 = undefined;
    error = undefined;
    let memo;
    obj = function _handleCreateGroupAndTier() {
      obj = _asyncToGenerator(async (arg0, value) => {
        function createGroupFromStore() {
          return closure_1_12(...arguments);
        }
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let closure_3;
            let groupListingId;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_3 = tmp4;
                let closure_2 = tmp;
                groupListingId = undefined;
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                if (id == null) {
                  c4 = 1;
                  c5 = 1;
                  const obj4 = { value: createGroupFromStore(guildId, closure_2_4, closure_2_5, _undefined), done: false };
                  return obj4;
                }
              }
            } else {
              if (1 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  id = value;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else if (value) {
                closure_131_0.onClose();
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            groupListingId = id;
            if (null != groupListingId) {
              if (null != closure_131_9) {
                const presentError = id(closure_3[9]).presentError;
                const tmp40 = id(closure_3[9]);
                const anyErrorMessage = closure_131_9.getAnyErrorMessage();
                let closure_1 = anyErrorMessage;
                if (anyErrorMessage == null) {
                  const intl = id(closure_3[10]).intl;
                  closure_1 = intl.string(id(closure_3[10]).t.ZUEGFn);
                }
                presentError(closure_1);
              }
              const obj6 = {
                guildId: closure_131_1,
                editStateId: closure_131_6,
                groupListingId,
                onBeforeDispatchNewListing(id) {
                        return closure_1_7(id.id);
                      }
              };
              c4 = 2;
              c5 = 1;
              const obj7 = { value: closure_131_8(obj6), done: false };
              return obj7;
            }
          } catch (tmp32) {
            c5 = 3;
            throw tmp32;
          }
        }
      });
      return obj(...arguments);
    };
    const guildId = merged.guildId;
    obj = editStateId;
    [c2, c3] = _slicedToArray(editStateId.useState(), 2);
    const tmp3 = merged;
    const tmp4 = dependencyMap;
    const tmp2 = _slicedToArray(editStateId.useState(), 2);
    let obj2 = merged(14757);
    _slicedToArray = obj2.useCreateSubscriptionGroupListing().createSubscriptionGroupListing;
    let obj3 = merged(14757);
    const updateSubscriptionsSettings = obj3.useUpdateSubscriptionsSettings();
    ({ updateSubscriptionsSettings: c5, error } = updateSubscriptionsSettings);
    [editStateId, closure_7] = editStateId.useState(editStateId);
    let obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
    const createOrUpdateListingFromEditState = obj4.useCreateOrUpdateListingFromEditState();
    constants = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
    if (error == null) {
      error = createOrUpdateListingFromEditState.error;
    }
    let items = [error];
    const effect = obj.useEffect(() => {
      obj = error;
      if (null != error) {
        const presentError = ToastUtils.presentError;
        ToastUtils;
        let anyErrorMessage = obj.getAnyErrorMessage();
        if (anyErrorMessage == null) {
          const intl = tmp(1115).intl;
          anyErrorMessage = intl.string(tmp(1115).t.R0RpRX);
        }
        presentError(anyErrorMessage);
      }
    }, items);
    memo = obj.useMemo(() => {
      const items = [, , , , , , ];
      ({ GATING: arr[0], GROUP: arr[1], DETAILS: arr[2], CHANNEL_BENEFITS: arr[3], INTANGIBLE_BENEFITS: arr[4], DESIGN: arr[5] } = constants);
      items[6] = { scene: constants.CONFIRMATION, extraProps: { isForGroupSetupModal: true } };
      return items;
    }, []);
    const items1 = [memo];
    const memo1 = obj.useMemo(() => {
      obj = {};
      obj[constants.GATING] = { impressionName: merged(c3[11]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING };
      ({ impressionName: merged(c3[11]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING });
      obj[constants.DETAILS] = { impressionName: merged(c3[11]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP };
      ({ impressionName: merged(c3[11]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP });
      return obj;
    }, []);
    const callback = obj.useCallback((arg0) => {
      let closure_0 = arg0;
      const findIndexResult = memo.findIndex((item) => item === closure_0);
      obj = AppAnalyticsUtilsDefault;
      const obj2 = { setup_modal_step: findIndexResult + 1 };
      obj.trackWithMetadata(AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj2);
    }, items1);
    let obj5 = { guildId, editStateId, groupListingId: null, children: memo(RoleSubscriptionSettingsDisabledContextProvider, obj6) };
    const EditStateContextProvider = tmp3(17569).EditStateContextProvider;
    obj6 = { guildId, children: memo(tmp13, obj7) };
    RoleSubscriptionSettingsDisabledContextProvider = tmp3(17552).RoleSubscriptionSettingsDisabledContextProvider;
    obj7 = {
      modalKey: error,
      onDone: function handleCreateGroupAndTier() {
        return obj(...arguments);
      },
      steps: memo,
      onClose: callback,
      stepScreenPropsMap: memo1
    };
    tmp13 = guildId(17570);
    const merged1 = Object.assign(merged);
    return memo(EditStateContextProvider, obj5);
  }
}
let _slicedToArray = _slicedToArray_mod;
const useRoleTierEditStore = RoleTierEditStore.useRoleTierEditStore;
({ GuildRoleSubscriptionsTierScenes: metroImportAll, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: c9 } = GuildRoleSubscriptionsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
GuildRoleSubscriptionGroupSetupModal.modalConfig = { closable: false };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx");

export default GuildRoleSubscriptionGroupSetupModal;
