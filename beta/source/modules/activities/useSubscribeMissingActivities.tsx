// Module ID: 11008
// Function ID: 11009
// Name: useSubscribeMissingActivities
// Dependencies: [32, 19, 11009, 4876, 504, 11011, 2]
// Exports: default

// Module 11008 (useSubscribeMissingActivities)
import PresenceSubscriptionsActionCreators from "PresenceSubscriptionsActionCreators" /* 11011 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PresenceSubscriptionsStore from "PresenceSubscriptionsStore" /* 11009 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, application, application_id, closure_0;

let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
const result = size.fileFinishedImporting("modules/activities/useSubscribeMissingActivities.tsx");

export default function useSubscribeMissingActivities(arg0, arg1) {
  let first;
  let tmp3;
  _require = arg0;
  let closure_1 = arg1;
  let items = [arg0, arg1];
  [first, tmp3] = react.useMemo(() => {
    let items1;
    const arr = closure_0;
    if (_private.isPrivate()) {
      const found = arr.filter((application) => {
        application = application.application;
        let id;
        if (application != null) {
          id = application.id;
        }
        let tmp2 = null != id;
        if (tmp2) {
          const activity = application.activity;
          let party_id;
          if (activity != null) {
            party_id = activity.party_id;
          }
          tmp2 = null != party_id;
        }
        return tmp2;
      });
      const items = [found, found.map((id) => id.id)];
      items1 = items;
    } else {
      items1 = [closure_2_8, ];
      let tmp2 = closure_2_7;
      items1[1] = closure_2_7;
    }
    return items1;
  }, items);
  let obj = require("get initialized");
  let items1 = [PresenceStore];
  const items2 = [first];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => {
    const items = [];
    const item = first.forEach((author) => {
      closure_0 = author;
      if (null != closure_2_5.findActivity(author.author.id, (application_id) => {
        application = application.application;
        let id;
        application_id = application_id.application_id;
        const tmp = application;
        if (application != null) {
          id = application.id;
        }
        let tmp3 = application_id === id;
        if (tmp3) {
          const party = application_id.party;
          let id1;
          if (party != null) {
            id1 = party.id;
          }
          const activity = tmp.activity;
          let party_id;
          if (activity != null) {
            party_id = activity.party_id;
          }
          tmp3 = id1 === party_id;
        }
        return tmp3;
      }, null, true)) {
        let tmp = items;
        items.push(author.id);
      }
    });
    return items;
  }, items2);
  const items3 = [first, stateFromStoresArray];
  const items4 = [
    tmp3,
    react.useMemo(() => {
      let items;
      closure_0 = stateFromStoresArray;
      const arr = first;
      if (0 === first.length) {
        items = closure_2_6;
      } else {
        items = [];
        const item = arr.forEach((application) => {
          let id;
          let party_id;
          application = application.application;
          if (application != null) {
            id = application.id;
          }
          const activity = application.activity;
          if (activity != null) {
            party_id = activity.party_id;
          }
          if (!(application.id in closure_0)) {
            if (null != id) {
              if (null != party_id) {
                const timestamp = application.timestamp;
                const obj = { userId: application.author.id, applicationId: id, partyId: party_id, messageId: null, channelId: null, inviteTime: timestamp.getTime() };
                ({ id: obj.messageId, channel_id: obj.channelId } = application);
                items.push(obj);
              }
            }
          }
        });
      }
      return items;
    }, items3)
  ];
  let tmp5 = _slicedToArray(items4, 2);
  _require = tmp7;
  const items5 = [tmp5[1]];
  const first1 = tmp5[0];
  const effect = react.useEffect(() => {
    for (const item10006 of closure_0) {
      let tmp = item10006;
      if (!PresenceSubscriptionsStore.isSubscribed(item10006)) {
        let obj = PresenceSubscriptionsActionCreators;
        let subscription = obj.subscribe(tmp);
      }
      continue;
    }
  }, items5);
  const items6 = [first1, tmp5[1]];
  return items6;
};
