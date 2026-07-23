// Module ID: 9310
// Function ID: 72730
// Name: ChatManager
// Dependencies: [6, 7, 7622, 9311, 636, 2]

// Module 9310 (ChatManager)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import Changeset from "Changeset";

let closure_4;
let closure_5;
({ Changeset: closure_4, RowType: closure_5 } = Changeset);
let obj = {
  determineChangeType() {
    return constants.NOOP;
  },
  determineChangeTypeForUploadProgress(arg0) {
    return constants.NOOP;
  },
  determineChangeTypeForEmbeddedActivity() {
    return constants.NOOP;
  },
  getBlocked(closure_0) {
    return false;
  },
  getIgnored(closure_0) {
    return false;
  }
};
let tmp3 = (() => {
  class ChatManager {
    constructor() {
      tmp = outer1_2(this, ChatManager);
      this._messages = null;
      this._rows = [];
      this.messages = null;
      this.rows = [];
      this.rowIndex = 0;
      this.maybeRemove = false;
      this.uploadProgressIds = {};
      this.embeddedActivities = {};
      return;
    }
  }
  let obj = {
    key: "getPreviousMessages",
    value() {
      return this._messages;
    }
  };
  let items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getPreviousRows",
    value() {
      return this._rows;
    }
  };
  items[1] = obj;
  obj = {
    key: "getBlocked",
    value(blocked) {
      const self = this;
      if (null != this._messages) {
        const _Array = Array;
        if (!Array.isArray(self._messages)) {
          let tmp3 = null != tmp2;
          if (tmp3) {
            tmp3 = !(tmp2.blocked || !blocked.blocked);
            const tmp4 = tmp2.blocked || !blocked.blocked;
          }
          return tmp3;
        }
      }
      return false;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIgnored",
    value(ignored) {
      const self = this;
      if (null != this._messages) {
        const _Array = Array;
        if (!Array.isArray(self._messages)) {
          let tmp3 = null != tmp2;
          if (tmp3) {
            tmp3 = !(tmp2.ignored || !ignored.ignored);
            const tmp4 = tmp2.ignored || !ignored.ignored;
          }
          return tmp3;
        }
      }
      return false;
    }
  };
  items[4] = {
    key: "clear",
    value() {
      this._messages = null;
      this._rows = [];
      this.embeddedActivities = {};
    }
  };
  items[5] = {
    key: "finishUpdate",
    value(_messages, _rows) {
      this._messages = _messages;
      this._rows = _rows;
    }
  };
  items[6] = {
    key: "getLastRow",
    value() {
      const self = this;
      let tmp = null;
      if (null != this.rows) {
        tmp = null;
        if (self.rows.length > 0) {
          tmp = self.rows[self.rows.length - 1];
        }
      }
      return tmp;
    }
  };
  items[7] = {
    key: "setup",
    value(messages) {
      const self = this;
      this.messages = messages;
      this.rows = [];
      this.rowIndex = 0;
      const _messages = this._messages;
      let length;
      if (null != _messages) {
        length = _messages.length;
      }
      self.maybeRemove = length === self.messages.length;
    }
  };
  items[8] = {
    key: "determineChangeTypeForUploadProgress",
    value(items) {
      let self = this;
      if (null != this.uploadProgressIds[items.id]) {
        items = tmp.items;
        let length;
        if (null != items) {
          length = items.length;
        }
        const items1 = items.items;
        let length1;
        if (null != items1) {
          length1 = items1.length;
        }
        if (length === length1) {
          if (tmp.compressionProgress === items.compressionProgress) {
            if (tmp.progress === items.progress) {
              if (tmp.currentSize === items.currentSize) {
                let UPDATE = outer1_4.NOOP;
              }
            }
          }
        }
        self.uploadProgressIds[items.id] = items;
        self = outer1_4;
        UPDATE = outer1_4.UPDATE;
      } else {
        self.uploadProgressIds[items.id] = items;
        return outer1_4.INSERT;
      }
    }
  };
  items[9] = {
    key: "determineChangeTypeForEmbeddedActivity",
    value(arg0) {
      const tmp = ChatManager(outer1_1[3])(arg0);
      this.embeddedActivities[tmp] = arg0;
      if (null != this.embeddedActivities[tmp]) {
        let INSERT = outer1_4.UPDATE;
      } else {
        INSERT = outer1_4.INSERT;
      }
      return INSERT;
    }
  };
  items[10] = {
    key: "determineChangeType",
    value(forceRender) {
      let message;
      let updateMessageIds;
      let flag = arg1;
      const self = this;
      ({ message, updateMessageIds } = forceRender);
      if (arg1 === undefined) {
        flag = false;
      }
      if (null == self._messages) {
        return outer1_4.NOOP;
      } else {
        const _Array = Array;
        if (Array.isArray(self._messages)) {
          return outer1_4.NOOP;
        } else if (null == self._messages._map) {
          return outer1_4.NOOP;
        } else {
          let tmp = tmp12;
          if (null == self._messages._map[message.id]) {
            tmp = tmp12;
            if (null != message.nonce) {
              if (null != self._messages._map[message.nonce]) {
                let INSERT = outer1_4.UPDATE;
              }
              return INSERT;
            }
          }
          if (null != tmp) {
            if (!forceRender.forceRender) {
              INSERT = ChatManager(outer1_1[4])(tmp, message) ? tmp4.NOOP : tmp4.UPDATE;
            }
            INSERT = outer1_4.UPDATE;
          }
          INSERT = outer1_4.INSERT;
        }
      }
    }
  };
  items[11] = {
    key: "createRow",
    value(type) {
      const self = this;
      self.rowIndex = +self.rowIndex + 1;
      type.index = +self.rowIndex;
      const rows = self.rows;
      rows.push(type);
      return type;
    }
  };
  items[12] = {
    key: "createChangeset",
    value() {
      const self = this;
      const items = [];
      if (null == this._messages) {
        let rows = self.rows;
      } else {
        let num = 0;
        let num2 = 0;
        let num3 = 0;
        if (0 < self._rows.length) {
          while (true) {
            if (num !== self.rows.length) {
              if (num3 !== self._rows.length) {
                let tmp19 = self._rows[num3];
                let tmp20 = self.rows[num];
                let changeType = tmp20.changeType;
                let tmp21 = outer1_4;
                if (outer1_4.NOOP !== changeType) {
                  let tmp22 = outer1_4;
                  if (outer1_4.UPDATE !== changeType) {
                    let tmp23 = outer1_4;
                    let INSERT = outer1_4.INSERT;
                    tmp20.index = num + num2;
                    let arr = items.push(tmp20);
                    let sum = num + 1;
                    let tmp10 = tmp;
                    let tmp11 = tmp2;
                    let sum2 = num2;
                    let sum1 = num3;
                    let tmp13 = tmp19;
                    let tmp14 = tmp20;
                    let tmp15 = tmp5;
                  }
                }
                if (tmp20.type === tmp19.type) {
                  let tmp47 = outer1_5;
                  if (tmp20.type !== outer1_5.SEPARATOR) {
                    let tmp25 = outer1_5;
                    if (tmp20.type !== outer1_5.LOADING) {
                      let tmp26 = outer1_5;
                      let tmp27 = outer1_4;
                      let tmp28 = tmp;
                      let tmp29 = tmp2;
                      if (tmp20.changeType !== outer1_4.NOOP) {
                        tmp20.index = num + num2;
                        arr = items.push(tmp20);
                        sum1 = num3 + 1;
                        sum = num + 1;
                        tmp10 = tmp28;
                        tmp11 = tmp29;
                        sum2 = num2;
                        tmp13 = tmp19;
                        tmp14 = tmp20;
                        tmp15 = tmp5;
                      } else {
                        let tmp48 = outer1_5;
                        if (tmp20.type !== outer1_5.SEPARATOR) {
                          let tmp32 = outer1_5;
                          if (tmp20.type !== outer1_5.LOADING) {
                            let tmp33 = outer1_5;
                            if (tmp20.type === outer1_5.BLOCKED_GROUP) {
                              let tmp30 = tmp;
                              let tmp31 = tmp2;
                              if (tmp20.text === tmp19.text) {
                                tmp30 = tmp;
                                tmp31 = tmp2;
                              }
                            } else {
                              let tmp34 = outer1_5;
                            }
                            let tmp35 = outer1_5;
                            if (tmp20.type === outer1_5.MESSAGE) {
                              if (tmp20.separatorBefore !== tmp19.separatorBefore) {
                                tmp30 = tmp;
                                tmp31 = tmp2;
                              }
                            }
                            let message = tmp20.message;
                            let isFirst;
                            if (null != message) {
                              isFirst = message.isFirst;
                            }
                            let message2 = tmp19.message;
                            let isFirst1;
                            if (null != message2) {
                              isFirst1 = message2.isFirst;
                            }
                            tmp28 = message;
                            tmp29 = message2;
                            tmp30 = message;
                            tmp31 = message2;
                          } else {
                            tmp30 = tmp;
                            tmp31 = tmp2;
                          }
                        } else {
                          tmp30 = tmp;
                          tmp31 = tmp2;
                        }
                        let tmp39 = outer1_4;
                        tmp20.changeType = outer1_4.UPDATE;
                        tmp20.index = num + num2;
                        let arr1 = items.push(tmp20);
                        sum1 = num3 + 1;
                        sum = num + 1;
                        tmp10 = tmp30;
                        tmp11 = tmp31;
                        sum2 = num2;
                        tmp13 = tmp19;
                        tmp14 = tmp20;
                        tmp15 = tmp5;
                      }
                    }
                  }
                }
                let obj = {};
                let tmp41 = outer1_4;
                obj.changeType = outer1_4.REMOVE;
                obj.index = num + num2;
                let arr2 = items.push(obj);
                if (num + num2 > 0) {
                  let num4 = 1;
                  let tmp43 = items[num + num2 - 1];
                  let tmp44 = outer1_4;
                  let maybeRemove = tmp43.changeType !== outer1_4.NOOP;
                  if (!maybeRemove) {
                    let tmp45 = outer1_5;
                    maybeRemove = tmp43.type !== outer1_5.MESSAGE;
                  }
                  if (!maybeRemove) {
                    maybeRemove = self.maybeRemove;
                  }
                  tmp5 = tmp43;
                  if (!maybeRemove) {
                    let tmp46 = outer1_4;
                    tmp43.changeType = outer1_4.UPDATE;
                    tmp5 = tmp43;
                  }
                }
                sum1 = num3 + 1;
                sum2 = num2 + 1;
                tmp15 = tmp5;
                tmp10 = tmp;
                tmp11 = tmp2;
                sum = num;
                tmp13 = tmp19;
                tmp14 = tmp20;
              } else {
                let tmp16 = self.rows[num];
                let tmp17 = outer1_4;
                tmp16.changeType = outer1_4.INSERT;
                tmp16.index = num + num2;
                let arr3 = items.push(tmp16);
                sum = num + 1;
                tmp10 = tmp;
                tmp11 = tmp2;
                sum2 = num2;
                sum1 = num3;
                tmp13 = tmp3;
                tmp14 = tmp4;
                tmp15 = tmp5;
              }
            } else {
              obj = {};
              let tmp6 = outer1_4;
              obj.changeType = outer1_4.REMOVE;
              obj.index = num + num2;
              let arr4 = items.push(obj);
              sum2 = num2 + 1;
              sum1 = num3 + 1;
              tmp10 = tmp;
              tmp11 = tmp2;
              sum = num;
              tmp13 = tmp3;
              tmp14 = tmp4;
              tmp15 = tmp5;
            }
            tmp = tmp10;
            tmp2 = tmp11;
            num = sum;
            num2 = sum2;
            num3 = sum1;
            tmp3 = tmp13;
            tmp4 = tmp14;
            tmp5 = tmp15;
            if (sum1 < self._rows.length) {
              continue;
            } else {
              tmp = tmp10;
              tmp2 = tmp11;
              num2 = sum2;
              num3 = sum1;
              tmp3 = tmp13;
              tmp4 = tmp14;
              tmp5 = tmp15;
              num = sum;
              if (sum >= self.rows.length) {
                break;
              }
            }
            continue;
          }
        } else {
          num = 0;
          num2 = 0;
          num3 = 0;
        }
        rows = items.filter((changeType) => changeType.changeType !== outer2_4.NOOP);
      }
      ({ messages: self._messages, rows: self._rows } = self);
      return rows;
    }
  };
  return callback(ChatManager, items);
})();
const result = require("Changeset").fileFinishedImporting("modules/messages/native/renderer/ChatManager.tsx");

export default tmp3;
export const MockChatManager = obj;
