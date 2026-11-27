// Module ID: 20082
// Function ID: 20083
// Name: useAddCommandPermissions
// Dependencies: [32, 19, 7073, 20083, 5695, 20085, 8185, 6991, 2]
// Exports: default, useCommandPermissionChannelSearch, useCommandPermissionMemberRoleSearch

// Module 20082 (useAddCommandPermissions)
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6991 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 7073 */;
import IntegrationPermissionUtils from "IntegrationPermissionUtils" /* 8185 */;
import useIntegrationPermissionChannelSearch from "useIntegrationPermissionChannelSearch" /* 20083 */;
import useIntegrationPermissionMemberSearch from "useIntegrationPermissionMemberSearch" /* 20085 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let includes, results;

let closure_5 = ApplicationCommandConstants.APPLICATION_COMMAND_PERMISSIONS_LIMIT;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useAddCommandPermissions.tsx");

export default function useAddCommandPermissions(editPermissions) {
  let search;
  let selectedPermissionCount;
  editPermissions = editPermissions.editPermissions;
  const guildId = editPermissions.guildId;
  const hasMemberSearch = editPermissions.hasMemberSearch;
  const overwrittenKeys = editPermissions.overwrittenKeys;
  let first;
  ({ search, selectedPermissionCount } = editPermissions);
  let tmp = overwrittenKeys(first.useState(null), 2);
  first = tmp[0];
  const tmp3 = tmp[1];
  closure_5 = tmp3;
  const searchResult = search(guildId);
  results = searchResult.results;
  const setQuery = searchResult.setQuery;
  let query = searchResult.query;
  let tmp5 = overwrittenKeys(first.useState({}), 2);
  const first1 = tmp5[0];
  let closure_9 = tmp7;
  const items = [first1];
  const newSelectedOverwriteCount = first.useMemo(() => Object.keys(first1).length, items);
  const maximumPermissionsSelected = newSelectedOverwriteCount + selectedPermissionCount >= closure_5;
  const items1 = [overwrittenKeys, results];
  const items2 = [maximumPermissionsSelected, tmp5[1]];
  const items3 = [first1];
  const filteredResults = first.useMemo(() => results.filter((id) => {
    includes = includes.includes;
    const obj = editPermissions(hasMemberSearch[6]);
    return !includes(obj.toPermissionKey(id.id, id.type));
  }), items1);
  const onSelect = first.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let tmp = closure_9((arg0) => {
      const obj = IntegrationPermissionUtils;
      const toPermissionKeyResult = obj.toPermissionKey(closure_0, closure_1);
      const obj3 = {};
      const merged = Object.assign(arg0);
      const tmp = closure_0;
      const tmp2 = closure_1;
      if (toPermissionKeyResult in arg0) {
        delete obj2[tmp3];
      } else {
        const tmp5 = maximumPermissionsSelected;
        if (!tmp5) {
          const obj5 = { id: tmp, permission: true, type: tmp2 };
          obj3[toPermissionKeyResult] = obj5;
        }
      }
      return obj3;
    });
  }, items2);
  const items4 = [editPermissions, first1];
  const isSelected = first.useCallback((id, CHANNEL) => {
    const obj = IntegrationPermissionUtils;
    return obj.toPermissionKey(id, CHANNEL) in first1;
  }, items3);
  const items5 = [first];
  const submit = first.useCallback(() => {
    editPermissions(first1, []);
  }, items4);
  const effect = first.useEffect(() => () => clearTimeout(first), items5);
  const items6 = [guildId, hasMemberSearch, setQuery, tmp3];
  const items7 = [guildId];
  const setSearchQuery = first.useCallback((query) => {
    setQuery(query);
    const tmp2 = hasMemberSearch;
    if (tmp2) {
      closure_5((arg0) => {
        clearTimeout(arg0);
        let timerId = null;
        if (0 !== query.length) {
          const _setTimeout = setTimeout;
          timerId = setTimeout(() => {
            const obj = guildId(hasMemberSearch[7]);
            const members = obj.requestMembers(closure_2_1, query, 200, false);
          }, 500);
        }
        return timerId;
      });
    }
  }, items6);
  const effect1 = first.useEffect(() => {
    const obj = GuildActionCreatorsDefault;
    const members = obj.requestMembers(guildId, undefined, 200, false);
  }, items7);
  return { query, setQuery, setSearchQuery, filteredResults, onSelect, isSelected, submit, newSelectedOverwriteCount, maximumPermissionsSelected };
};
export function useCommandPermissionChannelSearch(arg0) {
  let obj = useIntegrationPermissionChannelSearch;
  const integrationPermissionChannelSearch = obj.useIntegrationPermissionChannelSearch(arg0);
  const obj2 = {
    results: results.map((item) => {
      const obj = { type: ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL };
      const merged = Object.assign(item);
      return obj;
    })
  };
  let merged = Object.assign(integrationPermissionChannelSearch);
  results = integrationPermissionChannelSearch.results;
  return obj2;
}
export function useCommandPermissionMemberRoleSearch(arg0) {
  let mapped;
  let members;
  let obj = useIntegrationPermissionMemberSearch;
  const integrationPermissionMemberSearch = obj.useIntegrationPermissionMemberSearch(arg0);
  const obj2 = {
    results: mapped.concat(members.map((item) => {
      const obj = { type: ApplicationCommandTypes.ApplicationCommandPermissionType.USER };
      const merged = Object.assign(item);
      return obj;
    }))
  };
  let merged = Object.assign(integrationPermissionMemberSearch);
  const roles = integrationPermissionMemberSearch.results.roles;
  mapped = roles.map((item) => {
    const obj = { type: ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE };
    const merged = Object.assign(item);
    return obj;
  });
  members = integrationPermissionMemberSearch.results.members;
  return obj2;
}
