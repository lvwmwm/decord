// Module ID: 6185
// Function ID: 6186
// Name: showUploadFileSizeError
// Dependencies: [1304, 1874, 676, 4182, 1876, 1897, 6152, 4768, 4384, 6186, 6187, 4723, 4731, 6188, 691, 5535, 1236, 4084, 4528, 2]
// Exports: default

// Module 6185 (showUploadFileSizeError)
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { FileUploadErrorTypes } from "MESSAGE_GROUP_SPACING";
import GuildFeatures from "GuildFeatures";

let c10;
let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
({ PremiumTypes: metroImportAll, PremiumUserLimits: c9, PremiumUpsellTypes: c10 } = GuildFeatures);
let closure_11 = { NITRO_UPSELL: "Nitro Upsell", OVER_MAX_SIZE: "Over Max Size" };
let result = require("ME").fileFinishedImporting("modules/media_uploads/native/showUploadFileSizeError.tsx");

export default function showUploadFileSizeError(arg0) {
  let analyticsLocations;
  let baseMaxSize;
  let errorReason;
  let file;
  let guildId;
  let maxSize;
  ({ file, maxSize, analyticsLocations, errorReason } = arg0);
  let items;
  let items1;
  ({ baseMaxSize, guildId } = arg0);
  currentUser = currentUser.getCurrentUser();
  let obj = items(1897);
  const isPremiumExactlyResult = obj.isPremiumExactly(currentUser, TIER_2.TIER_2);
  if (null != file.items) {
    let tmp2Result = tmp2(6152);
    let attachmentMimeTypes = tmp2Result.getAttachmentMimeTypes(file.items);
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
  tmp2Result = tmp2(4768);
  const kestrelConfig = tmp2Result.getKestrelConfig({ location: "native.showUploadFileSizeError" });
  const tmp2Result1 = items(4384);
  const tmp4 = TIER_2;
  const tmp8 = constants;
  obj = { guildId, channelId: null, userIndividualFileSizeLimit: null, numAttachments: null, preCompressionFileSizes: null, preCompressionAggregateSize: null, postCompressionFileSizes: null, postCompressionAggregateSize: null, attachmentMimeTypes: null, errorType: null, kestrelVariant: null };
  const tmp2Result2 = items(6186);
  obj[1] = items(6187).getUploaderChannelId(file);
  obj[2] = baseMaxSize;
  obj[3] = file.attachmentsCount;
  obj[4] = items1;
  obj[5] = file.totalPreCompressionSize;
  obj[6] = items;
  obj[7] = file.totalPostCompressionSize;
  obj[8] = attachmentMimeTypes;
  let ERROR_SOURCE_UNKNOWN = errorReason;
  if (errorReason == null) {
    ERROR_SOURCE_UNKNOWN = FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  obj[9] = ERROR_SOURCE_UNKNOWN;
  const tmp2Result3 = items(6187);
  obj[10] = items(4768).getKestrelVariantName(kestrelConfig);
  tmp2Result1.trackWithMetadata(constants.FILE_SIZE_LIMIT_EXCEEDED, tmp2Result2.buildFileSizeLimitEventProperties(obj));
  let num = 0;
  if (!isPremiumExactlyResult) {
    let applyResult = maxSize;
    if (null != file.items) {
      applyResult = maxSize;
      if (errorReason !== FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN) {
        const _Math = Math;
        if (errorReason === tmp12.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE) {
          items1 = items;
        }
        const items3 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
        applyResult = HermesBuiltin.apply(items3, _Math);
      }
    }
    num = applyResult;
  }
  let tmp22 = isPremiumExactlyResult;
  if (!isPremiumExactlyResult) {
    tmp22 = num > table[tmp4.TIER_2].fileSize;
  }
  if (!tmp22) {
    tmp22 = num > tmp2(4723).MAX_TOTAL_ATTACHMENT_SIZE;
  }
  if (!tmp22) {
    tmp22 = tmp21;
  }
  if (!tmp22) {
    tmp22 = errorReason === tmp20.ERROR_SOURCE_UNKNOWN;
  }
  const tmp2Result4 = items(4768);
  obj = { alert_type: tmp22 ? tmp24.OVER_MAX_SIZE : tmp24.NITRO_UPSELL, num_attachments: file.attachmentsCount, total_attachment_size: file.currentSize, has_image: file.hasImage, has_video: file.hasVideo, is_premium: isPremiumExactlyResult, image_compression_quality: null, image_compression_setting_enabled: null };
  const tmp2Result5 = items(4384);
  obj[6] = items(4731).getImageCompressionQuality();
  obj[7] = dataSavingMode.dataSavingMode;
  tmp2Result5.trackWithMetadata(tmp8.FILE_UPLOAD_ALERT_VIEWED, obj);
  if (tmp22) {
    if (errorReason === tmp20.ERROR_SOURCE_UNKNOWN) {
      const intl2 = tmp2(1236).intl;
      let stringResult = intl2.string(tmp2(1236).t.B3vFdU);
      const intl3 = tmp2(1236).intl;
      let stringResult1 = intl3.string(tmp2(1236).t.zMEjJg);
    } else {
      const intl4 = tmp2(1236).intl;
      const string = intl4.string;
      const t2 = tmp2(1236).t;
      if (kestrelConfig.enabled) {
        stringResult = string(t2.bRYgjH);
      } else {
        stringResult = string(t2["/tGlcj"]);
      }
      const intl = tmp2(1236).intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = tmp2(1236).t;
      if (tmp21) {
        const obj1 = { maxSize: null };
        obj1[0] = tmp2(4084).formatSize(tmp2(4723).MAX_TOTAL_ATTACHMENT_SIZE / tmp2(4084).BYTE_IN_KB, { useKibibytes: true });
        stringResult1 = formatToPlainString(t.tUOJdH, obj1);
        const tmp2Result7 = tmp2(4084);
      } else {
        const obj2 = { maxSize: null };
        obj2[0] = tmp2(4084).formatSize(maxSize / tmp2(4084).BYTE_IN_KB, { useKibibytes: true });
        stringResult1 = formatToPlainString(t.fxEKdS, obj2);
        const tmp2Result8 = tmp2(4084);
      }
    }
    const obj3 = { title: null, body: null };
    obj3[0] = stringResult;
    obj3[1] = stringResult1;
    items1(4528).show(obj3);
    const obj20 = items1(4528);
  } else {
    const obj4 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null, largestFileSize: null };
    obj4[0] = tmp2(691).UpsellTypes.UPLOAD;
    const obj5 = { section: null };
    obj5[0] = constants2.FILE_UPLOAD_POPOUT;
    obj4[1] = obj5;
    const items4 = [];
    arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
    items4[arraySpreadResult] = items1(5535).FILE_UPLOAD_POPOUT;
    obj4[2] = items4;
    const obj6 = { type: null };
    obj6[0] = constants3.UPLOAD_ERROR_UPSELL;
    obj4[3] = obj6;
    obj4[4] = num;
    const result = items1(6188).handleShowUpsellAlert(obj4);
  }
};
