// Module ID: 13734
// Function ID: 13735
// Name: ConjureImageOptions
// Dependencies: [32, 1113, 4131, 7656, 2]
// Exports: answeredOptionIds, hasTypedAnswer, imageOptionCaption, imageOptionViewerSize, imageOptionsLayout, isImageQuestion, noImageAnswer, ownImageOption, ownImageUploadText, registrableDomain, uploadHint, viewableImageOptions

// Module 13734 (ConjureImageOptions)
import intl3 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import MaskedLinkStoreMethodsAdditional from "MaskedLinkStoreMethodsAdditional" /* 7656 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size_mod from "module_2" /* 2 */;

const f108187 = (image) => null != image.image;
let closure_4 = [];
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/clarification/ConjureImageOptions.tsx");

export function isImageQuestion(upload) {
  let someResult = true === upload.upload;
  if (!someResult) {
    const options = upload.options;
    someResult = options.some(f108187);
  }
  return someResult;
}
export function hasTypedAnswer(allow_custom) {
  let tmp = false !== allow_custom.allow_custom;
  if (tmp) {
    let tmp2 = true === allow_custom.upload;
    if (!tmp2) {
      let someResult = true === allow_custom.upload;
      if (!someResult) {
        const options = allow_custom.options;
        someResult = options.some(f108187);
      }
      tmp2 = !someResult;
    }
    tmp = tmp2;
  }
  return tmp;
}
export function imageOptionsLayout(options) {
  let str = "row";
  if (options.length > 4) {
    str = "gallery";
  }
  return str;
}
export function viewableImageOptions(items) {
  return items.flatMap((image) => {
    let items1;
    if (null != image.image) {
      const obj = { image: image.image };
      const merged = Object.assign(image);
      const items = [obj];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
}
export function answeredOptionIds(kind) {
  let tmp3;
  kind = undefined;
  if (kind != null) {
    kind = kind.kind;
  }
  if ("option" === kind) {
    const items = [kind.optionId];
    tmp3 = items;
  } else {
    let kind1;
    if (kind != null) {
      kind1 = kind.kind;
    }
    tmp3 = "multi" === kind1 ? kind.optionIds : closure_4;
  }
  return tmp3;
}
export function imageOptionViewerSize(value) {
  const bound = Math.max(1, 480 / Math.max(value.width, value.height));
  size = { width: Math.round(value.width * bound), height: Math.round(value.height * bound) };
  return size;
}
export function ownImageOption(image) {
  let intl;
  const obj = { id: "own:" + image.attachment.id, label: intl.string(_modDef4131.SUdqCQ), image: { attachment_id: image.attachment.id } };
  intl = intl3.intl;
  return obj;
}
export function registrableDomain(str) {
  str = str.toLowerCase();
  const parts = str.split(".");
  if (parts.length >= 2) {
    const obj2 = /^\d+$/;
    if (!obj2.test(parts[parts.length - 1])) {
      if (!str.includes(":")) {
        let num = -2;
        const tmp2 = _slicedToArray(parts.slice(-2), 2);
        let tmp3 = parts.length > 2;
        const first = tmp2[0];
        if (tmp3) {
          tmp3 = 2 === tmp2[1].length;
        }
        if (tmp3) {
          tmp3 = first.length <= 3;
        }
        const slice = parts.slice;
        if (tmp3) {
          num = -3;
        }
        const substr = slice(num);
        return substr.join(".");
      }
    }
  }
  return str;
}
export function imageOptionCaption(option) {
  let label;
  const image = option.image;
  let page_url;
  if (image != null) {
    page_url = image.page_url;
  }
  if (page_url == null) {
    const image2 = option.image;
    let url;
    if (image2 != null) {
      url = image2.url;
    }
    page_url = url;
  }
  let str = "";
  if (null != page_url) {
    const obj = MaskedLinkStoreMethodsAdditional;
    str = obj.getHostname(page_url);
  }
  if ("" !== str) {
    const str2 = str.toLowerCase();
    const parts = str2.split(".");
    let joined = str;
    if (parts.length >= 2) {
      joined = str;
      const obj3 = /^\d+$/;
      if (!obj3.test(parts[parts.length - 1])) {
        joined = str;
        if (!str.includes(":")) {
          let num2 = -2;
          const tmp7 = _slicedToArray(parts.slice(-2), 2);
          let tmp8 = parts.length > 2;
          const first = tmp7[0];
          if (tmp8) {
            tmp8 = 2 === tmp7[1].length;
          }
          if (tmp8) {
            tmp8 = first.length <= 3;
          }
          const slice = parts.slice;
          if (tmp8) {
            num2 = -3;
          }
          const substr = slice(num2);
          joined = substr.join(".");
        }
      }
    }
    label = joined;
  } else {
    label = option.label;
  }
  return label;
}
export function ownImageUploadText(question) {
  const intl = intl3.intl;
  const string = intl.string;
  const obj = /\bicons?\b/i;
  const isMatch = obj.test(question.question);
  const tmp2 = _modDef4131;
  return string(isMatch ? tmp2.qU4WN6 : tmp2.cbMDDB);
}
export function uploadHint(upload) {
  let tmp = null;
  if (true === upload.upload) {
    let stringResult;
    if (0 === upload.options.length) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(_modDef4131.ZZ641e);
    } else {
      let dkzChE;
      const intl = intl3.intl;
      const string = intl.string;
      if (1 === upload.options.length) {
        dkzChE = _modDef4131["2g3gk9"];
      } else {
        dkzChE = _modDef4131.dkzChE;
      }
      stringResult = string(dkzChE);
    }
    tmp = stringResult;
  }
  return tmp;
}
export function noImageAnswer() {
  let intl;
  const obj = { kind: "custom", text: intl.string(_modDef4131.zxSq2q) };
  intl = intl3.intl;
  return obj;
}
