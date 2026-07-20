// Module ID: 16292
// Function ID: 125747
// Name: useArchiveOrDelete
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16292 (useArchiveOrDelete)
import closure_4 from "result";
import closure_5 from "result";
import result from "result";
import result from "result";

({ useEffect: closure_6, useRef: closure_7 } = result);
result = result.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx");

export default function useArchiveOrDelete(guildId, groupListingId, editStateId) {
  let error;
  let error2;
  let submitting;
  groupListingId = guildId;
  const importDefault = groupListingId;
  const importAll = editStateId;
  const dependencyMap = arg3;
  function _handleArchiveOrDelete() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleArchiveOrDelete = obj;
    return obj(...arguments);
  }
  let obj = groupListingId(dependencyMap[3]);
  const subscriptionListing = obj.useSubscriptionListing(editStateId);
  const removeEditStateId = importAll(dependencyMap[4]).useEditStateIds(groupListingId, guildId).removeEditStateId;
  const obj2 = importAll(dependencyMap[4]);
  const deleteSubscriptionListing = groupListingId(dependencyMap[3]).useDeleteSubscriptionListing();
  ({ error, deleteSubscriptionListing: closure_8, submitting } = deleteSubscriptionListing);
  const obj3 = groupListingId(dependencyMap[3]);
  const archiveSubscriptionListing = groupListingId(dependencyMap[3]).useArchiveSubscriptionListing();
  ({ error: error2, archiveSubscriptionListing: closure_9 } = archiveSubscriptionListing);
  let closure_10 = removeEditStateId(null);
  const obj4 = groupListingId(dependencyMap[3]);
  const first = callback(importAll(dependencyMap[4]).useName(editStateId), 1)[0];
  let archived;
  if (null != subscriptionListing) {
    archived = subscriptionListing.archived;
  }
  const tmp6 = true === archived;
  const tmp7 = undefined === subscriptionListing;
  if (null != error) {
    error2 = error;
  }
  if (!tmp6) {
    if (!tmp7) {
      const intl = groupListingId(dependencyMap[5]).intl;
      obj = { tierName: first };
      const intl2 = groupListingId(dependencyMap[5]).intl;
      const formatToPlainStringResult = intl.formatToPlainString(groupListingId(dependencyMap[5]).t.OuuIOY, obj);
      const intl3 = groupListingId(dependencyMap[5]).intl;
      const stringResult = intl2.string(groupListingId(dependencyMap[5]).t.RL0wjm);
      const intl4 = groupListingId(dependencyMap[5]).intl;
      let closure_4 = intl4.string(groupListingId(dependencyMap[5]).t.N5AIuE);
      const intl5 = groupListingId(dependencyMap[5]).intl;
      let callback = intl5.string(groupListingId(dependencyMap[5]).t.TEKiiP);
      const intl6 = groupListingId(dependencyMap[5]).intl;
      let t = intl6.string(groupListingId(dependencyMap[5]).t.170XOL);
      const items = [error2];
      t(() => {
        let tmp;
        if (ref.current !== error2) {
          tmp = error2;
        }
        if (null != tmp) {
          ref.current = tmp;
          const intl = arg0(arg3[5]).intl;
          arg2(arg3[9]).presentFailedToast(intl.string(arg0(arg3[5]).t.R0RpRX));
          const obj = arg2(arg3[9]);
        }
      }, items);
      obj = {
        headerText: formatToPlainStringResult,
        buttonText: stringResult,
        descriptionText: intl3.string(groupListingId(dependencyMap[5]).t.5/Jeg2),
        handleArchiveOrDelete() {
              return _handleArchiveOrDelete(...arguments);
            },
        deleting: submitting,
        archiving: archiveSubscriptionListing.submitting
      };
      return obj;
    }
  }
  const intl7 = groupListingId(dependencyMap[5]).intl;
  intl7.formatToPlainString(groupListingId(dependencyMap[5]).t.x2qwWL, { tierName: first });
  const intl8 = groupListingId(dependencyMap[5]).intl;
  intl8.string(groupListingId(dependencyMap[5]).t.GMtG6p);
  let intl9 = groupListingId(dependencyMap[5]).intl;
  let string = intl9.string;
  t = groupListingId(dependencyMap[5]).t;
  if (tmp7) {
    string(t.DHWKJS);
  } else {
    string(t.Y4KjUN);
  }
  const intl10 = groupListingId(dependencyMap[5]).intl;
  closure_4 = intl10.string(groupListingId(dependencyMap[5]).t.4H6RLl);
  const intl11 = groupListingId(dependencyMap[5]).intl;
  callback = intl11.string(groupListingId(dependencyMap[5]).t.uG6b1w);
  intl9 = groupListingId(dependencyMap[5]).intl;
  string = intl9.string;
  t = string(groupListingId(dependencyMap[5]).t.JoCdPC);
};
