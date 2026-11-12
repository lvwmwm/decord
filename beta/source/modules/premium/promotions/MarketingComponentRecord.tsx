// Module ID: 9749
// Function ID: 9750
// Name: MarketingComponentRecord
// Dependencies: [1405, 1089, 9750, 1234, 9752, 9789, 1251, 2]

// Module 9749 (MarketingComponentRecord)
import DurationsDefault from "Durations" /* 1089 */;
import ProtoUtils from "ProtoUtils" /* 1234 */;
import _modDef1251 from "module_1251" /* 1251 */;
import MarketingSurfaceTypeUtils from "MarketingSurfaceTypeUtils" /* 9750 */;
import premium_marketing_component_properties from "premium_marketing_component_properties" /* 9752 */;
import Record from "Record" /* 1405 */;
import size from "module_2" /* 2 */;

let startDate;

class MarketingComponentRecord extends Record {
  constructor(arg0) {
    const tmp = new MarketingComponentRecord(new.target, this);
    ({ id: tmp.id, componentType: tmp.componentType, properties: tmp.properties, promotionId: tmp.promotionId, startDate: tmp.startDate, endDate: tmp.endDate, effectiveStartDate: tmp.effectiveStartDate, effectiveEndDate: tmp.effectiveEndDate, promotionEndDate: tmp.promotionEndDate, promotionPriority: tmp.promotionPriority } = arg0);
    return tmp;
  }
  static createFromServer(start_date, startDate) {
    let date = null;
    if (null != start_date.start_date) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(start_date.start_date);
    }
    let date1 = null;
    if (null != start_date.end_date) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date1 = new Date(start_date.end_date);
    }
    startDate = undefined;
    if (startDate != null) {
      startDate = startDate.startDate;
    }
    if (startDate == null) {
      startDate = null;
    }
    let endDate;
    if (startDate != null) {
      endDate = startDate.endDate;
    }
    if (endDate == null) {
      endDate = null;
    }
    const id = start_date.id;
    const obj = MarketingSurfaceTypeUtils;
    const result = obj.classifyMarketingSurfaceType(start_date.component_type);
    const obj2 = ProtoUtils;
    const b64ToProtoResult = obj2.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, start_date.properties);
    const promotion_id = start_date.promotion_id;
    let tmp14 = date;
    if (date == null) {
      tmp14 = startDate;
    }
    let tmp15 = date1;
    if (date1 == null) {
      tmp15 = endDate;
    }
    let priority;
    if (startDate != null) {
      priority = startDate.priority;
    }
    if (priority == null) {
      priority = tmp10(9789).FALLBACK_PROMOTION_PRIORITY;
    }
    if (typeof MarketingComponentRecord === "function") {
      const self5 = this;
      const self6 = this;
      const tmp18 = new MarketingComponentRecord(tmp4, tmp, obj2, startDate, require, MarketingComponentRecord, this, id, result, b64ToProtoResult, promotion_id, date, date1, tmp14);
      tmp18.id = id;
      tmp18.componentType = result;
      tmp18.properties = b64ToProtoResult;
      tmp18.promotionId = promotion_id;
      tmp18.startDate = date;
      tmp18.endDate = date1;
      tmp18.effectiveStartDate = tmp14;
      tmp18.effectiveEndDate = tmp15;
      tmp18.promotionEndDate = endDate;
      tmp18.promotionPriority = priority;
      return tmp18;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getFormatVariableValues(currentLocale) {
    let promotionEndDate;
    let promotionEndDate2;
    let toLocaleDateString;
    const self = this;
    if (null == this.promotionEndDate) {
      return {};
    } else {
      const _Date = Date;
      const self2 = this;
      const self3 = this;
      const promotionEndDate3 = self.promotionEndDate;
      const date = new Date();
      const time = promotionEndDate3.getTime();
      const diff = time - date.getTime();
      let num = 0;
      if (diff > 0) {
        const _Math = Math;
        num = Math.ceil(diff / DurationsDefault.Millis.DAY);
      }
      ({ promotionEndDate, promotionEndDate: promotionEndDate2 } = self);
      const obj = { days_left: num, promotion_end_date: toLocaleDateString(currentLocale, date1) };
      toLocaleDateString = promotionEndDate.toLocaleDateString;
      const fullYear = promotionEndDate2.getFullYear();
      return obj;
    }
  }
  isIncludedInRollout(id, date) {
    const self = this;
    if (this.isTimed) {
      if (null != self.effectiveStartDate) {
        const effectiveStartDate = self.effectiveStartDate;
        const time = date.getTime();
        const diff = time - effectiveStartDate.getTime();
        const _Math = Math;
        const _Math2 = Math;
        const result = 10000 * Math.min(1, Math.max(0, 0.2 * (diff / DurationsDefault.Millis.HOUR)));
        const _HermesInternal = HermesInternal;
        const obj = _modDef1251;
        return obj.v3("" + self.promotionId + ":" + id) % 10000 < result;
      }
    }
    return true;
  }
}
const prototype = MarketingComponentRecord.prototype;
Object.defineProperty(prototype, "surface", {
  get: function surface() {
    const properties = this.properties.properties;
    const oneofKind = properties.oneofKind;
    let tmp = null;
    if (null != oneofKind) {
      let tmp2 = properties[oneofKind];
      if (tmp2 == null) {
        tmp2 = null;
      }
      tmp = tmp2;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "isTimed", {
  get: function isTimed() {
    return null != this.startDate || null != this.endDate;
  },
  set: undefined
});
let result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentRecord.tsx");

export default MarketingComponentRecord;
