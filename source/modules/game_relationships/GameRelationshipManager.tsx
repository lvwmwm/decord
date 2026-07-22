// Module ID: 13353
// Function ID: 101498
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13353 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const RelationshipTypes = arg1(dependencyMap[6]).RelationshipTypes;
let tmp2 = (arg0) => {
  class GameRelationshipManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, GameRelationshipManager);
      items1 = [...items];
      obj = closure_5(GameRelationshipManager);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.handlePostConnectionOpen = () => {
        const gameRelationships = gameRelationships.getGameRelationships();
        const set = new Set();
        const values = gameRelationships.values();
        const item = values.forEach((type) => {
          if (type.type === constants.PENDING_INCOMING) {
            set.add(type.applicationId);
          }
        });
        const applications = set(closure_1[7]).fetchApplications(Array.from(set));
      };
      return tmp2Result;
    }
  }
  const importDefault = GameRelationshipManager;
  callback2(GameRelationshipManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const subscription = GameRelationshipManager(closure_1[8]).subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "_terminate",
    value() {
      GameRelationshipManager(closure_1[8]).unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
  };
  items[1] = obj;
  obj = {
    key: "destroy",
    value() {
      GameRelationshipManager(closure_1[8]).unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
  };
  items[2] = obj;
  return callback(GameRelationshipManager, items);
}(importDefault(dependencyMap[9]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/game_relationships/GameRelationshipManager.tsx");

export default tmp2;
