// Module ID: 10376
// Function ID: 80021
// Name: getRowMessageId
// Dependencies: []

// Module 10376 (getRowMessageId)
function getRowMessageId(rowType) {
  if (null != rowType) {
    if ("rowType" in rowType) {
      if (rowType.rowType === RowType.MESSAGE) {
        return rowType.message.id;
      }
    } else if (rowType.type === RowType.MESSAGE) {
      const message = rowType.message;
      let id;
      if (null != message) {
        id = message.id;
      }
      return id;
    }
  }
}
let closure_0 = importDefault(dependencyMap[1]);
const RowType = arg1(dependencyMap[2]).RowType;
class VisibleMessagesWindowHandler {
  constructor() {
    closure_0 = this;
    tmp = closure_0(this, VisibleMessagesWindowHandler);
    this.data = null;
    this.callback = null;
    this.setCallback = (callback) => {
      self.callback = callback;
      if (null != self.data) {
        self.callback(self.data);
      }
    };
    this.clearCallback = () => {
      self.callback = null;
      self.data = null;
    };
    this.handleScrollPosition = (arg0) => {
      let firstVisibleMessageRowIndex;
      let lastVisibleMessageRowIndex;
      let rows;
      ({ rows, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex } = arg0);
      if (null != self.callback) {
        let tmp2 = null;
        if (null != firstVisibleMessageRowIndex) {
          let diff = firstVisibleMessageRowIndex;
          tmp2 = null;
          if (firstVisibleMessageRowIndex >= 0) {
            tmp2 = callback(rows[diff]);
            while (null == tmp2) {
              diff = diff - 1;
              tmp2 = null;
              if (diff < 0) {
                break;
              }
            }
          }
        }
        let tmp4 = null;
        if (null != lastVisibleMessageRowIndex) {
          let sum = lastVisibleMessageRowIndex;
          tmp4 = null;
          if (lastVisibleMessageRowIndex < rows.length) {
            tmp4 = callback(rows[sum]);
            while (null == tmp4) {
              sum = sum + 1;
              tmp4 = null;
              if (sum >= rows.length) {
                break;
              }
            }
          }
        }
        let tmp7 = null;
        if (null != firstVisibleMessageRowIndex) {
          tmp7 = null;
          if (null != lastVisibleMessageRowIndex) {
            const _Math = Math;
            let sum1 = firstVisibleMessageRowIndex + Math.floor((lastVisibleMessageRowIndex - firstVisibleMessageRowIndex) / 2);
            tmp7 = null;
            if (sum1 < rows.length) {
              tmp7 = callback(rows[sum1]);
              while (null == tmp7) {
                sum1 = sum1 + 1;
                tmp7 = null;
                if (sum1 >= rows.length) {
                  break;
                }
              }
            }
          }
        }
        const obj = { topVisibleMessage: tmp2, middleVisibleMessage: tmp7, bottomVisibleMessage: tmp4 };
        self.data = obj;
        self.callback(self.data);
      }
    };
    return;
  }
}
const importDefaultResult = importDefault(dependencyMap[0]);
const importDefaultResultResult = importDefault(dependencyMap[0])(VisibleMessagesWindowHandler);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/messages/native/VisibleMessagesWindowHandler.tsx");

export default importDefaultResultResult;
