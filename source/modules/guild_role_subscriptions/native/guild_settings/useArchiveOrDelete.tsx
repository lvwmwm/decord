// Module ID: 16479
// Function ID: 128379
// Name: useArchiveOrDelete
// Dependencies: [5, 57, 31, 14151, 14166, 1212, 4471, 1273, 44, 3830, 2]
// Exports: default

// Module 16479 (useArchiveOrDelete)
import getSystemLocale from "getSystemLocale";
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_6;
let closure_7;
const require = arg1;
({ useEffect: closure_6, useRef: closure_7 } = result);
result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx");

export default function useArchiveOrDelete(guildId, groupListingId, editStateId) {
  let closure_8;
  let closure_9;
  let error;
  let error2;
  let submitting;
  const _require = guildId;
  let closure_1 = groupListingId;
  const importAll = editStateId;
  const dependencyMap = arg3;
  function _handleArchiveOrDelete() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  let obj = _require(14151);
  const subscriptionListing = obj.useSubscriptionListing(editStateId);
  const removeEditStateId = importAll(14166).useEditStateIds(groupListingId, guildId).removeEditStateId;
  const obj2 = importAll(14166);
  const deleteSubscriptionListing = _require(14151).useDeleteSubscriptionListing();
  ({ error, deleteSubscriptionListing: closure_8, submitting } = deleteSubscriptionListing);
  const obj3 = _require(14151);
  const archiveSubscriptionListing = _require(14151).useArchiveSubscriptionListing();
  ({ error: error2, archiveSubscriptionListing: closure_9 } = archiveSubscriptionListing);
  let closure_10 = removeEditStateId(null);
  const obj4 = _require(14151);
  const first = callback(importAll(14166).useName(editStateId), 1)[0];
  let archived;
  if (null != subscriptionListing) {
    archived = subscriptionListing.archived;
  }
  let closure_11 = tmp6;
  let closure_12 = tmp7;
  if (null != error) {
    error2 = error;
  }
  if (true !== archived) {
    if (!tmp7) {
      let intl = _require(1212).intl;
      obj = { tierName: first };
      const intl2 = _require(1212).intl;
      const formatToPlainStringResult = intl.formatToPlainString(_require(1212).t.OuuIOY, obj);
      const intl3 = _require(1212).intl;
      const stringResult = intl2.string(_require(1212).t.RL0wjm);
      const intl4 = _require(1212).intl;
      let getSystemLocale = intl4.string(_require(1212).t.N5AIuE);
      const intl5 = _require(1212).intl;
      callback = intl5.string(_require(1212).t.TEKiiP);
      const intl6 = _require(1212).intl;
      let callback2 = intl6.string(_require(1212).t["170XOL"]);
      const items = [error2];
      callback2(() => {
        let tmp;
        if (ref.current !== error2) {
          tmp = error2;
        }
        if (null != tmp) {
          ref.current = tmp;
          const intl = guildId(1212).intl;
          editStateId(3830).presentFailedToast(intl.string(guildId(1212).t.R0RpRX));
          const obj = editStateId(3830);
        }
      }, items);
      obj = {
        headerText: formatToPlainStringResult,
        buttonText: stringResult,
        descriptionText: intl3.string(_require(1212).t["5/Jeg2"]),
        handleArchiveOrDelete() {
              return _handleArchiveOrDelete(...arguments);
            },
        deleting: submitting,
        archiving: archiveSubscriptionListing.submitting
      };
      return obj;
    }
  }
  const intl7 = _require(1212).intl;
  intl7.formatToPlainString(_require(1212).t.x2qwWL, { tierName: first });
  const intl8 = _require(1212).intl;
  intl8.string(_require(1212).t.GMtG6p);
  let intl9 = _require(1212).intl;
  let string = intl9.string;
  let t = _require(1212).t;
  if (undefined === subscriptionListing) {
    string(t.DHWKJS);
  } else {
    string(t.Y4KjUN);
  }
  const intl10 = _require(1212).intl;
  getSystemLocale = intl10.string(_require(1212).t["4H6RLl"]);
  const intl11 = _require(1212).intl;
  callback = intl11.string(_require(1212).t.uG6b1w);
  intl9 = _require(1212).intl;
  string = intl9.string;
  t = string(_require(1212).t.JoCdPC);
  callback2 = t;
};
