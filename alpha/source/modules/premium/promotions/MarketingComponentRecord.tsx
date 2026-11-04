// Module ID: 9778
// Function ID: 9779
// Name: MarketingComponentRecord
// Dependencies: [1400, 1089, 1234, 9779, 9815, 1251, 2]

// Module 9778 (MarketingComponentRecord)
import DurationsDefault from "Durations" /* 1089 */;
import ProtoUtils from "ProtoUtils" /* 1234 */;
import _modDef1251 from "module_1251" /* 1251 */;
import premium_marketing_component_properties from "premium_marketing_component_properties" /* 9779 */;
import Record from "Record" /* 1400 */;
import size from "module_2" /* 2 */;

let startDate;

class MarketingComponentRecord extends Record {
  constructor(arg0) {
    const tmp = new MarketingComponentRecord(new.target, this);
    ({ id: tmp.id, componentType: tmp.componentType, properties: tmp.properties, promotionId: tmp.promotionId, startDate: tmp.startDate, endDate: tmp.endDate, effectiveStartDate: tmp.effectiveStartDate, effectiveEndDate: tmp.effectiveEndDate, promotionEndDate: tmp.promotionEndDate, promotionPriority: tmp.promotionPriority } = arg0);
    return tmp;
  }
  static createFromServer(start_date, startDate) {
    let component_type;
    let id;
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
    ({ id, component_type } = start_date);
    const obj = ProtoUtils;
    const b64ToProtoResult = obj.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, start_date.properties);
    const promotion_id = start_date.promotion_id;
    let tmp13 = date;
    if (date == null) {
      tmp13 = startDate;
    }
    let tmp14 = date1;
    if (date1 == null) {
      tmp14 = endDate;
    }
    let priority;
    if (startDate != null) {
      priority = startDate.priority;
    }
    if (priority == null) {
      priority = tmp10(9815).FALLBACK_PROMOTION_PRIORITY;
    }
    if (typeof MarketingComponentRecord === "function") {
      const self5 = this;
      const self6 = this;
      const tmp17 = new MarketingComponentRecord(tmp4, tmp, obj, startDate, require, MarketingComponentRecord, this, id, component_type, b64ToProtoResult, promotion_id, date, date1, tmp13);
      tmp17.id = id;
      tmp17.componentType = component_type;
      tmp17.properties = b64ToProtoResult;
      tmp17.promotionId = promotion_id;
      tmp17.startDate = date;
      tmp17.endDate = date1;
      tmp17.effectiveStartDate = tmp13;
      tmp17.effectiveEndDate = tmp14;
      tmp17.promotionEndDate = endDate;
      tmp17.promotionPriority = priority;
      return tmp17;
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
Object.defineProperty(MarketingComponentRecord.prototype, "isTimed", {
  get: function isTimed() {
    return null != this.startDate || null != this.endDate;
  },
  set: undefined
});
let result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentRecord.tsx");

export default MarketingComponentRecord;
