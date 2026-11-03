// Module ID: 16549
// Function ID: 16550
// Name: GameRelationshipManager
// Dependencies: [7924, 1072, 2125, 572, 7001, 2]

// Module 16549 (GameRelationshipManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7924 */;
import LifecycleManager from "LifecycleManager" /* 2125 */;
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
