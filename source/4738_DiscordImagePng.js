// Module ID: 4738
// Function ID: 41094
// Name: DiscordImagePng
// Dependencies: []

// Module 4738 (DiscordImagePng)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = () => {
  class DiscordImagePng {
    constructor(arg0, arg1) {
      tmp = closure_4(this, DiscordImagePng);
      this.img = arg0;
      this.originalBuffer = arg1;
      return;
    }
  }
  const importDefault = DiscordImagePng;
  let obj = {
    key: "hasTransparency",
    value() {
      const self = this;
      if (4 !== this.img.ctype) {
        if (6 !== self.img.ctype) {
          return false;
        }
      }
      let num2 = 3;
      const uint8Array = new Uint8Array(DiscordImagePng(closure_2[3]).toRGBA8(self.img)[0]);
      if (3 < uint8Array.length) {
        while (uint8Array[num2] >= 255) {
          num2 = num2 + 4;
        }
        return true;
      }
      return false;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isAnimated",
    value() {
      return null != this.img.tabs.acTL;
    }
  };
  items[1] = obj;
  obj = {
    key: "isPng8",
    value() {
      let tmp = 3 === this.img.ctype;
      if (tmp) {
        tmp = this.img.depth <= 8;
      }
      return tmp;
    }
  };
  items[2] = obj;
  const obj1 = { key: "hasSrgbIccProfile" };
  let closure_0 = callback(async function() {
    let tmp2;
    const tmp = yield callback(closure_2[4]).load(this.originalBuffer, {});
    if (null == tmp.icc) {
      return true;
    } else {
      const icc = tmp.icc;
      const _Object = Object;
      const keys = Object.keys(icc);
      let num = 0;
      if (0 < keys.length) {
        while (true) {
          tmp2 = keys[num];
          if ("ICC Description" === tmp2) {
            let tmp3 = icc[tmp2];
            let description;
            if (null != tmp3) {
              description = tmp3.description;
            }
            let tmp5 = tmp3;
            if (null != description) {
              let tmp6 = tmp3;
              if ("" !== icc[tmp2].description) {
                break;
              }
            }
          }
          num = num + 1;
        }
        const formatted = icc[tmp2].description.toLowerCase();
        return formatted.includes("srgb");
      }
      return false;
    }
    const obj = callback(closure_2[4]);
  });
  obj1.value = function hasSrgbIccProfile() {
    return callback(...arguments);
  };
  items[3] = obj1;
  items[4] = {
    key: "getBuffer",
    value() {
      return this.originalBuffer;
    }
  };
  const items1 = [
    {
      key: "create",
      value(originalBuffer) {
        new DiscordImagePng(DiscordImagePng(closure_2[3]).decode(originalBuffer), originalBuffer);
      }
    }
  ];
  return callback2(DiscordImagePng, items, items1);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/media/web/utils/DiscordImagePng.tsx");

export const DiscordImagePng = tmp2;
