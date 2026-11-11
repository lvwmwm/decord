// Module ID: 8471
// Function ID: 8472
// Name: parseCollectiblesSequencedOffers
// Dependencies: [2]
// Exports: default

// Module 8471 (parseCollectiblesSequencedOffers)
import size from "module_2" /* 2 */;

function parseSequencedOffer(assets) {
  assets = assets.assets;
  return { position: assets.position, cardShape: assets.card_shape, assets: { locked: assets.locked, hint: assets.hint, idleAnimation: assets.idle_animation, revealAnimation: assets.reveal_animation } };
}
const result = size.fileFinishedImporting("modules/collectibles/utils/parseCollectiblesSequencedOffers.tsx");

export default function parseCollectiblesSequencedOffers(collectionId) {
  let date;
  let date1;
  let promotions;
  const starts_at = collectionId.starts_at;
  const obj = { collectionId: collectionId.collection_id, startsAt: date, endsAt: date1, promotions: promotions.map(parseSequencedOffer) };
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
  return obj;
};
