// Module ID: 9440
// Function ID: 9441
// Name: showUploadFileSizeError
// Dependencies: [1183, 1371, 1074, 4629, 1373, 1885, 7945, 5260, 4816, 9441, 9442, 5211, 5219, 9443, 1093, 7285, 1114, 4533, 5210, 4980, 2]
// Exports: default

// Module 9440 (showUploadFileSizeError)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1885 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4816 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4980 */;
import utils_UploadUtils from "utils/UploadUtils" /* 5219 */;
import KestrelExperiment from "KestrelExperiment" /* 5260 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7285 */;
import buildFileSizeLimitEventProperties from "buildFileSizeLimitEventProperties" /* 9441 */;
import getUploaderFileSizeMetrics from "getUploaderFileSizeMetrics" /* 9442 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9443 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1183 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const FileUploadErrorTypes = fn(4629).FileUploadErrorTypes;
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_8, PremiumUpsellTypes: closure_9 } = PremiumConstants);
const constants = { NITRO_UPSELL: "Nitro Upsell", OVER_MAX_SIZE: "Over Max Size" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_uploads/native/showUploadFileSizeError.tsx");

export default function showUploadFileSizeError(arg0) {
  ({ file, maxSize, analyticsLocations, errorReason } = arg0);
  let items;
  let items1;
  ({ baseMaxSize, guildId } = arg0);
  const currentUser = UserStore.getCurrentUser();
  const isPremiumExactlyResult = PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2.TIER_2);
  if (null != file.items) {
    let attachmentMimeTypes = tmp2(7945).getAttachmentMimeTypes(file.items);
    const tmp2Result = tmp2(7945);
  } else {
    attachmentMimeTypes = [];
  }
  items = [];
  items1 = [];
  if (null != file.items) {
    const items2 = file.items;
    const item = items2.forEach((postCompressionSize) => {
      let num = postCompressionSize.postCompressionSize;
      if (num == null) {
        num = 0;
      }
      items.push(num);
      items1.push(postCompressionSize.preCompressionSize);
    });
  }
  const kestrelConfig = KestrelExperiment.getKestrelConfig({ location: "native.showUploadFileSizeError" });
  const tmp2Result11 = KestrelExperiment;
  const tmp2Result12 = AppAnalyticsUtils;
  const tmp7 = constants;
  const obj2 = { guildId, channelId: null, userIndividualFileSizeLimit: null, numAttachments: null, preCompressionFileSizes: null, preCompressionAggregateSize: null, postCompressionFileSizes: null, postCompressionAggregateSize: null, attachmentMimeTypes: null, errorType: null, kestrelVariant: null };
  const tmp2Result13 = buildFileSizeLimitEventProperties;
  obj2.channelId = getUploaderFileSizeMetrics.getUploaderChannelId(file);
  obj2.userIndividualFileSizeLimit = baseMaxSize;
  obj2.numAttachments = file.attachmentsCount;
  obj2.preCompressionFileSizes = items1;
  obj2.preCompressionAggregateSize = file.totalPreCompressionSize;
  obj2.postCompressionFileSizes = items;
  obj2.postCompressionAggregateSize = file.totalPostCompressionSize;
  obj2.attachmentMimeTypes = attachmentMimeTypes;
  let ERROR_SOURCE_UNKNOWN = errorReason;
  if (errorReason == null) {
    ERROR_SOURCE_UNKNOWN = FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  obj2.errorType = ERROR_SOURCE_UNKNOWN;
  const tmp2Result14 = getUploaderFileSizeMetrics;
  obj2.kestrelVariant = KestrelExperiment.getKestrelVariantName(kestrelConfig);
  tmp2Result12.trackWithMetadata(constants.FILE_SIZE_LIMIT_EXCEEDED, tmp2Result13.buildFileSizeLimitEventProperties(obj2));
  let num = 0;
  if (!isPremiumExactlyResult) {
    let applyResult = maxSize;
    if (null != file.items) {
      applyResult = maxSize;
      if (errorReason !== FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN) {
        const _Math = Math;
        if (errorReason === tmp11.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE) {
          items1 = items;
        }
        const items3 = [];
        HermesBuiltin.arraySpread(items1, 0);
        applyResult = HermesBuiltin.apply(items3, _Math);
      }
    }
    num = applyResult;
  }
  let tmp21 = isPremiumExactlyResult;
  if (!isPremiumExactlyResult) {
    tmp21 = num > tmp2(5211).getNitroFileUploadLimitBytes({ location: "native.showUploadFileSizeError" });
    const tmp2Result16 = tmp2(5211);
  }
  if (!tmp21) {
    tmp21 = tmp20;
  }
  if (!tmp21) {
    tmp21 = errorReason === tmp19.ERROR_SOURCE_UNKNOWN;
  }
  const tmp2Result15 = KestrelExperiment;
  const obj3 = { alert_type: tmp21 ? constants.OVER_MAX_SIZE : constants.NITRO_UPSELL, num_attachments: file.attachmentsCount, total_attachment_size: file.currentSize, has_image: file.hasImage, has_video: file.hasVideo, is_premium: isPremiumExactlyResult, image_compression_quality: null, image_compression_setting_enabled: null };
  const tmp2Result17 = AppAnalyticsUtils;
  obj3.image_compression_quality = utils_UploadUtils.getImageCompressionQuality();
  obj3.image_compression_setting_enabled = UnsyncedUserSettingsStore.dataSavingMode;
  tmp2Result17.trackWithMetadata(tmp7.FILE_UPLOAD_ALERT_VIEWED, obj3);
  if (tmp21) {
    if (errorReason === tmp19.ERROR_SOURCE_UNKNOWN) {
      const intl4 = tmp2(1114).intl;
      let stringResult = intl4.string(tmp2(1114).t.B3vFdU);
      const intl5 = tmp2(1114).intl;
      let stringResult1 = intl5.string(tmp2(1114).t.zMEjJg);
    } else {
      if (kestrelConfig.enabled) {
        if (!kestrelConfig.isGA) {
          const intl = tmp2(1114).intl;
          stringResult = intl.string(tmp2(1114).t.bRYgjH);
        }
        const intl3 = tmp2(1114).intl;
        const formatToPlainString = intl3.formatToPlainString;
        const t = tmp2(1114).t;
        if (tmp20) {
          const obj4 = { maxSize: tmp2(4533).formatSize(tmp2(5210).MAX_TOTAL_ATTACHMENT_SIZE / tmp2(4533).BYTE_IN_KB, { useKibibytes: true }) };
          stringResult1 = formatToPlainString(t.tUOJdH, obj4);
          const tmp2Result19 = tmp2(4533);
        } else {
          const obj5 = { maxSize: tmp2(4533).formatSize(maxSize / tmp2(4533).BYTE_IN_KB, { useKibibytes: true }) };
          stringResult1 = formatToPlainString(t.fxEKdS, obj5);
          const tmp2Result20 = tmp2(4533);
        }
      }
      const intl2 = tmp2(1114).intl;
      stringResult = intl2.string(tmp2(1114).t["/tGlcj"]);
    }
    const obj6 = { title: stringResult, body: stringResult1 };
    AlertActionCreatorsDefault.show(obj6);
  } else {
    const obj7 = { initialUpsellKey: tmp2(1093).UpsellTypes.UPLOAD, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null, largestFileSize: null };
    const obj8 = { section: constants2.FILE_UPLOAD_POPOUT };
    obj7.analyticsLocation = obj8;
    const items4 = [];
    const obj13 = PremiumUpsellUtilsDefault;
    items4[HermesBuiltin.arraySpread(analyticsLocations, 0)] = AnalyticsLocationDefault.FILE_UPLOAD_POPOUT;
    obj7.analyticsLocations = items4;
    const obj9 = { type: constants3.UPLOAD_ERROR_UPSELL };
    obj7.analyticsProperties = obj9;
    obj7.largestFileSize = num;
    const result = obj13.handleShowUpsellAlert(obj7);
  }
};
