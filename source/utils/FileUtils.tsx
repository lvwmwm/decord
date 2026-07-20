// Module ID: 4666
// Function ID: 40471
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: anyFileTooLarge, classifyFile, fileUploadLimitRoadblockDescription, sizeString, transformNativeFile, uploadSumTooLarge

// Module 4666 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  type = name;
  const importDefault = type;
  let formatted;
  if (null != name) {
    formatted = name.toLowerCase();
  }
  let str = "";
  if (null != formatted) {
    str = formatted;
  }
  type = str;
  const found = importDefault(dependencyMap[4]).find(items, (reType) => {
    if (null != reType.reType) {
      if (null != arg1) {
        reType = reType.reType;
        let isMatch = reType.test(arg1);
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
  const userMaxFileSize = importDefault(dependencyMap[7]).getUserMaxFileSize(currentUser);
  if (null == guildId) {
    return userMaxFileSize;
  } else {
    const guild = guild.getGuild(guildId);
    if (null != guild) {
      let tmp5 = function getGuildMaxFileSize(guild) {
        const FileUploadPowerupHoldoutExperiment = guild(closure_2[6]).FileUploadPowerupHoldoutExperiment;
        const enabled = FileUploadPowerupHoldoutExperiment.getConfig({ location: "getGuildMaxFileSize" }).enabled;
        return closure_9.reduce((arg0, arg1) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg1;
          if (!enabled) {
            const features = arg0.features;
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
        }, closure_6);
      }(guild);
    } else {
      tmp5 = MAX_ATTACHMENT_SIZE;
    }
    const _Math = Math;
    return Math.max(tmp5, userMaxFileSize);
  }
  const obj = importDefault(dependencyMap[7]);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const GuildFeatures = tmp2.GuildFeatures;
const MAX_ATTACHMENT_SIZE = tmp2.MAX_ATTACHMENT_SIZE;
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = tmp3.MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE;
let obj = { reType: /^image\/vnd.adobe.photoshop/, klass: "photoshop" };
const items = [obj, , , , , , , , , , , , , ];
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
const items1 = [GuildFeatures.MAX_FILE_SIZE_250_MB, tmp3.MAX_GUILD_FILE_SIZE_250_MB];
const items2 = [items1, , ];
const items3 = [GuildFeatures.MAX_FILE_SIZE_100_MB, tmp3.MAX_GUILD_FILE_SIZE_100_MB];
items2[1] = items3;
const items4 = [GuildFeatures.MAX_FILE_SIZE_50_MB, tmp3.MAX_GUILD_FILE_SIZE_50_MB];
items2[2] = items4;
const result = arg1(dependencyMap[10]).fileFinishedImporting("utils/FileUtils.tsx");

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
export const sizeString = function sizeString(currentSize) {
  return importDefault(dependencyMap[5]).filesize(currentSize);
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
  maxSize = arg1(dependencyMap[8]).formatSize(maxSize / 1024, { useKibibytes: true });
  const obj = arg1(dependencyMap[8]);
  const premiumMaxSize = arg1(dependencyMap[8]).formatSize(closure_7 / 1024, { useKibibytes: true });
  const intl = arg1(dependencyMap[9]).intl;
  return intl.format(arg1(dependencyMap[9]).t.tRuxk9, { maxSize, premiumMaxSize, onClick });
};
