// Module ID: 1788
// Function ID: 1789
// Dependencies: [41, 42]

// Module 1788
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class CSSCallbackStore {
  constructor(props) {
    _classCallCheck(this, CSSCallbackStore);
    this.callbacks = {};
    this.present = new Set();
    this.props = props;
    new Set();
  }
}
const entry = {
  key: "sync",
  value: function sync(callbacks) {
    const self = this;
    this.callbacks = callbacks;
    let flag = false;
    const props = this.props;
    for (const item10011 of props) {
      let tmp = item10011;
      let tmp2 = typeof callbacks[item10011] === "function";
      if (tmp2) {
        let present4 = self.present;
        if (!present4.has(tmp)) {
          let present = self.present;
          let addResult = present.add(tmp);
          flag = true;
        }
        continue;
      }
      let hasItem = !tmp2;
      if (hasItem) {
        let present2 = self.present;
        hasItem = present2.has(tmp);
      }
      if (hasItem) {
        let present3 = self.present;
        let deleteResult = present3.delete(tmp);
        flag = true;
      }
    }
    if (flag) {
      self.onPresenceChanged(self.present);
    }
  }
};
const items = [
  entry,
  {
    key: "detach",
    value: function detach() {
      this.sync({});
    }
  },
  {
    key: "invoke",
    value: function invoke(arg0, arg1) {
      const callbacks = this.callbacks;
      if (callbacks[arg0] != null) {
        callbacks[arg0](arg1);
      }
    }
  }
];

export default _createClassDefault(CSSCallbackStore, items);
