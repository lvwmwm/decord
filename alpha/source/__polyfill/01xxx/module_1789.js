// Module ID: 1789
// Function ID: 1790
// Dependencies: [41, 42, 1764]

// Module 1789
import _createClassDefault from "_createClass" /* 42 */;
import _mod1764 from "module_1764" /* 1764 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class CSSKeyframesRuleBase {
  constructor(cssRules_, arg1) {
    const self = this;
    let json = arg1;
    _classCallCheck(this, CSSKeyframesRuleBase);
    this.cssRules_ = cssRules_;
    const obj = CSSKeyframesRuleBase;
    if (arg1 == null) {
      const _JSON = JSON;
      json = JSON.stringify(cssRules_);
    }
    self.cssText_ = json;
    self.length_ = Object.keys(cssRules_).length;
    self.name_ = obj.generateNextKeyframeName();
  }
}
let obj = {
  key: "cssRules",
  get() {
    return this.cssRules_;
  }
};
const items = [
  obj,
  {
    key: "cssText",
    get() {
      return this.cssText_;
    }
  },
  {
    key: "length",
    get() {
      return this.length_;
    }
  },
  {
    key: "name",
    get() {
      return this.name_;
    }
  }
];
const entry = {
  key: "generateNextKeyframeName",
  value: function generateNextKeyframeName() {
    CSSKeyframesRuleBase.currentAnimationID = +CSSKeyframesRuleBase.currentAnimationID + 1;
    return "" + _mod1764.ANIMATION_NAME_PREFIX + +CSSKeyframesRuleBase.currentAnimationID;
  }
};
const items1 = [entry];
const tmp2 = _createClassDefault(CSSKeyframesRuleBase, items, items1);
tmp2.currentAnimationID = 0;

export default tmp2;
