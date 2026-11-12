// Module ID: 16280
// Function ID: 16281
// Name: useLinkedGameOrganization
// Dependencies: [5114, 16281, 1072, 1089, 504, 16282, 2]

// Module 16280 (useLinkedGameOrganization)
import Constants from "Constants" /* 1072 */;
import DurationsDefault from "Durations" /* 1089 */;
import GameOrganizationActionCreators from "GameOrganizationActionCreators" /* 16282 */;
import GuildStore from "GuildStore" /* 5114 */;
import GameOrganizationStore from "GameOrganizationStore" /* 16281 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

const QueryIds = Constants.QueryIds;
const result = 5 * DurationsDefault.Seconds.MINUTE;
const result1 = 15 * DurationsDefault.Seconds.SECOND;
let obj = {
  getQueryId: QueryIds.GAME_ORGANIZATION,
  get(arg0) {
    return GameOrganizationStore.getGameOrganizationByGuildId(arg0);
  },
  load(arg0) {
    const guild = GuildStore.getGuild(arg0);
    if (null != guild) {
      let gameOrganization;
      if (null != guild.linkedGameOrganization) {
        const obj = GameOrganizationActionCreators;
        gameOrganization = obj.fetchGameOrganization(arg0);
      }
      return gameOrganization;
    }
    gameOrganization = Promise.resolve(undefined);
  },
  getIsLoading(arg0) {
    return GameOrganizationStore.isLoadingForGuild(arg0);
  },
  getError(arg0) {
    return GameOrganizationStore.getErrorForGuild(arg0);
  },
  staleAfter: result,
  failureStaleAfter: result1
};
const fetchStore = get_initialized.createFetchStore(GameOrganizationStore, obj);
const result2 = size.fileFinishedImporting("modules/game_organizations/useLinkedGameOrganization.tsx");

export const useLinkedGameOrganization = fetchStore;
