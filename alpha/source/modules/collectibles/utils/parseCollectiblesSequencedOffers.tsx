// Module ID: 6337
// Function ID: 6338
// Name: parseCollectiblesSequencedOffers
// Dependencies: [2]
// Exports: default

// Module 6337 (parseCollectiblesSequencedOffers)
import size from "module_2" /* 2 */;

function parseSequencedOffer(assets) {
  assets = assets.assets;
  return { position: assets.position, cardShape: assets.card_shape, assets: { locked: assets.locked, calendarLocked: assets.calendar_locked, hint: assets.hint, calendarHint: assets.calendar_hint, idleAnimation: assets.idle_animation, calendarIdleAnimation: assets.calendar_idle_animation, revealAnimation: assets.reveal_animation, calendarRevealAnimation: assets.calendar_reveal_animation } };
}
const result = size.fileFinishedImporting("modules/collectibles/utils/parseCollectiblesSequencedOffers.tsx");

export default function parseCollectiblesSequencedOffers(collectionId) {
  let date;
  let date1;
  let promotions;
  let prop;
  const starts_at = collectionId.starts_at;
  const obj = { collectionId: collectionId.collection_id, startsAt: date, endsAt: date1, promotions: promotions.map(parseSequencedOffer), helpCenterArticleId: prop };
  date = null;
  if (null != starts_at) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(starts_at);
  }
  const ends_at = collectionId.ends_at;
  date1 = null;
  if (null != ends_at) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date1 = new Date(ends_at);
  }
  promotions = collectionId.promotions;
  prop = collectionId.help_center_article_id;
  if (prop == null) {
    prop = null;
  }
  return obj;
};
