// Module ID: 19952
// Function ID: 19953
// Name: GuildRoleSubscriptionTierCreationModal
// Dependencies: [5, 32, 19, 19942, 17183, 21, 17203, 5711, 1113, 19953, 19938, 19954, 2]
// Exports: default

// Module 19952 (GuildRoleSubscriptionTierCreationModal)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17203 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19942 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17183 */;
import size from "module_2" /* 2 */;

let c1, c2;

let c9;
let metroImportAll;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ GuildRoleSubscriptionsTierScenes: metroImportAll, GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: c9 } = GuildRoleSubscriptionsConstants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx");

export default function GuildRoleSubscriptionTierCreationModal(guildId) {
  let _undefined;
  let c6;
  let closure_5;
  let editStateId;
  let error;
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  ({ onClose: importAll, onAfterTierCreation: dependencyMap } = guildId);
  editStateId = undefined;
  _slicedToArray = undefined;
  react = undefined;
  error = undefined;
  let obj = function _handleCreate() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp3;
              const obj4 = {
                guildId,
                editStateId,
                groupListingId,
                onBeforeDispatchNewListing(id) {
                          return closure_1_5(id.id);
                        }
              };
              c1 = 1;
              c2 = 1;
              const obj5 = { value: _undefined(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              error.resetImperatively();
              closure_128_2();
              closure_128_3();
            }
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp15) {
          c2 = 3;
          throw tmp15;
        }
      }
    });
    return obj(...arguments);
  };
  [editStateId, _slicedToArray] = react.useState(guildId.editStateId);
  obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const createOrUpdateListingFromEditState = obj.useCreateOrUpdateListingFromEditState();
  ({ handleCreateOrUpdateFromEditState: c6, error } = createOrUpdateListingFromEditState);
  let items = [error];
  const layoutEffect = react.useLayoutEffect(() => {
    obj = error;
    if (null != error) {
      const presentError = ToastUtils.presentError;
      ToastUtils;
      let anyErrorMessage = obj.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = tmp(1113).intl;
        anyErrorMessage = intl.string(tmp(1113).t.R0RpRX);
      }
      presentError(anyErrorMessage);
    }
  }, items);
  const memo = react.useMemo(() => {
    const items = [, , , , ];
    ({ DETAILS: arr[0], CHANNEL_BENEFITS: arr[1], INTANGIBLE_BENEFITS: arr[2], DESIGN: arr[3], CONFIRMATION: arr[4] } = obj);
    return items;
  }, []);
  const EditStateContextProvider = guildId(19953).EditStateContextProvider;
  let obj3 = { guildId, children: null };
  const RoleSubscriptionSettingsDisabledContextProvider = guildId(19938).RoleSubscriptionSettingsDisabledContextProvider;
  let obj4 = {
    guildId,
    modalKey,
    onDone: function handleCreate() {
      return obj(...arguments);
    },
    steps: memo
  };
  return <EditStateContextProvider guildId={guildId} editStateId={editStateId} groupListingId={groupListingId}>{null}</EditStateContextProvider>;
};
