// Module ID: 128
// Function ID: 2131
// Name: castToNumber
// Dependencies: [6, 7, 99, 100, 129]

// Module 128 (castToNumber)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";
import setPlatformObject from "setPlatformObject";

function castToNumber(arg0) {
  let num = 0;
  if (arg0) {
    const _Number = Number;
    num = Number(arg0);
  }
  return num;
}
let closure_3 = importDefaultResult("x");
let closure_4 = importDefaultResult("y");
let closure_5 = importDefaultResult("width");
let closure_6 = importDefaultResult("height");
const tmp3 = (() => {
  class DOMRectReadOnly {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = DOMRectReadOnly(this, DOMRectReadOnly);
      definePropertyResult = Object.defineProperty(this, outer1_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, outer1_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, outer1_5, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(this, outer1_6, { writable: true, value: undefined });
      __setInternalXResult = this.__setInternalX(arg0);
      __setInternalYResult = this.__setInternalY(arg1);
      __setInternalWidthResult = this.__setInternalWidth(arg2);
      __setInternalHeightResult = this.__setInternalHeight(arg3);
      return;
    }
  }
  let obj = {
    key: "x",
    get() {
      return outer1_2(this, outer1_3)[outer1_3];
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "y",
    get() {
      return outer1_2(this, outer1_4)[outer1_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "width",
    get() {
      return outer1_2(this, outer1_5)[outer1_5];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "height",
    get() {
      return outer1_2(this, outer1_6)[outer1_6];
    }
  };
  items[4] = {
    key: "top",
    get() {
      const tmp = outer1_2(this, outer1_6)[outer1_6];
      const tmp2 = outer1_2(this, outer1_4)[outer1_4];
      let sum = tmp2;
      if (tmp < 0) {
        sum = tmp2 + tmp;
      }
      return sum;
    }
  };
  items[5] = {
    key: "right",
    get() {
      const tmp = outer1_2(this, outer1_5)[outer1_5];
      const tmp2 = outer1_2(this, outer1_3)[outer1_3];
      let sum = tmp2;
      if (tmp >= 0) {
        sum = tmp2 + tmp;
      }
      return sum;
    }
  };
  items[6] = {
    key: "bottom",
    get() {
      const tmp = outer1_2(this, outer1_6)[outer1_6];
      const tmp2 = outer1_2(this, outer1_4)[outer1_4];
      let sum = tmp2;
      if (tmp >= 0) {
        sum = tmp2 + tmp;
      }
      return sum;
    }
  };
  items[7] = {
    key: "left",
    get() {
      const tmp = outer1_2(this, outer1_5)[outer1_5];
      const tmp2 = outer1_2(this, outer1_3)[outer1_3];
      let sum = tmp2;
      if (tmp < 0) {
        sum = tmp2 + tmp;
      }
      return sum;
    }
  };
  items[8] = {
    key: "toJSON",
    value: function toJSON() {
      return { x: this.x, y: this.y, width: this.width, height: this.height, top: this.top, left: this.left, bottom: this.bottom, right: this.right };
    }
  };
  items[9] = {
    key: "__getInternalX",
    value: function __getInternalX() {
      return outer1_2(this, outer1_3)[outer1_3];
    }
  };
  items[10] = {
    key: "__getInternalY",
    value: function __getInternalY() {
      return outer1_2(this, outer1_4)[outer1_4];
    }
  };
  items[11] = {
    key: "__getInternalWidth",
    value: function __getInternalWidth() {
      return outer1_2(this, outer1_5)[outer1_5];
    }
  };
  items[12] = {
    key: "__getInternalHeight",
    value: function __getInternalHeight() {
      return outer1_2(this, outer1_6)[outer1_6];
    }
  };
  items[13] = {
    key: "__setInternalX",
    value: function __setInternalX(arg0) {
      outer1_2(this, outer1_3)[outer1_3] = outer1_8(arg0);
    }
  };
  items[14] = {
    key: "__setInternalY",
    value: function __setInternalY(DOMRectReadOnly) {
      outer1_2(this, outer1_4)[outer1_4] = outer1_8(DOMRectReadOnly);
    }
  };
  items[15] = {
    key: "__setInternalWidth",
    value: function __setInternalWidth(arg0) {
      outer1_2(this, outer1_5)[outer1_5] = outer1_8(arg0);
    }
  };
  items[16] = {
    key: "__setInternalHeight",
    value: function __setInternalHeight(arg0) {
      outer1_2(this, outer1_6)[outer1_6] = outer1_8(arg0);
    }
  };
  const items1 = [
    {
      key: "fromRect",
      value: function fromRect(arg0) {
        let tmp = DOMRectReadOnly;
        if (arg0) {
          const prototype2 = tmp.prototype;
          tmp = new tmp(arg0.x, arg0.y, arg0.width, arg0.height);
        } else {
          const prototype = tmp.prototype;
          tmp = new tmp();
        }
        return tmp;
      }
    }
  ];
  return callback(DOMRectReadOnly, items, items1);
})();
let closure_7 = tmp3;
setPlatformObject = {
  clone(arg0) {
    return new closure_7(arg0.x, arg0.y, arg0.width, arg0.height);
  }
};
setPlatformObject.setPlatformObject(tmp3, setPlatformObject);

export default tmp3;
