// Module ID: 4670
// Function ID: 40550
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1838, 1849, 653, 1851, 22, 4671, 4057, 3776, 4025, 1212, 2]
// Exports: anyFileTooLarge, classifyFile, fileUploadLimitRoadblockDescription, sizeString, transformNativeFile, uploadSumTooLarge

// Module 4670 (_createForOfIteratorHelperLoose)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function makeFile(arg0, arg1, type) {
  const items = [arg0];
  const file = new File(items, arg1, { type });
  return file;
}
function classifyFileName(name, type) {
  let str = name;
  const importDefault = type;
  let formatted;
  if (null != name) {
    formatted = name.toLowerCase();
  }
  str = "";
  if (null != formatted) {
    str = formatted;
  }
  const found = importDefault(22).find(items, (reType) => {
    if (null != reType.reType) {
      if (null != closure_1) {
        reType = reType.reType;
        let isMatch = reType.test(closure_1);
      }
      return isMatch;
    }
    isMatch = null != reType.reName;
    if (isMatch) {
      isMatch = "" !== str;
    }
    if (isMatch) {
      const reName = reType.reName;
      isMatch = reName.test(str);
    }
  });
  let str2 = "unknown";
  if (null != found) {
    str2 = found.klass;
  }
  return str2;
}
function maxFileSize(guildId) {
  const currentUser = authStore.getCurrentUser();
  const userMaxFileSize = importDefault(3776).getUserMaxFileSize(currentUser);
  if (null == guildId) {
    return userMaxFileSize;
  } else {
    guild = guild.getGuild(guildId);
    if (null != guild) {
      let tmp5 = (function getGuildMaxFileSize(guild) {
        let closure_0 = guild;
        const FileUploadPowerupHoldoutExperiment = outer1_0(outer1_2[6]).FileUploadPowerupHoldoutExperiment;
        const enabled = FileUploadPowerupHoldoutExperiment.getConfig({ location: "getGuildMaxFileSize" }).enabled;
        return outer1_9.reduce((arg0, arg1) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg1;
          if (!enabled) {
            const features = guild.features;
            let tmp6 = arg0;
            if (features.has(tmp)) {
              tmp6 = arg0;
              if (tmp2 > arg0) {
                tmp6 = tmp2;
              }
            }
            let tmp4 = tmp6;
          } else {
            tmp4 = arg0;
          }
          return tmp4;
        }, outer1_6);
      })(guild);
    } else {
      tmp5 = MAX_ATTACHMENT_SIZE;
    }
    const _Math = Math;
    return Math.max(tmp5, userMaxFileSize);
  }
  const obj = importDefault(3776);
}
function getUploadFileSizeSum(arg0) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  const iter = tmp();
  let iter2 = iter;
  let num = 0;
  let num2 = 0;
  if (!iter.done) {
    do {
      num = num + iter2.value.size;
      let iter3 = tmp();
      iter2 = iter3;
      num2 = num;
      done = iter3.done;
    } while (!done);
  }
  return num2;
}
function getMaxRequestSize() {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    currentUser.isStaff();
  }
  return 524288000;
}
let GuildFeatures = ME.GuildFeatures;
const MAX_ATTACHMENT_SIZE = ME.MAX_ATTACHMENT_SIZE;
let closure_7 = GuildFeatures.MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE;
let obj = { reType: /^image\/vnd.adobe.photoshop/, klass: "photoshop" };
let items = [obj, , , , , , , , , , , , , ];
obj = { reType: /^image\/svg\+xml/, klass: "webcode" };
items[1] = obj;
obj = { reType: /^image\//, klass: "image" };
items[2] = obj;
items[3] = { reType: /^video\//, klass: "video" };
items[4] = { reName: /\.pdf$/, klass: "acrobat" };
items[5] = { reName: /\.ae/, klass: "ae" };
items[6] = { reName: /\.sketch$/, klass: "sketch" };
items[7] = { reName: /\.ai$/, klass: "ai" };
items[8] = { reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/, klass: "archive" };
items[9] = { reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|ts|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/, klass: "code" };
items[10] = { reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/, klass: "document" };
items[11] = { reName: /\.(?:xls|xlsx|numbers|csv)$/, klass: "spreadsheet" };
items[12] = { reName: /\.(?:html|xhtml|htm|xml|xsd|css|styl)$/, klass: "webcode" };
items[13] = { reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/, klass: "audio" };
const items1 = [GuildFeatures.MAX_FILE_SIZE_250_MB, GuildFeatures.MAX_GUILD_FILE_SIZE_250_MB];
const items2 = [items1, , ];
const items3 = [GuildFeatures.MAX_FILE_SIZE_100_MB, GuildFeatures.MAX_GUILD_FILE_SIZE_100_MB];
items2[1] = items3;
const items4 = [GuildFeatures.MAX_FILE_SIZE_50_MB, GuildFeatures.MAX_GUILD_FILE_SIZE_50_MB];
items2[2] = items4;
const result = require("ME").fileFinishedImporting("utils/FileUtils.tsx");

export const transformNativeFile = function transformNativeFile(data) {
  let tmp = data;
  if (!(data instanceof File)) {
    let str = "text/plain";
    if (null != arg1) {
      str = arg1;
    }
    tmp = makeFile(data.data.buffer, data.filename, str);
    const tmp2 = makeFile;
  }
  return tmp;
};
export { makeFile };
export const classifyFile = function classifyFile(file) {
  return classifyFileName(file.name, file.type);
};
export { classifyFileName };
export const sizeString = function sizeString(c2) {
  return importDefault(4671).filesize(c2);
};
export { maxFileSize };
export const anyFileTooLarge = function anyFileTooLarge(arg0, guildId) {
  let closure_0 = maxFileSize(guildId);
  return Array.from(arg0).some((size) => size.size > closure_0);
};
export { getUploadFileSizeSum };
export const uploadSumTooLarge = function uploadSumTooLarge(arg0) {
  getMaxRequestSize();
  return getUploadFileSizeSum(arg0) > 524288000;
};
export { getMaxRequestSize };
export const fileUploadLimitRoadblockDescription = function fileUploadLimitRoadblockDescription(maxSize) {
  let guildId;
  let onClick;
  maxSize = maxSize.maxSize;
  ({ guildId, onClick } = maxSize);
  if (null == maxSize) {
    maxSize = maxFileSize(guildId);
  }
  maxSize = require(4025) /* formatSize */.formatSize(maxSize / 1024, { useKibibytes: true });
  const obj = require(4025) /* formatSize */;
  const premiumMaxSize = require(4025) /* formatSize */.formatSize(closure_7 / 1024, { useKibibytes: true });
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.format(require(1212) /* getSystemLocale */.t.tRuxk9, { maxSize, premiumMaxSize, onClick });
};
