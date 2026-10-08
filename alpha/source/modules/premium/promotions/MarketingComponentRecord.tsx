// Module ID: 10008
// Function ID: 10009
// Name: MarketingComponentRecord
// Dependencies: [1404, 1102, 1246, 10009, 1263, 2]

// Module 10008 (MarketingComponentRecord)
import DurationsDefault from "Durations" /* 1102 */;
import ProtoUtils from "ProtoUtils" /* 1246 */;
import _modDef1263 from "module_1263" /* 1263 */;
import premium_marketing_component_properties from "premium_marketing_component_properties" /* 10009 */;
import Record from "Record" /* 1404 */;
import size from "module_2" /* 2 */;

let startDate;

let closure_3 = { month: "long", day: "numeric", year: "numeric" };
class MarketingComponentRecord extends Record {
  constructor(arg0) {
    const tmp = new MarketingComponentRecord(new.target, this);
    ({ id: tmp.id, componentType: tmp.componentType, properties: tmp.properties, promotionId: tmp.promotionId, startDate: tmp.startDate, endDate: tmp.endDate, effectiveStartDate: tmp.effectiveStartDate, effectiveEndDate: tmp.effectiveEndDate, promotionEndDate: tmp.promotionEndDate } = arg0);
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
    let tmp11 = date;
    if (date == null) {
      tmp11 = startDate;
    }
    let tmp12 = date1;
    if (date1 == null) {
      tmp12 = endDate;
    }
    if (typeof MarketingComponentRecord === "function") {
      const self5 = this;
      const self6 = this;
      const tmp14 = new MarketingComponentRecord(tmp4, tmp, obj, MarketingComponentRecord, this, id, component_type, b64ToProtoResult, promotion_id, date, date1, tmp11, tmp12);
      tmp14.id = id;
      tmp14.componentType = component_type;
      tmp14.properties = b64ToProtoResult;
      tmp14.promotionId = promotion_id;
      tmp14.startDate = date;
      tmp14.endDate = date1;
      tmp14.effectiveStartDate = tmp11;
      tmp14.effectiveEndDate = tmp12;
      tmp14.promotionEndDate = endDate;
      return tmp14;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getFormatVariableValues(arg0) {
    let obj;
    let promotionEndDate;
    const self = this;
    if (null == this.promotionEndDate) {
      obj = {};
    } else {
      const promotionEndDate2 = self.promotionEndDate;
      const _Date = Date;
      const self2 = this;
      const self3 = this;
      const date = new Date();
      const time = promotionEndDate2.getTime();
      const diff = time - date.getTime();
      let num = 0;
      if (diff > 0) {
        const _Math = Math;
        num = Math.ceil(diff / DurationsDefault.Millis.DAY);
      }
      obj = { days_left: num, promotion_end_date: promotionEndDate.toLocaleDateString(arg0, closure_3) };
      promotionEndDate = self.promotionEndDate;
    }
    return obj;
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
        const obj = _modDef1263;
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
