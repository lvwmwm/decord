// Module ID: 4997
// Function ID: 43238
// Name: LazyPromiseInitializer
// Dependencies: [513, 511, 513]

// Module 4997 (LazyPromiseInitializer)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

const result = items.fileFinishedImporting("modules/emoji_terms/LazyPromiseInitializer.tsx");

export default () => {
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
