// Module ID: 17565
// Function ID: 17566
// Name: useArchiveOrDelete
// Dependencies: [5, 32, 19, 14757, 14772, 1115, 5204, 1177, 38, 4527, 2]
// Exports: default

// Module 17565 (useArchiveOrDelete)
import intl13 from "intl" /* 1115 */;
import ToastUtilsAll from "ToastUtils" /* 4527 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14772 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, closure_12, dependencyMap, importAll;

let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: metroRequire, useRef: metroImportDefault } = react);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx");

export default function useArchiveOrDelete(guildId, groupListingId, editStateId, arg3) {
  let closure_3;
  let closure_5;
  let closure_8;
  let error;
  let error2;
  let stringResult3;
  let submitting;
  let submitting2;
  _require = guildId;
  let closure_1 = groupListingId;
  importAll = editStateId;
  dependencyMap = arg3;
  let obj = function _handleArchiveOrDelete() {
    let body;
    let confirmText;
    let title;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let v2;
      if (c2 === 2) {
        c2 = 3;
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
              const obj4 = { title, body, confirmText, confirmColor: tmp(closure_1_3[7]).ButtonColors.RED };
              const _confirm = c1(closure_1_3[6]).confirm;
              const tmp39 = c1(closure_1_3[6]);
              c1 = 1;
              c2 = 1;
              const obj5 = { value: _confirm(obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else if (value) {
                const tmp9 = closure_128_12;
                if (tmp9) {
                  closure_128_7(closure_128_2);
                  if (null != closure_128_3) {
                    closure_128_3.goBack();
                  }
                } else {
                  c1(closure_1_3[8])(null != closure_128_1, "group listing id cannot be null");
                  if (closure_128_11) {
                    c1 = 3;
                    c2 = 1;
                    const obj7 = { value: closure_128_8(closure_128_0, closure_128_1, closure_128_2), done: false };
                    return obj7;
                  } else {
                    c1 = 2;
                    c2 = 1;
                    const obj8 = { value: closure_128_9(closure_128_0, closure_128_1, closure_128_2), done: false };
                    return obj8;
                  }
                }
              }
            } else if (2 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else if (null != closure_128_3) {
              closure_128_3.goBack();
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp30) {
          c2 = 3;
          throw tmp30;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = _require;
  let tmp2 = dependencyMap;
  obj = require("GuildRoleSubscriptionsHooks");
  const subscriptionListing = obj.useSubscriptionListing(editStateId);
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const removeEditStateId = obj2.useEditStateIds(groupListingId, guildId).removeEditStateId;
  let obj3 = require("GuildRoleSubscriptionsHooks");
  const deleteSubscriptionListing = obj3.useDeleteSubscriptionListing();
  ({ error, deleteSubscriptionListing: closure_8, submitting } = deleteSubscriptionListing);
  let obj4 = require("GuildRoleSubscriptionsHooks");
  let archiveSubscriptionListing = obj4.useArchiveSubscriptionListing();
  archiveSubscriptionListing = archiveSubscriptionListing.archiveSubscriptionListing;
  ({ submitting: submitting2, error: error2 } = archiveSubscriptionListing);
  const ref = removeEditStateId(null);
  let obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj5.useName(editStateId), 1)[0];
  let archived;
  if (subscriptionListing != null) {
    archived = subscriptionListing.archived;
  }
  let closure_11 = tmp8;
  let tmp9 = undefined === subscriptionListing;
  closure_12 = tmp9;
  if (error == null) {
    error = error2;
  }
  if (true !== archived) {
    let formatToPlainStringResult;
    let stringResult;
    let stringResult1;
    let closure_6;
    if (!tmp9) {
      let intl = tmp(1115).intl;
      let obj6 = { tierName: first };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1115).t.OuuIOY, obj6);
      const intl2 = tmp(1115).intl;
      stringResult = intl2.string(tmp(1115).t.RL0wjm);
      const intl3 = tmp(1115).intl;
      stringResult1 = intl3.string(tmp(1115).t["5/Jeg2"]);
      const intl4 = tmp(1115).intl;
      let closure_4 = intl4.string(tmp(1115).t.N5AIuE);
      const intl5 = tmp(1115).intl;
      _slicedToArray = intl5.string(tmp(1115).t.TEKiiP);
      const intl6 = tmp(1115).intl;
      closure_6 = intl6.string(tmp(1115).t["170XOL"]);
    }
    const items = [error];
    closure_6(() => {
      let tmp2;
      const tmp = ref;
      if (ref.current !== error) {
        tmp2 = error;
      }
      if (null != tmp2) {
        tmp.current = tmp2;
        const presentFailedToast = ToastUtilsAll.presentFailedToast;
        ToastUtilsAll;
        const intl = intl13.intl;
        presentFailedToast(intl.string(intl13.t.R0RpRX));
      }
    }, items);
    let obj7 = {
      headerText: formatToPlainStringResult,
      buttonText: stringResult,
      descriptionText: stringResult1,
      handleArchiveOrDelete() {
          return obj(...arguments);
        },
      deleting: submitting,
      archiving: submitting2
    };
    return obj7;
  }
  const intl7 = tmp(1115).intl;
  const formatToPlainStringResult1 = intl7.formatToPlainString(tmp(1115).t.x2qwWL, { tierName: first });
  const intl8 = tmp(1115).intl;
  const stringResult2 = intl8.string(tmp(1115).t.GMtG6p);
  const intl9 = tmp(1115).intl;
  const string = intl9.string;
  const t = tmp(1115).t;
  if (tmp9) {
    stringResult3 = string(t.DHWKJS);
  } else {
    stringResult3 = string(t.Y4KjUN);
  }
  const intl10 = tmp(1115).intl;
  closure_4 = intl10.string(tmp(1115).t["4H6RLl"]);
  const intl11 = tmp(1115).intl;
  _slicedToArray = intl11.string(tmp(1115).t.uG6b1w);
  const intl12 = tmp(1115).intl;
  closure_6 = intl12.string(tmp(1115).t.JoCdPC);
  stringResult1 = stringResult3;
  stringResult = stringResult2;
  formatToPlainStringResult = formatToPlainStringResult1;
};
