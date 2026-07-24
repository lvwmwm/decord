// Module ID: 7111
// Function ID: 57179
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1858, 1851, 2]

// Module 7111 (_isNativeReflectConstruct)
import closure_0 from "GuildFeatures";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import GuildFeatures from "GuildFeatures";
import importDefaultResult from "Record";
import tmp4 from "Record";

let DiscountUserUsageLimitIntervalTypes;
let SubscriptionIntervalTypes;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ SubscriptionIntervalTypes, DiscountUserUsageLimitIntervalTypes } = GuildFeatures);
let closure_5 = { [DiscountUserUsageLimitIntervalTypes.DAY]: SubscriptionIntervalTypes.DAY, [DiscountUserUsageLimitIntervalTypes.WEEK]: SubscriptionIntervalTypes.DAY, [DiscountUserUsageLimitIntervalTypes.MONTH]: SubscriptionIntervalTypes.MONTH, [DiscountUserUsageLimitIntervalTypes.YEAR]: SubscriptionIntervalTypes.YEAR };
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_offers/records/UserDiscountOfferRecord.tsx");

export default tmp4;
