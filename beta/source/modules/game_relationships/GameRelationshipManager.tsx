// Module ID: 14866
// Function ID: 14867
// Name: GameRelationshipManager
// Dependencies: [7931, 1078, 1986, 577, 7442, 2]

// Module 14866 (GameRelationshipManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7931 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;

const RelationshipTypes = fn(1078).RelationshipTypes;
class GameRelationshipManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      gameRelationships = gameRelationships.getGameRelationships();
      const set = new Set();
      const values = gameRelationships.values();
      const item = values.forEach((type) => {
        if (type.type === constants.PENDING_INCOMING) {
          set.add(type.applicationId);
        }
      });
      const applications = set(closure_1[4]).fetchApplications(Array.from(set));
    };
    return applyArgumentsResult;
  }
}
const prototype = GameRelationshipManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["destroy"] = function destroy() {
  DispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
const gameRelationshipManager = new GameRelationshipManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipManager.tsx");

export default gameRelationshipManager;
