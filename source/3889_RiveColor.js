// Module ID: 3889
// Function ID: 32208
// Name: RiveColor
// Dependencies: [6, 7]

// Module 3889 (RiveColor)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export const RiveColor = (() => {
  class RiveColor {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = RiveColor(this, RiveColor);
      this.r = arg0;
      this.g = arg1;
      this.b = arg2;
      this.a = arg3;
      return;
    }
  }
  let obj = {
    key: "equals",
    value: function equals(arg0) {
      const self = this;
      let tmp2 = !tmp;
      if (!!arg0) {
        tmp2 = self.r === arg0.r && self.g === arg0.g && self.b === arg0.b && self.a === arg0.a;
        const tmp3 = self.r === arg0.r && self.g === arg0.g && self.b === arg0.b && self.a === arg0.a;
      }
      return tmp2;
    }
  };
  const items = [obj, ];
  obj = {
    key: "toInt",
    value: function toInt() {
      return (255 & this.a) << 24 | (255 & this.r) << 16 | (255 & this.g) << 8 | 255 & this.b;
    }
  };
  items[1] = obj;
  obj = {
    key: "fromHexString",
    value: function fromHexString(str) {
      const replaced = str.replace(/^#/, "");
      if (obj.test(replaced)) {
        const _parseInt = parseInt;
        const parsed = parseInt(replaced.slice(0, 2), 16);
        const _parseInt2 = parseInt;
        const parsed1 = parseInt(replaced.slice(2, 4), 16);
        const _parseInt3 = parseInt;
        const parsed2 = parseInt(replaced.slice(4, 6), 16);
        let num10 = 255;
        if (8 === replaced.length) {
          const _parseInt4 = parseInt;
          num10 = parseInt(replaced.slice(6, 8), 16);
        }
        const prototype2 = RiveColor.prototype;
        const tmp17 = new RiveColor(parsed, parsed1, parsed2, num10);
        return tmp17;
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("Rive invalid hex color: " + str);
        const prototype = RiveColor.prototype;
        const tmp5 = new RiveColor(0, 0, 0, 255);
        return tmp5;
      }
      obj = /^[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/;
    }
  };
  const items1 = [
    obj,
    {
      key: "fromInt",
      value: function fromInt(first) {
        return new RiveColor(first >> 16 & 255, first >> 8 & 255, 255 & first, first >> 24 & 255);
      }
    }
  ];
  return callback(RiveColor, items, items1);
})();
