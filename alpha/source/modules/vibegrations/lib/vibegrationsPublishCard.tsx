// Module ID: 16692
// Function ID: 16693
// Name: vibegrationsPublishCard
// Dependencies: [3723, 2]
// Exports: isVibegrationsPublishCtaVisible, livePublishCardMessageId, publishCardServerName, publishNoticeMessage, showsOutdatedNotice, withLivePublishCard

// Module 16692 (vibegrationsPublishCard)
import _modDef3723 from "module_3723" /* 3723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPublishCard.tsx");

export const isVibegrationsPublishCtaVisible = function isVibegrationsPublishCtaVisible(publish) {
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
export const showsOutdatedNotice = function showsOutdatedNotice(isUpdate) {
  return null != isUpdate && isUpdate.isUpdate && null == isUpdate.disabledReason && true !== isUpdate.publishing;
};
export const publishNoticeMessage = function publishNoticeMessage(notice) {
  if (notice.update) {
    const surface = notice.surface;
    if ("bot" === surface) {
      return _modDef3723.ncJb2S;
    } else if ("widget" === surface) {
      return _modDef3723.gSpqdm;
    } else if ("automod" === surface) {
      return _modDef3723.M3cBMT;
    } else {
      return _modDef3723.tg9fgb;
    }
  } else {
    return _modDef3723.ogEl54;
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
      let tmp = publishCta;
      if (null != publishCta.publishCta) {
        tmp = publishCta;
        if (publishCta.id !== id) {
          const obj = { publishCta: null };
          const merged = Object.assign(publishCta);
          tmp = obj;
        }
      }
      return tmp;
    });
  }
  return mapped;
};
