// Module ID: 12541
// Function ID: 12542
// Name: conjurePublishCard
// Dependencies: [3865, 2]
// Exports: isConjurePublishCtaVisible, isPublishCardLive, livePublishCardMessageId, publishNoticeMessage, withLivePublishCard

// Module 12541 (conjurePublishCard)
import _modDef3865 from "module_3865" /* 3865 */;
import size from "module_2" /* 2 */;

const weakMap = new WeakMap();
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishCard.tsx");

export function isPublishCardLive(reason, newUiUnpublished) {
  let tmp = null != newUiUnpublished;
  if (tmp) {
    let tmp3;
    if ("new_ui" === reason.reason) {
      tmp3 = true === newUiUnpublished.newUiUnpublished;
    } else {
      tmp3 = "not_live" === newUiUnpublished.publishState;
    }
    tmp = tmp3;
  }
  return tmp;
}
export function isConjurePublishCtaVisible(publish, cta) {
  let tmp = null != publish;
  if (tmp) {
    const status = publish.status;
    let tmp2 = null != status;
    if (tmp2) {
      let tmp4;
      if ("new_ui" === cta.reason) {
        tmp4 = true === status.newUiUnpublished;
      } else {
        tmp4 = "not_live" === status.publishState;
      }
      tmp2 = tmp4;
    }
    tmp = tmp2;
  }
  return tmp;
}
export function livePublishCardMessageId(arg0, newUiUnpublished) {
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
        tmp5 = "not_live" === newUiUnpublished.publishState;
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
}
export function publishNoticeMessage(notice, name, automod) {
  let prop;
  if (true === notice.commands_failed) {
    prop = _modDef3865["PrQg+B"];
  } else if (true === notice.channel_skipped) {
    prop = _modDef3865.ev23Cw;
  } else if (notice.update) {
    prop = _modDef3865.gQzuLC;
  } else {
    const tmp = automod;
    if (tmp) {
      prop = _modDef3865.KORRGl;
    } else if (null == name) {
      prop = _modDef3865.MOrR29;
    } else {
      prop = _modDef3865["/npn7F"];
    }
  }
  return prop;
}
export function withLivePublishCard(stateFromStores1, stateFromStores2) {
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
        tmp6 = "not_live" === stateFromStores2.publishState;
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
}
