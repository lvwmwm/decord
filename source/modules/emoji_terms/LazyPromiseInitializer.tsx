// Module ID: 5271
// Function ID: 44821
// Name: LazyPromiseInitializer
// Dependencies: []

// Module 5271 (LazyPromiseInitializer)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class LazyPromiseInitializer {
    constructor(arg0) {
      tmp = LazyPromiseInitializer(this, LazyPromiseInitializer);
      this.loading = false;
      this.loaded = false;
      this.loader = arg0;
      return;
    }
  }
  let closure_0 = LazyPromiseInitializer;
  let obj = {
    key: "setParams",
    value(param) {
      const self = this;
      if (this.param !== param) {
        self.param = param;
        self.loading = false;
        self.loaded = false;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "get",
    value() {
      this.ensureLoaded();
      return this.val;
    }
  };
  items[1] = obj;
  obj = {
    key: "ensureLoaded",
    value() {
      const self = this;
      if (!this.loaded) {
        if (!self.loading) {
          if (undefined !== self.param) {
            const param = self.param;
            self.loading = true;
            self.loader(param).then((arg0) => {
              if (param === self.param) {
                self.val = arg0;
                self.loading = false;
                self.loaded = true;
              }
            });
            const loaderResult = self.loader(param);
          }
        }
      }
    }
  };
  items[2] = obj;
  return callback(LazyPromiseInitializer, items);
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/emoji_terms/LazyPromiseInitializer.tsx");

export default tmp2;
