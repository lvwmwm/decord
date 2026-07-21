// Module ID: 7917
// Function ID: 63109
// Name: Future
// Dependencies: []

// Module 7917 (Future)
let closure_0 = importDefault(dependencyMap[1]);
class Future {
  constructor() {
    closure_0 = this;
    tmp = closure_0(this, Future);
    promise = new Promise((resolve, reject) => {
      self.resolve = resolve;
      self.reject = reject;
    });
    this.promise = promise;
    return;
  }
}
const importDefaultResult = importDefault(dependencyMap[0]);
const importDefaultResultResult = importDefault(dependencyMap[0])(Future);
const result = arg1(dependencyMap[2]).fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export const Future = importDefaultResultResult;
