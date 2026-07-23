// Module ID: 16435
// Function ID: 128068
// Name: GuildRoleSubscriptionTierCreationModal
// Dependencies: [5, 57, 31, 16424, 14094, 33, 14116, 3830, 1212, 16436, 16419, 16437, 2]
// Exports: default

// Module 16435 (GuildRoleSubscriptionTierCreationModal)
import jsxProd from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import { jsx } from "jsxProd";

let closure_8;
let closure_9;
const require = arg1;
({ GuildRoleSubscriptionsTierScenes: closure_8, GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: closure_9 } = MAX_SUBSCRIPTION_TIERS);
const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx");

export default function GuildRoleSubscriptionTierCreationModal(guildId) {
  let c6;
  let dependencyMap;
  let error;
  let importAll;
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  ({ onClose: importAll, onAfterTierCreation: dependencyMap } = guildId);
  let first;
  let callback;
  let React;
  function _handleCreate() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first(tmp);
    return obj(...arguments);
  }
  const tmp = callback(React.useState(guildId.editStateId), 2);
  first = tmp[0];
  callback = tmp[1];
  let obj = importAll(14116);
  const createOrUpdateListingFromEditState = obj.useCreateOrUpdateListingFromEditState();
  ({ handleCreateOrUpdateFromEditState: c6, error } = createOrUpdateListingFromEditState);
  let items = [error];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (null == anyErrorMessage) {
        const intl = guildId(outer1_3[8]).intl;
        anyErrorMessage = intl.string(guildId(outer1_3[8]).t.R0RpRX);
      }
      guildId(outer1_3[7]).presentError(anyErrorMessage);
      const obj = guildId(outer1_3[7]);
    }
  }, items);
  const memo = React.useMemo(() => {
    const items = [, , , , ];
    ({ DETAILS: arr[0], CHANNEL_BENEFITS: arr[1], INTANGIBLE_BENEFITS: arr[2], DESIGN: arr[3], CONFIRMATION: arr[4] } = _handleCreate);
    return items;
  }, []);
  obj = { guildId, editStateId: first, groupListingId };
  obj = {
    guildId,
    children: jsx(groupListingId(16437), {
      guildId,
      modalKey: closure_9,
      onDone: function handleCreate() {
        return _handleCreate(...arguments);
      },
      steps: memo
    })
  };
  obj.children = jsx(guildId(16419).RoleSubscriptionSettingsDisabledContextProvider, {
    guildId,
    children: jsx(groupListingId(16437), {
      guildId,
      modalKey: closure_9,
      onDone: function handleCreate() {
        return _handleCreate(...arguments);
      },
      steps: memo
    })
  });
  return jsx(guildId(16436).EditStateContextProvider, {
    guildId,
    children: jsx(groupListingId(16437), {
      guildId,
      modalKey: closure_9,
      onDone: function handleCreate() {
        return _handleCreate(...arguments);
      },
      steps: memo
    })
  });
};
