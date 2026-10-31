// Module ID: 12576
// Function ID: 12577
// Name: conjurePublishCard
// Dependencies: [3868, 2]
// Exports: isConjurePublishCtaVisible, isPublishCardLive, livePublishCardMessageId, publishNoticeMessage, withLivePublishCard

// Module 12576 (conjurePublishCard)
import _modDef3868 from "module_3868" /* 3868 */;
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
  let KORRGl;
  if (true === notice.commands_failed) {
    const tmp11 = _modDef3868;
    KORRGl = tmp ? tmp11.ESu5eZ : tmp11["PrQg+B"];
  } else if (true === notice.channel_skipped) {
    const tmp8 = _modDef3868;
    KORRGl = tmp ? tmp8.ZnQW4S : tmp8.ev23Cw;
  } else {
    const update = notice.update;
    const tmp4 = _modDef3868;
    if (update) {
      KORRGl = tmp ? tmp4["LuS8a/"] : tmp4.gQzuLC;
    } else {
      const tmp5 = automod;
      if (tmp5) {
        KORRGl = tmp4.KORRGl;
      } else {
        KORRGl = tmp ? tmp4["/npn7F"] : tmp4.MOrR29;
      }
    }
  }
  return KORRGl;
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
