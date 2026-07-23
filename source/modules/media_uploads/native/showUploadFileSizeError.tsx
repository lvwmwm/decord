// Module ID: 7940
// Function ID: 63401
// Name: showUploadFileSizeError
// Dependencies: [1280, 1849, 653, 4123, 1851, 1872, 7085, 4711, 4324, 4666, 4674, 7941, 668, 5484, 1212, 4025, 4470, 2]
// Exports: default

// Module 7940 (showUploadFileSizeError)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";
import { FileUploadErrorTypes } from "MESSAGE_GROUP_SPACING";
import GuildFeatures from "GuildFeatures";

let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_5, AnalyticsSections: closure_6 } = ME);
({ PremiumTypes: closure_8, PremiumUserLimits: closure_9, PremiumUpsellTypes: closure_10 } = GuildFeatures);
let closure_11 = { NITRO_UPSELL: "Nitro Upsell", OVER_MAX_SIZE: "Over Max Size" };
let result = require("ME").fileFinishedImporting("modules/media_uploads/native/showUploadFileSizeError.tsx");

export default function showUploadFileSizeError(arg0) {
  let analyticsLocations;
  let errorReason;
  let file;
  let maxSize;
  ({ file, maxSize, analyticsLocations, errorReason } = arg0);
  let items;
  let items1;
  currentUser = currentUser.getCurrentUser();
  let obj = items(1872);
  const isPremiumExactlyResult = obj.isPremiumExactly(currentUser, closure_8.TIER_2);
  if (null != file.items) {
    let obj1 = items(7085);
    let attachmentMimeTypes = obj1.getAttachmentMimeTypes(file.items);
  } else {
    attachmentMimeTypes = [];
  }
  items = [];
  items1 = [];
  if (null != file.items) {
    const items2 = file.items;
    const item = items2.forEach((postCompressionSize) => {
      postCompressionSize = postCompressionSize.postCompressionSize;
      let num = 0;
      if (null != postCompressionSize) {
        num = postCompressionSize;
      }
      items.push(num);
      items1.push(postCompressionSize.preCompressionSize);
    });
  }
  let obj2 = items(4711);
  const kestrelConfig = obj2.getKestrelConfig({ location: "native.showUploadFileSizeError" });
  let obj3 = items(4324);
  obj = { user_individual_file_size_limit: maxSize, num_attachments: file.attachmentsCount, pre_compression_file_sizes: items1, pre_compression_aggregate_file_size: file.totalPreCompressionSize, post_compression_file_sizes: items, post_compression_aggregate_file_size: file.totalPostCompressionSize, attachment_mimetypes: attachmentMimeTypes };
  let ERROR_SOURCE_UNKNOWN = errorReason;
  if (null == errorReason) {
    ERROR_SOURCE_UNKNOWN = FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  obj.error_type = ERROR_SOURCE_UNKNOWN;
  let obj5 = items(4711);
  obj.kestrel_variant = obj5.getKestrelVariantName(kestrelConfig);
  obj3.trackWithMetadata(constants.FILE_SIZE_LIMIT_EXCEEDED, obj);
  let num2 = 0;
  if (!isPremiumExactlyResult) {
    let applyResult = maxSize;
    if (null != file.items) {
      applyResult = maxSize;
      if (errorReason !== FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN) {
        const _Math = Math;
        if (errorReason === FileUploadErrorTypes.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE) {
          items1 = items;
        }
        const items3 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
        applyResult = HermesBuiltin.apply(items3, _Math);
      }
    }
    num2 = applyResult;
  }
  let tmp19 = errorReason === FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE;
  if (!tmp19) {
    tmp19 = errorReason === FileUploadErrorTypes.PRECOMPRESSION_SUM_TOO_LARGE;
  }
  let tmp21 = isPremiumExactlyResult;
  if (!isPremiumExactlyResult) {
    tmp21 = num2 > table[closure_8.TIER_2].fileSize;
  }
  if (!tmp21) {
    tmp21 = num2 > items(4666).MAX_TOTAL_ATTACHMENT_SIZE;
  }
  if (!tmp21) {
    tmp21 = tmp19;
  }
  if (!tmp21) {
    tmp21 = errorReason === FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  let obj6 = items(4324);
  obj = { alert_type: tmp21 ? tmp27.OVER_MAX_SIZE : tmp27.NITRO_UPSELL, num_attachments: file.attachmentsCount, total_attachment_size: file.currentSize, has_image: file.hasImage, has_video: file.hasVideo, is_premium: isPremiumExactlyResult };
  let obj8 = items(4674);
  obj.image_compression_quality = obj8.getImageCompressionQuality();
  obj.image_compression_setting_enabled = dataSavingMode.dataSavingMode;
  obj6.trackWithMetadata(constants.FILE_UPLOAD_ALERT_VIEWED, obj);
  if (tmp21) {
    if (errorReason === FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN) {
      const intl2 = items(1212).intl;
      let stringResult = intl2.string(items(1212).t.B3vFdU);
      const intl3 = items(1212).intl;
      let stringResult1 = intl3.string(items(1212).t.zMEjJg);
    } else {
      const intl4 = items(1212).intl;
      const string = intl4.string;
      const t2 = items(1212).t;
      if (kestrelConfig.enabled) {
        stringResult = string(t2.bRYgjH);
      } else {
        stringResult = string(t2["/tGlcj"]);
      }
      const intl = items(1212).intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = items(1212).t;
      if (tmp19) {
        obj1 = {};
        let tmp41Result = tmp41(4025);
        obj2 = { useKibibytes: true };
        obj1.maxSize = tmp41Result.formatSize(tmp41(4666).MAX_TOTAL_ATTACHMENT_SIZE / tmp41(4025).BYTE_IN_KB, obj2);
        stringResult1 = formatToPlainString(t.tUOJdH, obj1);
      } else {
        obj3 = {};
        tmp41Result = tmp41(4025);
        const obj4 = { useKibibytes: true };
        obj3.maxSize = tmp41Result.formatSize(maxSize / tmp41(4025).BYTE_IN_KB, obj4);
        stringResult1 = formatToPlainString(t.fxEKdS, obj3);
      }
    }
    obj5 = { title: stringResult, body: stringResult1 };
    items1(4470).show(obj5);
    const obj20 = items1(4470);
  } else {
    obj6 = { initialUpsellKey: items(668).UpsellTypes.UPLOAD };
    const obj7 = { section: constants2.FILE_UPLOAD_POPOUT };
    obj6.analyticsLocation = obj7;
    const items4 = [];
    arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
    items4[arraySpreadResult] = items1(5484).FILE_UPLOAD_POPOUT;
    const sum = arraySpreadResult + 1;
    obj6.analyticsLocations = items4;
    obj8 = { type: constants3.UPLOAD_ERROR_UPSELL };
    obj6.analyticsProperties = obj8;
    obj6.largestFileSize = num2;
    const result = items1(7941).handleShowUpsellAlert(obj6);
  }
};
