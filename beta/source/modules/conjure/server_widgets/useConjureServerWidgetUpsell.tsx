// Module ID: 15211
// Function ID: 15212
// Name: useConjureServerWidgetUpsell
// Dependencies: [32, 19, 5041, 6932, 510, 15212, 504, 7424, 11752, 12574, 2]
// Exports: useConjureServerWidgetUpsellDetails, useConjureServerWidgetUpsellOffer

// Module 15211 (useConjureServerWidgetUpsell)
import Storage3 from "Storage" /* 510 */;
import useConjureServerWidgetOffersDefault from "useConjureServerWidgetOffers" /* 15212 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5041 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6932 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const conjureServerWidgetUpsellDismissals = "conjureServerWidgetUpsellDismissals";
let result = size.fileFinishedImporting("modules/conjure/server_widgets/useConjureServerWidgetUpsell.tsx");

export function useConjureServerWidgetUpsellOffer(userId) {
  let first;
  let guildId;
  let closure_0 = userId;
  const arr = useConjureServerWidgetOffersDefault();
  let tmp = guildId(react.useState(() => {
    const Storage = Storage3.Storage;
    const value = Storage.get(conjureServerWidgetUpsellDismissals);
    let items;
    const tmp = userId;
    if (value != null) {
      items = value[tmp];
    }
    if (items == null) {
      items = [];
    }
    return items;
  }), 2);
  [importDefault, dependencyMap] = tmp;
  const found = arr.find((guildId) => !importDefault.includes(guildId.guildId));
  guildId = undefined;
  if (found != null) {
    guildId = found.guildId;
  }
  if (found != null) {
    first = found.widgets[0];
  }
  let items = [userId, guildId];
  let tmp6 = null;
  if (null != guildId) {
    tmp6 = null;
    if (null != first) {
      let obj = { guildId, widget: first, dismiss: tmp5 };
      tmp6 = obj;
    }
  }
  return tmp6;
}
export function useConjureServerWidgetUpsellDetails(userId, widget, guildId) {
  let closure_2;
  let tmp8;
  _require = guildId;
  const applicationId = widget.applicationId;
  let obj = require("get initialized");
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj2 = require("useGetOrFetchApplications");
  const getOrFetchApplication = obj2.useGetOrFetchApplication(applicationId);
  const items1 = [ConjureProjectStore];
  const items2 = [applicationId];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const result = ConjureProjectStore.findProjectByApplicationId(applicationId);
    let owner_user_id;
    if (result != null) {
      owner_user_id = result.owner_user_id;
    }
    return owner_user_id;
  }, items2);
  const obj4 = require("conjureMessageAuthors");
  const messageAuthorUser = obj4.useMessageAuthorUser(stateFromStores1);
  const tmp5 = applicationId(12574)(userId, applicationId);
  dependencyMap = tmp5;
  [][0] = tmp5;
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (null != getOrFetchApplication) {
      const obj5 = { guild: stateFromStores, application: getOrFetchApplication, creator: tmp8, rendererProps: tmp6 };
      tmp8 = null;
      if (null != stateFromStores1) {
        tmp8 = messageAuthorUser;
      }
      tmp7 = obj5;
    }
  }
  return tmp7;
}
