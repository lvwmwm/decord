// Module ID: 14422
// Function ID: 14423
// Name: _initialize
// Dependencies: [7412, 673, 4662, 706, 5962, 2]

// Module 14422 (_initialize)
import dispatcherDefault from "dispatcher" /* 706 */;
import initializeDefault from "initialize" /* 4662 */;
import closure_2 from "recountRelationshipTypes" /* 7412 */;
import { RelationshipTypes } from "ME" /* 673 */;

initializeDefault;
class GameRelationshipManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      gameRelationships = gameRelationships.getGameRelationships();
      const set = new Set();
      const values = gameRelationships.values();
      const item = values.forEach((type) => {
        if (type.type === closure_1_3.PENDING_INCOMING) {
          set.add(type.applicationId);
        }
      });
      const applications = set(table[4]).fetchApplications(Array.from(set));
    };
    return applyArgumentsResult;
  }
}
const prototype = GameRelationshipManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["destroy"] = function destroy() {
  dispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
const gameRelationshipManager = new GameRelationshipManager();
const result = require("set").fileFinishedImporting("modules/game_relationships/GameRelationshipManager.tsx");

export default gameRelationshipManager;
