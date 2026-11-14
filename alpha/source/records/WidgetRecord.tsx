// Module ID: 16184
// Function ID: 16185
// Name: WidgetRecord
// Dependencies: [1408, 2]

// Module 16184 (WidgetRecord)
import Record from "Record" /* 1408 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("records/WidgetRecord.tsx");
class WidgetRecord extends Record {
  constructor(id) {
    let anchor;
    const tmp7 = new WidgetRecord(tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
    const tmp8 = id.id || "";
    tmp7.id = tmp8;
    tmp7.layoutId = id.layoutId || "";
    ({ type: tmp7.type, anchor } = id);
    if (anchor == null) {
      anchor = {};
    }
    size = id.size;
    if (size == null) {
      size = {};
    }
    let top;
    if (typeof anchor.top === "number") {
      top = anchor.top;
    }
    let bottom;
    if (typeof anchor.bottom === "number") {
      bottom = anchor.bottom;
    }
    let left;
    if (typeof anchor.left === "number") {
      left = anchor.left;
    }
    let right;
    if (typeof anchor.right === "number") {
      right = anchor.right;
    }
    let tmp14 = bottom;
    let num = top;
    const tmp13 = null != top && null != bottom && "auto" === size.height;
    if (!tmp13) {
      let tmp15;
      if (null != bottom) {
        tmp15 = bottom;
      }
      tmp14 = tmp15;
      num = top;
    }
    let tmp17 = right;
    let num2 = left;
    const tmp16 = null != left && null != right && "auto" === size.width;
    if (!tmp16) {
      let tmp18;
      if (null != right) {
        tmp18 = right;
      }
      tmp17 = tmp18;
      num2 = left;
    }
    const tmp19 = null == num && null == tmp14;
    if (tmp19) {
      num = 0;
    }
    const tmp20 = null == num2 && null == tmp17;
    if (tmp20) {
      num2 = 0;
    }
    tmp7.anchor = { top: num, left: num2, bottom: tmp14, right: tmp17 };
    const size1 = { width: 0, height: 0 };
    const merged = Object.assign(id.size);
    tmp7.size = size1;
    const size2 = { width: "disabled", height: "isArray" };
    const merged1 = Object.assign(id.minSize);
    tmp7.minSize = size2;
    tmp7.pinned = id.pinned;
    tmp7.hidden = id.hidden;
    tmp7.zIndex = id.zIndex || 0;
    let num3 = id.opacity;
    if (num3 == null) {
      num3 = 1;
    }
    tmp7.opacity = num3;
    const obj = {};
    const merged2 = Object.assign(id.meta);
    tmp7.meta = obj;
    if (null != id.showExtrasHintTimestamp) {
      tmp7.showExtrasHintTimestamp = id.showExtrasHintTimestamp;
    }
    return tmp7;
  }
}

export default WidgetRecord;
