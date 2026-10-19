// Module ID: 12128
// Function ID: 12129
// Name: conjurePublishCard
// Dependencies: [3883, 2]
// Exports: isConjurePublishCtaVisible, isPublishCardLive, livePublishCardMessageId, publishCardServerName, publishNoticeMessage, showsOutdatedNotice, withLivePublishCard

// Module 12128 (conjurePublishCard)
import _modDef3883 from "module_3883" /* 3883 */;
import size from "module_2" /* 2 */;

const weakMap = new WeakMap();
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishCard.tsx");

export const isPublishCardLive = function isPublishCardLive(reason, newUiUnpublished) {
  let tmp = null != newUiUnpublished;
  if (tmp) {
    let tmp3;
    if ("new_ui" === reason.reason) {
      tmp3 = true === newUiUnpublished.newUiUnpublished;
    } else {
      tmp3 = "unpublished" === newUiUnpublished.state;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isConjurePublishCtaVisible = function isConjurePublishCtaVisible(publish, cta) {
  let tmp = null != publish;
  if (tmp) {
    const status = publish.status;
    let tmp2 = null != status;
    if (tmp2) {
      let tmp4;
      if ("new_ui" === cta.reason) {
        tmp4 = true === status.newUiUnpublished;
      } else {
        tmp4 = "unpublished" === status.state;
      }
      tmp2 = tmp4;
    }
    tmp = tmp2;
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
export const livePublishCardMessageId = function livePublishCardMessageId(arg0, newUiUnpublished) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    const publishCta = arg0[diff].publishCta;
    while (null == publishCta) {
      diff = diff - 1;
    }
    let tmp4 = null != newUiUnpublished;
    if (tmp4) {
      let tmp5;
      if ("new_ui" === publishCta.reason) {
        tmp5 = true === newUiUnpublished.newUiUnpublished;
      } else {
        tmp5 = "unpublished" === newUiUnpublished.state;
      }
      tmp4 = tmp5;
    }
    let id = null;
    if (tmp4) {
      id = arg0[diff].id;
    }
    return id;
  }
  return null;
};
export const showsOutdatedNotice = function showsOutdatedNotice(isUpdate) {
  return null != isUpdate && isUpdate.isUpdate && null == isUpdate.disabledReason && true !== isUpdate.publishing;
};
export const publishNoticeMessage = function publishNoticeMessage(notice, arg1) {
  let ev23Cw;
  if (true === notice.channel_skipped) {
    ev23Cw = _modDef3883.ev23Cw;
  } else if (notice.update) {
    ev23Cw = _modDef3883.gQzuLC;
  } else if (null == arg1) {
    ev23Cw = _modDef3883.MOrR29;
  } else {
    ev23Cw = _modDef3883["/npn7F"];
  }
  return ev23Cw;
};
export const withLivePublishCard = function withLivePublishCard(stateFromStores1, stateFromStores2) {
  let diff = stateFromStores1.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    const publishCta = stateFromStores1[diff].publishCta;
    while (null == publishCta) {
      diff = diff - 1;
      tmp2 = null;
    }
    let tmp5 = null != stateFromStores2;
    if (tmp5) {
      let tmp6;
      if ("new_ui" === publishCta.reason) {
        tmp6 = true === stateFromStores2.newUiUnpublished;
      } else {
        tmp6 = "unpublished" === stateFromStores2.state;
      }
      tmp5 = tmp6;
    }
    let id = null;
    if (tmp5) {
      id = stateFromStores1[diff].id;
    }
    tmp2 = id;
  }
  id = tmp2;
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
