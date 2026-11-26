// Module ID: 15992
// Function ID: 15993
// Name: GameRelationshipManager
// Dependencies: [8321, 1071, 2122, 572, 6971, 2]

// Module 15992 (GameRelationshipManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import GameRelationshipStore from "GameRelationshipStore" /* 8321 */;
import LifecycleManager from "LifecycleManager" /* 2122 */;
import size from "module_2" /* 2 */;

let gameRelationships, set;

const RelationshipTypes = Constants.RelationshipTypes;
class GameRelationshipManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      gameRelationships = gameRelationships.getGameRelationships();
      set = new Set();
      const values = gameRelationships.values();
      const item = values.forEach((type) => {
        if (type.type === constants.PENDING_INCOMING) {
          set.add(type.applicationId);
        }
      });
      const obj2 = set(closure_1[4]);
      const applications = obj2.fetchApplications(Array.from(set));
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  }
  destroy() {
    const obj = DispatcherDefault;
    obj.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  }
}
const prototype = GameRelationshipManager.prototype;
const gameRelationshipManager = new GameRelationshipManager();
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipManager.tsx");

export default gameRelationshipManager;
