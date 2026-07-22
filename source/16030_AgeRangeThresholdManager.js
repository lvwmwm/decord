// Module ID: 16030
// Function ID: 123014
// Name: AgeRangeThresholdManager
// Dependencies: []

// Module 16030 (AgeRangeThresholdManager)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);

export const ageRangeThresholdManager = () => {
  class AgeRangeThresholdManager {
    constructor() {
      tmp = AgeRangeThresholdManager(this, AgeRangeThresholdManager);
      this.thresholds = null;
      return;
    }
  }
  let closure_0 = AgeRangeThresholdManager;
  let obj = {
    key: "setAgeRangeThresholds",
    value: function setAgeRangeThresholds(arg0) {
      if (undefined !== arg0[0]) {
        if (null !== arg0[0]) {
          if (arg0[0] >= 1) {
            if (arg0[0] <= 18) {
              let num = 1;
              if (1 < arg0.length) {
                while (true) {
                  let tmp = arg0[num];
                  let tmp2 = arg0[num - 1];
                  if (undefined !== tmp) {
                    if (undefined !== tmp2) {
                      if (tmp <= tmp2) {
                        break;
                      }
                    }
                  }
                  num = num + 1;
                }
                const _Error2 = Error;
                const error = new Error("PlayAgeRangeDeclaration: Age range thresholds must be in ascending order");
                throw error;
              }
              let num3 = 1;
              if (1 < arg0.length) {
                while (true) {
                  let tmp3 = arg0[num3];
                  let tmp4 = arg0[num3 - 1];
                  if (undefined !== tmp3) {
                    if (undefined !== tmp4) {
                      if (tmp3 - tmp4 < 2) {
                        break;
                      }
                    }
                  }
                  num3 = num3 + 1;
                }
                const _Error = Error;
                const error1 = new Error("PlayAgeRangeDeclaration: Age range thresholds must be at least 2 years apart");
                throw error1;
              }
              const items = [, , ];
              [arr[0], arr[1], arr[2]] = arg0;
              const self = this;
              this.thresholds = items;
            }
          }
          const _Error3 = Error;
          const error2 = new Error("PlayAgeRangeDeclaration: setAgeRangeThresholds: Age range thresholds must be between 1 and 18 (inclusive)");
          throw error2;
        }
      }
      const error3 = new Error("PlayAgeRangeDeclaration: First threshold age is required");
      throw error3;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getThresholds",
    value: function getThresholds() {
      if (null === this.thresholds) {
        const _Error = Error;
        const error = new Error("PlayAgeRangeDeclaration: ageRangeThresholds not set");
        throw error;
      } else {
        return tmp.thresholds;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getInstance",
    value: function getInstance() {
      if (!AgeRangeThresholdManager.instance) {
        const prototype = AgeRangeThresholdManager.prototype;
        const tmp4 = new AgeRangeThresholdManager();
        AgeRangeThresholdManager.instance = tmp4;
      }
      return AgeRangeThresholdManager.instance;
    }
  };
  const items1 = [obj];
  return callback(AgeRangeThresholdManager, items, items1);
}().getInstance();
