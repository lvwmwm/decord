// Module ID: 17153
// Function ID: 17154
// Name: conjurePublishCard
// Dependencies: [3827, 2]
// Exports: isConjurePublishCtaVisible, livePublishCardMessageId, publishCardServerName, publishNoticeMessage, showsOutdatedNotice, withLivePublishCard

// Module 17153 (conjurePublishCard)
import _modDef3827 from "module_3827" /* 3827 */;
import size from "module_2" /* 2 */;

const weakMap = new WeakMap();
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishCard.tsx");

export const isConjurePublishCtaVisible = function isConjurePublishCtaVisible(publish) {
  let tmp = null != publish;
  if (tmp) {
    const status = publish.status;
    let state;
    if (status != null) {
      state = status.state;
    }
    tmp = "unpublished" === state;
  }
  return tmp;
};
export const publishCardServerName = function publishCardServerName(name) {
  let combined = name;
  const arr = Array.from(name);
  if (arr.length > 24) {
    const substr = arr.slice(0, 23);
    const joined = substr.join("");
    const _HermesInternal = HermesInternal;
    combined = "" + joined.trimEnd() + "\u2026";
  }
  return combined;
};
export const livePublishCardMessageId = function livePublishCardMessageId(arg0, arg1) {
  if ("unpublished" !== arg1) {
    return null;
  } else {
    let diff = arg0.length - 1;
    if (0 <= diff) {
      while (null == arg0[diff].publishCta) {
        diff = diff - 1;
      }
      return arg0[diff].id;
    }
    return null;
  }
};
export const showsOutdatedNotice = function showsOutdatedNotice(publish) {
  return null != publish && publish.isUpdate && null == publish.disabledReason && true !== publish.publishing;
};
export const publishNoticeMessage = function publishNoticeMessage(notice, arg1) {
  if (notice.update) {
    const surface = notice.surface;
    if ("bot" === surface) {
      return _modDef3827.zfpeIL;
    } else if ("widget" === surface) {
      return _modDef3827.DxCfTh;
    } else if ("automod" === surface) {
      return _modDef3827["8ytGC3"];
    } else {
      return _modDef3827.WSmpBT;
    }
  } else {
    let MOrR29;
    if (null == arg1) {
      MOrR29 = _modDef3827.MOrR29;
    } else {
      MOrR29 = _modDef3827["/npn7F"];
    }
    return MOrR29;
  }
};
export const withLivePublishCard = function withLivePublishCard(stateFromStores1, stateFromStores2) {
  let id = null;
  if ("unpublished" === stateFromStores2) {
    let diff = stateFromStores1.length - 1;
    id = null;
    if (0 <= diff) {
      while (null == stateFromStores1[diff].publishCta) {
        diff = diff - 1;
        id = null;
      }
      id = stateFromStores1[diff].id;
    }
  }
  let mapped = stateFromStores1;
  if (!stateFromStores1.every((publishCta) => null == publishCta.publishCta || publishCta.id === id)) {
    mapped = stateFromStores1.map((publishCta) => {
      if (null != publishCta.publishCta) {
        if (publishCta.id !== id) {
          let value = weakMap.get(publishCta);
          const obj = weakMap;
          if (null == value) {
            const obj2 = { publishCta: null };
            const merged = Object.assign(publishCta);
            const result = obj.set(publishCta, obj2);
            value = obj2;
          }
          return value;
        }
      }
      return publishCta;
    });
  }
  return mapped;
};
